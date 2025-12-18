/**
 * LinguaFlow Konuşma Veritabanı - İspanyolca B1
 * Ünite 41-60 için konuşma içerikleri
 */

import { UnitSpeaking, SpeakingExercise } from './speakings';

const unit41Speaking: UnitSpeaking = {
    unitId: 41, title: "Gelecek Planları", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El año que viene voy a empezar un máster en administración de empresas.", translation: "Gelecek yıl işletme yüksek lisansına başlayacağım." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Dentro de cinco años espero estar trabajando en el extranjero.", translation: "Beş yıl içinde yurt dışında çalışıyor olmayı umuyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles son tus planes para el futuro?", translation: "Gelecek için planların ne?", expectedKeywords: ["voy", "quiero", "espero", "planeo", "futuro", "trabajar", "estudiar"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Dónde te ves en diez años?", translation: "On yıl sonra kendini nerede görüyorsun?", expectedKeywords: ["veo", "espero", "mundo", "familia", "carrera", "casa"] },
    ]
};

const unit42Speaking: UnitSpeaking = {
    unitId: 42, title: "Koşullu Durumlar", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Si tuviera más tiempo, aprendería a tocar el piano.", translation: "Daha fazla zamanım olsaydı, piyano çalmayı öğrenirdim." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Si pudiera cambiar algo de mi pasado, estudiaría medicina.", translation: "Geçmişimden bir şeyi değiştirebilseydim, tıp okurdum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué harías si ganaras la lotería?", translation: "Piyango kazansaydın ne yapardın?", expectedKeywords: ["compraría", "viajaría", "ayudaría", "donaría", "dejaría"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "Si pudieras vivir en cualquier país, ¿cuál elegirías?", translation: "Herhangi bir ülkede yaşayabilseydin hangisini seçerdin?", expectedKeywords: ["elegiría", "viviría", "porque", "clima", "cultura", "oportunidades"] },
    ]
};

const unit43Speaking: UnitSpeaking = {
    unitId: 43, title: "Çevre Tartışması", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Es importante que reciclemos para proteger el medio ambiente.", translation: "Çevreyi korumak için geri dönüşüm yapmamız önemli." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Deberíamos usar más transporte público para reducir la contaminación.", translation: "Kirliliği azaltmak için daha çok toplu taşıma kullanmalıyız." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué haces para ayudar al medio ambiente?", translation: "Çevreye yardım etmek için ne yapıyorsun?", expectedKeywords: ["reciclo", "uso", "ahorro", "evito", "plástico", "agua", "energía"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuál crees que es el mayor problema ambiental?", translation: "En büyük çevre sorunu ne sence?", expectedKeywords: ["creo", "cambio", "climático", "contaminación", "plástico", "deforestación"] },
    ]
};

const unit44Speaking: UnitSpeaking = {
    unitId: 44, title: "Subjuntivo İfadeleri", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Espero que tengas un buen día y que todo te salga bien.", translation: "Güzel bir gün geçirmeni ve her şeyin yolunda gitmesini umuyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Es necesario que practiques español todos los días.", translation: "Her gün İspanyolca pratik yapman gerekli." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué esperas que pase este año?", translation: "Bu yıl ne olmasını umuyorsun?", expectedKeywords: ["espero", "que", "encuentre", "consiga", "viaje", "mejore"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué te gustaría que cambiara en el mundo?", translation: "Dünyada neyin değişmesini isterdin?", expectedKeywords: ["gustaría", "que", "hubiera", "menos", "más", "paz", "igualdad"] },
    ]
};

