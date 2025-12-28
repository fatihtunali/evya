import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Eskisini Ver Yenisini Al | Trade-in Platform',
    template: '%s | Eskisini Ver Yenisini Al',
  },
  description: 'Eski cihazlarınızı değerlendirin, yeni ürünlerle takas edin. En iyi fiyatlarla trade-in yapın.',
  keywords: ['trade-in', 'takas', 'telefon', 'eski telefon', 'yeni telefon', 'değerleme'],
  authors: [{ name: 'EVYA Team' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://eskisiniveryenisinial.com',
    siteName: 'Eskisini Ver Yenisini Al',
    title: 'Eskisini Ver Yenisini Al | Trade-in Platform',
    description: 'Eski cihazlarınızı değerlendirin, yeni ürünlerle takas edin.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eskisini Ver Yenisini Al',
    description: 'Eski cihazlarınızı değerlendirin, yeni ürünlerle takas edin.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
