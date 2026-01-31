import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Settings, Maximize2 } from "lucide-react";
import { useState } from "react";

export default function CodeEditor() {
  const [language, setLanguage] = useState("javascript");

  return (
    <div className="h-full flex flex-col bg-[#1C2541]">
      {/* Top Bar */}
      <div className="h-12 border-b border-[#2D3F66] flex items-center justify-between px-4 flex-shrink-0">
        <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger
            className="
            w-36
            bg-[#243A5E]
            border border-[#2A4D8F]
            text-[#EAF2FF]
            hover:bg-[#2A4D8F]
            focus:outline-none
            focus:ring-0
            focus-visible:ring-0
            shadow-none
            "
        >
            <SelectValue placeholder="Language" />
        </SelectTrigger>

        <SelectContent
            className="
            bg-[#243A5E]
            border border-[#2D3F66]
            text-[#EAF2FF]
            shadow-none
            "
        >
            <SelectItem
            value="javascript"
            className="
                text-[#EAF2FF]
                cursor-pointer
                hover:bg-[#4CC9F0]
                focus:bg-[#4CC9F0]
                data-[state=checked]:bg-[#3A86FF]
                data-[state=checked]:text-white
                focus:outline-none
            "
            >
            JavaScript
            </SelectItem>

            <SelectItem
            value="python"
            className="
                text-[#EAF2FF]
                cursor-pointer
                hover:bg-[#4CC9F0]
                focus:bg-[#4CC9F0]
                data-[state=checked]:bg-[#3A86FF]
                data-[state=checked]:text-white
                focus:outline-none
            "
            >
            Python
            </SelectItem>

            <SelectItem
            value="java"
            className="
                text-[#EAF2FF]
                cursor-pointer
                hover:bg-[#4CC9F0]
                focus:bg-[#4CC9F0]
                data-[state=checked]:bg-[#3A86FF]
                data-[state=checked]:text-white
                focus:outline-none
            "
            >
            Java
            </SelectItem>

            <SelectItem
            value="cpp"
            className="
                text-[#EAF2FF]
                cursor-pointer
                hover:bg-[#4CC9F0]
                focus:bg-[#4CC9F0]
                data-[state=checked]:bg-[#3A86FF]
                data-[state=checked]:text-white
                focus:outline-none
            "
            >
            C++
            </SelectItem>
        </SelectContent>
        </Select>



        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-[#243A5E] rounded transition-colors">
            <Settings className="w-4 h-4 text-[#A9C1E8]" />
          </button>
          <button className="p-2 hover:bg-[#243A5E] rounded transition-colors">
            <Maximize2 className="w-4 h-4 text-[#A9C1E8]" />
          </button>
        </div>
      </div>

      {/* Code Area with Scroll */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="p-4 font-mono text-sm text-[#A9C1E8]">
            <pre className="leading-relaxed">
              <code>{`/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // Write your solution here
    
};`}</code>
            </pre>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}