const unit45Speaking: UnitSpeaking = {
    unitId: 45, title: "Haberler Tartışması", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Según las últimas noticias, la economía está mejorando.", translation: "Son haberlere göre ekonomi iyileşiyor." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Los expertos opinan que debemos tomar medidas urgentes.", translation: "Uzmanlar acil önlem almamız gerektiğini düşünüyor." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo te informas de las noticias?", translation: "Haberlerden nasıl haberdar oluyorsun?", expectedKeywords: ["leo", "veo", "escucho", "periódico", "televisión", "internet", "redes"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Crees que los medios son objetivos?", translation: "Medyanın objektif olduğunu düşünüyor musun?", expectedKeywords: ["creo", "no", "depende", "algunos", "sesgo", "opinión", "información"] },
    ]
};

const unit46Speaking: UnitSpeaking = {
    unitId: 46, title: "Ekonomi Tartışması", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La inflación ha subido y los precios están más altos.", translation: "Enflasyon yükseldi ve fiyatlar daha yüksek." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Es importante ahorrar para el futuro y evitar deudas innecesarias.", translation: "Gelecek için tasarruf etmek ve gereksiz borçlardan kaçınmak önemli." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo gestionas tu dinero?", translation: "Paranı nasıl yönetiyorsun?", expectedKeywords: ["ahorro", "gasto", "presupuesto", "control", "inversión", "banco"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué opinas de la situación económica actual?", translation: "Mevcut ekonomik durum hakkında ne düşünüyorsun?", expectedKeywords: ["opino", "creo", "difícil", "mejorando", "precios", "empleo", "crisis"] },
    ]
};

const unit47Speaking: UnitSpeaking = {
    unitId: 47, title: "Kültür ve Gelenekler", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "En España es tradición comer las doce uvas en Nochevieja.", translation: "İspanya'da yılbaşı gecesi on iki üzüm yemek gelenektir." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Cada región tiene sus propias fiestas y costumbres.", translation: "Her bölgenin kendi festivalleri ve gelenekleri var." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es la tradición más importante de tu país?", translation: "Ülkenin en önemli geleneği ne?", expectedKeywords: ["tradición", "celebramos", "familia", "comida", "fiesta", "importante"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué diferencias culturales has notado con España?", translation: "İspanya ile hangi kültürel farklılıklar fark ettin?", expectedKeywords: ["diferencia", "España", "comida", "horario", "siesta", "familia", "costumbres"] },
    ]
};

const unit48Speaking: UnitSpeaking = {
    unitId: 48, title: "Tartışma Becerileri", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Desde mi punto de vista, la educación debería ser gratuita para todos.", translation: "Benim bakış açımdan eğitim herkes için ücretsiz olmalı." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Entiendo tu posición, pero no estoy completamente de acuerdo.", translation: "Pozisyonunu anlıyorum ama tamamen aynı fikirde değilim." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué opinas del trabajo remoto?", translation: "Uzaktan çalışma hakkında ne düşünüyorsün?", expectedKeywords: ["opino", "creo", "ventajas", "desventajas", "flexibilidad", "productividad"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo expresarías tu desacuerdo educadamente?", translation: "Kibar bir şekilde katılmadığını nasıl ifade edersin?", expectedKeywords: ["respeto", "opinión", "pero", "creo", "quizás", "diferente"] },
    ]
};

// Kısa format: 49-60
const unit49Speaking: UnitSpeaking = {
    unitId: 49, title: "Bankacılık", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Me gustaría abrir una cuenta de ahorro con interés.", translation: "Faizli bir tasarruf hesabı açmak istiyorum." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Qué tipo de cuenta le interesa?", translation: "Ne tür hesapla ilgileniyorsunuz?", expectedKeywords: ["cuenta", "ahorro", "corriente", "interés", "tarjeta"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo puedo hacer una transferencia internacional?", translation: "Uluslararası transfer nasıl yapabilirim?", expectedKeywords: ["necesita", "IBAN", "comisión", "días", "online"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles son los requisitos para un préstamo?", translation: "Kredi için gereksinimler neler?", expectedKeywords: ["requisitos", "ingresos", "nómina", "aval", "documentos"] },
    ]
};

