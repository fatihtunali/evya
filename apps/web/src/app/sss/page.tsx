'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqCategories = [
  { id: 'general', name: 'Genel' },
  { id: 'trade', name: 'Takas İşlemleri' },
  { id: 'security', name: 'Güvenlik' },
  { id: 'account', name: 'Hesap' },
];

const faqs = [
  {
    category: 'general',
    question: 'Takas yapmak için ücret ödenmesi gerekiyor mu?',
    answer:
      'Hayır, platformumuz tamamen ücretsizdir. İlan vermek, mesajlaşmak, eşleşme bulmak ve takas yapmak için herhangi bir ücret alınmaz. Platform gelirini premium hizmetler ve reklam gelirleri ile elde etmektedir.',
  },
  {
    category: 'general',
    question: 'Hangi cihazları takas edebilirim?',
    answer:
      'Telefon, tablet, laptop, akıllı saat, kulaklık ve oyun konsolu gibi elektronik cihazları takas edebilirsiniz. Cihazların çalışır durumda olması ve yasal yollarla edinilmiş olması gerekmektedir.',
  },
  {
    category: 'general',
    question: 'Birebir değer eşleşmesi şart mı?',
    answer:
      'Hayır, birebir değer eşleşmesi şart değildir. Takas, iki kullanıcının karşılıklı anlaşmasına dayanır. Değer farkı durumunda kullanıcılar kendi aralarında anlaşabilir.',
  },
  {
    category: 'trade',
    question: 'Takas teklifi nasıl gönderirim?',
    answer:
      'Beğendiğiniz bir ilanın detay sayfasında "Takas Teklifi Gönder" butonuna tıklayarak, kendi cihazınızı seçip teklif gönderebilirsiniz. İlan sahibi teklifinizi değerlendirip kabul veya ret edebilir.',
  },
  {
    category: 'trade',
    question: 'Eşleşme nasıl çalışıyor?',
    answer:
      'Sistemimiz, ilanınızda belirttiğiniz aradığınız cihazla, diğer kullanıcıların ilanlarını otomatik olarak eşleştirir. Karşılıklı uyum durumunda her iki tarafa da bildirim gönderilir.',
  },
  {
    category: 'trade',
    question: 'Takas tamamlandıktan sonra ne yapmalıyım?',
    answer:
      'Takas tamamlandığında her iki tarafın da işlemi onaylaması gerekmektedir. Onay sonrasında karşı tarafı değerlendirebilir ve puan verebilirsiniz. Bu puanlar güven sistemimizin temelini oluşturur.',
  },
  {
    category: 'security',
    question: 'IMEI doğrulama nedir?',
    answer:
      'IMEI doğrulama, cihazların BTK (Bilgi ve İletişim Teknolojileri Kurumu) sisteminden kontrol edilmesidir. Bu sayede çalıntı veya kayıp bildirimi yapılmış cihazlar tespit edilir.',
  },
  {
    category: 'security',
    question: 'Güvenli takas için nelere dikkat etmeliyim?',
    answer:
      'Platform içi mesajlaşma sistemini kullanın, kişisel bilgilerinizi paylaşmadan önce karşı tarafı doğrulayın, yüz yüze takaslarda güvenli buluşma noktaları tercih edin ve kargo ile takaslarda cihazı test edip onaylayın.',
  },
  {
    category: 'security',
    question: 'Dolandırıcılık durumunda ne yapmalıyım?',
    answer:
      'Herhangi bir şüpheli durum veya dolandırıcılık girişimi fark ederseniz, hemen destek ekibimizle iletişime geçin. İlgili hesap incelemeye alınacak ve gerekli önlemler alınacaktır.',
  },
  {
    category: 'account',
    question: 'Hesabımı nasıl doğrularım?',
    answer:
      'Hesap doğrulama için telefon numarası ve e-posta doğrulaması yapmanız gerekmektedir. Ek güvenlik için kimlik doğrulama da yapabilirsiniz, bu sayede "Doğrulanmış Kullanıcı" rozetini alırsınız.',
  },
  {
    category: 'account',
    question: 'Şifremi unuttum, ne yapmalıyım?',
    answer:
      'Giriş sayfasında "Şifremi Unuttum" bağlantısına tıklayarak, kayıtlı e-posta adresinize şifre sıfırlama bağlantısı gönderebilirsiniz.',
  },
  {
    category: 'account',
    question: 'Hesabımı nasıl silebilirim?',
    answer:
      'Hesap silme işlemi için Hesap Ayarları > Hesabı Sil bölümünden talebinizi oluşturabilirsiniz. KVKK kapsamında tüm verileriniz kalıcı olarak silinecektir.',
  },
];

export default function SSSPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.category === selectedCategory &&
      (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                <HelpCircle className="h-4 w-4" />
                SSS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
            >
              Sıkça Sorulan Sorular
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <div className="relative mx-auto max-w-xl">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Soru ara..."
                  className="w-full rounded-full border border-gray-300 bg-white py-4 pl-12 pr-4 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-900/30" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-900/30" />
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Categories */}
            <div className="mb-8 flex flex-wrap gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border bg-white dark:border-gray-800 dark:bg-gray-900 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.question ? null : faq.question)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${
                        openFaq === faq.question ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === faq.question && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="border-t px-5 pb-5 pt-4 dark:border-gray-800">
                          <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Aradığınız kriterlere uygun soru bulunamadı.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <MessageCircle className="mx-auto h-12 w-12 text-purple-600" />
            <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
              Sorunuz mu Var?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Burada cevap bulamadıysanız, destek ekibimiz size yardımcı olmaya hazır.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/iletisim">Bize Ulaşın</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
