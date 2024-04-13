'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { APP_LINKS } from '@/lib/config';
import { cn } from '@/lib/utils';

export const OPenAINavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="grid gap-4 text-sm text-muted-foreground">
      {APP_LINKS.openAi.subLinks.map(item => (
        <Link
          key={item.label}
          href={item.path}
          className={cn({
            'font-semibold text-primary': pathname === item.path,
          })}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
