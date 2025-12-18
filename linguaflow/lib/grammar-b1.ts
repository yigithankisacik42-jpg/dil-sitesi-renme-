/**
 * LinguaFlow Gramer Veritabanı - İspanyolca B1
 * 20 Ünite (ID: 41-60), her biri için DETAYLI gramer kuralları
 * Bol örnekler, istisnalar ve açıklamalar içerir
 */

export interface B1GrammarRule {
    title: string;
    explanation: string;
    examples: string[];
    table?: string;
    exceptions?: string[];
    notes?: string[];
}

// ===== ÜNİTE 41: GELECEK ZAMAN 1 (FUTURO SIMPLE) =====
const unit41Grammar: B1GrammarRule[] = [
    {
        title: "Futuro Simple - Düzenli Fiiller: Genel Açıklama",
        explanation: "Futuro Simple (Gelecek Zaman), gelecekte gerçekleşecek eylemleri, tahminleri ve olasılıkları ifade etmek için kullanılır. İspanyolca'da gelecek zaman oluşturmak çok basittir: fiil kökü değişmez, sadece mastar formunun (infinitivo) sonuna özel ekler eklenir. EN ÖNEMLİ özelliği: -AR, -ER ve -IR fiillerin HEPSİ aynı ekleri alır! Bu, İspanyolca'nın en düzenli zamanlarından biridir.",
        examples: [
            "Hablar (konuşmak) → Hablaré (Konuşacağım)",
            "Comer (yemek) → Comeré (Yiyeceğim)",
            "Vivir (yaşamak) → Viviré (Yaşayacağım)",
            "Mañana hablaré con mi jefe. (Yarın patronumla konuşacağım)",
            "El año que viene viajaremos a España. (Gelecek yıl İspanya'ya seyahat edeceğiz)",
            "¿Estudiarás medicina? (Tıp okuyacak mısın?)"
        ],
        table: "| Kişi | Ek | Hablar | Comer | Vivir |\n|------|-----|--------|-------|-------|\n| Yo | -é | Hablaré | Comeré | Viviré |\n| Tú | -ás | Hablarás | Comerás | Vivirás |\n| Él/Ella/Usted | -á | Hablará | Comerá | Vivirá |\n| Nosotros/as | -emos | Hablaremos | Comeremos | Viviremos |\n| Vosotros/as | -éis | Hablaréis | Comeréis | Viviréis |\n| Ellos/Ellas/Ustedes | -án | Hablarán | Comerán | Vivirán |",
        notes: [
            "Ekler DAIMA vurgulu (accent mark) içerir: -é, -ás, -á, -emos, -éis, -án",
            "Mastar formu hiç değişmez! Hablar → Hablar + é = Hablaré",
            "Nosotros formu (-emos) şimdiki zamanla aynı görünür ama bağlamdan anlaşılır"
        ]
    },
    {
        title: "Gelecek Zamanın Kullanım Alanları",
        explanation: "Futuro Simple sadece gelecekteki eylemler için değil, aynı zamanda TAHMİN, OLASILIK ve ŞİMDİKİ ZAMANA DAİR VARSAYIMLAR için de kullanılır. Bu çok önemli bir nüanstır!",
        examples: [
            "1. GELECEKTEKİ EYLEMLER: Mañana iré al médico. (Yarın doktora gideceğim)",
            "1. La semana próxima empezaré el gimnasio. (Gelecek hafta spor salonuna başlayacağım)",
            "2. TAHMİNLER: Probablemente lloverá mañana. (Muhtemelen yarın yağmur yağacak)",
            "2. Creo que aprobarás el examen. (Sanırım sınavı geçeceksin)",
            "3. OLASILIĞA DAİR VARSAYIM (şu an için): ¿Qué hora será? Serán las tres. (Saat kaç olabilir? Üç civarı olmalı)",
            "3. ¿Dónde estará María? Estará en casa. (María nerede acaba? Evde olmalı)"
        ],
        notes: [
            "Gelecek zaman İngilizcedeki 'will' gibidir",
            "Olasılık anlamında 'probably/maybe' manasında kullanılabilir",
            "Konuşma dilinde 'Ir a + mastar' yapısı daha yaygındır gelecek planlar için"
        ]
    }
];

// ===== ÜNİTE 42: GELECEK ZAMAN 2 (DÜZENSİZLER) =====
const unit42Grammar: B1GrammarRule[] = [
    {
        title: "Futuro Simple - Düzensiz Fiiller: Kök Değişimleri",
        explanation: "Bazı çok yaygın kullanılan fiillerin gelecek zamanda KÖKLERİ değişir. Ancak İYİ HABER: Bu düzensiz kökler gelecek zaman (Futuro) ve koşullu kip (Condicional) için AYNIDIR! Bir kere öğrendiğinde iki zamanda da kullanırsın. EKLER yine aynı kalır: -é, -ás, -á, -emos, -éis, -án. Sadece kök değişir!",
        examples: [
            "Tener (sahip olmak) → TENDR- → Tendré dinero. (Param olacak)",
            "Poder (yapabilmek) → PODR- → Podré ayudarte. (Sana yardım edebileceğim)",
            "Saber (bilmek) → SABR- → Sabrás la verdad. (Gerçeği bileceksin)",
            "Querer (istemek) → QUERR- → Querrá venir. (Gelmek isteyecek)",
            "Venir (gelmek) → VENDR- → Vendré mañana. (Yarın geleceğim)",
            "Salir (çıkmak) → SALDR- → Saldremos a las ocho. (Saat sekizde çıkacağız)"
        ],
        table: "| Mastar | Düzensiz Kök | Yo | Tú | Él/Ella |\n|--------|--------------|-----|-----|--------|\n| Tener | Tendr- | Tendré | Tendrás | Tendrá |\n| Poder | Podr- | Podré | Podrás | Podrá |\n| Saber | Sabr- | Sabré | Sabrás | Sabrá |\n| Querer | Querr- | Querré | Querrás | Querrá |\n| Venir | Vendr- | Vendré | Vendrás | Vendrá |\n| Salir | Saldr- | Saldré | Saldrás | Saldrá |\n| Poner | Pondr- | Pondré | Pondrás | Pondrá |\n| Hacer | Har- | Haré | Harás | Hará |\n| Decir | Dir- | Diré | Dirás | Dirá |\n| Haber | Habr- | Habrá | - | - |",
        notes: [
            "Düzensiz kökler genellikle daha kısa ve telaffuzu daha kolay",
            "Haber fiili sadece 'Habrá' formunda kullanılır (var olacak anlamında)",
            "Bu 10 düzensiz fiil günlük hayatta ÇOK sık kullanılır, mutlaka ezberle!"
        ],
        exceptions: [
            "ÖNEMLİ İSTİSNA: Hacer'in kökü 'Hac-' değil, 'Har-' olur (Haré, harás...)",
            "Decir'in kökü 'Dec-' değil, 'Dir-' olur (Diré, dirás...)",
            "Haber sadece 3. tekil kişide kullanılır: Habrá (olacak/var olacak)"
        ]
    },
    {
        title: "Haber Fiilinin Özel Kullanımı",
        explanation: "'Haber' fiili gelecek zamanda çok özeldir. Sadece 'Habrá' formunda kullanılır ve 'var olacak' anlamına gelir. Tekil veya çoğul fark etmez, hep 'habrá' kullanılır. Şimdiki zamandaki 'Hay' (var) gibidir.",
        examples: [
            "Mañana habrá una reunión. (Yarın bir toplantı olacak)",
            "Habrá muchos problemas. (Çok sorun olacak - çoğul!)",
            "¿Habrá comida en la fiesta? (Partide yemek olacak mı?)",
            "No habrá clases el lunes. (Pazartesi dersler olmayacak)",
            "Habrá que estudiar más. (Daha çok çalışmak gerekecek)"
        ],
        notes: [
            "Habrá = tekil veya çoğul için kullanılır",
            "Olumsuz: No habrá",
            "Soru: ¿Habrá...?"
        ]
    }
];

