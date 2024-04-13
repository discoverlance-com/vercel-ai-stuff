import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div>
      <div className="mx-auto grid w-full max-w-6xl gap-4">
        <h1 className="text-3xl font-semibold">Not Found</h1>
        <p>
          Could not find requested resource. <br /> It might be that the link
          you are visiting is incorrect or that the resource has been removed.
        </p>
        <Button asChild className="w-fit">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
