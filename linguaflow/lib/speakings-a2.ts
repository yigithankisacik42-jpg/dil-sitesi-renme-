/**
 * LinguaFlow Konuşma Veritabanı - İspanyolca A2
 * Ünite 21-40 için konuşma içerikleri
 */

import { UnitSpeaking, SpeakingExercise } from './speakings';

// ===== ÜNİTE 21: GEÇMİŞ ZAMAN 1 =====
const unit21Speaking: UnitSpeaking = {
    unitId: 21, title: "Geçmiş Zaman Pratiği", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Ayer fui al cine con mis amigos.", translation: "Dün arkadaşlarımla sinemaya gittim." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "La semana pasada viajé a Barcelona.", translation: "Geçen hafta Barcelona'ya seyahat ettim." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué hiciste ayer?", translation: "Dün ne yaptın?", expectedKeywords: ["fui", "hice", "comí", "vi", "trabajé"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Dónde estuviste el fin de semana?", translation: "Hafta sonu neredeydin?", expectedKeywords: ["estuve", "fui", "casa", "parque", "playa"] },
    ]
};

const unit22Speaking: UnitSpeaking = {
    unitId: 22, title: "Geçmiş Anlatımı", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Cuando era niño, vivía en un pueblo pequeño.", translation: "Çocukken küçük bir kasabada yaşıyordum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Antes íbamos a la playa todos los veranos.", translation: "Eskiden her yaz plaja giderdik." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cómo era tu infancia?", translation: "Çocukluğun nasıldı?", expectedKeywords: ["era", "tenía", "jugaba", "vivía", "gustaba"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué hacías cuando tenías diez años?", translation: "On yaşındayken ne yapardın?", expectedKeywords: ["jugaba", "estudiaba", "veía", "iba", "tenía"] },
    ]
};

const unit23Speaking: UnitSpeaking = {
    unitId: 23, title: "Restoranda Sipariş", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Buenas noches, una mesa para dos, por favor.", translation: "İyi akşamlar, iki kişilik bir masa lütfen." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "De primero quiero la sopa y de segundo el pescado.", translation: "İlk yemek olarak çorba, ana yemek olarak balık istiyorum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué desea de beber?", translation: "Ne içmek istersiniz?", expectedKeywords: ["agua", "vino", "cerveza", "refresco", "zumo"] },
        { id: 4, type: "respond", prompt: "Garson olarak cevap ver:", text: "La cuenta, por favor.", translation: "Hesap lütfen.", expectedKeywords: ["son", "euros", "aquí", "tiene", "tarjeta", "efectivo"] },
    ]
};

const unit24Speaking: UnitSpeaking = {
    unitId: 24, title: "Alışveriş Diyaloğu", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Disculpe, ¿cuánto cuesta esta camiseta?", translation: "Afedersiniz, bu tişört kaç para?" },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "¿Puedo probarme estos pantalones en la talla M?", translation: "Bu pantolonu M beden deneyebilir miyim?" },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿En qué puedo ayudarle?", translation: "Size nasıl yardımcı olabilirim?", expectedKeywords: ["busco", "quiero", "necesito", "tiene", "camiseta", "vestido"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cómo quiere pagar?", translation: "Nasıl ödeme yapmak istersiniz?", expectedKeywords: ["tarjeta", "efectivo", "pagar", "euros"] },
    ]
};

const unit25Speaking: UnitSpeaking = {
    unitId: 25, title: "Seyahat Planları", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "El próximo verano voy a visitar España.", translation: "Gelecek yaz İspanya'yı ziyaret edeceğim." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Quiero reservar un vuelo a Madrid para el diez de julio.", translation: "On temmuz için Madrid'e uçuş rezervasyonu yapmak istiyorum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Adónde quieres viajar?", translation: "Nereye seyahat etmek istiyorsun?", expectedKeywords: ["quiero", "viajar", "visitar", "ir", "España", "Italia", "Francia"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuántos días vas a estar de vacaciones?", translation: "Tatilde kaç gün kalacaksın?", expectedKeywords: ["días", "semana", "quince", "diez", "voy", "estar"] },
    ]
};

