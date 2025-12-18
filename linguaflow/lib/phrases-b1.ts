/**
 * LinguaFlow Kalıp Veritabanı - İspanyolca B1
 * 20 Ünite (ID: 41-60), her biri için 8 kalıp
 */

export interface B1PhraseItem {
    target: string;
    native: string;
    pronunciation: string;
}

// ===== ÜNİTE 41: GELECEK ZAMAN 1 =====
const unit41Phrases: B1PhraseItem[] = [
    { target: "Mañana haré...", native: "Yarın yapacağım...", pronunciation: "ma-NYA-na a-RE" },
    { target: "La semana que viene iré...", native: "Gelecek hafta gideceğim...", pronunciation: "la se-MA-na ke VIE-ne i-RE" },
    { target: "El año que viene estudiaré...", native: "Gelecek yıl okuyacağım...", pronunciation: "el A-nyo ke VIE-ne" },
    { target: "Dentro de un mes terminaré...", native: "Bir ay içinde bitireceğim...", pronunciation: "DEN-tro de un mes" },
    { target: "Pronto empezaré...", native: "Yakında başlayacağım...", pronunciation: "PRON-to em-pe-sa-RE" },
    { target: "Algún día visitaré...", native: "Bir gün ziyaret edeceğim...", pronunciation: "al-GUN DI-a vi-si-ta-RE" },
    { target: "Este verano viajaré a...", native: "Bu yaz seyahat edeceğim...", pronunciation: "ES-te ve-RA-no via-ha-RE" },
    { target: "Cuando tenga tiempo, haré...", native: "Zamanım olunca yapacağım...", pronunciation: "KUAN-do TEN-ga TIEM-po" }
];

// ===== ÜNİTE 42: GELECEK ZAMAN 2 =====
const unit42Phrases: B1PhraseItem[] = [
    { target: "Podré ayudarte mañana.", native: "Yarın sana yardım edebileceğim.", pronunciation: "pod-RE a-yu-DAR-te" },
    { target: "Tendré que trabajar este fin de semana.", native: "Bu hafta sonu çalışmak zorunda olacağım.", pronunciation: "ten-DRE ke tra-ba-HAR" },
    { target: "Sabrás la respuesta pronto.", native: "Yakında cevabı bileceksin.", pronunciation: "sab-RAS la res-PUES-ta" },
    { target: "Habrá una fiesta el sábado.", native: "Cumartesi bir parti olacak.", pronunciation: "ab-RA u-na FIES-ta" },
    { target: "Vendré a las ocho.", native: "Saat sekizde geleceğim.", pronunciation: "ven-DRE a las O-cho" },
    { target: "Saldré temprano del trabajo.", native: "İşten erken çıkacağım.", pronunciation: "sal-DRE tem-PRA-no" },
    { target: "Te diré la verdad.", native: "Sana gerçeği söyleyeceğim.", pronunciation: "te di-RE la ver-DAD" },
    { target: "Haré todo lo posible.", native: "Elimden gelen her şeyi yapacağım.", pronunciation: "a-RE TO-do lo po-SI-ble" }
];

// ===== ÜNİTE 43: EMİR KİPİ (OLUMLU) =====
const unit43Phrases: B1PhraseItem[] = [
    { target: "¡Ven aquí, por favor!", native: "Lütfen buraya gel!", pronunciation: "ven a-KI por fa-VOR" },
    { target: "¡Haz tu tarea ahora!", native: "Şimdi ödevini yap!", pronunciation: "as tu ta-RE-a A-o-ra" },
    { target: "¡Dime qué pasó!", native: "Bana ne olduğunu söyle!", pronunciation: "DI-me ke pa-SO" },
    { target: "¡Ten cuidado con el perro!", native: "Köpeğe dikkat et!", pronunciation: "ten kui-DA-do" },
    { target: "¡Sal de la habitación!", native: "Odadan çık!", pronunciation: "sal de la a-bi-ta-SION" },
    { target: "¡Pon atención en clase!", native: "Derste dikkat et!", pronunciation: "pon a-ten-SION" },
    { target: "¡Sé puntual mañana!", native: "Yarın dakik ol!", pronunciation: "se pun-TUAL" },
    { target: "¡Ve al médico!", native: "Doktora git!", pronunciation: "ve al ME-di-ko" }
];

