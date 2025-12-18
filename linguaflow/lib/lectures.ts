/**
 * LinguaFlow Konu Anlatımı Veritabanı - İspanyolca A1
 * Sıfırdan başlayanlar için detaylı anlatım
 * Her ünite için kültürel ipuçları, dilbilgisi kuralları ve pratik bölümleri içerir
 */

export interface LectureSlide {
    id: number;
    type: "intro" | "vocabulary" | "grammar" | "example" | "summary" | "practice" | "culture";
    title: string;
    content?: string;
    tip?: string;
    words?: { target: string; native: string; pronunciation: string; example?: string }[];
    rules?: { rule: string; explanation: string; examples: string[] }[];
    note?: string;
    dialogue?: { speaker: string; text: string; translation: string }[];
    points?: string[];
    cta?: string;
}

export interface UnitLecture {
    unitId: number;
    title: string;
    language: string;
    level: string;
    slides: LectureSlide[];
}

// ===== ÜNİTE 1: SELAMLAŞMA =====
const unit1Lecture: UnitLecture = {
    unitId: 1, title: "Selamlaşma ve Tanışma", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "İspanyolca'ya Hoş Geldin! 🇪🇸", content: "İspanyolca, dünyada 500 milyondan fazla kişinin konuştuğu bir dildir. Bu derste, İspanyolca'da nasıl merhaba diyeceğini ve kendini tanıtacağını öğreneceksin.", tip: "İspanyolca'da harfler genellikle yazıldığı gibi okunur. Bu Türkçe konuşanlar için büyük avantaj!" },
        { id: 2, type: "vocabulary", title: "Merhaba Demek 👋", content: "İspanyolca'da en temel selamlama 'Hola' kelimesidir. Her durumda kullanılabilir.", words: [{ target: "Hola", native: "Merhaba", pronunciation: "O-la", example: "¡Hola! ¿Qué tal?" }], tip: "DİKKAT: 'H' harfi İspanyolca'da sessizdir, yani 'Ola' olarak okunur." },
        { id: 3, type: "vocabulary", title: "Günün Saatine Göre Selamlar", content: "Günün farklı saatlerinde farklı selamlar kullanılır:", words: [{ target: "Buenos días", native: "Günaydın", pronunciation: "BUE-nos DI-as", example: "Sabahları kullanılır" }, { target: "Buenas tardes", native: "Tünaydın", pronunciation: "BUE-nas TAR-des", example: "Öğleden sonra kullanılır" }, { target: "Buenas noches", native: "İyi geceler", pronunciation: "BUE-nas NO-çes", example: "Akşam ve gece kullanılır" }] },
        { id: 4, type: "grammar", title: "Ne Zaman Hangisini Kullanmalı? ⏰", rules: [{ rule: "Sabah (06:00 - 12:00)", explanation: "Güneş doğduğunda 'Buenos días'", examples: ["Buenos días, mamá"] }, { rule: "Öğleden Sonra (12:00 - 20:00)", explanation: "Öğle yemeğinden sonra 'Buenas tardes'", examples: ["Buenas tardes, señor"] }, { rule: "Gece (20:00 - 06:00)", explanation: "Hava karardığında 'Buenas noches'", examples: ["Buenas noches, hasta mañana"] }] },
        { id: 5, type: "culture", title: "Kültürel İpucu 🇪🇸", content: "İspanyollar çok sıcakkanlı insanlardır! Selamlaşırken genellikle iki yanaktan öpücük (beso) yaygındır. Erkekler birbirleriyle el sıkışır, aile içinde veya yakınlarsa sarılırlar.", tip: "Bir dükkana girdiğinde mutlaka 'Hola' veya 'Buenos días' demek kibarlıktır." },
        { id: 6, type: "summary", title: "Özet 📝", points: ["Hola = Merhaba", "Buenos días = Günaydın", "Buenas tardes = Tünaydın", "Buenas noches = İyi geceler"], cta: "Şimdi pratik yapma zamanı!" }
    ]
};

// ===== ÜNİTE 2: SAYILAR 1-20 =====
const unit2Lecture: UnitLecture = {
    unitId: 2, title: "Sayılar 1-20", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Sayıları Öğrenelim 🔢", content: "Sayılar her dilde en temel yapı taşlarından biridir. Alışveriş yaparken, saat söylerken veya telefon numaranı verirken sayılara ihtiyacın olacak.", tip: "0-15 arası sayıların özel isimleri vardır, bunları ezberlemek gerekir." },
        {
            id: 2, type: "vocabulary", title: "Sayılar 0-10", content: "İlk on sayıyı öğrenerek başlayalım:", words: [
                { target: "Cero", native: "0", pronunciation: "SE-ro", example: "Sıfır" },
                { target: "Uno", native: "1", pronunciation: "U-no", example: "Bir elma" },
                { target: "Dos", native: "2", pronunciation: "dos", example: "İki masa" },
                { target: "Tres", native: "3", pronunciation: "tres", example: "Üç araba" },
                { target: "Cuatro", native: "4", pronunciation: "KUA-tro", example: "Dört gün" },
                { target: "Cinco", native: "5", pronunciation: "SIN-ko", example: "Beş kişi" }
            ]
        },
        {
            id: 3, type: "vocabulary", title: "Sayılar 6-10", content: "Devam edelim:", words: [
                { target: "Seis", native: "6", pronunciation: "seys", example: "Altı" },
                { target: "Siete", native: "7", pronunciation: "SYE-te", example: "Yedi" },
                { target: "Ocho", native: "8", pronunciation: "O-ço", example: "Sekiz" },
                { target: "Nueve", native: "9", pronunciation: "NUE-ve", example: "Dokuz" },
                { target: "Diez", native: "10", pronunciation: "dyes", example: "On" }
            ]
        },
        {
            id: 4, type: "grammar", title: "16-19 Arası Kuralı 📏", rules: [
                { rule: "11-15 Özeldir", explanation: "Once, Doce, Trece, Catorce, Quince. Bunları ezberlemelisin.", examples: ["11 = Once", "15 = Quince"] },
                { rule: "16-19 Birleşiktir", explanation: "On ve altı (diez y seis) -> Dieciséis şeklinde birleşir.", examples: ["16 = Dieciséis", "17 = Diecisiete", "18 = Dieciocho"] }
            ], note: "'Dieci-' öneki 'on ve...' anlamına gelir."
        },
        { id: 5, type: "practice", title: "Pratik Yapalım 🧠", content: "Telefon numaranı veya yaşını İspanyolca söylemeyi dene.", points: ["Kaç yaşındasın? (Tengo ... años)", "Numaran kaç? (Mi número es...)"], tip: "Sayıları tekrar ederek hafızana kazı." },
        { id: 6, type: "summary", title: "Özet 📝", points: ["0-15 arası özel isimler", "16-19 arası 'dieci-' ile başlar", "20 = Veinte"], cta: "Sayılar testi seni bekliyor!" }
    ]
};

