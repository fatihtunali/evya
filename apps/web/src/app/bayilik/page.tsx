'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Store,
  TrendingUp,
  Users,
  Laptop,
  Headphones,
  Award,
  ArrowRight,
  CheckCircle,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Yüksek Kazanç Potansiyeli',
    description: 'Her başarılı takas işleminden komisyon kazanın.',
  },
  {
    icon: Users,
    title: 'Geniş Müşteri Havuzu',
    description: 'Platform trafiğinden yararlanarak müşteri kazanın.',
  },
  {
    icon: Laptop,
    title: 'Dijital Araçlar',
    description: 'Bayi paneli ve mobil uygulama ile işlerinizi yönetin.',
  },
  {
    icon: Headphones,
    title: 'Sürekli Destek',
    description: '7/24 teknik ve operasyonel destek alın.',
  },
  {
    icon: Award,
    title: 'Eğitim Programı',
    description: 'Kapsamlı eğitim ile profesyonel hizmet sunun.',
  },
  {
    icon: Store,
    title: 'Marka Gücü',
    description: 'Türkiye\'nin ilk takas platformunun gücünü kullanın.',
  },
];

const requirements = [
  'Elektronik veya telekomünikasyon sektöründe deneyim',
  'Minimum 50m² mağaza alanı',
  'Şehir merkezinde veya AVM\'de konum',
  'Teknik personel istihdamı',
  'Müşteri odaklı hizmet anlayışı',
];

const investmentDetails = [
  { label: 'Başlangıç Yatırımı', value: '50.000 TL\'den başlayan' },
  { label: 'Yatırım Geri Dönüşü', value: '12-18 ay' },
  { label: 'Franchise Süresi', value: '3 yıl' },
  { label: 'Royalty Oranı', value: '%5' },
];

export default function BayilikPage() {
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
                <Store className="h-4 w-4" />
                Bayilik Fırsatı
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
            >
              Türkiye'nin İlk Takas Platformunun{' '}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Bayisi Olun
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-400"
            >
              Büyüyen takas pazarından payınızı alın. Düşük yatırımla, yüksek kazanç
              potansiyeli sunan bayilik fırsatını değerlendirin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-500">
                <Link href="#basvuru">
                  Hemen Başvurun
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
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
              Neden Bayimiz Olmalısınız?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Bayilerimize sunduğumuz avantajlar
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Investment Details */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Yatırım Bilgileri
              </h2>
              <div className="space-y-4">
                {investmentDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                    <span className="font-bold text-gray-900 dark:text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Bayi Olma Şartları
              </h2>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Coverage */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Bayilik Açılabilecek Bölgeler
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Aşağıdaki illerde bayilik başvuruları kabul edilmektedir
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana',
              'Konya', 'Gaziantep', 'Kayseri', 'Mersin', 'Eskişehir', 'Samsun',
            ].map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 rounded-xl border bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
              >
                <MapPin className="h-5 w-5 text-purple-600" />
                <span className="font-medium text-gray-900 dark:text-white">{city}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form CTA */}
      <section id="basvuru" className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-500 p-10 text-white md:p-16">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <Store className="mx-auto h-12 w-12 mb-4" />
              <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                Bayilik Başvurusu
              </h2>
              <p className="mb-8 text-white/90">
                Formu doldurun, bayilik danışmanlarımız sizinle iletişime geçsin.
              </p>

              <div className="mx-auto max-w-md">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    className="w-full rounded-lg border-0 bg-white/20 px-4 py-3 text-white placeholder-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="email"
                    placeholder="E-posta"
                    className="w-full rounded-lg border-0 bg-white/20 px-4 py-3 text-white placeholder-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    className="w-full rounded-lg border-0 bg-white/20 px-4 py-3 text-white placeholder-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <select className="w-full rounded-lg border-0 bg-white/20 px-4 py-3 text-white backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option value="" className="text-gray-900">Şehir Seçin</option>
                    <option value="istanbul" className="text-gray-900">İstanbul</option>
                    <option value="ankara" className="text-gray-900">Ankara</option>
                    <option value="izmir" className="text-gray-900">İzmir</option>
                    <option value="other" className="text-gray-900">Diğer</option>
                  </select>
                  <textarea
                    placeholder="Mesajınız (Opsiyonel)"
                    rows={3}
                    className="w-full rounded-lg border-0 bg-white/20 px-4 py-3 text-white placeholder-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button type="submit" size="lg" variant="secondary" className="w-full">
                    Başvuru Gönder
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
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
