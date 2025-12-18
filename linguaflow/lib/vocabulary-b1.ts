/**
 * LinguaFlow Kelime Veritabanı - İspanyolca B1
 * 20 Ünite (ID: 41-60), her biri için 10 kelime
 */

export interface B1VocabularyItem {
    word: string;
    meaning: string;
    pronunciation: string;
    example: string;
    exampleTranslation: string;
}

// ===== ÜNİTE 41: GELECEK ZAMAN 1 =====
const unit41Vocabulary: B1VocabularyItem[] = [
    { word: "Mañana", meaning: "Yarın", pronunciation: "ma-NYA-na", example: "Mañana iré al médico.", exampleTranslation: "Yarın doktora gideceğim." },
    { word: "La semana que viene", meaning: "Gelecek hafta", pronunciation: "se-MA-na ke VIE-ne", example: "La semana que viene tendré vacaciones.", exampleTranslation: "Gelecek hafta tatilim olacak." },
    { word: "Pronto", meaning: "Yakında", pronunciation: "PRON-to", example: "Pronto terminaré el proyecto.", exampleTranslation: "Yakında projeyi bitireceğim." },
    { word: "Algún día", meaning: "Bir gün", pronunciation: "al-GUN DI-a", example: "Algún día visitaré Japón.", exampleTranslation: "Bir gün Japonya'yı ziyaret edeceğim." },
    { word: "Dentro de", meaning: "... içinde", pronunciation: "DEN-tro de", example: "Dentro de dos horas llegaré.", exampleTranslation: "İki saat içinde varacağım." },
    { word: "El futuro", meaning: "Gelecek", pronunciation: "fu-TU-ro", example: "El futuro es incierto.", exampleTranslation: "Gelecek belirsiz." },
    { word: "Planear", meaning: "Planlamak", pronunciation: "pla-ne-AR", example: "Planeo viajar en verano.", exampleTranslation: "Yazın seyahat etmeyi planlıyorum." },
    { word: "Esperar", meaning: "Ummak/Beklemek", pronunciation: "es-pe-RAR", example: "Espero que vengas.", exampleTranslation: "Gelmen diliyorum." },
    { word: "Predecir", meaning: "Tahmin etmek", pronunciation: "pre-de-SIR", example: "Es difícil predecir el tiempo.", exampleTranslation: "Havayı tahmin etmek zor." },
    { word: "Probablemente", meaning: "Muhtemelen", pronunciation: "pro-ba-ble-MEN-te", example: "Probablemente lloverá.", exampleTranslation: "Muhtemelen yağmur yağacak." }
];

// ===== ÜNİTE 42: GELECEK ZAMAN 2 =====
const unit42Vocabulary: B1VocabularyItem[] = [
    { word: "Tener que", meaning: "Zorunda olmak", pronunciation: "te-NER ke", example: "Tendré que estudiar más.", exampleTranslation: "Daha çok çalışmak zorunda olacağım." },
    { word: "Poder", meaning: "Yapabilmek", pronunciation: "po-DER", example: "Podré ir a la fiesta.", exampleTranslation: "Partiye gidebileceğim." },
    { word: "Saber", meaning: "Bilmek", pronunciation: "sa-BER", example: "Sabré la respuesta mañana.", exampleTranslation: "Yarın cevabı bileceğim." },
    { word: "Querer", meaning: "İstemek", pronunciation: "ke-RER", example: "Querré más información.", exampleTranslation: "Daha fazla bilgi isteyeceğim." },
    { word: "Venir", meaning: "Gelmek", pronunciation: "ve-NIR", example: "Vendrá a las ocho.", exampleTranslation: "Saat sekizde gelecek." },
    { word: "Salir", meaning: "Çıkmak", pronunciation: "sa-LIR", example: "Saldré temprano.", exampleTranslation: "Erken çıkacağım." },
    { word: "Poner", meaning: "Koymak", pronunciation: "po-NER", example: "Pondré la mesa.", exampleTranslation: "Masayı hazırlayacağım." },
    { word: "Decir", meaning: "Söylemek", pronunciation: "de-SIR", example: "Te diré la verdad.", exampleTranslation: "Sana gerçeği söyleyeceğim." },
    { word: "Hacer", meaning: "Yapmak", pronunciation: "a-SER", example: "Haré los deberes.", exampleTranslation: "Ödevleri yapacağım." },
    { word: "Haber", meaning: "Olmak (Var)", pronunciation: "a-BER", example: "Habrá una reunión.", exampleTranslation: "Bir toplantı olacak." }
];

// ===== ÜNİTE 43: EMİR KİPİ (OLUMLU) =====
const unit43Vocabulary: B1VocabularyItem[] = [
    { word: "¡Ven!", meaning: "Gel!", pronunciation: "ven", example: "¡Ven aquí ahora!", exampleTranslation: "Şimdi buraya gel!" },
    { word: "¡Haz!", meaning: "Yap!", pronunciation: "as", example: "¡Haz tu tarea!", exampleTranslation: "Ödevini yap!" },
    { word: "¡Sal!", meaning: "Çık!", pronunciation: "sal", example: "¡Sal de aquí!", exampleTranslation: "Buradan çık!" },
    { word: "¡Pon!", meaning: "Koy!", pronunciation: "pon", example: "¡Pon atención!", exampleTranslation: "Dikkat et!" },
    { word: "¡Ten!", meaning: "Al/Tut!", pronunciation: "ten", example: "¡Ten cuidado!", exampleTranslation: "Dikkatli ol!" },
    { word: "¡Di!", meaning: "Söyle!", pronunciation: "di", example: "¡Dime la verdad!", exampleTranslation: "Bana gerçeği söyle!" },
    { word: "¡Sé!", meaning: "Ol!", pronunciation: "se", example: "¡Sé bueno!", exampleTranslation: "İyi ol!" },
    { word: "¡Ve!", meaning: "Git!", pronunciation: "ve", example: "¡Ve a casa!", exampleTranslation: "Eve git!" },
    { word: "Ordenar", meaning: "Emretmek", pronunciation: "or-de-NAR", example: "El jefe ordena tareas.", exampleTranslation: "Patron görevler emreder." },
    { word: "Obedecer", meaning: "İtaat etmek", pronunciation: "o-be-de-SER", example: "Los niños obedecen a sus padres.", exampleTranslation: "Çocuklar ebeveynlerine itaat eder." }
];

