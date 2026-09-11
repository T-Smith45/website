import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { getPostWorkEntries, getWorkEntry } from "@/lib/work";

export const dynamicParams = false;

export function generateStaticParams() {
  const entries = getPostWorkEntries();

  return entries.length > 0
    ? entries.map((entry) => ({ slug: [entry.slug] }))
    : [{ slug: [] }];
}

type WorkPostPageProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function WorkPostPage({ params }: WorkPostPageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return null;
  }

  if (slug.length !== 1) {
    notFound();
  }

  const entry = getWorkEntry(slug[0]);
  if (!entry) {
    notFound();
  }

  return (
    <main className="min-h-dvh bg-[#E6E1D8] px-6 py-8 text-black">
      <article className="mx-auto max-w-3xl rounded-2xl bg-[#FAF9F6] p-8">
        <p className="text-sm uppercase tracking-widest">{entry.date}</p>
        <h1 className="mt-3 text-5xl">{entry.title}</h1>

        {entry.image && (
          <div className="relative mt-8 h-[50vh] overflow-hidden rounded-2xl bg-black">
            <Image
              src={entry.image}
              alt={entry.imageAlt ?? entry.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        <div className="mt-8 space-y-4 text-lg leading-relaxed [&_a]:underline [&_h2]:mt-8 [&_h2]:text-3xl [&_h3]:mt-6 [&_h3]:text-2xl [&_li]:ml-6 [&_li]:list-disc [&_p]:mt-4">
          <ReactMarkdown>{entry.body}</ReactMarkdown>
        </div>

        {entry.link && (
          <p className="mt-8 border-t border-black/20 pt-4">
            <span className="mr-2 font-semibold">Project link:</span>
            <a href={entry.link} target="_blank" rel="noreferrer" className="underline">
              {entry.link}
            </a>
          </p>
        )}
      </article>
    </main>
  );
}
