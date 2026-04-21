# BlueVet Veteriner Kliniği — Web Sitesi

Mersin Yenişehir'de 7/24 hizmet veren BlueVet Veteriner Kliniği'nin resmi web sitesi. Tek sayfa, hızlı yüklenen, tüm cihazlarda kusursuz çalışan statik site.

## İçerik

- `index.html` — tüm site (HTML + CSS + JS tek dosyada)
- `vercel.json` — Vercel cache ve güvenlik header ayarları
- `robots.txt` — arama motoru tarama izinleri
- `sitemap.xml` — SEO için site haritası (yayın sonrası domain'i güncelleyin)
- `package.json` — proje metadatası
- `brand-and-copy.md` — tasarım sistemi ve Türkçe içerik referansı

## İletişim Bilgileri

- **Telefon:** 0530 739 25 83
- **Adres:** Limonluk Mah. İsmet İnönü Bulvarı No:312B, Yenişehir / Mersin
- **Çalışma Saatleri:** Hafta içi 24 saat · Cumartesi 09:00–22:00 · Pazar 10:00–20:00

## Vercel'e Yayınlama (3 Yöntem)

### Yöntem 1 — Sürükle-Bırak (En Kolay, 30 saniye)

1. [vercel.com/new](https://vercel.com/new) adresine gir, Vercel hesabınla oturum aç.
2. Bu klasörün tamamını (`bluevet`) tarayıcıya sürükle-bırak.
3. Vercel otomatik statik site algılayacak — "Deploy" tuşuna bas.
4. ~20 saniye içinde `https://bluevet-xxx.vercel.app` adresi hazır.

### Yöntem 2 — Vercel CLI

```bash
# 1. Vercel CLI'ı yükle (bir kez)
npm i -g vercel

# 2. Bu klasörde komut çalıştır
cd bluevet
vercel

# 3. Sorulan birkaç soruya Enter geç (defaults)
# 4. Production'a yayınla
vercel --prod
```

### Yöntem 3 — GitHub + Vercel (Otomatik Deploy)

1. Bu klasörü bir GitHub repository'ye push'la.
2. [vercel.com/new](https://vercel.com/new) → "Import Git Repository"
3. Repo'yu seç → "Deploy"
4. Artık her `git push` otomatik yeni deploy tetikler.

## Domain Bağlama

Vercel panelinde:
1. Projeyi aç → **Settings** → **Domains**
2. `bluevet.com.tr` (veya istediğin domain) ekle
3. Vercel'in verdiği A record (76.76.21.21) veya CNAME'i domain sağlayıcında ayarla
4. Propagation için 5–60 dakika bekle → https otomatik aktifleşir

## Yerel Önizleme

```bash
# Basit Python sunucusu
python3 -m http.server 8080
# → http://localhost:8080

# veya npx serve
npx serve .
# → http://localhost:3000
```

## Özelleştirme

### Telefon numarasını değiştirmek için
`index.html` içinde şu yerlerde değişiklik yap:
- `tel:+905307392583` (arama linkleri)
- `wa.me/905307392583` (WhatsApp linkleri)
- `0530 739 25 83` (görünen metin)

### Adres / harita değiştirmek için
"Çalışma Saatleri & Konum" bölümündeki iframe `src`'sini ve alt metin bloğunu güncelle.

### Görselleri değiştirmek için
Şu an Unsplash CDN kullanılıyor. Kendi fotoğraflarını eklemek için:
1. Klasöre `/images/` dizini aç, `.jpg`/`.webp` dosyalarını koy.
2. HTML'deki `<img src="https://images.unsplash.com/...">` URL'lerini `src="/images/kendi-resmin.jpg"` olarak değiştir.

## Performans Notları

- Tek HTML dosyası, inline CSS + JS — ekstra network request yok.
- Google Fonts `display=swap` ile hemen render oluyor.
- Resimler lazy-load.
- `prefers-reduced-motion` saygıyla işleniyor.
- Lighthouse tahmini skor: 95+ / 100 (mobil & masaüstü).

## Tarayıcı Uyumluluğu

- Chrome / Edge / Safari / Firefox son 2 sürüm
- iOS Safari 14+ (safe-area inset desteği dahil)
- Android Chrome 90+
- Küçük ekranlar (320px) dahil tüm viewport boyutları

---

© BlueVet Veteriner Kliniği · Mersin 🐾