const unit26Speaking: UnitSpeaking = {
    unitId: 26, title: "Otel Rezervasyonu", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Buenos días, tengo una reserva a nombre de García.", translation: "Günaydın, García adına rezervasyonum var." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Quisiera una habitación doble con vistas al mar.", translation: "Deniz manzaralı çift kişilik oda isterdim." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Para cuántas noches desea la habitación?", translation: "Oda kaç gece için?", expectedKeywords: ["noches", "tres", "cinco", "una semana"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Desea desayuno incluido?", translation: "Kahvaltı dahil ister misiniz?", expectedKeywords: ["sí", "no", "desayuno", "incluido", "media pensión"] },
    ]
};

const unit27Speaking: UnitSpeaking = {
    unitId: 27, title: "Havalimanı Diyaloğu", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "¿A qué hora sale el vuelo a París?", translation: "Paris uçuşu saat kaçta kalkıyor?" },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mi vuelo tiene retraso, ¿cuánto tiempo tengo que esperar?", translation: "Uçuşum gecikti, ne kadar beklemem gerekiyor?" },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Lleva equipaje para facturar?", translation: "Teslim edilecek bagajınız var mı?", expectedKeywords: ["sí", "no", "maleta", "equipaje", "mano"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Prefiere asiento de ventanilla o pasillo?", translation: "Pencere kenarı mı koridor mu tercih edersiniz?", expectedKeywords: ["ventanilla", "pasillo", "prefiero", "quiero"] },
    ]
};

const unit28Speaking: UnitSpeaking = {
    unitId: 28, title: "Doktor Randevusu", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Tengo dolor de cabeza y fiebre desde ayer.", translation: "Dünden beri baş ağrım ve ateşim var." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Me duele mucho la garganta y tengo tos.", translation: "Boğazım çok ağrıyor ve öksürüğüm var." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué síntomas tiene?", translation: "Belirtileriniz neler?", expectedKeywords: ["dolor", "fiebre", "tos", "mareo", "cansancio"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Es alérgico a algún medicamento?", translation: "Herhangi bir ilaca alerjiniz var mı?", expectedKeywords: ["no", "sí", "alérgico", "penicilina", "ninguno"] },
    ]
};

const unit29Speaking: UnitSpeaking = {
    unitId: 29, title: "Eczane Diyaloğu", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Buenos días, necesito algo para el dolor de cabeza.", translation: "Günaydın, baş ağrısı için bir şey lazım." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "¿Tiene esta medicina sin receta?", translation: "Bu ilacı reçetesiz satıyor musunuz?" },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Necesita algo más?", translation: "Başka bir şeye ihtiyacınız var mı?", expectedKeywords: ["no", "sí", "gracias", "tiritas", "jarabe", "crema"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cómo debo tomar estas pastillas?", translation: "Bu hapları nasıl almalıyım?", expectedKeywords: ["veces", "día", "comida", "agua", "horas"] },
    ]
};

const unit30Speaking: UnitSpeaking = {
    unitId: 30, title: "Meslek Tanıtımı", language: "İspanyolca", level: "A2",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Soy ingeniero y trabajo en una empresa de tecnología.", translation: "Mühendisim ve bir teknoloji şirketinde çalışıyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mi trabajo consiste en diseñar aplicaciones móviles.", translation: "İşim mobil uygulamalar tasarlamaktan oluşuyor." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿A qué te dedicas?", translation: "Ne iş yapıyorsun?", expectedKeywords: ["soy", "trabajo", "dedico", "profesor", "médico", "ingeniero"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Te gusta tu trabajo?", translation: "İşini seviyor musun?", expectedKeywords: ["sí", "no", "gusta", "encanta", "mucho", "interesante"] },
    ]
};

// Kısa format: 31-40
const unit31Speaking: UnitSpeaking = {
    unitId: 31, title: "İş Görüşmesi", language: "İspanyolca", level: "A2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Tengo cinco años de experiencia en marketing digital.", translation: "Dijital pazarlamada beş yıl deneyimim var." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Mi mayor fortaleza es el trabajo en equipo.", translation: "En büyük gücüm takım çalışması." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Por qué quiere trabajar en nuestra empresa?", translation: "Şirketimizde neden çalışmak istiyorsunuz?", expectedKeywords: ["porque", "interesa", "empresa", "oportunidad", "crecer"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuáles son sus expectativas salariales?", translation: "Maaş beklentileriniz neler?", expectedKeywords: ["euros", "mes", "año", "salario", "negociable"] },
    ]
};

