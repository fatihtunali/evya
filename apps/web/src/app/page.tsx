'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, RefreshCw, CreditCard, Truck, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative py-20 md:py-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                <Star className="h-4 w-4" />
                Türkiye'nin 1 Numaralı Takas Platformu
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Eskisini Ver,{' '}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Yenisini Al
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mb-10 text-lg text-gray-600 dark:text-gray-400 md:text-xl"
            >
              Eski cihazlarınızı anında değerlendirin, en iyi fiyatı alın ve
              yeni ürünlerle kolayca takas edin. Hızlı, güvenli ve kazançlı.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600">
                <Link href="/takas">
                  Cihazımı Değerlendir
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg">
                <Link href="/catalog">Ürünleri Keşfet</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
            >
              {[
                { label: 'Mutlu Müşteri', value: '50K+' },
                { label: 'Takas İşlemi', value: '100K+' },
                { label: 'Ortalama Tasarruf', value: '%40' },
                { label: 'Değerleme Süresi', value: '2 dk' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-900/30" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-900/30" />
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Nasıl Çalışır?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              3 kolay adımda eski cihazınızı değerlendirin ve yenisiyle takas edin
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Smartphone,
                title: 'Cihazınızı Seçin',
                description: 'Marka ve modelinizi seçin, cihazınızın durumunu belirtin ve anında değerleme alın.',
                step: '01',
              },
              {
                icon: Truck,
                title: 'Kargo ile Gönderin',
                description: 'Ücretsiz kargo etiketini indirin ve cihazınızı bize gönderin. Sigortalı ve güvenli.',
                step: '02',
              },
              {
                icon: CreditCard,
                title: 'Ödemenizi Alın',
                description: 'Cihazınız kontrol edildikten sonra ödemenizi anında alın veya yeni ürün alımında kullanın.',
                step: '03',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-lg font-bold text-white">
                  {item.step}
                </div>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900/50 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: 'Güvenli İşlem',
                description: 'Tüm işlemleriniz sigortalı ve güvence altında.',
              },
              {
                icon: RefreshCw,
                title: 'Hızlı Değerleme',
                description: '2 dakikada online değerleme, 24 saatte ödeme.',
              },
              {
                icon: CreditCard,
                title: 'En İyi Fiyat',
                description: 'Piyasanın en rekabetçi takas fiyatları.',
              },
              {
                icon: Truck,
                title: 'Ücretsiz Kargo',
                description: 'Sigortalı ücretsiz kargo ile cihazınızı gönderin.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-600 dark:from-purple-900/50 dark:to-cyan-900/50 dark:text-purple-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-500 p-12 text-center text-white md:p-20">
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Hemen Başlayın
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-white/90">
                Eski cihazınızın değerini öğrenin ve yeni ürünlerle takas edin.
                İlk değerleme tamamen ücretsiz!
              </p>
              <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-lg">
                <Link href="/takas">
                  Ücretsiz Değerleme Al
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
