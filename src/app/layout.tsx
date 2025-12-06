import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'textformater.online - Free Online Text Formatting & Conversion Tools',
    template: '%s | textformater.online',
  },
  description: 'Convert, format, and analyze text online with 50+ free tools. Title case converter, JSON formatter, word counter, and more. Fast, browser-based, and private.',
  keywords: ['text converter', 'text formatter', 'online text tools', 'case converter', 'json formatter', 'word counter', 'text analysis'],
  authors: [{ name: 'textformater.online' }],
  creator: 'textformater.online',
  publisher: 'textformater.online',
  metadataBase: new URL('https://textformater.online'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://textformater.online',
    siteName: 'textformater.online',
    title: 'textformater.online - Free Online Text Tools',
    description: 'Convert, format, and analyze text with 50+ free browser-based tools.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'textformater.online - Free Online Text Tools',
    description: 'Convert, format, and analyze text with 50+ free browser-based tools.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes here when needed
    // google: 'verification_code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