// ===== ÜNİTE 43: EMİR KİPİ (OLUMLU) =====
const unit43Grammar: B1GrammarRule[] = [
    {
        title: "Imperativo Afirmativo (Tú) - Düzenli Fiiller",
        explanation: "Emir kipi, birine bir şey yapmasını EMRETMEK veya rica etmek için kullanılır. Tú (sen) için olumlu emir yapısı ÇOK basittir: Şimdiki zamanın 3. tekil kişi formunu kullanırsın! Yani 'Él habla' → 'Habla tú!'",
        examples: [
            "Hablar (konuşmak) → Él habla → ¡Habla! (Konuş!)",
            "Comer (yemek) → Él come → ¡Come! (Ye!)",
            "Escribir (yazmak) → Él escribe → ¡Escribe! (Yaz!)",
            "¡Habla más despacio! (Daha yavaş konuş!)",
            "¡Come las verduras! (Sebzeleri ye!)",
            "¡Escribe tu nombre! (Adını yaz!)"
        ],
        table: "| Fiil Türü | Şimdiki (Él) | Emir (Tú) | Örnek |\n|-----------|--------------|-----------|-------|\n| -AR (Hablar) | Habla | ¡Habla! | ¡Habla español! |\n| -ER (Comer) | Come | ¡Come! | ¡Come bien! |\n| -IR (Escribir) | Escribe | ¡Escribe! | ¡Escribe una carta! |",
        notes: [
            "Tú emir kipi = Şimdiki zamanın 3. tekil kişi formu",
            "Emir cümlelerinde genellikle 'tú' kullanılmaz, sadece fiil yeterli",
            "Kibarlık için 'por favor' eklenebilir"
        ]
    },
    {
        title: "Imperativo Afirmativo - 8 Düzensiz Fiil (Tú)",
        explanation: "Sadece 8 tane fiil Tú için olumlu emirde TAMAMENdüzensizdir. Bunları EZBERLEMEN gerekiyor çünkü şimdiki zaman formlarına benzemezler. Bu 8 fiil çok sık kullanılır!",
        examples: [
            "Venir (gelmek) → ¡VEN! → ¡Ven aquí! (Buraya gel!)",
            "Hacer (yapmak) → ¡HAZ! → ¡Haz tu tarea! (Ödevini yap!)",
            "Decir (söylemek) → ¡DI! → ¡Dime la verdad! (Bana gerçeği söyle!)",
            "Salir (çıkmak) → ¡SAL! → ¡Sal de aquí! (Buradan çık!)",
            "Tener (sahip olmak) → ¡TEN! → ¡Ten cuidado! (Dikkatli ol!)",
            "Poner (koymak) → ¡PON! → ¡Pon la mesa! (Masayı hazırla!)",
            "Ser (olmak) → ¡SÉ! → ¡Sé bueno! (İyi ol!)",
            "Ir (gitmek) → ¡VE! → ¡Ve a casa! (Eve git!)"
        ],
        table: "| Mastar | Tú Emir | Anlamı | Örnek Kullanım |\n|--------|---------|---------|----------------|\n| Venir | ¡Ven! | Gel! | ¡Ven conmigo! (Benimle gel!) |\n| Hacer | ¡Haz! | Yap! | ¡Haz ejercicio! (Egzersiz yap!) |\n| Decir | ¡Di! | Söyle! | ¡Di que sí! (Evet de!) |\n| Salir | ¡Sal! | Çık! | ¡Sal del agua! (Sudan çık!) |\n| Tener | ¡Ten! | Al/Tut! | ¡Ten paciencia! (Sabırlı ol!) |\n| Poner | ¡Pon! | Koy! | ¡Pon música! (Müzik aç!) |\n| Ser | ¡Sé! | Ol! | ¡Sé feliz! (Mutlu ol!) |\n| Ir | ¡Ve! | Git! | ¡Ve al médico! (Doktora git!) |",
        exceptions: [
            "DİKKAT: 'Sé' (emir) ile 'Sé' (biliyorum - saber) aynı yazılır ama farklı anlamlardır!",
            "'Ve' (git!) ile 've' (ve, and) farklıdır - bağlamdan anlaşılır",
            "Tener'in emir formu 'tien' değil 'ten'dir!"
        ],
        notes: [
            "Bu 8 fiili mutlaka ezberle - günlük hayatta çok kullanılır",
            "'Ten cuidado' = Dikkatli ol (en yaygın kullanım)",
            "'Dime' = Bana söyle (çok sık duyulur)"
        ]
    },
    {
        title: "Usted/Ustedes için Emir Kipi",
        explanation: "Resmi emir (Usted/Ustedes) için Subjuntivo Presente formları kullanılır. Bu hem olumlu hem olumsuz emirde geçerlidir.",
        examples: [
            "Hablar → Usted: ¡Hable! → ¡Hable más alto! (Daha yüksek sesle konuşun!)",
            "Comer → Ustedes: ¡Coman! → ¡Coman bien! (İyi yiyin!)",
            "Venir → Usted: ¡Venga! → ¡Venga mañana! (Yarın gelin!)"
        ],
        notes: [
            "Usted/Ustedes emirleri Subjuntivo formlarıyla aynıdır",
            "İşyerinde ve resmi durumlarda Usted formu kullanılır"
        ]
    }
];

// Dosya çok uzun olduğu için devam eden üniteleri ayrı mesajlarda güncelleyeceğim
// Şimdilik ilk 3 üniteyi (41-43) detaylandırdım