// ===== ÜNİTE 44: EMİR KİPİ (OLUMSUZ) =====
const unit44Vocabulary: B1VocabularyItem[] = [
    { word: "¡No vengas!", meaning: "Gelme!", pronunciation: "no VEN-gas", example: "¡No vengas tarde!", exampleTranslation: "Geç gelme!" },
    { word: "¡No hagas!", meaning: "Yapma!", pronunciation: "no A-gas", example: "¡No hagas ruido!", exampleTranslation: "Gürültü yapma!" },
    { word: "¡No digas!", meaning: "Söyleme!", pronunciation: "no DI-gas", example: "¡No digas mentiras!", exampleTranslation: "Yalan söyleme!" },
    { word: "¡No salgas!", meaning: "Çıkma!", pronunciation: "no SAL-gas", example: "¡No salgas sin paraguas!", exampleTranslation: "Şemsiyesiz çıkma!" },
    { word: "Prohibir", meaning: "Yasaklamak", pronunciation: "pro-i-BIR", example: "Está prohibido fumar.", exampleTranslation: "Sigara içmek yasak." },
    { word: "Advertir", meaning: "Uyarmak", pronunciation: "ad-ver-TIR", example: "Te advierto del peligro.", exampleTranslation: "Seni tehlikeye karşı uyarıyorum." },
    { word: "Evitar", meaning: "Kaçınmak", pronunciation: "e-vi-TAR", example: "Evita los problemas.", exampleTranslation: "Sorunlardan kaçın." },
    { word: "Negar", meaning: "Reddetmek", pronunciation: "ne-GAR", example: "No puedo negar la verdad.", exampleTranslation: "Gerçeği inkar edemem." },
    { word: "Impedir", meaning: "Engellemek", pronunciation: "im-pe-DIR", example: "Nada me impedirá ir.", exampleTranslation: "Hiçbir şey gitmemi engelleyemez." },
    { word: "Rechazar", meaning: "Geri çevirmek", pronunciation: "re-cha-SAR", example: "Rechazó la oferta.", exampleTranslation: "Teklifi geri çevirdi." }
];

// ===== ÜNİTE 45: SUBJUNTİVO GİRİŞ =====
const unit45Vocabulary: B1VocabularyItem[] = [
    { word: "Espero que", meaning: "Umarım ki", pronunciation: "es-PE-ro ke", example: "Espero que estés bien.", exampleTranslation: "Umarım iyisindir." },
    { word: "Quiero que", meaning: "İstiyorum ki", pronunciation: "KIE-ro ke", example: "Quiero que vengas.", exampleTranslation: "Gelmeni istiyorum." },
    { word: "Ojalá", meaning: "Keşke/Umarım", pronunciation: "o-ha-LA", example: "Ojalá llueva mañana.", exampleTranslation: "Keşke yarın yağmur yağsa." },
    { word: "Dudo que", meaning: "Şüpheliyim ki", pronunciation: "DU-do ke", example: "Dudo que venga.", exampleTranslation: "Geleceğinden şüpheliyim." },
    { word: "Es posible que", meaning: "Mümkün ki", pronunciation: "es po-SI-ble ke", example: "Es posible que llegue tarde.", exampleTranslation: "Geç kalmam mümkün." },
    { word: "Es necesario que", meaning: "Gerekli ki", pronunciation: "es ne-se-SA-rio ke", example: "Es necesario que estudies.", exampleTranslation: "Çalışman gerekli." },
    { word: "Tal vez", meaning: "Belki", pronunciation: "tal ves", example: "Tal vez vayamos al cine.", exampleTranslation: "Belki sinemaya gideriz." },
    { word: "Aunque", meaning: "Rağmen/Olsa bile", pronunciation: "AUN-ke", example: "Aunque llueva, iré.", exampleTranslation: "Yağmur yağsa bile gideceğim." },
    { word: "Cuando", meaning: "Zaman (Gelecek)", pronunciation: "KUAN-do", example: "Cuando llegues, llámame.", exampleTranslation: "Geldiğinde beni ara." },
    { word: "Antes de que", meaning: "...dan önce", pronunciation: "AN-tes de ke", example: "Antes de que salgas, come.", exampleTranslation: "Çıkmadan önce ye." }
];

// ===== ÜNİTE 46: ŞART CÜMLELERİ =====
const unit46Vocabulary: B1VocabularyItem[] = [
    { word: "Si", meaning: "Eğer", pronunciation: "si", example: "Si llueve, me quedo en casa.", exampleTranslation: "Eğer yağmur yağarsa evde kalırım." },
    { word: "Podría", meaning: "Yapabilirdim", pronunciation: "po-DRI-a", example: "Podría ayudarte.", exampleTranslation: "Sana yardım edebilirdim." },
    { word: "Sería", meaning: "Olurdu", pronunciation: "se-RI-a", example: "Sería genial ir.", exampleTranslation: "Gitmek harika olurdu." },
    { word: "Tendría", meaning: "Olurdu/Sahip olurdum", pronunciation: "ten-DRI-a", example: "Tendría más tiempo.", exampleTranslation: "Daha fazla zamanım olurdu." },
    { word: "Haría", meaning: "Yapardım", pronunciation: "a-RI-a", example: "Haría cualquier cosa.", exampleTranslation: "Her şeyi yapardım." },
    { word: "Querría", meaning: "İsterdim", pronunciation: "ke-RRI-a", example: "Querría un café.", exampleTranslation: "Bir kahve isterdim." },
    { word: "Debería", meaning: "Yapmalıydım", pronunciation: "de-be-RI-a", example: "Debería estudiar más.", exampleTranslation: "Daha çok çalışmalıydım." },
    { word: "En ese caso", meaning: "O durumda", pronunciation: "en E-se KA-so", example: "En ese caso, me voy.", exampleTranslation: "O durumda gidiyorum." },
    { word: "De lo contrario", meaning: "Aksi takdirde", pronunciation: "de lo kon-TRA-rio", example: "Estudia, de lo contrario suspenderás.", exampleTranslation: "Çalış, yoksa kalırsın." },
    { word: "A menos que", meaning: "... olmadıkça", pronunciation: "a ME-nos ke", example: "Iré a menos que llueva.", exampleTranslation: "Yağmur yağmadıkça gideceğim." }
];

