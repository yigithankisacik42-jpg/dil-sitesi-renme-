/**
 * LinguaFlow - A2 Ünite 27-30: Havalimanı, Doktor, Eczane, Meslekler 2 (320 soru)
 */

import { Question } from "./questions";

// ===== ÜNİTE 27: HAVALİMANI =====
export const unit27Quiz1: Question[] = [
    { id: 1, type: "SELECT", question: "'Terminal' ne demek?", options: [{ id: "a", text: "Kapı", correct: false }, { id: "b", text: "Terminal", correct: true }, { id: "c", text: "Pist", correct: false }, { id: "d", text: "Hangar", correct: false }] },
    { id: 2, type: "SELECT", question: "'Puerta de embarque' ne demek?", options: [{ id: "a", text: "Çıkış kapısı", correct: false }, { id: "b", text: "Biniş kapısı", correct: true }, { id: "c", text: "Giriş", correct: false }, { id: "d", text: "Acil çıkış", correct: false }] },
    { id: 3, type: "SELECT", question: "'Control de seguridad' ne demek?", options: [{ id: "a", text: "Pasaport kontrolü", correct: false }, { id: "b", text: "Güvenlik kontrolü", correct: true }, { id: "c", text: "Bagaj kontrolü", correct: false }, { id: "d", text: "Bilet kontrolü", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Terminal", options: [{ id: "a", text: "Kapı", correct: false }, { id: "b", text: "Terminal", correct: true }, { id: "c", text: "Pist", correct: false }, { id: "d", text: "Lobi", correct: false }] },
    { id: 5, type: "SELECT", question: "'Aduana' ne demek?", options: [{ id: "a", text: "Güvenlik", correct: false }, { id: "b", text: "Gümrük", correct: true }, { id: "c", text: "Pasaport", correct: false }, { id: "d", text: "Vize", correct: false }] },
    { id: 6, type: "SELECT", question: "'Cinturón de seguridad' ne demek?", options: [{ id: "a", text: "Can yeleği", correct: false }, { id: "b", text: "Emniyet kemeri", correct: true }, { id: "c", text: "Maske", correct: false }, { id: "d", text: "Koltuk", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Puerta de embarque", options: [{ id: "a", text: "Çıkış kapısı", correct: false }, { id: "b", text: "Biniş kapısı", correct: true }, { id: "c", text: "Giriş kapısı", correct: false }, { id: "d", text: "Acil çıkış", correct: false }] },
    { id: 8, type: "SELECT", question: "'Tripulación' ne demek?", options: [{ id: "a", text: "Yolcular", correct: false }, { id: "b", text: "Mürettebat", correct: true }, { id: "c", text: "Pilotlar", correct: false }, { id: "d", text: "Güvenlik", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Terminal", correctAnswer: "Terminal" },
    { id: 10, type: "SELECT", question: "'Aterrizaje' ne demek?", options: [{ id: "a", text: "Kalkış", correct: false }, { id: "b", text: "İniş", correct: true }, { id: "c", text: "Uçuş", correct: false }, { id: "d", text: "Aktarma", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El vuelo está retrasado", options: [{ id: "a", text: "Uçuş iptal", correct: false }, { id: "b", text: "Uçuş gecikmeli", correct: true }, { id: "c", text: "Uçuş zamanında", correct: false }, { id: "d", text: "Uçuş erken", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "La puerta de _____ es la B12.", options: [{ id: "a", text: "salida", correct: false }, { id: "b", text: "embarque", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Biniş kapısı", correctAnswer: "Puerta de embarque" },
    { id: 14, type: "SELECT", question: "'Despegue' ne demek?", options: [{ id: "a", text: "İniş", correct: false }, { id: "b", text: "Kalkış", correct: true }, { id: "c", text: "Gecikme", correct: false }, { id: "d", text: "İptal", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Uçuş gecikmeli.", correctAnswer: "El vuelo está retrasado" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Abróchense los _____ de seguridad.", options: [{ id: "a", text: "zapatos", correct: false }, { id: "b", text: "cinturones", correct: true }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El avión está aterrizando", options: [{ id: "a", text: "Uçak kalkıyor", correct: false }, { id: "b", text: "Uçak iniyor", correct: true }, { id: "c", text: "Uçak bekliyor", correct: false }, { id: "d", text: "Uçak gecikmeli", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Pasen por el control de _____.", options: [{ id: "a", text: "pasaporte", correct: false }, { id: "b", text: "seguridad", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Emniyet kemerlerinizi bağlayın.", correctAnswer: "Abróchense los cinturones de seguridad" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Uçak iniyor.", correctAnswer: "El avión está aterrizando" },
];

export const unit27Quiz2: Question[] = [
    { id: 1, type: "SELECT", question: "'Piloto' ne demek?", options: [{ id: "a", text: "Hostes", correct: false }, { id: "b", text: "Pilot", correct: true }, { id: "c", text: "Yolcu", correct: false }, { id: "d", text: "Kaptan", correct: false }] },
    { id: 2, type: "SELECT", question: "'Azafata' ne demek?", options: [{ id: "a", text: "Pilot", correct: false }, { id: "b", text: "Hostes", correct: true }, { id: "c", text: "Kaptan", correct: false }, { id: "d", text: "Mürettebat", correct: false }] },
    { id: 3, type: "SELECT", question: "'Pasajero' ne demek?", options: [{ id: "a", text: "Pilot", correct: false }, { id: "b", text: "Yolcu", correct: true }, { id: "c", text: "Mürettebat", correct: false }, { id: "d", text: "Kaptan", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Piloto", options: [{ id: "a", text: "Hostes", correct: false }, { id: "b", text: "Pilot", correct: true }, { id: "c", text: "Kaptan", correct: false }, { id: "d", text: "Yolcu", correct: false }] },
    { id: 5, type: "SELECT", question: "'Asiento' ne demek?", options: [{ id: "a", text: "Masa", correct: false }, { id: "b", text: "Koltuk", correct: true }, { id: "c", text: "Pencere", correct: false }, { id: "d", text: "Koridor", correct: false }] },
    { id: 6, type: "SELECT", question: "'Ventanilla' ne demek?", options: [{ id: "a", text: "Koridor", correct: false }, { id: "b", text: "Pencere kenarı", correct: true }, { id: "c", text: "Orta", correct: false }, { id: "d", text: "Arka", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Asiento", options: [{ id: "a", text: "Masa", correct: false }, { id: "b", text: "Koltuk", correct: true }, { id: "c", text: "Pencere", correct: false }, { id: "d", text: "Kapı", correct: false }] },
    { id: 8, type: "SELECT", question: "'Pasillo' ne demek?", options: [{ id: "a", text: "Pencere kenarı", correct: false }, { id: "b", text: "Koridor kenarı", correct: true }, { id: "c", text: "Orta", correct: false }, { id: "d", text: "Ön", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Pilot", correctAnswer: "Piloto" },
    { id: 10, type: "SELECT", question: "'Turbulencia' ne demek?", options: [{ id: "a", text: "Hava durumu", correct: false }, { id: "b", text: "Türbülans", correct: true }, { id: "c", text: "Rüzgar", correct: false }, { id: "d", text: "Yağmur", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "¿Prefiere ventanilla o pasillo?", options: [{ id: "a", text: "Ön mü arka mı?", correct: false }, { id: "b", text: "Pencere mi koridor mu?", correct: true }, { id: "c", text: "Tek mi çift mi?", correct: false }, { id: "d", text: "Büyük mü küçük mü?", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi _____ es el 15A.", options: [{ id: "a", text: "vuelo", correct: false }, { id: "b", text: "asiento", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Koltuk", correctAnswer: "Asiento" },
    { id: 14, type: "SELECT", question: "'Equipaje de mano' ne demek?", options: [{ id: "a", text: "Kayıtlı bagaj", correct: false }, { id: "b", text: "El bagajı", correct: true }, { id: "c", text: "Ağır bagaj", correct: false }, { id: "d", text: "Ekstra bagaj", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Pencere mi koridor mu tercih edersiniz?", correctAnswer: "¿Prefiere ventanilla o pasillo?" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "La _____ nos atendió muy bien.", options: [{ id: "a", text: "piloto", correct: false }, { id: "b", text: "azafata", correct: true }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Hay turbulencia", options: [{ id: "a", text: "Hava güzel", correct: false }, { id: "b", text: "Türbülans var", correct: true }, { id: "c", text: "Yağmur var", correct: false }, { id: "d", text: "Rüzgar var", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Los _____ deben estar sentados.", options: [{ id: "a", text: "pilotos", correct: false }, { id: "b", text: "pasajeros", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Türbülans var.", correctAnswer: "Hay turbulencia" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Koltuk numaram 15A.", correctAnswer: "Mi asiento es el 15A" },
];

export const unit27Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "'Cancelado' ne demek?", options: [{ id: "a", text: "Gecikmeli", correct: false }, { id: "b", text: "İptal edilmiş", correct: true }, { id: "c", text: "Zamanında", correct: false }, { id: "d", text: "Erken", correct: false }] },
    { id: 2, type: "SELECT", question: "'A tiempo' ne demek?", options: [{ id: "a", text: "Gecikmeli", correct: false }, { id: "b", text: "Zamanında", correct: true }, { id: "c", text: "Erken", correct: false }, { id: "d", text: "İptal", correct: false }] },
    { id: 3, type: "SELECT", question: "'Conexión' ne demek?", options: [{ id: "a", text: "Direkt uçuş", correct: false }, { id: "b", text: "Aktarma/Bağlantı", correct: true }, { id: "c", text: "Son uçuş", correct: false }, { id: "d", text: "İlk uçuş", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cancelado", options: [{ id: "a", text: "Gecikmeli", correct: false }, { id: "b", text: "İptal edilmiş", correct: true }, { id: "c", text: "Zamanında", correct: false }, { id: "d", text: "Değişmiş", correct: false }] },
    { id: 5, type: "SELECT", question: "'Reclamar' ne demek?", options: [{ id: "a", text: "Almak", correct: false }, { id: "b", text: "Talep etmek/Şikayet", correct: true }, { id: "c", text: "Vermek", correct: false }, { id: "d", text: "Beklemek", correct: false }] },
    { id: 6, type: "SELECT", question: "'Reembolso' ne demek?", options: [{ id: "a", text: "Değişim", correct: false }, { id: "b", text: "Para iadesi", correct: true }, { id: "c", text: "Bilet", correct: false }, { id: "d", text: "Rezervasyon", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "A tiempo", options: [{ id: "a", text: "Gecikmeli", correct: false }, { id: "b", text: "Zamanında", correct: true }, { id: "c", text: "Erken", correct: false }, { id: "d", text: "İptal", correct: false }] },
    { id: 8, type: "SELECT", question: "'Pérdida de equipaje' ne demek?", options: [{ id: "a", text: "Bagaj bulundu", correct: false }, { id: "b", text: "Bagaj kaybı", correct: true }, { id: "c", text: "Bagaj hasarı", correct: false }, { id: "d", text: "Bagaj fazla", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "İptal edilmiş", correctAnswer: "Cancelado" },
    { id: 10, type: "SELECT", question: "'Cambio de vuelo' ne demek?", options: [{ id: "a", text: "Uçuş iptali", correct: false }, { id: "b", text: "Uçuş değişikliği", correct: true }, { id: "c", text: "Uçuş gecikmesi", correct: false }, { id: "d", text: "Yeni uçuş", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Mi vuelo fue cancelado", options: [{ id: "a", text: "Uçuşum gecikti", correct: false }, { id: "b", text: "Uçuşum iptal edildi", correct: true }, { id: "c", text: "Uçuşum zamanında", correct: false }, { id: "d", text: "Uçuşum değişti", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "El vuelo llegó _____.", options: [{ id: "a", text: "tarde", correct: false }, { id: "b", text: "a tiempo", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Zamanında", correctAnswer: "A tiempo" },
    { id: 14, type: "SELECT", question: "'Mostrador' ne demek?", options: [{ id: "a", text: "Kapı", correct: false }, { id: "b", text: "Banko/Gişe", correct: true }, { id: "c", text: "Koltuk", correct: false }, { id: "d", text: "Band", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Uçuşum iptal edildi.", correctAnswer: "Mi vuelo fue cancelado" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Perdí mi _____ de conexión.", options: [{ id: "a", text: "billete", correct: false }, { id: "b", text: "vuelo", correct: true }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Quiero un reembolso", options: [{ id: "a", text: "Değişim istiyorum", correct: false }, { id: "b", text: "Para iadesi istiyorum", correct: true }, { id: "c", text: "Bilet istiyorum", correct: false }, { id: "d", text: "Bilgi istiyorum", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Mi equipaje está _____.", options: [{ id: "a", text: "aquí", correct: false }, { id: "b", text: "perdido", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Para iadesi istiyorum.", correctAnswer: "Quiero un reembolso" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Bavulum kayıp.", correctAnswer: "Mi equipaje está perdido" },
];

export const unit27Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "'Embarcar' ne demek?", options: [{ id: "a", text: "İnmek", correct: false }, { id: "b", text: "Binmek", correct: true }, { id: "c", text: "Beklemek", correct: false }, { id: "d", text: "Koşmak", correct: false }] },
    { id: 2, type: "SELECT", question: "'Desembarcar' ne demek?", options: [{ id: "a", text: "Binmek", correct: false }, { id: "b", text: "İnmek", correct: true }, { id: "c", text: "Beklemek", correct: false }, { id: "d", text: "Koşmak", correct: false }] },
    { id: 3, type: "SELECT", question: "'Tarjeta de embarque' ne demek?", options: [{ id: "a", text: "Kredi kartı", correct: false }, { id: "b", text: "Biniş kartı", correct: true }, { id: "c", text: "Kimlik kartı", correct: false }, { id: "d", text: "Vize", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Embarcar", options: [{ id: "a", text: "İnmek", correct: false }, { id: "b", text: "Binmek", correct: true }, { id: "c", text: "Beklemek", correct: false }, { id: "d", text: "Gelmek", correct: false }] },
    { id: 5, type: "SELECT", question: "'Zona de espera' ne demek?", options: [{ id: "a", text: "Biniş alanı", correct: false }, { id: "b", text: "Bekleme alanı", correct: true }, { id: "c", text: "Bagaj alanı", correct: false }, { id: "d", text: "Check-in alanı", correct: false }] },
    { id: 6, type: "SELECT", question: "'Última llamada' ne demek?", options: [{ id: "a", text: "İlk çağrı", correct: false }, { id: "b", text: "Son çağrı", correct: true }, { id: "c", text: "Acil çağrı", correct: false }, { id: "d", text: "Erken çağrı", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tarjeta de embarque", options: [{ id: "a", text: "Kredi kartı", correct: false }, { id: "b", text: "Biniş kartı", correct: true }, { id: "c", text: "Kimlik kartı", correct: false }, { id: "d", text: "Para kartı", correct: false }] },
    { id: 8, type: "SELECT", question: "'Pista' ne demek?", options: [{ id: "a", text: "Terminal", correct: false }, { id: "b", text: "Pist", correct: true }, { id: "c", text: "Hangar", correct: false }, { id: "d", text: "Kule", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Binmek", correctAnswer: "Embarcar" },
    { id: 10, type: "SELECT", question: "'Torres de control' ne demek?", options: [{ id: "a", text: "Terminal binası", correct: false }, { id: "b", text: "Kontrol kulesi", correct: true }, { id: "c", text: "Bagaj binası", correct: false }, { id: "d", text: "Hangar", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Última llamada para el vuelo", options: [{ id: "a", text: "İlk çağrı", correct: false }, { id: "b", text: "Son çağrı", correct: true }, { id: "c", text: "Erken çağrı", correct: false }, { id: "d", text: "Geç çağrı", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Muestre su _____ de embarque.", options: [{ id: "a", text: "billete", correct: false }, { id: "b", text: "tarjeta", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Biniş kartı", correctAnswer: "Tarjeta de embarque" },
    { id: 14, type: "SELECT", question: "'Anuncio' ne demek?", options: [{ id: "a", text: "Bilet", correct: false }, { id: "b", text: "Anons/Duyuru", correct: true }, { id: "c", text: "Kapı", correct: false }, { id: "d", text: "Pist", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Uçuş için son çağrı.", correctAnswer: "Última llamada para el vuelo" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Los pasajeros pueden _____.", options: [{ id: "a", text: "desembarcar", correct: false }, { id: "b", text: "embarcar", correct: true }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "El avión está en la pista", options: [{ id: "a", text: "Uçak terminalde", correct: false }, { id: "b", text: "Uçak pistte", correct: true }, { id: "c", text: "Uçak havada", correct: false }, { id: "d", text: "Uçak hangarda", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Espere en la zona de _____.", options: [{ id: "a", text: "embarque", correct: false }, { id: "b", text: "espera", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Uçak pistte.", correctAnswer: "El avión está en la pista" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Biniş kartınızı gösterin.", correctAnswer: "Muestre su tarjeta de embarque" },
];

// ===== ÜNİTE 28: DOKTOR =====
export const unit28Quiz1: Question[] = [
    { id: 1, type: "SELECT", question: "'Cita' ne demek?", options: [{ id: "a", text: "Reçete", correct: false }, { id: "b", text: "Randevu", correct: true }, { id: "c", text: "İlaç", correct: false }, { id: "d", text: "Teşhis", correct: false }] },
    { id: 2, type: "SELECT", question: "'Síntoma' ne demek?", options: [{ id: "a", text: "İlaç", correct: false }, { id: "b", text: "Belirti/Semptom", correct: true }, { id: "c", text: "Teşhis", correct: false }, { id: "d", text: "Tedavi", correct: false }] },
    { id: 3, type: "SELECT", question: "'Dolor' ne demek?", options: [{ id: "a", text: "Ateş", correct: false }, { id: "b", text: "Ağrı", correct: true }, { id: "c", text: "Öksürük", correct: false }, { id: "d", text: "Baş dönmesi", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Cita", options: [{ id: "a", text: "Reçete", correct: false }, { id: "b", text: "Randevu", correct: true }, { id: "c", text: "İlaç", correct: false }, { id: "d", text: "Analiz", correct: false }] },
    { id: 5, type: "SELECT", question: "'Fiebre' ne demek?", options: [{ id: "a", text: "Ağrı", correct: false }, { id: "b", text: "Ateş", correct: true }, { id: "c", text: "Öksürük", correct: false }, { id: "d", text: "Soğuk algınlığı", correct: false }] },
    { id: 6, type: "SELECT", question: "'Tos' ne demek?", options: [{ id: "a", text: "Ateş", correct: false }, { id: "b", text: "Öksürük", correct: true }, { id: "c", text: "Ağrı", correct: false }, { id: "d", text: "Baş ağrısı", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Dolor", options: [{ id: "a", text: "Ateş", correct: false }, { id: "b", text: "Ağrı", correct: true }, { id: "c", text: "Öksürük", correct: false }, { id: "d", text: "Hapşırık", correct: false }] },
    { id: 8, type: "SELECT", question: "'Mareo' ne demek?", options: [{ id: "a", text: "Ağrı", correct: false }, { id: "b", text: "Baş dönmesi", correct: true }, { id: "c", text: "Ateş", correct: false }, { id: "d", text: "Öksürük", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Randevu", correctAnswer: "Cita" },
    { id: 10, type: "SELECT", question: "'Receta' ne demek?", options: [{ id: "a", text: "Randevu", correct: false }, { id: "b", text: "Reçete", correct: true }, { id: "c", text: "İlaç", correct: false }, { id: "d", text: "Analiz", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Me duele la cabeza", options: [{ id: "a", text: "Midem ağrıyor", correct: false }, { id: "b", text: "Başım ağrıyor", correct: true }, { id: "c", text: "Ayağım ağrıyor", correct: false }, { id: "d", text: "Sırtım ağrıyor", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo una _____ con el médico.", options: [{ id: "a", text: "receta", correct: false }, { id: "b", text: "cita", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Ağrı", correctAnswer: "Dolor" },
    { id: 14, type: "SELECT", question: "'Náuseas' ne demek?", options: [{ id: "a", text: "Ağrı", correct: false }, { id: "b", text: "Mide bulantısı", correct: true }, { id: "c", text: "Baş dönmesi", correct: false }, { id: "d", text: "Öksürük", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Başım ağrıyor.", correctAnswer: "Me duele la cabeza" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo mucha _____.", options: [{ id: "a", text: "dolor", correct: false }, { id: "b", text: "fiebre", correct: true }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo tos y fiebre", options: [{ id: "a", text: "Başım ağrıyor ve ateşim var", correct: false }, { id: "b", text: "Öksürüğüm ve ateşim var", correct: true }, { id: "c", text: "Midem ağrıyor", correct: false }, { id: "d", text: "Baş dönmem var", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "¿Cuáles son sus _____?", options: [{ id: "a", text: "recetas", correct: false }, { id: "b", text: "síntomas", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Öksürük ve ateşim var.", correctAnswer: "Tengo tos y fiebre" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Belirtileriniz neler?", correctAnswer: "¿Cuáles son sus síntomas?" },
];

export const unit28Quiz2: Question[] = [
    { id: 1, type: "SELECT", question: "'Diagnóstico' ne demek?", options: [{ id: "a", text: "Tedavi", correct: false }, { id: "b", text: "Teşhis", correct: true }, { id: "c", text: "Reçete", correct: false }, { id: "d", text: "İlaç", correct: false }] },
    { id: 2, type: "SELECT", question: "'Tratamiento' ne demek?", options: [{ id: "a", text: "Teşhis", correct: false }, { id: "b", text: "Tedavi", correct: true }, { id: "c", text: "Belirti", correct: false }, { id: "d", text: "Randevu", correct: false }] },
    { id: 3, type: "SELECT", question: "'Análisis' ne demek?", options: [{ id: "a", text: "Reçete", correct: false }, { id: "b", text: "Tahlil/Analiz", correct: true }, { id: "c", text: "Tedavi", correct: false }, { id: "d", text: "İlaç", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Diagnóstico", options: [{ id: "a", text: "Tedavi", correct: false }, { id: "b", text: "Teşhis", correct: true }, { id: "c", text: "Belirti", correct: false }, { id: "d", text: "Randevu", correct: false }] },
    { id: 5, type: "SELECT", question: "'Examen' ne demek?", options: [{ id: "a", text: "İlaç", correct: false }, { id: "b", text: "Muayene", correct: true }, { id: "c", text: "Reçete", correct: false }, { id: "d", text: "Randevu", correct: false }] },
    { id: 6, type: "SELECT", question: "'Operación' ne demek?", options: [{ id: "a", text: "Muayene", correct: false }, { id: "b", text: "Ameliyat", correct: true }, { id: "c", text: "Tedavi", correct: false }, { id: "d", text: "Teşhis", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tratamiento", options: [{ id: "a", text: "Teşhis", correct: false }, { id: "b", text: "Tedavi", correct: true }, { id: "c", text: "Belirti", correct: false }, { id: "d", text: "Randevu", correct: false }] },
    { id: 8, type: "SELECT", question: "'Urgencias' ne demek?", options: [{ id: "a", text: "Poliklinik", correct: false }, { id: "b", text: "Acil servis", correct: true }, { id: "c", text: "Yoğun bakım", correct: false }, { id: "d", text: "Eczane", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Teşhis", correctAnswer: "Diagnóstico" },
    { id: 10, type: "SELECT", question: "'Ambulancia' ne demek?", options: [{ id: "a", text: "Hastane", correct: false }, { id: "b", text: "Ambulans", correct: true }, { id: "c", text: "Acil", correct: false }, { id: "d", text: "Doktor", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Necesita un análisis de sangre", options: [{ id: "a", text: "Röntgen lazım", correct: false }, { id: "b", text: "Kan tahlili lazım", correct: true }, { id: "c", text: "İdrar tahlili lazım", correct: false }, { id: "d", text: "Tomografi lazım", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ es gripe.", options: [{ id: "a", text: "tratamiento", correct: false }, { id: "b", text: "diagnóstico", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Tedavi", correctAnswer: "Tratamiento" },
    { id: 14, type: "SELECT", question: "'Radiografía' ne demek?", options: [{ id: "a", text: "Tahlil", correct: false }, { id: "b", text: "Röntgen", correct: true }, { id: "c", text: "Tomografi", correct: false }, { id: "d", text: "MR", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Kan tahlili lazım.", correctAnswer: "Necesita un análisis de sangre" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "El _____ durará una semana.", options: [{ id: "a", text: "diagnóstico", correct: false }, { id: "b", text: "tratamiento", correct: true }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Vaya a urgencias", options: [{ id: "a", text: "Eczaneye gidin", correct: false }, { id: "b", text: "Acil servise gidin", correct: true }, { id: "c", text: "Eve gidin", correct: false }, { id: "d", text: "Polikliniğe gidin", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Llamé a una _____.", options: [{ id: "a", text: "receta", correct: false }, { id: "b", text: "ambulancia", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Acil servise gidin.", correctAnswer: "Vaya a urgencias" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Teşhis griptir.", correctAnswer: "El diagnóstico es gripe" },
];

export const unit28Quiz3: Question[] = [
    { id: 1, type: "SELECT", question: "'Gripe' ne demek?", options: [{ id: "a", text: "Soğuk algınlığı", correct: false }, { id: "b", text: "Grip", correct: true }, { id: "c", text: "Alerji", correct: false }, { id: "d", text: "Enfeksiyon", correct: false }] },
    { id: 2, type: "SELECT", question: "'Resfriado' ne demek?", options: [{ id: "a", text: "Grip", correct: false }, { id: "b", text: "Soğuk algınlığı", correct: true }, { id: "c", text: "Alerji", correct: false }, { id: "d", text: "Bronşit", correct: false }] },
    { id: 3, type: "SELECT", question: "'Alergia' ne demek?", options: [{ id: "a", text: "Grip", correct: false }, { id: "b", text: "Alerji", correct: true }, { id: "c", text: "Enfeksiyon", correct: false }, { id: "d", text: "Virüs", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Gripe", options: [{ id: "a", text: "Soğuk algınlığı", correct: false }, { id: "b", text: "Grip", correct: true }, { id: "c", text: "Alerji", correct: false }, { id: "d", text: "Bronşit", correct: false }] },
    { id: 5, type: "SELECT", question: "'Infección' ne demek?", options: [{ id: "a", text: "Alerji", correct: false }, { id: "b", text: "Enfeksiyon", correct: true }, { id: "c", text: "Grip", correct: false }, { id: "d", text: "Virüs", correct: false }] },
    { id: 6, type: "SELECT", question: "'Virus' ne demek?", options: [{ id: "a", text: "Bakteri", correct: false }, { id: "b", text: "Virüs", correct: true }, { id: "c", text: "Enfeksiyon", correct: false }, { id: "d", text: "Grip", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Alergia", options: [{ id: "a", text: "Grip", correct: false }, { id: "b", text: "Alerji", correct: true }, { id: "c", text: "Enfeksiyon", correct: false }, { id: "d", text: "Soğuk algınlığı", correct: false }] },
    { id: 8, type: "SELECT", question: "'Vacuna' ne demek?", options: [{ id: "a", text: "İlaç", correct: false }, { id: "b", text: "Aşı", correct: true }, { id: "c", text: "Enjeksiyon", correct: false }, { id: "d", text: "Vitamin", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Grip", correctAnswer: "Gripe" },
    { id: 10, type: "SELECT", question: "'Fármaco' ne demek?", options: [{ id: "a", text: "Eczane", correct: false }, { id: "b", text: "İlaç", correct: true }, { id: "c", text: "Reçete", correct: false }, { id: "d", text: "Vitamin", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Tengo alergia al polen", options: [{ id: "a", text: "Yiyecek alerjim var", correct: false }, { id: "b", text: "Polen alerjim var", correct: true }, { id: "c", text: "İlaç alerjim var", correct: false }, { id: "d", text: "Hayvan alerjim var", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Tengo un _____ muy fuerte.", options: [{ id: "a", text: "alergia", correct: false }, { id: "b", text: "resfriado", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Alerji", correctAnswer: "Alergia" },
    { id: 14, type: "SELECT", question: "'Bacteria' ne demek?", options: [{ id: "a", text: "Virüs", correct: false }, { id: "b", text: "Bakteri", correct: true }, { id: "c", text: "Enfeksiyon", correct: false }, { id: "d", text: "Alerji", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Polen alerjim var.", correctAnswer: "Tengo alergia al polen" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Necesito la _____ contra la gripe.", options: [{ id: "a", text: "pastilla", correct: false }, { id: "b", text: "vacuna", correct: true }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Es una infección bacteriana", options: [{ id: "a", text: "Viral enfeksiyon", correct: false }, { id: "b", text: "Bakteriyel enfeksiyon", correct: true }, { id: "c", text: "Alerjik reaksiyon", correct: false }, { id: "d", text: "Grip", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Creo que es un _____.", options: [{ id: "a", text: "bacteria", correct: false }, { id: "b", text: "virus", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Bakteriyel enfeksiyon.", correctAnswer: "Es una infección bacteriana" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "Grip aşısına ihtiyacım var.", correctAnswer: "Necesito la vacuna contra la gripe" },
];

export const unit28Quiz4: Question[] = [
    { id: 1, type: "SELECT", question: "'Receta médica' ne demek?", options: [{ id: "a", text: "İlaç", correct: false }, { id: "b", text: "Tıbbi reçete", correct: true }, { id: "c", text: "Randevu", correct: false }, { id: "d", text: "Rapor", correct: false }] },
    { id: 2, type: "SELECT", question: "'Descanso' ne demek?", options: [{ id: "a", text: "Çalışma", correct: false }, { id: "b", text: "Dinlenme", correct: true }, { id: "c", text: "Egzersiz", correct: false }, { id: "d", text: "Yemek", correct: false }] },
    { id: 3, type: "SELECT", question: "'Mejora' ne demek?", options: [{ id: "a", text: "Kötüleşme", correct: false }, { id: "b", text: "İyileşme/Düzelme", correct: true }, { id: "c", text: "Değişim", correct: false }, { id: "d", text: "Tekrar", correct: false }] },
    { id: 4, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Receta médica", options: [{ id: "a", text: "İlaç", correct: false }, { id: "b", text: "Tıbbi reçete", correct: true }, { id: "c", text: "Rapor", correct: false }, { id: "d", text: "Randevu", correct: false }] },
    { id: 5, type: "SELECT", question: "'Empeora' ne demek?", options: [{ id: "a", text: "İyileşiyor", correct: false }, { id: "b", text: "Kötüleşiyor", correct: true }, { id: "c", text: "Aynı kalıyor", correct: false }, { id: "d", text: "Değişiyor", correct: false }] },
    { id: 6, type: "SELECT", question: "'Crónico' ne demek?", options: [{ id: "a", text: "Akut", correct: false }, { id: "b", text: "Kronik", correct: true }, { id: "c", text: "Geçici", correct: false }, { id: "d", text: "Hafif", correct: false }] },
    { id: 7, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Descanso", options: [{ id: "a", text: "Çalışma", correct: false }, { id: "b", text: "Dinlenme", correct: true }, { id: "c", text: "Egzersiz", correct: false }, { id: "d", text: "Yürüyüş", correct: false }] },
    { id: 8, type: "SELECT", question: "'Recuperarse' ne demek?", options: [{ id: "a", text: "Hastalanmak", correct: false }, { id: "b", text: "İyileşmek", correct: true }, { id: "c", text: "Kötüleşmek", correct: false }, { id: "d", text: "Beklemek", correct: false }] },
    { id: 9, type: "TRANSLATE", question: "Çevir:", hint: "Tıbbi reçete", correctAnswer: "Receta médica" },
    { id: 10, type: "SELECT", question: "'Baja médica' ne demek?", options: [{ id: "a", text: "Yüksek ateş", correct: false }, { id: "b", text: "Sağlık raporu/İzin", correct: true }, { id: "c", text: "Reçete", correct: false }, { id: "d", text: "Teşhis", correct: false }] },
    { id: 11, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Necesita descanso", options: [{ id: "a", text: "Egzersiz lazım", correct: false }, { id: "b", text: "Dinlenme lazım", correct: true }, { id: "c", text: "İlaç lazım", correct: false }, { id: "d", text: "Ameliyat lazım", correct: false }] },
    { id: 12, type: "FILL_BLANK", question: "Doldur:", sentence: "Aquí tiene su _____ médica.", options: [{ id: "a", text: "cita", correct: false }, { id: "b", text: "receta", correct: true }] },
    { id: 13, type: "TRANSLATE", question: "Çevir:", hint: "Dinlenme", correctAnswer: "Descanso" },
    { id: 14, type: "SELECT", question: "'Curar' ne demek?", options: [{ id: "a", text: "Hastalanmak", correct: false }, { id: "b", text: "İyileştirmek", correct: true }, { id: "c", text: "Beklemek", correct: false }, { id: "d", text: "Kontrol etmek", correct: false }] },
    { id: 15, type: "TRANSLATE", question: "Çevir:", hint: "Dinlenmeniz lazım.", correctAnswer: "Necesita descanso" },
    { id: 16, type: "FILL_BLANK", question: "Doldur:", sentence: "Está _____ rápidamente.", options: [{ id: "a", text: "empeorando", correct: false }, { id: "b", text: "mejorando", correct: true }] },
    { id: 17, type: "LISTENING", question: "Duyduğunu seç:", audioText: "Va a recuperarse pronto", options: [{ id: "a", text: "Uzun sürecek", correct: false }, { id: "b", text: "Yakında iyileşecek", correct: true }, { id: "c", text: "Kötüleşecek", correct: false }, { id: "d", text: "Değişmeyecek", correct: false }] },
    { id: 18, type: "FILL_BLANK", question: "Doldur:", sentence: "Es una enfermedad _____.", options: [{ id: "a", text: "aguda", correct: false }, { id: "b", text: "crónica", correct: true }] },
    { id: 19, type: "TRANSLATE", question: "Çevir:", hint: "Yakında iyileşeceksiniz.", correctAnswer: "Va a recuperarse pronto" },
    { id: 20, type: "TRANSLATE", question: "Çevir:", hint: "İşte tıbbi reçeteniz.", correctAnswer: "Aquí tiene su receta médica" },
];

// ===== Placeholder for Quiz29-30 =====
export const unit29Quiz1: Question[] = [];
export const unit29Quiz2: Question[] = [];
export const unit29Quiz3: Question[] = [];
export const unit29Quiz4: Question[] = [];
export const unit30Quiz1: Question[] = [];
export const unit30Quiz2: Question[] = [];
export const unit30Quiz3: Question[] = [];
export const unit30Quiz4: Question[] = [];
