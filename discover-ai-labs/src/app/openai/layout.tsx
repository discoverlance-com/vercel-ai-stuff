import { APP_LINKS } from '@/lib/config';

import { OPenAINavigation } from './(components)/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">{APP_LINKS.openAi.label}</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <OPenAINavigation />
        {children}
      </div>
    </>
  );
}
