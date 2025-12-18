/**
 * LinguaFlow Okuma Veritabanı - İspanyolca A2
 * Ünite 21-40 için okuma içerikleri
 */

import { UnitReading } from './readings';

// ===== ÜNİTE 21: GEÇMİŞ ZAMAN 1 =====
const unit21Reading: UnitReading = {
    unitId: 21, title: "Dünkü Gün", language: "İspanyolca", level: "A2",
    story: {
        text: "Ayer fue un día muy especial para mí. Me desperté temprano y desayuné con mi familia. Mi madre preparó tostadas y café. Después fui al trabajo en autobús porque mi coche estaba en el taller. Trabajé mucho durante todo el día. A las dos almorcé con mis compañeros en un restaurante cerca de la oficina. Por la tarde tuve una reunión importante con mi jefe. Salí del trabajo a las seis y fui directamente al gimnasio. Hice ejercicio durante una hora. Cuando llegué a casa, mi esposa ya había preparado la cena. Cenamos juntos y vimos una película. Me acosté a las once, muy cansado pero feliz.",
        translation: "Dün benim için çok özel bir gündü. Erken uyandım ve ailemle kahvaltı ettim. Annem tost ve kahve hazırladı. Sonra otobüsle işe gittim çünkü arabam tamircideydi. Bütün gün çok çalıştım. İkide ofise yakın bir restoranda meslektaşlarımla öğle yemeği yedim. Öğleden sonra patronumla önemli bir toplantım vardı. Altıda işten çıktım ve doğrudan spor salonuna gittim. Bir saat egzersiz yaptım. Eve geldiğimde, eşim çoktan akşam yemeğini hazırlamıştı. Birlikte yemek yedik ve bir film izledik. Çok yorgun ama mutlu bir şekilde on birde yattım."
    },
    vocabulary: [
        { word: "Despertar", meaning: "Uyanmak" },
        { word: "Almorzar", meaning: "Öğle yemeği yemek" },
        { word: "Reunión", meaning: "Toplantı" }
    ],
    questions: [
        { id: 1, question: "Neden otobüsle işe gitti?", options: ["Araba bozuktu", "Yakın", "Para yok"], correctAnswer: "Araba bozuktu" },
        { id: 2, question: "Öğle yemeği nerede yedi?", options: ["Evde", "Ofiste", "Restoranda"], correctAnswer: "Restoranda" },
        { id: 3, question: "Spor salonunda kaç saat kaldı?", options: ["30 dk", "1 saat", "2 saat"], correctAnswer: "1 saat" },
        { id: 4, question: "Akşam yemeğini kim hazırladı?", options: ["Kendisi", "Eşi", "Annesi"], correctAnswer: "Eşi" },
        { id: 5, question: "Saat kaçta yattı?", options: ["10", "11", "12"], correctAnswer: "11" }
    ]
};

// ===== ÜNİTE 22: GEÇMİŞ ZAMAN 2 =====
const unit22Reading: UnitReading = {
    unitId: 22, title: "Çocukluk Anıları", language: "İspanyolca", level: "A2",
    story: {
        text: "Cuando era niño, vivía en un pueblo pequeño cerca de la montaña. Todos los días iba a la escuela caminando con mis amigos. Mi abuela siempre nos esperaba con galletas cuando volvíamos. Los fines de semana jugábamos en el río y pescábamos peces pequeños. Mi padre trabajaba en una fábrica y mi madre era ama de casa. Teníamos un perro que se llamaba Toby y un gato negro. En verano, íbamos a la playa con toda la familia. Eran tiempos muy felices. No teníamos mucho dinero, pero nunca nos faltaba amor.",
        translation: "Çocukken dağa yakın küçük bir kasabada yaşıyordum. Her gün arkadaşlarımla yürüyerek okula gidiyordum. Döndüğümüzde büyükannem bizi her zaman kurabiyelerle bekliyordu. Hafta sonları nehirde oynuyor ve küçük balıklar tutuyorduk. Babam bir fabrikada çalışıyordu ve annem ev hanımıydı. Toby adında bir köpeğimiz ve siyah bir kedimiz vardı. Yazın tüm aileyle plaja gidiyorduk. Çok mutlu zamanlardı. Çok paramız yoktu ama hiç sevgi eksik olmadı."
    },
    vocabulary: [
        { word: "Pueblo", meaning: "Kasaba" },
        { word: "Abuela", meaning: "Büyükanne" },
        { word: "Pescábamos", meaning: "Balık tutuyorduk" }
    ],
    questions: [
        { id: 1, question: "Kasaba nereye yakındı?", options: ["Deniz", "Dağ", "Şehir"], correctAnswer: "Dağ" },
        { id: 2, question: "Büyükanne ne yapıyordu?", options: ["Kurabiye hazırlıyordu", "Ders çalıştırıyordu", "Temizlik yapıyordu"], correctAnswer: "Kurabiye hazırlıyordu" },
        { id: 3, question: "Köpeğin adı neydi?", options: ["Max", "Toby", "Rex"], correctAnswer: "Toby" },
        { id: 4, question: "Yazın nereye gidiyorlardı?", options: ["Dağa", "Köye", "Plaja"], correctAnswer: "Plaja" },
        { id: 5, question: "Ailenin durumu nasıldı?", options: ["Çok zengin", "Orta halli", "Fakir ama mutlu"], correctAnswer: "Fakir ama mutlu" }
    ]
};

