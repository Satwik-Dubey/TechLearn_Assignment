import { useState } from "react";
import { BellRing, Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotificationSubscribe() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#243A5E] to-[#1C2541] rounded-xl border border-[#2A4D8F] p-6">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3A86FF]/30 to-[#4895EF]/20 flex items-center justify-center flex-shrink-0 border border-[#3A86FF]/20">
          <BellRing className="w-8 h-8 text-[#5FA0FF]" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#EAF2FF] mb-2">
            Never Miss a Challenge!
          </h3>
          <p className="text-sm text-[#A9C1E8] mb-5 leading-relaxed">
            Get daily reminders at 9 AM to solve the Question of the Day and maintain your streak
          </p>
          
          <Button
            onClick={() => setSubscribed(!subscribed)}
            className={`w-full h-12 text-base font-semibold rounded-lg transition-all ${
              subscribed
                ? "bg-[#243A5E] hover:bg-[#2D3F66] text-[#A9C1E8] border border-[#2A4D8F]"
                : "bg-gradient-to-r from-[#3A86FF] to-[#5FA0FF] hover:from-[#5FA0FF] hover:to-[#3A86FF] text-white shadow-lg shadow-[#3A86FF]/20"
            }`}
          >
            {subscribed ? (
              <>
                <Check className="w-5 h-5 mr-2" />
                Subscribed to Daily Reminders
              </>
            ) : (
              <>
                <Bell className="w-5 h-5 mr-2" />
                Subscribe to Daily Reminders
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}