import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="absolute top-8 left-8">
         <Link href="/">
             <Button variant="ghost" className="font-bold text-slate-500"><ArrowLeft className="mr-2 w-5 h-5"/> Ana Sayfa</Button>
         </Link>
      </div>

      <Card className="w-full max-w-md shadow-2xl border-2 border-slate-200 rounded-3xl overflow-hidden">
        <CardHeader className="bg-blue-500 p-8 text-center">
          <CardTitle className="text-3xl font-extrabold text-white tracking-wide">BAŞLAYALIM! 🚀</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-8 bg-white">
          <div className="space-y-2">
              <Label className="text-slate-600 font-bold uppercase text-xs">Ad Soyad</Label>
              <Input type="text" placeholder="Adın ne?" className="h-12 bg-slate-50 border-2 focus-visible:ring-blue-500 font-medium" />
          </div>
          <div className="space-y-2">
              <Label className="text-slate-600 font-bold uppercase text-xs">Email</Label>
              <Input type="email" placeholder="mail@ornek.com" className="h-12 bg-slate-50 border-2 focus-visible:ring-blue-500 font-medium" />
          </div>
          <div className="space-y-2">
              <Label className="text-slate-600 font-bold uppercase text-xs">Şifre</Label>
              <Input type="password" placeholder="******" className="h-12 bg-slate-50 border-2 focus-visible:ring-blue-500 font-medium" />
          </div>
          
          <Link href="/learn" className="w-full block">
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg py-6 rounded-xl border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all">
                HESAP OLUŞTUR
            </Button>
          </Link>
        </CardContent>
        <CardFooter className="justify-center bg-slate-50 p-6 border-t-2 border-slate-100">
            <Link href="/login" className="text-slate-500 font-bold hover:text-blue-600 transition uppercase text-sm">
                Zaten hesabın var mı? <span className="underline">Giriş Yap</span>
            </Link>
        </CardFooter>
      </Card>
    </div>
  );
}