// ===== ÜNİTE 47: ÇEVRE VE DOĞA =====
const unit47Vocabulary: B1VocabularyItem[] = [
    { word: "El medio ambiente", meaning: "Çevre", pronunciation: "ME-dio am-BIEN-te", example: "Proteger el medio ambiente es importante.", exampleTranslation: "Çevreyi korumak önemli." },
    { word: "La contaminación", meaning: "Kirlilik", pronunciation: "kon-ta-mi-na-SION", example: "La contaminación del aire es grave.", exampleTranslation: "Hava kirliliği ciddi." },
    { word: "Reciclar", meaning: "Geri dönüştürmek", pronunciation: "re-si-KLAR", example: "Debemos reciclar más.", exampleTranslation: "Daha çok geri dönüştürmeliyiz." },
    { word: "El cambio climático", meaning: "İklim değişikliği", pronunciation: "KAM-bio kli-MA-ti-ko", example: "El cambio climático afecta a todos.", exampleTranslation: "İklim değişikliği herkesi etkiliyor." },
    { word: "Renovable", meaning: "Yenilenebilir", pronunciation: "re-no-VA-ble", example: "La energía renovable es el futuro.", exampleTranslation: "Yenilenebilir enerji gelecek." },
    { word: "La basura", meaning: "Çöp", pronunciation: "ba-SU-ra", example: "No tires basura al suelo.", exampleTranslation: "Yere çöp atma." },
    { word: "Sostenible", meaning: "Sürdürülebilir", pronunciation: "sos-te-NI-ble", example: "Buscamos un desarrollo sostenible.", exampleTranslation: "Sürdürülebilir kalkınma arıyoruz." },
    { word: "El bosque", meaning: "Orman", pronunciation: "BOS-ke", example: "Los bosques son pulmones del planeta.", exampleTranslation: "Ormanlar gezegenin ciğerleridir." },
    { word: "El calentamiento global", meaning: "Küresel ısınma", pronunciation: "ka-len-ta-MIEN-to glo-BAL", example: "El calentamiento global es real.", exampleTranslation: "Küresel ısınma gerçek." },
    { word: "Proteger", meaning: "Korumak", pronunciation: "pro-te-HER", example: "Debemos proteger la naturaleza.", exampleTranslation: "Doğayı korumalıyız." }
];

// ===== ÜNİTE 48: EĞİTİM VE OKUL =====
const unit48Vocabulary: B1VocabularyItem[] = [
    { word: "La carrera", meaning: "Bölüm/Kariyer", pronunciation: "ka-RRE-ra", example: "Estudio la carrera de medicina.", exampleTranslation: "Tıp bölümü okuyorum." },
    { word: "La beca", meaning: "Burs", pronunciation: "BE-ka", example: "Conseguí una beca para estudiar.", exampleTranslation: "Okumak için burs aldım." },
    { word: "El título", meaning: "Diploma", pronunciation: "TI-tu-lo", example: "Obtuve mi título universitario.", exampleTranslation: "Üniversite diplomamı aldım." },
    { word: "La matrícula", meaning: "Kayıt", pronunciation: "ma-TRI-ku-la", example: "La matrícula es en septiembre.", exampleTranslation: "Kayıt Eylül'de." },
    { word: "Aprobar", meaning: "Geçmek (Sınav)", pronunciation: "a-pro-BAR", example: "Aprobé todos los exámenes.", exampleTranslation: "Tüm sınavları geçtim." },
    { word: "Suspender", meaning: "Kalmak (Sınav)", pronunciation: "sus-pen-DER", example: "Suspendí matemáticas.", exampleTranslation: "Matematikten kaldım." },
    { word: "La asignatura", meaning: "Ders (Müfredat)", pronunciation: "a-sig-na-TU-ra", example: "Mi asignatura favorita es historia.", exampleTranslation: "Favori dersim tarih." },
    { word: "Investigar", meaning: "Araştırmak", pronunciation: "in-ves-ti-GAR", example: "Investigué sobre el tema.", exampleTranslation: "Konu hakkında araştırma yaptım." },
    { word: "El plazo", meaning: "Son tarih", pronunciation: "PLA-so", example: "El plazo es mañana.", exampleTranslation: "Son tarih yarın." },
    { word: "Licenciarse", meaning: "Mezun olmak", pronunciation: "li-sen-SIAR-se", example: "Me licencié en 2020.", exampleTranslation: "2020'de mezun oldum." }
];

// ===== ÜNİTE 49: TEKNOLOJİ VE BİLİM =====
const unit49Vocabulary: B1VocabularyItem[] = [
    { word: "El avance", meaning: "İlerleme", pronunciation: "a-VAN-se", example: "Los avances tecnológicos son rápidos.", exampleTranslation: "Teknolojik ilerlemeler hızlı." },
    { word: "Desarrollar", meaning: "Geliştirmek", pronunciation: "de-sa-rro-LLAR", example: "Desarrollaron una nueva aplicación.", exampleTranslation: "Yeni bir uygulama geliştirdiler." },
    { word: "La inteligencia artificial", meaning: "Yapay zeka", pronunciation: "in-te-li-HEN-sia ar-ti-fi-SIAL", example: "La IA cambiará el mundo.", exampleTranslation: "Yapay zeka dünyayı değiştirecek." },
    { word: "El dato", meaning: "Veri", pronunciation: "DA-to", example: "Analizamos los datos.", exampleTranslation: "Verileri analiz ettik." },
    { word: "La red", meaning: "Ağ", pronunciation: "red", example: "Estoy conectado a la red.", exampleTranslation: "Ağa bağlıyım." },
    { word: "Innovar", meaning: "Yenilik yapmak", pronunciation: "in-no-VAR", example: "Las empresas deben innovar.", exampleTranslation: "Şirketler yenilik yapmalı." },
    { word: "El algoritmo", meaning: "Algoritma", pronunciation: "al-go-RIT-mo", example: "El algoritmo es complejo.", exampleTranslation: "Algoritma karmaşık." },
    { word: "Virtual", meaning: "Sanal", pronunciation: "vir-TUAL", example: "La reunión será virtual.", exampleTranslation: "Toplantı sanal olacak." },
    { word: "El experimento", meaning: "Deney", pronunciation: "eks-pe-ri-MEN-to", example: "El experimento fue exitoso.", exampleTranslation: "Deney başarılı oldu." },
    { word: "Automatizar", meaning: "Otomatikleştirmek", pronunciation: "au-to-ma-ti-SAR", example: "Automatizaron el proceso.", exampleTranslation: "Süreci otomatikleştirdiler." }
];

// ===== ÜNİTE 50: MEDYA VE HABERLER =====
const unit50Vocabulary: B1VocabularyItem[] = [
    { word: "La noticia", meaning: "Haber", pronunciation: "no-TI-sia", example: "Leí una noticia interesante.", exampleTranslation: "İlginç bir haber okudum." },
    { word: "El periódico", meaning: "Gazete", pronunciation: "pe-RI-o-di-ko", example: "Leo el periódico cada mañana.", exampleTranslation: "Her sabah gazete okurum." },
    { word: "La prensa", meaning: "Basın", pronunciation: "PREN-sa", example: "La prensa investiga el caso.", exampleTranslation: "Basın olayı araştırıyor." },
    { word: "El titular", meaning: "Başlık", pronunciation: "ti-tu-LAR", example: "El titular es impactante.", exampleTranslation: "Başlık çarpıcı." },
    { word: "Entrevistar", meaning: "Röportaj yapmak", pronunciation: "en-tre-vis-TAR", example: "Entrevistaron al presidente.", exampleTranslation: "Cumhurbaşkanıyla röportaj yaptılar." },
    { word: "Publicar", meaning: "Yayınlamak", pronunciation: "pu-bli-KAR", example: "Publicaron el artículo.", exampleTranslation: "Makaleyi yayınladılar." },
    { word: "La fuente", meaning: "Kaynak", pronunciation: "FUEN-te", example: "La fuente es confiable.", exampleTranslation: "Kaynak güvenilir." },
    { word: "Informar", meaning: "Bilgilendirmek", pronunciation: "in-for-MAR", example: "Te informaremos de los cambios.", exampleTranslation: "Değişiklikler hakkında seni bilgilendireceğiz." },
    { word: "El reportaje", meaning: "Haber/Röportaj", pronunciation: "re-por-TA-he", example: "Vi un reportaje sobre África.", exampleTranslation: "Afrika hakkında bir röportaj izledim." },
    { word: "En directo", meaning: "Canlı yayın", pronunciation: "en di-REK-to", example: "La transmisión es en directo.", exampleTranslation: "Yayın canlı." }
];