// ===== ÜNİTE 44: EMİR KİPİ (OLUMSUZ) =====
const unit44Phrases: B1PhraseItem[] = [
    { target: "¡No vengas tarde!", native: "Geç gelme!", pronunciation: "no VEN-gas TAR-de" },
    { target: "¡No hagas ruido!", native: "Gürültü yapma!", pronunciation: "no A-gas RUI-do" },
    { target: "¡No digas mentiras!", native: "Yalan söyleme!", pronunciation: "no DI-gas men-TI-ras" },
    { target: "¡No salgas sin paraguas!", native: "Şemsiyesiz çıkma!", pronunciation: "no SAL-gas sin pa-RA-guas" },
    { target: "¡No te preocupes!", native: "Endişelenme!", pronunciation: "no te pre-o-KU-pes" },
    { target: "¡No te olvides de llamar!", native: "Aramayı unutma!", pronunciation: "no te ol-VI-des" },
    { target: "¡No toques eso!", native: "Ona dokunma!", pronunciation: "no TO-kes E-so" },
    { target: "¡No seas tonto!", native: "Aptal olma!", pronunciation: "no SE-as TON-to" }
];

// ===== ÜNİTE 45: SUBJUNTİVO GİRİŞ =====
const unit45Phrases: B1PhraseItem[] = [
    { target: "Espero que estés bien.", native: "Umarım iyisindir.", pronunciation: "es-PE-ro ke es-TES bien" },
    { target: "Quiero que vengas a la fiesta.", native: "Partiye gelmeni istiyorum.", pronunciation: "KIE-ro ke VEN-gas" },
    { target: "Ojalá haga buen tiempo.", native: "Keşke hava güzel olsa.", pronunciation: "o-ha-LA A-ga buen TIEM-po" },
    { target: "Dudo que llegue a tiempo.", native: "Zamanında geleceğinden şüpheliyim.", pronunciation: "DU-do ke YE-ge" },
    { target: "Es posible que llueva mañana.", native: "Yarın yağmur yağması mümkün.", pronunciation: "es po-SI-ble ke YUE-va" },
    { target: "Es necesario que estudies más.", native: "Daha çok çalışman gerekli.", pronunciation: "es ne-se-SA-rio" },
    { target: "Cuando llegues, llámame.", native: "Geldiğinde beni ara.", pronunciation: "KUAN-do YE-ges YA-ma-me" },
    { target: "Antes de que salgas, come algo.", native: "Çıkmadan önce bir şey ye.", pronunciation: "AN-tes de ke SAL-gas" }
];

// ===== ÜNİTE 46: ŞART CÜMLELERİ =====
const unit46Phrases: B1PhraseItem[] = [
    { target: "Si tuviera dinero, viajaría.", native: "Param olsaydı seyahat ederdim.", pronunciation: "si tu-VIE-ra di-NE-ro" },
    { target: "Si pudiera, te ayudaría.", native: "Yapabilsem sana yardım ederdim.", pronunciation: "si pu-DIE-ra" },
    { target: "Sería genial ir a la playa.", native: "Plaja gitmek harika olurdu.", pronunciation: "se-RI-a he-NIAL" },
    { target: "Me gustaría vivir en España.", native: "İspanya'da yaşamak isterdim.", pronunciation: "me gus-ta-RI-a vi-VIR" },
    { target: "Deberías descansar más.", native: "Daha çok dinlenmelisin.", pronunciation: "de-be-RI-as des-kan-SAR" },
    { target: "Podría ser verdad.", native: "Doğru olabilir.", pronunciation: "pod-RI-a ser ver-DAD" },
    { target: "En ese caso, no iré.", native: "O durumda gitmeyeceğim.", pronunciation: "en E-se KA-so" },
    { target: "A menos que llueva, iremos.", native: "Yağmur yağmadıkça gideceğiz.", pronunciation: "a ME-nos ke YUE-va" }
];

