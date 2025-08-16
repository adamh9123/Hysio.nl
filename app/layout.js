import { Inter } from 'next/font/google';
import './globals.css';
import HeaderNavbar from '@/components/HeaderNavbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weights: [400, 600, 700],
});

export const metadata = {
  title: 'Hysio.nl - Meer tijd voor je vak. Minder gedoe.',
  description: 'Hysio.nl is je AI-assistent voor efficiënte verslaglegging en betere zorg – speciaal voor fysiotherapeuten.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <HeaderNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
