import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle2, Lightbulb, Trophy, Award, Medal } from "lucide-react";

export default function ProblemDescription() {
  const [activeTab, setActiveTab] = useState<"description" | "testcases" | "hints" | "leaderboard">("description");
  const [revealedHints, setRevealedHints] = useState<number[]>([]);

  const hints = [
    "If you simulate the problem, it will be O(n^2) which is not efficient.",
    "Try to use two-pointers. Set one pointer to the left and one to the right of the array. Always move the pointer that points to the lower line.",
    "How can you calculate the amount of water at each step?"
  ];

  const leaders = [
    { rank: 1, name: "Alex Chen", score: 2847, streak: 45 },
    { rank: 2, name: "Sarah Kim", score: 2756, streak: 38 },
    { rank: 3, name: "Raj Patel", score: 2634, streak: 32 },
    { rank: 4, name: "Emma Wilson", score: 2489, streak: 28 },
    { rank: 5, name: "You", score: 2156, streak: 12, isUser: true },
    { rank: 6, name: "Mike Torres", score: 2098, streak: 24 },
    { rank: 7, name: "Lisa Zhang", score: 1967, streak: 19 },
  ];

  const toggleHint = (index: number) => {
    if (revealedHints.includes(index)) {
      setRevealedHints(revealedHints.filter((i: number) => i !== index));
    } else {
      setRevealedHints([...revealedHints, index]);
    }
  };

  const revealAll = () => {
    setRevealedHints(hints.map((_, i) => i));
  };

  return (
    <div className="h-full flex flex-col bg-[#1C2541]">
      {/* Top Tabs Navigation */}
      <div className="flex items-center gap-1 px-4 pt-3 pb-2 border-b border-[#2D3F66] flex-shrink-0">
        <button
          onClick={() => setActiveTab("description")}
          className={`flex items-center cursor-pointer gap-2 px-4 py-2 text-sm font-medium rounded-t transition-colors ${
            activeTab === "description"
              ? "bg-[#243A5E] text-[#EAF2FF] border-b-2 border-[#3A86FF]"
              : "text-[#6C85B5] hover:text-[#A9C1E8]"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Description
        </button>
        <button
          onClick={() => setActiveTab("testcases")}
          className={`flex items-center cursor-pointer gap-2 px-4 py-2 text-sm font-medium rounded-t transition-colors ${
            activeTab === "testcases"
              ? "bg-[#243A5E] text-[#EAF2FF] border-b-2 border-[#3A86FF]"
              : "text-[#6C85B5] hover:text-[#A9C1E8]"
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          Test Cases
        </button>
        <button
          onClick={() => setActiveTab("hints")}
          className={`flex items-center cursor-pointer gap-2 px-4 py-2 text-sm font-medium rounded-t transition-colors ${
            activeTab === "hints"
              ? "bg-[#243A5E] text-[#EAF2FF] border-b-2 border-[#3A86FF]"
              : "text-[#6C85B5] hover:text-[#A9C1E8]"
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          Hints
        </button>
        <button
          onClick={() => setActiveTab("leaderboard")}
          className={`flex items-center cursor-pointer gap-2 px-4 py-2 text-sm font-medium rounded-t transition-colors ${
            activeTab === "leaderboard"
              ? "bg-[#243A5E] text-[#EAF2FF] border-b-2 border-[#3A86FF]"
              : "text-[#6C85B5] hover:text-[#A9C1E8]"
          }`}
        >
          <Trophy className="w-4 h-4" />
          Leaderboard
        </button>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="p-6 space-y-6 text-[#A9C1E8]">
            {/* DESCRIPTION TAB */}
            {activeTab === "description" && (
              <>
                <div>
                  <h1 className="text-2xl font-bold text-[#EAF2FF] mb-3">Container With Most Water</h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-[#4895EF]/20 text-[#4895EF] hover:bg-[#4895EF]/30 border border-[#2A4D8F]">
                      Medium
                    </Badge>
                    <Badge variant="outline" className="border-[#2A4D8F] text-[#A9C1E8]">DSA</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#6C85B5]">Topics:</span>
                    <Badge variant="outline" className="border-[#2A4D8F] text-[#A9C1E8]">Array</Badge>
                    <Badge variant="outline" className="border-[#2A4D8F] text-[#A9C1E8]">Two Pointers</Badge>
                    <Badge variant="outline" className="border-[#2A4D8F] text-[#A9C1E8]">Greedy</Badge>
                  </div>
                </div>

                <div className="space-y-4 text-[15px] leading-relaxed">
                  <p>
                    You are given an integer array <code className="bg-[#243A5E] px-1.5 py-0.5 rounded text-[#EAF2FF] font-mono text-sm border border-[#2A4D8F]">height</code> of length{" "}
                    <code className="bg-[#243A5E] px-1.5 py-0.5 rounded text-[#EAF2FF] font-mono text-sm border border-[#2A4D8F]">n</code>. There are{" "}
                    <code className="bg-[#243A5E] px-1.5 py-0.5 rounded text-[#EAF2FF] font-mono text-sm border border-[#2A4D8F]">n</code> vertical lines drawn such that the two endpoints of the{" "}
                    <code className="bg-[#243A5E] px-1.5 py-0.5 rounded text-[#EAF2FF] font-mono text-sm border border-[#2A4D8F]">ith</code> line are{" "}
                    <code className="bg-[#243A5E] px-1.5 py-0.5 rounded text-[#EAF2FF] font-mono text-sm border border-[#2A4D8F]">(i, 0)</code> and{" "}
                    <code className="bg-[#243A5E] px-1.5 py-0.5 rounded text-[#EAF2FF] font-mono text-sm border border-[#2A4D8F]">(i, height[i])</code>.
                  </p>
                  <p>
                    Find two lines that together with the x-axis form a container, such that the container contains the most water.
                  </p>
                  <p className="text-[#EAF2FF]">
                    Return <em className="italic">the maximum amount of water a container can store</em>.
                  </p>
                  <p className="font-semibold text-[#EAF2FF]">
                    <strong>Notice</strong> that you may not slant the container.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#EAF2FF]">Example 1:</h3>
                  <div className="bg-[#243A5E]/40 p-4 rounded-lg border border-[#2D3F66] space-y-3">
                    <p className="text-sm">
                      <span className="font-semibold text-[#EAF2FF]">Input:</span>{" "}
                      <code className="font-mono text-[#A9C1E8]">height = [1,8,6,2,5,4,8,3,7]</code>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-[#EAF2FF]">Output:</span>{" "}
                      <code className="font-mono text-[#A9C1E8]">49</code>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-[#EAF2FF]">Explanation:</span>{" "}
                      The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#EAF2FF]">Example 2:</h3>
                  <div className="bg-[#243A5E]/40 p-4 rounded-lg border border-[#2D3F66] space-y-3">
                    <p className="text-sm">
                      <span className="font-semibold text-[#EAF2FF]">Input:</span>{" "}
                      <code className="font-mono text-[#A9C1E8]">height = [1,1]</code>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-[#EAF2FF]">Output:</span>{" "}
                      <code className="font-mono text-[#A9C1E8]">1</code>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-[#EAF2FF]">Explanation:</span>{" "}
                      Basic functionality: Smallest possible input, two lines of equal height.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#EAF2FF]">Constraints:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#A9C1E8] pl-2">
                    <li><code className="bg-[#243A5E] px-1.5 py-0.5 rounded font-mono text-sm border border-[#2A4D8F]">n == height.length</code></li>
                    <li><code className="bg-[#243A5E] px-1.5 py-0.5 rounded font-mono text-sm border border-[#2A4D8F]">2 ≤ n ≤ 10<sup>5</sup></code></li>
                    <li><code className="bg-[#243A5E] px-1.5 py-0.5 rounded font-mono text-sm border border-[#2A4D8F]">0 ≤ height[i] ≤ 10<sup>4</sup></code></li>
                  </ul>
                </div>
              </>
            )}

            {/* TEST CASES TAB */}
            {activeTab === "testcases" && (
              <div className="space-y-6">
                {[
                  { title: "Example 1", input: "[1, 8, 6, 2, 5, 4, 8, 3, 7]", output: "49", explanation: "Standard example where the max area is between lines at index 1 and 8 (min height 7, width 7)." },
                  { title: "Example 2", input: "[1, 1]", output: "1", explanation: "Smallest possible input, two lines of equal height." },
                  { title: "Example 3", input: "[100, 1, 1, 1, 100]", output: "400", explanation: "Maximum area is at the extremes (height 100, width 4)." },
                ].map((test, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#EAF2FF]">{test.title}:</h3>
                    <div className="bg-[#243A5E]/40 rounded-lg border border-[#2D3F66]">
                      <div className="p-4 border-b border-[#2D3F66]">
                        <p className="text-sm font-semibold text-[#6C85B5] mb-2">Input:</p>
                        <code className="block bg-[#0B132B] p-3 rounded font-mono text-sm text-[#EAF2FF] border border-[#2A4D8F]">
                          {test.input}
                        </code>
                      </div>
                      <div className="p-4 border-b border-[#2D3F66]">
                        <p className="text-sm font-semibold text-[#6C85B5] mb-2">Output:</p>
                        <code className="block bg-[#0B132B] p-3 rounded font-mono text-sm text-[#EAF2FF] border border-[#2A4D8F]">
                          {test.output}
                        </code>
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-semibold text-[#6C85B5] mb-2">Explanation:</p>
                        <p className="text-sm text-[#A9C1E8]">{test.explanation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* HINTS TAB */}
            {activeTab === "hints" && (
              <div className="space-y-4">
                <div className="flex items-center cursor-pointer justify-between mb-4">
                  <p className="text-sm text-[#6C85B5]">
                    {revealedHints.length}/{hints.length} revealed
                  </p>
                  <Button
                    variant="link"
                    onClick={revealAll}
                    className="text-[#4895EF] cursor-pointer hover:text-[#5FA0FF] text-sm p-0 h-auto"
                  >
                    Reveal All
                  </Button>
                </div>

                {hints.map((hint, index) => (
                  <div
                    key={index}
                    className="bg-[#243A5E]/40 rounded-lg border border-[#2D3F66] overflow-hidden"
                  >
                    <button
                      onClick={() => toggleHint(index)}
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-[#243A5E]/60 transition-colors"
                    >
                      <span className="font-semibold text-[#EAF2FF]">Hint {index + 1}</span>
                      <Button
                        variant="link"
                        className="text-[#4895EF] hover:text-[#5FA0FF] text-sm p-0 h-auto"
                      >
                        {revealedHints.includes(index) ? "Hide" : "Reveal"}
                      </Button>
                    </button>
                    {revealedHints.includes(index) && (
                      <div className="px-4 pb-4 text-sm text-[#A9C1E8] border-t border-[#2D3F66] pt-4">
                        {hint}
                      </div>
                    )}
                  </div>
                ))}

                <div className="mt-8 pt-6 border-t border-[#2D3F66]">
                  <p className="text-[#6C85B5] text-sm mb-4">Need help or want more practice?</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="border-[#2A4D8F] cursor-pointer hover:bg-[#243A5E] text-[#A9C1E8]">
                       Get AI Coach help
                    </Button>
                    <Button variant="outline" className="border-[#2A4D8F] cursor-pointer hover:bg-[#243A5E] text-[#A9C1E8]">
                       Try random interview
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* LEADERBOARD TAB */}
            {activeTab === "leaderboard" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-6 h-6 text-[#4CC9F0]" />
                  <div>
                    <h3 className="text-xl font-bold text-[#EAF2FF]">Today's Leaderboard</h3>
                    <p className="text-sm text-[#6C85B5]">Top performers for Container With Most Water</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {leaders.map((leader) => (
                    <div
                      key={leader.rank}
                      className={`flex items-center gap-3 p-4 rounded-lg transition-colors border ${
                        leader.isUser
                          ? "bg-[#3A86FF]/10 border-[#3A86FF]/30"
                          : "bg-[#243A5E]/40 border-[#2D3F66] hover:bg-[#243A5E]/60"
                      }`}
                    >
                      <div className="w-10 text-center">
                        <span className={`text-lg font-bold ${
                          leader.rank <= 3 
                            ? "text-[#4CC9F0]" 
                            : leader.isUser 
                            ? "text-[#4895EF]" 
                            : "text-[#6C85B5]"
                        }`}>
                          #{leader.rank}
                        </span>
                      </div>

                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-base font-bold border ${
                        leader.isUser 
                          ? "bg-[#3A86FF] text-[#EAF2FF] border-[#5FA0FF]" 
                          : "bg-[#243A5E] text-[#A9C1E8] border-[#2A4D8F]"
                      }`}>
                        {leader.name.charAt(0)}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-base font-semibold ${leader.isUser ? "text-[#4895EF]" : "text-[#EAF2FF]"}`}>
                            {leader.name}
                          </span>
                          {leader.streak >= 30 && (
                            <Badge variant="outline" className="text-xs border-[#3A86FF]/50 text-[#3A86FF] bg-[#3A86FF]/10 flex items-center gap-1">
                              <Medal className="w-3 h-3" />
                              {leader.streak}
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-[#6C85B5] mt-0.5">
                          {leader.score} points
                        </div>
                      </div>

                      {leader.rank <= 3 && (
                        <Award className="w-5 h-5 text-[#4CC9F0]" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#2D3F66]">
                  <Button variant="outline" className="w-full border-[#2A4D8F] hover:bg-[#243A5E] text-[#4895EF]">
                    View Full Leaderboard →
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}