// ===== ÜNİTE 47: ÇEVRE VE DOĞA =====
const unit47Phrases: B1PhraseItem[] = [
    { target: "Debemos proteger el medio ambiente.", native: "Çevreyi korumalıyız.", pronunciation: "de-BE-mos pro-te-HER" },
    { target: "El cambio climático es un problema grave.", native: "İklim değişikliği ciddi bir sorun.", pronunciation: "el KAM-bio kli-MA-ti-ko" },
    { target: "Hay que reciclar más.", native: "Daha çok geri dönüştürmeliyiz.", pronunciation: "ay ke re-si-KLAR mas" },
    { target: "La contaminación afecta a nuestra salud.", native: "Kirlilik sağlığımızı etkiliyor.", pronunciation: "la kon-ta-mi-na-SION" },
    { target: "Necesitamos energías renovables.", native: "Yenilenebilir enerjiye ihtiyacımız var.", pronunciation: "ne-se-si-TA-mos" },
    { target: "No tires basura al suelo.", native: "Yere çöp atma.", pronunciation: "no TI-res ba-SU-ra" },
    { target: "Los bosques son esenciales.", native: "Ormanlar vazgeçilmez.", pronunciation: "los BOS-kes son e-sen-SIA-les" },
    { target: "Debemos reducir el consumo.", native: "Tüketimi azaltmalıyız.", pronunciation: "de-BE-mos re-du-SIR" }
];

// ===== ÜNİTE 48: EĞİTİM VE OKUL =====
const unit48Phrases: B1PhraseItem[] = [
    { target: "Estudio la carrera de...", native: "... bölümü okuyorum.", pronunciation: "es-TU-dio la ka-RRE-ra" },
    { target: "Conseguí una beca.", native: "Burs kazandım.", pronunciation: "kon-se-GI u-na BE-ka" },
    { target: "Aprobé el examen.", native: "Sınavı geçtim.", pronunciation: "a-pro-BE el ek-SA-men" },
    { target: "Suspendí la asignatura.", native: "Dersten kaldım.", pronunciation: "sus-pen-DI" },
    { target: "Tengo que entregar el trabajo mañana.", native: "Yarın ödevi teslim etmeliyim.", pronunciation: "TEN-go ke en-tre-GAR" },
    { target: "Me licencié el año pasado.", native: "Geçen yıl mezun oldum.", pronunciation: "me li-sen-SIE" },
    { target: "Necesito investigar más.", native: "Daha çok araştırma yapmam gerekiyor.", pronunciation: "ne-se-SI-to in-ves-ti-GAR" },
    { target: "El plazo es la próxima semana.", native: "Son tarih gelecek hafta.", pronunciation: "el PLA-so es" }
];

// ===== ÜNİTE 49: TEKNOLOJİ VE BİLİM =====
const unit49Phrases: B1PhraseItem[] = [
    { target: "Los avances tecnológicos son impresionantes.", native: "Teknolojik ilerlemeler etkileyici.", pronunciation: "los a-VAN-ses tek-no-LO-hi-kos" },
    { target: "Desarrollaron una nueva aplicación.", native: "Yeni bir uygulama geliştirdiler.", pronunciation: "de-sa-rro-YA-ron" },
    { target: "La inteligencia artificial cambiará todo.", native: "Yapay zeka her şeyi değiştirecek.", pronunciation: "la in-te-li-HEN-sia ar-ti-fi-SIAL" },
    { target: "Necesito analizar los datos.", native: "Verileri analiz etmem gerekiyor.", pronunciation: "ne-se-SI-to a-na-li-SAR" },
    { target: "El experimento fue exitoso.", native: "Deney başarılı oldu.", pronunciation: "el eks-pe-ri-MEN-to" },
    { target: "Las empresas deben innovar.", native: "Şirketler yenilik yapmalı.", pronunciation: "de-ben in-no-VAR" },
    { target: "La reunión será virtual.", native: "Toplantı sanal olacak.", pronunciation: "la re-u-NION se-RA vir-TUAL" },
    { target: "Automatizaron el proceso.", native: "Süreci otomatikleştirdiler.", pronunciation: "au-to-ma-ti-SA-ron" }
];

// ===== ÜNİTE 50: MEDYA VE HABERLER =====
const unit50Phrases: B1PhraseItem[] = [
    { target: "¿Has leído la última noticia?", native: "Son haberi okudun mu?", pronunciation: "as le-I-do la UL-ti-ma" },
    { target: "Leo el periódico cada mañana.", native: "Her sabah gazete okurum.", pronunciation: "LE-o el pe-RI-o-di-ko" },
    { target: "La prensa investiga el caso.", native: "Basın olayı araştırıyor.", pronunciation: "la PREN-sa in-ves-TI-ga" },
    { target: "El titular es muy llamativo.", native: "Başlık çok dikkat çekici.", pronunciation: "el ti-tu-LAR es mui" },
    { target: "Publicaron el artículo ayer.", native: "Makaleyi dün yayınladılar.", pronunciation: "pu-bli-KA-ron" },
    { target: "La fuente no es confiable.", native: "Kaynak güvenilir değil.", pronunciation: "la FUEN-te no es" },
    { target: "La transmisión es en directo.", native: "Yayın canlı.", pronunciation: "la trans-mi-SION es en di-REK-to" },
    { target: "Vi un reportaje interesante.", native: "İlginç bir röportaj izledim.", pronunciation: "vi un re-por-TA-he" }
];

