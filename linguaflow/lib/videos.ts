/**
 * LinguaFlow Video Veritabanı
 * YouTube video ID'leri - NotebookLM ile oluşturulan ders videoları
 */

export interface UnitVideo {
    unitId: number;
    youtubeId: string;
    title: string;
    level: string;
}

// A1 Videoları (Ünite 1-20)
export const a1Videos: UnitVideo[] = [
    { unitId: 1, youtubeId: "ZUvW0ebMq74", title: "Selamlaşma ve Tanışma", level: "A1" },
    { unitId: 2, youtubeId: "sh9UT1cof1k", title: "Sayılar 1-20", level: "A1" },
    { unitId: 3, youtubeId: "hxjpRBZ-LuY", title: "Aile Üyeleri", level: "A1" },
    { unitId: 4, youtubeId: "FyVxlqMfzN8", title: "Renkler", level: "A1" },
    { unitId: 5, youtubeId: "K2R2zy5sZ6k", title: "Günler ve Aylar", level: "A1" },
    { unitId: 6, youtubeId: "eK73fTxIEyY", title: "Meslekler", level: "A1" },
    { unitId: 7, youtubeId: "cMCVeolMJcA", title: "Yiyecekler", level: "A1" },
    { unitId: 8, youtubeId: "fJDI2gWuh9A", title: "İçecekler", level: "A1" },
    { unitId: 9, youtubeId: "iJ_FNPNl08Q", title: "Ev ve Odalar", level: "A1" },
    { unitId: 10, youtubeId: "knCjdq4g_cE", title: "Mobilyalar", level: "A1" },
    { unitId: 11, youtubeId: "7Wvjnwwh6OI", title: "Vücut Bölümleri", level: "A1" },
    { unitId: 12, youtubeId: "gs_eNd0aXWw", title: "Hayvanlar", level: "A1" },
    { unitId: 13, youtubeId: "70q12tvXRmg", title: "Ulaşım", level: "A1" },
    { unitId: 14, youtubeId: "BijZcpOnNRg", title: "Şehirde Yerler", level: "A1" },
    { unitId: 15, youtubeId: "p6oneYOkIJY", title: "Hava Durumu", level: "A1" },
    { unitId: 16, youtubeId: "eQA7i4Mq0D0", title: "Hobiler", level: "A1" },
    { unitId: 17, youtubeId: "IRN1iIGoMvo", title: "Günlük Rutinler", level: "A1" },
    { unitId: 18, youtubeId: "shXvVTYWYIE", title: "Sayılar 21-100", level: "A1" },
    { unitId: 19, youtubeId: "p0Eq79cLnUg", title: "Alışveriş", level: "A1" },
    { unitId: 20, youtubeId: "sqXFu71pFOo", title: "A1 Tekrar", level: "A1" },
    // Yeni A1 Üniteleri (21-25)
    { unitId: 21, youtubeId: "39h3v7vVVHs", title: "Duygular ve Hisler", level: "A1" },
    { unitId: 22, youtubeId: "pcrEMOvVKeE", title: "Okul ve Sınıf", level: "A1" },
    { unitId: 23, youtubeId: "0IycAsgTlbE", title: "Meyveler ve Sebzeler", level: "A1" },
    { unitId: 24, youtubeId: "4nkda5C21aw", title: "Ülkeler ve Milletler", level: "A1" },
    { unitId: 25, youtubeId: "My7NkVqXPvo", title: "Fiiller ve Eylemler", level: "A1" },
];

// A2 Videoları (Ünite 21-40)
export const a2Videos: UnitVideo[] = [];

// B1 Videoları (Ünite 41-60)
export const b1Videos: UnitVideo[] = [];

// B2 Videoları (Ünite 61-80)
export const b2Videos: UnitVideo[] = [];

// Tüm videoları birleştir
export const allVideos = [...a1Videos, ...a2Videos, ...b1Videos, ...b2Videos];

// Ünite ID'sine göre video getir
export function getVideoForUnit(unitId: number): UnitVideo | undefined {
    return allVideos.find(v => v.unitId === unitId);
}

// Seviyeye göre videoları getir
export function getVideosForLevel(level: string): UnitVideo[] {
    switch (level) {
        case 'A1': return a1Videos;
        case 'A2': return a2Videos;
        case 'B1': return b1Videos;
        case 'B2': return b2Videos;
        default: return [];
    }
}