// ===== ÜNİTE 23: RESTORANDA =====
const unit23Reading: UnitReading = {
    unitId: 23, title: "Özel Akşam Yemeği", language: "İspanyolca", level: "A2",
    story: {
        text: "Anoche fuimos a un restaurante italiano para celebrar nuestro aniversario. Llegamos a las ocho y el camarero nos llevó a una mesa junto a la ventana. Primero pedimos una botella de vino tinto y unas aceitunas. De primer plato, mi esposa pidió una ensalada y yo pedí sopa de tomate. De segundo plato, ella eligió pasta con mariscos y yo pedí un filete con patatas. Estaba todo delicioso. Para el postre, compartimos un tiramisú. El camarero fue muy amable todo el tiempo. La cuenta fue de ochenta euros, pero valió la pena. Dejamos una propina de diez euros.",
        translation: "Dün gece yıl dönümümüzü kutlamak için bir İtalyan restoranına gittik. Sekizde vardık ve garson bizi pencere kenarında bir masaya götürdü. Önce bir şişe kırmızı şarap ve biraz zeytin sipariş ettik. İlk yemek olarak eşim salata, ben de domates çorbası istedim. İkinci yemek olarak o deniz mahsullü makarna seçti, ben de patatesli biftek aldım. Her şey çok lezzetliydi. Tatlı için bir tiramisu paylaştık. Garson her zaman çok nazikti. Hesap seksen euro tuttu ama değerdi. On euro bahşiş bıraktık."
    },
    vocabulary: [
        { word: "Camarero", meaning: "Garson" },
        { word: "Primer plato", meaning: "İlk yemek" },
        { word: "Propina", meaning: "Bahşiş" }
    ],
    questions: [
        { id: 1, question: "Ne kutluyorlardı?", options: ["Doğum günü", "Yıl dönümü", "Terfi"], correctAnswer: "Yıl dönümü" },
        { id: 2, question: "İlk ne sipariş ettiler?", options: ["Yemek", "Şarap ve zeytin", "Tatlı"], correctAnswer: "Şarap ve zeytin" },
        { id: 3, question: "Kadın ne yedi?", options: ["Biftek", "Makarna", "Balık"], correctAnswer: "Makarna" },
        { id: 4, question: "Hesap kaç euro?", options: ["60", "80", "100"], correctAnswer: "80" },
        { id: 5, question: "Kaç euro bahşiş bıraktılar?", options: ["5", "10", "15"], correctAnswer: "10" }
    ]
};

// ===== ÜNİTE 24: ALIŞVERİŞ =====
const unit24Reading: UnitReading = {
    unitId: 24, title: "Alışveriş Merkezi", language: "İspanyolca", level: "A2",
    story: {
        text: "El sábado pasado fui de compras al centro comercial con mi hermana. Primero entramos en una tienda de ropa porque necesitaba unos pantalones nuevos. Encontré unos pantalones negros muy bonitos que costaban cincuenta euros. Los probé y me quedaban perfectos. Mi hermana compró una blusa azul y un vestido rojo. Después fuimos a una zapatería donde compré unas zapatillas deportivas por setenta euros. Almorzamos en la cafetería del centro comercial: hamburguesas y refrescos. Por la tarde, entramos en una librería y compré dos novelas. Gastamos mucho dinero pero fue un día muy divertido.",
        translation: "Geçen cumartesi kız kardeşimle alışveriş merkezine alışverişe gittim. Önce yeni pantolon lazım olduğu için bir giyim mağazasına girdik. Elli euro olan çok güzel siyah bir pantolon buldum. Denedim ve tam oldu. Kardeşim mavi bir bluz ve kırmızı bir elbise aldı. Sonra bir ayakkabıcıya gittik ve yetmiş euroya spor ayakkabı aldım. Alışveriş merkezinin kafeteryasında öğle yemeği yedik: hamburger ve meşrubat. Öğleden sonra bir kitapçıya girdik ve iki roman aldım. Çok para harcadık ama çok eğlenceli bir gündü."
    },
    vocabulary: [
        { word: "Probarse", meaning: "Denemek" },
        { word: "Vestido", meaning: "Elbise" },
        { word: "Zapatillas", meaning: "Spor ayakkabı" }
    ],
    questions: [
        { id: 1, question: "Pantolon kaç euro?", options: ["40", "50", "60"], correctAnswer: "50" },
        { id: 2, question: "Kardeşi ne aldı?", options: ["Pantolon", "Bluz ve elbise", "Ayakkabı"], correctAnswer: "Bluz ve elbise" },
        { id: 3, question: "Spor ayakkabı kaç euro?", options: ["60", "70", "80"], correctAnswer: "70" },
        { id: 4, question: "Öğle yemeği nerede yediler?", options: ["Restoran", "Kafeterya", "Dışarıda"], correctAnswer: "Kafeterya" },
        { id: 5, question: "Kitapçıdan kaç kitap aldı?", options: ["1", "2", "3"], correctAnswer: "2" }
    ]
};

// ===== ÜNİTE 25: SEYAHAT PLANLARI =====
const unit25Reading: UnitReading = {
    unitId: 25, title: "Barcelona Gezisi", language: "İspanyolca", level: "A2",
    story: {
        text: "El próximo mes voy a viajar a Barcelona con mi familia. Ya hemos reservado los billetes de avión y el hotel. Vamos a estar cinco días. El primer día queremos visitar la Sagrada Familia y pasear por las Ramblas. El segundo día iremos al parque Güell y veremos las obras de Gaudí. El tercer día lo dedicaremos a la playa porque mis hijos quieren nadar. El cuarto día visitaremos el Camp Nou, el estadio del Barcelona. El último día haremos compras y volveremos a casa por la noche. Estamos muy emocionados porque nunca hemos estado en Barcelona.",
        translation: "Gelecek ay ailemle Barcelona'ya seyahat edeceğim. Uçak biletlerini ve oteli zaten rezerve ettik. Beş gün kalacağız. İlk gün Sagrada Familia'yı ziyaret etmek ve Ramblas'ta gezinmek istiyoruz. İkinci gün Güell parkına gideceğiz ve Gaudí'nin eserlerini göreceğiz. Üçüncü günü plaja ayıracağız çünkü çocuklarım yüzmek istiyor. Dördüncü gün Barcelona'nın stadyumu Camp Nou'yu ziyaret edeceğiz. Son gün alışveriş yapacağız ve gece eve döneceğiz. Çok heyecanlıyız çünkü daha önce hiç Barcelona'da bulunmadık."
    },
    vocabulary: [
        { word: "Reservar", meaning: "Rezerve etmek" },
        { word: "Pasear", meaning: "Gezinmek" },
        { word: "Emocionados", meaning: "Heyecanlı" }
    ],
    questions: [
        { id: 1, question: "Kaç gün kalacaklar?", options: ["3", "5", "7"], correctAnswer: "5" },
        { id: 2, question: "İlk gün ne yapacaklar?", options: ["Plaj", "Sagrada Familia", "Alışveriş"], correctAnswer: "Sagrada Familia" },
        { id: 3, question: "Neden plaja gidecekler?", options: ["Güneş", "Çocuklar yüzmek istiyor", "Yakın"], correctAnswer: "Çocuklar yüzmek istiyor" },
        { id: 4, question: "Camp Nou ne?", options: ["Müze", "Park", "Stadyum"], correctAnswer: "Stadyum" },
        { id: 5, question: "Daha önce Barcelona'ya gitmişler mi?", options: ["Evet", "Hayır", "Belirtilmemiş"], correctAnswer: "Hayır" }
    ]
};

