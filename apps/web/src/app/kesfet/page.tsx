'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Search,
  SlidersHorizontal,
  Heart,
  MapPin,
  Clock,
  ChevronDown,
  Grid3X3,
  List,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample listings data
const listings = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    storage: '256GB',
    color: 'Uzay Siyahı',
    condition: 'Mükemmel',
    lookingFor: 'Samsung S24 Ultra',
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=400&fit=crop',
    location: 'İstanbul, Kadıköy',
    postedAt: '2 saat önce',
    verified: true,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23 Ultra',
    storage: '512GB',
    color: 'Yeşil',
    condition: 'İyi',
    lookingFor: 'iPhone 14 veya 15',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
    location: 'Ankara, Çankaya',
    postedAt: '5 saat önce',
    verified: true,
  },
  {
    id: 3,
    name: 'MacBook Air M2',
    storage: '512GB',
    color: 'Gümüş',
    condition: 'Mükemmel',
    lookingFor: 'MacBook Pro 14"',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    location: 'İzmir, Karşıyaka',
    postedAt: '1 gün önce',
    verified: false,
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    storage: '256GB',
    color: 'Uzay Grisi',
    condition: 'İyi',
    lookingFor: 'MacBook Air M1/M2',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    location: 'İstanbul, Beşiktaş',
    postedAt: '3 saat önce',
    verified: true,
  },
  {
    id: 5,
    name: 'Google Pixel 8 Pro',
    storage: '128GB',
    color: 'Obsidyen',
    condition: 'Mükemmel',
    lookingFor: 'iPhone 14 Pro',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
    location: 'Bursa, Nilüfer',
    postedAt: '6 saat önce',
    verified: true,
  },
  {
    id: 6,
    name: 'Apple Watch Ultra 2',
    storage: '64GB',
    color: 'Titanyum',
    condition: 'Mükemmel',
    lookingFor: 'Galaxy Watch 6 Classic',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
    location: 'Antalya',
    postedAt: '1 gün önce',
    verified: false,
  },
  {
    id: 7,
    name: 'PlayStation 5',
    storage: '825GB',
    color: 'Beyaz',
    condition: 'İyi',
    lookingFor: 'Xbox Series X',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
    location: 'İstanbul, Üsküdar',
    postedAt: '4 saat önce',
    verified: true,
  },
  {
    id: 8,
    name: 'AirPods Pro 2',
    storage: '-',
    color: 'Beyaz',
    condition: 'Mükemmel',
    lookingFor: 'Sony WF-1000XM5',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
    location: 'İstanbul, Şişli',
    postedAt: '8 saat önce',
    verified: true,
  },
];

const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'phone', name: 'Telefon' },
  { id: 'laptop', name: 'Laptop' },
  { id: 'tablet', name: 'Tablet' },
  { id: 'watch', name: 'Akıllı Saat' },
  { id: 'headphone', name: 'Kulaklık' },
  { id: 'console', name: 'Oyun Konsolu' },
];

const conditions = ['Tümü', 'Mükemmel', 'İyi', 'Normal', 'Hasarlı'];

export default function KesfetPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('Tümü');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const filteredListings = listings.filter((listing) => {
    const matchesSearch =
      listing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.lookingFor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCondition =
      selectedCondition === 'Tümü' || listing.condition === selectedCondition;
    return matchesSearch && matchesCondition;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cihaz veya marka ara..."
                className="w-full rounded-full border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filtrele
              </Button>

              <div className="flex items-center rounded-lg border dark:border-gray-700">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${
                    viewMode === 'grid'
                      ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/50'
                      : 'text-gray-500'
                  }`}
                >
                  <Grid3X3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${
                    viewMode === 'list'
                      ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/50'
                      : 'text-gray-500'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 rounded-lg border bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Durum
                  </label>
                  <select
                    value={selectedCondition}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  >
                    {conditions.map((condition) => (
                      <option key={condition} value={condition}>
                        {condition}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Konum
                  </label>
                  <select className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                    <option>Tüm Türkiye</option>
                    <option>İstanbul</option>
                    <option>Ankara</option>
                    <option>İzmir</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Sıralama
                  </label>
                  <select className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                    <option>En Yeni</option>
                    <option>En Eski</option>
                    <option>En Çok Beğenilen</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSelectedCondition('Tümü');
                      setSearchQuery('');
                    }}
                  >
                    Filtreleri Temizle
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="container py-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-medium text-gray-900 dark:text-white">
              {filteredListings.length}
            </span>{' '}
            ilan bulundu
          </p>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-2xl border bg-white dark:border-gray-800 dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative aspect-square bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={listing.image}
                    alt={listing.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    unoptimized
                  />
                  <button
                    onClick={() => toggleFavorite(listing.id)}
                    className={`absolute right-3 top-3 rounded-full p-2 transition-all ${
                      favorites.includes(listing.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-600 hover:bg-white'
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(listing.id) ? 'fill-current' : ''
                      }`}
                    />
                  </button>
                  {listing.verified && (
                    <span className="absolute left-3 top-3 rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
                      Doğrulanmış
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        listing.condition === 'Mükemmel'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400'
                      }`}
                    >
                      {listing.condition}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {listing.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {listing.storage} • {listing.color}
                  </p>

                  <div className="mt-3 rounded-lg bg-purple-50 p-2 dark:bg-purple-900/20">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Takas İstediği:
                    </p>
                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {listing.lookingFor}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {listing.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {listing.postedAt}
                    </span>
                  </div>

                  <Button asChild className="mt-4 w-full" variant="outline">
                    <Link href={`/ilan/${listing.id}`}>İlanı İncele</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 rounded-xl border bg-white p-4 dark:border-gray-800 dark:bg-gray-800 hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="relative h-32 w-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={listing.image}
                    alt={listing.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {listing.name}
                        </h3>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            listing.condition === 'Mükemmel'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {listing.condition}
                        </span>
                        {listing.verified && (
                          <span className="rounded-full bg-green-500 px-2 py-0.5 text-xs text-white">
                            Doğrulanmış
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {listing.storage} • {listing.color}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleFavorite(listing.id)}
                      className={`rounded-full p-2 ${
                        favorites.includes(listing.id)
                          ? 'text-red-500'
                          : 'text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          favorites.includes(listing.id) ? 'fill-current' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <div className="mt-2 inline-block rounded-lg bg-purple-50 px-3 py-1 dark:bg-purple-900/20">
                    <span className="text-xs text-gray-500">Takas İstediği: </span>
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {listing.lookingFor}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {listing.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {listing.postedAt}
                      </span>
                    </div>

                    <Button asChild size="sm">
                      <Link href={`/ilan/${listing.id}`}>İlanı İncele</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredListings.length === 0 && (
          <div className="py-16 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              İlan bulunamadı
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Arama kriterlerinizi değiştirmeyi deneyin
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
