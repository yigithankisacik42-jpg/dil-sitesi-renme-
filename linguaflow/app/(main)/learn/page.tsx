import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Zap } from "lucide-react";

// SAHTE MÜFREDAT VERİSİ
const units = [
  { title: "Ünite 1: Temel Giriş", description: "Selamlaşma ve Tanışma", color: "bg-green-500 border-green-700" },
  { title: "Ünite 2: Aile ve Arkadaşlar", description: "İnsanları Tanıtma", color: "bg-blue-500 border-blue-700" },
  { title: "Ünite 3: Yeme İçme", description: "Restoran ve Sipariş", color: "bg-rose-500 border-rose-700" },
  { title: "Ünite 4: Şehir Hayatı", description: "Yol Tarifi ve Yerler", color: "bg-yellow-500 border-yellow-700" },
  { title: "Ünite 5: Gelecek Planları", description: "Tatil ve Seyahat", color: "bg-purple-500 border-purple-700" },
];

export default function LearnPage() {
  return (
    <div className="flex flex-col gap-10 pb-40 items-center w-full">
       
       {/* ÜST BİLGİ ÇUBUĞU */}
       <div className="sticky top-0 bg-white/90 backdrop-blur-md z-40 w-full border-b p-4 flex justify-between items-center text-slate-500 font-bold">
            <div className="flex items-center gap-2"><span className="text-2xl">🇪🇸</span> İspanyolca</div>
            <div className="flex gap-4">
                <span className="flex items-center text-rose-500"><Zap className="fill-rose-500 w-5 h-5 mr-1"/> 5</span>
                <span className="flex items-center text-yellow-500"><Star className="fill-yellow-500 w-5 h-5 mr-1"/> 1240</span>
            </div>
       </div>

       {/* ÜNİTELER LİSTESİ */}
       {units.map((unit, i) => (
         <div key={i} className="w-full max-w-[600px] relative">
            <div className={`${unit.color} p-5 rounded-xl mb-10 text-white shadow-lg flex justify-between items-center`}>
                <div>
                    <h2 className="text-xl font-extrabold">{unit.title}</h2>
                    <p className="font-medium opacity-90">{unit.description}</p>
                </div>
                <Button variant="secondary" className="border-b-4 border-slate-200 active:border-b-0">REHBER</Button>
            </div>
            
            {/* DERS BUTONLARI ZİNCİRİ */}
            <div className="flex flex-col items-center gap-4 mb-10">
                {[1, 2, 3].map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className={`relative flex flex-col items-center ${lessonIndex % 2 === 1 ? 'ml-12' : 'mr-12'}`}>
                        {i === 0 && lessonIndex === 0 ? (
                            <Link href="/lesson">
                                <div className="absolute -top-10 bg-white border-2 border-slate-200 px-3 py-1 rounded-lg font-bold animate-bounce text-green-600 z-10">
                                   BAŞLA!
                                </div>
                                <Button className={`h-20 w-20 rounded-full ${unit.color} text-4xl shadow-xl transition-transform hover:scale-110 active:scale-95`}>
                                   ★
                                </Button>
                            </Link>
                        ) : (
                            <Button disabled className="h-20 w-20 rounded-full bg-slate-200 border-b-4 border-slate-300 text-3xl opacity-50">
                                🔒
                            </Button>
                        )}
                        {lessonIndex !== 2 && <div className="h-8 w-3 bg-slate-200 rounded-full mt-2" />}
                    </div>
                ))}
            </div>
         </div>
       ))}
    </div>
  );
}