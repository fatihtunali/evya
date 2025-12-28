'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, User, ShoppingBag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Trade-in', href: '/trade-in' },
  { name: 'Ürünler', href: '/catalog' },
  { name: 'Nasıl Çalışır', href: '/how-it-works' },
  { name: 'Hakkımızda', href: '/about' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Logo placeholder - will be replaced with actual logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">
            EV
          </div>
          <span className="hidden font-bold text-xl sm:block">
            <span className="text-brand-600">Eskisini Ver</span>
            <span className="text-gray-600 dark:text-gray-400"> Yenisini Al</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden md:flex"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Tema değiştir</span>
          </Button>

          {/* Search */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Ara</span>
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Sepet</span>
            </Link>
          </Button>

          {/* User menu */}
          <Button variant="ghost" size="icon" asChild className="hidden md:flex">
            <Link href="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">Hesabım</span>
            </Link>
          </Button>

          {/* CTA Button */}
          <Button asChild className="hidden md:flex">
            <Link href="/trade-in">Cihazımı Değerlendir</Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-16 z-50 transform bg-background/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden',
          mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
        <div className="container py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-lg font-medium text-gray-600 dark:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-4 pt-4 border-t">
            <Button asChild className="flex-1">
              <Link href="/trade-in">Cihazımı Değerlendir</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href="/login">Giriş Yap</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
