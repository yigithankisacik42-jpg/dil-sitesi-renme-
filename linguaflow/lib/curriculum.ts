/**
 * LinguaFlow Müfredat Verileri - 20 Ünite/Seviye
 * 
 * Dil > Seviye > Ünite > Ders hiyerarşisi
 * Tüm ünite başlıkları Türkçe (Türkçe bilenlere yönelik)
 */

export type LessonType = "LESSON" | "READING" | "LECTURE" | "SPEAKING" | "VOCABULARY" | "PHRASES" | "GRAMMAR";

export interface Lesson {
    id: number;
    type: LessonType;
    title: string;
    description?: string;
}

export interface Unit {
    id: number;
    title: string;
    description: string;
    color: string;
    borderColor: string;
    lessons: Lesson[];
}

export interface LevelCurriculum {
    levelCode: string;
    units: Unit[];
}

export interface LanguageCurriculum {
    langCode: string;
    levels: LevelCurriculum[];
}

// Renk paleti (20 renk)
const unitColors = [
    { color: "from-indigo-500 to-indigo-600", borderColor: "border-indigo-700" },
    { color: "from-violet-500 to-violet-600", borderColor: "border-violet-700" },
    { color: "from-rose-500 to-rose-600", borderColor: "border-rose-700" },
    { color: "from-amber-500 to-amber-600", borderColor: "border-amber-700" },
    { color: "from-emerald-500 to-emerald-600", borderColor: "border-emerald-700" },
    { color: "from-sky-500 to-sky-600", borderColor: "border-sky-700" },
    { color: "from-purple-500 to-purple-600", borderColor: "border-purple-700" },
    { color: "from-pink-500 to-pink-600", borderColor: "border-pink-700" },
    { color: "from-teal-500 to-teal-600", borderColor: "border-teal-700" },
    { color: "from-orange-500 to-orange-600", borderColor: "border-orange-700" },
    { color: "from-cyan-500 to-cyan-600", borderColor: "border-cyan-700" },
    { color: "from-fuchsia-500 to-fuchsia-600", borderColor: "border-fuchsia-700" },
    { color: "from-lime-500 to-lime-600", borderColor: "border-lime-700" },
    { color: "from-red-500 to-red-600", borderColor: "border-red-700" },
    { color: "from-blue-500 to-blue-600", borderColor: "border-blue-700" },
    { color: "from-yellow-500 to-yellow-600", borderColor: "border-yellow-700" },
    { color: "from-green-500 to-green-600", borderColor: "border-green-700" },
    { color: "from-slate-500 to-slate-600", borderColor: "border-slate-700" },
    { color: "from-zinc-500 to-zinc-600", borderColor: "border-zinc-700" },
    { color: "from-stone-500 to-stone-600", borderColor: "border-stone-700" },
];

// Ders dizisi oluştur (VOCABULARY, PHRASES, GRAMMAR dahil)
function generateLessons(startId: number, count: number = 10): Lesson[] {
    const lessons: Lesson[] = [];
    const pattern: LessonType[] = [
        "LECTURE",     // 1. Konu Anlatımı
        "VOCABULARY",  // 2. Kelimeler
        "PHRASES",     // 3. Kalıplar (YENİ)
        "GRAMMAR",     // 4. Gramer (YENİ)
        "LESSON",      // 5. Quiz 1
        "LESSON",      // 6. Quiz 2
        "SPEAKING",    // 7. Konuşma
        "READING",     // 8. Okuma
        "LESSON",      // 9. Quiz 3
        "LESSON"       // 10. Quiz 4
    ];

    for (let i = 0; i < count; i++) {
        const type = pattern[i % pattern.length];
        lessons.push({
            id: startId + i,
            type,
            title: type === "LECTURE" ? "Konu Anlatımı" :
                type === "VOCABULARY" ? "Kelimeler" :
                    type === "PHRASES" ? "Kalıplar" :
                        type === "GRAMMAR" ? "Gramer" :
                            type === "READING" ? "Okuma" :
                                type === "SPEAKING" ? "Konuşma" :
                                    `Alıştırma`,
        });
    }

    return lessons;
}

