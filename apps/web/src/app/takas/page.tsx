'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Headphones,
  Gamepad2,
  Upload,
  X,
  CheckCircle,
  Info,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const deviceCategories = [
  { id: 'phone', name: 'Telefon', icon: Smartphone },
  { id: 'laptop', name: 'Laptop', icon: Laptop },
  { id: 'tablet', name: 'Tablet', icon: Tablet },
  { id: 'watch', name: 'Akıllı Saat', icon: Watch },
  { id: 'headphone', name: 'Kulaklık', icon: Headphones },
  { id: 'console', name: 'Oyun Konsolu', icon: Gamepad2 },
];

const phoneBrands = [
  'Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Oppo', 'Vivo', 'OnePlus', 'Google', 'Realme', 'Other'
];

const conditions = [
  { id: 'excellent', name: 'Mükemmel', description: 'Sıfır gibi, hiç kullanılmamış görünümde', color: 'green' },
  { id: 'good', name: 'İyi', description: 'Hafif kullanım izleri var, işlevsel olarak kusursuz', color: 'blue' },
  { id: 'fair', name: 'Normal', description: 'Belirgin kullanım izleri var, tam çalışıyor', color: 'yellow' },
  { id: 'poor', name: 'Hasarlı', description: 'Ekran çatlak veya ciddi hasarlar var', color: 'red' },
];

