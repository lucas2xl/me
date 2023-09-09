'use client';

import { ScrollArea } from '@radix-ui/react-scroll-area';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

type Props = {
  children: React.ReactNode;
};
export default function MobileNav({ children }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon className="h-4 w-4" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <ScrollArea className="h-full pt-10 ">
          <div className="h-full">{children}</div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
