import React, { useRef, useState, useEffect } from "react";

interface ResizableGridProps {
  children: React.ReactNode;
  defaultLeftWidth?: number; 
  defaultTopHeight?: number; 
}

export default function ResizableGrid({ 
  children,
  defaultLeftWidth = 50,
  defaultTopHeight = 60
}: ResizableGridProps) {
  const [leftWidth, setLeftWidth] = useState(defaultLeftWidth);
  const [topHeight, setTopHeight] = useState(defaultTopHeight);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDraggingVertical, setIsDraggingVertical] = useState(false);
  const [isDraggingHorizontal, setIsDraggingHorizontal] = useState(false);

  const handleVerticalDrag = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newWidth = ((e.clientX - rect.left) / rect.width) * 100;
    setLeftWidth(Math.min(Math.max(newWidth, 20), 80));
  };

  const handleHorizontalDrag = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newHeight = ((e.clientY - rect.top) / rect.height) * 100;
    setTopHeight(Math.min(Math.max(newHeight, 20), 80));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingVertical) {
        handleVerticalDrag(e);
      }
      if (isDraggingHorizontal) {
        handleHorizontalDrag(e);
      }
    };

    const handleMouseUp = () => {
      setIsDraggingVertical(false);
      setIsDraggingHorizontal(false);
    };

    if (isDraggingVertical || isDraggingHorizontal) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = isDraggingVertical ? "col-resize" : "row-resize";
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDraggingVertical, isDraggingHorizontal]);

  const childArray = React.Children.toArray(children);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full"
      style={{
        display: "grid",
        gridTemplateColumns: `${leftWidth}% 4px ${100 - leftWidth}%`,
        gridTemplateRows: `${topHeight}% 4px ${100 - topHeight}%`,
      }}
    >
      {/* LEFT PANEL */}
      <div className="overflow-hidden bg-zinc-900" style={{ gridColumn: 1, gridRow: "1 / 4" }}>
        {childArray[0]}
      </div>

      {/* VERTICAL HANDLE */}
      <div
        className={`bg-zinc-800 hover:bg-blue-600 transition-colors cursor-col-resize flex items-center justify-center group ${
          isDraggingVertical ? "bg-blue-600" : ""
        }`}
        style={{ gridColumn: 2, gridRow: "1 / 4" }}
        onMouseDown={() => setIsDraggingVertical(true)}
      >
        <div className="bg-zinc-700 group-hover:bg-blue-500 h-8 w-1 rounded-full" />
      </div>

      {/* TOP RIGHT */}
      <div className="overflow-hidden bg-zinc-900" style={{ gridColumn: 3, gridRow: 1 }}>
        {childArray[1]}
      </div>

      {/* HORIZONTAL HANDLE */}
      <div
        className={`bg-zinc-800 hover:bg-blue-600 transition-colors cursor-row-resize flex items-center justify-center group ${
          isDraggingHorizontal ? "bg-blue-600" : ""
        }`}
        style={{ gridColumn: 3, gridRow: 2 }}
        onMouseDown={() => setIsDraggingHorizontal(true)}
      >
        <div className="bg-zinc-700 group-hover:bg-blue-500 w-8 h-1 rounded-full" />
      </div>

      {/* BOTTOM RIGHT */}
      <div className="overflow-hidden bg-zinc-900" style={{ gridColumn: 3, gridRow: 3 }}>
        {childArray[2]}
      </div>
    </div>
  );
}