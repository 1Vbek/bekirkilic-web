# BLUEVET VETERİNER KLİNİĞİ — Website & Brand Guide

Mersin Yenişehir'de konumlanan BLUEVET Veteriner Kliniği için tam marka kimliği, 5 sayfalık web sitesi ve dönüşüm odaklı tasarım.

---

## 🧭 Dosya yapısı

```
bluevet/
├── index.html          Anasayfa (dönüşüm odaklı)
├── hakkimizda.html     Hakkımızda / Dr. Ömer Bey hikayesi
├── hizmetler.html      Tüm hizmetler — kedi, köpek, koruyucu, cerrahi, acil
├── yorumlar.html       Sosyal kanıt + olumsuz yorumlara profesyonel yanıt
├── iletisim.html       Adres, telefon, harita, çalışma saatleri
└── assets/
    ├── style.css       Tüm stil sistemi (tasarım tokenları, komponent stilleri)
    └── script.js       Mobil menü, sayaç animasyonları, scroll-reveal
```

Deploy için `bluevet/` klasörünün tamamını herhangi bir statik hosting servisine (Netlify, Vercel, Hostinger, cPanel) yükleyin. Hiçbir backend veya build aşaması yok — açıp direkt kullanabilirsiniz.

---

## 🎨 Marka kimliği

**Pozisyonlama:** Premium ama soğuk değil — sıcak, dürüst, 20 yıllık aile hekimi hissi.

**Ana renkler**

| İsim | Kullanım | Hex |
|---|---|---|
| Midnight Navy | Başlıklar, footer | `#0b2440` |
| BLUEVET Blue | Birincil marka, CTA | `#1b4d7e` |
| Lake Blue | Linkler, aksan | `#3a7cb5` |
| Sky Soft | Arka plan tonları | `#a7c6e2` |
| Cream | Sıcak arka plan | `#faf7f2` |
| Gold | Premium vurgu, yıldızlar | `#c9a35a` |

**Tipografi**
- Başlıklar: **Cormorant Garamond** (italik kullanım lüks hissi verir)
- Gövde: **Inter** (modern, okunaklı)
- İkisi de Google Fonts — ücretsiz, web'e gömülü.

**Logo işareti:** El+kalp motifli ev/shelter ikonu — "barınma" ve "şefkat"i aynı anda söyler. Metinle birlikte "BLUEVET" / "Veteriner Kliniği".

**Ses tonu**
- Emir kipi değil, davet kipi
- Teknik terim değil, anne-kalbiyle yazılmış cümleler
- "Biz" yerine "birlikte"
- Net, kısa, sakinleştirici microcopy

---

## 🧱 Sayfa yapısı & strateji

### 1. Anasayfa (`index.html`) — dönüşüm odaklı
`Hero (duygusal başlık + 3 CTA) → Trust Bar (4 animasyonlu sayı) → Hizmetler önizlemesi (6 kart) → Neden Biz (4 madde) → Dr. Ömer Bey highlight + alıntı → Review aggregate (4.8/5) + 3 yorum → 7/24 Acil şeridi → FAQ (6 soru) → Final CTA → Footer`

### 2. Hakkımızda (`hakkimizda.html`)
`Sayfa başlığı → Doktor hikayesi + alıntı → Değerler (3 kart) → 20 yıllık timeline → Mesleki duruş blok → CTA`

### 3. Hizmetler (`hizmetler.html`)
`Sayfa başlığı → Kedi Sağlığı (SVG + checklist) → Köpek Sağlığı (SVG + checklist) → Koruyucu Bakım grid (6 kart) → Cerrahi & Laboratuvar grid (6 kart, son kart koyu "Acil") → Şeffaflık sözü bandı → Acil band`

### 4. Yorumlar (`yorumlar.html`)
`Sayfa başlığı → 4 istatistik → Agg 4.8/5 banner → 9 yorum kartı → Olumsuz yorumlar için profesyonel yanıt → CTA`

### 5. İletişim (`iletisim.html`)
`Sayfa başlığı → İki sütun: iletişim kartı (adres/telefon/saat/acil) + Google Maps iframe → Microcopy "kendi evimizdenmiş gibi" → 4 pratik FAQ → Final acil band`

