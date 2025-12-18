/**
 * LinguaFlow Gramer Veritabanı - İspanyolca A2
 * 20 Ünite (ID: 21-40), her biri için detaylı gramer kuralları
 */

import { UnitGrammar, GrammarRule, GrammarExample, GrammarTable } from './grammar';

// ===== ÜNİTE 21: GEÇMİŞ ZAMAN 1 - PRETÉRİTO İNDEFİNİDO (DÜZENLİ) =====
const unit21Grammar: UnitGrammar = {
    unitId: 21, title: "Pretérito Indefinido (Düzenli Fiiller)",
    rules: [
        {
            id: "preterito-ar",
            title: "-AR Fiillerin Geçmiş Zaman Çekimi",
            explanation: "Pretérito Indefinido, geçmişte tamamlanmış eylemleri anlatmak için kullanılır. -AR ile biten fiiller şu şekilde çekilir:\n\n**Hablar (Konuşmak) → Habl-**\n* Yo habl**é** (Konuştum)\n* Tú habl**aste** (Konuştun)\n* Él/Ella habl**ó** (Konuştu)\n* Nosotros habl**amos** (Konuştuk)\n* Vosotros habl**asteis** (Konuştunuz)\n* Ellos habl**aron** (Konuştular)",
            examples: [
                { es: "Ayer hablé con María", tr: "Dün María ile konuştum" },
                { es: "Compramos una casa nueva", tr: "Yeni bir ev satın aldık" },
                { es: "Ella estudió mucho", tr: "O çok çalıştı" }
            ],
            table: {
                headers: ["Kişi", "Hablar", "Comprar", "Estudiar"],
                rows: [
                    ["Yo", "hablé", "compré", "estudié"],
                    ["Tú", "hablaste", "compraste", "estudiaste"],
                    ["Él/Ella", "habló", "compró", "estudió"],
                    ["Nosotros", "hablamos", "compramos", "estudiamos"],
                    ["Vosotros", "hablasteis", "comprasteis", "estudiasteis"],
                    ["Ellos", "hablaron", "compraron", "estudiaron"]
                ]
            }
        },
        {
            id: "preterito-er-ir",
            title: "-ER ve -IR Fiillerin Geçmiş Zaman Çekimi",
            explanation: "-ER ve -IR fiiller aynı ekleri alır:\n\n**Comer (Yemek) → Com-**\n* Yo com**í** (Yedim)\n* Tú com**iste** (Yedin)\n* Él/Ella com**ió** (Yedi)\n* Nosotros com**imos** (Yedik)\n* Vosotros com**isteis** (Yediniz)\n* Ellos com**ieron** (Yediler)",
            examples: [
                { es: "Comí paella en Valencia", tr: "Valencia'da paella yedim" },
                { es: "Escribí una carta", tr: "Bir mektup yazdım" },
                { es: "Vivieron en España", tr: "İspanya'da yaşadılar" }
            ],
            table: {
                headers: ["Kişi", "Comer", "Beber", "Vivir"],
                rows: [
                    ["Yo", "comí", "bebí", "viví"],
                    ["Tú", "comiste", "bebiste", "viviste"],
                    ["Él/Ella", "comió", "bebió", "vivió"],
                    ["Nosotros", "comimos", "bebimos", "vivimos"],
                    ["Vosotros", "comisteis", "bebisteis", "vivisteis"],
                    ["Ellos", "comieron", "bebieron", "vivieron"]
                ]
            }
        }
    ]
};

