
import TopNavigation from "@/components/TopNavigation";
import ProblemDescription from "@/components/ProblemDescription";
import CodeEditor from "@/components/CodeEditor";
import TestCases from "@/components/TestCases";
import ResizableGrid from "@/components/CustomResizable";
import Statistics from "@/components/Statistics";

export default function Qotd() {
  return (
    <div className="h-screen w-full flex flex-col bg-[#1143d9] text-foreground dark overflow-hidden">
      <TopNavigation />
      <Statistics />
      <div className="flex-1 overflow-hidden">
        <ResizableGrid defaultLeftWidth={50} defaultTopHeight={60}>
          <ProblemDescription />
          <CodeEditor />
          <TestCases />
        </ResizableGrid>
      </div>
    </div>
  );
}