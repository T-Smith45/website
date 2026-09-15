import Image from "next/image";
import ReactMarkdown from "react-markdown";

import PageShell from "@/components/PageShell";
import type { WorkEntry } from "@/lib/work";

type EntryDetailProps = {
  entry: WorkEntry;
  linkLabel: "Project link" | "Related link";
};

export default function EntryDetail({ entry, linkLabel }: EntryDetailProps) {
  return (
    <PageShell title={entry.title}>
      <article>
        <p className="text-sm uppercase tracking-widest">{entry.date}</p>

        {entry.image && (
          <div className="relative mt-8 h-[50vh] min-h-48 max-h-[32rem] overflow-hidden rounded-2xl bg-black">
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
          <ReactMarkdown components={{ h1: () => null }}>{entry.body}</ReactMarkdown>
        </div>

        {entry.link && (
          <p className="mt-8 border-t border-black/20 pt-4">
            <span className="mr-2 font-semibold">{linkLabel}:</span>
            <a
              href={entry.link}
              target="_blank"
              rel="noreferrer"
              className="break-all underline"
            >
              {entry.link}
            </a>
          </p>
        )}
      </article>
    </PageShell>
  );
}