// ===== ÜNİTE 22: GEÇMİŞ ZAMAN 2 - PRETÉRİTO İNDEFİNİDO (DÜZENSİZ) =====
const unit22Grammar: UnitGrammar = {
    unitId: 22, title: "Pretérito Indefinido (Düzensiz Fiiller)",
    rules: [
        {
            id: "preterito-irregulares",
            title: "Düzensiz Fiillerin Geçmiş Zamanı",
            explanation: "Bazı fiillerin kökleri geçmiş zamanda tamamen değişir. En önemlileri:\n\n* **Ir/Ser**: fui, fuiste, fue, fuimos, fuisteis, fueron\n* **Hacer**: hice, hiciste, hizo, hicimos, hicisteis, hicieron\n* **Tener**: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron\n* **Estar**: estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron\n\n**Önemli:** Ir ve Ser fiilleri geçmişte aynı şekilde çekilir!",
            examples: [
                { es: "Fui al cine (Ir)", tr: "Sinemaya gittim" },
                { es: "Fue un día especial (Ser)", tr: "Özel bir gündü" },
                { es: "Hice la tarea", tr: "Ödevi yaptım" },
                { es: "Tuve suerte", tr: "Şansım vardı" }
            ],
            table: {
                headers: ["Fiil", "Yo", "Tú", "Él/Ella", "Nosotros", "Ellos"],
                rows: [
                    ["Ir/Ser", "fui", "fuiste", "fue", "fuimos", "fueron"],
                    ["Hacer", "hice", "hiciste", "hizo", "hicimos", "hicieron"],
                    ["Tener", "tuve", "tuviste", "tuvo", "tuvimos", "tuvieron"],
                    ["Estar", "estuve", "estuviste", "estuvo", "estuvimos", "estuvieron"],
                    ["Poder", "pude", "pudiste", "pudo", "pudimos", "pudieron"],
                    ["Venir", "vine", "viniste", "vino", "vinimos", "vinieron"]
                ]
            }
        }
    ]
};

// ===== ÜNİTE 23: RESTORANDA =====
const unit23Grammar: UnitGrammar = {
    unitId: 23, title: "Restoranda Kullanılan Yapılar",
    rules: [
        {
            id: "querer-conditional",
            title: "Kibar İstek: Querría / Me gustaría",
            explanation: "Restoranda kibar sipariş için koşullu kipi kullanırız:\n\n* **Querría** + isim/fiil → ... isterdim\n* **Me gustaría** + fiil → ... yapmak isterdim\n\nBu yapılar 'Quiero' (İstiyorum) dan daha kibardır.",
            examples: [
                { es: "Querría una mesa para dos", tr: "İki kişilik masa isterdim" },
                { es: "Me gustaría ver el menú", tr: "Menüyü görmek isterdim" },
                { es: "Querría pedir el plato del día", tr: "Günün yemeğini sipariş etmek isterdim" }
            ]
        },
        {
            id: "pedir-ordenar",
            title: "Sipariş Fiilleri: Pedir vs Ordenar",
            explanation: "**Pedir** = Bir şey istemek/sipariş etmek (en yaygın)\n**Ordenar** = Emretmek (restoranda daha az kullanılır)\n\nÖrnek: 'Voy a pedir' = 'Sipariş vereceğim'",
            examples: [
                { es: "Voy a pedir la cuenta", tr: "Hesabı isteyeceğim" },
                { es: "¿Puedo pedir un café?", tr: "Bir kahve isteyebilir miyim?" }
            ]
        }
    ]
};

// ===== ÜNİTE 24: ALIŞVERİŞ =====
const unit24Grammar: UnitGrammar = {
    unitId: 24, title: "Alışverişte Kullanılan Yapılar",
    rules: [
        {
            id: "comparativos",
            title: "Karşılaştırma: Más... que / Menos... que",
            explanation: "İki şeyi karşılaştırırken:\n\n* **Más + sıfat + que** = ...dan daha ...\n* **Menos + sıfat + que** = ...dan daha az ...\n* **Tan + sıfat + como** = ...kadar ...",
            examples: [
                { es: "Este es más caro que aquel", tr: "Bu ondan daha pahalı" },
                { es: "Es menos grande que el otro", tr: "Diğerinden daha küçük" },
                { es: "Es tan bonito como el azul", tr: "Mavi kadar güzel" }
            ]
        },
        {
            id: "pronombres-objeto",
            title: "Nesne Zamirleri: Lo, La, Los, Las",
            explanation: "Tekrar etmemek için nesne zamirleri kullanılır:\n\n* **Lo** = Onu (eril tekil)\n* **La** = Onu (dişil tekil)\n* **Los** = Onları (eril çoğul)\n* **Las** = Onları (dişil çoğul)\n\n**Dikkat:** Zamir fiilden önce gelir!",
            examples: [
                { es: "Me lo llevo", tr: "Onu alıyorum" },
                { es: "¿Puedo probármela?", tr: "Onu deneyebilir miyim? (dişil)" },
                { es: "Las quiero en azul", tr: "Onları mavi istiyorum" }
            ]
        }
    ]
};