// ===== İSPANYOLCA A1 =====
const spanishA1Units: Unit[] = [
    { id: 1, title: "Selamlaşma ve Tanışma", description: "Merhaba, nasılsın, teşekkürler", ...unitColors[0], lessons: generateLessons(1) },
    { id: 2, title: "Sayılar 1-20", description: "Temel sayılar", ...unitColors[1], lessons: generateLessons(10) },
    { id: 3, title: "Aile Üyeleri", description: "Anne, baba, kardeş", ...unitColors[2], lessons: generateLessons(20) },
    { id: 4, title: "Renkler", description: "Temel renkler", ...unitColors[3], lessons: generateLessons(30) },
    { id: 5, title: "Yiyecekler", description: "Meyve ve sebzeler", ...unitColors[4], lessons: generateLessons(40) },
    { id: 6, title: "İçecekler", description: "Su, kahve, çay", ...unitColors[5], lessons: generateLessons(50) },
    { id: 7, title: "Günler ve Aylar", description: "Pazartesi, Ocak", ...unitColors[6], lessons: generateLessons(60) },
    { id: 8, title: "Sayılar 21-100", description: "İleri sayılar", ...unitColors[7], lessons: generateLessons(70) },
    { id: 9, title: "Ev Odaları", description: "Yatak odası, mutfak", ...unitColors[8], lessons: generateLessons(80) },
    { id: 10, title: "Mobilyalar", description: "Masa, sandalye", ...unitColors[9], lessons: generateLessons(90) },
    { id: 11, title: "Vücut Bölümleri", description: "Baş, kol, bacak", ...unitColors[10], lessons: generateLessons(100) },
    { id: 12, title: "Giysiler", description: "Gömlek, pantolon", ...unitColors[11], lessons: generateLessons(110) },
    { id: 13, title: "Hayvanlar", description: "Kedi, köpek, kuş", ...unitColors[12], lessons: generateLessons(120) },
    { id: 14, title: "Meslekler 1", description: "Doktor, öğretmen", ...unitColors[13], lessons: generateLessons(130) },
    { id: 15, title: "Şehirde Yerler", description: "Okul, market, park", ...unitColors[14], lessons: generateLessons(140) },
    { id: 16, title: "Ulaşım Araçları", description: "Araba, otobüs", ...unitColors[15], lessons: generateLessons(150) },
    { id: 17, title: "Günlük Rutinler", description: "Kalkmak, yemek", ...unitColors[16], lessons: generateLessons(160) },
    { id: 18, title: "Saat Kaç?", description: "Saat okuma", ...unitColors[17], lessons: generateLessons(170) },
    { id: 19, title: "Hava Durumu", description: "Güneşli, yağmurlu", ...unitColors[18], lessons: generateLessons(180) },
    { id: 20, title: "Hobiler", description: "Spor, müzik", ...unitColors[19], lessons: generateLessons(190) },
    // Yeni A1 Üniteleri (21-25)
    { id: 21, title: "Duygular ve Hisler", description: "Nasıl hissediyorsun", ...unitColors[0], lessons: generateLessons(200) },
    { id: 22, title: "Okul ve Sınıf", description: "Kitap, defter, kalem", ...unitColors[1], lessons: generateLessons(210) },
    { id: 23, title: "Meyveler ve Sebzeler", description: "Elma, domates", ...unitColors[2], lessons: generateLessons(220) },
    { id: 24, title: "Ülkeler ve Milletler", description: "Nereli olduğunu söyle", ...unitColors[3], lessons: generateLessons(230) },
    { id: 25, title: "Temel Fiiller", description: "Konuşmak, yemek", ...unitColors[4], lessons: generateLessons(240) },
];