// ===== ÜNİTE 26: OTEL REZERVASYONU =====
const unit26Reading: UnitReading = {
    unitId: 26, title: "Otel Deneyimi", language: "İspanyolca", level: "A2",
    story: {
        text: "La semana pasada me alojé en un hotel de cuatro estrellas en Madrid. Cuando llegué, el recepcionista fue muy amable y me dio la llave de mi habitación. Era una habitación doble con vistas a la ciudad. Tenía una cama grande, televisión, minibar y baño privado. El wifi era gratuito. Por la mañana, bajé al restaurante para el desayuno buffet. Había de todo: pan, frutas, huevos, café y zumo de naranja. El último día pedí servicio de habitaciones porque estaba cansado. El día de salida, hice el check-out a las doce y dejé las maletas en recepción hasta que vino el taxi.",
        translation: "Geçen hafta Madrid'de dört yıldızlı bir otelde kaldım. Vardığımda resepsiyonist çok nazikti ve odamın anahtarını verdi. Şehir manzaralı çift kişilik bir odaydı. Büyük bir yatak, televizyon, minibar ve özel banyo vardı. Wifi ücretsizdi. Sabahları kahvaltı büfesi için restorana indim. Her şey vardı: ekmek, meyve, yumurta, kahve ve portakal suyu. Son gün yorgun olduğum için oda servisi istedim. Çıkış günü on ikide check-out yaptım ve taksi gelene kadar valizleri resepsiyonda bıraktım."
    },
    vocabulary: [
        { word: "Alojarse", meaning: "Kalmak" },
        { word: "Recepcionista", meaning: "Resepsiyonist" },
        { word: "Check-out", meaning: "Çıkış" }
    ],
    questions: [
        { id: 1, question: "Otel kaç yıldızlı?", options: ["3", "4", "5"], correctAnswer: "4" },
        { id: 2, question: "Oda neye bakıyordu?", options: ["Bahçe", "Şehir", "Deniz"], correctAnswer: "Şehir" },
        { id: 3, question: "Wifi ücretli miydi?", options: ["Evet", "Hayır", "Belirtilmemiş"], correctAnswer: "Hayır" },
        { id: 4, question: "Neden oda servisi istedi?", options: ["Hasta", "Yorgun", "Meşgul"], correctAnswer: "Yorgun" },
        { id: 5, question: "Check-out saat kaçtaydı?", options: ["10", "11", "12"], correctAnswer: "12" }
    ]
};

// ===== ÜNİTE 27: HAVALİMANINDA =====
const unit27Reading: UnitReading = {
    unitId: 27, title: "Uçuş Macerası", language: "İspanyolca", level: "A2",
    story: {
        text: "El viernes pasado tuve que viajar a Londres por trabajo. Llegué al aeropuerto tres horas antes del vuelo. Primero fui al mostrador de facturación y documenté mi maleta. Después pasé por el control de seguridad: tuve que quitar el cinturón y los zapatos. Mi puerta de embarque era la B22 y la sala de espera estaba muy llena. El vuelo se retrasó treinta minutos por mal tiempo. Durante el vuelo, la azafata nos sirvió bebidas y un sándwich. Aterrizamos en Heathrow a las tres de la tarde. Recogí mi equipaje y tomé un taxi al hotel.",
        translation: "Geçen cuma iş için Londra'ya seyahat etmem gerekti. Uçuştan üç saat önce havaalanına vardım. Önce check-in kontuarına gittim ve valizimi teslim ettim. Sonra güvenlik kontrolünden geçtim: kemeri ve ayakkabıları çıkarmam gerekti. Biniş kapım B22'ydi ve bekleme salonu çok kalabalıktı. Kötü hava nedeniyle uçuş otuz dakika gecikti. Uçuş sırasında hostes bize içecek ve sandviç servis etti. Öğleden sonra üçte Heathrow'a indik. Bagajımı aldım ve otele taksi tuttum."
    },
    vocabulary: [
        { word: "Facturación", meaning: "Check-in" },
        { word: "Puerta de embarque", meaning: "Biniş kapısı" },
        { word: "Aterrizar", meaning: "İnmek" }
    ],
    questions: [
        { id: 1, question: "Neden seyahat ediyordu?", options: ["Tatil", "İş", "Aile ziyareti"], correctAnswer: "İş" },
        { id: 2, question: "Kaç saat önce geldi?", options: ["2", "3", "4"], correctAnswer: "3" },
        { id: 3, question: "Uçuş ne kadar gecikti?", options: ["15 dk", "30 dk", "1 saat"], correctAnswer: "30 dk" },
        { id: 4, question: "Gecikme nedeni neydi?", options: ["Teknik arıza", "Kötü hava", "Yolcu gecikmesi"], correctAnswer: "Kötü hava" },
        { id: 5, question: "Uçak saat kaçta indi?", options: ["14:00", "15:00", "16:00"], correctAnswer: "15:00" }
    ]
};