// ===== ÜNİTE 3: AİLE ÜYELERİ =====
const unit3Lecture: UnitLecture = {
    unitId: 3, title: "Aile Üyeleri", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Ailemiz 👨‍👩‍👧‍👦", content: "Aile, İspanyol ve Latin kültürünün kalbidir. Aile bağlarını ifade eden kelimeleri öğrenmek çok önemlidir.", tip: "Pazar günleri genellikle aile yemeği günleridir!" },
        {
            id: 2, type: "vocabulary", title: "Çekirdek Aile", words: [
                { target: "Padre", native: "Baba", pronunciation: "PAD-re", example: "Mi padre es alto" },
                { target: "Madre", native: "Anne", pronunciation: "MAD-re", example: "Mi madre es amable" },
                { target: "Hermano", native: "Erkek kardeş", pronunciation: "er-MA-no", example: "Tengo un hermano" },
                { target: "Hermana", native: "Kız kardeş", pronunciation: "er-MA-na", example: "Mi hermana estudia" }
            ]
        },
        {
            id: 3, type: "vocabulary", title: "Geniş Aile", words: [
                { target: "Abuelo", native: "Dede", pronunciation: "a-BUE-lo", example: "Dedem" },
                { target: "Abuela", native: "Nine", pronunciation: "a-BUE-la", example: "Ninem" },
                { target: "Tío", native: "Amca/Dayı", pronunciation: "TI-o", example: "Amcam" },
                { target: "Tía", native: "Teyze/Hala", pronunciation: "TI-a", example: "Halam" }
            ]
        },
        {
            id: 4, type: "grammar", title: "Cinsiyet Kuralı 👫", rules: [
                { rule: "-O ile bitenler Erkek", explanation: "AbuelO (dede), TíO (amca), HermanO (erkek kardeş)", examples: ["El abuelo"] },
                { rule: "-A ile bitenler Dişi", explanation: "AbuelA (nine), TíA (teyze), HermanA (kız kardeş)", examples: ["La abuela"] },
                { rule: "Çoğul Kullanım", explanation: "Erkek çoğul (veya karışık grup) için erkek formu kullanılır.", examples: ["Mis padres (Anne ve Babam)", "Mis hijos (Çocuklarım)"] }
            ]
        },
        { id: 5, type: "culture", title: "Kültürel İpucu 🇪🇸", content: "İspanyolca konuşulan ülkelerde insanlar genellikle iki soyadı kullanır: biri babadan, diğeri anneden gelir. Bu, annenin aindeki önemini gösterir.", tip: "Örnek: Gabriel García Márquez" },
        { id: 6, type: "summary", title: "Özet 📝", points: ["Padre/Madre", "Hijo/Hija", "Abuelo/Abuela", "Çoğullar erkek formunu alır"], cta: "Aile ağacını anlatmaya hazır mısın?" }
    ]
};

// ===== ÜNİTE 4: RENKLER =====
const unit4Lecture: UnitLecture = {
    unitId: 4, title: "Renkler", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Dünya Renkli! 🎨", content: "Etrafımızdaki her şeyi tarif etmek için renklere ihtiyacımız var. İspanyolca renkler çok melodiktir.", tip: "Renkler sıfattır, yani ismin cinsiyetine ve sayısına uymak zorundadır!" },
        {
            id: 2, type: "vocabulary", title: "Ana Renkler", words: [
                { target: "Rojo", native: "Kırmızı", pronunciation: "RO-ho", example: "Coche rojo" },
                { target: "Azul", native: "Mavi", pronunciation: "a-SUL", example: "Cielo azul" },
                { target: "Verde", native: "Yeşil", pronunciation: "VER-de", example: "Árbol verde" },
                { target: "Amarillo", native: "Sarı", pronunciation: "a-ma-RI-yo", example: "Sol amarillo" }
            ]
        },
        {
            id: 3, type: "vocabulary", title: "Diğer Renkler", words: [
                { target: "Blanco", native: "Beyaz", pronunciation: "BLAN-ko", example: "Nieve blanca" },
                { target: "Negro", native: "Siyah", pronunciation: "NEG-ro", example: "Gato negro" },
                { target: "Naranja", native: "Turuncu", pronunciation: "na-RAN-ha", example: "Naranja" },
                { target: "Rosa", native: "Pembe", pronunciation: "RO-sa", example: "Flor rosa" }
            ]
        },
        {
            id: 4, type: "grammar", title: "Renk Uyumu 🧩", rules: [
                { rule: "O ile bitenler değişir", explanation: "Rojo -> Roja (dişi). Blanco -> Blanca (dişi)", examples: ["Libro rojo (erkek)", "Mesa roja (dişi)"] },
                { rule: "Sessiz veya E ile bitenler", explanation: "Azul, Verde, Gris genellikle değişmez (tekil halde).", examples: ["Libro azul", "Mesa azul"] },
                { rule: "Çoğul Uyumu", explanation: "İsim çoğulsa renk de çoğul olur (s eklenir).", examples: ["Libros rojos", "Mesas rojas"] }
            ]
        },
        {
            id: 5, type: "example", title: "Örnekler", dialogue: [
                { speaker: "A", text: "¿De qué color es tu coche?", translation: "Araban ne renk?" },
                { speaker: "B", text: "Es negro.", translation: "Siyah." },
                { speaker: "A", text: "¿Y tus zapatos?", translation: "Ya ayakkabıların?" },
                { speaker: "B", text: "Son negros también.", translation: "Onlar da siyah." }
            ]
        },
        { id: 6, type: "summary", title: "Özet 📝", points: ["Rojo/Roja", "Blanco/Blanca", "Negro/Negra", "Azul/Verde (değişmez)", "Çoğullara 's' ekle"], cta: "Renkleri test et!" }
    ]
};

