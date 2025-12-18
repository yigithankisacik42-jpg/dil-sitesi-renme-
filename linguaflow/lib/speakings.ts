/**
 * LinguaFlow Konuşma Veritabanı - İspanyolca
 * 
 * Her ünite için özel SPEAKING içeriği
 */

import { getA2SpeakingForUnit } from './speakings-a2';
import { getB1SpeakingForUnit } from './speakings-b1';
import { getB2SpeakingForUnit } from './speakings-b2';

export interface SpeakingExercise {
    id: number;
    type: "repeat" | "respond";
    prompt: string;
    text: string;
    translation: string;
    expectedKeywords?: string[];
}

export interface UnitSpeaking {
    unitId: number;
    title: string;
    language: string;
    level: string;
    exercises: SpeakingExercise[];
}

// ===== ÜNİTE 1-6 =====
const unit1Speaking: UnitSpeaking = {
    unitId: 1, title: "Selamlaşma Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "¡Hola! ¿Cómo estás?", translation: "Merhaba! Nasılsın?" },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Buenos días, mucho gusto.", translation: "Günaydın, memnun oldum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cómo te llamas?", translation: "Adın ne?", expectedKeywords: ["me llamo", "soy"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿De dónde eres?", translation: "Nerelisin?", expectedKeywords: ["soy de", "vengo de"] },
    ]
};

const unit2Speaking: UnitSpeaking = {
    unitId: 2, title: "Sayı Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu sayıları tekrar et:", text: "Uno, dos, tres, cuatro, cinco.", translation: "Bir, iki, üç, dört, beş." },
        { id: 2, type: "repeat", prompt: "Bu sayıları tekrar et:", text: "Diez, once, doce, trece, catorce, quince.", translation: "On, onbir, oniki, onüç, ondört, onbeş." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuántos años tienes?", translation: "Kaç yaşındasın?", expectedKeywords: ["tengo", "años"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Veinte euros, por favor.", translation: "Yirmi euro, lütfen." },
    ]
};

const unit3Speaking: UnitSpeaking = {
    unitId: 3, title: "Aile Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mi padre se llama Carlos.", translation: "Babamın adı Carlos." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Tengo dos hermanos.", translation: "İki kardeşim var." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Tienes hermanos?", translation: "Kardeşin var mı?", expectedKeywords: ["tengo", "hermano", "hermana", "no tengo"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cómo se llama tu madre?", translation: "Annenin adı ne?", expectedKeywords: ["se llama", "mi madre"] },
    ]
};

const unit4Speaking: UnitSpeaking = {
    unitId: 4, title: "Renk Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "El cielo es azul.", translation: "Gökyüzü mavidir." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Las rosas son rojas.", translation: "Güller kırmızıdır." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿De qué color es el sol?", translation: "Güneş ne renk?", expectedKeywords: ["amarillo"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Me gusta el color verde.", translation: "Yeşil rengi seviyorum." },
    ]
};

const unit5Speaking: UnitSpeaking = {
    unitId: 5, title: "Yemek Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Quiero una manzana.", translation: "Bir elma istiyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Me gusta el pescado.", translation: "Balığı seviyorum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué quieres comer?", translation: "Ne yemek istiyorsun?", expectedKeywords: ["quiero", "comer"] },
        { id: 4, type: "repeat", prompt: "Bu sipariş cümlesini tekrar et:", text: "Una ensalada, por favor.", translation: "Bir salata, lütfen." },
    ]
};

const unit6Speaking: UnitSpeaking = {
    unitId: 6, title: "İçecek Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Un café con leche, por favor.", translation: "Sütlü bir kahve, lütfen." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Quisiera un vaso de agua.", translation: "Bir bardak su isterdim." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué quieres beber?", translation: "Ne içmek istiyorsun?", expectedKeywords: ["quiero", "beber", "agua", "café", "té"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "La cerveza está fría.", translation: "Bira soğuk." },
    ]
};

// ===== ÜNİTE 7: GÜNLER VE AYLAR =====
const unit7Speaking: UnitSpeaking = {
    unitId: 7, title: "Gün ve Ay Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Günleri tekrar et:", text: "Lunes, martes, miércoles, jueves, viernes.", translation: "Pazartesi, Salı, Çarşamba, Perşembe, Cuma." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hoy es sábado.", translation: "Bugün cumartesi." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué día es hoy?", translation: "Bugün günlerden ne?", expectedKeywords: ["hoy es", "lunes", "martes", "miércoles"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿En qué mes estamos?", translation: "Hangi aydayız?", expectedKeywords: ["estamos en", "enero", "diciembre"] },
    ]
};

