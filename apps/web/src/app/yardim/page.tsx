'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  HelpCircle,
  Smartphone,
  RefreshCw,
  Shield,
  Truck,
  CreditCard,
  User,
  MessageCircle,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    icon: Smartphone,
    title: 'İlan Verme',
    description: 'İlan oluşturma ve yönetme',
    articles: 12,
    href: '/yardim/ilan-verme',
  },
  {
    icon: RefreshCw,
    title: 'Takas İşlemleri',
    description: 'Takas süreci ve eşleşme',
    articles: 8,
    href: '/yardim/takas-islemleri',
  },
  {
    icon: Shield,
    title: 'Güvenlik',
    description: 'Güvenli takas ve doğrulama',
    articles: 10,
    href: '/yardim/guvenlik',
  },
  {
    icon: Truck,
    title: 'Kargo ve Teslimat',
    description: 'Gönderim ve teslimat seçenekleri',
    articles: 6,
    href: '/yardim/kargo',
  },
  {
    icon: User,
    title: 'Hesap Yönetimi',
    description: 'Profil ve hesap ayarları',
    articles: 9,
    href: '/yardim/hesap',
  },
  {
    icon: CreditCard,
    title: 'Ödeme ve İade',
    description: 'Fark ödemesi ve iade işlemleri',
    articles: 5,
    href: '/yardim/odeme',
  },
];

const popularArticles = [
  { title: 'İlk ilanımı nasıl oluşturabilirim?', views: '2.5K görüntülenme' },
  { title: 'Takas teklifi nasıl gönderirim?', views: '1.8K görüntülenme' },
  { title: 'IMEI doğrulama nedir ve nasıl yapılır?', views: '1.5K görüntülenme' },
  { title: 'Güvenli takas için nelere dikkat etmeliyim?', views: '1.2K görüntülenme' },
  { title: 'Kargo ile takas nasıl yapılır?', views: '980 görüntülenme' },
];

export default function YardimPage() {
  const [searchQuery, setSearchQuery] = useState('');

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
                Yardım Merkezi
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
            >
              Size Nasıl Yardımcı Olabiliriz?
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
                  placeholder="Sorunuzu yazın veya anahtar kelime arayın..."
                  className="w-full rounded-full border border-gray-300 bg-white py-4 pl-12 pr-4 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-900/30" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-900/30" />
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Yardım Kategorileri
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <motion.a
                key={category.title}
                href={category.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900 hover:shadow-lg transition-all hover:border-purple-300 dark:hover:border-purple-700"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-bold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-gray-500">{category.articles} makale</span>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Popüler Makaleler
              </h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <motion.a
                    key={article.title}
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between rounded-xl border bg-white p-4 dark:border-gray-800 dark:bg-gray-900 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-purple-600" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {article.title}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{article.views}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Hala Yardıma mı İhtiyacınız Var?
              </h2>
              <div className="rounded-2xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <MessageCircle className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Canlı Destek</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hafta içi 09:00 - 18:00 arası
                    </p>
                  </div>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  Aradığınız cevabı bulamadınız mı? Müşteri destek ekibimiz size yardımcı olmak için hazır.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Canlı Destek
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/iletisim">E-posta Gönder</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