// ===== ÜNİTE 44-60 için benzer detaylandırma devam edecek =====
// (Token limiti nedeniyle dosyayı böleceğim)

const unit44Grammar: B1GrammarRule[] = [
    {
        title: "Imperativo Negativo - Olumsuz Emir",
        explanation: "Olumsuz emir kipi (yapma!) için SUBJUNTIVO formları kullanılır. Bu, olumlu emirden tamamen farklıdır! Formül: No + Subjuntivo Presente. Tú için olumlu 'Habla' ama olumsuz 'No hables'!",
        examples: [
            "¡No hables! (Konuşma!) - hablar → hables",
            "¡No comas! (Yeme!) - comer → comas",
            "¡No escribas! (Yazma!) - escribir → escribas",
            "¡No vengas tarde! (Geç gelme!)",
            "¡No hagas ruido! (Gürültü yapma!)",
            "¡No digas mentiras! (Yalan söyleme!)"
        ],
        table: "| Fiil | Olumlu Emir (Tú) | Olumsuz Emir (Tú) | Fark |\n|------|------------------|-------------------|------|\n| Hablar | ¡Habla! | ¡No hables! | Subjuntivo! |\n| Comer | ¡Come! | ¡No comas! | Subjuntivo! |\n| Venir | ¡Ven! | ¡No vengas! | Subjuntivo! |\n| Hacer | ¡Haz! | ¡No hagas! | Subjuntivo! |\n| Ir | ¡Ve! | ¡No vayas! | Subjuntivo! |",
        notes: [
            "Olumsuz emir DAIMA Subjuntivo kullanır",
            "Olumlu ve olumsuz formlar FARKLIDIR!",
            "Usted/Ustedes için olumlu ve olumsuz form aynıdır (ikisi de Subjuntivo)"
        ]
    }
];

const unit45Grammar: B1GrammarRule[] = [
    {
        title: "Subjuntivo Presente - İspanyolca'nın En Önemli Konusu",
        explanation: "Subjuntivo (İstek Kipi), İspanyolca'nın EN ZOR ama EN ÖNEMLİ konusudur. Subjuntivo, ŞÜPHEYİ, İSTEĞİ, DUYGUyu, EMRİ ve OLASILIK ifade eder. İngilizce'de bu yapı neredeyse yok, bu yüzden Türkçe konuşanlar için zor olabilir. Ancak bir kere MANTIK kavrandığında her şey netleşir. Subjuntivo kullanmak için bir TETIKLEYICI KELIME/İFADE gerekir. Tetikleyici yoksa Subjuntivo yok!",
        examples: [
            "SUBJUNTIVO: Espero que vengas. (Gelmeni umuyorum - ŞÜPHE var)",
            "İNDİCATİVO: Sé que vienes. (Geldiğini biliyorum - KEsİN)",
            "SUBJUNTIVO: Quiero que estudies. (Çalışmanı istiyorum - İSTEK)",
            "SUBJUNTIVO: Es posible que llueva. (Yağmur yağması mümkün - OLASILIK)",
            "SUBJUNTIVO: Dudo que sea verdad. (Doğru olduğundan şüpheliyim - ŞÜPHE)",
            "İNDİCATİVO: Creo que es verdad. (Doğru olduğuna inanıyorum - EMİN)"
        ],
        notes: [
            "Subjuntivo = Şüphe, istek, duygu, emir, olasılık",
            "Indicativo = Kesinlik, gerçek, bilinen",
            "Tetikleyici ifade + QUE + Subjuntivo"
        ]
    },
    {
        title: "Subjuntivo Presente - Çekim Kuralları",
        explanation: "Subjuntivo çekimi şimdiki zamanın TAM TERSİDİR! -AR fiiller şimdi -E alır, -ER/-IR fiiller -A alır. Bu 'tersine çevirme' mantığını kavramak çok önemli.",
        examples: [
            "Hablar (şimdi: hablo) → (subjuntivo: hable)",
            "Comer (şimdi: como) → (subjuntivo: coma)",
            "Vivir (şimdi: vivo) → (subjuntivo: viva)"
        ],
        table: "| Kişi | -AR (Hablar) | -ER (Comer) | -IR (Vivir) |\n|------|-------------|-------------|-------------|\n| Yo | habl**e** | com**a** | viv**a** |\n| Tú | habl**es** | com**as** | viv**as** |\n| Él/Ella | habl**e** | com**a** | viv**a** |\n| Nosotros | habl**emos** | com**amos** | viv**amos** |\n| Vosotros | habl**éis** | com**áis** | viv**áis** |\n| Ellos | habl**en** | com**an** | viv**an** |",
        notes: [
            "Tersine çevirme: -AR → -e, -ER/-IR → -a",
            "Yo ve Él/Ella formları AYNIDIR (hable, coma)",
            "Nosotros formu 'Let's' anlamı verebilir: ¡Hablemos! (Konuşalım!)"
        ]
    }
];

// Kalan üniteler için detaylı gramer kuralları

const unit46Grammar: B1GrammarRule[] = [
    {
        title: "Condicional Simple - Koşullu Kip",
        explanation: "Koşullu kip (-ecekti, -ardı, -erdim anlamında), hayalleri, kibar istekleri, tavsiyeleri ve gerçekleşmesi pek mümkün olmayan durumları ifade eder. Ekleri gelecek zamana benzer ama başka. Düzensiz fiillerin kökleri gelecek zamanla AYNIDIR.",
        examples: [
            "Me gustaría viajar a Japón. (Japonya'ya seyahat etmek isterdim)",
            "Deberías descansar más. (Daha çok dinlenmelisin)",
            "Podría ayudarte mañana. (Yarın sana yardım edebilirdim)",
            "¿Qué harías tú? (Sen ne yapardın?)",
            "Sería genial vivir aquí. (Burada yaşamak harika olurdu)"
        ],
        table: "| Kişi | Ek | Hablar | Tener (Düzensiz) |\\n|-----|-----|---------|------------------|\\n| Yo | -ía | Hablaría | Tendría |\\n| Tú | -ías | Hablarías | Tendrías |\\n| Él | -ía | Hablaría | Tendría |\\n| Nosotros | -íamos | Hablaríamos | Tendríamos |\\n| Vosotros | -íais | Hablaríais | Tendríais |\\n| Ellos | -ían | Hablarían | Tendrían |",
        notes: [
            "Düzensiz kökler Futuro ile aynı: Tener→Tendr, Poder→Podr",
            "Tüm ekler 'í' vurgulu (accent mark) içerir",
            "Kibar istek için çok kullanılır: Querría un café (Bir kahve isterdim)"
        ]
    }
];


// Unit 47-60 için detaylı gramer kuralları

