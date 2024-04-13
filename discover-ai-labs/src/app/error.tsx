'use client';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <div className="mx-auto grid w-full max-w-6xl gap-4">
        <h1 className="text-3xl font-semibold">Something went wrong!</h1>
        <p>{error.message}</p>
        <Button
          asChild
          className="w-fit"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