const unit50Speaking: UnitSpeaking = {
    unitId: 50, title: "Sunum Yapma", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Buenos días a todos, hoy voy a presentar los resultados del proyecto.", translation: "Herkese günaydın, bugün proje sonuçlarını sunacağım." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Como pueden ver en este gráfico, las ventas han aumentado un veinte por ciento.", translation: "Bu grafikte görebileceğiniz gibi satışlar yüzde yirmi arttı." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo empezarías una presentación profesional?", translation: "Profesyonel bir sunumu nasıl başlatırsın?", expectedKeywords: ["buenos", "días", "presentar", "hablar", "tema", "agradecer"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué harías si te hacen una pregunta difícil?", translation: "Zor bir soru sorulursa ne yaparsın?", expectedKeywords: ["investigar", "responder", "después", "interesante", "considerar"] },
    ]
};

const unit51Speaking: UnitSpeaking = {
    unitId: 51, title: "Edebiyat Tartışması", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Don Quijote es considerada la primera novela moderna de la historia.", translation: "Don Quijote tarihin ilk modern romanı olarak kabul ediliyor." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es tu libro favorito y por qué?", translation: "En sevdiğin kitap hangisi ve neden?", expectedKeywords: ["favorito", "libro", "porque", "historia", "personajes", "estilo"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Prefieres libros físicos o digitales?", translation: "Fiziksel mi dijital kitapları mı tercih edersin?", expectedKeywords: ["prefiero", "físicos", "digitales", "sensación", "práctico", "ambos"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Por qué crees que la lectura es importante?", translation: "Okumanın neden önemli olduğunu düşünüyorsun?", expectedKeywords: ["importante", "aprender", "vocabulario", "imaginación", "conocimiento", "cultura"] },
    ]
};

const unit52Speaking: UnitSpeaking = {
    unitId: 52, title: "Tarih ve Politika", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La transición española fue un período de cambio pacífico hacia la democracia.", translation: "İspanyol geçişi demokrasiye barışçıl bir değişim dönemiydi." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Te interesa la política?", translation: "Politikayla ilgileniyor musun?", expectedKeywords: ["sí", "no", "interesa", "poco", "mucho", "importante", "ciudadano"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué evento histórico te parece más importante?", translation: "Hangi tarihi olay sana en önemli görünüyor?", expectedKeywords: ["parece", "guerra", "revolución", "democracia", "independencia", "cambió"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Votas en las elecciones?", translation: "Seçimlerde oy veriyor musun?", expectedKeywords: ["sí", "voto", "importante", "derecho", "deber", "ciudadano"] },
    ]
};

const unit53Speaking: UnitSpeaking = {
    unitId: 53, title: "Bilim ve Teknoloji", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La inteligencia artificial está transformando muchos sectores de la economía.", translation: "Yapay zeka ekonominin birçok sektörünü dönüştürüyor." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Qué opinas de la inteligencia artificial?", translation: "Yapay zeka hakkında ne düşünüyorsun?", expectedKeywords: ["opino", "útil", "peligroso", "futuro", "trabajo", "ayuda"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué avance tecnológico te ha impresionado más?", translation: "Hangi teknolojik gelişme seni en çok etkiledi?", expectedKeywords: ["impresionado", "internet", "móvil", "medicina", "espacio", "increíble"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Crees que la tecnología nos hace más felices?", translation: "Teknolojinin bizi daha mutlu yaptığını düşünüyor musun?", expectedKeywords: ["creo", "sí", "no", "depende", "conexión", "aislamiento", "facilita"] },
    ]
};