// ===== ÜNİTE 51: SAĞLIK VE BESLENME =====
const unit51Vocabulary: B1VocabularyItem[] = [
    { word: "La dieta", meaning: "Diyet", pronunciation: "DIE-ta", example: "Sigo una dieta equilibrada.", exampleTranslation: "Dengeli bir diyet yapıyorum." },
    { word: "Saludable", meaning: "Sağlıklı", pronunciation: "sa-lu-DA-ble", example: "Comer frutas es saludable.", exampleTranslation: "Meyve yemek sağlıklıdır." },
    { word: "El nutriente", meaning: "Besin maddesi", pronunciation: "nu-tri-EN-te", example: "Las verduras tienen muchos nutrientes.", exampleTranslation: "Sebzeler çok besin maddesi içerir." },
    { word: "La grasa", meaning: "Yağ", pronunciation: "GRA-sa", example: "Evita las grasas saturadas.", exampleTranslation: "Doymuş yağlardan kaçın." },
    { word: "El carbohidrato", meaning: "Karbonhidrat", pronunciation: "kar-bo-i-DRA-to", example: "El arroz tiene carbohidratos.", exampleTranslation: "Pirinç karbonhidrat içerir." },
    { word: "La proteína", meaning: "Protein", pronunciation: "pro-te-I-na", example: "La carne tiene proteínas.", exampleTranslation: "Et protein içerir." },
    { word: "Adelgazar", meaning: "Zayıflamak", pronunciation: "a-del-ga-SAR", example: "Quiero adelgazar 5 kilos.", exampleTranslation: "5 kilo vermek istiyorum." },
    { word: "Engordar", meaning: "Şişmanlamak", pronunciation: "en-gor-DAR", example: "Comer mucho te hace engordar.", exampleTranslation: "Çok yemek seni şişmanlatır." },
    { word: "El bienestar", meaning: "Esenlik/Refah", pronunciation: "bien-es-TAR", example: "Busco mi bienestar.", exampleTranslation: "Kendi esenliğimi arıyorum." },
    { word: "Equilibrado", meaning: "Dengeli", pronunciation: "e-ki-li-BRA-do", example: "Una alimentación equilibrada.", exampleTranslation: "Dengeli bir beslenme." }
];

// ===== ÜNİTE 52: İLİŞKİLER VE SOSYAL HAYAT =====
const unit52Vocabulary: B1VocabularyItem[] = [
    { word: "La amistad", meaning: "Dostluk", pronunciation: "a-mis-TAD", example: "La amistad es valiosa.", exampleTranslation: "Dostluk değerlidir." },
    { word: "La pareja", meaning: "Çift/Partner", pronunciation: "pa-RE-ha", example: "Mi pareja es muy amable.", exampleTranslation: "Partnerim çok nazik." },
    { word: "Enamorarse", meaning: "Aşık olmak", pronunciation: "e-na-mo-RAR-se", example: "Me enamoré de ella.", exampleTranslation: "Ona aşık oldum." },
    { word: "Discutir", meaning: "Tartışmak", pronunciation: "dis-ku-TIR", example: "Discutimos sobre el tema.", exampleTranslation: "Konu hakkında tartıştık." },
    { word: "Reconciliarse", meaning: "Barışmak", pronunciation: "re-kon-si-LIAR-se", example: "Nos reconciliamos después.", exampleTranslation: "Sonra barıştık." },
    { word: "Confiar", meaning: "Güvenmek", pronunciation: "kon-fi-AR", example: "Confío en ti.", exampleTranslation: "Sana güveniyorum." },
    { word: "Perdonar", meaning: "Affetmek", pronunciation: "per-do-NAR", example: "Te perdono.", exampleTranslation: "Seni affediyorum." },
    { word: "El compromiso", meaning: "Taahhüt/Nişan", pronunciation: "kom-pro-MI-so", example: "Tenemos un compromiso.", exampleTranslation: "Bir taahhüdümüz var." },
    { word: "Romper", meaning: "Ayrılmak/Kırmak", pronunciation: "rom-PER", example: "Rompieron hace un mes.", exampleTranslation: "Bir ay önce ayrıldılar." },
    { word: "Apoyar", meaning: "Desteklemek", pronunciation: "a-po-YAR", example: "Siempre te apoyaré.", exampleTranslation: "Her zaman seni destekleyeceğim." }
];

// ===== ÜNİTE 53: SANAT VE KÜLTÜR =====
const unit53Vocabulary: B1VocabularyItem[] = [
    { word: "La obra", meaning: "Eser", pronunciation: "O-bra", example: "Es una obra maestra.", exampleTranslation: "Bu bir başyapıt." },
    { word: "El cuadro", meaning: "Tablo", pronunciation: "KUA-dro", example: "El cuadro es de Picasso.", exampleTranslation: "Tablo Picasso'nun." },
    { word: "La escultura", meaning: "Heykel", pronunciation: "es-kul-TU-ra", example: "La escultura es de mármol.", exampleTranslation: "Heykel mermerden." },
    { word: "El patrimonio", meaning: "Miras/Kültürel varlık", pronunciation: "pa-tri-MO-nio", example: "Patrimonio de la Humanidad.", exampleTranslation: "İnsanlığın mirası." },
    { word: "Contemporáneo", meaning: "Çağdaş", pronunciation: "kon-tem-po-RA-neo", example: "Arte contemporáneo.", exampleTranslation: "Çağdaş sanat." },
    { word: "La exposición", meaning: "Sergi", pronunciation: "eks-po-si-SION", example: "Fui a la exposición.", exampleTranslation: "Sergiye gittim." },
    { word: "El folclore", meaning: "Halk kültürü", pronunciation: "fol-KLO-re", example: "El folclore español es rico.", exampleTranslation: "İspanyol halk kültürü zengin." },
    { word: "La danza", meaning: "Dans", pronunciation: "DAN-sa", example: "La danza flamenca es pasional.", exampleTranslation: "Flamenko dansı tutkulu." },
    { word: "Interpretar", meaning: "Yorumlamak/Canlandırmak", pronunciation: "in-ter-pre-TAR", example: "Interpreta el papel principal.", exampleTranslation: "Başrol oynuyor." },
    { word: "El género", meaning: "Tür (sanat)", pronunciation: "HE-ne-ro", example: "¿Qué género prefieres?", exampleTranslation: "Hangi türü tercih edersin?" }
];