// ===== ÜNİTE 5: YİYECEKLER =====
const unit5Lecture: UnitLecture = {
    unitId: 5, title: "Yiyecekler", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Afiyet Olsun! 🍽️", content: "İspanyol mutfağı çok zengindir. Yemek siparişi vermek veya sevdiğin yemekleri anlatmak için bu kelimeleri bilmelisin.", tip: "'¡Buen provecho!' = Afiyet olsun!" },
        {
            id: 2, type: "vocabulary", title: "Temel Gıdalar", words: [
                { target: "Pan", native: "Ekmek", pronunciation: "pan", example: "Pan fresco" },
                { target: "Agua", native: "Su", pronunciation: "A-gua", example: "Un vaso de agua" },
                { target: "Leche", native: "Süt", pronunciation: "LE-che", example: "Café con leche" },
                { target: "Queso", native: "Peynir", pronunciation: "KE-so", example: "Sandwich de queso" }
            ]
        },
        {
            id: 3, type: "vocabulary", title: "Ana Yemekler", words: [
                { target: "Pollo", native: "Tavuk", pronunciation: "PO-yo", example: "Pollo asado" },
                { target: "Carne", native: "Et", pronunciation: "KAR-ne", example: "Carne de vaca" },
                { target: "Pescado", native: "Balık", pronunciation: "pes-KA-do", example: "Pescado frito" },
                { target: "Ensalada", native: "Salata", pronunciation: "en-sa-LA-da", example: "Ensalada mixta" }
            ]
        },
        { id: 4, type: "culture", title: "Tapas Kültürü 🇪🇸", content: "İspanya'da 'Tapas' kültürü çok yaygındır. Bunlar içeceğin yanında gelen küçük meze tabaklarıdır. Bazen zeytin, bazen patates, bazen minik sandviçler olabilir. Arkadaşlarla paylaşmak içindir.", tip: "Granada gibi bazı şehirlerde içecek alınca tapas bedava gelir!" },
        { id: 5, type: "practice", title: "Restoranda", content: "Garsona sipariş verirken:", points: ["Quiero... (İstiyorum...)", "Para mí... (Benim için...)", "La cuenta, por favor (Hesap lütfen)"], tip: "Kibarca istemek için 'Quisiera' da diyebilirsin." },
        { id: 6, type: "summary", title: "Özet 📝", points: ["Pan, Agua, Leche", "Pollo, Carne, Pescado", "Tapas kültürü", "Hesap istemek"], cta: "Acıktın mı? Hadi kelimeleri pişirelim!" }
    ]
};

// ===== ÜNİTE 6: İÇECEKLER =====
const unit6Lecture: UnitLecture = {
    unitId: 6, title: "İçecekler", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Ne İçersiniz? 🥤", content: "Susadın mı? Bir kafede veya barda ne içmek istediğini söylemeyi öğrenelim.", tip: "İspanya'da kahve kültürü çok gelişmiştir." },
        {
            id: 2, type: "vocabulary", title: "Sıcak İçecekler", words: [
                { target: "Café", native: "Kahve", pronunciation: "ka-FE", example: "Café solo" },
                { target: "Té", native: "Çay", pronunciation: "te", example: "Té verde" },
                { target: "Chocolate caliente", native: "Sıcak çikolata", pronunciation: "cho-co-LA-te", example: "Con churros" }
            ]
        },
        {
            id: 3, type: "vocabulary", title: "Soğuk İçecekler", words: [
                { target: "Zumo", native: "Meyve suyu", pronunciation: "SU-mo", example: "Zumo de naranja" },
                { target: "Refresco", native: "Meşrubat/Kola", pronunciation: "re-FRES-ko", example: "Un refresco" },
                { target: "Cerveza", native: "Bira", pronunciation: "ser-VE-sa", example: "Una caña (bir bardak bira)" },
                { target: "Vino", native: "Şarap", pronunciation: "VI-no", example: "Vino tinto (kırmızı)" }
            ]
        },
        {
            id: 4, type: "grammar", title: "Sıfat Uyumu", rules: [
                { rule: "Sıcak/Soğuk", explanation: "Caliente (sıcak), Frío (soğuk).", examples: ["Café caliente (eril)", "Sopa caliente (dişil - değişmez)", "Agua fría (dişil)", "Té frío (eril)"] }
            ]
        },
        { id: 5, type: "culture", title: "Kahvaltıda Churros 🍫", content: "Pazar sabahları İspanyolların vazgeçilmezi 'Churros con Chocolate'dir. Çıtır hamur tatlısını yoğun sıcak çikolataya batırıp yerler.", tip: "Denemeden dönme!" },
        { id: 6, type: "summary", title: "Özet 📝", points: ["Café, Té", "Zumo, Agua", "Cerveza, Vino", "Caliente (Sıcak), Frío (Soğuk)"], cta: "Susadın mı? Testi çöz!" }
    ]
};