// ===== İSPANYOLCA A2 =====
const spanishA2Units: Unit[] = [
    { id: 26, title: "Geçmiş Zaman 1", description: "Pretérito indefinido", ...unitColors[0], lessons: generateLessons(250) },
    { id: 27, title: "Geçmiş Zaman 2", description: "Düzensiz fiiller", ...unitColors[1], lessons: generateLessons(260) },
    { id: 28, title: "Restoranda", description: "Sipariş verme", ...unitColors[2], lessons: generateLessons(270) },
    { id: 29, title: "Alışveriş", description: "Fiyat sorma", ...unitColors[3], lessons: generateLessons(280) },
    { id: 30, title: "Seyahat Planları", description: "Tatil yerleri", ...unitColors[4], lessons: generateLessons(290) },
    { id: 31, title: "Otel Rezervasyonu", description: "Oda ayırtma", ...unitColors[5], lessons: generateLessons(300) },
    { id: 32, title: "Havalimanında", description: "Uçuş bilgileri", ...unitColors[6], lessons: generateLessons(310) },
    { id: 33, title: "Doktorda", description: "Şikayet bildirme", ...unitColors[7], lessons: generateLessons(320) },
    { id: 34, title: "Eczanede", description: "İlaç alma", ...unitColors[8], lessons: generateLessons(330) },
    { id: 35, title: "Meslekler 2", description: "İş tanımları", ...unitColors[9], lessons: generateLessons(340) },
    { id: 36, title: "İş Görüşmesi", description: "CV hazırlama", ...unitColors[10], lessons: generateLessons(350) },
    { id: 37, title: "Telefonda", description: "Telefon konuşması", ...unitColors[11], lessons: generateLessons(360) },
    { id: 38, title: "E-posta Yazma", description: "Resmi yazışma", ...unitColors[12], lessons: generateLessons(370) },
    { id: 39, title: "Duygular", description: "Derin duygular", ...unitColors[13], lessons: generateLessons(380) },
    { id: 40, title: "Karakter Özellikleri", description: "Kibar, çalışkan", ...unitColors[14], lessons: generateLessons(390) },
    { id: 41, title: "Spor ve Fitness", description: "Egzersiz türleri", ...unitColors[15], lessons: generateLessons(400) },
    { id: 42, title: "Müzik ve Sanat", description: "Enstrümanlar", ...unitColors[16], lessons: generateLessons(410) },
    { id: 43, title: "Sinema ve Dizi", description: "Film türleri", ...unitColors[17], lessons: generateLessons(420) },
    { id: 44, title: "Teknoloji", description: "Bilgisayar, telefon", ...unitColors[18], lessons: generateLessons(430) },
    { id: 45, title: "Sosyal Medya", description: "İnternet kullanımı", ...unitColors[19], lessons: generateLessons(440) },
    // Yeni A2 Üniteleri (46-50)
    { id: 46, title: "Ev ve Taşınma", description: "Kira, ev arama", ...unitColors[0], lessons: generateLessons(450) },
    { id: 47, title: "Çevre ve Doğa", description: "Çevre koruma", ...unitColors[1], lessons: generateLessons(460) },
    { id: 48, title: "Haberler", description: "Gazete ve dergi", ...unitColors[2], lessons: generateLessons(470) },
    { id: 49, title: "Kültür ve Gelenekler", description: "Festivaller", ...unitColors[3], lessons: generateLessons(480) },
    { id: 50, title: "A2 Final Tekrar", description: "Genel tekrar", ...unitColors[4], lessons: generateLessons(490) },
];


// ===== İSPANYOLCA B1 =====
const spanishB1Units: Unit[] = [
    { id: 51, title: "Gelecek Zaman", description: "Planlar ve tahminler", ...unitColors[0], lessons: generateLessons(500) },
    { id: 52, title: "Koşul Cümleleri 1", description: "Eğer olursa", ...unitColors[1], lessons: generateLessons(510) },
    { id: 53, title: "Koşul Cümleleri 2", description: "Gerçekdışı koşullar", ...unitColors[2], lessons: generateLessons(520) },
    { id: 54, title: "Subjunctive Giriş", description: "Dilek ve istek", ...unitColors[3], lessons: generateLessons(530) },
    { id: 55, title: "Haberler ve Medya", description: "Gazete okuma", ...unitColors[4], lessons: generateLessons(540) },
    { id: 56, title: "Çevre Sorunları", description: "Kirlilik, iklim", ...unitColors[5], lessons: generateLessons(550) },
    { id: 57, title: "Sürdürülebilirlik", description: "Geri dönüşüm", ...unitColors[6], lessons: generateLessons(560) },
    { id: 58, title: "Kültür ve Gelenekler", description: "Festivaller", ...unitColors[7], lessons: generateLessons(570) },
    { id: 59, title: "Ekonomi Temelleri", description: "Para, bütçe", ...unitColors[8], lessons: generateLessons(580) },
    { id: 60, title: "Bankacılık", description: "Hesap işlemleri", ...unitColors[9], lessons: generateLessons(590) },
    { id: 61, title: "Tartışma Becerileri", description: "Fikir belirtme", ...unitColors[10], lessons: generateLessons(600) },
    { id: 62, title: "Sunum Yapma", description: "İş sunumları", ...unitColors[11], lessons: generateLessons(610) },
    { id: 63, title: "Edebiyat 1", description: "Hikaye okuma", ...unitColors[12], lessons: generateLessons(620) },
    { id: 64, title: "Şiir ve Şarkı", description: "Dil sanatları", ...unitColors[13], lessons: generateLessons(630) },
    { id: 65, title: "Tarih ve Politika", description: "Geçmiş olaylar", ...unitColors[14], lessons: generateLessons(640) },
    { id: 66, title: "Hukuk Temelleri", description: "Haklar ve yasalar", ...unitColors[15], lessons: generateLessons(650) },
    { id: 67, title: "Bilim ve Teknoloji", description: "Yenilikler", ...unitColors[16], lessons: generateLessons(660) },
    { id: 68, title: "Sağlık ve Beslenme", description: "Sağlıklı yaşam", ...unitColors[17], lessons: generateLessons(670) },
    { id: 69, title: "Psikoloji Temelleri", description: "Davranış, düşünce", ...unitColors[18], lessons: generateLessons(680) },
    { id: 70, title: "İş İspanyolcası", description: "Profesyonel dil", ...unitColors[19], lessons: generateLessons(690) },
    // Yeni B1 Üniteleri (71-75)
    { id: 71, title: "İleri Yazma", description: "Kompozisyon", ...unitColors[0], lessons: generateLessons(700) },
    { id: 72, title: "Dinleme Becerileri", description: "Doğal konuşmalar", ...unitColors[1], lessons: generateLessons(710) },
    { id: 73, title: "İspanyol Coğrafyası", description: "Bölgeler ve şehirler", ...unitColors[2], lessons: generateLessons(720) },
    { id: 74, title: "Latin Amerika", description: "Kültür ve ülkeler", ...unitColors[3], lessons: generateLessons(730) },
    { id: 75, title: "B1 Final Tekrar", description: "Genel değerlendirme", ...unitColors[4], lessons: generateLessons(740) },
];