// ===== ÜNİTE 51: SAĞLIK VE BESLENME =====
const unit51Phrases: B1PhraseItem[] = [
    { target: "Sigo una dieta equilibrada.", native: "Dengeli bir diyet yapıyorum.", pronunciation: "SI-go u-na DIE-ta" },
    { target: "Comer frutas es saludable.", native: "Meyve yemek sağlıklıdır.", pronunciation: "ko-MER FRU-tas" },
    { target: "Evita las grasas saturadas.", native: "Doymuş yağlardan kaçın.", pronunciation: "e-VI-ta las GRA-sas" },
    { target: "Necesito más proteínas.", native: "Daha fazla proteine ihtiyacım var.", pronunciation: "ne-se-SI-to mas pro-te-I-nas" },
    { target: "Quiero adelgazar un poco.", native: "Biraz zayıflamak istiyorum.", pronunciation: "KIE-ro a-del-ga-SAR" },
    { target: "Es importante mantener un peso saludable.", native: "Sağlıklı bir kiloyu korumak önemli.", pronunciation: "es im-por-TAN-te" },
    { target: "El bienestar es fundamental.", native: "Esenlik temeldir.", pronunciation: "el bien-es-TAR" },
    { target: "Deberías comer más verduras.", native: "Daha çok sebze yemelisin.", pronunciation: "de-be-RI-as ko-MER" }
];

// ===== ÜNİTE 52: İLİŞKİLER VE SOSYAL HAYAT =====
const unit52Phrases: B1PhraseItem[] = [
    { target: "La amistad es muy importante para mí.", native: "Dostluk benim için çok önemli.", pronunciation: "la a-mis-TAD es" },
    { target: "Me enamoré de él/ella.", native: "Ona aşık oldum.", pronunciation: "me e-na-mo-RE" },
    { target: "Discutimos anoche.", native: "Dün gece tartıştık.", pronunciation: "dis-ku-TI-mos a-NO-che" },
    { target: "Nos reconciliamos después.", native: "Sonra barıştık.", pronunciation: "nos re-kon-si-LIA-mos" },
    { target: "Confío en ti completamente.", native: "Sana tamamen güveniyorum.", pronunciation: "kon-FI-o en ti" },
    { target: "Te perdono por lo que hiciste.", native: "Yaptığın şey için seni affediyorum.", pronunciation: "te per-DO-no" },
    { target: "Rompieron hace un mes.", native: "Bir ay önce ayrıldılar.", pronunciation: "rom-PIE-ron a-se un mes" },
    { target: "Siempre te apoyaré.", native: "Her zaman seni destekleyeceğim.", pronunciation: "SIEM-pre te a-po-ya-RE" }
];

// ===== ÜNİTE 53: SANAT VE KÜLTÜR =====
const unit53Phrases: B1PhraseItem[] = [
    { target: "Es una obra maestra.", native: "Bu bir başyapıt.", pronunciation: "es u-na O-bra ma-ES-tra" },
    { target: "El cuadro es impresionante.", native: "Tablo etkileyici.", pronunciation: "el KUA-dro es im-pre-sio-NAN-te" },
    { target: "Fui a una exposición de arte.", native: "Sanat sergisine gittim.", pronunciation: "fui a u-na eks-po-si-SION" },
    { target: "Me encanta el arte contemporáneo.", native: "Çağdaş sanatı çok seviyorum.", pronunciation: "me en-KAN-ta el AR-te" },
    { target: "El folclore español es muy rico.", native: "İspanyol halk kültürü çok zengin.", pronunciation: "el fol-KLO-re" },
    { target: "La danza flamenca es apasionante.", native: "Flamenko dansı tutkulu.", pronunciation: "la DAN-sa fla-MEN-ka" },
    { target: "Interpreta el papel principal.", native: "Başrol oynuyor.", pronunciation: "in-TER-pre-ta el pa-PEL" },
    { target: "¿Qué género musical prefieres?", native: "Hangi müzik türünü tercih edersin?", pronunciation: "ke HE-ne-ro mu-si-KAL" }
];