// ===== ÜNİTE 7: GÜNLER VE AYLAR =====
const unit7Lecture: UnitLecture = {
    unitId: 7, title: "Günler ve Aylar", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Zaman Akıp Gidiyor 📅", content: "Randevu almak, plan yapmak veya doğum gününü söylemek için günleri ve ayları bilmelisin.", tip: "İspanyolca'da günler ve aylar KÜÇÜK harfle yazılır!" },
        {
            id: 2, type: "vocabulary", title: "Haftanın Günleri", words: [
                { target: "Lunes", native: "Pazartesi", pronunciation: "LU-nes", example: "El lunes trabajo" },
                { target: "Martes", native: "Salı", pronunciation: "MAR-tes", example: "Martes y jueves" },
                { target: "Miércoles", native: "Çarşamba", pronunciation: "MIER-co-les", example: "Mitad de semana" },
                { target: "Jueves", native: "Perşembe", pronunciation: "HUE-ves", example: "Casi viernes" },
                { target: "Viernes", native: "Cuma", pronunciation: "VIER-nes", example: "¡Por fin viernes!" },
                { target: "Sábado", native: "Cumartesi", pronunciation: "SA-ba-do", example: "Fin de semana" },
                { target: "Domingo", native: "Pazar", pronunciation: "do-MIN-go", example: "Día de descanso" }
            ]
        },
        {
            id: 3, type: "vocabulary", title: "Aylar", words: [
                { target: "Enero", native: "Ocak", pronunciation: "e-NE-ro" }, { target: "Febrero", native: "Şubat", pronunciation: "fe-BRE-ro" },
                { target: "Marzo", native: "Mart", pronunciation: "MAR-so" }, { target: "Abril", native: "Nisan", pronunciation: "a-BRIL" },
                { target: "Mayo", native: "Mayıs", pronunciation: "MA-yo" }, { target: "Junio", native: "Haziran", pronunciation: "HU-nio" },
                { target: "Julio", native: "Temmuz", pronunciation: "HU-lio" }, { target: "Agosto", native: "Ağustos", pronunciation: "a-GOS-to" }
            ]
        },
        {
            id: 4, type: "grammar", title: "Zaman Edatları", rules: [
                { rule: "Günler için 'El'", explanation: "Pazartesi günü demek için 'El lunes' denir. 'En' kullanılmaz.", examples: ["El lunes voy al cine"] },
                { rule: "Aylar için 'En'", explanation: "Ocak ayında demek için 'En enero' denir.", examples: ["Mi cumpleaños es en marzo"] }
            ]
        },
        { id: 5, type: "culture", title: "Siesta Zamanı 😴", content: "İspanya'da öğleden sonra 2 ile 5 arası birçok dükkan 'Siesta' (öğle molası) için kapanır. Ancak günümüzde büyük şehirlerde bu gelenek azalmaktadır.", tip: "Alışveriş planını buna göre yap!" },
        { id: 6, type: "summary", title: "Özet 📝", points: ["Günler küçük harfle", "El lunes (Pazartesi günü)", "En enero (Ocak ayında)", "Hafta pazartesi başlar"], cta: "Plan yapmaya hazır mısın?" }
    ]
};

// ===== ÜNİTE 8: SAYILAR 21-100 =====
const unit8Lecture: UnitLecture = {
    unitId: 8, title: "Sayılar 21-100", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Büyük Sayılar 💯", content: "Artık fiyatları sormaya ve yaşını tam olarak söylemeye hazırsın. 20'den sonra mantık çok basitleşiyor.", tip: "30'dan sonra 've' (y) bağlacını kullanırız." },
        {
            id: 2, type: "vocabulary", title: "Onluklar", words: [
                { target: "Veinte", native: "20", pronunciation: "VEYN-te" }, { target: "Treinta", native: "30", pronunciation: "TREYN-ta" },
                { target: "Cuarenta", native: "40", pronunciation: "kua-REN-ta" }, { target: "Cincuenta", native: "50", pronunciation: "sin-KUEN-ta" },
                { target: "Sesenta", native: "60", pronunciation: "se-SEN-ta" }, { target: "Setenta", native: "70", pronunciation: "se-TEN-ta" },
                { target: "Ochenta", native: "80", pronunciation: "o-CHEN-ta" }, { target: "Noventa", native: "90", pronunciation: "no-VEN-ta" },
                { target: "Cien", native: "100", pronunciation: "syen" }
            ]
        },
        {
            id: 3, type: "grammar", title: "20'ler Tek Kelime", rules: [
                { rule: "21-29 Birleşiktir", explanation: "Veinte + y + uno -> Veintiuno. 'E' harfi 'I' olur ve birleşir.", examples: ["21 = Veintiuno", "22 = Veintidós", "25 = Veinticinco"] }
            ]
        },
        {
            id: 4, type: "grammar", title: "30'lar ve Sonrası Ayrı", rules: [
                { rule: "31-99 Ayrı Yazılır", explanation: "Onluk + y + birlik. Arada 'y' (ve) vardır.", examples: ["31 = Treinta y uno", "45 = Cuarenta y cinco", "88 = Ochenta y ocho"] }
            ]
        },
        { id: 5, type: "practice", title: "Alışverişte", content: "Fiyatları anlamak için sayıları dinlemelisin.", points: ["¿Cuánto cuesta? = Ne kadar?", "Cuesta cincuenta euros = 50 euro"], tip: "Cien = 100, ama 101 = Ciento uno." },
        { id: 6, type: "summary", title: "Özet 📝", points: ["20'ler birleşik (Veinti...)", "30'lar ayrı (Treinta y...)", "Cien = 100"], cta: "Fiyat etiketlerini oku!" }
    ]
};

// ===== ÜNİTE 9: EV ODALARI =====
const unit9Lecture: UnitLecture = {
    unitId: 9, title: "Evimiz", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Evim Güzel Evim 🏠", content: "Evin bölümlerini ve eşyaların nerede olduğunu anlatmayı öğreneceğiz.", tip: "Ev kelimesi 'Casa' hem bina hem yuva anlamında kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Odalar", words: [
                { target: "Cocina", native: "Mutfak", pronunciation: "ko-SI-na" },
                { target: "Salón", native: "Oturma odası", pronunciation: "sa-LON" },
                { target: "Dormitorio", native: "Yatak odası", pronunciation: "dor-mi-TO-rio" },
                { target: "Baño", native: "Banyo", pronunciation: "BA-nyo" },
                { target: "Jardín", native: "Bahçe", pronunciation: "har-DIN" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Nerede? (Estar)", rules: [
                { rule: "Konum İçin 'Estar'", explanation: "Bir şeyin yerini söylerken 'Ser' değil 'Estar' fiili kullanılır.", examples: ["Estoy en la cocina (Mutfaktayım)", "El sofá está en el salón (Koltuk salonda)"] }
            ]
        },
        { id: 4, type: "culture", title: "Veranda Kültürü 🌿", content: "Sıcak iklim nedeniyle İspanyol evlerinde genellikle iç avlu (patio) veya geniş balkonlar (terraza) bulunur. İnsanlar akşamları burada oturup serinler.", tip: " 'Mi casa es tu casa' = Evim evindir." },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Cocina, Salón, Baño", "Estar fiili konum bildirir", "Jardín = Bahçe"], cta: "Evini tarif et!" }
    ]
};

