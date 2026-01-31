import { Trophy, Medal, Award } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export default function Leaderboard() {
  const leaders = [
    { rank: 1, name: "Alex Chen", score: 2847, streak: 45 },
    { rank: 2, name: "Sarah Kim", score: 2756, streak: 38 },
    { rank: 3, name: "Raj Patel", score: 2634, streak: 32 },
    { rank: 4, name: "Emma Wilson", score: 2489, streak: 28 },
    { rank: 5, name: "You", score: 2156, streak: 12, isUser: true },
    { rank: 6, name: "Mike Torres", score: 2098, streak: 24 },
    { rank: 7, name: "Lisa Zhang", score: 1967, streak: 19 },
  ];

  return (
    <div className="bg-[#1C2541] rounded-lg border border-[#2D3F66] overflow-hidden">
      <div className="p-4 border-b border-[#2D3F66] bg-[#243A5E]/40">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#4CC9F0]" />
          <h3 className="text-lg font-bold text-[#EAF2FF]">Today's Leaderboard</h3>
        </div>
        <p className="text-xs text-[#6C85B5] mt-1">Top performers for Container With Most Water</p>
      </div>

      <ScrollArea className="h-[320px]">
        <div className="p-2">
          {leaders.map((leader) => (
            <div
              key={leader.rank}
              className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors border ${
                leader.isUser
                  ? "bg-[#3A86FF]/10 border-[#3A86FF]/30"
                  : "hover:bg-[#243A5E]/50 border-transparent"
              }`}
            >
              <div className="w-8 text-center">
                <span className={`text-sm font-bold ${
                  leader.rank <= 3 
                    ? "text-[#4CC9F0]" 
                    : leader.isUser 
                    ? "text-[#4895EF]" 
                    : "text-[#6C85B5]"
                }`}>
                  #{leader.rank}
                </span>
              </div>

              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border ${
                leader.isUser 
                  ? "bg-[#3A86FF] text-[#EAF2FF] border-[#5FA0FF]" 
                  : "bg-[#243A5E] text-[#A9C1E8] border-[#2A4D8F]"
              }`}>
                {leader.name.charAt(0)}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-semibold ${leader.isUser ? "text-[#4895EF]" : "text-[#EAF2FF]"}`}>
                    {leader.name}
                  </span>
                  {leader.streak >= 30 && (
                    <Badge variant="outline" className="text-xs border-[#3A86FF]/50 text-[#3A86FF] bg-[#3A86FF]/10 flex items-center gap-1">
                      <Medal className="w-3 h-3" />
                      {leader.streak}
                    </Badge>
                  )}
                </div>
                <div className="text-xs text-[#6C85B5] mt-0.5">
                  {leader.score} points
                </div>
              </div>

              {leader.rank <= 3 && (
                <Award className="w-4 h-4 text-[#4CC9F0]" />
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-3 border-t border-[#2D3F66] bg-[#243A5E]/20">
        <button className="w-full py-2 text-sm text-[#4895EF] hover:text-[#5FA0FF] font-medium transition-colors">
          View Full Leaderboard →
        </button>
      </div>
    </div>
  );
}