// ===== ÜNİTE 54: POLİTİKA VE TOPLUM =====
const unit54Phrases: B1PhraseItem[] = [
    { target: "El gobierno tomó medidas.", native: "Hükümet önlem aldı.", pronunciation: "el go-BIER-no to-MO" },
    { target: "Votaré en las próximas elecciones.", native: "Gelecek seçimlerde oy vereceğim.", pronunciation: "vo-ta-RE en las" },
    { target: "Los ciudadanos tienen derechos.", native: "Vatandaşların hakları var.", pronunciation: "los siu-da-DA-nos" },
    { target: "La ley es igual para todos.", native: "Yasa herkes için eşit.", pronunciation: "la ley es i-GUAL" },
    { target: "Vivimos en una democracia.", native: "Demokraside yaşıyoruz.", pronunciation: "vi-VI-mos en u-na" },
    { target: "Hubo una manifestación ayer.", native: "Dün bir gösteri oldu.", pronunciation: "U-bo u-na ma-ni-fes-ta-SION" },
    { target: "Luchamos por la igualdad.", native: "Eşitlik için mücadele ediyoruz.", pronunciation: "lu-CHA-mos por la" },
    { target: "Pago impuestos cada año.", native: "Her yıl vergi ödüyorum.", pronunciation: "PA-go im-PUES-tos" }
];

// ===== ÜNİTE 55: DOLAYLI ANLATIM =====
const unit55Phrases: B1PhraseItem[] = [
    { target: "Dijo que vendría mañana.", native: "Yarın geleceğini söyledi.", pronunciation: "DI-ho ke ven-DRI-a" },
    { target: "Preguntó si estaba bien.", native: "İyi olup olmadığımı sordu.", pronunciation: "pre-gun-TO si es-TA-ba" },
    { target: "Me comentó que estaba ocupado.", native: "Meşgul olduğunu söyledi.", pronunciation: "me ko-men-TO ke" },
    { target: "Explicó que no podía venir.", native: "Gelemeyeceğini açıkladı.", pronunciation: "eks-pli-KO ke no po-DI-a" },
    { target: "Prometió que me ayudaría.", native: "Bana yardım edeceğine söz verdi.", pronunciation: "pro-me-TIO ke me" },
    { target: "Sugirió que fuéramos al cine.", native: "Sinemaya gitmemizi önerdi.", pronunciation: "su-hi-RIO ke FUE-ra-mos" },
    { target: "Negó que lo supiera.", native: "Bildiğini inkar etti.", pronunciation: "ne-GO ke lo su-PIE-ra" },
    { target: "Afirmó que era verdad.", native: "Doğru olduğunu belirtti.", pronunciation: "a-fir-MO ke E-ra" }
];

// ===== ÜNİTE 56: GEÇMİŞ ZAMAN 3 (PLUSCUAMPERFECTO) =====
const unit56Phrases: B1PhraseItem[] = [
    { target: "Cuando llegué, ya había terminado.", native: "Geldiğimde çoktan bitmişti.", pronunciation: "KUAN-do ye-GE ya a-BI-a" },
    { target: "Nunca había visto algo así.", native: "Böyle bir şey hiç görmemiştim.", pronunciation: "NUN-ka a-BI-a VIS-to" },
    { target: "Ya había comido cuando me llamaste.", native: "Beni aradığında çoktan yemek yemiştim.", pronunciation: "ya a-BI-a ko-MI-do" },
    { target: "Antes de venir, había trabajado allí.", native: "Gelmeden önce orada çalışmıştım.", pronunciation: "AN-tes de ve-NIR a-BI-a" },
    { target: "Todavía no había empezado.", native: "Henüz başlamamıştım.", pronunciation: "to-da-VI-a no a-BI-a" },
    { target: "Era la primera vez que lo había hecho.", native: "Bunu ilk kez yapmıştım.", pronunciation: "E-ra la pri-ME-ra ves" },
    { target: "Había estudiado español antes.", native: "Daha önce İspanyolca çalışmıştım.", pronunciation: "a-BI-a es-tu-DIA-do" },
    { target: "Me di cuenta de que había olvidado.", native: "Unuttuğumu fark ettim.", pronunciation: "me di KUEN-ta de ke" }
];