const unit47Grammar: B1GrammarRule[] = [
    {
        title: "Zorunluluk İfadeleri - Çevre Konularında",
        explanation: "Çevre konularında sıkça zorunluluk ve tavsiye ifadeleri kullanılır. İspanyolca'da üç ana zorunluluk yapısı vardır: Hay que (genel), Tener que (kişisel), Deber (ahlaki). Her birinin nüansı farklıdır ve doğru kullanımı önemlidir.",
        examples: [
            "HAY QUE (Genel zorunluluk): Hay que reciclar más. (Daha çok geri dönüştürmek gerekiyor - herkes için)",
            "Hay que proteger el medio ambiente. (Çevreyi korumak gerekiyor)",
            "TENER QUE (Kişisel zorunluluk): Tenemos que reducir el consumo. (Tüketimi azaltmamız gerekiyor - bizim sorumluluğumuz)",
            "Tienes que apagar las luces. (Işıkları kapatmalısın)",
            "DEBER (Ahlaki zorunluluk): Debemos cuidar la naturaleza. (Doğaya bakmalıyız - ahlaki görev)",
            "Deberías usar transporte público. (Toplu taşıma kullanmalısın - tavsiye)"
        ],
        table: "| Yapı | Anlamı | Örnek | Nüans |\\n|------|--------|-------|-------|\\n| Hay que + mastar | Gerekiyor (genel) | Hay que reciclar | Herkes için |\\n| Tener que + mastar | ...meli/malı (kişisel) | Tengo que ayudar | Zorunluluk |\\n| Deber + mastar | ...meli (ahlaki) | Debemos proteger | Sorumluluk |",
        notes: [
            "Hay que = genel, kişisiz",
            "Tener que = daha güçlü zorunluluk",
            "Deber = daha yumuşak, tavsiye niteliğinde"
        ],
        exceptions: [
            "Hay que'den sonra Subjuntivo KULLANILMAZ, sadece mastar",
            "Deber şartlı kipte (debería) daha kibar tavsiye olur"
        ]
    }
];

const unit48Grammar: B1GrammarRule[] = [
    {
        title: "Pretérito Perfecto - Deneyim Anlatma",
        explanation: "Eğitim ve iş deneyimlerinden bahsederken Pretérito Perfecto (He + participio) çok kullanılır. Bu zaman, geçmişte başlayıp ŞİMDİYE KADAR olan deneyimleri veya ŞİMDİYLE BAĞLANTILI geçmiş olayları anlatır. Türkçe'deki '-miştir, -di' anlamındadır.",
        examples: [
            "He estudiado economía. (Ekonomi okudum - deneyimim var)",
            "He aprobado todos los exámenes. (Tüm sınavları geçtim - şimdiye kadar)",
            "Nunca he suspendido. (Hiç kalmadım - hayatım boyunca)",
            "¿Has trabajado en educación? (Eğitimde çalıştın mı? - deneyimin var mı?)",
            "He conseguido una beca. (Burs kazandım - yakın geçmiş, şimdiyle ilgili)",
            "Mi hermano se ha licenciado este año. (Kardeşim bu yıl mezun oldu)"
        ],
        table: "| Kişi | Haber | Participio Örnek | Tam Form |\\n|------|-------|------------------|----------|\\n| Yo | He | estudiado | He estudiado |\\n| Tú | Has | comido | Has comido |\\n| Él/Ella | Ha | vivido | Ha vivido |\\n| Nosotros | Hemos | trabajado | Hemos trabajado |\\n| Vosotros | Habéis | aprobado | Habéis aprobado |\\n| Ellos | Han | hecho | Han hecho |",
        notes: [
            "Participio: -AR → -ado, -ER/-IR → -ido",
            "Düzensiz participiolar: Hecho, Escrito, Dicho, Visto, Puesto, Abierto, Roto",
            "Şimdiye kadar olan deneyimler için ideal"
        ],
        exceptions: [
            "İSTİSNA: Hacer → Hecho (yapmış)",
            "İSTİSNA: Escribir → Escrito (yazmış)",
            "İSTİSNA: Ver → Visto (görmüş)",
            "İSTİSNA: Decir → Dicho (söylemiş)"
        ]
    }
];

const unit49Grammar: B1GrammarRule[] = [
    {
        title: "Gelecek Tahminleri ve Olasılıklar",
        explanation: "Teknoloji ve bilim konularında gelecek zaman (Futuro) ve koşullu kip (Condicional) sıkça birlikte kullanılır. Futuro kesin tahminler için, Condicional ise olasılıklar ve teoriler için kullanılır.",
        examples: [
            "FUTURO (Kesin tahmin): La tecnología cambiará nuestras vidas. (Teknoloji hayatımızı değiştirecek)",
            "En el futuro, viviremos de manera diferente. (Gelecekte farklı yaşayacağız)",
            "CONDICIONAL (Olasılık): La IA podría reemplazar muchos trabajos. (Yapay zeka birçok işin yerini alabilir)",
            "Sería posible viajar a Marte. (Mars'a seyahat etmek mümkün olabilir)",
            "Los científicos creen que encontrarán una cura. (Bilim insanları bir tedavi bulacaklarına inanıyor)"
        ],
        notes: [
            "Futuro = kesin tahmin, plan",
            "Condicional = olasılık, teori",
            "Bilimsel metinlerde sıkça kullanılır"
        ]
    }
];

const unit50Grammar: B1GrammarRule[] = [
    {
        title: "Pasif Yapı ve Dolaylı Anlatım Giriş",
        explanation: "Haberler ve medya metinlerinde PASİF YAPI (Voz Pasiva) çok kullanılır çünkü odak noktası eylemi yapan değil, olayın kendisidir. İki tür pasif vardır: 'Ser + participio' (klasik) ve 'Se + fiil' (edilgen).",
        examples: [
            "PASİF SER: La noticia fue publicada ayer. (Haber dün yayınlandı)",
            "El presidente fue elegido. (Başkan seçildi)",
            "EDİLGEN SE: Se anunció que... (... olduğu duyuruldu)",
            "Se informó que habrá cambios. (Değişiklikler olacağı bildirildi)",
            "DOLAYLI ANLATIM: El ministro dijo que era importante. (Bakan önemli olduğunu söyledi)"
        ],
        table: "| Yapı | Kullanım | Örnek |\\n|------|----------|-------|\\n| Ser + participio | Klasik pasif | Fue anunciado |\\n| Se + fiil | Edilgen | Se publicó |\\n| Dijo que... | Dolaylı anlatım | Dijo que vendría |",
        notes: [
            "Haberlerde Se yapısı daha yaygın",
            "Dolaylı anlatımda zaman kayması olur"
        ]
    }
];