// ===== ÜNİTE 28: DOKTORDA =====
const unit28Reading: UnitReading = {
    unitId: 28, title: "Doktor Randevusu", language: "İspanyolca", level: "A2",
    story: {
        text: "Esta semana tuve que ir al médico porque no me sentía bien. Tenía fiebre, dolor de cabeza y tos desde hacía tres días. En la sala de espera había muchas personas. Cuando me llamaron, el médico me examinó los ojos, los oídos y la garganta. Me tomó la temperatura: tenía 38 grados. El doctor me dijo que tenía gripe y que debía descansar mucho. Me recetó antibióticos, jarabe para la tos y pastillas para el dolor. También me recomendó beber mucho líquido y no ir al trabajo durante una semana. Fui a la farmacia a comprar los medicamentos y volví a casa a descansar.",
        translation: "Bu hafta iyi hissetmediğim için doktora gitmem gerekti. Üç gündür ateşim, baş ağrım ve öksürüğüm vardı. Bekleme salonunda çok kişi vardı. Beni çağırdıklarında doktor gözlerimi, kulaklarımı ve boğazımı muayene etti. Ateşimi ölçtü: 38 dereceydi. Doktor grip olduğumu ve çok dinlenmem gerektiğini söyledi. Antibiyotik, öksürük şurubu ve ağrı kesici reçete etti. Ayrıca çok sıvı içmemi ve bir hafta işe gitmememi tavsiye etti. İlaçları almak için eczaneye gittim ve dinlenmek için eve döndüm."
    },
    vocabulary: [
        { word: "Fiebre", meaning: "Ateş" },
        { word: "Recetar", meaning: "Reçete yazmak" },
        { word: "Medicamentos", meaning: "İlaçlar" }
    ],
    questions: [
        { id: 1, question: "Kaç gündür hastayım?", options: ["2", "3", "5"], correctAnswer: "3" },
        { id: 2, question: "Ateşi kaç dereceydi?", options: ["37", "38", "39"], correctAnswer: "38" },
        { id: 3, question: "Hastalık neydi?", options: ["Soğuk algınlığı", "Grip", "Bronşit"], correctAnswer: "Grip" },
        { id: 4, question: "Kaç gün işe gitmemeli?", options: ["3 gün", "5 gün", "1 hafta"], correctAnswer: "1 hafta" },
        { id: 5, question: "İlaçları nereden aldı?", options: ["Hastane", "Eczane", "Market"], correctAnswer: "Eczane" }
    ]
};

// ===== ÜNİTE 29: ECZANEDE =====
const unit29Reading: UnitReading = {
    unitId: 29, title: "Eczane Ziyareti", language: "İspanyolca", level: "A2",
    story: {
        text: "Ayer fui a la farmacia porque necesitaba varios medicamentos. Primero le di la receta del médico al farmacéutico. Él buscó los medicamentos: antibióticos, jarabe y analgésicos. Me explicó cómo tomarlos: los antibióticos cada ocho horas con comida, el jarabe tres veces al día antes de las comidas, y los analgésicos cuando tuviera dolor. También le pregunté si tenían algo para el insomnio y me recomendó unas gotas naturales. Además compré tiritas, alcohol y una crema para las quemaduras del sol. El total fue de cuarenta y cinco euros. Pagué con tarjeta y me dieron el ticket.",
        translation: "Dün eczaneye gittim çünkü çeşitli ilaçlara ihtiyacım vardı. Önce doktorun reçetesini eczacıya verdim. İlaçları aradı: antibiyotik, şurup ve ağrı kesiciler. Nasıl almam gerektiğini açıkladı: antibiyotikler sekiz saatte bir yemekle, şurup günde üç kez yemeklerden önce, ağrı kesiciler ağrım olduğunda. Ayrıca uykusuzluk için bir şeyler olup olmadığını sordum ve doğal damlalar önerdi. Bunun yanı sıra yara bandı, alkol ve güneş yanığı için krem aldım. Toplam kırk beş euro tuttu. Kartla ödedim ve fiş verdiler."
    },
    vocabulary: [
        { word: "Farmacéutico", meaning: "Eczacı" },
        { word: "Analgésicos", meaning: "Ağrı kesiciler" },
        { word: "Insomnio", meaning: "Uykusuzluk" }
    ],
    questions: [
        { id: 1, question: "Antibiyotik ne zaman alınmalı?", options: ["Aç karnına", "Yemekle", "Yatmadan önce"], correctAnswer: "Yemekle" },
        { id: 2, question: "Şurup kaç kez alınmalı?", options: ["2", "3", "4"], correctAnswer: "3" },
        { id: 3, question: "Uykusuzluk için ne önerildi?", options: ["Hap", "Damlalar", "Çay"], correctAnswer: "Damlalar" },
        { id: 4, question: "Toplam kaç euro?", options: ["35", "45", "55"], correctAnswer: "45" },
        { id: 5, question: "Nasıl ödedi?", options: ["Nakit", "Kart", "Transfer"], correctAnswer: "Kart" }
    ]
};

// ===== ÜNİTE 30: MESLEKLER 2 =====
const unit30Reading: UnitReading = {
    unitId: 30, title: "Farklı Meslekler", language: "İspanyolca", level: "A2",
    story: {
        text: "En mi edificio viven personas con profesiones muy diferentes. En el primer piso vive un abogado que trabaja en un bufete muy importante. En el segundo piso hay una enfermera que trabaja en el hospital central. El tercer piso lo ocupa un programador que trabaja desde casa para una empresa de tecnología. En el cuarto piso vive una periodista que escribe para un periódico nacional. Yo vivo en el quinto piso y soy arquitecto, diseño edificios y casas. Todos tenemos horarios diferentes pero nos llevamos muy bien y a veces cenamos juntos los viernes.",
        translation: "Binamda çok farklı mesleklere sahip insanlar yaşıyor. Birinci katta çok önemli bir hukuk bürosunda çalışan bir avukat yaşıyor. İkinci katta merkez hastanede çalışan bir hemşire var. Üçüncü katı bir teknoloji şirketi için evden çalışan bir programcı kullanıyor. Dördüncü katta ulusal bir gazete için yazan bir gazeteci yaşıyor. Ben beşinci katta yaşıyorum ve mimarım, binalar ve evler tasarlıyorum. Hepimizin farklı çalışma saatleri var ama çok iyi anlaşıyoruz ve bazen cumaları birlikte yemek yiyoruz."
    },
    vocabulary: [
        { word: "Abogado", meaning: "Avukat" },
        { word: "Enfermera", meaning: "Hemşire" },
        { word: "Periodista", meaning: "Gazeteci" }
    ],
    questions: [
        { id: 1, question: "Avukat kaçıncı katta?", options: ["1", "2", "3"], correctAnswer: "1" },
        { id: 2, question: "Hemşire nerede çalışıyor?", options: ["Klinik", "Hastane", "Eczane"], correctAnswer: "Hastane" },
        { id: 3, question: "Programcı nerede çalışıyor?", options: ["Ofis", "Ev", "Kafe"], correctAnswer: "Ev" },
        { id: 4, question: "Hikayeyi anlatan kişinin mesleği ne?", options: ["Mühendis", "Mimar", "Doktor"], correctAnswer: "Mimar" },
        { id: 5, question: "Ne zaman birlikte yemek yiyorlar?", options: ["Pazartesi", "Çarşamba", "Cuma"], correctAnswer: "Cuma" }
    ]
};