// ===== ÜNİTE 25: SEYAHAT PLANLARI =====
const unit25Grammar: UnitGrammar = {
    unitId: 25, title: "Gelecek Planları",
    rules: [
        {
            id: "ir-a-infinitivo",
            title: "Yakın Gelecek: Ir a + Fiil",
            explanation: "Yakın gelecekten bahsetmek için:\n\n**Ir (çekimli) + a + mastar fiil**\n\n* Voy a viajar = Seyahat edeceğim\n* Vas a comer = Yiyeceksin\n* Vamos a estudiar = Çalışacağız",
            examples: [
                { es: "Voy a viajar a España", tr: "İspanya'ya seyahat edeceğim" },
                { es: "¿Qué vas a hacer mañana?", tr: "Yarın ne yapacaksın?" },
                { es: "Vamos a reservar un hotel", tr: "Otel rezervasyonu yapacağız" }
            ],
            table: {
                headers: ["Kişi", "Ir", "Örnek"],
                rows: [
                    ["Yo", "voy a", "Voy a comer"],
                    ["Tú", "vas a", "Vas a dormir"],
                    ["Él/Ella", "va a", "Va a estudiar"],
                    ["Nosotros", "vamos a", "Vamos a bailar"],
                    ["Ellos", "van a", "Van a viajar"]
                ]
            }
        }
    ]
};

// ===== ÜNİTE 26: OTEL REZERVASYONU =====
const unit26Grammar: UnitGrammar = {
    unitId: 26, title: "Otel Rezervasyonunda Yapılar",
    rules: [
        {
            id: "quisiera",
            title: "Kibar İstek: Quisiera",
            explanation: "**Quisiera** = Querer fiilinin koşullu kipi, çok kibar isteklerde kullanılır.\n\n* Quisiera una habitación = Bir oda isterdim\n* Quisiera reservar = Rezervasyon yapmak isterdim",
            examples: [
                { es: "Quisiera una habitación doble", tr: "Çift kişilik oda isterdim" },
                { es: "Quisiera hacer una reserva", tr: "Rezervasyon yapmak isterdim" }
            ]
        },
        {
            id: "hay-tiene",
            title: "Hay vs Tiene: Sormak",
            explanation: "**¿Hay...?** = ... var mı? (Genel)\n**¿Tiene...?** = ... var mı? (Otele özel)\n\nOtelde ikisi de kullanılabilir.",
            examples: [
                { es: "¿Hay wifi gratis?", tr: "Ücretsiz wifi var mı?" },
                { es: "¿Tiene habitaciones libres?", tr: "Boş odanız var mı?" },
                { es: "¿Hay piscina?", tr: "Havuz var mı?" }
            ]
        }
    ]
};