// ===== İSPANYOLCA B2 =====
const spanishB2Units: Unit[] = [
    { id: 76, title: "Subjunctive Derinlemesine", description: "Karmaşık dilek cümleleri", ...unitColors[0], lessons: generateLessons(750) },
    { id: 77, title: "Koşul Cümleleri 3", description: "İmkansız koşullar", ...unitColors[1], lessons: generateLessons(760) },
    { id: 78, title: "Edilgen Çatı", description: "Pasif yapılar", ...unitColors[2], lessons: generateLessons(770) },
    { id: 79, title: "Dolaylı Anlatım", description: "Aktarılan konuşma", ...unitColors[3], lessons: generateLessons(780) },
    { id: 80, title: "Akademik Yazarlık", description: "Makale ve tez yazımı", ...unitColors[4], lessons: generateLessons(790) },
    { id: 81, title: "Tartışma ve Münazara", description: "İleri argüman geliştirme", ...unitColors[5], lessons: generateLessons(800) },
    { id: 82, title: "İş Müzakereleri", description: "Anlaşma ve pazarlık", ...unitColors[6], lessons: generateLessons(810) },
    { id: 83, title: "Hukuk Dili", description: "Sözleşme ve yasal terimler", ...unitColors[7], lessons: generateLessons(820) },
    { id: 84, title: "Tıp Terminolojisi", description: "Sağlık sektörü dili", ...unitColors[8], lessons: generateLessons(830) },
    { id: 85, title: "Finans ve Yatırım", description: "Ekonomik terimler", ...unitColors[9], lessons: generateLessons(840) },
    { id: 86, title: "Çağdaş Edebiyat", description: "Modern İspanyol yazarlar", ...unitColors[10], lessons: generateLessons(850) },
    { id: 87, title: "Eleştiri Yazarlığı", description: "Analitik yazım", ...unitColors[11], lessons: generateLessons(860) },
    { id: 88, title: "Medya Analizi", description: "Haber ve propaganda", ...unitColors[12], lessons: generateLessons(870) },
    { id: 89, title: "Sosyoloji ve Toplum", description: "Sosyal meseleler", ...unitColors[13], lessons: generateLessons(880) },
    { id: 90, title: "Felsefe Temelleri", description: "Düşünce tarihi", ...unitColors[14], lessons: generateLessons(890) },
    { id: 91, title: "Bilimsel Araştırma", description: "Araştırma metodolojisi", ...unitColors[15], lessons: generateLessons(900) },
    { id: 92, title: "Çevre Politikaları", description: "Küresel çevre sorunları", ...unitColors[16], lessons: generateLessons(910) },
    { id: 93, title: "Uluslararası İlişkiler", description: "Diplomasi dili", ...unitColors[17], lessons: generateLessons(920) },
    { id: 94, title: "Kültürlerarası İletişim", description: "Farklı kültürler", ...unitColors[18], lessons: generateLessons(930) },
    { id: 95, title: "İleri İspanyolca", description: "Ustalık seviyesi hazırlık", ...unitColors[19], lessons: generateLessons(940) },
    // Yeni B2 Üniteleri (96-100)
    { id: 96, title: "Diplomatik Yazışma", description: "Resmi yazışmalar", ...unitColors[0], lessons: generateLessons(950) },
    { id: 97, title: "Tercümanlık", description: "Çeviri teknikleri", ...unitColors[1], lessons: generateLessons(960) },
    { id: 98, title: "Konferans İspanyolcası", description: "Akademik sunumlar", ...unitColors[2], lessons: generateLessons(970) },
    { id: 99, title: "Yaratıcı Yazarlık", description: "Hikaye ve şiir yazma", ...unitColors[3], lessons: generateLessons(980) },
    { id: 100, title: "B2 Final Tekrar", description: "Kapsamlı değerlendirme", ...unitColors[4], lessons: generateLessons(990) },
];