const unit32Speaking: UnitSpeaking = {
    unitId: 32, title: "Telefon Konuşması", language: "İspanyolca", level: "A2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Buenos días, ¿podría hablar con el señor López?", translation: "Günaydın, Bay López ile konuşabilir miyim?" },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Le llamo para confirmar nuestra cita de mañana.", translation: "Yarınki randevumuzu onaylamak için arıyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿De parte de quién?", translation: "Kim arıyor?", expectedKeywords: ["soy", "llamo", "nombre", "parte"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "El señor García no está disponible ahora.", translation: "Bay García şu anda müsait değil.", expectedKeywords: ["mensaje", "llamar", "más tarde", "volver", "gracias"] },
    ]
};

const unit33Speaking: UnitSpeaking = {
    unitId: 33, title: "E-posta Yazma", language: "İspanyolca", level: "A2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Le escribo para solicitar información sobre sus servicios.", translation: "Hizmetleriniz hakkında bilgi istemek için yazıyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Adjunto mi currículum para su consideración.", translation: "Değerlendirmeniz için özgeçmişimi ekliyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo empezarías un correo formal?", translation: "Resmi bir e-postaya nasıl başlarsın?", expectedKeywords: ["estimado", "señor", "señora", "le escribo", "atentamente"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cómo terminarías un correo de trabajo?", translation: "Bir iş e-postasını nasıl bitirirsin?", expectedKeywords: ["atentamente", "saludos", "cordiales", "gracias", "espero"] },
    ]
};

const unit34Speaking: UnitSpeaking = {
    unitId: 34, title: "Duygular İfade Etme", language: "İspanyolca", level: "A2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Estoy muy emocionado porque mañana es mi cumpleaños.", translation: "Çok heyecanlıyım çünkü yarın doğum günüm." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Me siento un poco triste porque echo de menos a mi familia.", translation: "Biraz üzgünüm çünkü ailemi özlüyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo te sientes hoy?", translation: "Bugün nasıl hissediyorsun?", expectedKeywords: ["siento", "estoy", "feliz", "cansado", "bien", "mal"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué te hace feliz?", translation: "Seni ne mutlu eder?", expectedKeywords: ["hace", "feliz", "familia", "amigos", "viajar", "música"] },
    ]
};

const unit35Speaking: UnitSpeaking = {
    unitId: 35, title: "Kişilik Tanımlama", language: "İspanyolca", level: "A2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Mi amigo es muy simpático y siempre me hace reír.", translation: "Arkadaşım çok sempatik ve beni hep güldürür." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Soy una persona organizada pero a veces un poco impaciente.", translation: "Düzenli biriyim ama bazen biraz sabırsızım." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cómo describirías tu personalidad?", translation: "Kişiliğini nasıl tanımlarsın?", expectedKeywords: ["soy", "persona", "amable", "tímido", "extrovertido", "paciente"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es tu mayor defecto?", translation: "En büyük kusurun ne?", expectedKeywords: ["defecto", "soy", "veces", "impaciente", "perfeccionista", "nervioso"] },
    ]
};

const unit36Speaking: UnitSpeaking = {
    unitId: 36, title: "Spor ve Fitness", language: "İspanyolca", level: "A2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Voy al gimnasio tres veces a la semana.", translation: "Haftada üç kez spor salonuna gidiyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Mi deporte favorito es el fútbol, pero también me gusta nadar.", translation: "En sevdiğim spor futbol ama yüzmeyi de severim." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Practicas algún deporte?", translation: "Spor yapıyor musun?", expectedKeywords: ["sí", "no", "juego", "practico", "fútbol", "tenis", "natación"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Con qué frecuencia haces ejercicio?", translation: "Ne sıklıkla egzersiz yaparsın?", expectedKeywords: ["veces", "semana", "día", "cada", "nunca", "siempre"] },
    ]
};

