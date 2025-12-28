'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Search,
  Users,
  RefreshCw,
  Shield,
  MessageCircle,
  Camera,
  CheckCircle,
  ArrowRight,
  Clock,
  Truck,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    title: 'Cihazını Tanıt',
    description:
      'Takas etmek istediğin cihazın fotoğraflarını çek, marka, model ve durumunu belirt. Ne kadar detaylı olursan, o kadar iyi eşleşirsin.',
    icon: Camera,
    color: 'purple',
  },
  {
    number: '02',
    title: 'Ne İstediğini Belirle',
    description:
      'Karşılığında almak istediğin cihazı veya cihazları yaz. Birden fazla tercih belirtebilirsin.',
    icon: Search,
    color: 'cyan',
  },
  {
    number: '03',
    title: 'Eşleşme Bul',
    description:
      'Akıllı algoritmamız senin ilanını tarayarak uygun takas tekliflerini otomatik olarak bulur ve sana önerir.',
    icon: RefreshCw,
    color: 'purple',
  },
  {
    number: '04',
    title: 'İletişime Geç',
    description:
      'Beğendiğin ilanın sahibiyle güvenli platform içi mesajlaşma sistemiyle iletişime geç, detayları konuş.',
    icon: MessageCircle,
    color: 'cyan',
  },
  {
    number: '05',
    title: 'Güvenli Takas',
    description:
      'Anlaştığınızda güvenli takas noktalarımızda buluşun veya karşılıklı kargo ile gönderim yapın.',
    icon: Truck,
    color: 'purple',
  },
  {
    number: '06',
    title: 'Değerlendir',
    description:
      'Takas tamamlandıktan sonra karşı tarafı değerlendir. Puanlar güven sistemimizin temelini oluşturur.',
    icon: Star,
    color: 'cyan',
  },
];

const features = [
  {
    icon: Shield,
    title: 'IMEI Doğrulama',
    description: 'Tüm cihazların IMEI numarası BTK sisteminden kontrol edilir, çalıntı cihaz riski sıfır.',
  },
  {
    icon: Users,
    title: 'Kullanıcı Doğrulama',
    description: 'Tüm kullanıcılar TC kimlik doğrulamasından geçer, güvenilir topluluk garantisi.',
  },
  {
    icon: MessageCircle,
    title: 'Güvenli Mesajlaşma',
    description: 'Platform içi mesajlaşma ile kişisel bilgileriniz her zaman korunur.',
  },
  {
    icon: Clock,
    title: '7/24 Destek',
    description: 'Herhangi bir sorun yaşadığınızda destek ekibimiz yanınızda.',
  },
];

const faqs = [
  {
    question: 'Takas yapmak için ücret ödeniyor mu?',
    answer:
      'Hayır! Platform tamamen ücretsizdir. İlan vermek, mesajlaşmak ve eşleşme bulmak için herhangi bir ücret alınmaz.',
  },
  {
    question: 'Cihazımın değerini nasıl belirleyeceğim?',
    answer:
      'Benzer ilanları inceleyerek ve cihazınızın durumunu değerlendirerek takas teklifinizi oluşturabilirsiniz. Birebir değer eşleşmesi şart değil, karşılıklı anlaşma esastır.',
  },
  {
    question: 'Takas karşılığında fark ödemesi yapılabilir mi?',
    answer:
      'Platform üzerinden nakit işlem yapılmaz. Takas, cihaz karşılığı cihaz değişimi esasına dayanır. Fark ödemesi konusunda taraflar kendi aralarında anlaşabilir.',
  },
  {
    question: 'Cihazım arızalı olsa da ilan verebilir miyim?',
    answer:
      'Evet, durumu "Hasarlı" olarak belirterek ilan verebilirsiniz. Dürüstlük platformumuzun temelini oluşturur.',
  },
  {
    question: 'Kargoyla takas nasıl yapılır?',
    answer:
      'Her iki taraf da cihazını aynı anda kargoyla gönderir. Takip numaraları platform üzerinden paylaşılır ve süreç izlenir.',
  },
];

export default function NasilCalisirPage() {
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
                <RefreshCw className="h-4 w-4" />
                Kolay ve Güvenli
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
            >
              Takas Yapmak{' '}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Hiç Bu Kadar Kolay Olmamıştı
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-400"
            >
              6 basit adımda eski cihazını yenisiyle değiştir. Nakit ödemeden, güvenle, hızlıca.
            </motion.p>
          </div>
        </div>

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-900/30" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-900/30" />
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col gap-6 md:flex-row md:items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Number & Icon */}
                <div className="flex-shrink-0 md:w-1/3">
                  <div
                    className={`relative inline-flex items-center justify-center rounded-2xl p-8 ${
                      step.color === 'purple'
                        ? 'bg-purple-100 dark:bg-purple-900/30'
                        : 'bg-cyan-100 dark:bg-cyan-900/30'
                    }`}
                  >
                    <span
                      className={`absolute -left-4 -top-4 text-7xl font-bold opacity-20 ${
                        step.color === 'purple' ? 'text-purple-600' : 'text-cyan-600'
                      }`}
                    >
                      {step.number}
                    </span>
                    <step.icon
                      className={`h-16 w-16 ${
                        step.color === 'purple'
                          ? 'text-purple-600 dark:text-purple-400'
                          : 'text-cyan-600 dark:text-cyan-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Güvenliğiniz bizim önceliğimiz
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Sıkça Sorulan Sorular
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Merak ettiklerinize cevap bulun
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
                >
                  <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-500 p-10 text-center text-white md:p-16">
            <div className="relative z-10">
              <h2 className="mb-4 text-2xl font-bold md:text-4xl">Hemen Takas Yapmaya Başla</h2>
              <p className="mx-auto mb-8 max-w-xl text-white/90">
                Ücretsiz üye ol, ilk ilanını ver ve cihazını takas et!
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="h-12 px-8">
                  <Link href="/kayit">
                    Ücretsiz Kayıt Ol
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 border-white text-white hover:bg-white hover:text-purple-600"
                >
                  <Link href="/kesfet">İlanları Keşfet</Link>
                </Button>
              </div>
            </div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