// ===== İNGİLİZCE A1 =====
const englishA1Units: Unit[] = [
    { id: 101, title: "Selamlaşma ve Tanışma", description: "Hello, how are you", ...unitColors[0], lessons: generateLessons(1001) },
    { id: 102, title: "Sayılar 1-20", description: "Basic numbers", ...unitColors[1], lessons: generateLessons(1010) },
    { id: 103, title: "Aile Üyeleri", description: "Family members", ...unitColors[2], lessons: generateLessons(1020) },
    { id: 104, title: "Renkler", description: "Colors", ...unitColors[3], lessons: generateLessons(1030) },
    { id: 105, title: "Yiyecekler", description: "Fruits and vegetables", ...unitColors[4], lessons: generateLessons(1040) },
    { id: 106, title: "İçecekler", description: "Water, coffee, tea", ...unitColors[5], lessons: generateLessons(1050) },
    { id: 107, title: "Günler ve Aylar", description: "Monday, January", ...unitColors[6], lessons: generateLessons(1060) },
    { id: 108, title: "Sayılar 21-100", description: "Advanced numbers", ...unitColors[7], lessons: generateLessons(1070) },
    { id: 109, title: "Ev Odaları", description: "Bedroom, kitchen", ...unitColors[8], lessons: generateLessons(1080) },
    { id: 110, title: "Mobilyalar", description: "Table, chair", ...unitColors[9], lessons: generateLessons(1090) },
    { id: 111, title: "Vücut Bölümleri", description: "Head, arm, leg", ...unitColors[10], lessons: generateLessons(1100) },
    { id: 112, title: "Giysiler", description: "Shirt, pants", ...unitColors[11], lessons: generateLessons(1110) },
    { id: 113, title: "Hayvanlar", description: "Cat, dog, bird", ...unitColors[12], lessons: generateLessons(1120) },
    { id: 114, title: "Meslekler 1", description: "Doctor, teacher", ...unitColors[13], lessons: generateLessons(1130) },
    { id: 115, title: "Şehirde Yerler", description: "School, market, park", ...unitColors[14], lessons: generateLessons(1140) },
    { id: 116, title: "Ulaşım Araçları", description: "Car, bus", ...unitColors[15], lessons: generateLessons(1150) },
    { id: 117, title: "Günlük Rutinler", description: "Wake up, eat", ...unitColors[16], lessons: generateLessons(1160) },
    { id: 118, title: "Saat Kaç?", description: "Telling time", ...unitColors[17], lessons: generateLessons(1170) },
    { id: 119, title: "Hava Durumu", description: "Sunny, rainy", ...unitColors[18], lessons: generateLessons(1180) },
    { id: 120, title: "Hobiler", description: "Sports, music", ...unitColors[19], lessons: generateLessons(1190) },
];

// ===== İNGİLİZCE A2 =====
const englishA2Units: Unit[] = [
    { id: 121, title: "Geçmiş Zaman 1", description: "Simple past", ...unitColors[0], lessons: generateLessons(1200) },
    { id: 122, title: "Geçmiş Zaman 2", description: "Irregular verbs", ...unitColors[1], lessons: generateLessons(1210) },
    { id: 123, title: "Restoranda", description: "Ordering food", ...unitColors[2], lessons: generateLessons(1220) },
    { id: 124, title: "Alışveriş", description: "Asking prices", ...unitColors[3], lessons: generateLessons(1230) },
    { id: 125, title: "Seyahat Planları", description: "Vacation places", ...unitColors[4], lessons: generateLessons(1240) },
    { id: 126, title: "Otel Rezervasyonu", description: "Booking a room", ...unitColors[5], lessons: generateLessons(1250) },
    { id: 127, title: "Havalimanında", description: "Flight information", ...unitColors[6], lessons: generateLessons(1260) },
    { id: 128, title: "Doktorda", description: "Describing symptoms", ...unitColors[7], lessons: generateLessons(1270) },
    { id: 129, title: "Eczanede", description: "Getting medicine", ...unitColors[8], lessons: generateLessons(1280) },
    { id: 130, title: "Meslekler 2", description: "Job descriptions", ...unitColors[9], lessons: generateLessons(1290) },
    { id: 131, title: "İş Görüşmesi", description: "CV preparation", ...unitColors[10], lessons: generateLessons(1300) },
    { id: 132, title: "Telefonda", description: "Phone conversation", ...unitColors[11], lessons: generateLessons(1310) },
    { id: 133, title: "E-posta Yazma", description: "Formal writing", ...unitColors[12], lessons: generateLessons(1320) },
    { id: 134, title: "Duygular", description: "Happy, sad", ...unitColors[13], lessons: generateLessons(1330) },
    { id: 135, title: "Karakter Özellikleri", description: "Kind, hardworking", ...unitColors[14], lessons: generateLessons(1340) },
    { id: 136, title: "Spor ve Fitness", description: "Exercise types", ...unitColors[15], lessons: generateLessons(1350) },
    { id: 137, title: "Müzik ve Sanat", description: "Instruments", ...unitColors[16], lessons: generateLessons(1360) },
    { id: 138, title: "Sinema ve Dizi", description: "Movie genres", ...unitColors[17], lessons: generateLessons(1370) },
    { id: 139, title: "Teknoloji", description: "Computer, phone", ...unitColors[18], lessons: generateLessons(1380) },
    { id: 140, title: "Sosyal Medya", description: "Internet use", ...unitColors[19], lessons: generateLessons(1390) },
];

