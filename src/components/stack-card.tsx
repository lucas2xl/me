import { ChevronsUpDownIcon } from 'lucide-react';
import * as React from 'react';

import Stack from '@/components/stack.tsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { stacks } from '@/config/stacks';

type CardProps = React.ComponentProps<typeof Card>;

export default function StackCard({ className, ...props }: CardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card className={className} {...props}>
      <CardContent>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CardHeader>
            <CollapsibleTrigger asChild>
              <div className="flex cursor-pointer items-center justify-between">
                <CardTitle>Stacks</CardTitle>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDownIcon className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </div>
            </CollapsibleTrigger>
          </CardHeader>

          <div className="space-y-2">
            {stacks.slice(0, 3).map(stack => (
              <Stack key={stack.title} {...stack} />
            ))}
          </div>

          <CollapsibleContent className="mt-2 space-y-2">
            {stacks.slice(3).map(stack => (
              <Stack key={stack.title} {...stack} />
            ))}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