const unit54Speaking: UnitSpeaking = {
    unitId: 54, title: "Sağlık ve Beslenme", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Una dieta equilibrada y ejercicio regular son fundamentales para la salud.", translation: "Dengeli beslenme ve düzenli egzersiz sağlık için temeldir." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Qué haces para mantener una vida saludable?", translation: "Sağlıklı yaşam için ne yapıyorsun?", expectedKeywords: ["ejercicio", "como", "duermo", "evito", "agua", "frutas", "verduras"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué opinas de las dietas de moda?", translation: "Moda diyetler hakkında ne düşünüyorsun?", expectedKeywords: ["opino", "peligrosas", "útiles", "depende", "equilibrio", "extremas"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuántas horas duermes normalmente?", translation: "Normalde kaç saat uyursun?", expectedKeywords: ["duermo", "horas", "suficiente", "poco", "descanso", "importante"] },
    ]
};

const unit55Speaking: UnitSpeaking = {
    unitId: 55, title: "Dolaylı Anlatım", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Mi amigo me dijo que vendría a la fiesta pero no pudo.", translation: "Arkadaşım partiye geleceğini söyledi ama gelemedi." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "El profesor nos explicó que el examen sería el viernes.", translation: "Profesör sınavın cuma olacağını açıkladı." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué te dijeron tus padres sobre tus planes?", translation: "Ailen planların hakkında ne dedi?", expectedKeywords: ["dijeron", "que", "importante", "apoyaban", "preocupados", "felices"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo explicarías lo que te dijo tu jefe?", translation: "Patronunun sana ne dediğini nasıl açıklarsın?", expectedKeywords: ["dijo", "que", "debía", "tenía", "importante", "proyecto"] },
    ]
};

const unit56Speaking: UnitSpeaking = {
    unitId: 56, title: "Hukuk Temelleri", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Todos los ciudadanos tienen derecho a la educación y la sanidad.", translation: "Tüm vatandaşların eğitim ve sağlık hakkı var." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Conoces tus derechos fundamentales?", translation: "Temel haklarını biliyor musun?", expectedKeywords: ["sí", "derechos", "educación", "salud", "libertad", "voto", "trabajo"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué harías si violaran tus derechos?", translation: "Hakların ihlal edilse ne yaparsın?", expectedKeywords: ["denunciar", "abogado", "tribunal", "policía", "protestar", "quejarme"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Crees que las leyes son justas en tu país?", translation: "Ülkendeki yasaların adil olduğunu düşünüyor musun?", expectedKeywords: ["creo", "justas", "algunas", "mejorar", "depende", "igualdad"] },
    ]
};

const unit57Speaking: UnitSpeaking = {
    unitId: 57, title: "Psikoloji Temelleri", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "La salud mental es tan importante como la salud física.", translation: "Ruh sağlığı fiziksel sağlık kadar önemli." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Cómo manejas el estrés?", translation: "Stresi nasıl yönetirsin?", expectedKeywords: ["manejo", "ejercicio", "respirar", "descanso", "hablar", "música", "naturaleza"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Crees que hay estigma sobre la salud mental?", translation: "Ruh sağlığı hakkında damgalama olduğunu düşünüyor musun?", expectedKeywords: ["creo", "sí", "estigma", "tabú", "cambiar", "normalizar", "hablar"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué consejo darías a alguien con ansiedad?", translation: "Anksiyetesi olan birine ne tavsiye verirsin?", expectedKeywords: ["consejo", "profesional", "ayuda", "respirar", "hablar", "normal", "solo"] },
    ]
};

const unit58Speaking: UnitSpeaking = {
    unitId: 58, title: "Şiir ve Şarkı", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Las letras de las canciones son poesía con música.", translation: "Şarkı sözleri müzikli şiirlerdir." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Tienes una canción que te emocione especialmente?", translation: "Seni özellikle duygusal yapan bir şarkı var mı?", expectedKeywords: ["sí", "canción", "recuerda", "emoción", "letra", "momento", "especial"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Por qué crees que la música conecta con las emociones?", translation: "Müziğin duygularla neden bağ kurduğunu düşünüyorsun?", expectedKeywords: ["creo", "memoria", "sentimientos", "ritmo", "letras", "universal"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Has escrito alguna vez poesía?", translation: "Hiç şiir yazdın mı?", expectedKeywords: ["sí", "no", "escribí", "intenté", "difícil", "expresar", "sentimientos"] },
    ]
};