// ===== İNGİLİZCE B1 =====
const englishB1Units: Unit[] = [
    { id: 141, title: "Gelecek Zaman", description: "Will and going to", ...unitColors[0], lessons: generateLessons(1400) },
    { id: 142, title: "Koşul Cümleleri 1", description: "First conditional", ...unitColors[1], lessons: generateLessons(1410) },
    { id: 143, title: "Koşul Cümleleri 2", description: "Second conditional", ...unitColors[2], lessons: generateLessons(1420) },
    { id: 144, title: "Passive Voice", description: "Edilgen yapı", ...unitColors[3], lessons: generateLessons(1430) },
    { id: 145, title: "Reported Speech", description: "Dolaylı anlatım", ...unitColors[4], lessons: generateLessons(1440) },
    { id: 146, title: "Phrasal Verbs 1", description: "Deyimsel fiiller", ...unitColors[5], lessons: generateLessons(1450) },
    { id: 147, title: "Phrasal Verbs 2", description: "Daha fazla deyim", ...unitColors[6], lessons: generateLessons(1460) },
    { id: 148, title: "Haberler ve Medya", description: "News reading", ...unitColors[7], lessons: generateLessons(1470) },
    { id: 149, title: "Çevre Sorunları", description: "Environment", ...unitColors[8], lessons: generateLessons(1480) },
    { id: 150, title: "Sürdürülebilirlik", description: "Recycling", ...unitColors[9], lessons: generateLessons(1490) },
    { id: 151, title: "Kültür ve Gelenekler", description: "Festivals", ...unitColors[10], lessons: generateLessons(1500) },
    { id: 152, title: "Ekonomi Temelleri", description: "Money, budget", ...unitColors[11], lessons: generateLessons(1510) },
    { id: 153, title: "Tartışma Becerileri", description: "Giving opinions", ...unitColors[12], lessons: generateLessons(1520) },
    { id: 154, title: "Sunum Yapma", description: "Presentations", ...unitColors[13], lessons: generateLessons(1530) },
    { id: 155, title: "Edebiyat 1", description: "Story reading", ...unitColors[14], lessons: generateLessons(1540) },
    { id: 156, title: "Akademik Yazma", description: "Essay writing", ...unitColors[15], lessons: generateLessons(1550) },
    { id: 157, title: "Bilim ve Teknoloji", description: "Innovations", ...unitColors[16], lessons: generateLessons(1560) },
    { id: 158, title: "Sağlık ve Beslenme", description: "Healthy living", ...unitColors[17], lessons: generateLessons(1570) },
    { id: 159, title: "Psikoloji Temelleri", description: "Behavior, thoughts", ...unitColors[18], lessons: generateLessons(1580) },
    { id: 160, title: "İş İngilizcesi 1", description: "Business basics", ...unitColors[19], lessons: generateLessons(1590) },
];

