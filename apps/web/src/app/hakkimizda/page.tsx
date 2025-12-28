'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Users,
  Target,
  Heart,
  Leaf,
  Shield,
  Zap,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Heart,
    title: 'Güven',
    description: 'Kullanıcılarımız arasında güven ortamı oluşturmak en büyük önceliğimiz.',
  },
  {
    icon: Users,
    title: 'Topluluk',
    description: 'Birbirine yardım eden, paylaşımcı bir topluluk inşa ediyoruz.',
  },
  {
    icon: Leaf,
    title: 'Sürdürülebilirlik',
    description: 'Elektronik atıkları azaltarak çevreye katkıda bulunuyoruz.',
  },
  {
    icon: Zap,
    title: 'Yenilikçilik',
    description: 'Teknolojiyi kullanarak takas deneyimini kolaylaştırıyoruz.',
  },
];

const stats = [
  { value: '10K+', label: 'Aktif Kullanıcı' },
  { value: '5K+', label: 'Başarılı Takas' },
  { value: '81', label: 'İl' },
  { value: '%98', label: 'Memnuniyet' },
];

const team = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Kurucu & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Elif Kaya',
    role: 'COO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Mehmet Demir',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Zeynep Arslan',
    role: 'Pazarlama Müdürü',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
            >
              Takas Kültürünü{' '}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Dijitalleştiriyoruz
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-400"
            >
              Eskisini Ver Yenisini Al, Türkiye'nin ilk ve en büyük P2P (kişiden kişiye)
              elektronik cihaz takas platformudur. Misyonumuz, insanların kullanmadıkları
              cihazları değerlendirmelerine ve nakit harcamadan ihtiyaçlarını karşılamalarına
              yardımcı olmak.
            </motion.p>
          </div>
        </div>

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-900/30" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-900/30" />
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                <Target className="h-4 w-4" />
                Misyonumuz
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                Herkesin Kazandığı Bir Ekosistem
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Geleneksel ikinci el alım-satım sistemlerinde, cihazlar gerçek değerlerinin
                çok altında fiyatlarla satılmak zorunda kalınıyor. Biz bu denklemi değiştiriyoruz.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Takas sistemiyle, bir iPhone 13 sahibi doğrudan bir Samsung S23 sahibiyle
                eşleşebilir. Nakit değişimi olmadan, her iki taraf da ihtiyaç duyduğu cihaza
                kavuşur. Aracı yok, komisyon yok, kaybeden yok.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl bg-gradient-to-br from-purple-100 to-cyan-100 p-8 dark:from-purple-900/20 dark:to-cyan-900/20">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="rounded-xl"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Değerlerimiz</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Bizi biz yapan temel ilkeler
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trade */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Neden Takas?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-white p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-4 text-4xl">💰</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Ekonomik Avantaj
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                İkinci el satışta cihazınız değerinin %40-60'ını kaybeder. Takasta ise
                eşdeğer bir cihaz alırsınız - nakit kaybı sıfır.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-white p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-4 text-4xl">🌍</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Çevre Dostu
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Her yıl milyonlarca elektronik cihaz çöpe gidiyor. Takas kültürüyle
                bu cihazların ömrünü uzatıyor, e-atık miktarını azaltıyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-white p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-4 text-4xl">🤝</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Topluluk Gücü
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Aracı kurumlar yerine doğrudan kullanıcılar arasında bağlantı kuruyoruz.
                Güvene dayalı bir topluluk inşa ediyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ekibimiz</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Takas platformunu sizin için inşa eden tutkulu ekip
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border bg-white p-8 dark:border-gray-800 dark:bg-gray-900 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">İletişim</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Sorularınız mı var? Bize ulaşın!
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/50">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Adres</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    İstanbul, Türkiye
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/50">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">E-posta</h3>
                  <a
                    href="mailto:info@eskisiniveryenisinial.com"
                    className="mt-1 text-sm text-purple-600 hover:underline"
                  >
                    info@eskisiniveryenisinial.com
                  </a>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/50">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Telefon</h3>
                  <a href="tel:+908501234567" className="mt-1 text-sm text-purple-600 hover:underline">
                    0850 123 45 67
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-500 p-10 text-center text-white md:p-16">
            <div className="relative z-10">
              <h2 className="mb-4 text-2xl font-bold md:text-4xl">Bize Katılın</h2>
              <p className="mx-auto mb-8 max-w-xl text-white/90">
                Türkiye'nin en büyük takas topluluğunun bir parçası olun
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="h-12 px-8">
                  <Link href="/kayit">
                    Hemen Başla
                    <ArrowRight className="ml-2 h-5 w-5" />
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