// ===== ÜNİTE 27: HAVALİMANINDA =====
const unit27Grammar: UnitGrammar = {
    unitId: 27, title: "Havalimanı Dili",
    rules: [
        {
            id: "pasiva-refleja",
            title: "Pasif Yapı: Se + Fiil",
            explanation: "Havalimanı duyurularında pasif yapı sık kullanılır:\n\n**Se + 3. tekil/çoğul fiil**\n\n* Se anuncia = Duyurulur\n* Se embarcan = Biniyorlar (binilmektedir)\n* Se ruega = Rica edilir",
            examples: [
                { es: "Se anuncia el vuelo 123", tr: "123 numaralı uçuş duyurulmaktadır" },
                { es: "Se ruega pasar a la puerta 5", tr: "5 numaralı kapıya geçmeniz rica olunur" }
            ]
        },
        {
            id: "imperativo-formal",
            title: "Resmi Emir Kipi: Usted",
            explanation: "Havalimanı talimatlarında resmi emir kipi (Usted formu) kullanılır:\n\n* **Pase** (Geçin)\n* **Espere** (Bekleyin)\n* **Diríjase** (Yönelin)",
            examples: [
                { es: "Pase por seguridad", tr: "Güvenlikten geçin" },
                { es: "Diríjase a la puerta 12", tr: "12 numaralı kapıya yönelin" }
            ]
        }
    ]
};

// ===== ÜNİTE 28: DOKTORDA =====
const unit28Grammar: UnitGrammar = {
    unitId: 28, title: "Sağlık Dili",
    rules: [
        {
            id: "doler-gustar",
            title: "Doler Yapısı (Gustar gibi)",
            explanation: "Doler fiili 'Gustar' gibi çalışır:\n\n* **Me duele** + tekil = ... ağrıyor (bir şey)\n* **Me duelen** + çoğul = ... ağrıyorlar\n\nKişi değil, ağrıyan yer fiilin öznesidir!",
            examples: [
                { es: "Me duele la cabeza", tr: "Başım ağrıyor" },
                { es: "Me duelen los ojos", tr: "Gözlerim ağrıyor" },
                { es: "Le duele el estómago", tr: "Midesi ağrıyor" }
            ],
            table: {
                headers: ["Kişi", "Tekil Ağrı", "Çoğul Ağrı"],
                rows: [
                    ["A mí (Benim)", "Me duele la cabeza", "Me duelen los pies"],
                    ["A ti (Senin)", "Te duele", "Te duelen"],
                    ["A él (Onun)", "Le duele", "Le duelen"]
                ]
            }
        },
        {
            id: "desde-hace",
            title: "Süre Bildirme: Desde / Hace",
            explanation: "**Desde** = ...'den beri (başlangıç noktası)\n**Hace** = ... önce / ... zamandır\n\n* Desde ayer = Dünden beri\n* Hace dos días = İki gündür",
            examples: [
                { es: "Tengo tos desde ayer", tr: "Dünden beri öksürüğüm var" },
                { es: "Me duele hace una semana", tr: "Bir haftadır ağrıyor" }
            ]
        }
    ]
};

// ===== ÜNİTE 29: ECZANEDE =====
const unit29Grammar: UnitGrammar = {
    unitId: 29, title: "Eczane Dili",
    rules: [
        {
            id: "necesitar",
            title: "Necesitar + İsim/Fiil",
            explanation: "İhtiyaç belirtmek için:\n\n* **Necesito** + isim = ...'a ihtiyacım var\n* **Necesito** + mastar = ... yapmam gerekiyor",
            examples: [
                { es: "Necesito un analgésico", tr: "Ağrı kesiciye ihtiyacım var" },
                { es: "Necesito comprar este medicamento", tr: "Bu ilacı almam gerekiyor" }
            ]
        },
        {
            id: "tener-que",
            title: "Zorunluluk: Tener que + Fiil",
            explanation: "**Tener que + mastar** = ... yapmak zorundayım\n\nDoktor tavsiyeleri için sık kullanılır.",
            examples: [
                { es: "Tiene que tomar una pastilla al día", tr: "Günde bir hap almak zorundasınız" },
                { es: "Tienes que descansar", tr: "Dinlenmek zorundasın" }
            ]
        }
    ]
};

