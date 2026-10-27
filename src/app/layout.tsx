import type { Metadata, Viewport } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-serif',
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
  themeColor: '#101714',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable} h-full antialiased selection:bg-[#72D8B0]/20 selection:text-[#F4F2EA]`}
    >
      <body className="min-h-full flex flex-col bg-[#101714] text-[#E5EAE6] font-sans antialiased">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