// ===== ÜNİTE 10: MOBİLYALAR =====
const unit10Lecture: UnitLecture = {
    unitId: 10, title: "Mobilyalar", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Eşyalar 🪑", content: "Evi dekore edelim! Mobilya isimleri günlük hayatta çok sık kullanılır.", tip: "Kelimelerin cinsiyetine (el/la) dikkat et." },
        {
            id: 2, type: "vocabulary", title: "Temel Mobilyalar", words: [
                { target: "Mesa", native: "Masa", pronunciation: "ME-sa" },
                { target: "Silla", native: "Sandalye", pronunciation: "SI-ya" },
                { target: "Sofá", native: "Koltuk", pronunciation: "so-FA" },
                { target: "Cama", native: "Yatak", pronunciation: "KA-ma" },
                { target: "Armario", native: "Dolap", pronunciation: "ar-MA-rio" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Var (Hay)", rules: [
                { rule: "HAY = Var", explanation: "Bir yerde bir şeyin var olduğunu söylemek için 'Hay' kullanılır. Tekil ve çoğul için aynıdır.", examples: ["Hay una mesa (Bir masa var)", "Hay dos sillas (İki sandalye var)"] }
            ]
        },
        { id: 4, type: "practice", title: "Odamda Neler Var?", content: "Kendi odanı düşün ve 'Hay' ile cümleler kur.", points: ["En mi habitación hay una cama", "Hay un armario grande", "No hay televisión"], tip: "Hay'dan sonra 'el/la' kullanılmaz, 'un/una' kullanılır." },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Mesa, Silla, Cama", "Hay = Var", "Hay + un/una/dos..."], cta: "Odanı anlat!" }
    ]
};

// ===== ÜNİTE 11: VÜCUT BÖLÜMLERİ =====
const unit11Lecture: UnitLecture = {
    unitId: 11, title: "Vücut Bölümleri", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Vücudumuz 💪", content: "Doktora gittiğinde veya spor yaparken vücut bölümlerini bilmek hayat kurtarır.", tip: "Ağrı tarif ederken bu kelimeler çok önemli." },
        {
            id: 2, type: "vocabulary", title: "Baş ve Yüz", words: [
                { target: "Cabeza", native: "Baş", pronunciation: "ka-BE-sa" },
                { target: "Ojo", native: "Göz", pronunciation: "O-ho" },
                { target: "Nariz", native: "Burun", pronunciation: "na-RIS" },
                { target: "Boca", native: "Ağız", pronunciation: "BO-ka" },
                { target: "Oreja", native: "Kulak", pronunciation: "o-RE-ha" }
            ]
        },
        {
            id: 3, type: "vocabulary", title: "Vücut", words: [
                { target: "Mano", native: "El", pronunciation: "MA-no" },
                { target: "Pie", native: "Ayak", pronunciation: "pye" },
                { target: "Brazo", native: "Kol", pronunciation: "BRA-so" },
                { target: "Pierna", native: "Bacak", pronunciation: "PIER-na" },
                { target: "Estómago", native: "Mide", pronunciation: "es-TO-ma-go" }
            ]
        },
        {
            id: 4, type: "grammar", title: "Ağrım Var (Doler)", rules: [
                { rule: "Me duele...", explanation: "Bir yerim ağrıyor demek için kullanılır. Tekil organlar için 'duele'.", examples: ["Me duele la cabeza (Başım ağrıyor)"] },
                { rule: "Me duelen...", explanation: "Çoğul organlar (gözler, bacaklar) için 'duelen'.", examples: ["Me duelen los pies (Ayaklarım ağrıyor)"] }
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Cabeza, Mano, Pie", "Me duele (tekil)", "Me duelen (çoğul)"], cta: "Doktormuş gibi oyna!" }
    ]
};

// ===== ÜNİTE 12: GİYSİLER =====
const unit12Lecture: UnitLecture = {
    unitId: 12, title: "Giysiler", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Moda ve Giyim 👗", content: "Alışveriş yapmayı sever misin? İspanya (Zara, Mango gibi markalarla) bir moda merkezidir.", tip: "Kıyafet denerken 'probarse' fiili kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Kıyafetler", words: [
                { target: "Camiseta", native: "Tişört", pronunciation: "ka-mi-SE-ta" },
                { target: "Pantalón", native: "Pantolon", pronunciation: "pan-ta-LON" },
                { target: "Vestido", native: "Elbise", pronunciation: "ves-TI-do" },
                { target: "Falda", native: "Etek", pronunciation: "FAL-da" },
                { target: "Zapatos", native: "Ayakkabı", pronunciation: "sa-PA-tos" }
            ]
        },
        {
            id: 3, type: "vocabulary", title: "Kışlık/Yazlık", words: [
                { target: "Abrigo", native: "Palto", pronunciation: "a-BRI-go" },
                { target: "Chaqueta", native: "Ceket", pronunciation: "cha-KE-ta" },
                { target: "Bañador", native: "Mayo", pronunciation: "ba-nya-DOR" },
                { target: "Gorra", native: "Şapka", pronunciation: "GO-rra" }
            ]
        },
        {
            id: 4, type: "grammar", title: "Giymek (Llevar)", rules: [
                { rule: "Llevar Fiili", explanation: "Üzerinde bir kıyafet taşımak/giymek anlamındadır.", examples: ["Llevo una camiseta azul (Mavi bir tişört giyiyorum)", "¿Qué llevas puesto? (Ne giyiyorsun?)"] }
            ]
        },
        { id: 5, type: "practice", title: "Mağazada", content: "Satıcıyla konuşma:", points: ["¿Tienen la talla M? (M beden var mı?)", "¿Puedo probármelo? (Deneyebilir miyim?)", "Me queda bien (Bana uydu/yakıştı)"], tip: "Probador = Deneme kabini" },
        { id: 6, type: "summary", title: "Özet 📝", points: ["Camiseta, Pantalón", "Llevar = Giymek/Taşımak", "Talla = Beden"], cta: "Kombin yap!" }
    ]
};

