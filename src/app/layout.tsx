import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://samiyildiz.net.tr'),
  title: 'Sami Yıldız | Full-Stack Yazılım Mühendisi',
  description: 'Sami Yıldız - Application Security odaklı Full-Stack Yazılım Mühendisi. Güvenli API’lar, web ve mobil uygulamalar, cloud altyapıları.',
  openGraph: {
    title: 'Sami Yıldız | Full-Stack Yazılım Mühendisi',
    description: 'Application Security odaklı Full-Stack Yazılım Mühendisi portfolyosu.',
    url: 'https://samiyildiz.net.tr',
    siteName: 'Sami Yıldız Portfolio',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
