/**
 * LinguaFlow Kelime Veritabanı - İspanyolca A2
 * 20 Ünite (ID: 21-40), her biri için 10 kelime
 */

import { UnitVocabulary, Vocabulary } from './vocabulary';

// ===== ÜNİTE 21: GEÇMİŞ ZAMAN 1 (DÜZENLİ FİİLLER) =====
const unit21Vocab: UnitVocabulary = {
    unitId: 21, title: "Geçmiş Zaman Kelimeleri 1",
    words: [
        { word: "Ayer", meaning: "Dün", pronunciation: "a-yer", example: "Ayer fui al cine.", exampleTranslation: "Dün sinemaya gittim." },
        { word: "Anteayer", meaning: "Evvelsi gün", pronunciation: "an-te-a-yer", example: "Anteayer llovió mucho.", exampleTranslation: "Evvelsi gün çok yağmur yağdı." },
        { word: "La semana pasada", meaning: "Geçen hafta", pronunciation: "la se-ma-na pa-sa-da", example: "La semana pasada trabajé mucho.", exampleTranslation: "Geçen hafta çok çalıştım." },
        { word: "El mes pasado", meaning: "Geçen ay", pronunciation: "el mes pa-sa-do", example: "El mes pasado viajé a Madrid.", exampleTranslation: "Geçen ay Madrid'e seyahat ettim." },
        { word: "El año pasado", meaning: "Geçen yıl", pronunciation: "el a-nyo pa-sa-do", example: "El año pasado estudié español.", exampleTranslation: "Geçen yıl İspanyolca öğrendim." },
        { word: "Hace dos días", meaning: "İki gün önce", pronunciation: "a-se dos di-as", example: "Hace dos días compré un libro.", exampleTranslation: "İki gün önce bir kitap aldım." },
        { word: "Esta mañana", meaning: "Bu sabah", pronunciation: "es-ta ma-nya-na", example: "Esta mañana desayuné temprano.", exampleTranslation: "Bu sabah erken kahvaltı ettim." },
        { word: "Anoche", meaning: "Dün gece", pronunciation: "a-no-che", example: "Anoche cené con amigos.", exampleTranslation: "Dün gece arkadaşlarla yemek yedim." },
        { word: "Entonces", meaning: "O zaman", pronunciation: "en-ton-ses", example: "Entonces era muy joven.", exampleTranslation: "O zaman çok gençtim." },
        { word: "Después", meaning: "Sonra", pronunciation: "des-pues", example: "Después fui a casa.", exampleTranslation: "Sonra eve gittim." }
    ]
};

// ===== ÜNİTE 22: GEÇMİŞ ZAMAN 2 (DÜZENSİZ FİİLLER) =====
const unit22Vocab: UnitVocabulary = {
    unitId: 22, title: "Düzensiz Fiiller (Geçmiş)",
    words: [
        { word: "Ir (Fui)", meaning: "Gitmek (Gittim)", pronunciation: "ir / fui", example: "Fui al mercado.", exampleTranslation: "Markete gittim." },
        { word: "Ser (Fui)", meaning: "Olmak (Oldum)", pronunciation: "ser / fui", example: "Fue un día especial.", exampleTranslation: "Özel bir gündü." },
        { word: "Hacer (Hice)", meaning: "Yapmak (Yaptım)", pronunciation: "a-ser / i-se", example: "Hice la tarea.", exampleTranslation: "Ödevi yaptım." },
        { word: "Tener (Tuve)", meaning: "Sahip olmak (Sahiptim)", pronunciation: "te-ner / tu-ve", example: "Tuve suerte.", exampleTranslation: "Şansım vardı." },
        { word: "Estar (Estuve)", meaning: "Olmak/Bulunmak", pronunciation: "es-tar / es-tu-ve", example: "Estuve en Barcelona.", exampleTranslation: "Barcelona'daydım." },
        { word: "Poder (Pude)", meaning: "Yapabilmek", pronunciation: "po-der / pu-de", example: "Pude terminar.", exampleTranslation: "Bitirebildim." },
        { word: "Decir (Dije)", meaning: "Söylemek", pronunciation: "de-sir / di-he", example: "Dije la verdad.", exampleTranslation: "Gerçeği söyledim." },
        { word: "Venir (Vine)", meaning: "Gelmek", pronunciation: "ve-nir / vi-ne", example: "Vine temprano.", exampleTranslation: "Erken geldim." },
        { word: "Querer (Quise)", meaning: "İstemek", pronunciation: "ke-rer / ki-se", example: "Quise ayudar.", exampleTranslation: "Yardım etmek istedim." },
        { word: "Saber (Supe)", meaning: "Bilmek", pronunciation: "sa-ber / su-pe", example: "Supe la respuesta.", exampleTranslation: "Cevabı biliyordum." }
    ]
};

// ===== ÜNİTE 23: RESTORANDA =====
const unit23Vocab: UnitVocabulary = {
    unitId: 23, title: "Restoran Kelimeleri",
    words: [
        { word: "Menú", meaning: "Menü", pronunciation: "me-nu", example: "¿Me trae el menú?", exampleTranslation: "Menüyü getirir misiniz?" },
        { word: "Camarero", meaning: "Garson", pronunciation: "ka-ma-re-ro", example: "El camarero es muy amable.", exampleTranslation: "Garson çok nazik." },
        { word: "La cuenta", meaning: "Hesap", pronunciation: "la kuen-ta", example: "La cuenta, por favor.", exampleTranslation: "Hesap lütfen." },
        { word: "Reserva", meaning: "Rezervasyon", pronunciation: "re-ser-va", example: "Tengo una reserva.", exampleTranslation: "Bir rezervasyonum var." },
        { word: "Propina", meaning: "Bahşiş", pronunciation: "pro-pi-na", example: "Dejé una propina.", exampleTranslation: "Bahşiş bıraktım." },
        { word: "Plato del día", meaning: "Günün yemeği", pronunciation: "pla-to del di-a", example: "¿Cuál es el plato del día?", exampleTranslation: "Günün yemeği ne?" },
        { word: "Postre", meaning: "Tatlı", pronunciation: "pos-tre", example: "Quiero un postre.", exampleTranslation: "Bir tatlı istiyorum." },
        { word: "Entrante", meaning: "Başlangıç", pronunciation: "en-tran-te", example: "De entrante, sopa.", exampleTranslation: "Başlangıç olarak çorba." },
        { word: "Plato principal", meaning: "Ana yemek", pronunciation: "pla-to prin-si-pal", example: "Mi plato principal es pescado.", exampleTranslation: "Ana yemeğim balık." },
        { word: "Bebida", meaning: "İçecek", pronunciation: "be-bi-da", example: "¿Qué bebida desea?", exampleTranslation: "Hangi içeceği istersiniz?" }
    ]
};