// ===== ÜNİTE 57: BAĞLAÇLAR (POR VS PARA) =====
const unit57Phrases: B1PhraseItem[] = [
    { target: "Gracias por tu ayuda.", native: "Yardımın için teşekkürler.", pronunciation: "GRA-sias por tu a-YU-da" },
    { target: "Estudio para aprender.", native: "Öğrenmek için çalışıyorum.", pronunciation: "es-TU-dio PA-ra a-pren-DER" },
    { target: "Por eso no pude ir.", native: "Bu yüzden gidemedim.", pronunciation: "por E-so no PU-de ir" },
    { target: "Te lo digo para que lo sepas.", native: "Bilmen için söylüyorum.", pronunciation: "te lo DI-go PA-ra ke" },
    { target: "Sin embargo, lo intenté.", native: "Ancak denedim.", pronunciation: "sin em-BAR-go lo in-ten-TE" },
    { target: "Además, quiero agregar algo.", native: "Ayrıca bir şey eklemek istiyorum.", pronunciation: "a-de-MAS KIE-ro" },
    { target: "A pesar de la lluvia, salí.", native: "Yağmura rağmen çıktım.", pronunciation: "a pe-SAR de la YU-via" },
    { target: "Mientras que tú trabajas, yo descanso.", native: "Sen çalışırken ben dinleniyorum.", pronunciation: "MIEN-tras ke tu tra-BA-has" }
];

// ===== ÜNİTE 58: DEYİMLER VE ATASÖZLERİ =====
const unit58Phrases: B1PhraseItem[] = [
    { target: "Me costó un ojo de la cara.", native: "Bana çok pahalıya patladı.", pronunciation: "me kos-TO un O-ho" },
    { target: "No tiene pelos en la lengua.", native: "Lafı eğip bükmez.", pronunciation: "no TIE-ne PE-los" },
    { target: "¡Ponte las pilas!", native: "Kendine gel!", pronunciation: "PON-te las PI-las" },
    { target: "Metí la pata.", native: "Pot kırdım.", pronunciation: "me-TI la PA-ta" },
    { target: "¿Me echas una mano?", native: "Bana yardım eder misin?", pronunciation: "me E-chas u-na MA-no" },
    { target: "Más vale tarde que nunca.", native: "Geç olsun güç olmasın.", pronunciation: "mas VA-le TAR-de" },
    { target: "Estás en las nubes hoy.", native: "Bugün çok dalgınsın.", pronunciation: "es-TAS en las NU-bes" },
    { target: "Tiraron la casa por la ventana.", native: "Parayı su gibi harcadılar.", pronunciation: "ti-RA-ron la KA-sa" }
];

// ===== ÜNİTE 59: İŞ DÜNYASI (İLERİ) =====
const unit59Phrases: B1PhraseItem[] = [
    { target: "Trabajo en una empresa internacional.", native: "Uluslararası bir şirkette çalışıyorum.", pronunciation: "tra-BA-ho en u-na em-PRE-sa" },
    { target: "Firmé el contrato ayer.", native: "Dün sözleşmeyi imzaladım.", pronunciation: "fir-ME el kon-TRA-to" },
    { target: "Lo despidieron sin razón.", native: "Onu sebepsiz işten çıkardılar.", pronunciation: "lo des-pi-DIE-ron" },
    { target: "Van a contratar más empleados.", native: "Daha fazla çalışan işe alacaklar.", pronunciation: "van a kon-tra-TAR" },
    { target: "Pedí un aumento de sueldo.", native: "Maaş zammı istedim.", pronunciation: "pe-DI un au-MEN-to" },
    { target: "Mi jefe es muy exigente.", native: "Patronum çok talepkar.", pronunciation: "mi HE-fe es mui" },
    { target: "Tengo una reunión importante.", native: "Önemli bir toplantım var.", pronunciation: "TEN-go u-na re-u-NION" },
    { target: "Voy a presentar el proyecto hoy.", native: "Bugün projeyi sunacağım.", pronunciation: "voy a pre-sen-TAR" }
];

