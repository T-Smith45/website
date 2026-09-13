import type { ReactNode } from "react";
import Link from "next/link";

type PageShellProps = {
  title: string;
  children: ReactNode;
};

export default function PageShell({ title, children }: PageShellProps) {
  return (
    <main className="min-h-dvh text-black min-[835px]:p-0.5">
      <section className="relative isolate min-h-dvh overflow-hidden min-[835px]:min-h-[calc(100dvh-0.25rem)] min-[835px]:rounded-2xl min-[835px]:p-4 lg:p-6">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 hidden bg-[#FAF9F6] brightness-45 min-[835px]:block"
        />

        <div className="mx-auto min-h-dvh w-full bg-[#FAF9F6] px-4 pb-6 pt-2 sm:px-8 sm:pb-10 sm:pt-3 min-[835px]:min-h-0 min-[835px]:max-w-3xl min-[835px]:rounded-2xl lg:px-12 lg:pb-14 lg:pt-4">
          <header className="flex min-w-0 items-center gap-3 sm:gap-5">
            <span aria-hidden="true" className="dot" />
            <h1 className="min-w-0 flex-1 break-words text-center text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <span aria-hidden="true" className="dot" />
          </header>

          <div className="mt-4 px-7 sm:px-9">
            <Link href="/" className="text-sm font-medium underline underline-offset-4">
              Back to home
            </Link>
          </div>

          <div className="mt-8 min-w-0 break-words px-7 [&_img]:max-w-full sm:mt-10 sm:px-9">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