const unit51Grammar: B1GrammarRule[] = [
    {
        title: "Tavsiye Yapıları - Sağlık Konularında",
        explanation: "Sağlık ve beslenme konularında tavsiye vermek için birkaç yapı kullanılır. En yaygını DEBERÍAS (yapmalısın) ve TE RECOMIENDO (sana tavsiye ederim) yapılarıdır.",
        examples: [
            "DEBERÍA (Koşullu): Deberías comer más verduras. (Daha çok sebze yemelisin)",
            "Deberías hacer ejercicio regularmente. (Düzenli egzersiz yapmalısın)",
            "TE RECOMIENDO: Te recomiendo que hagas deporte. (Spor yapmağını tavsiye ederim - Subjuntivo!)",
            "ES IMPORTANTE: Es importante que duermas bien. (İyi uyuman önemli - Subjuntivo!)",
            "SERÍA BUENO: Sería bueno que dejaras de fumar. (Sigarayı bırakman iyi olurdu - Subjuntivo!)"
        ],
        table: "| Yapı | Sonrası | Örnek |\\n|------|---------|-------|\\n| Deberías + mastar | Mastar | Deberías descansar |\\n| Te recomiendo que | Subjuntivo | Te recomiendo que comas |\\n| Es importante que | Subjuntivo | Es importante que duermas |",
        notes: [
            "Debería = daha yumuşak tavsiye",
            "Recomiendo que + Subjuntivo = profesyonel tavsiye",
            "Es importante que + Subjuntivo = genel tavsiye"
        ]
    }
];

const unit52Grammar: B1GrammarRule[] = [
    {
        title: "Dönüşlü Fiiller - İlişki Fiilleri",
        explanation: "İlişkilerle ilgili fiillerin ÇOĞU dönüşlüdür (reflexivo). Bunlar eylemi yapan ile etkilenen aynı kişi olduğunda veya karşılıklı eylemler için kullanılır. Mastar formları -SE ile biter.",
        examples: [
            "ENAMORARSE (Aşık olmak): Me enamoré de ella. (Ona aşık oldum)",
            "CASARSE (Evlenmek): Nos casamos el año pasado. (Geçen yıl evlendik - karşılıklı)",
            "DIVORCIARSE (Boşanmak): Se divorciaron después de 10 años. (10 yıl sonra boşandılar)",
            "PELEARSE (Kavga etmek): Nos peleamos ayer. (Dün kavga ettik - karşılıklı)",
            "RECONCILIARSE (Barışmak): Nos reconciliamos hoy. (Bugün barıştık)",
            "COMPROMETERSE (Nişanlanmak): Se comprometieron en París. (Paris'te nişanlandılar)"
        ],
        table: "| Mastar | Yo | Tú | Nosotros | Anlamı |\\n|--------|-----|-----|----------|--------|\\n| Enamorarse | Me enamoro | Te enamoras | Nos enamoramos | Aşık olmak |\\n| Casarse | Me caso | Te casas | Nos casamos | Evlenmek |\\n| Pelearse | Me peleo | Te peleas | Nos peleamos | Kavga etmek |",
        notes: [
            "Nos casamos = karşılıklı eylem (biz evlendik)",
            "Dönüşlü zamirler: me, te, se, nos, os, se",
            "İlişki fiillerinin çoğu dönüşlü"
        ]
    }
];


const unit53Grammar: B1GrammarRule[] = [
    {
        title: "Sıfat Cümlecikleri - Oraciones de Relativo",
        explanation: "Sanat eserlerini, sanatçıları ve kültürel olayları tanımlarken SIFATcümlecikleri (oraciones de relativo) sıkça kullanılır. Bunlar 'QUE', 'QUIEN', 'DONDE' gibi bağlaçlarla başlar ve bir ismi tanımlar veya açıklar.",
        examples: [
            "QUE (en yaygın): El cuadro que pintó Picasso es famoso. (Picasso'nun yaptığı tablo ünlü)",
            "El artista que admiro vive en Madrid. (Hayran olduğum sanatçı Madrid'de yaşıyor)",
            "QUIEN (kişiler için): El pintor a quien conocí era genial. (Tanıştığım ressam harikmiş)",
            "DONDE (yerler için): El museo donde vi la exposición era enorme. (Sergiyi gördüğüm müze çok büyüktü)",
            "La galería donde trabaja está en el centro. (Çalıştığı galeri merkezde)",
            "El libro del cual te hablé es interesante. (Bahsettiğim kitap ilginç)"
        ],
        table: "| Bağlaç | Kullanım | Örnek |\\n|--------|----------|-------|\\n| Que | Genel (kişi/şey) | El cuadro que vi |\\n| Quien | Kişi (a quien) | El artista a quien admiro |\\n| Donde | Yer | El lugar donde nací |\\n| El cual | Resmi | El tema del cual hablamos |",
        notes: [
            "Que = en yaygın bağlaç",
            "Quien = sadece kişiler için",
            "Donde = yerler için",
            "Sıfat cümlesi ismi tanımlar"
        ]
    }
];

const unit54Grammar: B1GrammarRule[] = [
    {
        title: "Subjuntivo ile Görüş Bildirme - Politik Konularda",
        explanation: "Politik konularda görüş bildirirken ÇOK ÖNEMLİ bir ayrım vardır: Olumlu 'Creo que' (kesinlik) sonrası İNDİCATİVO, ama olumsuz 'No creo que' (şüphe) sonrası SUBJUNTİVO kullanılır. Emin olduğunda İndicativo, şüphe duyduğunda Subjuntivo!",
        examples: [
            "OLUMLU (Indicativo): Creo que tienen razón. (Haklı olduklarını düşünüyorum - EMİNİM)",
            "Pienso que el gobierno hace bien. (Hükümetin iyi yaptığını düşünüyorum - EMİNİM)",
            "OLUMSUZ (Subjuntivo): No creo que tengan razón. (Haklı olduklarını düşünmüyorum - ŞÜPHE)",
            "No pienso que sea justo. (Adil olduğunu düşünmüyorum - ŞÜPHE)",
            "Dudo que el gobierno actúe. (Hükümetin harekete geçeceğinden şüpheliyim - ŞÜPHE)",
            "Es posible que cambien la ley. (Yasayı değiştirebilirler - OLASILIK - Subjuntivo)"
        ],
        table: "| İfade | Psikoloji | Sonrası | Örnek |\\n|-------|-----------|---------|-------|\\n| Creo que | Kesinlik | İndicativo | Creo que **es** verdad |\\n| No creo que | Şüphe | Subjuntivo | No creo que **sea** verdad |\\n| Dudo que | Şüphe | Subjuntivo | Dudo que **vengan** |\\n| Es posible que | Olasılık | Subjuntivo | Es posible que **llueva** |",
        notes: [
            "Creo que + İndicativo (emin)",
            "No creo que + Subjuntivo (şüphe)",
            "Dudo que + Subjuntivo (her zaman)",
            "Bu kural çok önemli!"
        ],
        exceptions: [
            "İSTİSNA: 'Creo que', olumlu ise İndicativo, olumsuz ise Subjuntivo",
            "Pensar, Opinar gibi fiiller de aynı kurala uyar"
        ]
    }
];