// ===== ÜNİTE 60: B1 GENEL TEKRAR =====
const unit60Phrases: B1PhraseItem[] = [
    { target: "Logré todos mis objetivos.", native: "Tüm hedeflerime ulaştım.", pronunciation: "lo-GRE TO-dos mis" },
    { target: "Mi español ha mejorado mucho.", native: "İspanyolcam çok gelişti.", pronunciation: "mi es-pa-NYOL a me-ho-RA-do" },
    { target: "Ahora puedo comunicarme mejor.", native: "Artık daha iyi iletişim kurabiliyorum.", pronunciation: "A-o-ra PUE-do ko-mu-ni-KAR-me" },
    { target: "Comprendo casi todo.", native: "Neredeyse her şeyi anlıyorum.", pronunciation: "kom-PREN-do KA-si TO-do" },
    { target: "He avanzado mucho.", native: "Çok ilerledim.", pronunciation: "e a-van-SA-do MU-cho" },
    { target: "Superé mis miedos.", native: "Korkularımı aştım.", pronunciation: "su-pe-RE mis MIE-dos" },
    { target: "Llegué al nivel B1.", native: "B1 seviyesine ulaştım.", pronunciation: "ye-GE al ni-VEL" },
    { target: "¡Felicidades! ¡Terminaste B1!", native: "Tebrikler! B1'i bitirdin!", pronunciation: "fe-li-si-DA-des ter-mi-NAS-te" }
];

// ===== YENİ B1 ÜNİTELERİ (71-75) =====

// ===== ÜNİTE 71: İLERİ YAZMA =====
const unit71Phrases: B1PhraseItem[] = [
    { target: "En primer lugar, quiero decir que...", native: "İlk olarak şunu söylemek istiyorum ki...", pronunciation: "en pri-MER lu-GAR" },
    { target: "Además, es importante mencionar...", native: "Ayrıca şunu belirtmek önemli...", pronunciation: "a-de-MAS es im-por-TAN-te" },
    { target: "Por otro lado, también hay que considerar...", native: "Öte yandan şunu da düşünmek gerekir...", pronunciation: "por O-tro LA-do" },
    { target: "Sin embargo, debo admitir que...", native: "Ancak kabul etmeliyim ki...", pronunciation: "sin em-BAR-go" },
    { target: "En conclusión, creo que...", native: "Sonuç olarak düşünüyorum ki...", pronunciation: "en kon-klu-SION" },
    { target: "Para resumir, diría que...", native: "Özetlemek gerekirse derdim ki...", pronunciation: "PA-ra re-su-MIR" },
    { target: "Revisa el texto antes de enviarlo.", native: "Göndermeden önce metni kontrol et.", pronunciation: "re-VI-sa el TEKS-to" },
    { target: "Es solo un borrador.", native: "Sadece bir taslak.", pronunciation: "es SO-lo un bo-rra-DOR" }
];

// ===== ÜNİTE 72: DİNLEME BECERİLERİ =====
const unit72Phrases: B1PhraseItem[] = [
    { target: "¿Puede repetir, por favor?", native: "Tekrar edebilir misiniz lütfen?", pronunciation: "PUE-de re-pe-TIR" },
    { target: "No he entendido bien.", native: "İyi anlamadım.", pronunciation: "no e en-ten-DI-do bien" },
    { target: "¿Puede hablar más despacio?", native: "Daha yavaş konuşabilir misiniz?", pronunciation: "PUE-de ab-LAR mas des-PA-sio" },
    { target: "¿Cómo dice?", native: "Ne diyorsunuz?", pronunciation: "KO-mo DI-se" },
    { target: "O sea, quieres decir que...", native: "Yani demek istiyorsun ki...", pronunciation: "o SE-a KIE-res de-SIR" },
    { target: "Creo que capté la idea principal.", native: "Ana fikri yakaladığımı düşünüyorum.", pronunciation: "KRE-o ke kap-TE" },
    { target: "Tiene un acento muy fuerte.", native: "Çok güçlü bir aksanı var.", pronunciation: "TIE-ne un a-SEN-to" },
    { target: "El contexto me ayudó a entender.", native: "Bağlam anlamama yardımcı oldu.", pronunciation: "el kon-TEKS-to" }
];

// ===== ÜNİTE 73: İSPANYOL COĞRAFYASI =====
const unit73Phrases: B1PhraseItem[] = [
    { target: "España tiene 17 comunidades autónomas.", native: "İspanya'nın 17 özerk bölgesi var.", pronunciation: "es-PA-nya TIE-ne" },
    { target: "El sur es más cálido que el norte.", native: "Güney kuzeyden daha sıcak.", pronunciation: "el sur es mas KA-li-do" },
    { target: "La Costa Brava es famosa por sus playas.", native: "Costa Brava plajlarıyla ünlü.", pronunciation: "la KOS-ta BRA-va" },
    { target: "Madrid está en el centro de España.", native: "Madrid İspanya'nın merkezinde.", pronunciation: "ma-DRID es-TA en el SEN-tro" },
    { target: "El Teide es el volcán más alto.", native: "Teide en yüksek volkan.", pronunciation: "el TEN-de es el vol-KAN" },
    { target: "Las Islas Canarias tienen clima tropical.", native: "Kanarya Adaları tropik iklime sahip.", pronunciation: "las IS-las ka-NA-rias" },
    { target: "El río Ebro es muy largo.", native: "Ebro nehri çok uzun.", pronunciation: "el RI-o E-bro" },
    { target: "Sierra Nevada tiene mucha nieve.", native: "Sierra Nevada'da çok kar var.", pronunciation: "SIE-rra ne-VA-da" }
];