// Diğer üniteler için kısa versiyon (31-40)
const unit31Reading: UnitReading = { unitId: 31, title: "İş Görüşmesi", language: "İspanyolca", level: "A2", story: { text: "La semana pasada tuve una entrevista de trabajo muy importante. Me preparé mucho: investigué sobre la empresa y practiqué posibles preguntas. Llegué quince minutos antes y esperé en la recepción. La entrevistadora me hizo muchas preguntas sobre mi experiencia, mis estudios y por qué quería trabajar allí. Al final me preguntó cuánto salario esperaba. Respondí con confianza y creo que causé buena impresión. Ayer me llamaron para decirme que conseguí el trabajo.", translation: "Geçen hafta çok önemli bir iş görüşmem vardı. Çok hazırlandım: şirketi araştırdım ve olası soruları pratik ettim. On beş dakika erken vardım ve resepsiyonda bekledim. Görüşmeci bana deneyimim, eğitimim ve neden orada çalışmak istediğim hakkında çok soru sordu. Sonunda ne kadar maaş beklediğimi sordu. Güvenle cevapladım ve iyi bir izlenim bıraktığımı düşünüyorum. Dün işi aldığımı söylemek için aradılar." }, vocabulary: [{ word: "Entrevista", meaning: "Görüşme" }, { word: "Salario", meaning: "Maaş" }, { word: "Impresión", meaning: "İzlenim" }], questions: [{ id: 1, question: "Kaç dakika erken geldi?", options: ["10", "15", "20"], correctAnswer: "15" }, { id: 2, question: "Kim soru sordu?", options: ["Müdür", "Görüşmeci", "Sekreter"], correctAnswer: "Görüşmeci" }, { id: 3, question: "Son soru ne hakkındaydı?", options: ["Deneyim", "Maaş", "Hobiler"], correctAnswer: "Maaş" }, { id: 4, question: "İşi aldı mı?", options: ["Evet", "Hayır", "Belirsiz"], correctAnswer: "Evet" }, { id: 5, question: "Ne zaman aradılar?", options: ["Aynı gün", "Ertesi gün", "Bir hafta sonra"], correctAnswer: "Ertesi gün" }] };

const unit32Reading: UnitReading = { unitId: 32, title: "Telefon Görüşmesi", language: "İspanyolca", level: "A2", story: { text: "Hoy recibí una llamada muy importante de mi banco. El empleado me dijo que había un problema con mi tarjeta de crédito. Al principio tuve miedo, pero me explicó que solo necesitaban verificar unas compras recientes. Le confirmé que había comprado ropa por internet y pagado el hotel para mis vacaciones. Después de verificar todo, me dijo que todo estaba bien y que activarían la tarjeta de nuevo. También me ofreció un seguro de viaje con descuento. Le dije que lo pensaría y que llamaría la próxima semana.", translation: "Bugün bankamdan çok önemli bir arama aldım. Çalışan kredi kartımla ilgili bir sorun olduğunu söyledi. Önce korktum ama sadece son alışverişleri doğrulamaları gerektiğini açıkladı. İnternetten kıyafet aldığımı ve tatil için otel ödediğimi onayladım. Her şeyi doğruladıktan sonra her şeyin yolunda olduğunu ve kartı tekrar aktive edeceklerini söyledi. Ayrıca indirimli seyahat sigortası teklif etti. Düşüneceğimi ve gelecek hafta arayacağımı söyledim." }, vocabulary: [{ word: "Llamada", meaning: "Arama" }, { word: "Verificar", meaning: "Doğrulamak" }, { word: "Descuento", meaning: "İndirim" }], questions: [{ id: 1, question: "Kim aradı?", options: ["Arkadaş", "Banka", "İş"], correctAnswer: "Banka" }, { id: 2, question: "Sorun neydi?", options: ["Para çekilmiş", "Kart bloke", "Şüpheli alışveriş"], correctAnswer: "Şüpheli alışveriş" }, { id: 3, question: "Ne satın almıştı?", options: ["Elektronik", "Kıyafet", "Yiyecek"], correctAnswer: "Kıyafet" }, { id: 4, question: "Kart ne olacak?", options: ["İptal", "Aktif", "Değiştirilecek"], correctAnswer: "Aktif" }, { id: 5, question: "Sigorta teklifi kabul edildi mi?", options: ["Evet", "Hayır", "Düşünecek"], correctAnswer: "Düşünecek" }] };