const unit55Grammar: B1GrammarRule[] = [
    {
        title: "Dolaylı Anlatım - Estilo Indirecto (Detaylı)",
        explanation: "Dolaylı anlatım, başkasının söylediklerini aktarmaktır. ZAMAN UYUMU (concordancia temporal) çok önemlidir: Ana cümle geçmişteyse, yan cümledeki zaman da GERIYE KAYAR. Bu İspanyolca'nın en kuralcı konularından biridir.",
        examples: [
            "DOĞRUDAN: 'Estoy enfermo.' → DOLAYLI: Dijo que estaba enfermo. (Hasta olduğunu söyledi - Presente → Imperfecto)",
            "DOĞRUDAN: 'He comido.' → DOLAYLI: Dijo que había comido. (Yediğini söyledi - Perfecto → Pluscuamperfecto)",
            "DOĞRUDAN: 'Iré mañana.' → DOLAYLI: Dijo que iría mañana. (Yarın gideceğini söyledi - Futuro → Condicional)",
            "DOĞRUDAN: '¡Ven!' → DOLAYLI: Me dijo que viniera. (Gelmemi söyledi - Imperativo → Subjuntivo)",
            "SORU: '¿Estás bien?' → DOLAYLI: Me preguntó si estaba bien. (İyi olup olmadığımı sordu)"
        ],
        table: "| Doğrudan Zaman | Dolaylı Zaman | Örnek |\\n|----------------|---------------|-------|\\n| Presente | Imperfecto | 'Estoy' → Dijo que **estaba** |\\n| Pretérito Perfecto | Pluscuamperfecto | 'He ido' → Dijo que **había ido** |\\n| Futuro | Condicional | 'Iré' → Dijo que **iría** |\\n| Imperativo | Imperfecto Subjuntivo | '¡Ven!' → Dijo que **viniera** |",
        notes: [
            "Ana cümle geçmişte = zaman kayması",
            "Dijo que... = ... dedi ki",
            "Preguntó si... = ... olup olmadığını sordu",
            "Zaman uyumu kuralı katı"
        ],
        exceptions: [
            "Eğer söylenen hâlâ geçerliyse, zaman kaymayabilir: 'Madrid es bonita' → Dijo que Madrid es bonita"
        ]
    }
];

const unit56Grammar: B1GrammarRule[] = [
    {
        title: "Pretérito Pluscuamperfecto - Geçmişin Geçmişi",
        explanation: "Pluscuamperfecto, geçmişte başka bir olaydan ÖNCE tamamlanmış eylemleri anlatır. 'Había + participio' yapısıyla oluşturulur. Türkçe'deki '-mıştı, -miş, -muştu' anlamındadır. İki geçmiş olay varsa, daha ÖNCEK için Pluscuamperfecto kullanılır.",
        examples: [
            "Cuando llegué (Indefinido), ya había terminado (Pluscuamperfecto). (Geldiğimde çoktan bitmişti - ÖNCE bitti, SONRA geldim)",
            "Nunca había visto algo así. (Böyle bir şey hiç görmemiştim - hayatımda o ana kadar)",
            "Ya había comido cuando me llamaste. (Beni aradığında çoktan yemek yemiştim)",
            "Antes de venir a España, había estudiado español. (İspanya'ya gelmeden önce İspanyolca çalışmıştım)",
            "Era la primera vez que lo había hecho. (Bunu ilk kez yapmıştım)"
        ],
        table: "| Kişi | Había | Participio | Tam Form |\\n|------|-------|------------|----------|\\n| Yo | Había | comido | Había comido |\\n| Tú | Habías | llegado | Habías llegado |\\n| Él | Había | terminado | Había terminado |\\n| Nosotros | Habíamos | visto | Habíamos visto |\\n| Vosotros | Habíais | dicho | Habíais dicho |\\n| Ellos | Habían | hecho | Habían hecho |",
        notes: [
            "Había + participio = ...mıştı",
            "Geçmişin geçmişi için",
            "Cuando + Indefinido, ya + Pluscuamperfecto (yaygı yapı)",
            "Nunca había... = hiç ...mamıştım"
        ]
    }
];

const unit57Grammar: B1GrammarRule[] = [
    {
        title: "Por vs Para - İspanyolca'nın En Kafa Karıştırıcı Konusu!",
        explanation: "Por ve Para İKİSİ DE 'için' anlamına gelebilir ama kullanımları TAMAMEN farklıdır. POR = SEBEP/NEDEN/TAKIM (why? because of), PARA = AMAÇ/HEDEF/ALICI (what for? destination). Bu farkı anlamak B1'in en önemli konularından biridir!",
        examples: [
            "POR (Sebep): Gracias por tu ayuda. (Yardımın için teşekkürler - SEBEP)",
            "POR (Sebep): Lo hice por amor. (Aşk yüzünden yaptım - SEBEP)",
            "POR (Zaman dilimi): Por la mañana estudio. (Sabahleyin çalışırım - ZAMAN DİLİMİ)",
            "POR (Takas): Pagué 10€ por el libro. (Kitaba 10€ ödedim - TAKIM)",
            "PARA (Amaç): Estudio para aprender. (Öğrenmek için çalışıyorum - AMAÇ)",
            "PARA (Alıcı): Este regalo es para ti. (Bu hediye senin için - ALICI)",
            "PARA (Son tarih): Es para mañana. (Yarın için - SON TARİH)",
            "PARA (Yön): Voy para Madrid. (Madrid'e gidiyorum - YÖN)"
        ],
        table: "| POR (Sebep/Neden) | PARA (Amaç/Hedef) |\\n|-------------------|-------------------|\\n| Gracias **por** (Sebep için teşekkür) | Esto es **para** ti (Alıcı) |\\n| **Por** la mañana (Zaman dilimi) | **Para** mañana (Son tarih) |\\n| **Por** amor (Sebep) | **Para** viajar ahorro (Amaç) |\\n| 10€ **por** (Takas) | Libro **para** estudiar (Amaç) |",
        notes: [
            "POR = Sebep, neden, takas ('because of')",
            "PARA = Amaç, hedef, alıcı ('in order to')",
            "Bu en zor konulardan biri!",
            "Ezber gerektiren ifadeler var"
        ],
        exceptions: [
            "Sabit ifadeler: Por favor (Lütfen), Por supuesto (Tabii ki), Para siempre (Sonsuza dek), Para nada (Hiç)",
            "Por la mañana (sabahleyin - zaman dilimi) ≠ Para mañana (yarın için - son tarih)"
        ]
    }
];

