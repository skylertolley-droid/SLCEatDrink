import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://slceatdrink.com'),
  title: {
    default: 'SLC Eat Drink — Find where to eat & drink in Salt Lake',
    template: '%s · SLC Eat Drink',
  },
  description:
    'Salt Lake City restaurant and bar directory filtered for patio, late kitchen, drink license, brunch, kid-friendly, and more. Local, useful, not tourist fluff.',
  openGraph: {
    title: 'SLC Eat Drink',
    description:
      'Find where to eat and drink in Salt Lake — filtered for how you actually go out.',
    url: 'https://slceatdrink.com',
    siteName: 'SLC Eat Drink',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
