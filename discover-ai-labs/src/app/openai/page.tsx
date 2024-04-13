import { type Metadata } from 'next';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Open AI - Discover AI Labs',
  description: 'Explore AI with Open AI',
};

export default function OpenAIPage() {
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