const unit33Reading: UnitReading = { unitId: 33, title: "E-posta Yazma", language: "İspanyolca", level: "A2", story: { text: "Esta mañana tuve que escribir varios correos electrónicos importantes. El primero fue para mi jefe, informándole sobre el progreso del proyecto. El segundo fue para un cliente, confirmando nuestra reunión del próximo jueves. El tercero fue para recursos humanos, solicitando mis días de vacaciones. En todos utilicé un tono formal y profesional. Antes de enviarlos, los revisé cuidadosamente para evitar errores. También adjunté algunos documentos importantes. Al final del día, había respondido más de veinte correos.", translation: "Bu sabah birkaç önemli e-posta yazmam gerekti. İlki patronuma, projenin ilerlemesini bildirmek içindi. İkincisi bir müşteriye, gelecek perşembe toplantımızı onaylamak içindi. Üçüncüsü insan kaynaklarına, izin günlerimi talep etmek içindi. Hepsinde resmi ve profesyonel bir ton kullandım. Göndermeden önce, hataları önlemek için dikkatlice kontrol ettim. Ayrıca bazı önemli belgeler ekledim. Günün sonunda yirmiden fazla e-postaya cevap vermiştim." }, vocabulary: [{ word: "Correo", meaning: "E-posta" }, { word: "Adjuntar", meaning: "Eklemek" }, { word: "Revisar", meaning: "Kontrol etmek" }], questions: [{ id: 1, question: "Kaç önemli e-posta yazdı?", options: ["2", "3", "4"], correctAnswer: "3" }, { id: 2, question: "Patrona ne hakkında yazdı?", options: ["İzin", "Proje", "Toplantı"], correctAnswer: "Proje" }, { id: 3, question: "Müşteriyle toplantı ne zaman?", options: ["Salı", "Perşembe", "Cuma"], correctAnswer: "Perşembe" }, { id: 4, question: "Göndermeden önce ne yaptı?", options: ["Baskı", "Kontrol", "Silme"], correctAnswer: "Kontrol" }, { id: 5, question: "Gün sonunda kaç e-postaya cevap verdi?", options: ["10+", "20+", "30+"], correctAnswer: "20+" }] };

const unit34Reading: UnitReading = { unitId: 34, title: "Duygular", language: "İspanyolca", level: "A2", story: { text: "Hoy ha sido un día lleno de emociones diferentes. Por la mañana me sentía muy feliz porque era mi cumpleaños. Mis compañeros de trabajo me sorprendieron con un pastel y eso me emocionó mucho. A mediodía recibí una mala noticia: mi abuelo estaba en el hospital. Me puse muy triste y preocupado. Por la tarde fui a visitarlo y me sentí aliviado cuando vi que estaba mejor. Por la noche, mi familia organizó una cena sorpresa. Al final del día, a pesar de los momentos difíciles, me sentí muy agradecido por tener personas tan especiales en mi vida.", translation: "Bugün farklı duygularla dolu bir gündü. Sabah çok mutluydum çünkü doğum günümdü. İş arkadaşlarım beni bir pastayla şaşırttı ve bu beni çok duygulandırdı. Öğlen kötü bir haber aldım: dedem hastanedeydi. Çok üzüldüm ve endişelendim. Öğleden sonra onu ziyarete gittim ve daha iyi olduğunu görünce rahatladım. Akşam ailem sürpriz bir yemek düzenledi. Günün sonunda, zor anlara rağmen, hayatımda bu kadar özel insanlar olduğu için çok minnettar hissettim." }, vocabulary: [{ word: "Emociones", meaning: "Duygular" }, { word: "Preocupado", meaning: "Endişeli" }, { word: "Agradecido", meaning: "Minnettar" }], questions: [{ id: 1, question: "Özel gün neydi?", options: ["Yıl dönümü", "Doğum günü", "Terfi"], correctAnswer: "Doğum günü" }, { id: 2, question: "İş arkadaşları ne yaptı?", options: ["Hediye", "Pasta", "Parti"], correctAnswer: "Pasta" }, { id: 3, question: "Kötü haber neydi?", options: ["İş kaybı", "Dede hastanede", "Kaza"], correctAnswer: "Dede hastanede" }, { id: 4, question: "Dedeyi görünce nasıl hissetti?", options: ["Üzgün", "Kızgın", "Rahatlamış"], correctAnswer: "Rahatlamış" }, { id: 5, question: "Akşam ne oldu?", options: ["Film", "Sürpriz yemek", "Parti"], correctAnswer: "Sürpriz yemek" }] };

const unit35Reading: UnitReading = { unitId: 35, title: "Kişilik Özellikleri", language: "İspanyolca", level: "A2", story: { text: "Mi mejor amigo se llama Pablo y tiene una personalidad muy interesante. Es muy extrovertido y le encanta conocer gente nueva. Siempre está contando chistes y haciendo reír a todos. También es muy generoso; siempre comparte lo que tiene. Sin embargo, a veces es un poco impaciente y se enfada cuando las cosas no salen como planea. Su hermana es todo lo contrario: es introvertida, callada y prefiere leer un libro a ir a una fiesta. Pero es muy inteligente y siempre da buenos consejos. Creo que ambos son personas maravillosas, cada uno a su manera.", translation: "En iyi arkadaşımın adı Pablo ve çok ilginç bir kişiliği var. Çok dışa dönük ve yeni insanlarla tanışmayı çok seviyor. Her zaman fıkra anlatıyor ve herkesi güldürüyor. Ayrıca çok cömerttir; her zaman sahip olduklarını paylaşır. Ancak bazen biraz sabırsız ve işler planladığı gibi gitmeyince sinirleniyor. Kız kardeşi tam tersi: içe dönük, sessiz ve partiye gitmektense kitap okumayı tercih ediyor. Ama çok zeki ve her zaman iyi tavsiyeler veriyor. İkisinin de harika insanlar olduğunu düşünüyorum, her biri kendi tarzında." }, vocabulary: [{ word: "Extrovertido", meaning: "Dışa dönük" }, { word: "Generoso", meaning: "Cömert" }, { word: "Introvertido", meaning: "İçe dönük" }], questions: [{ id: 1, question: "Pablo nasıl biri?", options: ["İçe dönük", "Dışa dönük", "Utangaç"], correctAnswer: "Dışa dönük" }, { id: 2, question: "Pablo'nun olumsuz özelliği ne?", options: ["Kıskanç", "Sabırsız", "Bencil"], correctAnswer: "Sabırsız" }, { id: 3, question: "Kardeşi ne yapmayı tercih ediyor?", options: ["Partiye gitmek", "Kitap okumak", "Spor yapmak"], correctAnswer: "Kitap okumak" }, { id: 4, question: "Kardeşi nasıl tavsiyeler veriyor?", options: ["Kötü", "İyi", "Hiç"], correctAnswer: "İyi" }, { id: 5, question: "Anlatıcı onlar hakkında ne düşünüyor?", options: ["Sıkıcı", "Harika", "Normal"], correctAnswer: "Harika" }] };

