import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Trophy, Target, Store, LogOut } from "lucide-react"; // İkonlar
import { cn } from "@/lib/utils";

export const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col bg-white", className)}>
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
            <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">LinguaFlow 🦉</h1>
        </div>
      </Link>
      
      <div className="flex flex-col gap-y-2 flex-1">
        {/* MENÜ LİNKLERİ */}
        <Link href="/learn">
            <Button variant="ghost" className="w-full justify-start text-lg mb-1 h-[52px] border-2 border-transparent hover:bg-slate-100">
                <Home className="mr-5 h-8 w-8 text-green-500" /> Öğren
            </Button>
        </Link>
        <Link href="/leaderboard">
            <Button variant="ghost" className="w-full justify-start text-lg mb-1 h-[52px] border-2 border-transparent hover:bg-slate-100">
                <Trophy className="mr-5 h-8 w-8 text-yellow-500" /> Liderlik
            </Button>
        </Link>
        <Link href="/quests">
            <Button variant="ghost" className="w-full justify-start text-lg mb-1 h-[52px] border-2 border-transparent hover:bg-slate-100">
                <Target className="mr-5 h-8 w-8 text-rose-500" /> Görevler
            </Button>
        </Link>
        <Link href="/shop">
            <Button variant="ghost" className="w-full justify-start text-lg mb-1 h-[52px] border-2 border-transparent hover:bg-slate-100">
                <Store className="mr-5 h-8 w-8 text-blue-500" /> Mağaza
            </Button>
        </Link>
      </div>

      <div className="p-4">
          <Link href="/">
            <Button variant="outline" className="w-full border-2 border-slate-200 hover:bg-slate-50 font-bold">
                <LogOut className="mr-2 h-4 w-4" /> Çıkış Yap
            </Button>
          </Link>
      </div>
    </div>
  );
};