const unit58Grammar: B1GrammarRule[] = [
    {
        title: "Deyimler ve Atasözleri - Modismos y Refranes",
        explanation: "Deyimler (modismos), kelimelerin tek tek anlamlarından farklı MECAZİ anlamlar taşır. İspanyol kültürünün bir parçasıdır ve günlük konuşmada çok kullanılır. Bunları EZBERLEMEK gerekir çünkü mantıkla çıkarılamazlar.",
        examples: [
            "Costar un ojo de la cara: Çok pahalıya mal olmak (kelime kelime: Bir göze mal olmak)",
            "Meter la pata: Pot kırmak, hata yapmak (kelime kelime: Ayağı sokmak)",
            "Echar una mano: Yardım etmek (kelime kelime: Bir el atmak)",
            "Estar en las nubes: Dalgın olmak (kelime kelime: Bulutlarda olmak)",
            "Tirar la casa por la ventana: Parayı su gibi harcamak (kelime kelime: Evi pencereden atmak)",
            "No tener pelos en la lengua: Lafı eğip bükmemek (kelime kelime: Dilde kıl olmamak)",
            "ATASÖZÜ: Más vale tarde que nunca. (Geç olsun güç olmasın)",
            "ATASÖZÜ: A quien madruga, Dios le ayuda. (Erken kalkan yolalır)"
        ],
        notes: [
            "Deyimler mecazi anlam taşır",
            "Kültürel bilgi gerektirir",
            "Günlük konuşmada çok yaygın",
            "Ezberlemek gerekir"
        ]
    }
];

const unit59Grammar: B1GrammarRule[] = [
    {
        title: "Resmi Dil ve Usted Kullanımı - İş Dünyası",
        explanation: "İş dünyasında ve resmi durumlarda USTED/USTEDES (siz/sizler) kullanılır. Bu, 3. kişi fiil çekimi gerektirir. Kibar ricalar için koşullu kip (Podría usted...) tercih edilir. E-posta ve mektuplarda özel kalıplar vardır.",
        examples: [
            "USTED: ¿Podría usted enviarme el informe? (Raporu gönderebilir misiniz? - Kibar rica)",
            "Le agradecería que me informara. (Beni bilgilendirirseniz minnettar olurum)",
            "Permítame presentarle a... (Size ... tanıtmama izin verin)",
            "¿Tiene usted alguna pregunta? (Bir sorunuz var mı?)",
            "E-POSTA AÇILIŞI: Estimado/a Sr./Sra. + Soyadı (Sayın Bay/Bayan)",
            "E-POSTA AMACI: Le escribo en relación con... (... ile ilgili yazıyorum)",
            "E-POSTA KAPANIŞ: Atentamente / Cordialmente (Saygılarımla)"
        ],
        table: "| Durum | İfade | Türkçe |\\n|-------|-------|--------|\\n| Kibar rica | ¿Podría usted...? | ...ebilir misiniz? |\\n| Teşekkür | Le agradezco | Teşekkür ederim |\\n| İstek | Agradeceríamos que... | ...yaparsanız minnettar oluruz |\\n| Sunum | Permítame presentar | Sunmama izin verin |",
        notes: [
            "Usted = resmi, 3. kişi çekimi",
            "Podría/Querría = koşullu kip, çok kibar",
            "E-posta kalıpları ezber gerektirir"
        ]
    }
];

const unit60Grammar: B1GrammarRule[] = [
    {
        title: "B1 Seviyesi Gramer Özeti ve Tebrikler! 🎉",
        explanation: "B1 seviyesini TAMAMLADIN! Artık orta seviye İspanyolca konuşabilirsin. Bu ünitede öğrendiğin tüm ana gramer konularını gözden geçirelim. Bunlar İspanyolca'nın EN ÖNEMLİ konularıdır.",
        examples: [
            "✅ Futuro Simple: Mañana iré (Yarın gideceğim)",
            "✅ Condicional: Me gustaría (İsterdim)",
            "✅ Imperativo: ¡Ven! / ¡No vengas! (Gel! / Gelme!)",
            "✅ Subjuntivo: Espero que vengas (Gelmeni umuyorum)",
            "✅ Pluscuamperfecto: Había comido (Yemiştim)",
            "✅ Estilo Indirecto: Dijo que vendría (Geleceğini söyledi)",
            "✅ Por vs Para: Por amor / Para ti (Aşk için / Senin için)",
            "✅ Pasif: Fue publicado (Yayınlandı)"
        ],
        table: "| Konu | Kullanım | Örnek |\\n|------|----------|-------|\\n| Futuro | Gelecek, tahmin | Iré (Gideceğim) |\\n| Condicional | Hayaller, kibar rica | Querría (İsterdim) |\\n| Subjuntivo | Şüphe, istek | Espero que vengas |\\n| Imperativo | Emir | ¡Habla! / ¡No hables! |\\n| Pluscuamperfecto | Geçmişin geçmişi | Había visto |",
        notes: [
            "🎓 B1'i tamamladın!",
            "💪 Artık günlük konuşmalar yapabilirsin",
            "📚 B2'ye hazırsın",
            "🗣️ Konuşma pratiği yapmaya başla",
            "🎬 İspanyolca film/dizi izle",
            "📖 Basit kitaplar okuyabilirsin"
        ]
    }
];

// ===== YENİ B1 ÜNİTELERİ (71-75) =====

// ===== ÜNİTE 71: İLERİ YAZMA =====
const unit71Grammar: B1GrammarRule[] = [
    {
        title: "Akademik Yazma Yapıları",
        explanation: "Resmi yazılarda kullanılan bağlaçlar ve geçiş ifadeleri çok önemlidir. Bir metin yazmak için giriş, gelişme ve sonuç bölümlerinde kullanılacak spesifik ifadeler vardır.",
        examples: [
            "GİRİŞ: En primer lugar... (İlk olarak...)",
            "GİRİŞ: Para empezar... (Başlamak için...)",
            "GELİŞME: Además... (Ayrıca...)",
            "GELİŞME: Por otro lado... (Öte yandan...)",
            "GELİŞME: Sin embargo... (Ancak...)",
            "SONUÇ: En conclusión... (Sonuç olarak...)",
            "SONUÇ: Para terminar... (Bitirmek için...)"
        ],
        notes: [
            "Resmi yazıda kısa cümleler tercih edilir",
            "Bağlaçlar paragraflar arasında geçiş sağlar",
            "Giriş-gelişme-sonuç yapısı her kompozisyonda olmalı"
        ]
    }
];