// ===== ÜNİTE 30: MESLEKLER 2 =====
const unit30Grammar: UnitGrammar = {
    unitId: 30, title: "İş Tanımları",
    rules: [
        {
            id: "dedicarse-trabajar",
            title: "Meslek Sorma: ¿A qué te dedicas?",
            explanation: "Meslek sormak için:\n\n* **¿A qué te dedicas?** = Ne iş yapıyorsun? (daha resmi)\n* **¿En qué trabajas?** = Nerede çalışıyorsun?\n* **¿Cuál es tu profesión?** = Mesleğin ne?",
            examples: [
                { es: "¿A qué te dedicas?", tr: "Ne iş yapıyorsun?" },
                { es: "Me dedico a la enseñanza", tr: "Öğretmenlik yapıyorum" },
                { es: "Trabajo como ingeniero", tr: "Mühendis olarak çalışıyorum" }
            ]
        }
    ]
};

// ===== ÜNİTE 31: İŞ GÖRÜŞMESİ =====
const unit31Grammar: UnitGrammar = {
    unitId: 31, title: "Mülakat Dili",
    rules: [
        {
            id: "pretérito-perfecto",
            title: "Yakın Geçmiş: He + Participio",
            explanation: "Deneyimleri anlatmak için Pretérito Perfecto kullanılır:\n\n**Haber (he, has, ha...) + Participio Pasado**\n\n* Participio: -ar → -ado, -er/-ir → -ido",
            examples: [
                { es: "He trabajado en marketing", tr: "Pazarlamada çalıştım" },
                { es: "He estudiado en la universidad", tr: "Üniversitede okudum" },
                { es: "He vivido en tres países", tr: "Üç ülkede yaşadım" }
            ],
            table: {
                headers: ["Kişi", "Haber", "Örnek"],
                rows: [
                    ["Yo", "he", "He trabajado"],
                    ["Tú", "has", "Has estudiado"],
                    ["Él/Ella", "ha", "Ha vivido"],
                    ["Nosotros", "hemos", "Hemos comido"],
                    ["Ellos", "han", "Han viajado"]
                ]
            }
        }
    ]
};

// ===== ÜNİTE 32: TELEFONDA =====
const unit32Grammar: UnitGrammar = {
    unitId: 32, title: "Telefon Dili",
    rules: [
        {
            id: "poder-condicional",
            title: "Kibar Sorular: ¿Podría...?",
            explanation: "Telefonda kibar sormak için koşullu kip:\n\n* **¿Podría...?** = ... yapabilir misiniz?\n* **¿Sería posible...?** = ... mümkün mü?",
            examples: [
                { es: "¿Podría hablar con el Sr. García?", tr: "Bay García ile görüşebilir miyim?" },
                { es: "¿Podría dejar un mensaje?", tr: "Mesaj bırakabilir misiniz?" },
                { es: "¿Sería posible llamar más tarde?", tr: "Daha sonra aramak mümkün mü?" }
            ]
        }
    ]
};

// ===== ÜNİTE 33: E-POSTA YAZMA =====
const unit33Grammar: UnitGrammar = {
    unitId: 33, title: "Resmi Yazışma Dili",
    rules: [
        {
            id: "formal-expressions",
            title: "Resmi İfadeler",
            explanation: "E-postalarda kullanılan resmi ifadeler:\n\n**Açılış:**\n* Estimado/a Sr./Sra. = Sayın Bay/Bayan\n\n**Kapanış:**\n* Atentamente = Saygılarımla\n* Un cordial saludo = Sevgilerimle\n* Quedo a su disposición = Emrinize amadeyim",
            examples: [
                { es: "Le escribo en relación con...", tr: "... ile ilgili yazıyorum" },
                { es: "Adjunto encontrará...", tr: "Ekte ... bulacaksınız" },
                { es: "Quedo a la espera de su respuesta", tr: "Cevabınızı bekliyorum" }
            ]
        }
    ]
};

