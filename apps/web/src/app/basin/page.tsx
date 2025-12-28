'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Newspaper, Download, Mail, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pressReleases = [
  {
    id: 1,
    title: 'Eskisini Ver Yenisini Al, 10.000 Aktif Kullanıcıya Ulaştı',
    date: '20 Aralık 2024',
    excerpt: 'Türkiye\'nin ilk P2P elektronik cihaz takas platformu, lansmandan sadece 6 ay sonra 10.000 aktif kullanıcı sayısına ulaştı.',
  },
  {
    id: 2,
    title: 'Yeni Mobil Uygulama Yayında',
    date: '15 Aralık 2024',
    excerpt: 'iOS ve Android platformlarında kullanıma sunulan yeni mobil uygulamamız ile takas yapmak artık çok daha kolay.',
  },
  {
    id: 3,
    title: 'Sürdürülebilirlik Ödülü Aldık',
    date: '1 Aralık 2024',
    excerpt: 'E-atık azaltımına katkımız nedeniyle Türkiye Sürdürülebilirlik Derneği tarafından ödüle layık görüldük.',
  },
];

const mediaLogos = [
  { name: 'TechCrunch', logo: '/images/press/techcrunch.svg' },
  { name: 'Webrazzi', logo: '/images/press/webrazzi.svg' },
  { name: 'Startup', logo: '/images/press/startup.svg' },
];

const mediaCoverage = [
  {
    outlet: 'Webrazzi',
    title: 'Takas Ekonomisi Türkiye\'de Yükselişte',
    date: '18 Aralık 2024',
    link: '#',
  },
  {
    outlet: 'Ekonomist',
    title: 'İkinci El Pazarının Yeni Oyuncusu',
    date: '10 Aralık 2024',
    link: '#',
  },
  {
    outlet: 'Startup Türkiye',
    title: 'Girişimcilik Hikayesi: Eskisini Ver Yenisini Al',
    date: '5 Aralık 2024',
    link: '#',
  },
];

export default function BasinPage() {
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
                <Newspaper className="h-4 w-4" />
                Basın Odası
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
            >
              Basın ve Medya
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-400"
            >
              Basın bültenleri, medya kiti ve iletişim bilgileri
            </motion.p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Basın Bültenleri
          </h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="h-4 w-4" />
                  {release.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {release.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{release.excerpt}</p>
                <Button variant="outline" size="sm">
                  Devamını Oku
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Medyada Biz
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {mediaCoverage.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900 hover:shadow-md transition-shadow group"
              >
                <div className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                  {item.outlet}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <div className="mt-2 text-sm text-gray-500">{item.date}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border bg-white p-8 dark:border-gray-800 dark:bg-gray-900 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Medya Kiti</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Logo, görsel ve basın materyallerini indirin
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border p-4 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                      <Download className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Logo Paketi</h3>
                      <p className="text-sm text-gray-500">PNG, SVG, AI formatları</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border p-4 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                      <Download className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Basın Kiti</h3>
                      <p className="text-sm text-gray-500">Şirket bilgileri ve görseller</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border p-4 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                      <Download className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Ekran Görüntüleri</h3>
                      <p className="text-sm text-gray-500">Web ve mobil uygulama</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border p-4 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                      <Download className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Marka Kılavuzu</h3>
                      <p className="text-sm text-gray-500">Renk ve tipografi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Basın İletişim</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Röportaj talepleri ve basın soruları için bizimle iletişime geçin.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="mailto:basin@eskisiniveryenisinial.com">
                <Mail className="mr-2 h-5 w-5" />
                basin@eskisiniveryenisinial.com
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
