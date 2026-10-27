import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Sahaara — Wellbeing Intelligence',
    default: 'Sahaara — Early Warning That Leads to Care | Deviathon 2.0'
  },
  description:
    'Coordinator-first wellbeing intelligence platform for older adults living at home. Connecting everyday wellbeing observations, personal baselines, and human-led follow-up for Deviathon 2.0 (Samarth Life Management problem statement).',
  keywords: [
    'elder care',
    'wellbeing intelligence',
    'care coordination',
    'personal baseline',
    'older adults living at home',
    'Deviathon 2.0',
    'Samarth Life Management',
    'preventive care',
    'explainable alerts'
  ],
  authors: [{ name: 'Sahaara Engineering Team' }],
  openGraph: {
    title: 'Sahaara — Early Warning That Leads to Care',
    description:
      'A change in routine should never go unnoticed. Coordinator-first wellbeing intelligence connecting multi-signal observations to human-led care actions.',
    url: 'https://sahaara.dev',
    siteName: 'Sahaara',
    locale: 'en_IN',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: '#090d16',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 font-sans selection:bg-teal-500/30 selection:text-white">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
