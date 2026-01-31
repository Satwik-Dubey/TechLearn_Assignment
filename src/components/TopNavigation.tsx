
import { Bug, Play, CheckCircle, Bell, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import NotificationSubscribe from "./NotificationSubscribe";

export default function TopNavigation() {
  return (
    <nav className="h-14 border-b border-[#2D3F66] bg-[#1C2541] flex items-center justify-between px-4">
      {/* Logo & Problem List */}
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold cursor-pointer text-[#EAF2FF]">TechLearn</span>
        <div className="h-5 w-px bg-white/20"></div>
        <Button variant="ghost" size="sm" className="text-[#A9C1E8] px-3 hover:text-[#EAF2FF] hover:bg-[#243A5E]">
          Daily Challenge
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="border-[#2A4D8F] cursor-pointer hover:bg-[#243A5E] text-[#A9C1E8] hover:text-[#EAF2FF]">
          <Bug className="w-4 h-4 mr-2" />
          Debug
        </Button>
        <Button variant="outline" size="sm" className="border-[#2A4D8F] cursor-pointer hover:bg-[#243A5E] text-[#A9C1E8] hover:text-[#EAF2FF]">
          <Play className="w-4 h-4 mr-2" />
          Run
        </Button>
        <Button size="sm" className="bg-[#4CC9F0] hover:bg-[#5FA0FF] cursor-pointer text-[#0B132B] font-semibold">
          <CheckCircle className="w-4 h-4 mr-2" />
          Submit
        </Button>
      </div>

      {/* Subscribe & Account */}
      <div className="flex items-center gap-3">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size="sm" className="border-[#2A4D8F] cursor-pointer hover:bg-[#3A86FF]/10 text-[#4895EF]">
              <Bell className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-[#0B132B] border-[#2D3F66] max-w-2xl p-0 gap-0">
            {/* Close Button  */}
            <AlertDialogCancel className="absolute -right-3 -top-3 p-2 h-8 w-9 rounded-full hover:bg-[#243A5E] border-2 border-[#2D3F66] bg-[#1C2541] transition-colors z-10 shadow-lg">
              <X className="w-5 h-5 text-[#A9C1E8] hover:text-[#EAF2FF]" />
            </AlertDialogCancel>

            <div className="p-6">
              <NotificationSubscribe />
            </div>
          </AlertDialogContent>
        </AlertDialog>

        {/* Account Icon */}
        <div className="w-8 h-8 rounded-full cursor-pointer bg-[#243A5E] flex items-center justify-center text-[#EAF2FF] font-semibold text-sm border border-[#2A4D8F]">
          S
        </div>
      </div>
    </nav>
  );
}