// ===== ÜNİTE 13: HAYVANLAR =====
const unit13Lecture: UnitLecture = {
    unitId: 13, title: "Hayvanlar Alemi 🐾", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Hayvanlar", content: "Evcil hayvanlarımızdan vahşi doğaya kadar hayvan isimlerini öğrenelim.", tip: "Evcil hayvan = Mascota" },
        {
            id: 2, type: "vocabulary", title: "Evcil Hayvanlar", words: [
                { target: "Perro", native: "Köpek", pronunciation: "PE-rro", example: "Perro fiel" },
                { target: "Gato", native: "Kedi", pronunciation: "GA-to", example: "Gato negro" },
                { target: "Pájaro", native: "Kuş", pronunciation: "PA-ha-ro", example: "Pájaro canta" },
                { target: "Pez", native: "Balık (canlı)", pronunciation: "pes", example: "Pez dorado" }
            ]
        },
        {
            id: 3, type: "vocabulary", title: "Çiftlik ve Vahşi", words: [
                { target: "Caballo", native: "At", pronunciation: "ka-BA-yo" },
                { target: "Vaca", native: "İnek", pronunciation: "VA-ka" },
                { target: "León", native: "Aslan", pronunciation: "le-ON" },
                { target: "Elefante", native: "Fil", pronunciation: "e-le-FAN-te" }
            ]
        },
        {
            id: 4, type: "grammar", title: "Pez vs Pescado 🐟", rules: [
                { rule: "Canlı vs Yemek", explanation: "Denizde yüzen canlı balık 'Pez'dir. Tabakta yediğimiz balık 'Pescado'dur.", examples: ["El pez nada en el mar", "Me gusta comer pescado"] }
            ]
        },
        { id: 5, type: "summary", title: "Özet 📝", points: ["Perro, Gato", "Caballo, Vaca", "Pez (canlı) / Pescado (yemek)"], cta: "Hayvanları tanı!" }
    ]
};

// ===== ÜNİTE 14: MESLEKLER =====
const unit14Lecture: UnitLecture = {
    unitId: 14, title: "Meslekler", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Ne İş Yapıyorsun? 💼", content: "İnsanlarla tanışırken mesleklerini sormak yaygındır.", tip: "Meslek söylerken 'bir' (un/una) kullanılmaz. Soy médico (Ben doktorum)." },
        {
            id: 2, type: "vocabulary", title: "Meslekler", words: [
                { target: "Médico", native: "Doktor", pronunciation: "ME-di-ko" },
                { target: "Profesor", native: "Öğretmen", pronunciation: "pro-fe-SOR" },
                { target: "Ingeniero", native: "Mühendis", pronunciation: "in-he-NIE-ro" },
                { target: "Abogado", native: "Avukat", pronunciation: "a-bo-GA-do" },
                { target: "Policía", native: "Polis", pronunciation: "po-li-SI-a" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Meslek Sormak", rules: [
                { rule: "¿A qué te dedicas?", explanation: "Ne iş yapıyorsun? (En yaygın kalıp)", examples: ["Hola, ¿a qué te dedicas?"] },
                { rule: "Ser Fiili", explanation: "Meslekler kalıcı olduğu için 'Ser' kullanılır (Soy...).", examples: ["Soy estudiante", "Ella es profesora"] }
            ]
        }
    ]
};

// ===== ÜNİTE 15: ŞEHİRDE YERLER =====
const unit15Lecture: UnitLecture = {
    unitId: 15, title: "Şehirde", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Şehri Keşfet 🏙️", content: "Yol tarifi almak veya aradığın yeri bulmak için bu kelimeler şart.", tip: "Calle = Sokak, Plaza = Meydan" },
        {
            id: 2, type: "vocabulary", title: "Yerler", words: [
                { target: "Hospital", native: "Hastane", pronunciation: "os-pi-TAL" },
                { target: "Banco", native: "Banka", pronunciation: "BAN-ko" },
                { target: "Parque", native: "Park", pronunciation: "PAR-ke" },
                { target: "Farmacia", native: "Eczane", pronunciation: "far-MA-sia" },
                { target: "Supermercado", native: "Süpermarket", pronunciation: "su-per-mer-KA-do" }
            ]
        },
        { id: 3, type: "practice", title: "Yol Sorma", content: "Pardon, ... nerede?", points: ["Disculpe, ¿dónde está el banco?", "Está cerca/lejos (Yakın/Uzak)", "A la derecha/izquierda (Sağda/Solda)"], tip: "Disculpe = Pardon (kibar)" }
    ]
};

// ===== ÜNİTE 16: ULAŞIM =====
const unit16Lecture: UnitLecture = {
    unitId: 16, title: "Ulaşım", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Yola Çıkalım 🚗", content: "Bir yerden bir yere nasıl gidersin?", tip: "Ulaşım araçları için edat olarak 'en' kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Araçlar", words: [
                { target: "Coche", native: "Araba", pronunciation: "KO-che" },
                { target: "Autobús", native: "Otobüs", pronunciation: "au-to-BUS" },
                { target: "Tren", native: "Tren", pronunciation: "tren" },
                { target: "Avión", native: "Uçak", pronunciation: "a-VION" },
                { target: "Metro", native: "Metro", pronunciation: "ME-tro" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Gitmek: Ir Fiili 🚶", rules: [
                { rule: "Düzensiz Çekim", explanation: "Ir fiili tamamen düzensizdir.", examples: [] }
            ], points: [
                "Yo **voy** (Gidiyorum)",
                "Tú **vas** (Gidiyorsun)",
                "Él/Ella **va** (Gidiyor)",
                "Nosotros **vamos** (Gidiyoruz)",
                "Vosotros **vais** (Gidiyorsunuz)",
                "Ellos **van** (Gidiyorlar)"
            ]
        },
        {
            id: 4, type: "grammar", title: "İle Gitmek (Ir en)", rules: [
                { rule: "Ir + en + Araç", explanation: "Bir araçla gitmek için 'Ir en' kalıbı kullanılır.", examples: ["Voy en coche (Arabayla gidiyorum)", "Vamos en autobús (Otobüsle gidiyoruz)"] },
                { rule: "Yürüyerek", explanation: "İstisna: 'A pie' (Yürüyerek).", examples: ["Voy a pie"] }
            ]
        }
    ]
};