// ===== ÜNİTE 24: ALIŞVERİŞ =====
const unit24Vocab: UnitVocabulary = {
    unitId: 24, title: "Alışveriş Kelimeleri",
    words: [
        { word: "Precio", meaning: "Fiyat", pronunciation: "pre-sio", example: "¿Cuál es el precio?", exampleTranslation: "Fiyatı ne?" },
        { word: "Descuento", meaning: "İndirim", pronunciation: "des-kuen-to", example: "Hay un 20% de descuento.", exampleTranslation: "%20 indirim var." },
        { word: "Oferta", meaning: "Kampanya/Fırsat", pronunciation: "o-fer-ta", example: "Está en oferta.", exampleTranslation: "Kampanyada." },
        { word: "Talla", meaning: "Beden", pronunciation: "ta-ya", example: "¿Qué talla usa?", exampleTranslation: "Hangi beden giyersiniz?" },
        { word: "Probador", meaning: "Giyinme kabini", pronunciation: "pro-ba-dor", example: "El probador está allí.", exampleTranslation: "Giyinme kabini orada." },
        { word: "Caja", meaning: "Kasa", pronunciation: "ka-ha", example: "Pague en caja.", exampleTranslation: "Kasada ödeyin." },
        { word: "Efectivo", meaning: "Nakit", pronunciation: "e-fek-ti-vo", example: "Pago en efectivo.", exampleTranslation: "Nakit ödüyorum." },
        { word: "Tarjeta", meaning: "Kart", pronunciation: "tar-he-ta", example: "¿Aceptan tarjeta?", exampleTranslation: "Kart kabul ediyor musunuz?" },
        { word: "Recibo", meaning: "Fiş", pronunciation: "re-si-bo", example: "¿Me da el recibo?", exampleTranslation: "Fişi verir misiniz?" },
        { word: "Cambio", meaning: "Para üstü", pronunciation: "kam-bio", example: "Aquí está su cambio.", exampleTranslation: "Buyrun para üstü." }
    ]
};

// ===== ÜNİTE 25: SEYAHAT PLANLARI =====
const unit25Vocab: UnitVocabulary = {
    unitId: 25, title: "Seyahat Kelimeleri",
    words: [
        { word: "Billete", meaning: "Bilet", pronunciation: "bi-ye-te", example: "Compré un billete de avión.", exampleTranslation: "Uçak bileti aldım." },
        { word: "Ida y vuelta", meaning: "Gidiş-dönüş", pronunciation: "i-da i vuel-ta", example: "Un billete de ida y vuelta.", exampleTranslation: "Gidiş-dönüş bileti." },
        { word: "Solo ida", meaning: "Tek yön", pronunciation: "so-lo i-da", example: "Solo ida, por favor.", exampleTranslation: "Sadece gidiş lütfen." },
        { word: "Maleta", meaning: "Bavul", pronunciation: "ma-le-ta", example: "Mi maleta es negra.", exampleTranslation: "Bavulum siyah." },
        { word: "Equipaje", meaning: "Bagaj", pronunciation: "e-ki-pa-he", example: "¿Dónde está el equipaje?", exampleTranslation: "Bagaj nerede?" },
        { word: "Pasaporte", meaning: "Pasaport", pronunciation: "pa-sa-por-te", example: "Necesito mi pasaporte.", exampleTranslation: "Pasaportuma ihtiyacım var." },
        { word: "Destino", meaning: "Varış yeri", pronunciation: "des-ti-no", example: "Mi destino es Barcelona.", exampleTranslation: "Varış yerim Barcelona." },
        { word: "Viaje", meaning: "Seyahat", pronunciation: "via-he", example: "Buen viaje!", exampleTranslation: "İyi yolculuklar!" },
        { word: "Turista", meaning: "Turist", pronunciation: "tu-ris-ta", example: "Soy turista.", exampleTranslation: "Ben turistim." },
        { word: "Vacaciones", meaning: "Tatil", pronunciation: "va-ka-sio-nes", example: "Estoy de vacaciones.", exampleTranslation: "Tatildeyim." }
    ]
};

// ===== ÜNİTE 26: OTEL REZERVASYONU =====
const unit26Vocab: UnitVocabulary = {
    unitId: 26, title: "Otel Kelimeleri",
    words: [
        { word: "Habitación", meaning: "Oda", pronunciation: "a-bi-ta-sion", example: "Quiero una habitación doble.", exampleTranslation: "Çift kişilik oda istiyorum." },
        { word: "Recepción", meaning: "Resepsiyon", pronunciation: "re-sep-sion", example: "Pregunte en recepción.", exampleTranslation: "Resepsiyonda sorun." },
        { word: "Llave", meaning: "Anahtar", pronunciation: "ya-ve", example: "La llave de la habitación.", exampleTranslation: "Oda anahtarı." },
        { word: "Desayuno incluido", meaning: "Kahvaltı dahil", pronunciation: "de-sa-yu-no in-klu-i-do", example: "¿El desayuno está incluido?", exampleTranslation: "Kahvaltı dahil mi?" },
        { word: "Check-in", meaning: "Giriş yapma", pronunciation: "çek-in", example: "El check-in es a las 14:00.", exampleTranslation: "Giriş saat 14:00'te." },
        { word: "Check-out", meaning: "Çıkış yapma", pronunciation: "çek-aut", example: "El check-out es a las 12:00.", exampleTranslation: "Çıkış saat 12:00'de." },
        { word: "Piscina", meaning: "Havuz", pronunciation: "pis-si-na", example: "El hotel tiene piscina.", exampleTranslation: "Otelin havuzu var." },
        { word: "Baño privado", meaning: "Özel banyo", pronunciation: "ba-nyo pri-va-do", example: "Habitación con baño privado.", exampleTranslation: "Özel banyolu oda." },
        { word: "Wifi gratis", meaning: "Ücretsiz wifi", pronunciation: "wi-fi gra-tis", example: "Hay wifi gratis.", exampleTranslation: "Ücretsiz wifi var." },
        { word: "Vista al mar", meaning: "Deniz manzarası", pronunciation: "vis-ta al mar", example: "Una habitación con vista al mar.", exampleTranslation: "Deniz manzaralı bir oda." }
    ]
};

