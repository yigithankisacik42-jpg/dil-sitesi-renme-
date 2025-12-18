"use client";

import { Store, Heart, Snowflake, Crown, Gem, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_CONFIG } from "@/lib/config";

// Mock data - ileride Drizzle'dan gelecek
const shopItems = [
    {
        id: 1,
        category: "hearts",
        title: "Kalp Doldur",
        description: "5 kalp kazan",
        icon: Heart,
        iconColor: "text-rose-500",
        bgGradient: "from-rose-500 to-pink-500",
        price: 350,
        currency: "gems",
    },
    {
        id: 2,
        category: "hearts",
        title: "Sınırsız Kalp",
        description: "3 saat boyunca",
        icon: Heart,
        iconColor: "text-rose-500",
        bgGradient: "from-rose-400 to-rose-600",
        price: 500,
        currency: "gems",
        popular: true,
    },
    {
        id: 3,
        category: "streak",
        title: "Dondurma Hakkı",
        description: "1 gün seriyi koru",
        icon: Snowflake,
        iconColor: "text-sky-500",
        bgGradient: "from-sky-400 to-cyan-500",
        price: 200,
        currency: "gems",
    },
    {
        id: 4,
        category: "streak",
        title: "Çift XP Boost",
        description: "15 dakika boyunca",
        icon: Sparkles,
        iconColor: "text-amber-500",
        bgGradient: "from-amber-400 to-orange-500",
        price: 300,
        currency: "gems",
    },
];

const premiumPlan = {
    title: "LinguaFlow Pro",
    description: "Sınırsız kalp, reklamsız deneyim, özel içerikler",
    features: [
        "Sınırsız kalp",
        "Reklamsız deneyim",
        "Özel hikayeler",
        "Öncelikli destek",
        "Rozet koleksiyonu"
    ],
    monthlyPrice: 79.99,
    yearlyPrice: 599.99,
};

// Mock kullanıcı verisi
const userGems = 850;

export default function ShopPage() {
    const isPremiumLive = APP_CONFIG.isPremiumLive;
    const isEarlyAccess = APP_CONFIG.isEarlyAccess;

    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-violet-50/30 p-4 pb-20">

            {/* Early Access Banner */}
            {isEarlyAccess && !isPremiumLive && (
                <div className="w-full max-w-[600px] mb-6">
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 p-4 rounded-2xl flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center">
                            <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-bold text-amber-800">🎉 Erken Erişim Dönemi!</p>
                            <p className="text-sm text-amber-600">Tüm özellikler şu an ücretsiz. Mağaza yakında aktif olacak.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Başlık ve Gem Sayısı */}
            <div className="w-full max-w-[600px] mb-8">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                        <Store className="w-8 h-8 text-violet-500" />
                        <h1 className="text-3xl font-extrabold text-slate-800">Mağaza</h1>
                    </div>
                    <div className="flex items-center gap-2 bg-violet-100 px-4 py-2 rounded-xl">
                        <Gem className="w-5 h-5 text-violet-500" />
                        <span className="font-extrabold text-violet-600">{userGems}</span>
                    </div>
                </div>
                <p className="text-slate-500 font-medium">
                    {isPremiumLive ? "XP kazan, gem topla, ödülleri al!" : "Yakında burada harika ödüller olacak!"}
                </p>
            </div>

            {/* Premium Kart - Sadece Premium sistemi aktifse göster */}
            {isPremiumLive && (
                <div className="w-full max-w-[600px] mb-8">
                    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-6 rounded-3xl text-white shadow-2xl shadow-indigo-300/50">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <Crown className="w-6 h-6 text-amber-300" />
                                <h2 className="text-2xl font-extrabold">{premiumPlan.title}</h2>
                            </div>
                            <p className="text-white/80 mb-4">{premiumPlan.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {premiumPlan.features.map((feature, i) => (
                                    <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                                        ✓ {feature}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <Button className="bg-white text-indigo-600 hover:bg-white/90 font-bold px-6 py-5 rounded-xl border-b-4 border-indigo-200 active:border-b-0">
                                    Aylık ₺{premiumPlan.monthlyPrice}
                                </Button>
                                <Button variant="outline" className="border-2 border-white/50 text-white hover:bg-white/10 font-bold px-6 py-5 rounded-xl">
                                    Yıllık ₺{premiumPlan.yearlyPrice}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mağaza Öğeleri */}
            <div className="w-full max-w-[600px]">
                <h2 className="text-xl font-bold text-slate-700 mb-4">
                    {isPremiumLive ? "Güçlendiriciler" : "Yakında Gelecek Güçlendiriciler"}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    {shopItems.map((item) => (
                        <div
                            key={item.id}
                            className={`relative bg-white border border-slate-100 rounded-2xl p-4 transition-all ${!isPremiumLive ? "opacity-60" : "hover:shadow-lg"
                                }`}
                        >
                            {item.popular && isPremiumLive && (
                                <div className="absolute -top-2 -right-2 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                                    Popüler
                                </div>
                            )}

                            {/* Yakında Badge */}
                            {!isPremiumLive && (
                                <div className="absolute -top-2 -right-2 bg-slate-400 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                                    Yakında
                                </div>
                            )}

                            {/* İkon */}
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center mb-3 shadow-lg ${!isPremiumLive && "grayscale"}`}>
                                <item.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Bilgiler */}
                            <h3 className="font-bold text-slate-700">{item.title}</h3>
                            <p className="text-sm text-slate-400 mb-3">{item.description}</p>

                            {/* Fiyat Butonu - Sadece Premium aktifse göster */}
                            {isPremiumLive ? (
                                <Button
                                    className="w-full bg-violet-100 hover:bg-violet-200 text-violet-600 font-bold rounded-xl py-2"
                                    disabled={userGems < item.price}
                                >
                                    <Gem className="w-4 h-4 mr-1" />
                                    {item.price}
                                </Button>
                            ) : (
                                <div className="w-full bg-slate-100 text-slate-400 font-bold rounded-xl py-2 text-center text-sm">
                                    Erken Erişimde Ücretsiz
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