const unit37Speaking: UnitSpeaking = {
    unitId: 37, title: "Müzik ve Sanat", language: "İspanyolca", level: "A2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Me encanta la música latina, especialmente la salsa y el reggaetón.", translation: "Latin müziği çok seviyorum, özellikle salsa ve reggaeton." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "El mes pasado fui a una exposición de arte moderno.", translation: "Geçen ay modern sanat sergisine gittim." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué tipo de música te gusta?", translation: "Ne tür müzik seversin?", expectedKeywords: ["gusta", "encanta", "pop", "rock", "clásica", "latina", "todo"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Tocas algún instrumento?", translation: "Bir enstrüman çalıyor musun?", expectedKeywords: ["sí", "no", "toco", "guitarra", "piano", "aprendiendo"] },
    ]
};

const unit38Speaking: UnitSpeaking = {
    unitId: 38, title: "Sinema ve Diziler", language: "İspanyolca", level: "A2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Anoche vi una película de ciencia ficción muy interesante.", translation: "Dün gece çok ilginç bir bilim kurgu filmi izledim." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Estoy viendo una serie española que me tiene enganchado.", translation: "Beni bağımlı yapan bir İspanyol dizisi izliyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuál es tu película favorita?", translation: "En sevdiğin film hangisi?", expectedKeywords: ["favorita", "gusta", "película", "porque", "interesante"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué género de películas prefieres?", translation: "Hangi film türünü tercih edersin?", expectedKeywords: ["prefiero", "gusta", "comedia", "acción", "terror", "drama"] },
    ]
};

const unit39Speaking: UnitSpeaking = {
    unitId: 39, title: "Teknoloji Kullanımı", language: "İspanyolca", level: "A2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Uso mi teléfono principalmente para redes sociales y mensajes.", translation: "Telefonumu ağırlıklı olarak sosyal medya ve mesajlaşma için kullanıyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Trabajo desde casa con un ordenador portátil.", translation: "Dizüstü bilgisayarla evden çalışıyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Cuántas horas al día usas el móvil?", translation: "Günde kaç saat telefon kullanırsın?", expectedKeywords: ["horas", "mucho", "poco", "demasiado", "día"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Qué aplicaciones usas más?", translation: "En çok hangi uygulamaları kullanırsın?", expectedKeywords: ["uso", "WhatsApp", "Instagram", "YouTube", "aplicación"] },
    ]
};

const unit40Speaking: UnitSpeaking = {
    unitId: 40, title: "Sosyal Medya", language: "İspanyolca", level: "A2", exercises: [
        { id: 1, type: "repeat", prompt: "Tekrar et:", text: "Publico fotos en Instagram casi todos los días.", translation: "Neredeyse her gün Instagram'da fotoğraf paylaşıyorum." },
        { id: 2, type: "repeat", prompt: "Tekrar et:", text: "Intento limitar el tiempo que paso en las redes sociales.", translation: "Sosyal medyada geçirdiğim zamanı sınırlamaya çalışıyorum." },
        { id: 3, type: "respond", prompt: "Cevap ver:", text: "¿Qué redes sociales usas?", translation: "Hangi sosyal medyaları kullanırsın?", expectedKeywords: ["uso", "Instagram", "Twitter", "TikTok", "Facebook", "ninguna"] },
        { id: 4, type: "respond", prompt: "Cevap ver:", text: "¿Crees que las redes sociales son buenas o malas?", translation: "Sosyal medyanın iyi mi kötü mü olduğunu düşünüyorsun?", expectedKeywords: ["creo", "buenas", "malas", "depende", "útiles", "problema"] },
    ]
};

// A2 speakings listesi
const a2Speakings: { [key: number]: UnitSpeaking } = {
    21: unit21Speaking, 22: unit22Speaking, 23: unit23Speaking, 24: unit24Speaking, 25: unit25Speaking,
    26: unit26Speaking, 27: unit27Speaking, 28: unit28Speaking, 29: unit29Speaking, 30: unit30Speaking,
    31: unit31Speaking, 32: unit32Speaking, 33: unit33Speaking, 34: unit34Speaking, 35: unit35Speaking,
    36: unit36Speaking, 37: unit37Speaking, 38: unit38Speaking, 39: unit39Speaking, 40: unit40Speaking
};

export function getA2SpeakingForUnit(unitId: number): UnitSpeaking | undefined {
    return a2Speakings[unitId];
}