Her sayfada aynı **sticky header**, **yüzer WhatsApp bubble** (desktop), ve **mobile sticky CTA barı** (Ara + WhatsApp) bulunur.

---

## ⚡ Dönüşüm elementleri (conversion levers)

| Eleman | Nereye |
|---|---|
| **3 CTA seti** (Ara / WhatsApp / Yol Tarifi) | Her hero + her final CTA |
| **Floating WhatsApp** (pulse animasyonlu) | Tüm sayfalarda, desktop |
| **Sticky mobile bar** | Tüm sayfalar, 640px altı |
| **Trust counters** (20+, 5000+, 24/7, 4.8) | Anasayfa + Yorumlar |
| **7/24 Acil band** | Anasayfa, Hizmetler, İletişim |
| **Review aggregate badge** (Google onaylı) | Anasayfa + Yorumlar |
| **Doktor alıntısı** (İnsan dokunuşu) | Anasayfa + Hakkımızda |
| **Şeffaflık sözü** (kaygı azaltıcı) | Hizmetler + Hakkımızda |
| **FAQ anti-anxiety** (olumsuz yorumlar, fiyat, stres) | Anasayfa |

---

## ⚙️ Yayına almadan önce değiştirmeniz gerekenler

Tüm dosyalarda aşağıdaki placeholder'ları gerçek bilgilerle değiştirin (Find & Replace tek seferde hepsini halleder):

| Placeholder | Ne ile değiştirin |
|---|---|
| `+903240000000` | Kliniğin gerçek telefon numarası (boşluksuz, uluslararası formatta) |
| `+90 324 000 00 00` | Gösterim için biçimli telefon (footer, iletişim kartı) |
| `https://wa.me/903240000000` | WhatsApp linki — aynı numara, başında + yok |
| `20 yıllık / 2003'ten beri` | Kliniğin gerçek kuruluş yılına göre güncelleyin |
| `4.8 / 5000+` | Gerçek Google puanı ve müşteri sayısı |
| Yorumlar (`yorumlar.html`) | Gerçek, izinle alınmış Google yorumlarıyla değiştirin — gerçek isimler, tarihler |
| Hero SVG illüstrasyonları | İsterseniz gerçek klinik fotoğrafları ile değiştirilebilir |

**Google Maps:** Hazır iframe doğru adresi gösteriyor. Özel bir Google Places URL'iniz varsa iletişim sayfasındaki `iframe src` değerini değiştirin.

**SEO:** Her sayfanın `<title>` ve `<meta description>` optimize edildi. Eklemeniz önerilen: Open Graph resim (`og:image`), Google Search Console kaydı, Google My Business bağlantısı.

---

## 🖼 Görsel öneriler (ileride ekleyebilirsiniz)

Şu anda tüm illüstrasyonlar **inline SVG** — yükleme hızlı, düzenleme kolay. İleride koyabileceğiniz gerçek fotoğraflar:

- Hero'da Dr. Ömer Bey bir kediyi muayene ederken (doğal ışık, sıcak ton)
- Hakkımızda'da klinik iç mekan (sakin, kitaplık, oturma köşesi)
- Hizmetler bloklarında gerçek kedi/köpek yakın çekim
- Yorumlar sayfasında sahiplerin pet'leriyle gülümseyen kareleri (izinle)

Fotoğrafları `assets/img/` altına koyup, ilgili `<svg>` bloklarını `<img src="assets/img/dosya.jpg" alt="...">` ile değiştirmek yeterli.

---

## 📱 Mobile-first & performans

- Mobilde sticky alt bar, desktop'ta floating WhatsApp.
- Hamburger menü 1024px altında aktif.
- Font preconnect + swap ile flicker yok.
- Tüm görüntüler SVG = 0 yavaş yüklenen raster.
- Lighthouse tahmini: 95+ Performance, 100 Accessibility, 100 Best Practices, 95+ SEO.

---

## ✉️ Son söz

Bu siteyi açıp kapatan bir pet sahibi değil — endişeli, hayvanını seven, "doğru yerde miyim?" diye soran bir insan. Her kelime, her renk, her buton bu soruya yanıt vermek için tasarlandı:

> "Evet. Buradasınız. Merak etmeyin — biz varız."

İyi yayınlar. 🐾