// ===== ÜNİTE 54: POLİTİKA VE TOPLUM =====
const unit54Vocabulary: B1VocabularyItem[] = [
    { word: "El gobierno", meaning: "Hükümet", pronunciation: "go-BIER-no", example: "El gobierno tomó medidas.", exampleTranslation: "Hükümet önlem aldı." },
    { word: "Votar", meaning: "Oy vermek", pronunciation: "vo-TAR", example: "Votaré en las elecciones.", exampleTranslation: "Seçimlerde oy vereceğim." },
    { word: "El ciudadano", meaning: "Vatandaş", pronunciation: "siu-da-DA-no", example: "Los ciudadanos tienen derechos.", exampleTranslation: "Vatandaşların hakları var." },
    { word: "La ley", meaning: "Yasa", pronunciation: "ley", example: "La ley es igual para todos.", exampleTranslation: "Yasa herkes için eşit." },
    { word: "El derecho", meaning: "Hak", pronunciation: "de-RE-cho", example: "Tengo derecho a votar.", exampleTranslation: "Oy verme hakkım var." },
    { word: "La democracia", meaning: "Demokrasi", pronunciation: "de-mo-KRA-sia", example: "Vivimos en democracia.", exampleTranslation: "Demokraside yaşıyoruz." },
    { word: "El partido", meaning: "Parti (siyasi)", pronunciation: "par-TI-do", example: "Es miembro del partido.", exampleTranslation: "Partinin üyesi." },
    { word: "La manifestación", meaning: "Gösteri", pronunciation: "ma-ni-fes-ta-SION", example: "Hubo una manifestación.", exampleTranslation: "Bir gösteri oldu." },
    { word: "La igualdad", meaning: "Eşitlik", pronunciation: "i-gual-DAD", example: "Luchamos por la igualdad.", exampleTranslation: "Eşitlik için mücadele ediyoruz." },
    { word: "El impuesto", meaning: "Vergi", pronunciation: "im-PUES-to", example: "Pago impuestos.", exampleTranslation: "Vergi ödüyorum." }
];

// ===== ÜNİTE 55: DOLAYLI ANLATIM =====
const unit55Vocabulary: B1VocabularyItem[] = [
    { word: "Dijo que", meaning: "Dedi ki", pronunciation: "DI-ho ke", example: "Dijo que vendría.", exampleTranslation: "Geleceğini söyledi." },
    { word: "Preguntó si", meaning: "... olup olmadığını sordu", pronunciation: "pre-gun-TO si", example: "Preguntó si estaba bien.", exampleTranslation: "İyi olup olmadığımı sordu." },
    { word: "Respondió que", meaning: "Cevapladı ki", pronunciation: "res-pon-DIO ke", example: "Respondió que sí.", exampleTranslation: "Evet diye cevapladı." },
    { word: "Añadió que", meaning: "Ekledi ki", pronunciation: "a-nya-DIO ke", example: "Añadió que llegaría tarde.", exampleTranslation: "Geç kalacağını ekledi." },
    { word: "Explicó que", meaning: "Açıkladı ki", pronunciation: "eks-pli-KO ke", example: "Explicó que estaba ocupado.", exampleTranslation: "Meşgul olduğunu açıkladı." },
    { word: "Comentó que", meaning: "Yorum yaptı ki", pronunciation: "ko-men-TO ke", example: "Comentó que era difícil.", exampleTranslation: "Zor olduğunu belirtti." },
    { word: "Afirmó que", meaning: "Belirtti ki", pronunciation: "a-fir-MO ke", example: "Afirmó que era verdad.", exampleTranslation: "Doğru olduğunu belirtti." },
    { word: "Negó que", meaning: "İnkar etti ki", pronunciation: "ne-GO ke", example: "Negó que lo supiera.", exampleTranslation: "Bildiğini inkar etti." },
    { word: "Prometió que", meaning: "Söz verdi ki", pronunciation: "pro-me-TIO ke", example: "Prometió que ayudaría.", exampleTranslation: "Yardım edeceğine söz verdi." },
    { word: "Sugirió que", meaning: "Önerdi ki", pronunciation: "su-hi-RIO ke", example: "Sugirió que fuéramos.", exampleTranslation: "Gitmemizi önerdi." }
];

// ===== ÜNİTE 56: GEÇMİŞ ZAMAN 3 =====
const unit56Vocabulary: B1VocabularyItem[] = [
    { word: "Había + participio", meaning: "...mıştı", pronunciation: "a-BI-a", example: "Había comido antes de salir.", exampleTranslation: "Çıkmadan önce yemek yemişti." },
    { word: "Ya", meaning: "Zaten/Çoktan", pronunciation: "ya", example: "Ya había llegado.", exampleTranslation: "Çoktan gelmişti." },
    { word: "Todavía no", meaning: "Henüz değil", pronunciation: "to-da-VI-a no", example: "Todavía no había empezado.", exampleTranslation: "Henüz başlamamıştı." },
    { word: "Nunca", meaning: "Hiç", pronunciation: "NUN-ka", example: "Nunca había visto eso.", exampleTranslation: "Bunu hiç görmemişti." },
    { word: "Antes", meaning: "Önce", pronunciation: "AN-tes", example: "Antes había estudiado latín.", exampleTranslation: "Önce Latince okumuştu." },
    { word: "Después de que", meaning: "...den sonra", pronunciation: "des-PUES de ke", example: "Después de que había terminado.", exampleTranslation: "Bitirdikten sonra." },
    { word: "Previamente", meaning: "Önceden", pronunciation: "pre-via-MEN-te", example: "Previamente había avisado.", exampleTranslation: "Önceden uyarmıştı." },
    { word: "Por primera vez", meaning: "İlk kez", pronunciation: "por pri-ME-ra ves", example: "Era la primera vez que había ido.", exampleTranslation: "İlk kez gitmişti." },
    { word: "Anteriormente", meaning: "Daha önce", pronunciation: "an-te-rior-MEN-te", example: "Anteriormente había trabajado allí.", exampleTranslation: "Daha önce orada çalışmıştı." },
    { word: "De repente", meaning: "Aniden", pronunciation: "de re-PEN-te", example: "De repente, todo había cambiado.", exampleTranslation: "Aniden her şey değişmişti." }
];

