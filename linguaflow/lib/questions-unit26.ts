/**
 * LinguaFlow - A2 Ünite 26: Otel (80 soru)
 */

import { Question } from "./questions";

export const unit26Quiz1: Question[] = [
    // KOLAY (7 soru)
    { id: 1, type: "SELECT", question: "'Habitación' ne demek?", options: [{ id: "a", text: "Lobi", correct: false }, { id: "b", text: "Oda", correct: true }, { id: "c", text: "Restoran", correct: false }, { id: "d", text: "Bar", correct: false }] },
    { id: 2, type: "SELECT", question: "'Recepción' ne demek?", options: [{ id: "a", text: "Oda", correct: false }, { id: "b", text: "Resepsiyon", correct: true }, { id: "c", text: "Havuz", correct: false }, { id: "d", text: "Garaj", correct: false }] },
    { id: 3, type: "SELECT", question: "'Llave' ne demek?", options: [{ id: "a", text: "Kapı", correct: false }, { id: "b", text: "Anahtar", correct: true }, { id: "c", text: "Kilit", correct: false }, { id: "d", text: "Pencere", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Habitación", options: [{ id: "a", text: "Lobi", correct: false }, { id: "b", text: "Oda", correct: true }, { id: "c", text: "Havuz", correct: false }, { id: "d", text: "Restoran", correct: false }] },
    { id: 5, type: "SELECT", question: "'Reserva' ne demek?", options: [{ id: "a", text: "Ödeme", correct: false }, { id: "b", text: "Rezervasyon", correct: true }, { id: "c", text: "İptal", correct: false }, { id: "d", text: "Değişiklik", correct: false }] },
    { id: 6, type: "SELECT", question: "'Piscina' ne demek?", options: [{ id: "a", text: "Spor salonu", correct: false }, { id: "b", text: "Havuz", correct: true }, { id: "c", text: "Sauna", correct: false }, { id: "d", text: "Plaj", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Recepción", options: [{ id: "a", text: "Oda", correct: false }, { id: "b", text: "Resepsiyon", correct: true }, { id: "c", text: "Havuz", correct: false }, { id: "d", text: "Restoran", correct: false }] },

    // ORTA (7 soru)
    { id: 8, type: "SELECT", question: "'Cama doble' ne demek?", options: [{ id: "a", text: "Tek kişilik yatak", correct: false }, { id: "b", text: "Çift kişilik yatak", correct: true }, { id: "c", text: "Kanepe", correct: false }, { id: "d", text: "Ranza", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Oda", correctAnswer: "Habitación" },
    { id: 10, type: "SELECT", question: "'Cama individual' ne demek?", options: [{ id: "a", text: "Çift kişilik yatak", correct: false }, { id: "b", text: "Tek kişilik yatak", correct: true }, { id: "c", text: "Kanepe", correct: false }, { id: "d", text: "Ranza", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo una reserva", options: [{ id: "a", text: "Oda istiyorum", correct: false }, { id: "b", text: "Rezervasyonum var", correct: true }, { id: "c", text: "Havuz nerede?", correct: false }, { id: "d", text: "Anahtar istiyorum", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Quiero una _____ con vista al mar. (oda)", options: [{ id: "a", text: "piscina", correct: false }, { id: "b", text: "habitación", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Anahtar", correctAnswer: "Llave" },
    { id: 14, type: "SELECT", question: "'Suite' ne demek?", options: [{ id: "a", text: "Standart oda", correct: false }, { id: "b", text: "Suit oda", correct: true }, { id: "c", text: "Tek kişilik oda", correct: false }, { id: "d", text: "Aile odası", correct: false }] },

    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Rezervasyonum var.", correctAnswer: "Tengo una reserva" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "¿Dónde puedo recoger la _____? (anahtar)", options: [{ id: "a", text: "tarjeta", correct: false }, { id: "b", text: "llave", correct: true }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Tiene una habitación disponible?", options: [{ id: "a", text: "Oda temiz mi?", correct: false }, { id: "b", text: "Müsait oda var mı?", correct: true }, { id: "c", text: "Oda kaç kişilik?", correct: false }, { id: "d", text: "Oda ne kadar?", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Quisiera una habitación con _____ doble. (yatak)", options: [{ id: "a", text: "baño", correct: false }, { id: "b", text: "cama", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Müsait oda var mı?", correctAnswer: "¿Tiene una habitación disponible?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Deniz manzaralı oda istiyorum.", correctAnswer: "Quiero una habitación con vista al mar" },
];

export const unit26Quiz2: Question[] = [
    // KOLAY (7 soru)
    { id: 1, type: "SELECT", question: "'Desayuno' ne demek?", options: [{ id: "a", text: "Öğle yemeği", correct: false }, { id: "b", text: "Kahvaltı", correct: true }, { id: "c", text: "Akşam yemeği", correct: false }, { id: "d", text: "Ara öğün", correct: false }] },
    { id: 2, type: "SELECT", question: "'Incluido' ne demek?", options: [{ id: "a", text: "Ekstra", correct: false }, { id: "b", text: "Dahil", correct: true }, { id: "c", text: "Hariç", correct: false }, { id: "d", text: "Opsiyonel", correct: false }] },
    { id: 3, type: "SELECT", question: "'Servicio' ne demek?", options: [{ id: "a", text: "Oda", correct: false }, { id: "b", text: "Servis/Hizmet", correct: true }, { id: "c", text: "Yemek", correct: false }, { id: "d", text: "Para", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Desayuno", options: [{ id: "a", text: "Öğle yemeği", correct: false }, { id: "b", text: "Kahvaltı", correct: true }, { id: "c", text: "Akşam yemeği", correct: false }, { id: "d", text: "Atıştırmalık", correct: false }] },
    { id: 5, type: "SELECT", question: "'Wifi' ne demek?", options: [{ id: "a", text: "Telefon", correct: false }, { id: "b", text: "Kablosuz internet", correct: true }, { id: "c", text: "Televizyon", correct: false }, { id: "d", text: "Klima", correct: false }] },
    { id: 6, type: "SELECT", question: "'Aire acondicionado' ne demek?", options: [{ id: "a", text: "Isıtma", correct: false }, { id: "b", text: "Klima", correct: true }, { id: "c", text: "Vantilatör", correct: false }, { id: "d", text: "Havalandırma", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Servicio", options: [{ id: "a", text: "Oda", correct: false }, { id: "b", text: "Servis", correct: true }, { id: "c", text: "Yemek", correct: false }, { id: "d", text: "Para", correct: false }] },

    // ORTA (7 soru)
    { id: 8, type: "SELECT", question: "'¿A qué hora es el desayuno?' ne demek?", options: [{ id: "a", text: "Kahvaltı nerede?", correct: false }, { id: "b", text: "Kahvaltı saat kaçta?", correct: true }, { id: "c", text: "Kahvaltı dahil mi?", correct: false }, { id: "d", text: "Kahvaltı var mı?", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Kahvaltı", correctAnswer: "Desayuno" },
    { id: 10, type: "SELECT", question: "'Servicio de habitaciones' ne demek?", options: [{ id: "a", text: "Oda temizliği", correct: false }, { id: "b", text: "Oda servisi", correct: true }, { id: "c", text: "Resepsiyon", correct: false }, { id: "d", text: "Lobi", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿El desayuno está incluido?", options: [{ id: "a", text: "Kahvaltı saat kaçta?", correct: false }, { id: "b", text: "Kahvaltı dahil mi?", correct: true }, { id: "c", text: "Kahvaltı nerede?", correct: false }, { id: "d", text: "Kahvaltı var mı?", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ está incluido en el precio. (kahvaltı)", options: [{ id: "a", text: "almuerzo", correct: false }, { id: "b", text: "desayuno", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Dahil", correctAnswer: "Incluido" },
    { id: 14, type: "SELECT", question: "'Media pensión' ne demek?", options: [{ id: "a", text: "Her şey dahil", correct: false }, { id: "b", text: "Yarım pansiyon", correct: true }, { id: "c", text: "Sadece oda", correct: false }, { id: "d", text: "Tam pansiyon", correct: false }] },

    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Kahvaltı dahil mi?", correctAnswer: "¿El desayuno está incluido?" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "¿Tiene _____ gratis? (wifi)", options: [{ id: "a", text: "televisión", correct: false }, { id: "b", text: "wifi", correct: true }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El servicio de habitaciones es 24 horas", options: [{ id: "a", text: "Oda servisi 12 saat", correct: false }, { id: "b", text: "Oda servisi 24 saat", correct: true }, { id: "c", text: "Oda servisi yok", correct: false }, { id: "d", text: "Oda servisi pahalı", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "La habitación tiene aire _____. (klima)", options: [{ id: "a", text: "caliente", correct: false }, { id: "b", text: "acondicionado", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Oda servisi 24 saat.", correctAnswer: "El servicio de habitaciones es 24 horas" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Kahvaltı saat kaçta?", correctAnswer: "¿A qué hora es el desayuno?" },
];

export const unit26Quiz3: Question[] = [
    // KOLAY (7 soru)
    { id: 1, type: "SELECT", question: "'Check-in' ne demek?", options: [{ id: "a", text: "Çıkış", correct: false }, { id: "b", text: "Giriş/Kayıt", correct: true }, { id: "c", text: "Ödeme", correct: false }, { id: "d", text: "İptal", correct: false }] },
    { id: 2, type: "SELECT", question: "'Check-out' ne demek?", options: [{ id: "a", text: "Giriş", correct: false }, { id: "b", text: "Çıkış", correct: true }, { id: "c", text: "Kayıt", correct: false }, { id: "d", text: "Rezervasyon", correct: false }] },
    { id: 3, type: "SELECT", question: "'Ascensor' ne demek?", options: [{ id: "a", text: "Merdiven", correct: false }, { id: "b", text: "Asansör", correct: true }, { id: "c", text: "Koridor", correct: false }, { id: "d", text: "Kapı", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Check-in", options: [{ id: "a", text: "Çıkış", correct: false }, { id: "b", text: "Giriş", correct: true }, { id: "c", text: "Ödeme", correct: false }, { id: "d", text: "İptal", correct: false }] },
    { id: 5, type: "SELECT", question: "'Planta' ne demek?", options: [{ id: "a", text: "Oda", correct: false }, { id: "b", text: "Kat", correct: true }, { id: "c", text: "Bina", correct: false }, { id: "d", text: "Koridor", correct: false }] },
    { id: 6, type: "SELECT", question: "'Escalera' ne demek?", options: [{ id: "a", text: "Asansör", correct: false }, { id: "b", text: "Merdiven", correct: true }, { id: "c", text: "Koridor", correct: false }, { id: "d", text: "Kapı", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Ascensor", options: [{ id: "a", text: "Merdiven", correct: false }, { id: "b", text: "Asansör", correct: true }, { id: "c", text: "Koridor", correct: false }, { id: "d", text: "Lobi", correct: false }] },

    // ORTA (7 soru)
    { id: 8, type: "SELECT", question: "'¿A qué hora es el check-out?' ne demek?", options: [{ id: "a", text: "Giriş saat kaçta?", correct: false }, { id: "b", text: "Çıkış saat kaçta?", correct: true }, { id: "c", text: "Kahvaltı saat kaçta?", correct: false }, { id: "d", text: "Servis saat kaçta?", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Asansör", correctAnswer: "Ascensor" },
    { id: 10, type: "SELECT", question: "'En qué planta' ne demek?", options: [{ id: "a", text: "Hangi odada", correct: false }, { id: "b", text: "Hangi katta", correct: true }, { id: "c", text: "Hangi binada", correct: false }, { id: "d", text: "Hangi sokakta", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿En qué planta está mi habitación?", options: [{ id: "a", text: "Odam hangi binada?", correct: false }, { id: "b", text: "Odam hangi katta?", correct: true }, { id: "c", text: "Odam kaç numaralı?", correct: false }, { id: "d", text: "Odam nerede?", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ es a las 12. (çıkış)", options: [{ id: "a", text: "check-in", correct: false }, { id: "b", text: "check-out", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Kat", correctAnswer: "Planta" },
    { id: 14, type: "SELECT", question: "'Primera planta' ne demek?", options: [{ id: "a", text: "Zemin kat", correct: false }, { id: "b", text: "Birinci kat", correct: true }, { id: "c", text: "İkinci kat", correct: false }, { id: "d", text: "Üst kat", correct: false }] },

    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Odam hangi katta?", correctAnswer: "¿En qué planta está mi habitación?" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Está en la tercera _____. (kat)", options: [{ id: "a", text: "habitación", correct: false }, { id: "b", text: "planta", correct: true }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Puedo hacer el check-out más tarde?", options: [{ id: "a", text: "Erken çıkış yapabilir miyim?", correct: false }, { id: "b", text: "Geç çıkış yapabilir miyim?", correct: true }, { id: "c", text: "Şimdi çıkış yapabilir miyim?", correct: false }, { id: "d", text: "Bugün çıkış yapabilir miyim?", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "¿Dónde está el _____? (asansör)", options: [{ id: "a", text: "escalera", correct: false }, { id: "b", text: "ascensor", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Geç çıkış yapabilir miyim?", correctAnswer: "¿Puedo hacer el check-out más tarde?" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Çıkış saat 12'de.", correctAnswer: "El check-out es a las 12" },
];

export const unit26Quiz4: Question[] = [
    // KOLAY (7 soru)
    { id: 1, type: "SELECT", question: "'Limpio' ne demek?", options: [{ id: "a", text: "Kirli", correct: false }, { id: "b", text: "Temiz", correct: true }, { id: "c", text: "Düzenli", correct: false }, { id: "d", text: "Dağınık", correct: false }] },
    { id: 2, type: "SELECT", question: "'Sucio' ne demek?", options: [{ id: "a", text: "Temiz", correct: false }, { id: "b", text: "Kirli", correct: true }, { id: "c", text: "Düzenli", correct: false }, { id: "d", text: "Yeni", correct: false }] },
    { id: 3, type: "SELECT", question: "'Toalla' ne demek?", options: [{ id: "a", text: "Çarşaf", correct: false }, { id: "b", text: "Havlu", correct: true }, { id: "c", text: "Battaniye", correct: false }, { id: "d", text: "Yastık", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Limpio", options: [{ id: "a", text: "Kirli", correct: false }, { id: "b", text: "Temiz", correct: true }, { id: "c", text: "Dağınık", correct: false }, { id: "d", text: "Eski", correct: false }] },
    { id: 5, type: "SELECT", question: "'Almohada' ne demek?", options: [{ id: "a", text: "Havlu", correct: false }, { id: "b", text: "Yastık", correct: true }, { id: "c", text: "Çarşaf", correct: false }, { id: "d", text: "Battaniye", correct: false }] },
    { id: 6, type: "SELECT", question: "'Sábana' ne demek?", options: [{ id: "a", text: "Yastık", correct: false }, { id: "b", text: "Çarşaf", correct: true }, { id: "c", text: "Havlu", correct: false }, { id: "d", text: "Örtü", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Toalla", options: [{ id: "a", text: "Çarşaf", correct: false }, { id: "b", text: "Havlu", correct: true }, { id: "c", text: "Yastık", correct: false }, { id: "d", text: "Battaniye", correct: false }] },

    // ORTA (7 soru)
    { id: 8, type: "SELECT", question: "'No funciona' ne demek?", options: [{ id: "a", text: "Çalışıyor", correct: false }, { id: "b", text: "Çalışmıyor", correct: true }, { id: "c", text: "Yeni", correct: false }, { id: "d", text: "Eski", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Havlu", correctAnswer: "Toalla" },
    { id: 10, type: "SELECT", question: "'Roto' ne demek?", options: [{ id: "a", text: "Yeni", correct: false }, { id: "b", text: "Kırık/Bozuk", correct: true }, { id: "c", text: "Temiz", correct: false }, { id: "d", text: "Güzel", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Necesito toallas limpias", options: [{ id: "a", text: "Yeni çarşaf lazım", correct: false }, { id: "b", text: "Temiz havlu lazım", correct: true }, { id: "c", text: "Ekstra yastık lazım", correct: false }, { id: "d", text: "Yeni anahtar lazım", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "El aire acondicionado no _____. (çalışmıyor)", options: [{ id: "a", text: "está", correct: false }, { id: "b", text: "funciona", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Temiz", correctAnswer: "Limpio" },
    { id: 14, type: "SELECT", question: "'Ruidoso' ne demek?", options: [{ id: "a", text: "Sessiz", correct: false }, { id: "b", text: "Gürültülü", correct: true }, { id: "c", text: "Sakin", correct: false }, { id: "d", text: "Huzurlu", correct: false }] },

    // ZOR (6 soru)
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Temiz havlu lazım.", correctAnswer: "Necesito toallas limpias" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "¿Puede cambiar las _____? (çarşaflar)", options: [{ id: "a", text: "toallas", correct: false }, { id: "b", text: "sábanas", correct: true }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "La habitación está muy sucia", options: [{ id: "a", text: "Oda çok temiz", correct: false }, { id: "b", text: "Oda çok kirli", correct: true }, { id: "c", text: "Oda çok küçük", correct: false }, { id: "d", text: "Oda çok soğuk", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "La ducha está _____. (bozuk)", options: [{ id: "a", text: "sucia", correct: false }, { id: "b", text: "rota", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Klima çalışmıyor.", correctAnswer: "El aire acondicionado no funciona" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Çarşafları değiştirebilir misiniz?", correctAnswer: "¿Puede cambiar las sábanas?" },
];