// ===== ÜNİTE 27: HAVALİMANINDA =====
const unit27Vocab: UnitVocabulary = {
    unitId: 27, title: "Havalimanı Kelimeleri",
    words: [
        { word: "Vuelo", meaning: "Uçuş", pronunciation: "vue-lo", example: "Mi vuelo sale a las 10.", exampleTranslation: "Uçuşum 10'da kalkıyor." },
        { word: "Puerta de embarque", meaning: "Biniş kapısı", pronunciation: "puer-ta de em-bar-ke", example: "La puerta de embarque es la B12.", exampleTranslation: "Biniş kapısı B12." },
        { word: "Tarjeta de embarque", meaning: "Biniş kartı", pronunciation: "tar-he-ta de em-bar-ke", example: "Aquí está mi tarjeta de embarque.", exampleTranslation: "İşte biniş kartım." },
        { word: "Facturar", meaning: "Bagaj teslim etmek", pronunciation: "fak-tu-rar", example: "Necesito facturar mi maleta.", exampleTranslation: "Bavulumu teslim etmem gerekiyor." },
        { word: "Control de seguridad", meaning: "Güvenlik kontrolü", pronunciation: "kon-trol de se-gu-ri-dad", example: "Pase por el control de seguridad.", exampleTranslation: "Güvenlik kontrolünden geçin." },
        { word: "Retraso", meaning: "Gecikme", pronunciation: "re-tra-so", example: "El vuelo tiene retraso.", exampleTranslation: "Uçuş gecikmeli." },
        { word: "Escala", meaning: "Aktarma", pronunciation: "es-ka-la", example: "Tengo una escala en París.", exampleTranslation: "Paris'te aktarmam var." },
        { word: "Aterrizaje", meaning: "İniş", pronunciation: "a-te-rri-sa-he", example: "El aterrizaje fue suave.", exampleTranslation: "İniş yumuşaktı." },
        { word: "Despegue", meaning: "Kalkış", pronunciation: "des-pe-ge", example: "El despegue es en 30 minutos.", exampleTranslation: "Kalkış 30 dakika sonra." },
        { word: "Cinturón de seguridad", meaning: "Emniyet kemeri", pronunciation: "sin-tu-ron de se-gu-ri-dad", example: "Abróchense el cinturón.", exampleTranslation: "Kemerlerinizi bağlayın." }
    ]
};

// ===== ÜNİTE 28: DOKTORDA =====
const unit28Vocab: UnitVocabulary = {
    unitId: 28, title: "Sağlık Kelimeleri",
    words: [
        { word: "Síntoma", meaning: "Semptom", pronunciation: "sin-to-ma", example: "¿Cuáles son sus síntomas?", exampleTranslation: "Belirtileriniz neler?" },
        { word: "Fiebre", meaning: "Ateş", pronunciation: "fie-bre", example: "Tengo fiebre alta.", exampleTranslation: "Yüksek ateşim var." },
        { word: "Dolor", meaning: "Ağrı", pronunciation: "do-lor", example: "Tengo dolor de cabeza.", exampleTranslation: "Baş ağrım var." },
        { word: "Tos", meaning: "Öksürük", pronunciation: "tos", example: "Tengo mucha tos.", exampleTranslation: "Çok öksürüyorum." },
        { word: "Resfriado", meaning: "Soğuk algınlığı", pronunciation: "res-fri-a-do", example: "Estoy resfriado.", exampleTranslation: "Üşütmüşüm." },
        { word: "Receta", meaning: "Reçete", pronunciation: "re-se-ta", example: "Aquí está la receta.", exampleTranslation: "İşte reçete." },
        { word: "Cita médica", meaning: "Doktor randevusu", pronunciation: "si-ta me-di-ka", example: "Tengo una cita médica.", exampleTranslation: "Doktor randevum var." },
        { word: "Urgencias", meaning: "Acil servis", pronunciation: "ur-hen-sias", example: "Vaya a urgencias.", exampleTranslation: "Acil servise gidin." },
        { word: "Alergia", meaning: "Alerji", pronunciation: "a-ler-hia", example: "Tengo alergia al polen.", exampleTranslation: "Polene alerjim var." },
        { word: "Pastilla", meaning: "Hap", pronunciation: "pas-ti-ya", example: "Tome una pastilla al día.", exampleTranslation: "Günde bir hap alın." }
    ]
};

// ===== ÜNİTE 29: ECZANEDE =====
const unit29Vocab: UnitVocabulary = {
    unitId: 29, title: "Eczane Kelimeleri",
    words: [
        { word: "Farmacia", meaning: "Eczane", pronunciation: "far-ma-sia", example: "Busco una farmacia.", exampleTranslation: "Eczane arıyorum." },
        { word: "Medicamento", meaning: "İlaç", pronunciation: "me-di-ka-men-to", example: "Necesito este medicamento.", exampleTranslation: "Bu ilaca ihtiyacım var." },
        { word: "Jarabe", meaning: "Şurup", pronunciation: "ha-ra-be", example: "Un jarabe para la tos.", exampleTranslation: "Öksürük şurubu." },
        { word: "Pomada", meaning: "Merhem", pronunciation: "po-ma-da", example: "Una pomada para quemaduras.", exampleTranslation: "Yanık merhemi." },
        { word: "Venda", meaning: "Bandaj", pronunciation: "ven-da", example: "Necesito una venda.", exampleTranslation: "Bandaja ihtiyacım var." },
        { word: "Analgésico", meaning: "Ağrı kesici", pronunciation: "a-nal-he-si-ko", example: "¿Tiene algún analgésico?", exampleTranslation: "Ağrı kesiciniz var mı?" },
        { word: "Antibiótico", meaning: "Antibiyotik", pronunciation: "an-ti-bio-ti-ko", example: "Necesito un antibiótico.", exampleTranslation: "Antibiyotiğe ihtiyacım var." },
        { word: "Gotas", meaning: "Damla", pronunciation: "go-tas", example: "Gotas para los ojos.", exampleTranslation: "Göz damlası." },
        { word: "Termómetro", meaning: "Termometre", pronunciation: "ter-mo-me-tro", example: "¿Tiene un termómetro?", exampleTranslation: "Termometreniz var mı?" },
        { word: "Tiritas", meaning: "Yara bandı", pronunciation: "ti-ri-tas", example: "Necesito tiritas.", exampleTranslation: "Yara bandına ihtiyacım var." }
    ]
};

