import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32 bg-zinc-50 dark:bg-transparent" id="cta">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl">Start Building</h2>
          <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/auth/sign-up">
                <span>Get Started</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <span>Book Demo</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
