/**
 * LinguaFlow Konu Anlatımı Veritabanı - İspanyolca A2
 * 20 Ünite (ID: 21-40), her biri için detaylı konu anlatımı
 */

import { UnitLecture, LectureSlide } from './lectures';

// ===== ÜNİTE 21: GEÇMİŞ ZAMAN 1 =====
const unit21Lecture: UnitLecture = {
    unitId: 21, title: "Geçmiş Zaman 1 - Pretérito Indefinido", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Geçmişten Bahsetmek ⏰", content: "A2 seviyesine hoş geldin! Bu ünitede İspanyolca'nın en önemli zamanlarından biri olan Pretérito Indefinido'yu öğreneceksin. Bu zaman, geçmişte tamamlanmış olayları anlatmak için kullanılır.", tip: "Dün yaptıklarını anlatmak için bu zamana ihtiyacın var!" },
        {
            id: 2, type: "grammar", title: "-AR Fiillerin Çekimi 📝", rules: [
                { rule: "Çekim Tablosu", explanation: "Düzenli -AR fiilleri için ekler:", examples: [] }
            ], points: [
                "Yo habl**é** (Ben konuştum)",
                "Tú habl**aste** (Sen konuştun)",
                "Él/Ella habl**ó** (O konuştu)",
                "Nosotros habl**amos** (Biz konuştuk)",
                "Vosotros habl**asteis** (Siz konuştunuz)",
                "Ellos habl**aron** (Onlar konuştular)"
            ]
        },
        {
            id: 3, type: "grammar", title: "-ER/-IR Fiillerin Çekimi 📝", rules: [
                { rule: "Çekim Tablosu", explanation: "Düzenli -ER ve -IR fiilleri aynı ekleri alır:", examples: [] }
            ], points: [
                "Yo com**í** (Ben yedim)",
                "Tú com**iste** (Sen yedin)",
                "Él/Ella com**ió** (O yedi)",
                "Nosotros com**imos** (Biz yedik)",
                "Vosotros com**isteis** (Siz yediniz)",
                "Ellos com**ieron** (Onlar yediler)"
            ]
        },
        { id: 4, type: "example", title: "Pratik Cümleler", content: "Günlük hayatta en çok kullanacağın cümleler:", points: ["Ayer fui al cine (Dün sinemaya gittim)", "Comí paella (Paella yedim)", "Estudié mucho (Çok çalıştım)"] },
        { id: 5, type: "summary", title: "Özet 📝", points: ["-AR fiiller: -é, -aste, -ó, -amos, -asteis, -aron", "-ER/-IR fiiller: -í, -iste, -ió, -imos, -isteis, -ieron", "Geçmişte tamamlanmış eylemler için"] }
    ]
};

// ===== ÜNİTE 22: GEÇMİŞ ZAMAN 2 =====
const unit22Lecture: UnitLecture = {
    unitId: 22, title: "Geçmiş Zaman 2 - Düzensiz Fiiller", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Düzensiz Fiiller 🔄", content: "Bazı fiillerin kökleri geçmiş zamanda tamamen değişir. Bunları ezberlemelisin çünkü çok sık kullanılırlar.", tip: "En önemli 6 düzensiz fiili bu derste öğreneceksin!" },
        {
            id: 2, type: "grammar", title: "Ir ve Ser (Gitmek/Olmak) 🚶", rules: [
                { rule: "Tamamen Düzensiz", explanation: "Bu iki fiil geçmişte AYNI çekime sahiptir! Bağlamdan hangisi olduğu anlaşılır.", examples: ["Ayer fui al cine (Dün sinemaya gittim)", "La película fue buena (Film iyiydi)"] }
            ], points: [
                "Yo **fui**",
                "Tú **fuiste**",
                "Él/Ella **fue**",
                "Nosotros **fuimos**",
                "Vosotros **fuisteis**",
                "Ellos **fueron**"
            ]
        },
        {
            id: 3, type: "grammar", title: "Hacer ve Tener 🛠️", rules: [
                { rule: "Hacer (Yapmak)", explanation: "Kökü 'hic-' olur (3. tekilde 'hiz-')", examples: [] }
            ], points: [
                "Hacer: hice, hiciste, **hizo**, hicimos, hicisteis, hicieron",
                "Tener: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron",
                "Estar (Olmak): estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron"
            ]
        },
        { id: 4, type: "example", title: "Örnek Kullanımlar", content: "Düzensiz fiillerle cümleler:", points: ["Ayer estuve en casa. (Dün evdeydim)", "No tuve tiempo. (Zamanım yoktu (sahip değildim))", "Hizo buen tiempo. (Hava güzeldi (yaptı))"] },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Ir/Ser: fui, fuiste, fue, fuimos, fueron", "Hacer: hice, hiciste, hizo, hicimos, hicieron", "Tener: tuve... Estar: estuve..."] }
    ]
};