// ===== ÜNİTE 8: SAYILAR 21-100 =====
const unit8Speaking: UnitSpeaking = {
    unitId: 8, title: "Büyük Sayı Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Onları tekrar et:", text: "Veinte, treinta, cuarenta, cincuenta.", translation: "Yirmi, otuz, kırk, elli." },
        { id: 2, type: "repeat", prompt: "Bu sayıyı tekrar et:", text: "Setenta y cinco.", translation: "Yetmiş beş." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuánto cuesta?", translation: "Ne kadar?", expectedKeywords: ["euros", "treinta", "cuarenta", "cincuenta"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Cien páginas.", translation: "Yüz sayfa." },
    ]
};

// ===== ÜNİTE 9: EV ODALARI =====
const unit9Speaking: UnitSpeaking = {
    unitId: 9, title: "Ev Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Estoy en la cocina.", translation: "Mutfaktayım." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mi casa tiene tres dormitorios.", translation: "Evimin üç yatak odası var." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Dónde estás?", translation: "Neredesin?", expectedKeywords: ["estoy en", "cocina", "salón", "dormitorio"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuántas habitaciones tiene tu casa?", translation: "Evinin kaç odası var?", expectedKeywords: ["tiene", "habitaciones", "dormitorios"] },
    ]
};

// ===== ÜNİTE 10: MOBİLYALAR =====
const unit10Speaking: UnitSpeaking = {
    unitId: 10, title: "Mobilya Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hay una mesa en la cocina.", translation: "Mutfakta bir masa var." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "El sofá está en el salón.", translation: "Koltuk oturma odasında." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Dónde está la televisión?", translation: "Televizyon nerede?", expectedKeywords: ["está en", "salón", "dormitorio"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Necesito una silla nueva.", translation: "Yeni bir sandalyeye ihtiyacım var." },
    ]
};

// ===== ÜNİTE 11: VÜCUT BÖLÜMLERİ =====
const unit11Speaking: UnitSpeaking = {
    unitId: 11, title: "Vücut Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Me duele la cabeza.", translation: "Başım ağrıyor." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Tengo dolor de estómago.", translation: "Karnım ağrıyor." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué te duele?", translation: "Neren ağrıyor?", expectedKeywords: ["me duele", "cabeza", "estómago", "pierna"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Necesito ir al médico.", translation: "Doktora gitmem gerekiyor." },
    ]
};

// ===== ÜNİTE 12: GİYSİLER =====
const unit12Speaking: UnitSpeaking = {
    unitId: 12, title: "Giysi Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Llevo una camisa azul.", translation: "Mavi gömlek giyiyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "¿Tiene esta camiseta en rojo?", translation: "Bu tişörtün kırmızısı var mı?" },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué llevas hoy?", translation: "Bugün ne giyiyorsun?", expectedKeywords: ["llevo", "camisa", "pantalón", "camiseta"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Quiero la talla mediana.", translation: "Orta beden istiyorum." },
    ]
};

// ===== ÜNİTE 13: HAYVANLAR =====
const unit13Speaking: UnitSpeaking = {
    unitId: 13, title: "Hayvan Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Tengo un perro y un gato.", translation: "Bir köpeğim ve bir kedim var." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mi animal favorito es el elefante.", translation: "En sevdiğim hayvan fil." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Tienes mascotas?", translation: "Evcil hayvanın var mı?", expectedKeywords: ["tengo", "perro", "gato", "no tengo"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuál es tu animal favorito?", translation: "En sevdiğin hayvan hangisi?", expectedKeywords: ["favorito", "es", "perro", "gato", "león"] },
    ]
};

// ===== ÜNİTE 14: MESLEKLER =====
const unit14Speaking: UnitSpeaking = {
    unitId: 14, title: "Meslek Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Soy estudiante.", translation: "Öğrenciyim." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Trabajo en un hospital.", translation: "Bir hastanede çalışıyorum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿A qué te dedicas?", translation: "Ne iş yapıyorsun?", expectedKeywords: ["soy", "trabajo", "estudiante", "médico", "profesor"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Dónde trabajas?", translation: "Nerede çalışıyorsun?", expectedKeywords: ["trabajo en", "oficina", "hospital", "escuela"] },
    ]
};

// ===== ÜNİTE 15: ŞEHİRDE YERLER =====
const unit15Speaking: UnitSpeaking = {
    unitId: 15, title: "Şehir Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "¿Dónde está el hospital?", translation: "Hastane nerede?" },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Está al lado del parque.", translation: "Parkın yanında." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Está cerca o lejos?", translation: "Yakın mı uzak mı?", expectedKeywords: ["cerca", "lejos"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "La farmacia está enfrente del banco.", translation: "Eczane bankanın karşısında." },
    ]
};