const unit36Reading: UnitReading = { unitId: 36, title: "Spor Rutini", language: "İspanyolca", level: "A2", story: { text: "Desde hace seis meses, hago ejercicio todos los días. Los lunes y miércoles voy al gimnasio y trabajo con pesas durante una hora. Los martes y jueves practico natación en la piscina municipal. Los viernes juego al fútbol con mis amigos en el parque. Los fines de semana salgo a correr por la mañana, normalmente unos cinco kilómetros. Gracias a esta rutina, he perdido diez kilos y me siento mucho más fuerte y con más energía. Mi objetivo es correr una maratón el próximo año.", translation: "Altı aydır her gün egzersiz yapıyorum. Pazartesi ve çarşamba spor salonuna gidiyorum ve bir saat ağırlık çalışıyorum. Salı ve perşembe belediye havuzunda yüzme yapıyorum. Cuma arkadaşlarımla parkta futbol oynuyorum. Hafta sonları sabah koşuya çıkıyorum, normalde yaklaşık beş kilometre. Bu rutin sayesinde on kilo verdim ve kendimi çok daha güçlü ve enerjik hissediyorum. Hedefim gelecek yıl bir maraton koşmak." }, vocabulary: [{ word: "Gimnasio", meaning: "Spor salonu" }, { word: "Pesas", meaning: "Ağırlıklar" }, { word: "Maratón", meaning: "Maraton" }], questions: [{ id: 1, question: "Ne zamandır egzersiz yapıyor?", options: ["3 ay", "6 ay", "1 yıl"], correctAnswer: "6 ay" }, { id: 2, question: "Salı günleri ne yapıyor?", options: ["Koşu", "Yüzme", "Futbol"], correctAnswer: "Yüzme" }, { id: 3, question: "Hafta sonu kaç km koşuyor?", options: ["3", "5", "10"], correctAnswer: "5" }, { id: 4, question: "Kaç kilo verdi?", options: ["5", "10", "15"], correctAnswer: "10" }, { id: 5, question: "Gelecek yıl hedefi ne?", options: ["10km yarışı", "Maraton", "Triatlon"], correctAnswer: "Maraton" }] };

const unit37Reading: UnitReading = { unitId: 37, title: "Müzik ve Sanat", language: "İspanyolca", level: "A2", story: { text: "El arte y la música son muy importantes en mi vida. Cuando era niño, empecé a tocar el piano y ahora toco en un pequeño grupo de jazz los fines de semana. También me encanta visitar museos y galerías de arte. El mes pasado fui a una exposición de Picasso y fue increíble. En mi casa tengo muchos cuadros que he comprado en mercadillos y tiendas de segunda mano. Mi estilo favorito es el impresionismo porque me gustan los colores vivos. Algún día me gustaría aprender a pintar.", translation: "Sanat ve müzik hayatımda çok önemli. Çocukken piyano çalmaya başladım ve şimdi hafta sonları küçük bir caz grubunda çalıyorum. Ayrıca müze ve sanat galerilerini ziyaret etmeyi çok seviyorum. Geçen ay bir Picasso sergisine gittim ve inanılmazdı. Evimde bit pazarlarından ve ikinci el dükkanlarından aldığım çok sayıda tablo var. En sevdiğim tarz empresyonizm çünkü canlı renkleri seviyorum. Bir gün resim yapmayı öğrenmek isterdim." }, vocabulary: [{ word: "Exposición", meaning: "Sergi" }, { word: "Cuadro", meaning: "Tablo" }, { word: "Impresionismo", meaning: "Empresyonizm" }], questions: [{ id: 1, question: "Hangi enstrümanı çalıyor?", options: ["Gitar", "Piyano", "Keman"], correctAnswer: "Piyano" }, { id: 2, question: "Ne tür müzik çalıyor?", options: ["Rock", "Caz", "Klasik"], correctAnswer: "Caz" }, { id: 3, question: "Geçen ay kimin sergisine gitti?", options: ["Monet", "Picasso", "Van Gogh"], correctAnswer: "Picasso" }, { id: 4, question: "En sevdiği sanat akımı ne?", options: ["Kübizm", "Empresyonizm", "Rönesans"], correctAnswer: "Empresyonizm" }, { id: 5, question: "Ne öğrenmek istiyor?", options: ["Heykel", "Resim", "Fotoğraf"], correctAnswer: "Resim" }] };

const unit38Reading: UnitReading = { unitId: 38, title: "Sinema ve Diziler", language: "İspanyolca", level: "A2", story: { text: "Soy un gran aficionado al cine y las series de televisión. Voy al cine al menos dos veces al mes, normalmente los viernes por la noche. Mi género favorito es la ciencia ficción, pero también disfruto las comedias. En casa tengo suscripción a tres plataformas de streaming diferentes. Ahora mismo estoy viendo una serie española muy popular que trata sobre un atraco. Tiene cuatro temporadas y cada episodio dura una hora. El año pasado fui a un festival de cine independiente y fue una experiencia increíble. Conocí a varios directores y actores.", translation: "Sinema ve televizyon dizilerinin büyük bir hayranıyım. Ayda en az iki kez sinemaya gidiyorum, normalde cuma geceleri. En sevdiğim tür bilim kurgu ama komedilerden de keyif alıyorum. Evde üç farklı yayın platformuna aboneliğim var. Şu anda bir soygun hakkında çok popüler bir İspanyol dizisi izliyorum. Dört sezonu var ve her bölüm bir saat sürüyor. Geçen yıl bağımsız bir film festivaline gittim ve inanılmaz bir deneyimdi. Birçok yönetmen ve oyuncuyla tanıştım." }, vocabulary: [{ word: "Género", meaning: "Tür" }, { word: "Temporada", meaning: "Sezon" }, { word: "Festival", meaning: "Festival" }], questions: [{ id: 1, question: "Ayda kaç kez sinemaya gidiyor?", options: ["1", "2", "4"], correctAnswer: "2" }, { id: 2, question: "En sevdiği tür ne?", options: ["Komedi", "Bilim kurgu", "Korku"], correctAnswer: "Bilim kurgu" }, { id: 3, question: "Kaç platform aboneliği var?", options: ["1", "2", "3"], correctAnswer: "3" }, { id: 4, question: "İzlediği dizi ne hakkında?", options: ["Aşk", "Soygun", "Polisiye"], correctAnswer: "Soygun" }, { id: 5, question: "Festivalde kimleri tanıdı?", options: ["Hayranlar", "Yönetmen ve oyuncular", "Yazarlar"], correctAnswer: "Yönetmen ve oyuncular" }] };