// ===== ÜNİTE 34: DUYGULAR =====
const unit34Grammar: UnitGrammar = {
    unitId: 34, title: "Duygu İfadeleri",
    rules: [
        {
            id: "estar-sentirse",
            title: "Estar vs Sentirse",
            explanation: "Duygular için iki fiil kullanılır:\n\n* **Estar + sıfat** = ...um/umsun (durum)\n* **Sentirse + sıfat** = ... hissediyorum (his)\n\nHer ikisi de duygular için geçerli.",
            examples: [
                { es: "Estoy feliz", tr: "Mutluyum" },
                { es: "Me siento triste", tr: "Üzgün hissediyorum" },
                { es: "Está preocupado", tr: "Endişeli" }
            ]
        },
        {
            id: "porque-causa",
            title: "Neden Bildirme: Porque / Es que",
            explanation: "Duygunun nedenini açıklamak için:\n\n* **Porque** = Çünkü\n* **Es que** = Şey (açıklama başlatmak için)",
            examples: [
                { es: "Estoy feliz porque aprobé el examen", tr: "Mutluyum çünkü sınavı geçtim" },
                { es: "Es que tuve un mal día", tr: "Şey, kötü bir gün geçirdim" }
            ]
        }
    ]
};

// ===== ÜNİTE 35: KARAKTER ÖZELLİKLERİ =====
const unit35Grammar: UnitGrammar = {
    unitId: 35, title: "Kişilik Tanımlama",
    rules: [
        {
            id: "ser-descripcion",
            title: "Ser + Karakter Sıfatı",
            explanation: "Kalıcı karakter özellikleri için SER kullanılır:\n\n* Es amable = Naziktir\n* Son trabajadores = Çalışkandırlar\n\n**Not:** Estar geçici durumlar içindir!",
            examples: [
                { es: "María es muy simpática", tr: "María çok sempatik" },
                { es: "Mi jefe es muy trabajador", tr: "Patronum çok çalışkan" },
                { es: "Son personas honestas", tr: "Dürüst insanlar" }
            ]
        }
    ]
};

// ===== ÜNİTE 36: SPOR VE FITNESS =====
const unit36Grammar: UnitGrammar = {
    unitId: 36, title: "Spor Dili",
    rules: [
        {
            id: "jugar-practicar",
            title: "Jugar a vs Hacer/Practicar",
            explanation: "Spor yapmak için farklı fiiller:\n\n* **Jugar a** + takım sporları (fútbol, baloncesto)\n* **Hacer/Practicar** + bireysel sporlar (natación, yoga)\n\n**Dikkat:** 'Jugar' sonrasında 'a' edatı gelir!",
            examples: [
                { es: "Juego al fútbol", tr: "Futbol oynuyorum" },
                { es: "Hago natación", tr: "Yüzüyorum" },
                { es: "Practico yoga", tr: "Yoga yapıyorum" }
            ]
        }
    ]
};

// ===== ÜNİTE 37: MÜZİK VE SANAT =====
const unit37Grammar: UnitGrammar = {
    unitId: 37, title: "Sanat Dili",
    rules: [
        {
            id: "tocar-instrumento",
            title: "Tocar + Enstrüman",
            explanation: "Enstrüman çalmak için TOCAR fiili kullanılır:\n\n**Tocar + el/la + enstrüman**\n\n* Toco la guitarra\n* Toca el piano",
            examples: [
                { es: "Toco la guitarra desde los 10 años", tr: "10 yaşından beri gitar çalıyorum" },
                { es: "¿Sabes tocar algún instrumento?", tr: "Enstrüman çalmayı biliyor musun?" }
            ]
        }
    ]
};

