
import { Target, TrendingUp, Flame, Trophy } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      icon: Target,
      label: "Total Attempts",
      value: "47",
      change: "+12%",
      color: "#4895EF",
    },
    {
      icon: TrendingUp,
      label: "Success Rate",
      value: "78%",
      change: "+8%",
      color: "#4CC9F0",
    },
    {
      icon: Flame,
      label: "Current Streak",
      value: "12 days",
      change: "Best: 18",
      color: "#3A86FF",
    },
    {
      icon: Trophy,
      label: "Problems Solved",
      value: "36",
      change: "This month",
      color: "#5FA0FF",
    },
  ];

  return (
    <div className="border-b border-[#2D3F66] bg-[#1C2541] px-6 py-4">
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-[#243A5E] rounded-lg p-4 border border-[#2A4D8F] hover:border-[#3A86FF] transition-all"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#A9C1E8] mb-1">{stat.label}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#EAF2FF]">
                      {stat.value}
                    </span>
                    <span className="text-xs text-[#4CC9F0] font-medium">
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}