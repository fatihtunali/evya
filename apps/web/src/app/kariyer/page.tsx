'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Coffee,
  Laptop,
  ArrowRight,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  { icon: Heart, title: 'Sağlık Sigortası', description: 'Özel sağlık sigortası ve check-up imkanı' },
  { icon: Coffee, title: 'Yemek Kartı', description: 'Günlük yemek kartı desteği' },
  { icon: Laptop, title: 'Uzaktan Çalışma', description: 'Hibrit ve uzaktan çalışma imkanı' },
  { icon: Zap, title: 'Eğitim Bütçesi', description: 'Kişisel gelişim için yıllık eğitim bütçesi' },
  { icon: Users, title: 'Takım Aktiviteleri', description: 'Düzenli ekip etkinlikleri ve sosyal aktiviteler' },
  { icon: Building2, title: 'Modern Ofis', description: 'İstanbul Levent\'te modern ofis ortamı' },
];

const openPositions = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Yazılım',
    location: 'İstanbul / Uzaktan',
    type: 'Tam Zamanlı',
    description: 'React, Node.js ve TypeScript konularında deneyimli yazılım geliştirici arıyoruz.',
  },
  {
    id: 2,
    title: 'Product Designer (UI/UX)',
    department: 'Tasarım',
    location: 'İstanbul',
    type: 'Tam Zamanlı',
    description: 'Kullanıcı deneyimi odaklı, mobil ve web tasarım konusunda deneyimli tasarımcı arıyoruz.',
  },
  {
    id: 3,
    title: 'Digital Marketing Specialist',
    department: 'Pazarlama',
    location: 'İstanbul / Uzaktan',
    type: 'Tam Zamanlı',
    description: 'SEO, SEM ve sosyal medya pazarlama konularında uzman arıyoruz.',
  },
  {
    id: 4,
    title: 'Müşteri Destek Uzmanı',
    department: 'Operasyon',
    location: 'İstanbul',
    type: 'Tam Zamanlı',
    description: 'Müşteri memnuniyeti odaklı, iletişim becerileri güçlü destek uzmanı arıyoruz.',
  },
];

export default function KariyerPage() {
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
                <Briefcase className="h-4 w-4" />
                Kariyer Fırsatları
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
            >
              Geleceği Birlikte{' '}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                İnşa Edelim
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-400"
            >
              Türkiye'nin en yenilikçi takas platformunda yerinizi alın. Tutkulu, yaratıcı
              ve çözüm odaklı ekip arkadaşları arıyoruz.
            </motion.p>
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
              Neden Bize Katılmalısınız?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Çalışanlarımıza sunduğumuz avantajlar
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

      {/* Open Positions */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Açık Pozisyonlar</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Size uygun pozisyonu bulun ve başvurun
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-400">
                        {position.department}
                      </span>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                        {position.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {position.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {position.description}
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <Button className="shrink-0 bg-gradient-to-r from-purple-600 to-cyan-500">
                    Başvur
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              Aradığınız Pozisyonu Bulamadınız mı?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Açık başvuru yaparak CV'nizi gönderin. Uygun bir pozisyon açıldığında sizinle iletişime geçelim.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="mailto:kariyer@eskisiniveryenisinial.com">
                CV Gönder
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