// ===== ÜNİTE 72: DİNLEME BECERİLERİ =====
const unit72Grammar: B1GrammarRule[] = [
    {
        title: "Dinleme Stratejileri ve Kısaltmalar",
        explanation: "Anadili konuşanlarda yaygın olan bağlantı sesleri ve kısaltmalar dinlemeyi zorlaştırabilir. Bunları tanımak dinleme becerinizi geliştirir.",
        examples: [
            "BİRLEŞME: 'para el' → 'pa'l' (için)",
            "BİRLEŞME: 'para arriba' → 'pa'rriba' (yukarı için)",
            "DOLGU: 'o sea' = yani, şey",
            "DOLGU: 'pues' = işte, şey",
            "DOLGU: 'bueno' = şey, iyi",
            "VURGU: ¿Cómo? = Ne dediniz?",
            "VURGU: ¿Perdona? = Affedersiniz?"
        ],
        notes: [
            "Konuşma dili yazı dilinden farklı",
            "Dolgu kelimeleri düşünme zamanı verir",
            "Anlamadığında sormaktan çekinme"
        ]
    }
];

// ===== ÜNİTE 73: İSPANYOL COĞRAFYASI =====
const unit73Grammar: B1GrammarRule[] = [
    {
        title: "Karşılaştırma ve Üstünlük Yapıları",
        explanation: "Coğrafi özellikleri karşılaştırırken karşılaştırma yapıları sıkça kullanılır. Üstünlük dereceleri (superlativo) ile en büyük, en küçük gibi ifadeler yapılır.",
        examples: [
            "KARŞILAŞTIRMA: El Ebro es más largo que el Tajo. (Ebro, Tajo'dan daha uzun)",
            "KARŞILAŞTIRMA: El sur es más cálido que el norte. (Güney kuzeyden daha sıcak)",
            "ÜSTÜNLÜK: El Teide es el volcán más alto de España. (Teide İspanya'nın en yüksek volkani)",
            "ÜSTÜNLÜK: Madrid es la ciudad más grande. (Madrid en büyük şehir)",
            "MUTLAK: Es un río larguísimo. (Çok uzun bir nehir - mutlak üstünlük)"
        ],
        table: "| Yapı | Kullanım | Örnek |\\n|------|----------|-------|\\n| Más...que | Normal karşılaştırma | Más grande que |\\n| El más + sıfat | Üstünlük | El más alto |\\n| -ísimo/a | Mutlak üstünlük | Grandísimo |",
        notes: [
            "El/La más + sıfat = en ...",
            "-ísimo eki mutlak üstünlük verir",
            "Grande → Grandísimo (çok büyük)"
        ]
    }
];

// ===== ÜNİTE 74: LATİN AMERİKA =====
const unit74Grammar: B1GrammarRule[] = [
    {
        title: "Latin Amerika İspanyolcası Farkları",
        explanation: "Latin Amerika İspanyolcası İspanya İspanyolcasından bazı farklılıklar gösterir. En önemli fark 'vosotros' yerine 'ustedes' kullanılmasıdır. Ayrıca bazı kelimelerin farklı anlamları veya başka kelimeler kullanılması da yaygındır.",
        examples: [
            "VOSOTROS vs USTEDES: İspanya: ¿Vosotros venís? → L.A.: ¿Ustedes vienen? (Siz geliyor musunuz?)",
            "VOS (Arjantin): Vos tenés → Tú tienes (Sen sahipsin)",
            "VOS (Arjantin): ¿Cómo te llamás? → ¿Cómo te llamas? (Adın ne?)",
            "KELİME FARKI: Carro (L.A.) = Coche (İspanya) = Araba",
            "KELİME FARKI: Computadora (L.A.) = Ordenador (İspanya) = Bilgisayar",
            "KELİME FARKI: Celular (L.A.) = Móvil (İspanya) = Cep telefonu"
        ],
        table: "| İspanya | Latin Amerika | Türkçe |\\n|---------|---------------|--------|\\n| Vosotros | Ustedes | Siz |\\n| Coche | Carro | Araba |\\n| Ordenador | Computadora | Bilgisayar |\\n| Móvil | Celular | Telefon |",
        notes: [
            "Ustedes hem resmi hem samimi ortamlarda kullanılır (L.A.)",
            "VOS sadece bazı ülkelerde (Arjantin, Uruguay)",
            "Anlam herkes için anlaşılır, sadece kelime farklı"
        ]
    }
];

// ===== ÜNİTE 75: B1 FİNAL TEKRAR =====
const unit75Grammar: B1GrammarRule[] = [
    {
        title: "B1'den B2'ye Geçiş - Artık Bağımsız Konuşucu!",
        explanation: "B1 seviyesini tamamladın! Artık günlük durumları yönetebilen, fikir ifade edebilen ve temel gramer yapılarını kullanan bağımsız bir konuşucusun. B2'ye hazırsın!",
        examples: [
            "✅ Gelecek zaman (Futuro) ve tahminler yapabilirsin",
            "✅ Emir kipi (Imperativo) ile talimat verebilirsin",
            "✅ Subjuntivo ile istek, şüphe ifade edebilirsin",
            "✅ Koşullu kip ile hayaller kurabilirsin",
            "✅ Dolaylı anlatım ile başkalarının söylediklerini aktarabilirsin",
            "✅ Por/Para farklını kavradın",
            "✅ Pasif yapıyı anlıyorsun"
        ],
        notes: [
            "🎓 B1 = Bağımsız kullanıcı",
            "🌍 İspanyolca konuşulan ülkelerde seyahat edebilirsin",
            "📺 Alt yazılı film/dizi izleyebilirsin",
            "📚 Basit romanlar okuyabilirsin",
            "🗣️ Günlük konuşmalara katılabilirsin",
            "🚀 B2'de ileri gramer ve akıcılık bekliyor!"
        ]
    }
];

// B1 gramer getirme fonksiyonu (ID: 51-75)
export function getB1GrammarForUnit(unitId: number): B1GrammarRule[] {
    // Eski unit değişkenlerini yeni ID'lere eşle
    const idMapping: { [key: number]: B1GrammarRule[] } = {
        51: unit41Grammar, 52: unit42Grammar, 53: unit43Grammar, 54: unit44Grammar, 55: unit45Grammar,
        56: unit46Grammar, 57: unit47Grammar, 58: unit48Grammar, 59: unit49Grammar, 60: unit50Grammar,
        61: unit51Grammar, 62: unit52Grammar, 63: unit53Grammar, 64: unit54Grammar, 65: unit55Grammar,
        66: unit56Grammar, 67: unit57Grammar, 68: unit58Grammar, 69: unit59Grammar, 70: unit60Grammar,
        71: unit71Grammar, 72: unit72Grammar, 73: unit73Grammar, 74: unit74Grammar, 75: unit75Grammar
    };
    return idMapping[unitId] || unit41Grammar;
}

