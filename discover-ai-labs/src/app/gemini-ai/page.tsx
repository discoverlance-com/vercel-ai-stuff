import { type Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

export const metadata: Metadata = {
  title: 'Gemini AI - Discover AI Labs',
  description: 'Explore AI with Google Gemini',
};

export default function GeminiAiPage() {
  return (
    <>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Chat</CardTitle>
            <CardDescription>
              Select an available tool from the left to continue...
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
