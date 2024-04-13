import { type Metadata } from 'next';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Hugging Face - Discover AI Labs',
  description: 'Explore AI with Hugging Face',
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
