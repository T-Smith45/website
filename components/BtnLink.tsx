import { ArrowUpRight } from "lucide-react";

type BtnLinkProps = {
  title: string;
  url?: string;
};

export default function BtnLink({ title, url = "#" }: BtnLinkProps) {
  return (
    <a
      href={url}
      className="group relative flex h-11 items-center justify-center overflow-hidden rounded-3xl border-2 px-2 text-lg min-[835px]:mx-8 min-[835px]:h-auto min-[835px]:min-h-11 min-[835px]:py-2 min-[835px]:text-xl"
    >
      <span className="block text-center transition-transform duration-200 ease-in-out group-hover:-translate-x-5">
        {title}
      </span>

      <ArrowUpRight
        size={24}
        strokeWidth={2}
        className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-3 scale-75 opacity-0 transition-all duration-200 ease-out group-hover:-translate-x-5 group-hover:scale-100 group-hover:opacity-100"
      />
    </a>
  );
}
