import { Target, Flame, BookOpen, Zap, Gift, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Görevler sıfırdan başlıyor - ileride Drizzle'dan gelecek
const dailyQuests = [
    {
        id: 1,
        title: "50 XP Kazan",
        description: "Ders veya okuma tamamla",
        icon: Zap,
        iconColor: "text-amber-500",
        bgColor: "bg-amber-50",
        current: 0,
        target: 50,
        reward: 10,
        completed: false
    },
    {
        id: 2,
        title: "1 Okuma Yap",
        description: "Bir hikaye oku ve anla",
        icon: BookOpen,
        iconColor: "text-indigo-500",
        bgColor: "bg-indigo-50",
        current: 0,
        target: 1,
        reward: 15,
        completed: false
    },
    {
        id: 3,
        title: "Seriyi Koru",
        description: "Bugün en az 1 ders bitir",
        icon: Flame,
        iconColor: "text-rose-500",
        bgColor: "bg-rose-50",
        current: 0,
        target: 1,
        reward: 20,
        completed: false
    },
    {
        id: 4,
        title: "100 XP Kazan",
        description: "Bonus görev",
        icon: Target,
        iconColor: "text-violet-500",
        bgColor: "bg-violet-50",
        current: 0,
        target: 100,
        reward: 25,
        completed: false
    },
];


export default function QuestsPage() {
    const completedCount = dailyQuests.filter(q => q.completed).length;

    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-rose-50/30 p-4 pb-20">

            {/* Başlık */}
            <div className="w-full max-w-[600px] mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Target className="w-8 h-8 text-rose-500" />
                    <h1 className="text-3xl font-extrabold text-slate-800">Günlük Görevler</h1>
                </div>
                <p className="text-slate-500 font-medium">Görevleri tamamla, ekstra XP kazan!</p>

                {/* Genel İlerleme */}
                <div className="mt-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-slate-600">Günlük İlerleme</span>
                        <span className="font-extrabold text-rose-500">{completedCount}/{dailyQuests.length}</span>
                    </div>
                    <Progress value={(completedCount / dailyQuests.length) * 100} className="h-3" />
                </div>
            </div>

            {/* Görev Listesi */}
            <div className="w-full max-w-[600px] space-y-4">
                {dailyQuests.map((quest) => {
                    const progressPercent = (quest.current / quest.target) * 100;

                    return (
                        <div
                            key={quest.id}
                            className={`p-4 rounded-2xl transition-all ${quest.completed
                                ? "bg-emerald-50 border-2 border-emerald-200"
                                : "bg-white border border-slate-100 hover:shadow-md"
                                }`}
                        >
                            <div className="flex items-start gap-4">
                                {/* İkon */}
                                <div className={`w-12 h-12 rounded-xl ${quest.bgColor} flex items-center justify-center`}>
                                    <quest.icon className={`w-6 h-6 ${quest.iconColor}`} />
                                </div>

                                {/* İçerik */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className={`font-bold ${quest.completed ? "text-emerald-600" : "text-slate-700"}`}>
                                            {quest.title}
                                        </h3>
                                        {quest.completed && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                                    </div>
                                    <p className="text-sm text-slate-400 mb-3">{quest.description}</p>

                                    {/* İlerleme Çubuğu */}
                                    {!quest.completed && (
                                        <div className="space-y-1">
                                            <Progress value={progressPercent} className="h-2" />
                                            <p className="text-xs text-slate-400 font-medium">{quest.current}/{quest.target}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Ödül */}
                                <div className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-sm ${quest.completed
                                    ? "bg-emerald-100 text-emerald-600"
                                    : "bg-amber-100 text-amber-600"
                                    }`}>
                                    <Gift className="w-4 h-4" />
                                    +{quest.reward} XP
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
