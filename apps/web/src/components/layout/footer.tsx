import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Kariyer', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Basın', href: '/press' },
  ],
  support: [
    { name: 'Yardım Merkezi', href: '/help' },
    { name: 'İletişim', href: '/contact' },
    { name: 'SSS', href: '/faq' },
    { name: 'Kargo Takibi', href: '/tracking' },
  ],
  legal: [
    { name: 'Kullanım Koşulları', href: '/terms' },
    { name: 'Gizlilik Politikası', href: '/privacy' },
    { name: 'KVKK', href: '/kvkk' },
    { name: 'Çerez Politikası', href: '/cookies' },
  ],
  services: [
    { name: 'Trade-in', href: '/trade-in' },
    { name: 'Ürün Kataloğu', href: '/catalog' },
    { name: 'Kurumsal', href: '/corporate' },
    { name: 'Bayilik', href: '/franchise' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900/50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">
                EV
              </div>
              <span className="font-bold text-xl">
                <span className="text-brand-600">Eskisini Ver</span>
                <span className="text-gray-600 dark:text-gray-400"> Yenisini Al</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Türkiye'nin lider trade-in platformu. Eski cihazlarınızı değerlendirin,
              yeni ürünlerle takas edin.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-2">
              <a
                href="mailto:info@eskisiniveryenisinial.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-600 dark:text-gray-400"
              >
                <Mail className="h-4 w-4" />
                info@eskisiniveryenisinial.com
              </a>
              <a
                href="tel:+908501234567"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-600 dark:text-gray-400"
              >
                <Phone className="h-4 w-4" />
                0850 123 45 67
              </a>
              <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                İstanbul, Türkiye
              </p>
            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-brand-100 hover:text-brand-600 dark:bg-gray-800 dark:text-gray-400"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Şirket</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-brand-600 dark:text-gray-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Hizmetler</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-brand-600 dark:text-gray-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Destek</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-brand-600 dark:text-gray-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Yasal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-brand-600 dark:text-gray-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Eskisini Ver Yenisini Al. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <img src="/images/payment/visa.svg" alt="Visa" className="h-6" />
            <img src="/images/payment/mastercard.svg" alt="Mastercard" className="h-6" />
            <img src="/images/payment/troy.svg" alt="Troy" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
