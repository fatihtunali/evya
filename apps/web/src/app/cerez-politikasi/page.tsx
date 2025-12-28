'use client';

import { motion } from 'framer-motion';
import { Cookie, Calendar } from 'lucide-react';

export default function CerezPolitikasiPage() {
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
                <Cookie className="h-4 w-4" />
                Yasal
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
            >
              Çerez Politikası
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
            <h2>1. Çerez Nedir?</h2>
            <p>
              Çerezler, web sitelerinin tarayıcınıza yerleştirdiği küçük metin dosyalarıdır.
              Bu dosyalar, web sitesinin düzgün çalışmasını sağlamak, kullanıcı deneyimini
              iyileştirmek ve site kullanımını analiz etmek için kullanılır.
            </p>

            <h2>2. Kullandığımız Çerez Türleri</h2>

            <h3>2.1 Zorunlu Çerezler</h3>
            <p>
              Web sitesinin temel işlevlerini yerine getirmesi için gerekli çerezlerdir.
              Bu çerezler olmadan site düzgün çalışmaz.
            </p>
            <ul>
              <li>Oturum çerezleri</li>
              <li>Kimlik doğrulama çerezleri</li>
              <li>Güvenlik çerezleri</li>
            </ul>

            <h3>2.2 Performans Çerezleri</h3>
            <p>
              Sitenin performansını ölçmek ve iyileştirmek için kullanılan çerezlerdir.
            </p>
            <ul>
              <li>Google Analytics çerezleri</li>
              <li>Sayfa yükleme süresi ölçüm çerezleri</li>
              <li>Hata raporlama çerezleri</li>
            </ul>

            <h3>2.3 İşlevsellik Çerezleri</h3>
            <p>
              Tercihlerinizi hatırlamak ve kişiselleştirilmiş deneyim sunmak için kullanılır.
            </p>
            <ul>
              <li>Dil tercihi çerezleri</li>
              <li>Tema tercihi çerezleri</li>
              <li>Konum çerezleri</li>
            </ul>

            <h3>2.4 Hedefleme/Reklam Çerezleri</h3>
            <p>
              Size ilgi alanlarınıza göre reklamlar göstermek için kullanılır.
            </p>
            <ul>
              <li>Google Ads çerezleri</li>
              <li>Facebook Pixel çerezleri</li>
              <li>Yeniden hedefleme çerezleri</li>
            </ul>

            <h2>3. Çerez Tablosu</h2>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th>Çerez Adı</th>
                  <th>Sağlayıcı</th>
                  <th>Amaç</th>
                  <th>Süre</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session_id</td>
                  <td>Birinci taraf</td>
                  <td>Oturum yönetimi</td>
                  <td>Oturum</td>
                </tr>
                <tr>
                  <td>auth_token</td>
                  <td>Birinci taraf</td>
                  <td>Kimlik doğrulama</td>
                  <td>30 gün</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>Google</td>
                  <td>Analitik</td>
                  <td>2 yıl</td>
                </tr>
                <tr>
                  <td>preferences</td>
                  <td>Birinci taraf</td>
                  <td>Kullanıcı tercihleri</td>
                  <td>1 yıl</td>
                </tr>
              </tbody>
            </table>

            <h2>4. Çerez Tercihlerinizi Yönetme</h2>
            <p>
              Çerez tercihlerinizi aşağıdaki yöntemlerle yönetebilirsiniz:
            </p>

            <h3>4.1 Tarayıcı Ayarları</h3>
            <p>
              Çoğu tarayıcı, çerezleri engellemenize veya silmenize olanak tanır.
              Tarayıcınızın ayarlar menüsünden çerez tercihlerinizi düzenleyebilirsiniz.
            </p>
            <ul>
              <li><strong>Chrome:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler</li>
              <li><strong>Firefox:</strong> Seçenekler → Gizlilik ve Güvenlik → Çerezler</li>
              <li><strong>Safari:</strong> Tercihler → Gizlilik → Çerezler</li>
              <li><strong>Edge:</strong> Ayarlar → Çerezler ve site izinleri</li>
            </ul>

            <h3>4.2 Platform Çerez Ayarları</h3>
            <p>
              Platformumuzdaki çerez banner'ı üzerinden de tercihlerinizi yönetebilirsiniz.
              Zorunlu çerezler dışındaki tüm çerezleri kabul veya reddetme hakkınız bulunmaktadır.
            </p>

            <h2>5. Çerezleri Devre Dışı Bırakmanın Etkileri</h2>
            <p>
              Çerezleri tamamen devre dışı bırakmanız durumunda platformumuzun bazı
              özellikleri düzgün çalışmayabilir:
            </p>
            <ul>
              <li>Oturum açık kalmayabilir</li>
              <li>Tercihleriniz hatırlanmayabilir</li>
              <li>Bazı özellikler kullanılamayabilir</li>
            </ul>

            <h2>6. Üçüncü Taraf Çerezleri</h2>
            <p>
              Platformumuzda üçüncü taraf hizmet sağlayıcıların çerezleri de kullanılmaktadır.
              Bu çerezlerin kullanımı, ilgili üçüncü tarafların gizlilik politikalarına tabidir.
            </p>

            <h2>7. Politika Güncellemeleri</h2>
            <p>
              Bu politikayı zaman zaman güncelleyebiliriz. Önemli değişiklikler hakkında
              sizi bilgilendireceğiz.
            </p>

            <h2>8. İletişim</h2>
            <p>
              Çerez politikası hakkında sorularınız için{' '}
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
