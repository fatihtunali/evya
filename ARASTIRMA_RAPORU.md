# Eskisini Ver Yenisini Al - Pazar Araştırma Raporu

## Yönetici Özeti

Bu rapor, Türkiye'deki e-ticaret ve takas (trade-in) platformlarını inceleyerek "Eskisini Ver Yenisini Al" iş modeli için stratejik öneriler sunmaktadır.

---

## 1. Türkiye E-Ticaret Pazarı Genel Görünüm

### 1.1 Pazar Liderleri (2024-2025)

| Platform | Aylık Ziyaretçi | Öne Çıkan Özellik |
|----------|-----------------|-------------------|
| Sahibinden.com | #1 | Emlak, araç, ilan çeşitliliği |
| Trendyol | 117.5M | En geniş ürün yelpazesi, 2M satıcı |
| Hepsiburada | 62.5M | 12M aktif müşteri, NASDAQ'ta işlem gören |
| N11 | - | Borancılı Teknoloji tarafından yönetiliyor |
| Amazon Türkiye | - | Global marka güveni |

### 1.2 İkinci El Pazarı Büyümesi

Türkiye'de ekonomik belirsizlik ve yüksek enflasyon, ikinci el pazarını önemli ölçüde büyütmüştür:
- **Letgo**: 10M+ aktif kullanıcı, yılda 50M+ ilan
- **Dolap (Trendyol)**: Türkiye'nin en çok indirilen 5. uygulaması, 40M+ ilan
- **Sahibinden**: Günde ortalama 300.000 yeni ilan

---

## 2. Mevcut Trade-In (Takas) Sistemleri Analizi

### 2.1 Nasıl Çalışıyor?

```
[Kullanıcı] → [Ürün Bilgisi Gir] → [Otomatik Değerleme] → [Teklif Al]
     ↓
[Eski Ürünü Teslim Et] → [Fiziksel İnceleme] → [Ödeme/İndirim]
     ↓
[Yeni Ürün Satın Al]
```

### 2.2 Aktif Trade-In Programları

| Firma | Program Adı | Özellikler |
|-------|-------------|------------|
| **MediaMarkt** | Eski Cihazını Yenile | Mağaza teslim + ücretsiz kargo kiti |
| **Hepsiburada** | Eskiyi Yenile | Online değerleme, 15 gün içinde ödeme |
| **Vatan Bilgisayar** | Değiş Tokuş | Yerinde değerleme |
| **Teknosa** | Eskisini Getir Yenisini Götür | Tüm kategorilerde geçerli |
| **Turkcell Pasaj** | Eskisini Getir Yenisini Götür | Operatör avantajları |
| **Vodafone** | Telefon Yenile | Yenilenmiş telefon satışı + geri alım |

### 2.3 Değerleme Kriterleri

**Fiziksel Durum:**
- Kırık, çatlak, çizik durumu
- Ekran hasarları (piksel kaybı, leke, sarılık)
- Touch ID / Face ID çalışırlığı
- Tüm fonksiyonların kontrolü (kamera, mikrofon, Bluetooth, WiFi)

**Sistem Kontrolleri:**
- BTK kayıt durumu
- IMEI kontrol
- Ekran kilidi kaldırılmış olmalı
- Hukuki engel olmamalı

**Minimum Değer Şartları:**
- Genel: 1.000 TL üzeri değerleme
- Apple cihazlar: 2.000 TL üzeri

---

## 3. Platform İş Modelleri Karşılaştırması

### 3.1 Komisyon Yapıları

| Platform | Satıcı Komisyonu | Alıcı Komisyonu | Model |
|----------|------------------|-----------------|-------|
| Letgo | %0 | %0 | C2C, yüz yüze satış |
| Sahibinden | %0 | %0 | C2C, ilan tabanlı |
| Dolap | %15 | Ek ücret | C2C, kargo destekli |
| Gardrops | %0 | %9 | C2C, moda odaklı |

### 3.2 Güvenli Ödeme Sistemleri

- **Sahibinden - "Param Güvende"**: Escrow sistemi, alıcı onaylayana kadar ödeme tutulur
- **Letgo - "Cüzdanım Güvende"**: Kart ile ödeme, güvenli kargo, kolay iade
- **Dolap**: Trendyol altyapısı ile güvenli ödeme

---

## 4. Teknik Altyapı Gereksinimleri

### 4.1 Ödeme Sistemleri

#### iyzico
- **Avantajlar**: Gelişmiş API, fraud önleme, pazaryeri desteği, global multi-currency
- **Entegrasyon**: REST API, WooCommerce/OpenCart/Magento modülleri
- **Özellik**: Taksitli satış desteği
- **Uygun**: Gelişmiş projeler, pazaryeri modeli

#### PayTR
- **Avantajlar**: Düşük komisyon, 2 saat içinde aktif, tek entegrasyon
- **Entegrasyon**: Merchant ID + API Key sistemi
- **Özellik**: Ertesi iş günü ödeme
- **Uygun**: Yeni başlayanlar, düşük hacimli işletmeler

### 4.2 Kargo Entegrasyonları

**Desteklenmesi Gereken Kargo Firmaları:**
- Yurtiçi Kargo
- MNG Kargo
- Aras Kargo
- PTT Kargo
- Sürat Kargo
- hepsiJET
- Sendeo

**Entegrasyon Özellikleri:**
- Otomatik kargo fişi oluşturma
- Anlık takip numarası aktarımı
- Teslimat durumu bildirimleri
- Geri gönderi (iade) yönetimi

### 4.3 Pazaryeri Yazılım Çözümleri