// ===== ÜNİTE 57: BAĞLAÇLAR (POR VS PARA) =====
const unit57Vocabulary: B1VocabularyItem[] = [
    { word: "Por", meaning: "Yüzünden/İçin", pronunciation: "por", example: "Gracias por tu ayuda.", exampleTranslation: "Yardımın için teşekkürler." },
    { word: "Para", meaning: "İçin (Amaç)", pronunciation: "PA-ra", example: "Estudio para aprender.", exampleTranslation: "Öğrenmek için çalışıyorum." },
    { word: "Por eso", meaning: "Bu yüzden", pronunciation: "por E-so", example: "Por eso estoy aquí.", exampleTranslation: "Bu yüzden buradayım." },
    { word: "Para que", meaning: "... olması için", pronunciation: "PA-ra ke", example: "Te lo digo para que lo sepas.", exampleTranslation: "Bilmen için söylüyorum." },
    { word: "Por lo tanto", meaning: "Dolayısıyla", pronunciation: "por lo TAN-to", example: "Por lo tanto, no iré.", exampleTranslation: "Dolayısıyla gitmeyeceğim." },
    { word: "Sin embargo", meaning: "Ancak/Bununla birlikte", pronunciation: "sin em-BAR-go", example: "Sin embargo, lo intenté.", exampleTranslation: "Ancak denedim." },
    { word: "Además", meaning: "Ayrıca", pronunciation: "a-de-MAS", example: "Además, quiero agregar algo.", exampleTranslation: "Ayrıca bir şey eklemek istiyorum." },
    { word: "En cambio", meaning: "Bunun yerine", pronunciation: "en KAM-bio", example: "En cambio, prefiero el té.", exampleTranslation: "Bunun yerine çayı tercih ederim." },
    { word: "Mientras que", meaning: "... iken", pronunciation: "MIEN-tras ke", example: "Yo trabajo mientras que tú descansas.", exampleTranslation: "Sen dinlenirken ben çalışıyorum." },
    { word: "A pesar de", meaning: "... rağmen", pronunciation: "a pe-SAR de", example: "A pesar de la lluvia, salí.", exampleTranslation: "Yağmura rağmen çıktım." }
];

// ===== ÜNİTE 58: DEYİMLER VE ATASÖZLERİ =====
const unit58Vocabulary: B1VocabularyItem[] = [
    { word: "Costar un ojo de la cara", meaning: "Çok pahalı olmak", pronunciation: "kos-TAR un O-ho", example: "El coche le costó un ojo de la cara.", exampleTranslation: "Araba ona çok pahalıya patladı." },
    { word: "No tener pelos en la lengua", meaning: "Lafı eğip bükmemek", pronunciation: "no te-NER PE-los", example: "No tiene pelos en la lengua.", exampleTranslation: "Lafı eğip bükmez." },
    { word: "Ponerse las pilas", meaning: "Kendine gelmek", pronunciation: "po-NER-se las PI-las", example: "Ponte las pilas para el examen.", exampleTranslation: "Sınav için kendine gel." },
    { word: "Meter la pata", meaning: "Pot kırmak", pronunciation: "me-TER la PA-ta", example: "Metí la pata en la reunión.", exampleTranslation: "Toplantıda pot kırdım." },
    { word: "Echar una mano", meaning: "Yardım etmek", pronunciation: "e-CHAR u-na MA-no", example: "¿Me echas una mano?", exampleTranslation: "Bana yardım eder misin?" },
    { word: "Más vale tarde que nunca", meaning: "Geç olsun güç olmasın", pronunciation: "mas VA-le TAR-de", example: "Llegó tarde, pero más vale tarde que nunca.", exampleTranslation: "Geç geldi ama geç olsun güç olmasın." },
    { word: "A quien madruga, Dios le ayuda", meaning: "Erken kalkan yol alır", pronunciation: "a kien ma-DRU-ga", example: "Llegué temprano. A quien madruga...", exampleTranslation: "Erken geldim. Erken kalkan yol alır..." },
    { word: "No hay mal que por bien no venga", meaning: "Her işte bir hayır vardır", pronunciation: "no ay mal ke por bien", example: "Perdí el tren pero conocí a alguien. No hay mal...", exampleTranslation: "Treni kaçırdım ama biriyle tanıştım. Her işte..." },
    { word: "Estar en las nubes", meaning: "Dalgın olmak", pronunciation: "es-TAR en las NU-bes", example: "Hoy estás en las nubes.", exampleTranslation: "Bugün çok dalgınsın." },
    { word: "Tirar la casa por la ventana", meaning: "Parayı su gibi harcamak", pronunciation: "ti-RAR la KA-sa", example: "Tiraron la casa por la ventana en la fiesta.", exampleTranslation: "Partide parayı su gibi harcadılar." }
];

// ===== ÜNİTE 59: İŞ DÜNYASI (İLERİ) =====
const unit59Vocabulary: B1VocabularyItem[] = [
    { word: "La empresa", meaning: "Şirket", pronunciation: "em-PRE-sa", example: "Trabajo en una empresa grande.", exampleTranslation: "Büyük bir şirkette çalışıyorum." },
    { word: "El contrato", meaning: "Sözleşme", pronunciation: "kon-TRA-to", example: "Firmé el contrato.", exampleTranslation: "Sözleşmeyi imzaladım." },
    { word: "Despedir", meaning: "İşten çıkarmak", pronunciation: "des-pe-DIR", example: "Lo despidieron ayer.", exampleTranslation: "Dün işten çıkardılar." },
    { word: "Contratar", meaning: "İşe almak", pronunciation: "kon-tra-TAR", example: "Van a contratar más gente.", exampleTranslation: "Daha fazla insan işe alacaklar." },
    { word: "El aumento", meaning: "Zam", pronunciation: "au-MEN-to", example: "Pedí un aumento de sueldo.", exampleTranslation: "Maaş zammı istedim." },
    { word: "El jefe", meaning: "Patron", pronunciation: "HE-fe", example: "Mi jefe es muy estricto.", exampleTranslation: "Patronum çok sert." },
    { word: "El empleado", meaning: "Çalışan", pronunciation: "em-ple-A-do", example: "Los empleados están contentos.", exampleTranslation: "Çalışanlar mutlu." },
    { word: "La reunión", meaning: "Toplantı", pronunciation: "re-u-NION", example: "Tengo una reunión a las 3.", exampleTranslation: "Saat 3'te toplantım var." },
    { word: "Presentar", meaning: "Sunmak", pronunciation: "pre-sen-TAR", example: "Voy a presentar el proyecto.", exampleTranslation: "Projeyi sunacağım." },
    { word: "Negociar", meaning: "Pazarlık etmek", pronunciation: "ne-go-SIAR", example: "Negociamos el precio.", exampleTranslation: "Fiyatı pazarlık ettik." }
];