// ===== ÜNİTE 17: GÜNLÜK RUTİNLER =====
const unit17Lecture: UnitLecture = {
    unitId: 17, title: "Günlük Rutinler", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Bir Günüm 🌅", content: "Her gün yaptığımız işleri anlatmayı öğrenelim.", tip: "Bu fiiller genellikle dönüşlüdür (sonu -se ile biter)." },
        {
            id: 2, type: "vocabulary", title: "Aktiviteler", words: [
                { target: "Levantarse", native: "Kalkmak", pronunciation: "le-van-TAR-se" },
                { target: "Ducharse", native: "Duş almak", pronunciation: "du-CHAR-se" },
                { target: "Trabajar", native: "Çalışmak", pronunciation: "tra-ba-HAR" },
                { target: "Comer", native: "Yemek yemek", pronunciation: "ko-MER" },
                { target: "Dormir", native: "Uyumak", pronunciation: "dor-MIR" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Dönüşlü Fiiller (Reflexivos) 🔄", rules: [
                { rule: "Mantık", explanation: "Eylemi yapan ve etkilenen aynı kişidir. Fiil sonuna '-se' alır.", examples: [] }
            ], points: [
                "Levantar**se** (Kalkmak):",
                "Me levanto (Kalkıyorum)",
                "Te levantas (Kalkıyorsun)",
                "Se levanta (Kalkıyor)",
                "Nos levantamos (Kalkıyoruz)",
                "Os levantáis (Kalkıyorsunuz)",
                "Se levantan (Kalkıyorlar)"
            ]
        }
    ]
};

// ===== ÜNİTE 18: SAAT SÖYLEMEK =====
const unit18Lecture: UnitLecture = {
    unitId: 18, title: "Saat Söylemek", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Saat Kaç? ⌚", content: "¿Qué hora es?", tip: "Saatler dişil kabul edilir (la/las)." },
        {
            id: 2, type: "vocabulary", title: "Zaman Terimleri", words: [
                { target: "Hora", native: "Saat", pronunciation: "O-ra" },
                { target: "Minuto", native: "Dakika", pronunciation: "mi-NU-to" },
                { target: "En punto", native: "Tam", pronunciation: "en PUN-to" },
                { target: "Y media", native: "Buçuk", pronunciation: "i ME-dia" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Es vs Son", rules: [
                { rule: "Saat 1 İçin Es", explanation: "Sadece saat 1 için tekil 'Es la' kullanılır.", examples: ["Es la una (Saat bir)"] },
                { rule: "Diğerleri İçin Son", explanation: "2-12 arası çoğul 'Son las' kullanılır.", examples: ["Son las tres (Saat üç)", "Son las diez (Saat on)"] }
            ]
        }
    ]
};

// ===== ÜNİTE 19: HAVA DURUMU =====
const unit19Lecture: UnitLecture = {
    unitId: 19, title: "Hava Durumu", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Hava Nasıl? 🌤️", content: "¿Qué tiempo hace?", tip: "Hava durumu için genellikle 'Hacer' (Yapmak) fiili kullanılır." },
        {
            id: 2, type: "vocabulary", title: "Durumlar", words: [
                { target: "Hace sol", native: "Güneşli", pronunciation: "A-se sol" },
                { target: "Hace calor", native: "Sıcak", pronunciation: "A-se ka-LOR" },
                { target: "Hace frío", native: "Soğuk", pronunciation: "A-se FRI-o" },
                { target: "Llueve", native: "Yağmur yağıyor", pronunciation: "YUE-ve" }
            ]
        },
        { id: 3, type: "culture", title: "İklim 🌡️", content: "İspanya'nın güneyi çok sıcaktır ama kuzeyi yağmurludur.", tip: "Madrid yazın çok sıcak, kışın soğuktur." }
    ]
};

// ===== ÜNİTE 20: HOBİLER =====
const unit20Lecture: UnitLecture = {
    unitId: 20, title: "Hobiler", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Boş Zaman 🎨", content: "Nelerden hoşlanırsın?", tip: "Hobilerini anlatırken 'Me gusta' (Severim) kalıbını kullan." },
        {
            id: 2, type: "vocabulary", title: "Aktiviteler", words: [
                { target: "Leer", native: "Okumak", pronunciation: "le-ER" },
                { target: "Viajar", native: "Seyahat etmek", pronunciation: "via-HAR" },
                { target: "Cocinar", native: "Yemek yapmak", pronunciation: "ko-si-NAR" },
                { target: "Bailar", native: "Dans etmek", pronunciation: "bai-LAR" },
                { target: "Fútbol", native: "Futbol", pronunciation: "FUT-bol" }
            ]
        },
        {
            id: 3, type: "grammar", title: "Sevmek (Gustar) ❤️", rules: [
                { rule: "Yapı", explanation: "Gustar 'hoşa gitmek' demektir. Özne sevilen şeydir.", examples: [] }
            ], points: [
                "**Me** gusta (Severim / Hoşuma gider)",
                "**Te** gusta (Seversin)",
                "**Le** gusta (Sever)",
                "**Nos** gusta (Severiz)",
                "**Os** gusta (Seversiniz)",
                "**Les** gusta (Severler)",
                "*Çoğul şeyler için 'Gustan' kullanılır: Me gustan los gatos."
            ]
        },
        { id: 4, type: "summary", title: "Tebrikler! 🎉", points: ["A1 Seviyesini Bitirdin!", "Temel konuları öğrendin", "Artık basit sohbetler edebilirsin"], cta: "Sertifikanı al!" }
    ]
};

// ===== ÜNİTE 21: DUYGULAR =====
const unit21Lecture: UnitLecture = {
    unitId: 21, title: "Duygular ve Hisler", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Nasıl Hissediyorsun? 😊", content: "Duygularımızı ifade etmek iletişimin önemli bir parçasıdır.", tip: "'¿Cómo estás?' sorusuna duygu ile cevap ver!" },
        { id: 2, type: "vocabulary", title: "Temel Duygular", words: [{ target: "Feliz", native: "Mutlu", pronunciation: "fe-LİS" }, { target: "Triste", native: "Üzgün", pronunciation: "TRİS-te" }, { target: "Cansado/a", native: "Yorgun", pronunciation: "kan-SA-do" }, { target: "Nervioso/a", native: "Gergin", pronunciation: "ner-vi-O-so" }] },
        { id: 3, type: "grammar", title: "ESTAR + Sıfat", rules: [{ rule: "Geçici Durumlar", explanation: "Duygular ESTAR fiiliyle ifade edilir", examples: ["Estoy feliz", "Estás triste"] }] }
    ]
};

