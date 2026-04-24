import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://samiyildiz.net.tr'),
  title: 'Sami Yıldız | Siber Güvenlik Uzmanı',
  description: 'Sami Yıldız - Siber Güvenlik Uzmanı ve Penetration Tester Portfolyosu. Web uygulamaları güvenliği ve bug bounty odaklı güvenlik testleri.',
  openGraph: {
    title: 'Sami Yıldız | Siber Güvenlik Uzmanı',
    description: 'Siber Güvenlik Uzmanı ve Penetration Tester portfolyo web sitesi.',
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