// ===== İNGİLİZCE B2 =====
const englishB2Units: Unit[] = [
    { id: 161, title: "İleri Gramer 1", description: "Advanced tenses", ...unitColors[0], lessons: generateLessons(1600) },
    { id: 162, title: "İleri Gramer 2", description: "Complex structures", ...unitColors[1], lessons: generateLessons(1610) },
    { id: 163, title: "Deyimler 1", description: "Common idioms", ...unitColors[2], lessons: generateLessons(1620) },
    { id: 164, title: "Deyimler 2", description: "More idioms", ...unitColors[3], lessons: generateLessons(1630) },
    { id: 165, title: "Formal Yazışma", description: "Formal letters", ...unitColors[4], lessons: generateLessons(1640) },
    { id: 166, title: "Sunum Teknikleri", description: "Advanced presenting", ...unitColors[5], lessons: generateLessons(1650) },
    { id: 167, title: "Müzakere", description: "Negotiation skills", ...unitColors[6], lessons: generateLessons(1660) },
    { id: 168, title: "Hukuk İngilizcesi", description: "Legal vocabulary", ...unitColors[7], lessons: generateLessons(1670) },
    { id: 169, title: "Tıbbi İngilizce", description: "Medical terms", ...unitColors[8], lessons: generateLessons(1680) },
    { id: 170, title: "Finans İngilizcesi", description: "Finance vocabulary", ...unitColors[9], lessons: generateLessons(1690) },
    { id: 171, title: "Edebiyat Analizi", description: "Literature analysis", ...unitColors[10], lessons: generateLessons(1700) },
    { id: 172, title: "Tartışmalı Konular", description: "Controversial topics", ...unitColors[11], lessons: generateLessons(1710) },
    { id: 173, title: "Akademik Okuma", description: "Research papers", ...unitColors[12], lessons: generateLessons(1720) },
    { id: 174, title: "Eleştirel Düşünme", description: "Critical thinking", ...unitColors[13], lessons: generateLessons(1730) },
    { id: 175, title: "Uluslararası İlişkiler", description: "Global affairs", ...unitColors[14], lessons: generateLessons(1740) },
    { id: 176, title: "Medya Analizi", description: "Media literacy", ...unitColors[15], lessons: generateLessons(1750) },
    { id: 177, title: "İş İngilizcesi 2", description: "Advanced business", ...unitColors[16], lessons: generateLessons(1760) },
    { id: 178, title: "Proje Yönetimi", description: "Project management", ...unitColors[17], lessons: generateLessons(1770) },
    { id: 179, title: "Kültürlerarası İletişim", description: "Cross-cultural", ...unitColors[18], lessons: generateLessons(1780) },
    { id: 180, title: "Kariyer Geliştirme", description: "Career development", ...unitColors[19], lessons: generateLessons(1790) },
];

// ===== FRANSIZCA A1 =====
const frenchA1Units: Unit[] = [
    { id: 201, title: "Selamlaşma ve Tanışma", description: "Bonjour, comment allez-vous", ...unitColors[0], lessons: generateLessons(2001) },
    { id: 202, title: "Sayılar 1-20", description: "Nombres de base", ...unitColors[1], lessons: generateLessons(2010) },
    { id: 203, title: "Aile Üyeleri", description: "La famille", ...unitColors[2], lessons: generateLessons(2020) },
    { id: 204, title: "Renkler", description: "Les couleurs", ...unitColors[3], lessons: generateLessons(2030) },
    { id: 205, title: "Yiyecekler", description: "Fruits et légumes", ...unitColors[4], lessons: generateLessons(2040) },
    { id: 206, title: "İçecekler", description: "Eau, café, thé", ...unitColors[5], lessons: generateLessons(2050) },
    { id: 207, title: "Günler ve Aylar", description: "Lundi, janvier", ...unitColors[6], lessons: generateLessons(2060) },
    { id: 208, title: "Sayılar 21-100", description: "Nombres avancés", ...unitColors[7], lessons: generateLessons(2070) },
    { id: 209, title: "Ev Odaları", description: "La maison", ...unitColors[8], lessons: generateLessons(2080) },
    { id: 210, title: "Mobilyalar", description: "Les meubles", ...unitColors[9], lessons: generateLessons(2090) },
    { id: 211, title: "Vücut Bölümleri", description: "Le corps", ...unitColors[10], lessons: generateLessons(2100) },
    { id: 212, title: "Giysiler", description: "Les vêtements", ...unitColors[11], lessons: generateLessons(2110) },
    { id: 213, title: "Hayvanlar", description: "Les animaux", ...unitColors[12], lessons: generateLessons(2120) },
    { id: 214, title: "Meslekler 1", description: "Les professions", ...unitColors[13], lessons: generateLessons(2130) },
    { id: 215, title: "Şehirde Yerler", description: "En ville", ...unitColors[14], lessons: generateLessons(2140) },
    { id: 216, title: "Ulaşım Araçları", description: "Les transports", ...unitColors[15], lessons: generateLessons(2150) },
    { id: 217, title: "Günlük Rutinler", description: "La routine", ...unitColors[16], lessons: generateLessons(2160) },
    { id: 218, title: "Saat Kaç?", description: "Quelle heure est-il", ...unitColors[17], lessons: generateLessons(2170) },
    { id: 219, title: "Hava Durumu", description: "La météo", ...unitColors[18], lessons: generateLessons(2180) },
    { id: 220, title: "Hobiler", description: "Les loisirs", ...unitColors[19], lessons: generateLessons(2190) },
];

