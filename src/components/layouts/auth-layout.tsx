'use client';

import Image from 'next/image';
import Link from 'next/link';

import Logo from './logo';

import { cn } from '@/lib/utils';

export default function Layout({
  double = false,
  children,
}: {
  double?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('grid min-h-svh', double && 'xl:grid-cols-2')}>
      {double && (
        <div className="relative hidden bg-muted xl:block">
          <Image
            src="/bg.jpg"
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <div className="flex flex-col gap-6 mb-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