// ===== ÜNİTE 30: MESLEKLER 2 =====
const unit30Vocab: UnitVocabulary = {
    unitId: 30, title: "İleri Meslekler",
    words: [
        { word: "Contador", meaning: "Muhasebeci", pronunciation: "kon-ta-dor", example: "Soy contador.", exampleTranslation: "Muhasebeciyim." },
        { word: "Diseñador", meaning: "Tasarımcı", pronunciation: "di-se-nya-dor", example: "Es diseñador gráfico.", exampleTranslation: "Grafik tasarımcı." },
        { word: "Periodista", meaning: "Gazeteci", pronunciation: "pe-rio-dis-ta", example: "Es periodista de TV.", exampleTranslation: "TV gazetecisi." },
        { word: "Programador", meaning: "Programcı", pronunciation: "pro-gra-ma-dor", example: "Soy programador web.", exampleTranslation: "Web programcısıyım." },
        { word: "Empresario", meaning: "İş adamı", pronunciation: "em-pre-sa-rio", example: "Es un empresario exitoso.", exampleTranslation: "Başarılı bir iş adamı." },
        { word: "Secretario", meaning: "Sekreter", pronunciation: "se-kre-ta-rio", example: "La secretaria está ocupada.", exampleTranslation: "Sekreter meşgul." },
        { word: "Piloto", meaning: "Pilot", pronunciation: "pi-lo-to", example: "Es piloto de avión.", exampleTranslation: "Uçak pilotu." },
        { word: "Chef", meaning: "Şef aşçı", pronunciation: "şef", example: "El chef prepara el plato.", exampleTranslation: "Şef yemeği hazırlıyor." },
        { word: "Vendedor", meaning: "Satıcı", pronunciation: "ven-de-dor", example: "Es vendedor de coches.", exampleTranslation: "Araba satıcısı." },
        { word: "Electricista", meaning: "Elektrikçi", pronunciation: "e-lek-tri-sis-ta", example: "Llamé al electricista.", exampleTranslation: "Elektrikçiyi aradım." }
    ]
};

// ===== ÜNİTE 31: İŞ GÖRÜŞMESİ =====
const unit31Vocab: UnitVocabulary = {
    unitId: 31, title: "İş Görüşmesi Kelimeleri",
    words: [
        { word: "Currículum", meaning: "CV/Özgeçmiş", pronunciation: "ku-rri-ku-lum", example: "Envié mi currículum.", exampleTranslation: "CV'mi gönderdim." },
        { word: "Entrevista", meaning: "Mülakat", pronunciation: "en-tre-vis-ta", example: "Tengo una entrevista mañana.", exampleTranslation: "Yarın mülakatım var." },
        { word: "Experiencia", meaning: "Deneyim", pronunciation: "eks-pe-rien-sia", example: "Tengo experiencia en ventas.", exampleTranslation: "Satış deneyimim var." },
        { word: "Contrato", meaning: "Sözleşme", pronunciation: "kon-tra-to", example: "Firmé el contrato.", exampleTranslation: "Sözleşmeyi imzaladım." },
        { word: "Salario", meaning: "Maaş", pronunciation: "sa-la-rio", example: "¿Cuál es el salario?", exampleTranslation: "Maaş ne kadar?" },
        { word: "Candidato", meaning: "Aday", pronunciation: "kan-di-da-to", example: "Hay muchos candidatos.", exampleTranslation: "Çok aday var." },
        { word: "Puesto", meaning: "Pozisyon", pronunciation: "pues-to", example: "Solicito el puesto de gerente.", exampleTranslation: "Müdür pozisyonuna başvuruyorum." },
        { word: "Cualificación", meaning: "Nitelik", pronunciation: "kua-li-fi-ka-sion", example: "¿Qué cualificaciones tiene?", exampleTranslation: "Nitelikleriniz neler?" },
        { word: "Jefe", meaning: "Patron/Şef", pronunciation: "he-fe", example: "Mi jefe es muy amable.", exampleTranslation: "Patronum çok iyi." },
        { word: "Empresa", meaning: "Şirket", pronunciation: "em-pre-sa", example: "Es una gran empresa.", exampleTranslation: "Büyük bir şirket." }
    ]
};

// ===== ÜNİTE 32: TELEFONDA =====
const unit32Vocab: UnitVocabulary = {
    unitId: 32, title: "Telefon Kelimeleri",
    words: [
        { word: "Llamada", meaning: "Arama", pronunciation: "ya-ma-da", example: "Recibí una llamada.", exampleTranslation: "Bir arama aldım." },
        { word: "Mensaje", meaning: "Mesaj", pronunciation: "men-sa-he", example: "Te envié un mensaje.", exampleTranslation: "Sana mesaj gönderdim." },
        { word: "Contestar", meaning: "Cevaplamak", pronunciation: "kon-tes-tar", example: "No contestó el teléfono.", exampleTranslation: "Telefona cevap vermedi." },
        { word: "Colgar", meaning: "Kapatmak (telefon)", pronunciation: "kol-gar", example: "No cuelgue, por favor.", exampleTranslation: "Lütfen kapatmayın." },
        { word: "Marcar", meaning: "Aramak (numara)", pronunciation: "mar-kar", example: "Marque este número.", exampleTranslation: "Bu numarayı arayın." },
        { word: "Ocupado", meaning: "Meşgul", pronunciation: "o-ku-pa-do", example: "La línea está ocupada.", exampleTranslation: "Hat meşgul." },
        { word: "Buzón de voz", meaning: "Sesli mesaj", pronunciation: "bu-son de vos", example: "Dejé un mensaje en el buzón.", exampleTranslation: "Sesli mesaj bıraktım." },
        { word: "Extensión", meaning: "Dahili numara", pronunciation: "eks-ten-sion", example: "La extensión es 123.", exampleTranslation: "Dahili 123." },
        { word: "Espere un momento", meaning: "Bir an bekleyin", pronunciation: "es-pe-re un mo-men-to", example: "Espere un momento, por favor.", exampleTranslation: "Bir dakika lütfen." },
        { word: "Diga/Dígame", meaning: "Buyurun/Efendim", pronunciation: "di-ga/di-ga-me", example: "¿Dígame?", exampleTranslation: "Efendim?" }
    ]
};

// ===== ÜNİTE 33: E-POSTA YAZMA =====
const unit33Vocab: UnitVocabulary = {
    unitId: 33, title: "E-posta Kelimeleri",
    words: [
        { word: "Correo electrónico", meaning: "E-posta", pronunciation: "ko-rre-o e-lek-tro-ni-ko", example: "Envié un correo electrónico.", exampleTranslation: "E-posta gönderdim." },
        { word: "Asunto", meaning: "Konu", pronunciation: "a-sun-to", example: "¿Cuál es el asunto?", exampleTranslation: "Konu ne?" },
        { word: "Adjunto", meaning: "Ek dosya", pronunciation: "ad-hun-to", example: "Le envío un archivo adjunto.", exampleTranslation: "Ek dosya gönderiyorum." },
        { word: "Destinatario", meaning: "Alıcı", pronunciation: "des-ti-na-ta-rio", example: "El destinatario es correcto.", exampleTranslation: "Alıcı doğru." },
        { word: "Remitente", meaning: "Gönderen", pronunciation: "re-mi-ten-te", example: "¿Quién es el remitente?", exampleTranslation: "Gönderen kim?" },
        { word: "Responder", meaning: "Cevaplamak", pronunciation: "res-pon-der", example: "Voy a responder mañana.", exampleTranslation: "Yarın cevap vereceğim." },
        { word: "Reenviar", meaning: "İletmek", pronunciation: "re-en-viar", example: "Voy a reenviar este correo.", exampleTranslation: "Bu emaili ileteceğim." },
        { word: "Bandeja de entrada", meaning: "Gelen kutusu", pronunciation: "ban-de-ha de en-tra-da", example: "Revisa tu bandeja de entrada.", exampleTranslation: "Gelen kutunu kontrol et." },
        { word: "Atentamente", meaning: "Saygılarımla", pronunciation: "a-ten-ta-men-te", example: "Firma: Atentamente, Juan.", exampleTranslation: "İmza: Saygılarımla, Juan." },
        { word: "Estimado/a", meaning: "Sayın", pronunciation: "es-ti-ma-do", example: "Estimado Sr. García.", exampleTranslation: "Sayın Bay García." }
    ]
};