const unit39Reading: UnitReading = { unitId: 39, title: "Teknoloji", language: "İspanyolca", level: "A2", story: { text: "La tecnología ha cambiado mucho mi vida diaria. Uso mi teléfono inteligente para casi todo: leer noticias, enviar mensajes, hacer fotos y escuchar música. En el trabajo uso el ordenador ocho horas al día. Tengo una tableta que uso principalmente para leer libros electrónicos. También tengo un reloj inteligente que cuenta mis pasos y controla mi sueño. El mes pasado compré un asistente de voz para mi casa y ahora puedo controlar las luces y la música con comandos de voz. Algunas personas dicen que dependo demasiado de la tecnología, pero creo que me hace la vida más fácil.", translation: "Teknoloji günlük hayatımı çok değiştirdi. Akıllı telefonumu neredeyse her şey için kullanıyorum: haber okumak, mesaj göndermek, fotoğraf çekmek ve müzik dinlemek. İşte günde sekiz saat bilgisayar kullanıyorum. Ağırlıklı olarak e-kitap okumak için kullandığım bir tabletim var. Ayrıca adımlarımı sayan ve uykumu izleyen bir akıllı saatim var. Geçen ay evim için bir sesli asistan aldım ve şimdi ışıkları ve müziği sesli komutlarla kontrol edebiliyorum. Bazı insanlar teknolojiye çok bağımlı olduğumu söylüyor ama hayatımı kolaylaştırdığını düşünüyorum." }, vocabulary: [{ word: "Teléfono inteligente", meaning: "Akıllı telefon" }, { word: "Tableta", meaning: "Tablet" }, { word: "Asistente de voz", meaning: "Sesli asistan" }], questions: [{ id: 1, question: "Telefonu ne için kullanıyor?", options: ["Sadece arama", "Sadece mesaj", "Neredeyse her şey"], correctAnswer: "Neredeyse her şey" }, { id: 2, question: "İşte kaç saat bilgisayar kullanıyor?", options: ["4", "6", "8"], correctAnswer: "8" }, { id: 3, question: "Tableti ne için kullanıyor?", options: ["Oyun", "E-kitap", "Film"], correctAnswer: "E-kitap" }, { id: 4, question: "Akıllı saat ne yapıyor?", options: ["Arama", "Adım sayma", "GPS"], correctAnswer: "Adım sayma" }, { id: 5, question: "Sesli asistan ne kontrol ediyor?", options: ["Kapılar", "Işıklar ve müzik", "Isıtma"], correctAnswer: "Işıklar ve müzik" }] };

const unit40Reading: UnitReading = { unitId: 40, title: "Sosyal Medya", language: "İspanyolca", level: "A2", story: { text: "Las redes sociales ocupan una parte importante de mi día. Por la mañana, lo primero que hago es revisar mis notificaciones. Uso Instagram para compartir fotos de mis viajes y mi comida. LinkedIn lo uso para contactos profesionales y buscar ofertas de trabajo. Twitter me sirve para estar al día con las noticias. También tengo TikTok pero solo lo uso para ver videos, nunca publico nada. Intento limitar mi uso a una hora al día, pero a veces paso más tiempo del que debería. Mis padres no entienden por qué paso tanto tiempo en el teléfono, pero para mi generación es algo normal.", translation: "Sosyal medya günümün önemli bir bölümünü kaplıyor. Sabahları ilk yaptığım şey bildirimlerimi kontrol etmek. Instagram'ı seyahatlerimin ve yemeklerimin fotoğraflarını paylaşmak için kullanıyorum. LinkedIn'i profesyonel bağlantılar ve iş teklifleri aramak için kullanıyorum. Twitter haberlerden haberdar olmama yarıyor. TikTok'um da var ama sadece video izlemek için kullanıyorum, hiçbir şey paylaşmıyorum. Kullanımımı günde bir saatle sınırlamaya çalışıyorum ama bazen gerekenden fazla zaman geçiriyorum. Ailem neden telefonda bu kadar zaman geçirdiğimi anlamıyor ama benim kuşağım için bu normal bir şey." }, vocabulary: [{ word: "Redes sociales", meaning: "Sosyal medya" }, { word: "Notificaciones", meaning: "Bildirimler" }, { word: "Publicar", meaning: "Paylaşmak" }], questions: [{ id: 1, question: "Sabah ilk ne yapıyor?", options: ["Kahvaltı", "Duş", "Bildirim kontrolü"], correctAnswer: "Bildirim kontrolü" }, { id: 2, question: "Instagram'da ne paylaşıyor?", options: ["Haberler", "Seyahat fotoğrafları", "İş ilanları"], correctAnswer: "Seyahat fotoğrafları" }, { id: 3, question: "LinkedIn'i ne için kullanıyor?", options: ["Eğlence", "Profesyonel", "Alışveriş"], correctAnswer: "Profesyonel" }, { id: 4, question: "TikTok'ta ne yapıyor?", options: ["Video çekiyor", "Video izliyor", "Canlı yayın"], correctAnswer: "Video izliyor" }, { id: 5, question: "Günde kaç saat kullanmayı hedefliyor?", options: ["30 dk", "1 saat", "2 saat"], correctAnswer: "1 saat" }] };

// A2 readings listesi
const a2Readings: { [key: number]: UnitReading } = {
    21: unit21Reading, 22: unit22Reading, 23: unit23Reading, 24: unit24Reading, 25: unit25Reading,
    26: unit26Reading, 27: unit27Reading, 28: unit28Reading, 29: unit29Reading, 30: unit30Reading,
    31: unit31Reading, 32: unit32Reading, 33: unit33Reading, 34: unit34Reading, 35: unit35Reading,
    36: unit36Reading, 37: unit37Reading, 38: unit38Reading, 39: unit39Reading, 40: unit40Reading
};

export function getA2ReadingForUnit(unitId: number): UnitReading | undefined {
    return a2Readings[unitId];
}
