'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar } from 'lucide-react';

export default function KullanimKosullariPage() {
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
                <FileText className="h-4 w-4" />
                Yasal
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
            >
              Kullanım Koşulları
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
              Bu Kullanım Koşulları ("Koşullar"), Eskisini Ver Yenisini Al platformunu ("Platform")
              kullanımınızı düzenler. Platformu kullanarak bu koşulları kabul etmiş sayılırsınız.
            </p>

            <h2>2. Hizmet Tanımı</h2>
            <p>
              Platform, kullanıcıların elektronik cihazlarını diğer kullanıcılarla takas etmelerine
              olanak tanıyan bir P2P (kişiden kişiye) aracılık hizmeti sunar. Platform, nakit alım-satım
              işlemi gerçekleştirmez.
            </p>

            <h2>3. Üyelik Koşulları</h2>
            <ul>
              <li>Platformu kullanabilmek için 18 yaşından büyük olmanız gerekmektedir.</li>
              <li>Kayıt sırasında doğru ve güncel bilgiler vermekle yükümlüsünüz.</li>
              <li>Hesap güvenliğinizden tamamen siz sorumlusunuz.</li>
              <li>Bir kişi yalnızca bir hesap açabilir.</li>
            </ul>

            <h2>4. İlan Verme Kuralları</h2>
            <ul>
              <li>İlanlar sadece yasal yollarla edinilmiş ürünler için verilebilir.</li>
              <li>Çalıntı, kayıp veya hacizli ürünlerin ilanı kesinlikle yasaktır.</li>
              <li>İlan içerikleri doğru ve güncel olmalıdır.</li>
              <li>Yanıltıcı fotoğraf veya açıklama kullanımı yasaktır.</li>
              <li>Aynı ürün için birden fazla ilan açılamaz.</li>
            </ul>

            <h2>5. Takas İşlemleri</h2>
            <p>
              Takas işlemleri tamamen kullanıcılar arasında gerçekleşir. Platform, taraflar arasında
              aracılık görevi üstlenir ancak işlemin tarafı değildir. İşlem sonucu oluşabilecek
              anlaşmazlıklarda Platform arabuluculuk hizmeti sunabilir ancak sonuçtan sorumlu tutulamaz.
            </p>

            <h2>6. Yasaklı Ürünler</h2>
            <p>Aşağıdaki ürünlerin ilanı kesinlikle yasaktır:</p>
            <ul>
              <li>Çalıntı veya kayıp bildirimi yapılmış cihazlar</li>
              <li>IMEI numarası değiştirilmiş cihazlar</li>
              <li>Taklit veya sahte ürünler</li>
              <li>Yasadışı yazılım yüklü cihazlar</li>
              <li>Sözleşme bağlı veya borçlu cihazlar</li>
            </ul>

            <h2>7. Fikri Mülkiyet</h2>
            <p>
              Platform üzerindeki tüm içerik, tasarım, logo ve markalar Eskisini Ver Yenisini Al'a
              aittir ve telif hakları ile korunmaktadır. İzinsiz kullanımı yasaktır.
            </p>

            <h2>8. Sorumluluk Sınırlaması</h2>
            <p>
              Platform, kullanıcılar arasındaki işlemlerden, cihaz kalitesinden veya teslimat
              süreçlerinden doğrudan sorumlu tutulamaz. Kullanıcılar, dikkatli davranmak ve
              karşı tarafı doğrulamakla yükümlüdür.
            </p>

            <h2>9. Hesap Askıya Alma ve Sonlandırma</h2>
            <p>
              Platform, bu koşulları ihlal eden kullanıcıların hesaplarını önceden bildirim
              yapmaksızın askıya alabilir veya kalıcı olarak kapatabilir.
            </p>

            <h2>10. Değişiklikler</h2>
            <p>
              Platform, bu koşulları herhangi bir zamanda değiştirme hakkını saklı tutar.
              Değişiklikler platformda yayınlandığı anda yürürlüğe girer.
            </p>

            <h2>11. Uygulanacak Hukuk</h2>
            <p>
              Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul
              Mahkemeleri ve İcra Daireleri yetkilidir.
            </p>

            <h2>12. İletişim</h2>
            <p>
              Kullanım koşulları hakkında sorularınız için{' '}
              <a href="mailto:legal@eskisiniveryenisinial.com" className="text-purple-600 hover:underline">
                legal@eskisiniveryenisinial.com
              </a>{' '}
              adresinden bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