// ===== ÜNİTE 34: DUYGULAR =====
const unit34Vocab: UnitVocabulary = {
    unitId: 34, title: "Duygu Kelimeleri",
    words: [
        { word: "Feliz", meaning: "Mutlu", pronunciation: "fe-lis", example: "Estoy muy feliz.", exampleTranslation: "Çok mutluyum." },
        { word: "Triste", meaning: "Üzgün", pronunciation: "tris-te", example: "Estoy triste hoy.", exampleTranslation: "Bugün üzgünüm." },
        { word: "Enfadado", meaning: "Kızgın", pronunciation: "en-fa-da-do", example: "Está enfadado conmigo.", exampleTranslation: "Bana kızgın." },
        { word: "Nervioso", meaning: "Gergin", pronunciation: "ner-vio-so", example: "Estoy nervioso por el examen.", exampleTranslation: "Sınav için gerginim." },
        { word: "Emocionado", meaning: "Heyecanlı", pronunciation: "e-mo-sio-na-do", example: "Estoy emocionado por el viaje.", exampleTranslation: "Seyahat için heyecanlıyım." },
        { word: "Cansado", meaning: "Yorgun", pronunciation: "kan-sa-do", example: "Estoy muy cansado.", exampleTranslation: "Çok yorgunum." },
        { word: "Aburrido", meaning: "Sıkılmış", pronunciation: "a-bu-rri-do", example: "Estoy aburrido.", exampleTranslation: "Sıkıldım." },
        { word: "Preocupado", meaning: "Endişeli", pronunciation: "pre-o-ku-pa-do", example: "Estoy preocupado por ti.", exampleTranslation: "Senin için endişeleniyorum." },
        { word: "Sorprendido", meaning: "Şaşırmış", pronunciation: "sor-pren-di-do", example: "Estoy sorprendido.", exampleTranslation: "Şaşırdım." },
        { word: "Orgulloso", meaning: "Gururlu", pronunciation: "or-gu-yo-so", example: "Estoy orgulloso de ti.", exampleTranslation: "Seninle gurur duyuyorum." }
    ]
};

// ===== ÜNİTE 35: KARAKTER ÖZELLİKLERİ =====
const unit35Vocab: UnitVocabulary = {
    unitId: 35, title: "Karakter Özellikleri",
    words: [
        { word: "Amable", meaning: "Nazik", pronunciation: "a-ma-ble", example: "Es muy amable.", exampleTranslation: "Çok nazik." },
        { word: "Simpático", meaning: "Sempatik", pronunciation: "sim-pa-ti-ko", example: "Es muy simpático.", exampleTranslation: "Çok sempatik." },
        { word: "Trabajador", meaning: "Çalışkan", pronunciation: "tra-ba-ha-dor", example: "Es muy trabajador.", exampleTranslation: "Çok çalışkan." },
        { word: "Perezoso", meaning: "Tembel", pronunciation: "pe-re-so-so", example: "Es un poco perezoso.", exampleTranslation: "Biraz tembel." },
        { word: "Generoso", meaning: "Cömert", pronunciation: "he-ne-ro-so", example: "Es muy generoso.", exampleTranslation: "Çok cömert." },
        { word: "Tacaño", meaning: "Cimri", pronunciation: "ta-ka-nyo", example: "Es muy tacaño.", exampleTranslation: "Çok cimri." },
        { word: "Honesto", meaning: "Dürüst", pronunciation: "o-nes-to", example: "Es muy honesto.", exampleTranslation: "Çok dürüst." },
        { word: "Mentiroso", meaning: "Yalancı", pronunciation: "men-ti-ro-so", example: "No seas mentiroso.", exampleTranslation: "Yalancı olma." },
        { word: "Paciente", meaning: "Sabırlı", pronunciation: "pa-sien-te", example: "Es muy paciente.", exampleTranslation: "Çok sabırlı." },
        { word: "Impaciente", meaning: "Sabırsız", pronunciation: "im-pa-sien-te", example: "Soy muy impaciente.", exampleTranslation: "Çok sabırsızım." }
    ]
};

// ===== ÜNİTE 36: SPOR VE FITNESS =====
const unit36Vocab: UnitVocabulary = {
    unitId: 36, title: "Spor Kelimeleri",
    words: [
        { word: "Gimnasio", meaning: "Spor salonu", pronunciation: "him-na-sio", example: "Voy al gimnasio.", exampleTranslation: "Spor salonuna gidiyorum." },
        { word: "Ejercicio", meaning: "Egzersiz", pronunciation: "e-her-si-sio", example: "Hago ejercicio cada día.", exampleTranslation: "Her gün egzersiz yapıyorum." },
        { word: "Entrenamiento", meaning: "Antrenman", pronunciation: "en-tre-na-mien-to", example: "El entrenamiento fue duro.", exampleTranslation: "Antrenman zordu." },
        { word: "Correr", meaning: "Koşmak", pronunciation: "ko-rrer", example: "Me gusta correr.", exampleTranslation: "Koşmayı seviyorum." },
        { word: "Nadar", meaning: "Yüzmek", pronunciation: "na-dar", example: "Nado en la piscina.", exampleTranslation: "Havuzda yüzüyorum." },
        { word: "Levantar pesas", meaning: "Ağırlık kaldırmak", pronunciation: "le-van-tar pe-sas", example: "Levanto pesas.", exampleTranslation: "Ağırlık kaldırıyorum." },
        { word: "Estirar", meaning: "Germek/Esnemek", pronunciation: "es-ti-rar", example: "Es importante estirar.", exampleTranslation: "Esnemek önemli." },
        { word: "Partido", meaning: "Maç", pronunciation: "par-ti-do", example: "Hay un partido hoy.", exampleTranslation: "Bugün maç var." },
        { word: "Equipo", meaning: "Takım", pronunciation: "e-ki-po", example: "Mi equipo ganó.", exampleTranslation: "Takımım kazandı." },
        { word: "Atleta", meaning: "Atlet/Sporcu", pronunciation: "at-le-ta", example: "Es un buen atleta.", exampleTranslation: "İyi bir sporcu." }
    ]
};