// ===== ÜNİTE 38: SİNEMA VE DİZİ =====
const unit38Grammar: UnitGrammar = {
    unitId: 38, title: "Sinema Dili",
    rules: [
        {
            id: "gustar-encantar",
            title: "Beğeni Dereceleri",
            explanation: "Film/dizi beğenisini ifade etmek:\n\n* **Me encanta** = Bayılıyorum (++++)\n* **Me gusta mucho** = Çok seviyorum (+++)\n* **Me gusta** = Seviyorum (++)\n* **No me gusta** = Sevmiyorum (-)\n* **Odio** = Nefret ediyorum (--)",
            examples: [
                { es: "Me encanta esta película", tr: "Bu filme bayılıyorum" },
                { es: "No me gustan las películas de terror", tr: "Korku filmlerini sevmem" }
            ]
        }
    ]
};

// ===== ÜNİTE 39: TEKNOLOJİ =====
const unit39Grammar: UnitGrammar = {
    unitId: 39, title: "Teknoloji Dili",
    rules: [
        {
            id: "verbos-tecnologia",
            title: "Teknoloji Fiilleri",
            explanation: "Teknoloji ile ilgili yaygın fiiller:\n\n* **Descargar** = İndirmek\n* **Subir** = Yüklemek\n* **Actualizar** = Güncellemek\n* **Reiniciar** = Yeniden başlatmak\n* **Conectar** = Bağlamak",
            examples: [
                { es: "Voy a descargar la aplicación", tr: "Uygulamayı indireceğim" },
                { es: "Necesito actualizar el sistema", tr: "Sistemi güncellemem gerekiyor" }
            ]
        }
    ]
};

// ===== ÜNİTE 40: SOSYAL MEDYA =====
const unit40Grammar: UnitGrammar = {
    unitId: 45, title: "Sosyal Medya Dili",
    rules: [
        {
            id: "verbos-redes",
            title: "Sosyal Medya Fiilleri",
            explanation: "Sosyal medya ile ilgili yaygın fiiller:\n\n* **Seguir** = Takip etmek\n* **Publicar** = Yayınlamak/Paylaşmak\n* **Compartir** = Paylaşmak\n* **Comentar** = Yorum yapmak\n* **Etiquetar** = Etiketlemek",
            examples: [
                { es: "Te voy a seguir", tr: "Seni takip edeceğim" },
                { es: "Acabo de publicar una foto", tr: "Az önce fotoğraf paylaştım" },
                { es: "¿Puedes compartir esto?", tr: "Bunu paylaşabilir misin?" }
            ]
        }
    ]
};

// ===== YENİ A2 ÜNİTELERİ (46-50) =====

// ===== ÜNİTE 46: EV VE TAŞINMA =====
const unit46Grammar: UnitGrammar = {
    unitId: 46, title: "Ev Arama ve Taşınma Dili",
    rules: [
        {
            id: "buscar-piso",
            title: "Ev Arama İfadeleri",
            explanation: "Ev ararken kullanılan yapılar:\n\n* **Busco** + tip = ... arıyorum\n* **Necesito** + özellik = ...'a ihtiyacım var\n* **Quiero alquilar** = Kiralamak istiyorum",
            examples: [
                { es: "Busco un piso amueblado", tr: "Eşyalı daire arıyorum" },
                { es: "Quiero alquilar un apartamento", tr: "Daire kiralamak istiyorum" },
                { es: "Necesito dos habitaciones", tr: "İki odaya ihtiyacım var" }
            ]
        }
    ]
};

// ===== ÜNİTE 47: ÇEVRE VE DOĞA =====
const unit47Grammar: UnitGrammar = {
    unitId: 47, title: "Çevre Dili",
    rules: [
        {
            id: "hay-que-deber",
            title: "Zorunluluk: Hay que / Debemos",
            explanation: "Çevre koruma için genel zorunluluk ifadeleri:\n\n* **Hay que + fiil** = ... yapmak gerekir (genel)\n* **Debemos + fiil** = ... yapmalıyız (biz)",
            examples: [
                { es: "Hay que reciclar", tr: "Geri dönüştürmek gerekir" },
                { es: "Debemos proteger el medio ambiente", tr: "Çevreyi korumalıyız" },
                { es: "Hay que ahorrar agua", tr: "Su tasarrufu yapmak gerekir" }
            ]
        }
    ]
};