// ===== ÜNİTE 23: RESTORANDA =====
const unit23Lecture: UnitLecture = {
    unitId: 23, title: "Restoranda Sipariş Vermek", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Restoran Kültürü 🍽️", content: "İspanya'da yemek kültürü çok önemlidir. Öğle yemeği (la comida) genellikle 14:00-16:00 arasında, akşam yemeği (la cena) ise 21:00-23:00 arasında yenir.", tip: "İspanya'da bahşiş zorunlu değildir ama yuvarlama yapılabilir." },
        {
            id: 2, type: "vocabulary", title: "Temel Kelimeler", words: [
                { target: "El menú", native: "Menü", pronunciation: "me-NU" },
                { target: "El camarero", native: "Garson", pronunciation: "ka-ma-RE-ro" },
                { target: "La cuenta", native: "Hesap", pronunciation: "KUEN-ta" },
                { target: "La propina", native: "Bahşiş", pronunciation: "pro-PI-na" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Kibar İstek: Querer ve Gustar 🙏", rules: [
                { rule: "Koşullu Kip (Condicional)", explanation: "İstekleri kibarca belirtmek için fiillerin bu formu kullanılır.", examples: [] }
            ], points: [
                "**Querría**... (İsterdim...)",
                "Querría una mesa, por favor. (Bir masa isterdim)",
                "**Me gustaría**... (Hoşuma giderdi/İsterdim...)",
                "Me gustaría ver la carta. (Menüyü görmek isterdim)"
            ]
        },
        {
            id: 4, type: "example", title: "Sipariş Diyalogu", dialogue: [
                { speaker: "Camarero", text: "¿Qué van a tomar?", translation: "Ne alacaksınız?" },
                { speaker: "Tú", text: "Para mí, el pollo, por favor.", translation: "Bana tavuk lütfen." },
                { speaker: "Camarero", text: "¿Y para beber?", translation: "İçmek için?" },
                { speaker: "Tú", text: "Agua con gas.", translation: "Maden suyu." }
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Mesa para dos = İki kişilik masa", "La cuenta, por favor = Hesap lütfen", "Querría... = ... isterdim (Kibar)"] }
    ]
};

// ===== ÜNİTE 24: ALIŞVERİŞ =====
const unit24Lecture: UnitLecture = {
    unitId: 24, title: "Alışveriş Yapmak", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Alışveriş Zamanı 🛍️", content: "Fiyat sormak, indirim istemek ve ödeme yapmak için gereken tüm ifadeleri öğreneceksin.", tip: "İspanya'da pazarlık pek yaygın değildir, fiyatlar genellikle sabittir." },
        {
            id: 2, type: "vocabulary", title: "Temel Kelimeler", words: [
                { target: "El precio", native: "Fiyat", pronunciation: "PRE-sio" },
                { target: "El descuento", native: "İndirim", pronunciation: "des-KUEN-to" },
                { target: "La talla", native: "Beden", pronunciation: "TA-ya" },
                { target: "El probador", native: "Giyinme kabini", pronunciation: "pro-ba-DOR" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Karşılaştırma Yapma (Comparativos) 🔄", rules: [
                { rule: "Üstünlük (Daha fazla)", explanation: "Más + sıfat + que", examples: ["Este es **más caro que** aquel (Bu ondan daha pahalı)"] },
                { rule: "Azlık (Daha az)", explanation: "Menos + sıfat + que", examples: ["Es **menos grande que** el otro (Diğerinden daha küçük)"] },
                { rule: "Eşitlik (Kadar)", explanation: "Tan + sıfat + como", examples: ["Es **tan bonito como** el azul (Mavi kadar güzel)"] }
            ]
        },
        {
            id: 4, type: "example", title: "Alışveriş Diyalogu", dialogue: [
                { speaker: "Tú", text: "¿Cuánto cuesta esto?", translation: "Bu ne kadar?" },
                { speaker: "Vendedor", text: "Cuesta 50 euros.", translation: "50 euro." },
                { speaker: "Tú", text: "¿Tiene descuento?", translation: "İndirim var mı?" },
                { speaker: "Vendedor", text: "Sí, hay un 20%.", translation: "Evet, %20 var." }
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["¿Cuánto cuesta? = Ne kadar?", "Me lo llevo = Bunu alıyorum", "¿Puedo probármelo? = Deneyebilir miyim?"] }
    ]
};

// ===== ÜNİTE 25: SEYAHAT PLANLARI =====
const unit25Lecture: UnitLecture = {
    unitId: 25, title: "Seyahat Planlamak", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Tatil Zamanı ✈️", content: "Bilet almak, varış yeri belirtmek ve seyahat planlarından bahsetmek için gereken ifadeleri öğreneceksin.", tip: "Gelecek planları için çok kullanışlı bir yapı var!" },
        {
            id: 2, type: "vocabulary", title: "Seyahat Kelimeleri", words: [
                { target: "El billete", native: "Bilet", pronunciation: "bi-YE-te" },
                { target: "El equipaje", native: "Bagaj", pronunciation: "e-ki-PA-he" },
                { target: "El destino", native: "Varış yeri", pronunciation: "des-TI-no" },
                { target: "Las vacaciones", native: "Tatil", pronunciation: "va-ka-SIO-nes" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Yakın Gelecek: Ir a + Fiil 🔮", rules: [
                { rule: "Formül", explanation: "Ir fiilinin şimdiki zaman çekimi + a + esas fiil (mastar)", examples: [] }
            ], points: [
                "Yo **voy a viajar** (Seyahat edeceğim)",
                "Tú **vas a comer** (Yiyeceksin)",
                "Element **va a salir** (Çıkacak)",
                "Nosotros **vamos a comprar** (Satın alacağız)",
                "Ellos **van a dormir** (Uyuyacaklar)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Voy a viajar = Seyahat edeceğim", "Un billete de ida y vuelta = Gidiş-dönüş bileti", "Estoy de vacaciones = Tatildeyim"] }
    ]
};

// ===== ÜNİTE 26: OTEL REZERVASYONU =====
const unit26Lecture: UnitLecture = {
    unitId: 26, title: "Otel Rezervasyonu", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Otel İşlemleri 🏨", content: "Check-in, check-out, oda tipi isteme ve otel hizmetleri hakkında soru sorma.", tip: "İspanya'da check-in genellikle 14:00-16:00, check-out ise 11:00-12:00 arasındadır." },
        {
            id: 2, type: "vocabulary", title: "Otel Kelimeleri", words: [
                { target: "La habitación", native: "Oda", pronunciation: "a-bi-ta-SION" },
                { target: "La llave", native: "Anahtar", pronunciation: "YA-ve" },
                { target: "La recepción", native: "Resepsiyon", pronunciation: "re-sep-SION" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Soru Sorma: Hay vs Tiene ❓", rules: [
                { rule: "Hay (Var mı?)", explanation: "Genel olarak bir şeyin varlığını sormak için.", examples: ["¿**Hay** piscina? (Havuz var mı?)", "¿**Hay** wifi gratis? (Ücretsiz wifi var mı?)"] },
                { rule: "Tiene (Var mı/Sahip mi?)", explanation: "Odanın veya otelin bir özelliği olup olmadığını sormak için.", examples: ["¿La habitación **tiene** baño? (Odanın banyosu var mı?)"] }
            ]
        },
        {
            id: 4, type: "example", title: "Check-in Diyalogu", dialogue: [
                { speaker: "Tú", text: "Tengo una reserva a nombre de García.", translation: "García adına rezervasyonum var." },
                { speaker: "Recepcionista", text: "Sí, habitación 305. Aquí está su llave.", translation: "Evet, oda 305. İşte anahtarınız." }
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Tengo una reserva = Rezervasyonum var", "¿El desayuno está incluido? = Kahvaltı dahil mi?", "¿Hay wifi gratis? = Ücretsiz wifi var mı?"] }
    ]
};

// ===== ÜNİTE 27: HAVALİMANINDA =====
const unit27Lecture: UnitLecture = {
    unitId: 27, title: "Havalimanında", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Uçuş Zamanı ✈️", content: "Check-in, güvenlik kontrolü, biniş kapısı ve uçuşla ilgili tüm ifadeler.", tip: "İspanyolca duyurular genellikle pasif yapıda olur: 'Se anuncia el vuelo...'" },
        {
            id: 2, type: "vocabulary", title: "Havalimanı Kelimeleri", words: [
                { target: "El vuelo", native: "Uçuş", pronunciation: "VUE-lo" },
                { target: "La puerta de embarque", native: "Biniş kapısı", pronunciation: "PUER-ta de em-BAR-ke" },
                { target: "El retraso", native: "Gecikme", pronunciation: "re-TRA-so" },
                { target: "La escala", native: "Aktarma", pronunciation: "es-KA-la" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Edilgen Yapı (Pasiva Refleja) 📢", rules: [
                { rule: "Se + Fiil (3. Tekil/Çoğul)", explanation: "Eylemi yapanın önemli olmadığı, genel duyurularda kullanılır.", examples: [] }
            ], points: [
                "**Se anuncia** el vuelo. (Uçuş duyuruluyor/duyurulur)",
                "**Se ruega** silencio. (Sessizlik rica olunur)",
                "**Se abren** las puertas. (Kapılar açılıyor)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Mi vuelo sale a las... = Uçuşum saat ...'da kalkıyor", "¿Cuál es la puerta? = Kapı hangisi?", "El vuelo tiene retraso = Uçuş gecikmeli"] }
    ]
};

// ===== ÜNİTE 28: DOKTORDA =====
const unit28Lecture: UnitLecture = {
    unitId: 28, title: "Doktorda", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Sağlık Önemli 🏥", content: "Şikayetlerini ifade etmek, randevu almak ve doktor talimatlarını anlamak.", tip: "'Me duele' yapısı 'Gustar' gibi çalışır - ağrıyan yer özne olur!" },
        {
            id: 2, type: "vocabulary", title: "Sağlık Kelimeleri", words: [
                { target: "El síntoma", native: "Semptom", pronunciation: "SIN-to-ma" },
                { target: "La fiebre", native: "Ateş", pronunciation: "FIE-bre" },
                { target: "El dolor", native: "Ağrı", pronunciation: "do-LOR" },
                { target: "La receta", native: "Reçete", pronunciation: "re-SE-ta" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Ağrı İfade Etmek: Doler 🤕", rules: [
                { rule: "Yapı: Zamir + Doler", explanation: "Doler fiili, ağrıyan şeye göre çekime girer, kişiye göre değil!", examples: [] }
            ], points: [
                "**Me duele** la cabeza. (Başım ağrıyor - Baş TEKİL olduğu için 'duele')",
                "**Me duelen** los pies. (Ayaklarım ağrıyor - Ayaklar ÇOĞUL olduğu için 'duelen')",
                "**Le duele** el brazo. (Onun kolu ağrıyor)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Me duele... = ...ağrıyor", "Tengo fiebre = Ateşim var", "Necesito una receta = Reçeteye ihtiyacım var"] }
    ]
};

// ===== ÜNİTE 29: ECZANEDE =====
const unit29Lecture: UnitLecture = {
    unitId: 29, title: "Eczanede", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "İlaç Almak 💊", content: "Eczanede ilaç istemek, dozaj sormak ve yan etkiler hakkında bilgi almak.", tip: "İspanya'da eczaneler yeşil haç işaretiyle belirtilir ve nöbetçi eczane sistemi vardır." },
        {
            id: 2, type: "vocabulary", title: "Eczane Kelimeleri", words: [
                { target: "El medicamento", native: "İlaç", pronunciation: "me-di-ka-MEN-to" },
                { target: "El jarabe", native: "Şurup", pronunciation: "ha-RA-be" },
                { target: "Las pastillas", native: "Haplar", pronunciation: "pas-TI-yas" },
                { target: "La pomada", native: "Merhem", pronunciation: "po-MA-da" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Zorunluluk: Tener que + Mastar ⚠️", rules: [
                { rule: "Kullanım", explanation: "Bir şeyi yapmanın zorunlu veya gerekli olduğunu belirtmek için.", examples: [] }
            ], points: [
                "**Tengo que tomar** medicinas. (İlaç almak zorundayım)",
                "**Tienes que descansar**. (Dinlenmek zorundasın)",
                "**Tiene que ir** al médico. (Doktora gitmek zorunda)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Necesito algo para... = ... için bir şey istiyorum", "¿Tiene efectos secundarios? = Yan etkileri var mı?", "¿Cómo debo tomarlo? = Nasıl almalıyım?"] }
    ]
};

// ===== ÜNİTE 30: MESLEKLER 2 =====
const unit30Lecture: UnitLecture = {
    unitId: 30, title: "İleri Meslekler", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "İş Dünyası 💼", content: "A1'de temel meslekleri öğrendin. Şimdi daha ileri meslekler ve iş tanımları.", tip: "Meslek sormak için: ¿A qué te dedicas?" },
        {
            id: 2, type: "vocabulary", title: "İleri Meslekler", words: [
                { target: "El programador", native: "Programcı", pronunciation: "pro-gra-ma-DOR" },
                { target: "El diseñador", native: "Tasarımcı", pronunciation: "di-se-nya-DOR" },
                { target: "El empresario", native: "İş adamı", pronunciation: "em-pre-SA-rio" },
                { target: "El periodista", native: "Gazeteci", pronunciation: "pe-rio-DIS-ta" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Meslek Sorma ve Söyleme 🗣️", rules: [
                { rule: "¿A qué te dedicas?", explanation: "Ne iş yapıyorsun? (Daha doğal)", examples: ["Me dedico a la enseñanza (Öğretmenlik yapıyorum)"] },
                { rule: "Trabajar como...", explanation: "... olarak çalışmak", examples: ["Trabajo **como** ingeniero (Mühendis olarak çalışıyorum)"] },
                { rule: "Ser + Meslek", explanation: "Mesleği söylerken 'bir' (un/una) KULLANILMAZ!", examples: ["Soy doctor (Ben bir doktorum - 'un' yok!)"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["¿A qué te dedicas? = Ne iş yapıyorsun?", "Trabajo en... = ...'de çalışıyorum", "Soy autónomo = Serbest çalışıyorum"] }
    ]
};

// ===== ÜNİTE 31: İŞ GÖRÜŞMESİ =====
const unit31Lecture: UnitLecture = {
    unitId: 31, title: "İş Görüşmesi", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Mülakat Zamanı 🤝", content: "CV hazırlamak, deneyimlerden bahsetmek ve mülakat sorularını cevaplamak.", tip: "Geçmiş deneyimlerden bahsederken 'He trabajado' (Çalıştım) yapısı kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Mülakat Kelimeleri", words: [
                { target: "El currículum", native: "CV", pronunciation: "ku-rri-KU-lum" },
                { target: "La entrevista", native: "Mülakat", pronunciation: "en-tre-VIS-ta" },
                { target: "La experiencia", native: "Deneyim", pronunciation: "eks-pe-RIEN-sia" },
                { target: "El salario", native: "Maaş", pronunciation: "sa-LA-rio" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Pretérito Perfecto (Yakın Geçmiş) 📜", rules: [
                { rule: "Haber + Participio", explanation: "Geçmiş deneyimleri anlatmak için (zamanı belirsiz).", examples: [] }
            ], points: [
                "Yo **he** trabajado",
                "Tú **has** estudiado",
                "Él **ha** vivido",
                "Nosotros **hemos** aprendido",
                "Ellos **han** escrito"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["He trabajado en... = ...'de çalıştım", "Tengo experiencia en... = ... konusunda deneyimim var", "Mis puntos fuertes son... = Güçlü yönlerim..."] }
    ]
};

// ===== ÜNİTE 32: TELEFONDA =====
const unit32Lecture: UnitLecture = {
    unitId: 32, title: "Telefon Konuşması", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Telefonda İletişim 📞", content: "Profesyonel telefon görüşmeleri yapmak, mesaj bırakmak ve randevu almak.", tip: "İspanyolca'da telefonu açarken '¿Dígame?' veya '¿Sí?' denir." },
        {
            id: 2, type: "vocabulary", title: "Telefon Kelimeleri", words: [
                { target: "La llamada", native: "Arama", pronunciation: "ya-MA-da" },
                { target: "El mensaje", native: "Mesaj", pronunciation: "men-SA-he" },
                { target: "La extensión", native: "Dahili numara", pronunciation: "eks-ten-SION" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Kibar İstekler: Poder 🙏", rules: [
                { rule: "¿Podría...?", explanation: "Poder fiilinin koşullu kipi. Telefonda bir şey isterken çok kullanılır.", examples: [] }
            ], points: [
                "¿**Podría** hablar con Juan? (Juan ile görüşebilir miyim?)",
                "¿**Podría** dejar un mensaje? (Mesaj bırakabilir miyim?)",
                "¿**Podría** repetir, por favor? (Tekrar edebilir misiniz?)"
            ]
        },
        {
            id: 4, type: "example", title: "Telefon Diyalogu", dialogue: [
                { speaker: "Recepcionista", text: "¿Dígame?", translation: "Buyurun?" },
                { speaker: "Tú", text: "Buenos días. ¿Puedo hablar con el Sr. García?", translation: "Günaydın. Bay García ile görüşebilir miyim?" },
                { speaker: "Recepcionista", text: "Un momento, por favor.", translation: "Bir dakika lütfen." }
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["¿Puedo hablar con...? = ... ile görüşebilir miyim?", "¿De parte de quién? = Kim arıyor?", "Le devolveré la llamada = Sizi geri arayacağım"] }
    ]
};

// ===== ÜNİTE 33: E-POSTA YAZMA =====
const unit33Lecture: UnitLecture = {
    unitId: 33, title: "Resmi E-posta", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Profesyonel Yazışma ✉️", content: "Resmi e-posta formatı, açılış ve kapanış ifadeleri, ek dosya bildirme.", tip: "İspanyolca resmi yazışmalarda 'Usted' formu kullanılır." },
        {
            id: 2, type: "vocabulary", title: "E-posta Kelimeleri", words: [
                { target: "El asunto", native: "Konu", pronunciation: "a-SUN-to" },
                { target: "El adjunto", native: "Ek dosya", pronunciation: "ad-HUN-to" },
                { target: "El destinatario", native: "Alıcı", pronunciation: "des-ti-na-TA-rio" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Yazışma Kalıpları ✍️", rules: [
                { rule: "Açılışlar", explanation: "Kime yazdığınıza göre değişir.", examples: ["Estimado Señor (Sayın Bay)", "Estimada Señora (Sayın Bayan)"] },
                { rule: "Kapanışlar", explanation: "Saygılarımla demek için.", examples: ["Atentamente", "Cordialmente", "Un cordial saludo"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Le escribo en relación con... = ... ile ilgili yazıyorum", "Adjunto encontrará... = Ekte bulacaksınız", "Quedo a su disposición = Emrinize amadeyim"] }
    ]
};

// ===== ÜNİTE 34: DUYGULAR =====
const unit34Lecture: UnitLecture = {
    unitId: 34, title: "Duygular", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Nasıl Hissediyorsun? 😊😢", content: "Duygularını ifade etmek, başkalarının duygularını sormak ve empati göstermek.", tip: "Duygular için 'Estar' veya 'Sentirse' fiilleri kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Duygu Kelimeleri", words: [
                { target: "Feliz", native: "Mutlu", pronunciation: "fe-LIS" },
                { target: "Triste", native: "Üzgün", pronunciation: "TRIS-te" },
                { target: "Enfadado", native: "Kızgın", pronunciation: "en-fa-DA-do" },
                { target: "Nervioso", native: "Gergin", pronunciation: "ner-VIO-so" },
                { target: "Emocionado", native: "Heyecanlı", pronunciation: "e-mo-sio-NA-do" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Estar vs Sentirse 💭", rules: [
                { rule: "Estar + Sıfat", explanation: "Duygular geçici durumlardır, o yüzden SER değil ESTAR kullanılır.", examples: ["Estoy triste (Üzgünüm)", "Estás feliz (Mutlusun)"] },
                { rule: "Sentirse (Hissetmek)", explanation: "Dönüşlü fiil (Reflexive).", examples: ["Me siento bién (İyi hissediyorum)", "Te sientes mal (Kötü hissediyorsun)"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Estoy + duygu = ...um", "Me siento + duygu = ... hissediyorum", "Porque... = Çünkü..."] }
    ]
};

// ===== ÜNİTE 35: KARAKTER ÖZELLİKLERİ =====
const unit35Lecture: UnitLecture = {
    unitId: 35, title: "Karakter Özellikleri", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "İnsanları Tanımlamak 👥", content: "Birinin karakterini ve kişiliğini tanımlamak için kullanılan sıfatlar.", tip: "Kalıcı özellikler için 'Ser' kullanılır!" },
        {
            id: 2, type: "vocabulary", title: "Karakter Sıfatları", words: [
                { target: "Amable", native: "Nazik", pronunciation: "a-MA-ble" },
                { target: "Trabajador", native: "Çalışkan", pronunciation: "tra-ba-ha-DOR" },
                { target: "Generoso", native: "Cömert", pronunciation: "he-ne-RO-so" },
                { target: "Honesto", native: "Dürüst", pronunciation: "o-NES-to" },
                { target: "Paciente", native: "Sabırlı", pronunciation: "pa-SIEN-te" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Ser vs Estar: Karakter 🧠", rules: [
                { rule: "Ser + Karakter", explanation: "Kişilik özellikleri kalıcıdır, o yüzden SER kullanılır.", examples: ["Juan es amable (Juan naziktir - genel huyu)", "María es alegre (María neşeli biridir)"] },
                { rule: "Estar + Duygu", explanation: "Anlık durum için ESTAR.", examples: ["Juan está amable hoy (Juan bugün nazik davranıyor)", "María está alegre (María şu an neşeli)"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Es + karakter = ...'tir", "Tiene un carácter + sıfat = ... bir karakteri var", "Siempre está de buen humor = Her zaman keyfi yerinde"] }
    ]
};

// ===== ÜNİTE 36: SPOR VE FITNESS =====
const unit36Lecture: UnitLecture = {
    unitId: 36, title: "Spor ve Fitness", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Hareketli Kal! 🏃‍♂️", content: "Spor yapmak, egzersiz türleri ve fitness rutinlerinden bahsetmek.", tip: "Takım sporları için 'Jugar a', bireysel sporlar için 'Hacer' kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Spor Kelimeleri", words: [
                { target: "El gimnasio", native: "Spor salonu", pronunciation: "him-NA-sio" },
                { target: "El ejercicio", native: "Egzersiz", pronunciation: "e-her-SI-sio" },
                { target: "El partido", native: "Maç", pronunciation: "par-TI-do" },
                { target: "El equipo", native: "Takım", pronunciation: "e-KI-po" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Spor Fiilleri: Jugar vs Hacer ⚽🧘", rules: [
                { rule: "Jugar A ...", explanation: "Oyun, top veya takım sporları için 'Oynamak'. Mutlaka 'a' edatı alır.", examples: ["Juego **a**l fútbol", "Juegas **a**l tenis"] },
                { rule: "Hacer ...", explanation: "Bireysel sporlar veya egzersiz için 'Yapmak'. Edat almaz.", examples: ["Hago yoga", "Hago natación", "Hago karate"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Voy al gimnasio = Spor salonuna gidiyorum", "Juego al fútbol = Futbol oynuyorum", "Hago ejercicio = Egzersiz yapıyorum"] }
    ]
};

// ===== ÜNİTE 37: MÜZİK VE SANAT =====
const unit37Lecture: UnitLecture = {
    unitId: 37, title: "Müzik ve Sanat", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Sanatsal Ruh 🎨🎵", content: "Enstrüman çalmak, konser, müze ziyareti ve sanat türlerinden bahsetmek.", tip: "Enstrüman çalmak için 'Tocar' fiili kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Müzik Kelimeleri", words: [
                { target: "El concierto", native: "Konser", pronunciation: "kon-SIER-to" },
                { target: "La canción", native: "Şarkı", pronunciation: "kan-SION" },
                { target: "La guitarra", native: "Gitar", pronunciation: "gi-TA-rra" },
                { target: "El museo", native: "Müze", pronunciation: "mu-SE-o" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Fiil: Tocar (Çalmak/Dokunmak) 🎸", rules: [
                { rule: "Çekim", explanation: "Düzenli -AR fiili gibidir.", examples: [] }
            ], points: [
                "Yo toco la guitarra",
                "Tú tocas el piano",
                "Él toca el violín",
                "Biz: Tocamos",
                "Onlar: Tocan"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Toco la guitarra = Gitar çalıyorum", "Fui a un concierto = Konsere gittim", "Me encanta el arte = Sanatı çok seviyorum"] }
    ]
};

// ===== ÜNİTE 38: SİNEMA VE DİZİ =====
const unit38Lecture: UnitLecture = {
    unitId: 38, title: "Sinema ve Dizi", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Film Zamanı 🎬", content: "Film türleri, dizi tavsiyeleri ve sinema deneyiminden bahsetmek.", tip: "Film türleri: Comedia (Komedi), Drama, Terror (Korku), Acción (Aksiyon)" },
        {
            id: 2, type: "vocabulary", title: "Sinema Kelimeleri", words: [
                { target: "La película", native: "Film", pronunciation: "pe-LI-ku-la" },
                { target: "La serie", native: "Dizi", pronunciation: "SE-rie" },
                { target: "El actor", native: "Aktör", pronunciation: "ak-TOR" },
                { target: "El director", native: "Yönetmen", pronunciation: "di-rek-TOR" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Beğeni Dereceleri ⭐", rules: [
                { rule: "Me encanta (Bayılırım)", explanation: "En güçlü beğeni ifadesi.", examples: ["Me encanta esta película"] },
                { rule: "Me gusta mucho (Çok severim)", explanation: "Güçlü beğeni.", examples: ["Me gusta mucho el cine"] },
                { rule: "Prefiero (Tercih ederim)", explanation: "Tercih belirtmek için.", examples: ["Prefiero las comedias (Komedileri tercih ederim)"] }
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["¿Qué película quieres ver? = Hangi filmi izlemek istersin?", "Es una película de... = ... filmi", "La recomiendo = Öneririm"] }
    ]
};

// ===== ÜNİTE 39: TEKNOLOJİ =====
const unit39Lecture: UnitLecture = {
    unitId: 39, title: "Teknoloji", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Dijital Dünya 💻📱", content: "Bilgisayar, telefon, internet ve teknoloji sorunlarından bahsetmek.", tip: "Ordenador = Bilgisayar (İspanya), Computadora = Bilgisayar (Latin Amerika)" },
        {
            id: 2, type: "vocabulary", title: "Teknoloji Kelimeleri", words: [
                { target: "El ordenador", native: "Bilgisayar", pronunciation: "or-de-na-DOR" },
                { target: "El portátil", native: "Dizüstü", pronunciation: "por-TA-til" },
                { target: "La contraseña", native: "Şifre", pronunciation: "kon-tra-SE-nya" },
                { target: "La pantalla", native: "Ekran", pronunciation: "pan-TA-ya" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Teknoloji Fiilleri 🔧", rules: [
                { rule: "Fiil Listesi", explanation: "Hepsi düzenli fiillerdir.", examples: ["Descargar (İndirmek)", "Guardar (Kaydetmek)", "Buscar (Aramak)"] }
            ], points: [
                "Voy a **descargar** el archivo. (Dosyayı indireceğim)",
                "Tengo que **guardar** la foto. (Fotoğrafı kaydetmeliyim)",
                "Necesito **reiniciar**. (Yeniden başlatmam lazım)"
            ]
        },
        { id: 4, type: "summary", title: "Özet 📝", points: ["Mi ordenador no funciona = Bilgisayarım çalışmıyor", "¿Cuál es la contraseña del wifi? = Wifi şifresi ne?", "Necesito cargar mi móvil = Telefonumu şarj etmem lazım"] }
    ]
};

// ===== ÜNİTE 40: SOSYAL MEDYA =====
const unit40Lecture: UnitLecture = {
    unitId: 40, title: "Sosyal Medya", language: "İspanyolca", level: "A2",
    slides: [
        { id: 1, type: "intro", title: "Sosyal Ağlar 📲", content: "Sosyal medya platformları, paylaşım, takip etme ve online etkileşim.", tip: "A2 seviyesini de bitirdin! Artık günlük konuşmalarda rahatsın." },
        {
            id: 2, type: "vocabulary", title: "Sosyal Medya Kelimeleri", words: [
                { target: "El perfil", native: "Profil", pronunciation: "per-FIL" },
                { target: "El seguidor", native: "Takipçi", pronunciation: "se-gi-DOR" },
                { target: "Publicar", native: "Yayınlamak", pronunciation: "pu-bli-KAR" },
                { target: "Compartir", native: "Paylaşmak", pronunciation: "kom-par-TIR" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Sosyal Medya Fiilleri 📱", rules: [
                { rule: "Seguir (Takip Etmek)", explanation: "E-I ses değişimi olan düzensiz bir fiildir.", examples: [] }
            ], points: [
                "Yo **sigo** (Takip ediyorum - Düzensiz!)",
                "Tú sigues",
                "Él sigue",
                "Nosotros seguimos",
                "Ellos siguen"
            ]
        },
        { id: 4, type: "summary", title: "🎉 Tebrikler! A2 Tamamlandı!", points: ["A2 Seviyesini Bitirdin!", "Günlük konuşmalarda rahatsın", "Seyahat, iş, sağlık konularında iletişim kurabilirsin", "B1'e hazırsın!"], cta: "Sertifikanı al!" }
    ]
};

// Ünite ID'sine göre A2 lecture getir
export function getA2LectureForUnit(unitId: number): UnitLecture {
    const lectures: { [key: number]: UnitLecture } = {
        21: unit21Lecture, 22: unit22Lecture, 23: unit23Lecture, 24: unit24Lecture, 25: unit25Lecture,
        26: unit26Lecture, 27: unit27Lecture, 28: unit28Lecture, 29: unit29Lecture, 30: unit30Lecture,
        31: unit31Lecture, 32: unit32Lecture, 33: unit33Lecture, 34: unit34Lecture, 35: unit35Lecture,
        36: unit36Lecture, 37: unit37Lecture, 38: unit38Lecture, 39: unit39Lecture, 40: unit40Lecture
    };
    return lectures[unitId] || unit21Lecture;
}