// ===== ÜNİTE 37: MÜZİK VE SANAT =====
const unit37Vocab: UnitVocabulary = {
    unitId: 37, title: "Müzik ve Sanat Kelimeleri",
    words: [
        { word: "Concierto", meaning: "Konser", pronunciation: "kon-sier-to", example: "Fui a un concierto.", exampleTranslation: "Konsere gittim." },
        { word: "Canción", meaning: "Şarkı", pronunciation: "kan-sion", example: "Es mi canción favorita.", exampleTranslation: "En sevdiğim şarkı." },
        { word: "Guitarra", meaning: "Gitar", pronunciation: "gi-ta-rra", example: "Toco la guitarra.", exampleTranslation: "Gitar çalıyorum." },
        { word: "Piano", meaning: "Piyano", pronunciation: "pia-no", example: "Aprendo piano.", exampleTranslation: "Piyano öğreniyorum." },
        { word: "Batería", meaning: "Davul", pronunciation: "ba-te-ri-a", example: "Toca la batería.", exampleTranslation: "Davul çalıyor." },
        { word: "Pintura", meaning: "Resim/Boyama", pronunciation: "pin-tu-ra", example: "Me gusta la pintura.", exampleTranslation: "Resmi severim." },
        { word: "Escultura", meaning: "Heykel", pronunciation: "es-kul-tu-ra", example: "Es una escultura de mármol.", exampleTranslation: "Mermer heykel." },
        { word: "Museo", meaning: "Müze", pronunciation: "mu-se-o", example: "Visité el museo.", exampleTranslation: "Müzeyi ziyaret ettim." },
        { word: "Exposición", meaning: "Sergi", pronunciation: "eks-po-si-sion", example: "Hay una exposición de arte.", exampleTranslation: "Sanat sergisi var." },
        { word: "Artista", meaning: "Sanatçı", pronunciation: "ar-tis-ta", example: "Es un artista famoso.", exampleTranslation: "Ünlü bir sanatçı." }
    ]
};

// ===== ÜNİTE 38: SİNEMA VE DİZİ =====
const unit38Vocab: UnitVocabulary = {
    unitId: 38, title: "Sinema Kelimeleri",
    words: [
        { word: "Película", meaning: "Film", pronunciation: "pe-li-ku-la", example: "Vi una película.", exampleTranslation: "Film izledim." },
        { word: "Actor/Actriz", meaning: "Aktör/Aktris", pronunciation: "ak-tor/ak-tris", example: "El actor es famoso.", exampleTranslation: "Aktör ünlü." },
        { word: "Director", meaning: "Yönetmen", pronunciation: "di-rek-tor", example: "El director es español.", exampleTranslation: "Yönetmen İspanyol." },
        { word: "Comedia", meaning: "Komedi", pronunciation: "ko-me-dia", example: "Es una comedia divertida.", exampleTranslation: "Eğlenceli bir komedi." },
        { word: "Drama", meaning: "Drama", pronunciation: "dra-ma", example: "Es un drama intenso.", exampleTranslation: "Yoğun bir drama." },
        { word: "Terror", meaning: "Korku", pronunciation: "te-rror", example: "No me gustan las películas de terror.", exampleTranslation: "Korku filmi sevmem." },
        { word: "Documental", meaning: "Belgesel", pronunciation: "do-ku-men-tal", example: "Vi un documental interesante.", exampleTranslation: "İlginç bir belgesel izledim." },
        { word: "Serie", meaning: "Dizi", pronunciation: "se-rie", example: "Veo una serie nueva.", exampleTranslation: "Yeni bir dizi izliyorum." },
        { word: "Temporada", meaning: "Sezon", pronunciation: "tem-po-ra-da", example: "Es la segunda temporada.", exampleTranslation: "İkinci sezon." },
        { word: "Episodio", meaning: "Bölüm", pronunciation: "e-pi-so-dio", example: "Es el último episodio.", exampleTranslation: "Son bölüm." }
    ]
};

// ===== ÜNİTE 39: TEKNOLOJİ =====
const unit39Vocab: UnitVocabulary = {
    unitId: 39, title: "Teknoloji Kelimeleri",
    words: [
        { word: "Ordenador", meaning: "Bilgisayar", pronunciation: "or-de-na-dor", example: "Mi ordenador es nuevo.", exampleTranslation: "Bilgisayarım yeni." },
        { word: "Portátil", meaning: "Dizüstü", pronunciation: "por-ta-til", example: "Uso un portátil.", exampleTranslation: "Dizüstü kullanıyorum." },
        { word: "Teclado", meaning: "Klavye", pronunciation: "te-kla-do", example: "El teclado no funciona.", exampleTranslation: "Klavye çalışmıyor." },
        { word: "Ratón", meaning: "Mouse", pronunciation: "ra-ton", example: "Necesito un ratón nuevo.", exampleTranslation: "Yeni mouse'a ihtiyacım var." },
        { word: "Pantalla", meaning: "Ekran", pronunciation: "pan-ta-ya", example: "La pantalla es grande.", exampleTranslation: "Ekran büyük." },
        { word: "Contraseña", meaning: "Şifre", pronunciation: "kon-tra-se-nya", example: "Olvidé mi contraseña.", exampleTranslation: "Şifremi unuttum." },
        { word: "Descargar", meaning: "İndirmek", pronunciation: "des-kar-gar", example: "Voy a descargar la app.", exampleTranslation: "Uygulamayı indireceğim." },
        { word: "Subir", meaning: "Yüklemek", pronunciation: "su-bir", example: "Voy a subir las fotos.", exampleTranslation: "Fotoğrafları yükleyeceğim." },
        { word: "Actualizar", meaning: "Güncellemek", pronunciation: "ak-tua-li-sar", example: "Necesito actualizar el sistema.", exampleTranslation: "Sistemi güncellemem gerekiyor." },
        { word: "Reiniciar", meaning: "Yeniden başlatmak", pronunciation: "re-i-ni-siar", example: "Reinicia el ordenador.", exampleTranslation: "Bilgisayarı yeniden başlat." }
    ]
};