| Çözüm | Fiyat | Özellik |
|-------|-------|---------|
| KMK C2C | 133.000 - 238.000 TL (tek seferlik) | Ömür boyu lisans |
| Webruz C2C | 16.990 TL+ | OpenCart tabanlı, açık kaynak |
| Softomi | Özel fiyat | Sadece C2C odaklı |

---

## 5. Önerilen İş Modeli

### 5.1 Hibrit Trade-In Modeli

```
┌─────────────────────────────────────────────────────────────────┐
│                    ESKİSİNİ VER YENİSİNİ AL                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [B2C] Firma → Müşteri                                         │
│  • Yenilenmiş ürün satışı                                      │
│  • Garantili ürünler                                           │
│  • Profesyonel değerleme                                       │
│                                                                 │
│  [C2C] Müşteri → Müşteri (Opsiyonel - Faz 2)                   │
│  • Kullanıcılar arası takas                                    │
│  • Platform komisyonu                                          │
│                                                                 │
│  [Trade-In] Müşteri → Firma → Müşteri                          │
│  • Eski ürün geri alım                                         │
│  • Yenileme/onarım                                             │
│  • Yenilenmiş olarak satış                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Gelir Modeli Önerileri

1. **Trade-In Marjı**: Geri alım fiyatı ile yenilenmiş satış fiyatı arasındaki fark
2. **Komisyon** (C2C için): %5-10 arası satıcı komisyonu
3. **Premium İlan**: Öne çıkarma, vitrin gibi ek hizmetler
4. **Garanti Paketleri**: Uzatılmış garanti satışı
5. **Kargo Geliri**: Anlaşmalı kargo fiyat farkı

### 5.3 Farklılaşma Stratejileri

1. **Şeffaf Değerleme**: AI destekli, anlık fiyat teklifi
2. **Hızlı Ödeme**: 24-48 saat içinde ödeme (rakipler 15 gün)
3. **Kapıda Teslim Alma**: Kurye ile evden ürün toplama
4. **Çoklu Kategori**: Sadece telefon değil, tüm elektronik + beyaz eşya + mobilya
5. **Güven Sistemi**: Şeffaf kullanıcı puanlaması

---

## 6. MVP (Minimum Uygulanabilir Ürün) Kapsamı

### Faz 1 - Temel Özellikler
- [ ] Kullanıcı kayıt/giriş sistemi
- [ ] Ürün değerleme formu (marka, model, durum)
- [ ] Otomatik fiyat teklifi algoritması
- [ ] Eski ürün gönderim süreci
- [ ] Yeni ürün kataloğu
- [ ] Ödeme entegrasyonu (iyzico/PayTR)
- [ ] Kargo entegrasyonu (Yurtiçi/MNG)
- [ ] Sipariş takip sistemi

### Faz 2 - Gelişmiş Özellikler
- [ ] C2C pazaryeri modülü
- [ ] Mobil uygulama (iOS/Android)
- [ ] AI destekli görsel değerleme
- [ ] Canlı destek / chatbot
- [ ] Sadakat programı
- [ ] Taksitli ödeme seçenekleri

---

## 7. Teknik Mimari Önerisi

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │   Web App       │  │   Mobile App    │  │   Admin Panel   │ │
│  │   (React/Next)  │  │   (React Native)│  │   (React)       │ │
│  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘ │
└───────────┼────────────────────┼────────────────────┼──────────┘
            │                    │                    │
            └────────────────────┼────────────────────┘
                                 │
                         ┌───────▼───────┐
                         │   API Gateway │
                         │   (REST API)  │
                         └───────┬───────┘
                                 │
┌────────────────────────────────┼────────────────────────────────┐
│                         BACKEND                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │   Auth   │  │ Products │  │  Trade   │  │  Orders  │       │
│  │ Service  │  │ Service  │  │   In     │  │ Service  │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │ Payment  │  │ Shipping │  │  Users   │  │  Notify  │       │
│  │ Service  │  │ Service  │  │ Service  │  │ Service  │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
└────────────────────────────────┼────────────────────────────────┘
                                 │
┌────────────────────────────────┼────────────────────────────────┐
│                      EXTERNAL SERVICES                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │  iyzico  │  │  Kargo   │  │   SMS    │  │  Email   │       │
│  │  PayTR   │  │   API    │  │   API    │  │   API    │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. Sonraki Adımlar

1. **OpenAPI.yaml Oluşturma** - API yapısının tanımlanması
2. **Veritabanı Şeması** - Entity ilişkilerinin belirlenmesi
3. **UI/UX Tasarım** - Wireframe ve mockup hazırlığı
4. **Teknoloji Seçimi** - Frontend/Backend framework kararı
5. **MVP Geliştirme** - İlk sürümün kodlanması

---

## Kaynaklar

- [Magna Dijital - E-Ticaret Siteleri 2024-2025](https://www.magnadijital.com.tr/blog/)
- [Vepara - İkinci El Satış Siteleri](https://www.vepara.com.tr/ikinci-el-satis-siteleri/)
- [E-Ticaret Yardım - PayTR vs iyzico](https://eticaretyardim.com/paytr-mi-iyzico-mu-e-ticaret-odeme-sistemleri-karsilastirma/)
- [KMK - C2C Pazaryeri Yazılımı](https://www.kmk.net.tr/c2c-pazaryeri-e-ticaret-yazilimi)
- [ShopPHP - Kargo API Entegrasyonu](https://www.shopphp.net/m/kargo-api-entegrasyon)

---

*Rapor Tarihi: 28 Aralık 2025*