// ===== ÜNİTE 60: B1 GENEL TEKRAR =====
const unit60Vocabulary: B1VocabularyItem[] = [
    { word: "Lograr", meaning: "Başarmak", pronunciation: "lo-GRAR", example: "Logré mi objetivo.", exampleTranslation: "Hedefime ulaştım." },
    { word: "Mejorar", meaning: "İyileştirmek", pronunciation: "me-ho-RAR", example: "Quiero mejorar mi español.", exampleTranslation: "İspanyolcamı geliştirmek istiyorum." },
    { word: "Dominar", meaning: "Hakim olmak", pronunciation: "do-mi-NAR", example: "Domino tres idiomas.", exampleTranslation: "Üç dile hakimim." },
    { word: "Comunicarse", meaning: "İletişim kurmak", pronunciation: "ko-mu-ni-KAR-se", example: "Es importante comunicarse bien.", exampleTranslation: "İyi iletişim kurmak önemli." },
    { word: "Expresar", meaning: "İfade etmek", pronunciation: "eks-pre-SAR", example: "Puedo expresar mis ideas.", exampleTranslation: "Fikirlerimi ifade edebiliyorum." },
    { word: "Comprender", meaning: "Anlamak", pronunciation: "kom-pren-DER", example: "Ahora comprendo mejor.", exampleTranslation: "Artık daha iyi anlıyorum." },
    { word: "Avanzar", meaning: "İlerlemek", pronunciation: "a-van-SAR", example: "Avanzo rápidamente.", exampleTranslation: "Hızlı ilerliyorum." },
    { word: "Superar", meaning: "Aşmak/Geçmek", pronunciation: "su-pe-RAR", example: "Superé mis miedos.", exampleTranslation: "Korkularımı aştım." },
    { word: "El nivel", meaning: "Seviye", pronunciation: "ni-VEL", example: "Llegué al nivel B1.", exampleTranslation: "B1 seviyesine ulaştım." },
    { word: "Felicidades", meaning: "Tebrikler", pronunciation: "fe-li-si-DA-des", example: "¡Felicidades! Terminaste B1.", exampleTranslation: "Tebrikler! B1'i bitirdin." }
];

// ===== YENİ B1 ÜNİTELERİ (71-75) =====

// ===== ÜNİTE 71: İLERİ YAZMA =====
const unit71Vocabulary: B1VocabularyItem[] = [
    { word: "Redactar", meaning: "Kaleme almak", pronunciation: "re-dak-TAR", example: "Redacté un informe.", exampleTranslation: "Bir rapor yazdım." },
    { word: "El párrafo", meaning: "Paragraf", pronunciation: "PA-rra-fo", example: "Escribe un párrafo.", exampleTranslation: "Bir paragraf yaz." },
    { word: "La introducción", meaning: "Giriş", pronunciation: "in-tro-duk-SION", example: "La introducción es importante.", exampleTranslation: "Giriş önemli." },
    { word: "La conclusión", meaning: "Sonuç", pronunciation: "kon-klu-SION", example: "Termina con una conclusión.", exampleTranslation: "Bir sonuçla bitir." },
    { word: "El argumento", meaning: "Argüman", pronunciation: "ar-gu-MEN-to", example: "Tu argumento es válido.", exampleTranslation: "Argümanın geçerli." },
    { word: "Resumir", meaning: "Özetlemek", pronunciation: "re-su-MIR", example: "Resumí el texto.", exampleTranslation: "Metni özetledim." },
    { word: "Citar", meaning: "Alıntı yapmak", pronunciation: "si-TAR", example: "Cité al autor.", exampleTranslation: "Yazardan alıntı yaptım." },
    { word: "Revisar", meaning: "Gözden geçirmek", pronunciation: "re-vi-SAR", example: "Revisa tu texto.", exampleTranslation: "Metnini gözden geçir." },
    { word: "El borrador", meaning: "Taslak", pronunciation: "bo-rra-DOR", example: "Es solo un borrador.", exampleTranslation: "Sadece bir taslak." },
    { word: "Publicar", meaning: "Yayınlamak", pronunciation: "pu-bli-KAR", example: "Voy a publicar mi artículo.", exampleTranslation: "Makalemi yayınlayacağım." }
];

// ===== ÜNİTE 72: DİNLEME BECERİLERİ =====
const unit72Vocabulary: B1VocabularyItem[] = [
    { word: "Captar", meaning: "Kavramak", pronunciation: "kap-TAR", example: "Capté la idea principal.", exampleTranslation: "Ana fikri kavradım." },
    { word: "El acento", meaning: "Aksan", pronunciation: "a-SEN-to", example: "Tiene un acento fuerte.", exampleTranslation: "Güçlü bir aksanı var." },
    { word: "La pronunciación", meaning: "Telaffuz", pronunciation: "pro-nun-sia-SION", example: "Tu pronunciación es buena.", exampleTranslation: "Telaffuzun iyi." },
    { word: "Distinguir", meaning: "Ayırt etmek", pronunciation: "dis-tin-GIR", example: "Distingo los sonidos.", exampleTranslation: "Sesleri ayırt ediyorum." },
    { word: "Prestar atención", meaning: "Dikkat etmek", pronunciation: "pres-TAR a-ten-SION", example: "Presta atención al audio.", exampleTranslation: "Sese dikkat et." },
    { word: "El contexto", meaning: "Bağlam", pronunciation: "kon-TEKS-to", example: "El contexto ayuda a entender.", exampleTranslation: "Bağlam anlamaya yardımcı olur." },
    { word: "Deducir", meaning: "Çıkarım yapmak", pronunciation: "de-du-SIR", example: "Deduje el significado.", exampleTranslation: "Anlamı çıkardım." },
    { word: "La velocidad", meaning: "Hız", pronunciation: "ve-lo-si-DAD", example: "Habla a alta velocidad.", exampleTranslation: "Yüksek hızda konuşuyor." },
    { word: "Nativo", meaning: "Anadili konuşan", pronunciation: "na-TI-vo", example: "Es hablante nativo.", exampleTranslation: "Anadili konuşan." },
    { word: "Transcribir", meaning: "Yazıya dökmek", pronunciation: "trans-kri-BIR", example: "Transcribí la entrevista.", exampleTranslation: "Röportajı yazıya döktüm." }
];