// ===== ÜNİTE 40: SOSYAL MEDYA =====
const unit40Vocab: UnitVocabulary = {
    unitId: 45, title: "Sosyal Medya Kelimeleri",
    words: [
        { word: "Red social", meaning: "Sosyal ağ", pronunciation: "red so-sial", example: "Uso varias redes sociales.", exampleTranslation: "Birçok sosyal ağ kullanıyorum." },
        { word: "Perfil", meaning: "Profil", pronunciation: "per-fil", example: "Actualicé mi perfil.", exampleTranslation: "Profilimi güncelledim." },
        { word: "Seguidor", meaning: "Takipçi", pronunciation: "se-gi-dor", example: "Tengo muchos seguidores.", exampleTranslation: "Çok takipçim var." },
        { word: "Seguir", meaning: "Takip etmek", pronunciation: "se-gir", example: "Voy a seguirte.", exampleTranslation: "Seni takip edeceğim." },
        { word: "Publicar", meaning: "Yayınlamak/Paylaşmak", pronunciation: "pu-bli-kar", example: "Voy a publicar una foto.", exampleTranslation: "Fotoğraf paylaşacağım." },
        { word: "Me gusta", meaning: "Beğeni", pronunciation: "me gus-ta", example: "Tiene muchos me gusta.", exampleTranslation: "Çok beğenisi var." },
        { word: "Comentario", meaning: "Yorum", pronunciation: "ko-men-ta-rio", example: "Dejé un comentario.", exampleTranslation: "Yorum bıraktım." },
        { word: "Compartir", meaning: "Paylaşmak", pronunciation: "kom-par-tir", example: "Voy a compartir esto.", exampleTranslation: "Bunu paylaşacağım." },
        { word: "Etiquetar", meaning: "Etiketlemek", pronunciation: "e-ti-ke-tar", example: "Te voy a etiquetar.", exampleTranslation: "Seni etiketleyeceğim." },
        { word: "Hashtag", meaning: "Hashtag", pronunciation: "hash-tag", example: "Usa este hashtag.", exampleTranslation: "Bu hashtag'i kullan." }
    ]
};

// ===== YENİ A2 ÜNİTELERİ (46-50) =====

// ===== ÜNİTE 46: EV VE TAŞINMA =====
const unit46Vocab: UnitVocabulary = {
    unitId: 46, title: "Ev ve Taşınma Kelimeleri",
    words: [
        { word: "Alquiler", meaning: "Kira", pronunciation: "al-ki-ler", example: "El alquiler es 500 euros.", exampleTranslation: "Kira 500 euro." },
        { word: "Piso", meaning: "Daire", pronunciation: "pi-so", example: "Busco un piso.", exampleTranslation: "Daire arıyorum." },
        { word: "Propietario", meaning: "Ev sahibi", pronunciation: "pro-pie-ta-rio", example: "El propietario es amable.", exampleTranslation: "Ev sahibi nazik." },
        { word: "Inquilino", meaning: "Kiracı", pronunciation: "in-ki-li-no", example: "Soy inquilino.", exampleTranslation: "Kiracıyım." },
        { word: "Mudanza", meaning: "Taşınma", pronunciation: "mu-dan-sa", example: "La mudanza es mañana.", exampleTranslation: "Taşınma yarın." },
        { word: "Amueblado", meaning: "Eşyalı", pronunciation: "a-mue-bla-do", example: "El piso está amueblado.", exampleTranslation: "Daire eşyalı." },
        { word: "Fianza", meaning: "Depozito", pronunciation: "fian-sa", example: "La fianza es un mes.", exampleTranslation: "Depozito bir aylık." },
        { word: "Contrato de alquiler", meaning: "Kira sözleşmesi", pronunciation: "kon-tra-to de al-ki-ler", example: "Firmé el contrato.", exampleTranslation: "Sözleşmeyi imzaladım." },
        { word: "Gastos incluidos", meaning: "Faturalar dahil", pronunciation: "gas-tos in-klu-i-dos", example: "Gastos incluidos.", exampleTranslation: "Faturalar dahil." },
        { word: "Vecino", meaning: "Komşu", pronunciation: "ve-si-no", example: "Mi vecino es simpático.", exampleTranslation: "Komşum sempatik." }
    ]
};

// ===== ÜNİTE 47: ÇEVRE VE DOĞA =====
const unit47Vocab: UnitVocabulary = {
    unitId: 47, title: "Çevre ve Doğa Kelimeleri",
    words: [
        { word: "Medio ambiente", meaning: "Çevre", pronunciation: "me-dio am-bien-te", example: "Protege el medio ambiente.", exampleTranslation: "Çevreyi koru." },
        { word: "Reciclar", meaning: "Geri dönüştürmek", pronunciation: "re-si-klar", example: "Hay que reciclar.", exampleTranslation: "Geri dönüştürmek gerekiyor." },
        { word: "Contaminación", meaning: "Kirlilik", pronunciation: "kon-ta-mi-na-sion", example: "La contaminación es un problema.", exampleTranslation: "Kirlilik bir sorun." },
        { word: "Bosque", meaning: "Orman", pronunciation: "bos-ke", example: "El bosque es grande.", exampleTranslation: "Orman büyük." },
        { word: "Montaña", meaning: "Dağ", pronunciation: "mon-ta-nya", example: "Subí la montaña.", exampleTranslation: "Dağa tırmandım." },
        { word: "Río", meaning: "Nehir", pronunciation: "ri-o", example: "El río es largo.", exampleTranslation: "Nehir uzun." },
        { word: "Playa", meaning: "Plaj", pronunciation: "pla-ya", example: "Fui a la playa.", exampleTranslation: "Plaja gittim." },
        { word: "Naturaleza", meaning: "Doğa", pronunciation: "na-tu-ra-le-sa", example: "Me gusta la naturaleza.", exampleTranslation: "Doğayı severim." },
        { word: "Energía solar", meaning: "Güneş enerjisi", pronunciation: "e-ner-hi-a so-lar", example: "Usamos energía solar.", exampleTranslation: "Güneş enerjisi kullanıyoruz." },
        { word: "Basura", meaning: "Çöp", pronunciation: "ba-su-ra", example: "Tira la basura.", exampleTranslation: "Çöpü at." }
    ]
};

