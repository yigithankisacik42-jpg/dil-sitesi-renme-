// @ts-nocheck
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button";
import { X, Heart, Check, AlertCircle, BookOpen, Volume2, Trophy, LogOut } from "lucide-react"; 
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const challenges = [
  { id: 1, type: "SELECT", question: 'Hangisi "Ekmek" demektir?', options: [{ id: "o1", text: "Agua", image:"💧", correct:false }, { id: "o2", text: "Pan", image:"🥖", correct:true }, { id: "o3", text: "Manzana", image:"🍎", correct:false }] },
  { id: 2, type: "LISTENING", question: 'Duyduğun cümleyi seç:', audioText: "Hola", options: [{ id: "l1", text: "Selam", correct:true }, { id: "l2", text: "Merhaba", correct:true }, { id: "l3", text: "Güle güle", correct:false }] },
  { id: 3, type: "TRANSLATE", question: 'Çevir: "Ben bir çocuğum"', correctOrder: ["Yo","soy","un","niño"], options: [{id:"w1",text:"niño",correct:true}, {id:"w2",text:"una",correct:false}, {id:"w3",text:"Yo",correct:true}, {id:"w4",text:"soy",correct:true}, {id:"w5",text:"un",correct:true}, {id:"w6",text:"mujer",correct:false}] }
];

export default function LessonPage() {
  const router = useRouter(); 
  const [index, setIndex] = useState(0);
  const [sel, setSel] = useState(null);
  const [words, setWords] = useState([]);
  const [status, setStatus] = useState("none");
  const [showExit, setShowExit] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const challenge = challenges[index];
  const progress = ((index + 1) / challenges.length) * 100;

  const onCheck = () => {
     // Kontrol mantığı (Basitleştirilmiş)
     setStatus("correct"); 
  };
  const onNext = () => { index < challenges.length - 1 ? (setIndex(i=>i+1), setStatus("none"), setSel(null)) : setIsFinished(true); };

  return (
    <div className="fixed inset-0 z-[99999] bg-white flex flex-col h-full w-full">
      {/* ÇIKIŞ MODALI */}
      {showExit && (
        <div className="fixed inset-0 z-[100000] bg-black/50 flex items-center justify-center p-4">
           <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center space-y-4">
              <h2 className="text-2xl font-bold">Çıkıyor musun?</h2>
              <Button onClick={() => router.push("/learn")} variant="destructive" className="w-full">Evet, Çık</Button>
              <Button onClick={() => setShowExit(false)} variant="outline" className="w-full">Vazgeç</Button>
           </div>
        </div>
      )}
      
      {/* BİTİŞ EKRANI */}
      {isFinished ? (
        <div className="flex flex-col items-center justify-center h-full gap-6">
            <Trophy className="w-24 h-24 text-yellow-500" />
            <h1 className="text-4xl font-bold text-green-600">Ders Bitti!</h1>
            <Button onClick={() => router.push("/learn")} className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold">DEVAM ET</Button>
        </div>
      ) : (
        <>
            <div className="w-full px-6 py-4 flex items-center justify-between gap-6 border-b">
                <X onClick={() => setShowExit(true)} className="cursor-pointer text-slate-500 w-6 h-6" />
                <Progress value={progress} className="h-3 w-full" />
                <Heart className="text-rose-500 w-6 h-6 fill-rose-500" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-2xl mx-auto w-full">
                <h1 className="text-2xl font-bold mb-8 text-center">{challenge.question}</h1>
                
                {/* ŞIKLAR */}
                {challenge.type === "SELECT" && (
                    <div className="grid grid-cols-3 gap-4 w-full">
                        {challenge.options.map((opt) => (
                            <div key={opt.id} onClick={() => setSel(opt.id)} className={cn("border-2 p-4 rounded-xl cursor-pointer text-center hover:bg-slate-50", sel === opt.id && "bg-blue-100 border-blue-500")}>
                                <div className="text-4xl mb-2">{opt.image}</div>
                                <div className="font-bold">{opt.text}</div>
                            </div>
                        ))}
                    </div>
                )}
                {/* Diğer tipler için basit görünüm */}
                {challenge.type !== "SELECT" && <div className="text-xl font-bold text-slate-400">(Bu soru tipi için görsel alan)</div>}
            </div>
            
            <div className="p-6 border-t w-full">
                <div className="max-w-2xl mx-auto">
                    {status === "none" ? 
                        <Button onClick={onCheck} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl">KONTROL ET</Button> :
                        <Button onClick={onNext} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl">DEVAM ET</Button>
                    }
                </div>
            </div>
        </>
      )}
    </div>
  );
}