// ===== FRANSIZCA A2 =====
const frenchA2Units: Unit[] = [
    { id: 221, title: "Geçmiş Zaman 1", description: "Passé composé", ...unitColors[0], lessons: generateLessons(2200) },
    { id: 222, title: "Geçmiş Zaman 2", description: "Imparfait", ...unitColors[1], lessons: generateLessons(2210) },
    { id: 223, title: "Restoranda", description: "Au restaurant", ...unitColors[2], lessons: generateLessons(2220) },
    { id: 224, title: "Alışveriş", description: "Faire les courses", ...unitColors[3], lessons: generateLessons(2230) },
    { id: 225, title: "Seyahat Planları", description: "Voyage", ...unitColors[4], lessons: generateLessons(2240) },
    { id: 226, title: "Otel Rezervasyonu", description: "Réservation", ...unitColors[5], lessons: generateLessons(2250) },
    { id: 227, title: "Havalimanında", description: "À l'aéroport", ...unitColors[6], lessons: generateLessons(2260) },
    { id: 228, title: "Doktorda", description: "Chez le médecin", ...unitColors[7], lessons: generateLessons(2270) },
    { id: 229, title: "Eczanede", description: "À la pharmacie", ...unitColors[8], lessons: generateLessons(2280) },
    { id: 230, title: "Meslekler 2", description: "Descriptions de postes", ...unitColors[9], lessons: generateLessons(2290) },
    { id: 231, title: "İş Görüşmesi", description: "Entretien d'embauche", ...unitColors[10], lessons: generateLessons(2300) },
    { id: 232, title: "Telefonda", description: "Au téléphone", ...unitColors[11], lessons: generateLessons(2310) },
    { id: 233, title: "E-posta Yazma", description: "Correspondance", ...unitColors[12], lessons: generateLessons(2320) },
    { id: 234, title: "Duygular", description: "Les émotions", ...unitColors[13], lessons: generateLessons(2330) },
    { id: 235, title: "Karakter Özellikleri", description: "La personnalité", ...unitColors[14], lessons: generateLessons(2340) },
    { id: 236, title: "Spor ve Fitness", description: "Le sport", ...unitColors[15], lessons: generateLessons(2350) },
    { id: 237, title: "Müzik ve Sanat", description: "L'art", ...unitColors[16], lessons: generateLessons(2360) },
    { id: 238, title: "Sinema ve Dizi", description: "Le cinéma", ...unitColors[17], lessons: generateLessons(2370) },
    { id: 239, title: "Teknoloji", description: "La technologie", ...unitColors[18], lessons: generateLessons(2380) },
    { id: 240, title: "Fransız Kültürü", description: "Culture française", ...unitColors[19], lessons: generateLessons(2390) },
];

// Tüm müfredat
export const curriculum: LanguageCurriculum[] = [
    {
        langCode: "es",
        levels: [
            { levelCode: "A1", units: spanishA1Units },
            { levelCode: "A2", units: spanishA2Units },
            { levelCode: "B1", units: spanishB1Units },
            { levelCode: "B2", units: spanishB2Units },
        ],
    },
    {
        langCode: "en",
        levels: [
            { levelCode: "A1", units: englishA1Units },
            { levelCode: "A2", units: englishA2Units },
            { levelCode: "B1", units: englishB1Units },
            { levelCode: "B2", units: englishB2Units },
        ],
    },
    {
        langCode: "fr",
        levels: [
            { levelCode: "A1", units: frenchA1Units },
            { levelCode: "A2", units: frenchA2Units },
        ],
    },
];

// Yardımcı fonksiyonlar
export function getCurriculum(langCode: string, levelCode: string): Unit[] {
    const langCurriculum = curriculum.find(c => c.langCode === langCode);
    if (!langCurriculum) return [];

    const levelCurriculum = langCurriculum.levels.find(l => l.levelCode === levelCode);
    return levelCurriculum?.units || [];
}

export function getUnit(langCode: string, levelCode: string, unitId: number): Unit | undefined {
    const units = getCurriculum(langCode, levelCode);
    return units.find(u => u.id === unitId);
}

// İstatistikler
export function getCurriculumStats(langCode: string) {
    const lang = curriculum.find(c => c.langCode === langCode);
    if (!lang) return { levels: 0, units: 0, lessons: 0 };

    let totalUnits = 0;
    let totalLessons = 0;

    lang.levels.forEach(level => {
        totalUnits += level.units.length;
        level.units.forEach(unit => {
            totalLessons += unit.lessons.length;
        });
    });

    return {
        levels: lang.levels.length,
        units: totalUnits,
        lessons: totalLessons,
    };
}