// ===== ÜNİTE 48: HABERLER =====
const unit48Grammar: UnitGrammar = {
    unitId: 48, title: "Haber Dili",
    rules: [
        {
            id: "pasiva",
            title: "Pasif Yapı: Fue + Participio",
            explanation: "Haberlerde pasif yapı sık kullanılır:\n\n* **Fue + participio** = ...(i)ldı\n* **Fue anunciado** = Duyuruldu\n* **Fue descubierto** = Keşfedildi",
            examples: [
                { es: "El robo fue descubierto ayer", tr: "Hırsızlık dün keşfedildi" },
                { es: "La noticia fue anunciada hoy", tr: "Haber bugün duyuruldu" }
            ]
        }
    ]
};

// ===== ÜNİTE 49: KÜLTÜR VE GELENEKLER =====
const unit49Grammar: UnitGrammar = {
    unitId: 49, title: "Kültür ve Gelenek Dili",
    rules: [
        {
            id: "soler",
            title: "Alışkanlık: Soler + Fiil",
            explanation: "Geleneksel alışkanlıkları anlatmak için:\n\n**Soler + mastar fiil** = ... yapmak alışkanlığındadır\n\n* Suelo + fiil = Genellikle ... yaparım\n* Se suele + fiil = Genellikle ... yapılır",
            examples: [
                { es: "En España se suele cenar tarde", tr: "İspanya'da genellikle geç yemek yenir" },
                { es: "Solemos celebrar la Navidad en familia", tr: "Genellikle Noel'i aileyle kutlarız" }
            ]
        }
    ]
};

// ===== ÜNİTE 50: A2 FİNAL TEKRAR =====
const unit50Grammar: UnitGrammar = {
    unitId: 50, title: "A2 Genel Tekrar",
    rules: [
        {
            id: "resumen-a2",
            title: "A2 Seviyesi Özet",
            explanation: "A2 seviyesinde öğrendiğiniz ana gramer konuları:\n\n1. **Pretérito Indefinido** (Geçmiş zaman)\n2. **Ir a + infinitivo** (Yakın gelecek)\n3. **Pretérito Perfecto** (Yakın geçmiş)\n4. **Karşılaştırma** (más/menos que)\n5. **Nesne zamirleri** (lo, la, los, las)\n6. **Koşullu kibar ifadeler** (querría, podría)",
            examples: [
                { es: "Ayer fui al cine", tr: "Dün sinemaya gittim (Indefinido)" },
                { es: "Voy a viajar mañana", tr: "Yarın seyahat edeceğim (ir a)" },
                { es: "He estudiado mucho", tr: "Çok çalıştım (Perfecto)" }
            ]
        }
    ]
};

// Ünite ID'sine göre A2 grammar getir (ID: 26-50)
export function getA2GrammarForUnit(unitId: number): UnitGrammar {
    // Eski ID'leri yeni ID'lere eşle
    const idMapping: { [key: number]: UnitGrammar } = {
        26: unit21Grammar, 27: unit22Grammar, 28: unit23Grammar, 29: unit24Grammar, 30: unit25Grammar,
        31: unit26Grammar, 32: unit27Grammar, 33: unit28Grammar, 34: unit29Grammar, 35: unit30Grammar,
        36: unit31Grammar, 37: unit32Grammar, 38: unit33Grammar, 39: unit34Grammar, 40: unit35Grammar,
        41: unit36Grammar, 42: unit37Grammar, 43: unit38Grammar, 44: unit39Grammar, 45: unit40Grammar,
        46: unit46Grammar, 47: unit47Grammar, 48: unit48Grammar, 49: unit49Grammar, 50: unit50Grammar
    };

    const grammar = idMapping[unitId];
    if (grammar) {
        return { ...grammar, unitId };
    }
    return unit21Grammar;
}

