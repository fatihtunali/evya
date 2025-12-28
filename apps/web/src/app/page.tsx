'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Users, Shield, Search, Heart, RefreshCw, CheckCircle } from 'lucide-react';
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

// Sample devices for showcase
const featuredDevices = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    storage: '256GB',
    color: 'Uzay Siyahı',
    condition: 'Mükemmel',
    lookingFor: 'Samsung S23 Ultra',
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=300&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Samsung S23',
    storage: '128GB',
    color: 'Yeşil',
    condition: 'İyi',
    lookingFor: 'iPhone 13 veya 14',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'MacBook Air M2',
    storage: '512GB',
    color: 'Gümüş',
    condition: 'Mükemmel',
    lookingFor: 'MacBook Pro 14"',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                  <Users className="h-4 w-4" />
                  Türkiye'nin İlk P2P Takas Platformu
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
              >
                Cihazını Takasla,{' '}
                <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Yenisine Kavuş
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mb-8 text-lg text-gray-600 dark:text-gray-400"
              >
                Nakit ödemeden, eski cihazını başka bir kullanıcının cihazıyla takas et.
                Güvenli, hızlı ve tamamen ücretsiz eşleştirme platformu.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Button asChild size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600">
                  <Link href="/takas">
                    Cihazımı İlan Ver
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg">
                  <Link href="/kesfet">
                    <Search className="mr-2 h-5 w-5" />
                    Takas İlanlarını Gör
                  </Link>
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-6">
                {[
                  { icon: Shield, text: 'Güvenli Takas' },
                  { icon: Users, text: '10.000+ Kullanıcı' },
                  { icon: RefreshCw, text: 'Anında Eşleştirme' },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <badge.icon className="h-5 w-5 text-purple-600" />
                    {badge.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Device Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main featured card */}
                <div className="rounded-2xl border bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Yeni İlan
                    </span>
                    <button className="text-gray-400 hover:text-red-500">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mb-4 flex justify-center">
                    <div className="relative h-48 w-48 overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                      <Image
                        src="https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=400&fit=crop"
                        alt="iPhone 14 Pro"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                    iPhone 14 Pro Max
                  </h3>
                  <p className="mb-3 text-sm text-gray-500">256GB • Uzay Siyahı • Mükemmel</p>

                  <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Takas İstediği:</p>
                    <p className="font-medium text-purple-700 dark:text-purple-400">
                      Samsung S24 Ultra veya iPhone 15 Pro
                    </p>
                  </div>

                  <Button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-cyan-500">
                    Takas Teklifi Gönder
                  </Button>
                </div>

                {/* Floating mini cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -left-4 top-1/4 hidden rounded-xl border bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800 lg:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=100&h=100&fit=crop"
                        alt="Samsung"
                        width={48}
                        height={48}
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Samsung S23</p>
                      <p className="text-xs text-green-600">Eşleşme bulundu!</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -right-4 bottom-1/4 hidden rounded-xl border bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800 lg:block"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">152 Takas Tamamlandı</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-900/30" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-900/30" />
      </section>

      {/* Featured Listings */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                Güncel Takas İlanları
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Hemen şimdi takas edilmeyi bekleyen cihazlar
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/kesfet">
                Tümünü Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDevices.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border bg-white p-5 transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                    device.condition === 'Mükemmel'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {device.condition}
                  </span>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>

                <div className="mb-4 flex justify-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={device.image}
                      alt={device.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                </div>

                <h3 className="mb-1 font-bold text-gray-900 dark:text-white">
                  {device.name}
                </h3>
                <p className="mb-3 text-sm text-gray-500">
                  {device.storage} • {device.color}
                </p>

                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                  <p className="text-xs text-gray-500">Takas İstediği:</p>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    {device.lookingFor}
                  </p>
                </div>

                <Button asChild className="mt-4 w-full" variant="outline">
                  <Link href={`/ilan/${device.id}`}>
                    İlanı İncele
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
              Nasıl Çalışır?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              4 kolay adımda cihazını takas et, nakit ödemeden yenisine kavuş
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Smartphone,
                title: 'İlan Oluştur',
                description: 'Cihazının fotoğraflarını çek, özelliklerini belirt ve ne ile takas etmek istediğini yaz.',
                step: '1',
              },
              {
                icon: Search,
                title: 'Eşleşme Bul',
                description: 'Sistemimiz otomatik olarak senin için uygun takas ilanlarını bulur ve önerir.',
                step: '2',
              },
              {
                icon: Users,
                title: 'İletişime Geç',
                description: 'Beğendiğin ilanın sahibiyle güvenli mesajlaşma sistemiyle iletişime geç.',
                step: '3',
              },
              {
                icon: RefreshCw,
                title: 'Takası Tamamla',
                description: 'Anlaştığınızda güvenli takas noktasında buluşun veya kargo ile gönderim yapın.',
                step: '4',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                Güvenle Takas Yap
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Platformumuzda her işlem güvence altında. IMEI kontrolü, kullanıcı doğrulama
                ve güvenli iletişim sistemimizle içiniz rahat takas yapın.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { title: 'IMEI Doğrulama', desc: 'Tüm cihazların IMEI numarası BTK sisteminden kontrol edilir.' },
                  { title: 'Kullanıcı Kimlik Doğrulama', desc: 'Tüm kullanıcılar kimlik doğrulamasından geçer.' },
                  { title: 'Güvenli Mesajlaşma', desc: 'Platform içi mesajlaşma ile kişisel bilgileriniz korunur.' },
                  { title: 'Takas Güvencesi', desc: 'Anlaşmazlık durumunda arabuluculuk hizmeti sunuyoruz.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-purple-100 to-cyan-100 p-8 dark:from-purple-900/20 dark:to-cyan-900/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm dark:bg-gray-800">
                    <div className="text-3xl font-bold text-purple-600">10K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Aktif Kullanıcı</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm dark:bg-gray-800">
                    <div className="text-3xl font-bold text-cyan-600">5K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Başarılı Takas</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm dark:bg-gray-800">
                    <div className="text-3xl font-bold text-purple-600">%98</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Memnuniyet</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm dark:bg-gray-800">
                    <div className="text-3xl font-bold text-cyan-600">24s</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Ort. Eşleşme</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-500 p-10 text-center text-white md:p-16">
            <div className="relative z-10">
              <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                Hemen Takas Yapmaya Başla
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-white/90">
                Kullanmadığın cihazını değerlendir, ihtiyacın olan cihaza nakit ödemeden kavuş.
                Ücretsiz üye ol, hemen ilan ver!
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="h-12 px-8">
                  <Link href="/kayit">
                    Ücretsiz Üye Ol
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-8 border-white text-white hover:bg-white hover:text-purple-600">
                  <Link href="/kesfet">
                    İlanları Keşfet
                  </Link>
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
