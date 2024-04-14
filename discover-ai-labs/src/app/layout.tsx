import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';

import { Header } from './(components)/Header';
import { ThemeProvider } from './(components)/ThemeProvider';
import './globals.css';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? undefined
    : new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Discover AI Labs',
  description: 'AI Labs with tooling and examples of using ai',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
