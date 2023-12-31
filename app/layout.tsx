import { Footer, Navbar } from '@/components';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Find, book, or rent a car — quickly and easily with Car Hub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
