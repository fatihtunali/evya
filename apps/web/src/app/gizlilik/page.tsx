'use client';

import { motion } from 'framer-motion';
import { Shield, Calendar } from 'lucide-react';

export default function GizlilikPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                <Shield className="h-4 w-4" />
                Yasal
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
            >
              Gizlilik Politikası
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400"
            >
              <Calendar className="h-4 w-4" />
              Son güncelleme: 1 Aralık 2024
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl prose prose-gray dark:prose-invert">
            <h2>1. Giriş</h2>
            <p>
              Eskisini Ver Yenisini Al olarak kişisel verilerinizin gizliliği ve güvenliği bizim için
              son derece önemlidir. Bu Gizlilik Politikası, hangi verileri topladığımızı, nasıl
              kullandığımızı ve koruduğumuzu açıklamaktadır.
            </p>

            <h2>2. Toplanan Veriler</h2>
            <h3>2.1 Hesap Bilgileri</h3>
            <ul>
              <li>Ad ve soyad</li>
              <li>E-posta adresi</li>
              <li>Telefon numarası</li>
              <li>Profil fotoğrafı (opsiyonel)</li>
            </ul>

            <h3>2.2 İlan Bilgileri</h3>
            <ul>
              <li>Cihaz bilgileri ve fotoğrafları</li>
              <li>IMEI numarası (doğrulama için)</li>
              <li>Konum bilgisi (şehir düzeyinde)</li>
            </ul>

            <h3>2.3 Kullanım Verileri</h3>
            <ul>
              <li>IP adresi</li>
              <li>Tarayıcı ve cihaz bilgileri</li>
              <li>Platform kullanım istatistikleri</li>
              <li>Çerezler ve benzeri teknolojiler</li>
            </ul>

            <h2>3. Verilerin Kullanım Amaçları</h2>
            <p>Topladığımız verileri aşağıdaki amaçlarla kullanırız:</p>
            <ul>
              <li>Hesap oluşturma ve yönetimi</li>
              <li>İlan yayınlama ve eşleştirme hizmetleri</li>
              <li>Kullanıcı doğrulama ve güvenlik</li>
              <li>Müşteri desteği sağlama</li>
              <li>Platform iyileştirme ve analiz</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            </ul>

            <h2>4. Veri Paylaşımı</h2>
            <p>Kişisel verilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:</p>
            <ul>
              <li>Açık rızanız olduğunda</li>
              <li>Yasal zorunluluk durumlarında</li>
              <li>Hizmet sağlayıcılarımızla (gizlilik sözleşmesi kapsamında)</li>
              <li>Dolandırıcılık önleme amacıyla yetkili kurumlarla</li>
            </ul>

            <h2>5. Veri Güvenliği</h2>
            <p>
              Verilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz:
            </p>
            <ul>
              <li>SSL/TLS şifreleme</li>
              <li>Güvenli veri merkezleri</li>
              <li>Düzenli güvenlik denetimleri</li>
              <li>Erişim kontrolü ve yetkilendirme</li>
            </ul>

            <h2>6. Veri Saklama Süresi</h2>
            <p>
              Kişisel verilerinizi, hizmet sunumu için gerekli olan süre boyunca veya yasal
              zorunluluklar gerektirdiği sürece saklarız. Hesap silme talebiniz üzerine
              verileriniz 30 gün içinde kalıcı olarak silinir.
            </p>

            <h2>7. Haklarınız</h2>
            <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul>
              <li>Verilerinize erişim hakkı</li>
              <li>Verilerin düzeltilmesini talep etme hakkı</li>
              <li>Verilerin silinmesini talep etme hakkı</li>
              <li>Veri işlemeye itiraz etme hakkı</li>
              <li>Veri taşınabilirliği hakkı</li>
            </ul>

            <h2>8. Çocukların Gizliliği</h2>
            <p>
              Platformumuz 18 yaş altı kişilere yönelik değildir. Bilerek 18 yaş altı
              kişilerden veri toplamayız.
            </p>

            <h2>9. Politika Değişiklikleri</h2>
            <p>
              Bu politikayı zaman zaman güncelleyebiliriz. Önemli değişiklikler hakkında
              sizi e-posta veya platform içi bildirimlerle bilgilendireceğiz.
            </p>

            <h2>10. İletişim</h2>
            <p>
              Gizlilik ile ilgili sorularınız için{' '}
              <a href="mailto:gizlilik@eskisiniveryenisinial.com" className="text-purple-600 hover:underline">
                gizlilik@eskisiniveryenisinial.com
              </a>{' '}
              adresinden bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
