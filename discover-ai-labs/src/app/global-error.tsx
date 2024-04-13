'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/config';

import { ThemeProvider } from './(components)/ThemeProvider';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
              <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                  <Image
                    src="/opengraph-image"
                    alt="About Discover Labs"
                    width={288}
                    height={64}
                    className="h-6 w-72 object-cover object-center"
                  />
                  <span className="sr-only">{APP_NAME}</span>
                </Link>
                <Link
                  href="/"
                  className="transition-colors whitespace-nowrap hover:text-foreground"
                >
                  Dashboard
                </Link>
              </nav>
            </header>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
              <div className="mx-auto grid w-full max-w-6xl gap-4">
                <h1 className="text-3xl font-semibold">
                  Something went wrong!
                </h1>
                <p>{error.message}</p>
                <Button
                  className="w-fit"
                  onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                  }
                >
                  Try again
                </Button>
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
