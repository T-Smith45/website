import type { Metadata } from "next";
import Image from "next/image";

import PageShell from "@/components/PageShell";
import { getWorkEntries, type WorkEntry } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work & Writing | TNheous.com",
};

function getEntryUrl(entry: WorkEntry): string | undefined {
  if (entry.postPage) {
    return `/${entry.isBlog ? "blog" : "work"}/${entry.slug}/`;
  }

  return entry.link;
}

function PostCard({ entry }: { entry: WorkEntry }) {
  const content = (
    <>
      {entry.image ? (
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
          <Image
            src={entry.image}
            alt={entry.imageAlt ?? entry.title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="aspect-video rounded-2xl bg-black" />
      )}

      <div className="px-1 pb-1 pt-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm uppercase tracking-wider text-black/70">
          <span>{entry.isBlog ? "Writing" : "Work"}</span>
          <time dateTime={entry.date}>{entry.date}</time>
        </div>
        <h2 className="mt-2 break-words text-2xl leading-tight">{entry.title}</h2>
      </div>
    </>
  );
  const url = getEntryUrl(entry);

  return (
    <article className="min-w-0">
      {url ? (
        <a
          href={url}
          className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          {content}
        </a>
      ) : (
        <div>{content}</div>
      )}
    </article>
  );
}

export default function PostsPage() {
  const entries = getWorkEntries();

  return (
    <PageShell title="Work & Writing" wide>
      {entries.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {entries.map((entry) => (
            <PostCard key={entry.slug} entry={entry} />
          ))}
        </div>
      ) : (
        <p className="text-lg">No posts yet.</p>
      )}
    </PageShell>
  );
}
