import { notFound } from "next/navigation";

import EntryDetail from "@/components/EntryDetail";
import { getPostEntries, getPostEntry } from "@/lib/work";

export const dynamicParams = false;

export function generateStaticParams() {
  const entries = getPostEntries(true);

  return entries.length > 0
    ? entries.map((entry) => ({ slug: [entry.slug] }))
    : [{ slug: [] }];
}

type BlogPostPageProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return null;
  }

  if (slug.length !== 1) {
    notFound();
  }

  const entry = getPostEntry(slug[0], true);
  if (!entry) {
    notFound();
  }

  return <EntryDetail entry={entry} linkLabel="Related link" />;
}
