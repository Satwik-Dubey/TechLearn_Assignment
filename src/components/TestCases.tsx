import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function TestCases() {
  const [activeTab, setActiveTab] = useState<"testcase" | "result">("testcase");
  const [selectedCase, setSelectedCase] = useState(0);

  const testCases = [
    {
      input: "height = [1,8,6,2,5,4,8,3,7]",
      expectedOutput: "49",
      status: "accepted"
    },
    {
      input: "height = [1,1]",
      expectedOutput: "1",
      status: "accepted"
    },
    {
      input: "height = [100,1,1,1,100]",
      expectedOutput: "400",
      status: "accepted"
    }
  ];

  return (
    <div className="h-full flex flex-col bg-[#1C2541]">
      {/* Top Tabs Navigation */}
      <div className="h-10 border-b border-[#2D3F66] flex items-center px-4 bg-[#1C2541] gap-6">
        <button 
          onClick={() => setActiveTab("testcase")}
          className={`text-sm font-medium cursor-pointer flex items-center gap-2 h-full transition-colors ${
            activeTab === "testcase" 
              ? "text-[#EAF2FF] border-b-2 border-[#3A86FF]" 
              : "text-[#6C85B5] hover:text-[#A9C1E8] border-b-2 border-transparent"
          }`}
        >
          <Check className="w-4 h-4" />
          Testcase
        </button>
        <button 
          onClick={() => setActiveTab("result")}
          className={`text-sm font-medium cursor-pointer flex items-center gap-2 h-full transition-colors ${
            activeTab === "result" 
              ? "text-[#EAF2FF] border-b-2 border-[#3A86FF]" 
              : "text-[#6C85B5] hover:text-[#A9C1E8] border-b-2 border-transparent"
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-[#4CC9F0]"></div>
          Test Result
        </button>
      </div>
       
      {/* Content Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {activeTab === "testcase" && (
          <div className="space-y-4">
            {/* Case Selector */}
            <div className="flex gap-2 items-center">
              {testCases.map((_, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  onClick={() => setSelectedCase(index)}
                  className={`cursor-pointer transition-colors ${
                    selectedCase === index
                      ? "bg-[#243A5E] text-[#EAF2FF] border-[#3A86FF] hover:bg-[#2D3F66]"
                      : "bg-transparent text-[#6C85B5] border-[#2D3F66] hover:text-[#A9C1E8] hover:border-[#2A4D8F]"
                  }`}
                >
                  Case {index + 1}
                </Badge>
              ))}
              <button className="w-8 h-6 flex items-center justify-center text-[#6C85B5] hover:text-[#A9C1E8] hover:bg-[#243A5E] rounded border border-[#2D3F66] transition-colors">
                +
              </button>
            </div>

            {/* Test Case Details */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-[#6C85B5] uppercase tracking-wider mb-2 block">
                  height =
                </label>
                <div className="bg-[#243A5E]/50 p-3 rounded-md border border-[#2D3F66] text-sm font-mono text-[#A9C1E8]">
                  {testCases[selectedCase].input.replace("height = ", "")}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "result" && (
          <div className="space-y-4">
            {/* Result Status */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-[#4CC9F0]">Accepted</span>
              <span className="text-sm text-[#6C85B5]">Runtime: 0 ms</span>
            </div>

            {/* Case Results */}
            <div className="flex gap-2 items-center">
              {testCases.map((_, index) => (
                <Badge
                  key={index}
                  variant={index === selectedCase ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    index === selectedCase
                      ? "bg-[#3A86FF] text-white"
                      : "border-[#2A4D8F] text-[#A9C1E8] hover:bg-[#243A5E]"
                  }`}
                  onClick={() => setSelectedCase(index)}
                >
                  Case {index + 1}
                </Badge>
              ))}
            </div>

            {/* Selected Test Case Details */}
            <div className="space-y-3 mt-6">
              <div>
                <label className="text-xs font-medium text-[#0B132B] uppercase tracking-wider mb-2 block">
                  Input
                </label>
                <div className="bg-[#243A5E]/50 p-3 rounded-md border border-[#2D3F66]">
                  <div className="text-xs text-[#6C85B5] mb-1">height =</div>
                  <div className="text-sm font-mono text-[#A9C1E8]">
                    {testCases[selectedCase].input.replace("height = ", "")}
                  </div>
                </div>
              </div>
              
              <div>
                <label className="text-xs font-medium text-[#6C85B5] uppercase tracking-wider mb-2 block">
                  Output
                </label>
                <div className="bg-[#243A5E]/50 p-3 rounded-md border border-[#2D3F66] text-sm font-mono text-[#A9C1E8]">
                  {testCases[selectedCase].expectedOutput}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-[#6C85B5] uppercase tracking-wider mb-2 block">
                  Expected
                </label>
                <div className="bg-[#243A5E]/50 p-3 rounded-md border border-[#2D3F66] text-sm font-mono text-[#A9C1E8]">
                  {testCases[selectedCase].expectedOutput}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}