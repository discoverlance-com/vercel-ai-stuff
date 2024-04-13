import { ArrowUpRight, File } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Home() {
  return (
    <>
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Dashbaord</h1>
      </div>
      <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle>Vercel AI</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Most of the ai integrations built here are courtesy of{' '}
                  <a
                    href="https://vercel.com/ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    vercel ai
                  </a>
                  , their{' '}
                  <a
                    href="https://sdk.vercel.ai/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    ai sdk and generative ui
                  </a>{' '}
                  .
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>This Week</CardDescription>
                <CardTitle className="text-4xl">5</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  +25% from last week
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={25} aria-label="25% increase" />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>This Month</CardDescription>
                <CardTitle className="text-4xl">100</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  +10% from last month
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={12} aria-label="12% increase" />
              </CardFooter>
            </Card>
          </div>
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Tech Stack</CardTitle>
                <CardDescription>
                  Tech stack used to build parts of this site
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Website</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">TailwindCSS</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        frontend
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      https://tailwindcss.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Shadcn ui</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        frontend
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      https://ui.shadcn.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Next.JS</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Fullstack
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      https://nextjs.org
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Vercel AI SDK</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Backend
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      https://sdk.vercel.ai
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Google Gemini</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Backend
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      https://gemini.google.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Open AI</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Backend
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      https://openai.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Hugging Face</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Backend
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      https://huggingface.co
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Most Used Applications</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>TD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">Todoist</p>
                  <p className="text-sm text-muted-foreground">Gemini AI</p>
                </div>
                <div className="ml-auto font-medium">1K generations</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>TD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">Todoist</p>
                  <p className="text-sm text-muted-foreground">Open AI</p>
                </div>
                <div className="ml-auto font-medium">100 generations</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