// ===== ÜNİTE 73: İSPANYOL COĞRAFYASI =====
const unit73Vocabulary: B1VocabularyItem[] = [
    { word: "La comunidad autónoma", meaning: "Özerk bölge", pronunciation: "ko-mu-ni-DAD", example: "España tiene 17 comunidades.", exampleTranslation: "İspanya'nın 17 özerk bölgesi var." },
    { word: "La costa", meaning: "Kıyı", pronunciation: "KOS-ta", example: "La Costa Brava es famosa.", exampleTranslation: "Costa Brava ünlü." },
    { word: "La sierra", meaning: "Dağ sırası", pronunciation: "SIE-rra", example: "Sierra Nevada tiene nieve.", exampleTranslation: "Sierra Nevada'da kar var." },
    { word: "El norte", meaning: "Kuzey", pronunciation: "NOR-te", example: "El norte es verde.", exampleTranslation: "Kuzey yeşil." },
    { word: "El sur", meaning: "Güney", pronunciation: "sur", example: "El sur es cálido.", exampleTranslation: "Güney sıcak." },
    { word: "La meseta", meaning: "Yayla", pronunciation: "me-SE-ta", example: "Madrid está en la meseta.", exampleTranslation: "Madrid yaylada." },
    { word: "El clima mediterráneo", meaning: "Akdeniz iklimi", pronunciation: "KLI-ma", example: "Tiene clima mediterráneo.", exampleTranslation: "Akdeniz iklimi var." },
    { word: "La frontera", meaning: "Sınır", pronunciation: "fron-TE-ra", example: "La frontera con Francia.", exampleTranslation: "Fransa sınırı." },
    { word: "La isla", meaning: "Ada", pronunciation: "IS-la", example: "Las Islas Canarias.", exampleTranslation: "Kanarya Adaları." },
    { word: "El río", meaning: "Nehir", pronunciation: "RI-o", example: "El río Ebro es largo.", exampleTranslation: "Ebro nehri uzun." }
];

// ===== ÜNİTE 74: LATİN AMERİKA =====
const unit74Vocabulary: B1VocabularyItem[] = [
    { word: "Latinoamérica", meaning: "Latin Amerika", pronunciation: "la-ti-no-a-ME-ri-ka", example: "Viajé por Latinoamérica.", exampleTranslation: "Latin Amerika'yı gezdim." },
    { word: "El dialecto", meaning: "Lehçe", pronunciation: "dia-LEK-to", example: "Cada país tiene su dialecto.", exampleTranslation: "Her ülkenin lehçesi var." },
    { word: "La selva", meaning: "Orman/Cengel", pronunciation: "SEL-va", example: "La selva amazónica.", exampleTranslation: "Amazon ormanı." },
    { word: "Los Andes", meaning: "And Dağları", pronunciation: "AN-des", example: "Los Andes son magníficos.", exampleTranslation: "And Dağları muhteşem." },
    { word: "El Caribe", meaning: "Karayipler", pronunciation: "ka-RI-be", example: "El Caribe es tropical.", exampleTranslation: "Karayipler tropik." },
    { word: "Mestizo", meaning: "Melez", pronunciation: "mes-TI-so", example: "La cultura mestiza.", exampleTranslation: "Melez kültür." },
    { word: "Indígena", meaning: "Yerli", pronunciation: "in-DI-he-na", example: "Pueblos indígenas.", exampleTranslation: "Yerli halklar." },
    { word: "El tango", meaning: "Tango", pronunciation: "TAN-go", example: "El tango es de Argentina.", exampleTranslation: "Tango Arjantin'den." },
    { word: "La cumbia", meaning: "Kumbia", pronunciation: "KUM-bia", example: "La cumbia es popular.", exampleTranslation: "Kumbia popüler." },
    { word: "El mariachi", meaning: "Mariachi", pronunciation: "ma-ria-CHI", example: "Música de mariachi.", exampleTranslation: "Mariachi müziği." }
];

// ===== ÜNİTE 75: B1 FİNAL TEKRAR =====
const unit75Vocabulary: B1VocabularyItem[] = [
    { word: "Consolidar", meaning: "Pekiştirmek", pronunciation: "kon-so-li-DAR", example: "Consolidé mis conocimientos.", exampleTranslation: "Bilgilerimi pekiştirdim." },
    { word: "Profundizar", meaning: "Derinleştirmek", pronunciation: "pro-fun-di-SAR", example: "Quiero profundizar más.", exampleTranslation: "Daha fazla derinleşmek istiyorum." },
    { word: "Fluidez", meaning: "Akıcılık", pronunciation: "flu-i-DES", example: "Hablo con más fluidez.", exampleTranslation: "Daha akıcı konuşuyorum." },
    { word: "La competencia", meaning: "Yeterlilik", pronunciation: "kom-pe-TEN-sia", example: "Tengo competencia B1.", exampleTranslation: "B1 yeterliliğim var." },
    { word: "Perfeccionar", meaning: "Mükemmelleştirmek", pronunciation: "per-fek-sio-NAR", example: "Quiero perfeccionar mi español.", exampleTranslation: "İspanyolcamı mükemmelleştirmek istiyorum." },
    { word: "El reto", meaning: "Zorluk/Meydan okuma", pronunciation: "RE-to", example: "Cada día es un nuevo reto.", exampleTranslation: "Her gün yeni bir zorluk." },
    { word: "Persistir", meaning: "Israr etmek", pronunciation: "per-sis-TIR", example: "Hay que persistir.", exampleTranslation: "Israr etmek gerekir." },
    { word: "El éxito", meaning: "Başarı", pronunciation: "EK-si-to", example: "El éxito requiere trabajo.", exampleTranslation: "Başarı çalışma gerektirir." },
    { word: "Graduarse", meaning: "Mezun olmak", pronunciation: "gra-du-AR-se", example: "Me gradué de B1.", exampleTranslation: "B1'den mezun oldum." },
    { word: "¡Enhorabuena!", meaning: "Tebrikler!", pronunciation: "en-o-ra-BUE-na", example: "¡Enhorabuena! Terminaste B1.", exampleTranslation: "Tebrikler! B1'i bitirdin." }
];

// B1 kelime getirme fonksiyonu (ID: 51-75)
export function getB1VocabularyForUnit(unitId: number): B1VocabularyItem[] {
    // Eski unit değişkenlerini yeni ID'lere eşle
    const idMapping: { [key: number]: B1VocabularyItem[] } = {
        51: unit41Vocabulary, 52: unit42Vocabulary, 53: unit43Vocabulary, 54: unit44Vocabulary, 55: unit45Vocabulary,
        56: unit46Vocabulary, 57: unit47Vocabulary, 58: unit48Vocabulary, 59: unit49Vocabulary, 60: unit50Vocabulary,
        61: unit51Vocabulary, 62: unit52Vocabulary, 63: unit53Vocabulary, 64: unit54Vocabulary, 65: unit55Vocabulary,
        66: unit56Vocabulary, 67: unit57Vocabulary, 68: unit58Vocabulary, 69: unit59Vocabulary, 70: unit60Vocabulary,
        71: unit71Vocabulary, 72: unit72Vocabulary, 73: unit73Vocabulary, 74: unit74Vocabulary, 75: unit75Vocabulary
    };
    return idMapping[unitId] || unit41Vocabulary;
}

