import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Star, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff] flex flex-col">
      
      {/* ÜST MENÜ (HEADER) */}
      <header className="h-20 w-full border-b-2 border-slate-200 px-4 lg:px-10 flex items-center justify-between bg-white sticky top-0 z-50">
          <div className="flex items-center gap-2">
             <div className="bg-green-600 rounded-lg p-1">
                <Globe className="text-white w-6 h-6" />
             </div>
             <h1 className="text-2xl font-extrabold text-green-600 tracking-tighter">LinguaFlow</h1>
          </div>
          <div className="hidden md:flex gap-4">
              {/* Süs amaçlı ikonlar */}
              <div className="flex items-center text-slate-400 font-bold gap-1"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400"/> 5.0</div>
          </div>
      </header>

      {/* ORTA ALAN (HERO SECTION) */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center p-4 gap-10 max-w-[1000px] mx-auto w-full">
          
          {/* SOL TARAFA (RESİM / İKON ALANI) */}
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse opacity-50"></div>
              <div className="z-10 bg-white border-4 border-slate-200 p-8 rounded-[40px] shadow-xl rotate-3 transition-transform hover:rotate-0 duration-500">
                  <Globe className="w-32 h-32 text-green-600" />
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 font-bold px-4 py-2 rounded-xl rotate-12 border-2 border-yellow-600 shadow-md">
                      %100 Ücretsiz!
                  </div>
              </div>
          </div>

          {/* SAĞ TARAF (YAZI VE BUTONLAR) */}
          <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-700 leading-tight">
                  Yeni bir dil öğrenmenin <span className="text-green-600">ücretsiz</span> ve eğlenceli yolu.
              </h1>
              <p className="text-lg text-slate-500 font-medium max-w-[400px]">
                  Sıkıcı ders kitaplarını unut. Oyun oynar gibi İngilizce, İspanyolca ve Fransızca öğren.
              </p>
              
              <div className="flex flex-col gap-3 w-full max-w-[350px]">
                  {/* BAŞLA BUTONU (Duolingo Tarzı 3D Efekt) */}
                  <Link href="/register" className="w-full">
                      <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-7 rounded-2xl border-b-4 border-green-700 active:border-b-0 active:translate-y-1 transition-all shadow-lg">
                          HEMEN BAŞLA
                      </Button>
                  </Link>

                  {/* GİRİŞ BUTONU */}
                  <Link href="/login" className="w-full">
                      <Button variant="outline" size="lg" className="w-full text-slate-700 font-bold text-xl py-7 rounded-2xl border-2 border-slate-200 border-b-4 hover:bg-slate-50 active:border-b-2 active:translate-y-1 transition-all uppercase tracking-wide">
                          ZATEN HESABIM VAR
                      </Button>
                  </Link>
              </div>
          </div>
      </main>

      {/* ALT KISIM (FOOTER) */}
      <footer className="h-20 border-t-2 border-slate-200 flex items-center justify-center text-slate-400 font-bold bg-slate-50">
          © 2025 LinguaFlow - Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}