const unit59Speaking: UnitSpeaking = {
    unitId: 59, title: "İş Dünyası", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Emprender un negocio requiere planificación y determinación.", translation: "İş kurmak planlama ve kararlılık gerektirir." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Te gustaría tener tu propio negocio?", translation: "Kendi işini kurmak ister misin?", expectedKeywords: ["gustaría", "sí", "no", "negocio", "idea", "riesgo", "independencia"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué habilidades son necesarias para emprender?", translation: "Girişimcilik için hangi beceriler gerekli?", expectedKeywords: ["habilidades", "liderazgo", "comunicación", "finanzas", "perseverancia", "creatividad"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles son los retos de un emprendedor?", translation: "Bir girişimcinin zorlukları neler?", expectedKeywords: ["retos", "financiación", "competencia", "tiempo", "incertidumbre", "estrés"] },
    ]
};

const unit60Speaking: UnitSpeaking = {
    unitId: 60, title: "B1 Seviye Özeti", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "He aprendido mucho este año y estoy orgulloso de mi progreso.", translation: "Bu yıl çok şey öğrendim ve ilerlememe gururluyum." },
        { id: 2, type: "respond", prompt: "Cevap ver:", text: "¿Qué has aprendido en el nivel B1?", translation: "B1 seviyesinde ne öğrendin?", expectedKeywords: ["aprendido", "gramática", "vocabulario", "hablar", "entender", "escribir"] },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuál ha sido el tema más difícil para ti?", translation: "Senin için en zor konu ne oldu?", expectedKeywords: ["difícil", "subjuntivo", "condicional", "verbos", "pronunciación"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles son tus objetivos para el nivel B2?", translation: "B2 seviyesi için hedeflerin ne?", expectedKeywords: ["objetivos", "mejorar", "fluidez", "vocabulario", "conversación", "nativo"] },
    ]
};

// ===== YENİ B1 ÜNİTELERİ (71-75) =====

const unit71Speaking: UnitSpeaking = {
    unitId: 71, title: "İleri Yazma", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "En primer lugar, quiero explicar mi punto de vista sobre este tema.", translation: "İlk olarak, bu konu hakkındaki bakış açımı açıklamak istiyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "En conclusión, creo que debemos actuar con responsabilidad.", translation: "Sonuç olarak, sorumluluğla hareket etmemiz gerektiğini düşünüyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo empezarías un texto argumentativo?", translation: "Bir tartışma yazısına nasıl başlarsın?", expectedKeywords: ["primer", "lugar", "tema", "opinión", "considero", "importante"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué conectores usas para dar ejemplos?", translation: "Örnek vermek için hangi bağlaçları kullanırsın?", expectedKeywords: ["ejemplo", "además", "también", "igualmente", "caso"] },
    ]
};

const unit72Speaking: UnitSpeaking = {
    unitId: 72, title: "Dinleme Becerileri", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¿Puede repetir eso más despacio, por favor?", translation: "Lütfen bunu daha yavaş tekrar edebilir misiniz?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "No he entendido bien, ¿puede explicarlo de otra manera?", translation: "İyi anlamadım, başka şekilde açıklayabilir misiniz?" },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué haces cuando no entiendes algo en español?", translation: "İspanyolca'da bir şey anlamadığında ne yaparsın?", expectedKeywords: ["pregunto", "repita", "contexto", "adivino", "pido", "ayuda"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo practicas la comprensión auditiva?", translation: "Dinleme anlamayı nasıl pratik ediyorsun?", expectedKeywords: ["escucho", "películas", "podcasts", "música", "series", "noticias"] },
    ]
};