// ===== ÜNİTE 22: OKUL =====
const unit22Lecture: UnitLecture = {
    unitId: 22, title: "Okul ve Sınıf", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Okulda 🏫", content: "Okul hayatıyla ilgili kelimeleri öğrenelim.", tip: "İspanya'da öğle arası uzundur!" },
        { id: 2, type: "vocabulary", title: "Okul Eşyaları", words: [{ target: "El libro", native: "Kitap", pronunciation: "Lİ-bro" }, { target: "El cuaderno", native: "Defter", pronunciation: "kua-DER-no" }, { target: "El lápiz", native: "Kalem", pronunciation: "LA-pis" }, { target: "La mochila", native: "Sırt çantası", pronunciation: "mo-CHİ-la" }] },
        { id: 3, type: "vocabulary", title: "Dersler", words: [{ target: "Matemáticas", native: "Matematik", pronunciation: "ma-te-MA-ti-kas" }, { target: "Historia", native: "Tarih", pronunciation: "is-TO-ria" }, { target: "Inglés", native: "İngilizce", pronunciation: "in-GLES" }] }
    ]
};

// ===== ÜNİTE 23: MEYVELER VE SEBZELER =====
const unit23Lecture: UnitLecture = {
    unitId: 23, title: "Meyveler ve Sebzeler", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Pazarda 🍎", content: "Meyve ve sebze isimlerini öğren.", tip: "İspanya'da mercado denilen pazarlar popülerdir!" },
        { id: 2, type: "vocabulary", title: "Meyveler", words: [{ target: "La manzana", native: "Elma", pronunciation: "man-SA-na" }, { target: "La naranja", native: "Portakal", pronunciation: "na-RAN-ha" }, { target: "El plátano", native: "Muz", pronunciation: "PLA-ta-no" }, { target: "La fresa", native: "Çilek", pronunciation: "FRE-sa" }] },
        { id: 3, type: "vocabulary", title: "Sebzeler", words: [{ target: "El tomate", native: "Domates", pronunciation: "to-MA-te" }, { target: "La lechuga", native: "Marul", pronunciation: "le-CHU-ga" }, { target: "La cebolla", native: "Soğan", pronunciation: "se-BO-ya" }] }
    ]
};

// ===== ÜNİTE 24: ÜLKELER =====
const unit24Lecture: UnitLecture = {
    unitId: 24, title: "Ülkeler ve Milletler", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Nerelisin? 🌍", content: "Nereli olduğunu söylemeyi öğren.", tip: "'Soy de Turquía' veya 'Soy turco'" },
        { id: 2, type: "vocabulary", title: "Ülkeler", words: [{ target: "España", native: "İspanya", pronunciation: "es-PA-nya" }, { target: "Turquía", native: "Türkiye", pronunciation: "tur-Kİ-a" }, { target: "Francia", native: "Fransa", pronunciation: "FRAN-sia" }, { target: "Alemania", native: "Almanya", pronunciation: "a-le-MA-nia" }] },
        { id: 3, type: "grammar", title: "Milliyet Uyumu", rules: [{ rule: "Erkek/Kadın", explanation: "Milliyetler cinsiyete göre değişir", examples: ["español/española", "turco/turca"] }] }
    ]
};

// ===== ÜNİTE 25: TEMEL FİİLLER =====
const unit25Lecture: UnitLecture = {
    unitId: 25, title: "Temel Fiiller", language: "İspanyolca", level: "A1",
    slides: [
        { id: 1, type: "intro", title: "Eylemler ⚡", content: "En çok kullanılan fiilleri öğren.", tip: "Fiiller -AR, -ER, -IR ile biter." },
        { id: 2, type: "vocabulary", title: "Önemli Fiiller", words: [{ target: "Hablar", native: "Konuşmak", pronunciation: "ab-LAR" }, { target: "Comer", native: "Yemek", pronunciation: "ko-MER" }, { target: "Vivir", native: "Yaşamak", pronunciation: "vi-VİR" }, { target: "Trabajar", native: "Çalışmak", pronunciation: "tra-ba-HAR" }] },
        { id: 3, type: "grammar", title: "Fiil Çekimi", rules: [{ rule: "-AR Fiilleri", explanation: "hablo, hablas, habla, hablamos, hablan", examples: ["Yo hablo español"] }, { rule: "-ER Fiilleri", explanation: "como, comes, come, comemos, comen", examples: ["Yo como pizza"] }] }
    ]
};

import { getA2LectureForUnit } from './lectures-a2';
import { getB1LectureForUnit } from './lectures-b1';
import { getB2LectureForUnit } from './lectures-b2';


export function getLectureForUnit(unitId: number): UnitLecture {
    // B2 üniteleri (61-80)
    if (unitId >= 61 && unitId <= 80) {
        const b2Lecture = getB2LectureForUnit(unitId);
        // B2 lecture formatını UnitLecture formatına dönüştür
        return {
            unitId: b2Lecture.unitId,
            title: b2Lecture.title,
            language: "es",
            level: "B2",
            slides: b2Lecture.slides.map((s, i) => ({
                id: i + 1,
                type: "vocabulary" as const,
                title: s.title,
                points: s.content ? [s.content] :
                    s.vocabulary ? s.vocabulary.map(v => `${v.spanish} - ${v.turkish}`) :
                        s.examples ? s.examples.map(e => `${e.spanish} - ${e.turkish}`) : []
            }))
        };
    }

    // B1 üniteleri (41-60)
    if (unitId >= 41 && unitId <= 60) {
        return getB1LectureForUnit(unitId);
    }

    // A2 üniteleri (26-40) - A1 artık 25 ünite
    if (unitId >= 26 && unitId <= 40) {
        return getA2LectureForUnit(unitId);
    }

    // A1 üniteleri (1-25)
    const lectures: { [key: number]: UnitLecture } = {
        1: unit1Lecture, 2: unit2Lecture, 3: unit3Lecture, 4: unit4Lecture, 5: unit5Lecture,
        6: unit6Lecture, 7: unit7Lecture, 8: unit8Lecture, 9: unit9Lecture, 10: unit10Lecture,
        11: unit11Lecture, 12: unit12Lecture, 13: unit13Lecture, 14: unit14Lecture, 15: unit15Lecture,
        16: unit16Lecture, 17: unit17Lecture, 18: unit18Lecture, 19: unit19Lecture, 20: unit20Lecture,
        21: unit21Lecture, 22: unit22Lecture, 23: unit23Lecture, 24: unit24Lecture, 25: unit25Lecture
    };
    return lectures[unitId] || unit1Lecture;
}