// ===== ÜNİTE 74: LATİN AMERİKA =====
const unit74Phrases: B1PhraseItem[] = [
    { target: "En Latinoamérica hablan español.", native: "Latin Amerika'da İspanyolca konuşulur.", pronunciation: "en la-ti-no-a-ME-ri-ka" },
    { target: "Cada país tiene su propio dialecto.", native: "Her ülkenin kendi lehçesi var.", pronunciation: "KA-da pa-IS TIE-ne" },
    { target: "El tango es típico de Argentina.", native: "Tango Arjantin'e özgü.", pronunciation: "el TAN-go es TI-pi-ko" },
    { target: "En México se usa 'carro' en vez de 'coche'.", native: "Meksika'da 'coche' yerine 'carro' kullanılır.", pronunciation: "en ME-hi-ko se U-sa" },
    { target: "La selva amazónica es impresionante.", native: "Amazon ormanı etkileyici.", pronunciation: "la SEL-va a-ma-SO-ni-ka" },
    { target: "Los Andes cruzan varios países.", native: "And Dağları birçok ülkeden geçer.", pronunciation: "los AN-des KRU-san" },
    { target: "El Caribe tiene playas hermosas.", native: "Karayipler güzel plajlara sahip.", pronunciation: "el ka-RI-be TIE-ne" },
    { target: "La cumbia es música popular.", native: "Kumbia popüler bir müzik.", pronunciation: "la KUM-bia es MU-si-ka" }
];

// ===== ÜNİTE 75: B1 FİNAL TEKRAR =====
const unit75Phrases: B1PhraseItem[] = [
    { target: "Ahora hablo con más fluidez.", native: "Artık daha akıcı konuşuyorum.", pronunciation: "A-o-ra AB-lo kon mas flu-i-DES" },
    { target: "Consolidé mis conocimientos.", native: "Bilgilerimi pekiştirdim.", pronunciation: "kon-so-li-DE mis" },
    { target: "Quiero profundizar más.", native: "Daha fazla derinleşmek istiyorum.", pronunciation: "KIE-ro pro-fun-di-SAR" },
    { target: "Tengo competencia B1.", native: "B1 yeterliliğim var.", pronunciation: "TEN-go kom-pe-TEN-sia" },
    { target: "El reto fue difícil pero lo logré.", native: "Zorluk zor oldu ama başardım.", pronunciation: "el RE-to fue di-FI-sil" },
    { target: "Hay que persistir.", native: "Israr etmek gerekir.", pronunciation: "ay ke per-sis-TIR" },
    { target: "El éxito requiere trabajo.", native: "Başarı çalışma gerektirir.", pronunciation: "el EK-si-to re-KIE-re" },
    { target: "¡Enhorabuena! ¡Pasaste a B2!", native: "Tebrikler! B2'ye geçtin!", pronunciation: "en-o-ra-BUE-na pa-SAS-te" }
];

// B1 kalıp getirme fonksiyonu (ID: 51-75)
export function getB1PhrasesForUnit(unitId: number): B1PhraseItem[] {
    // Eski unit değişkenlerini yeni ID'lere eşle
    const idMapping: { [key: number]: B1PhraseItem[] } = {
        51: unit41Phrases, 52: unit42Phrases, 53: unit43Phrases, 54: unit44Phrases, 55: unit45Phrases,
        56: unit46Phrases, 57: unit47Phrases, 58: unit48Phrases, 59: unit49Phrases, 60: unit50Phrases,
        61: unit51Phrases, 62: unit52Phrases, 63: unit53Phrases, 64: unit54Phrases, 65: unit55Phrases,
        66: unit56Phrases, 67: unit57Phrases, 68: unit58Phrases, 69: unit59Phrases, 70: unit60Phrases,
        71: unit71Phrases, 72: unit72Phrases, 73: unit73Phrases, 74: unit74Phrases, 75: unit75Phrases
    };
    return idMapping[unitId] || unit41Phrases;
}

