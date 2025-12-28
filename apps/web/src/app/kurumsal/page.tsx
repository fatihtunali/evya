'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  Handshake,
  BarChart3,
  Shield,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Users,
    title: 'Toplu Takas İmkanı',
    description: 'Şirketinizdeki tüm cihazları tek seferde takas edebilirsiniz.',
  },
  {
    icon: BarChart3,
    title: 'Özel Fiyatlandırma',
    description: 'Kurumsal müşterilerimize özel avantajlı koşullar sunuyoruz.',
  },
  {
    icon: Shield,
    title: 'Güvenli İşlem',
    description: 'Tüm cihazlar IMEI doğrulamasından geçer, verileriniz güvende.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Özel Müşteri Temsilcisi',
    description: 'Size özel atanan müşteri temsilcisi ile 7/24 destek.',
  },
];

const useCases = [
  {
    title: 'Cihaz Yenileme Programı',
    description:
      'Çalışanlarınızın cihazlarını periyodik olarak yenileyin. Eski cihazları takasa verin, yeni cihazlara kavuşun.',
  },
  {
    title: 'IT Envanter Optimizasyonu',
    description:
      'Kullanılmayan veya eski cihazları değerlendirin, IT bütçenizi verimli kullanın.',
  },
  {
    title: 'Çalışan Yan Hakları',
    description:
      'Çalışanlarınıza özel takas avantajları sunun, motivasyonu artırın.',
  },
];

const stats = [
  { value: '50+', label: 'Kurumsal Müşteri' },
  { value: '5000+', label: 'Takas Edilen Cihaz' },
  { value: '%40', label: 'Maliyet Tasarrufu' },
  { value: '24s', label: 'Ortalama İşlem Süresi' },
];

export default function KurumsalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                <Building2 className="h-4 w-4" />
                Kurumsal Çözümler
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                İşletmeniz İçin{' '}
                <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Akıllı Takas Çözümleri
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                Şirketinizin elektronik cihaz yönetimini optimize edin. Toplu takas imkanı,
                özel fiyatlandırma ve ayrıcalıklı destek ile IT maliyetlerinizi düşürün.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-500">
                  <Link href="/iletisim">
                    Teklif Alın
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/iletisim">Bizi Arayın</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl border bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
                    <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-900/30" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-900/30" />
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Kurumsal Avantajlar
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              İşletmenize özel çözümler ve ayrıcalıklar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Kullanım Senaryoları
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Kurumsal takas çözümlerimizi nasıl kullanabilirsiniz?
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Nasıl Çalışır?
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'İletişime Geçin',
                  description: 'Formu doldurun veya bizi arayın, ihtiyacınızı analiz edelim.',
                },
                {
                  step: '2',
                  title: 'Teklif Alın',
                  description: 'Size özel hazırlanan teklifimizi değerlendirin.',
                },
                {
                  step: '3',
                  title: 'Takas Başlasın',
                  description: 'Onay sonrası cihazlarınızı takas edin, yenilere kavuşun.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
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
              <Handshake className="mx-auto h-12 w-12 mb-4" />
              <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                Kurumsal Çözümler İçin Bizimle İletişime Geçin
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-white/90">
                İşletmenize özel teklif almak için formu doldurun, size 24 saat içinde dönüş yapalım.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/iletisim">
                  Teklif Talep Et
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