// ===== ÜNİTE 48: HABERLER =====
const unit48Vocab: UnitVocabulary = {
    unitId: 48, title: "Haber Kelimeleri",
    words: [
        { word: "Noticias", meaning: "Haberler", pronunciation: "no-ti-sias", example: "Leo las noticias.", exampleTranslation: "Haberleri okuyorum." },
        { word: "Periódico", meaning: "Gazete", pronunciation: "pe-rio-di-ko", example: "Compro el periódico.", exampleTranslation: "Gazete alıyorum." },
        { word: "Revista", meaning: "Dergi", pronunciation: "re-vis-ta", example: "Leo una revista.", exampleTranslation: "Dergi okuyorum." },
        { word: "Artículo", meaning: "Makale", pronunciation: "ar-ti-ku-lo", example: "Escribí un artículo.", exampleTranslation: "Makale yazdım." },
        { word: "Titular", meaning: "Başlık", pronunciation: "ti-tu-lar", example: "El titular es impactante.", exampleTranslation: "Başlık çarpıcı." },
        { word: "Reportaje", meaning: "Röportaj", pronunciation: "re-por-ta-he", example: "Vi un reportaje.", exampleTranslation: "Bir röportaj izledim." },
        { word: "Entrevista", meaning: "Mülakat", pronunciation: "en-tre-vis-ta", example: "La entrevista fue interesante.", exampleTranslation: "Mülakat ilginçti." },
        { word: "Suceso", meaning: "Olay", pronunciation: "su-se-so", example: "Fue un suceso importante.", exampleTranslation: "Önemli bir olaydı." },
        { word: "Actualidad", meaning: "Güncel", pronunciation: "ak-tua-li-dad", example: "Temas de actualidad.", exampleTranslation: "Güncel konular." },
        { word: "Opinión", meaning: "Görüş/Fikir", pronunciation: "o-pi-nion", example: "Mi opinión es diferente.", exampleTranslation: "Görüşüm farklı." }
    ]
};

// ===== ÜNİTE 49: KÜLTÜR VE GELENEKLER =====
const unit49Vocab: UnitVocabulary = {
    unitId: 49, title: "Kültür Kelimeleri",
    words: [
        { word: "Tradición", meaning: "Gelenek", pronunciation: "tra-di-sion", example: "Es una tradición española.", exampleTranslation: "İspanyol geleneği." },
        { word: "Fiesta", meaning: "Kutlama/Festival", pronunciation: "fies-ta", example: "La fiesta fue genial.", exampleTranslation: "Festival harika idi." },
        { word: "Costumbre", meaning: "Adet", pronunciation: "kos-tum-bre", example: "Es una costumbre local.", exampleTranslation: "Yerel bir adet." },
        { word: "Celebración", meaning: "Kutlama", pronunciation: "se-le-bra-sion", example: "La celebración duró todo el día.", exampleTranslation: "Kutlama tüm gün sürdü." },
        { word: "Navidad", meaning: "Noel", pronunciation: "na-vi-dad", example: "Celebramos la Navidad.", exampleTranslation: "Noel kutluyoruz." },
        { word: "Semana Santa", meaning: "Paskalya haftası", pronunciation: "se-ma-na san-ta", example: "En Semana Santa hay procesiones.", exampleTranslation: "Paskalya'da törenler var." },
        { word: "Baile", meaning: "Dans", pronunciation: "bai-le", example: "El baile flamenco es famoso.", exampleTranslation: "Flamenko dansı ünlü." },
        { word: "Gastronomía", meaning: "Mutfak kültürü", pronunciation: "gas-tro-no-mi-a", example: "La gastronomía española es variada.", exampleTranslation: "İspanyol mutfağı çeşitli." },
        { word: "Folklore", meaning: "Folklor", pronunciation: "fol-klo-re", example: "El folklore es importante.", exampleTranslation: "Folklor önemli." },
        { word: "Patrimonio", meaning: "Miras", pronunciation: "pa-tri-mo-nio", example: "Es patrimonio cultural.", exampleTranslation: "Kültürel miras." }
    ]
};

// ===== ÜNİTE 50: A2 FİNAL TEKRAR =====
const unit50Vocab: UnitVocabulary = {
    unitId: 50, title: "A2 Final Tekrar Kelimeleri",
    words: [
        { word: "Recordar", meaning: "Hatırlamak", pronunciation: "re-kor-dar", example: "Recuerdo todo.", exampleTranslation: "Her şeyi hatırlıyorum." },
        { word: "Olvidar", meaning: "Unutmak", pronunciation: "ol-vi-dar", example: "No olvides estudiar.", exampleTranslation: "Çalışmayı unutma." },
        { word: "Practicar", meaning: "Pratik yapmak", pronunciation: "prak-ti-kar", example: "Necesito practicar más.", exampleTranslation: "Daha fazla pratik yapmam gerekiyor." },
        { word: "Mejorar", meaning: "Geliştirmek", pronunciation: "me-ho-rar", example: "Quiero mejorar mi español.", exampleTranslation: "İspanyolcamı geliştirmek istiyorum." },
        { word: "Avanzar", meaning: "İlerlemek", pronunciation: "a-van-sar", example: "Estoy avanzando mucho.", exampleTranslation: "Çok ilerliyorum." },
        { word: "Repasar", meaning: "Tekrar etmek", pronunciation: "re-pa-sar", example: "Vamos a repasar.", exampleTranslation: "Tekrar edelim." },
        { word: "Dominar", meaning: "Hakim olmak", pronunciation: "do-mi-nar", example: "Quiero dominar el idioma.", exampleTranslation: "Dile hakim olmak istiyorum." },
        { word: "Expresar", meaning: "İfade etmek", pronunciation: "eks-pre-sar", example: "Puedo expresarme bien.", exampleTranslation: "Kendimi iyi ifade edebiliyorum." },
        { word: "Comunicar", meaning: "İletişim kurmak", pronunciation: "ko-mu-ni-kar", example: "Es importante comunicar.", exampleTranslation: "İletişim kurmak önemli." },
        { word: "Lograr", meaning: "Başarmak", pronunciation: "lo-grar", example: "Logré mi objetivo.", exampleTranslation: "Hedefime ulaştım." }
    ]
};

// Ünite ID'sine göre A2 vocabulary getir (ID: 26-50)
export function getA2VocabularyForUnit(unitId: number): UnitVocabulary {
    // Eski ID'leri (21-40) yeni ID'lere (26-45) eşle
    const idMapping: { [key: number]: UnitVocabulary } = {
        26: unit21Vocab, 27: unit22Vocab, 28: unit23Vocab, 29: unit24Vocab, 30: unit25Vocab,
        31: unit26Vocab, 32: unit27Vocab, 33: unit28Vocab, 34: unit29Vocab, 35: unit30Vocab,
        36: unit31Vocab, 37: unit32Vocab, 38: unit33Vocab, 39: unit34Vocab, 40: unit35Vocab,
        41: unit36Vocab, 42: unit37Vocab, 43: unit38Vocab, 44: unit39Vocab, 45: unit40Vocab,
        46: unit46Vocab, 47: unit47Vocab, 48: unit48Vocab, 49: unit49Vocab, 50: unit50Vocab
    };

    const vocab = idMapping[unitId];
    if (vocab) {
        return { ...vocab, unitId }; // Return with correct unitId
    }
    return unit21Vocab;
}