// ===== ÜNİTE 16: ULAŞIM ARAÇLARI =====
const unit16Speaking: UnitSpeaking = {
    unitId: 16, title: "Ulaşım Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Voy al trabajo en metro.", translation: "İşe metroyla gidiyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Prefiero viajar en tren.", translation: "Trenle seyahat etmeyi tercih ederim." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cómo vas al trabajo?", translation: "İşe nasıl gidiyorsun?", expectedKeywords: ["voy en", "coche", "metro", "autobús", "bicicleta"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Tienes coche?", translation: "Araban var mı?", expectedKeywords: ["sí", "no", "tengo", "no tengo"] },
    ]
};

// ===== ÜNİTE 17: GÜNLÜK RUTİNLER =====
const unit17Speaking: UnitSpeaking = {
    unitId: 17, title: "Rutin Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Me levanto a las siete.", translation: "Yedide kalkıyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Desayuno café y tostadas.", translation: "Kahve ve tost kahvaltı yapıyorum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿A qué hora te levantas?", translation: "Saat kaçta kalkıyorsun?", expectedKeywords: ["me levanto", "a las", "siete", "ocho"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿A qué hora te acuestas?", translation: "Saat kaçta yatıyorsun?", expectedKeywords: ["me acuesto", "a las", "once", "diez"] },
    ]
};

// ===== ÜNİTE 18: SAAT KAÇ? =====
const unit18Speaking: UnitSpeaking = {
    unitId: 18, title: "Saat Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Son las tres y media.", translation: "Üç buçuk." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "La clase empieza a las nueve.", translation: "Ders dokuzda başlıyor." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué hora es?", translation: "Saat kaç?", expectedKeywords: ["son las", "es la", "media", "cuarto"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Tengo una cita a las cinco y cuarto.", translation: "Beşi çeyrek geçe randevum var." },
    ]
};

// ===== ÜNİTE 19: HAVA DURUMU =====
const unit19Speaking: UnitSpeaking = {
    unitId: 19, title: "Hava Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Hoy hace mucho sol.", translation: "Bugün çok güneşli." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Mañana va a llover.", translation: "Yarın yağmur yağacak." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué tiempo hace?", translation: "Hava nasıl?", expectedKeywords: ["hace", "sol", "frío", "calor", "llueve"] },
        { id: 4, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "En invierno hace mucho frío.", translation: "Kışın çok soğuk olur." },
    ]
};

// ===== ÜNİTE 20: HOBİLER =====
const unit20Speaking: UnitSpeaking = {
    unitId: 20, title: "Hobi Pratiği", language: "İspanyolca", level: "A1",
    exercises: [
        { id: 1, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Me gusta mucho leer.", translation: "Okumayı çok seviyorum." },
        { id: 2, type: "repeat", prompt: "Bu cümleyi tekrar et:", text: "Los fines de semana juego al fútbol.", translation: "Hafta sonları futbol oynuyorum." },
        { id: 3, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Cuáles son tus hobbies?", translation: "Hobilerin neler?", expectedKeywords: ["me gusta", "leer", "nadar", "cocinar", "bailar"] },
        { id: 4, type: "respond", prompt: "Bu soruya cevap ver:", text: "¿Qué te gusta hacer en tu tiempo libre?", translation: "Boş zamanında ne yapmayı seviyorsun?", expectedKeywords: ["me gusta", "leer", "ver", "jugar", "escuchar"] },
    ]
};

// Ünite ID'sine göre speaking getir
export function getSpeakingForUnit(unitId: number): UnitSpeaking {
    // A1 (1-20)
    if (unitId >= 1 && unitId <= 20) {
        const a1Speakings: { [key: number]: UnitSpeaking } = {
            1: unit1Speaking, 2: unit2Speaking, 3: unit3Speaking, 4: unit4Speaking, 5: unit5Speaking,
            6: unit6Speaking, 7: unit7Speaking, 8: unit8Speaking, 9: unit9Speaking, 10: unit10Speaking,
            11: unit11Speaking, 12: unit12Speaking, 13: unit13Speaking, 14: unit14Speaking, 15: unit15Speaking,
            16: unit16Speaking, 17: unit17Speaking, 18: unit18Speaking, 19: unit19Speaking, 20: unit20Speaking
        };
        return a1Speakings[unitId] || unit1Speaking;
    }

    // A2 (21-40)
    if (unitId >= 21 && unitId <= 40) {
        const a2Speaking = getA2SpeakingForUnit(unitId);
        return a2Speaking || unit1Speaking;
    }

    // B1 (41-60)
    if (unitId >= 41 && unitId <= 60) {
        const b1Speaking = getB1SpeakingForUnit(unitId);
        return b1Speaking || unit1Speaking;
    }

    // B2 (61-80)
    if (unitId >= 61 && unitId <= 80) {
        const b2Speaking = getB2SpeakingForUnit(unitId);
        return b2Speaking || unit1Speaking;
    }

    return unit1Speaking;
}