export default function TakasPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    brand: '',
    model: '',
    storage: '',
    color: '',
    condition: '',
    description: '',
    lookingFor: '',
    images: [] as string[],
  });

  const totalSteps = 5;

  const handleCategorySelect = (categoryId: string) => {
    setFormData({ ...formData, category: categoryId });
  };

  const handleBrandSelect = (brand: string) => {
    setFormData({ ...formData, brand });
  };

  const handleConditionSelect = (conditionId: string) => {
    setFormData({ ...formData, condition: conditionId });
  };

  const handleImageUpload = () => {
    // Simulate image upload
    const newImage = `https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=300&h=300&fit=crop&t=${Date.now()}`;
    setFormData({ ...formData, images: [...formData.images, newImage] });
  };

  const removeImage = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.category !== '';
      case 2:
        return formData.brand !== '' && formData.model !== '';
      case 3:
        return formData.condition !== '';
      case 4:
        return formData.images.length > 0;
      case 5:
        return formData.lookingFor !== '';
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Ana Sayfaya Dön
          </Link>
        </div>

        {/* Progress Bar */}
        <div className="mx-auto max-w-3xl mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Adım {step} / {totalSteps}
            </span>
            <span className="text-sm text-gray-500">
              {step === 1 && 'Kategori Seçin'}
              {step === 2 && 'Cihaz Bilgileri'}
              {step === 3 && 'Durum Değerlendirmesi'}
              {step === 4 && 'Fotoğraflar'}
              {step === 5 && 'Takas Tercihi'}
            </span>
          </div>
          <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-purple-600 to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            {/* Step 1: Category Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Ne tür bir cihaz takas etmek istiyorsunuz?
                </h2>
                <p className="mb-8 text-gray-600 dark:text-gray-400">
                  Takas etmek istediğiniz cihazın kategorisini seçin
                </p>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {deviceCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category.id)}
                      className={`flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all ${
                        formData.category === category.id
                          ? 'border-purple-600 bg-purple-50 dark:border-purple-500 dark:bg-purple-900/20'
                          : 'border-gray-200 hover:border-purple-300 dark:border-gray-700 dark:hover:border-purple-700'
                      }`}
                    >
                      <div
                        className={`rounded-full p-4 ${
                          formData.category === category.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                        }`}
                      >
                        <category.icon className="h-8 w-8" />
                      </div>
                      <span
                        className={`font-medium ${
                          formData.category === category.id
                            ? 'text-purple-700 dark:text-purple-400'
                            : 'text-gray-900 dark:text-white'
                        }`}
                      >
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Device Details */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Cihazınızın detaylarını girin
                </h2>
                <p className="mb-8 text-gray-600 dark:text-gray-400">
                  Marka, model ve diğer özellikleri belirtin
                </p>

                <div className="space-y-6">
                  {/* Brand Selection */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Marka
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {phoneBrands.map((brand) => (
                        <button
                          key={brand}
                          onClick={() => handleBrandSelect(brand)}
                          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                            formData.brand === brand
                              ? 'bg-purple-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Model Input */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Model
                    </label>
                    <input
                      type="text"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      placeholder="Örn: iPhone 14 Pro Max, Galaxy S23 Ultra"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>

                  {/* Storage Selection */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Depolama Kapasitesi
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['64GB', '128GB', '256GB', '512GB', '1TB'].map((storage) => (
                        <button
                          key={storage}
                          onClick={() => setFormData({ ...formData, storage })}
                          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                            formData.storage === storage
                              ? 'bg-purple-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                          }`}
                        >
                          {storage}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Input */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Renk
                    </label>
                    <input
                      type="text"
                      value={formData.color}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                      placeholder="Örn: Siyah, Beyaz, Mavi"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Condition */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Cihazınızın durumu nedir?
                </h2>
                <p className="mb-8 text-gray-600 dark:text-gray-400">
                  Dürüst değerlendirme daha iyi eşleşme sağlar
                </p>

                <div className="space-y-4">
                  {conditions.map((condition) => (
                    <button
                      key={condition.id}
                      onClick={() => handleConditionSelect(condition.id)}
                      className={`w-full rounded-xl border-2 p-5 text-left transition-all ${
                        formData.condition === condition.id
                          ? 'border-purple-600 bg-purple-50 dark:border-purple-500 dark:bg-purple-900/20'
                          : 'border-gray-200 hover:border-purple-300 dark:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`inline-block h-3 w-3 rounded-full ${
                                condition.color === 'green'
                                  ? 'bg-green-500'
                                  : condition.color === 'blue'
                                  ? 'bg-blue-500'
                                  : condition.color === 'yellow'
                                  ? 'bg-yellow-500'
                                  : 'bg-red-500'
                              }`}
                            />
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {condition.name}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {condition.description}
                          </p>
                        </div>
                        {formData.condition === condition.id && (
                          <CheckCircle className="h-6 w-6 text-purple-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Additional Description */}
                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Ek Açıklama (Opsiyonel)
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Cihazınız hakkında eklemek istediğiniz detaylar..."
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Photos */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Cihazınızın fotoğraflarını ekleyin
                </h2>
                <p className="mb-8 text-gray-600 dark:text-gray-400">
                  Net ve kaliteli fotoğraflar daha fazla ilgi çeker (en az 1, en fazla 6 fotoğraf)
                </p>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Uploaded Images */}
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden border dark:border-gray-700">
                      <Image
                        src={image}
                        alt={`Uploaded ${index + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}

                  {/* Upload Button */}
                  {formData.images.length < 6 && (
                    <button
                      onClick={handleImageUpload}
                      className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 hover:border-purple-500 hover:bg-purple-50 dark:border-gray-700 dark:hover:border-purple-500 dark:hover:bg-purple-900/20 transition-all"
                    >
                      <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                        <Camera className="h-6 w-6 text-gray-500" />
                      </div>
                      <span className="text-sm text-gray-500">Fotoğraf Ekle</span>
                    </button>
                  )}
                </div>

                {/* Tips */}
                <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <div className="flex gap-3">
                    <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-800 dark:text-blue-300">
                      <p className="font-medium mb-1">Fotoğraf İpuçları:</p>
                      <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-400">
                        <li>Cihazın ön ve arka yüzünü çekin</li>
                        <li>Varsa hasarlı bölgeleri yakından gösterin</li>
                        <li>İyi aydınlatılmış ortamda çekim yapın</li>
                        <li>Kutu ve aksesuarlarınız varsa ekleyin</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Trade Preference */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Hangi cihazla takas yapmak istiyorsunuz?
                </h2>
                <p className="mb-8 text-gray-600 dark:text-gray-400">
                  Takas karşılığında almak istediğiniz cihazı belirtin
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      İstediğiniz Cihaz
                    </label>
                    <input
                      type="text"
                      value={formData.lookingFor}
                      onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                      placeholder="Örn: iPhone 15 Pro, Samsung S24 Ultra, MacBook Pro 14"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Birden fazla seçenek yazabilirsiniz (virgülle ayırın)
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">İlan Özeti</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Kategori:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {deviceCategories.find((c) => c.id === formData.category)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Cihaz:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {formData.brand} {formData.model}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Özellikler:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {formData.storage} • {formData.color}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Durum:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {conditions.find((c) => c.id === formData.condition)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Fotoğraf:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {formData.images.length} adet
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Geri
            </Button>

            {step < totalSteps ? (
              <Button
                onClick={nextStep}
                disabled={!canProceed()}
                className="gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
              >
                İleri
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                disabled={!canProceed()}
                className="gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
              >
                <CheckCircle className="h-4 w-4" />
                İlanı Yayınla
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
