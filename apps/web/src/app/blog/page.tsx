'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredPost = {
  id: 1,
  title: 'Takas Ekonomisi: Geleceğin Tüketim Modeli',
  excerpt:
    'Sürdürülebilir tüketim alışkanlıkları ve takas ekonomisinin yükselişi hakkında her şey. Neden giderek daha fazla insan takası tercih ediyor?',
  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
  category: 'Trendler',
  date: '25 Aralık 2024',
  readTime: '8 dk okuma',
};

const posts = [
  {
    id: 2,
    title: 'iPhone vs Samsung: Hangisi Takas İçin Daha Avantajlı?',
    excerpt: 'İki dev markanın cihazlarını takas değeri açısından karşılaştırdık.',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=250&fit=crop',
    category: 'Karşılaştırma',
    date: '22 Aralık 2024',
    readTime: '5 dk okuma',
  },
  {
    id: 3,
    title: 'Cihazınızı Takasa Hazırlamak İçin 10 İpucu',
    excerpt: 'Takas öncesi yapmanız gereken hazırlıklar ve dikkat etmeniz gerekenler.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
    category: 'Rehber',
    date: '20 Aralık 2024',
    readTime: '6 dk okuma',
  },
  {
    id: 4,
    title: 'E-Atık Sorunu ve Takas ile Çözüm',
    excerpt: 'Elektronik atıkların çevreye etkisi ve takas kültürünün sürdürülebilirliğe katkısı.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop',
    category: 'Sürdürülebilirlik',
    date: '18 Aralık 2024',
    readTime: '7 dk okuma',
  },
  {
    id: 5,
    title: 'Güvenli Takas İçin Dikkat Edilmesi Gerekenler',
    excerpt: 'Online ve yüz yüze takaslarda güvenliğinizi nasıl sağlarsınız?',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
    category: 'Güvenlik',
    date: '15 Aralık 2024',
    readTime: '4 dk okuma',
  },
  {
    id: 6,
    title: '2024\'ün En Çok Takas Edilen Cihazları',
    excerpt: 'Bu yıl platformumuzda en çok hangi cihazlar takas edildi? İşte istatistikler.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop',
    category: 'İstatistik',
    date: '12 Aralık 2024',
    readTime: '5 dk okuma',
  },
];

const categories = ['Tümü', 'Trendler', 'Rehber', 'Karşılaştırma', 'Güvenlik', 'Sürdürülebilirlik'];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
            >
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-gray-600 dark:text-gray-400"
            >
              Takas dünyasından haberler, ipuçları ve rehberler
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b dark:border-gray-800">
        <div className="container py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  category === 'Tümü'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-gray-900"
          >
            <div className="absolute inset-0">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover opacity-60 transition-transform group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="relative p-8 md:p-12">
              <span className="inline-block rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white">
                {featuredPost.category}
              </span>
              <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl max-w-2xl">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-gray-300 max-w-xl">{featuredPost.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <Button asChild className="mt-6" variant="secondary">
                <Link href={`/blog/${featuredPost.id}`}>
                  Devamını Oku
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border bg-white dark:border-gray-800 dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    unoptimized
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Daha Fazla Göster
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Bültenimize Abone Olun
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Takas dünyasındaki son gelişmeleri ve ipuçlarını kaçırmayın.
            </p>
            <form className="mt-6 flex gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500">Abone Ol</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