const unit73Speaking: UnitSpeaking = {
    unitId: 73, title: "İspanyol Coğrafyası", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "España tiene 17 comunidades autónomas con diferentes culturas.", translation: "İspanya'nın farklı kültürlere sahip 17 özerk bölgesi var." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "El sur de España tiene un clima mediterráneo muy agradable.", translation: "İspanya'nın güneyi çok hoş bir Akdeniz iklimine sahip." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué ciudades españolas te gustaría visitar?", translation: "Hangi İspanyol şehirlerini ziyaret etmek istersin?", expectedKeywords: ["gustaría", "visitar", "Madrid", "Barcelona", "Sevilla", "Valencia", "Granada"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué diferencias geográficas hay entre el norte y el sur de España?", translation: "İspanya'nın kuzeyi ve güneyi arasında hangi coğrafi farklar var?", expectedKeywords: ["norte", "sur", "verde", "seco", "lluvia", "clima", "montañas"] },
    ]
};

const unit74Speaking: UnitSpeaking = {
    unitId: 74, title: "Latin Amerika", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "El español latinoamericano tiene muchas variantes interesantes.", translation: "Latin Amerika İspanyolcası birçok ilginç varyanta sahip." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "En Argentina dicen 'vos' en lugar de 'tú'.", translation: "Arjantin'de 'tú' yerine 'vos' diyorlar." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué países latinoamericanos te interesan más?", translation: "Hangi Latin Amerika ülkeleri seni daha çok ilgilendiriyor?", expectedKeywords: ["interesa", "México", "Argentina", "Colombia", "Perú", "Chile", "cultura"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Conoces alguna diferencia entre el español de España y el de México?", translation: "İspanya İspanyolcası ile Meksika'nınki arasında bir fark biliyor musun?", expectedKeywords: ["diferencia", "carro", "coche", "computadora", "ordenador", "celular"] },
    ]
};

const unit75Speaking: UnitSpeaking = {
    unitId: 75, title: "B1 Final Tekrar", language: "İspanyolca", level: "B1", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "¡Felicidades! Has completado el nivel B1 con éxito.", translation: "Tebrikler! B1 seviyesini başarıyla tamamladın." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Ahora puedo expresar mis opiniones y entender conversaciones complejas.", translation: "Artık görüşlerimi ifade edebiliyor ve karmaşık konuşmaları anlayabiliyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo te sientes al terminar el nivel B1?", translation: "B1 seviyesini bitirdiğinde nasıl hissediyorsun?", expectedKeywords: ["feliz", "orgulloso", "satisfecho", "motivado", "preparado", "emocionado"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué te gustaría hacer ahora que hablas español mejor?", translation: "Artık daha iyi İspanyolca konuştuğuna göre ne yapmak istersin?", expectedKeywords: ["viajar", "trabajar", "estudiar", "conocer", "películas", "libros", "conversación"] },
    ]
};

// B1 speakings listesi (ID: 51-75)
const b1Speakings: { [key: number]: UnitSpeaking } = {
    // Eski unit değişkenlerini yeni ID'lere eşle
    51: unit41Speaking, 52: unit42Speaking, 53: unit43Speaking, 54: unit44Speaking, 55: unit45Speaking,
    56: unit46Speaking, 57: unit47Speaking, 58: unit48Speaking, 59: unit49Speaking, 60: unit50Speaking,
    61: unit51Speaking, 62: unit52Speaking, 63: unit53Speaking, 64: unit54Speaking, 65: unit55Speaking,
    66: unit56Speaking, 67: unit57Speaking, 68: unit58Speaking, 69: unit59Speaking, 70: unit60Speaking,
    // Yeni üniteler (71-75)
    71: unit71Speaking, 72: unit72Speaking, 73: unit73Speaking, 74: unit74Speaking, 75: unit75Speaking
};

export function getB1SpeakingForUnit(unitId: number): UnitSpeaking | undefined {
    return b1Speakings[unitId];
}
