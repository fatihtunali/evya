'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar } from 'lucide-react';

export default function KVKKPage() {
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
              KVKK Aydınlatma Metni
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
            <h2>1. Veri Sorumlusu</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz;
              veri sorumlusu olarak Eskisini Ver Yenisini Al Teknoloji A.Ş. ("Şirket") tarafından
              aşağıda açıklanan kapsamda işlenebilecektir.
            </p>

            <h2>2. Kişisel Verilerin İşlenme Amaçları</h2>
            <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <ul>
              <li>Üyelik işlemlerinin gerçekleştirilmesi</li>
              <li>Platform hizmetlerinin sunulması</li>
              <li>Kimlik doğrulama işlemlerinin yapılması</li>
              <li>İletişim faaliyetlerinin yürütülmesi</li>
              <li>Müşteri memnuniyetinin ölçülmesi</li>
              <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
              <li>Bilgi güvenliği süreçlerinin yürütülmesi</li>
              <li>Saklama ve arşiv faaliyetlerinin yürütülmesi</li>
            </ul>

            <h2>3. İşlenen Kişisel Veri Kategorileri</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Veri Kategorisi</th>
                  <th>Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kimlik Bilgileri</td>
                  <td>Ad, soyad, T.C. kimlik numarası</td>
                </tr>
                <tr>
                  <td>İletişim Bilgileri</td>
                  <td>Telefon, e-posta, adres</td>
                </tr>
                <tr>
                  <td>İşlem Güvenliği</td>
                  <td>IP adresi, cihaz bilgileri, log kayıtları</td>
                </tr>
                <tr>
                  <td>Görsel Veriler</td>
                  <td>Profil fotoğrafı, ürün fotoğrafları</td>
                </tr>
              </tbody>
            </table>

            <h2>4. Kişisel Verilerin Aktarımı</h2>
            <p>
              Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde:
            </p>
            <ul>
              <li>İş ortaklarımıza</li>
              <li>Tedarikçilerimize</li>
              <li>Kanunen yetkili kamu kurumlarına</li>
              <li>Kanunen yetkili özel kişilere</li>
            </ul>
            <p>aktarılabilecektir.</p>

            <h2>5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
            <p>
              Kişisel verileriniz, elektronik ortamda web sitesi ve mobil uygulama üzerinden
              toplanmaktadır. Hukuki sebepler:
            </p>
            <ul>
              <li>Açık rızanız</li>
              <li>Sözleşmenin ifası için gerekli olması</li>
              <li>Hukuki yükümlülüğün yerine getirilmesi</li>
              <li>Meşru menfaatlerimiz için zorunlu olması</li>
            </ul>

            <h2>6. Kişisel Veri Sahibinin Hakları</h2>
            <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
              <li>Düzeltme, silme veya yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>

            <h2>7. Başvuru Yöntemi</h2>
            <p>
              Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:
            </p>
            <ul>
              <li>E-posta: kvkk@eskisiniveryenisinial.com</li>
              <li>Posta: [Şirket Adresi]</li>
              <li>Platform üzerinden KVKK başvuru formu</li>
            </ul>
            <p>
              Başvurularınız en geç 30 gün içinde ücretsiz olarak sonuçlandırılacaktır.
              İşlemin ayrıca bir maliyeti gerektirmesi hâlinde, Kişisel Verileri Koruma
              Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
            </p>

            <h2>8. İletişim</h2>
            <p>
              KVKK ile ilgili sorularınız için{' '}
              <a href="mailto:kvkk@eskisiniveryenisinial.com" className="text-purple-600 hover:underline">
                kvkk@eskisiniveryenisinial.com
              </a>{' '}
              adresinden bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
