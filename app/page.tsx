import BtnLink from "@/components/BtnLink";
import CardTitle from "@/components/CardTitle";
import WorkSection from "@/components/WorkSection";
import { getWorkEntries } from "@/lib/work";

export default function Home() {
  const workEntries = getWorkEntries().slice(0, 7);

  return (
    <main className="grid h-dvh min-h-0 grid-cols-1 overflow-hidden min-[835px]:grid-cols-2 min-[835px]:has-[section:last-child:hover]:[&>section:first-child]:brightness-45">
      <section className="grid h-full min-h-0 grid-rows-[minmax(0,3fr)_minmax(0,2fr)] gap-0.5 p-0.5 min-[835px]:grid-cols-[1fr_2fr] min-[835px]:grid-rows-[minmax(0,5fr)_minmax(0,7fr)] min-[835px]:gap-0 min-[835px]:pb-1 min-[835px]:pl-0.5 min-[835px]:pr-0 min-[835px]:pt-1">
        <div className="relative flex min-h-0 items-center justify-center rounded-2xl bg-[#FAF9F6] min-[835px]:col-span-2 min-[835px]:mb-0.5 min-[835px]:mr-0.5">
          <div className="absolute inset-x-0 top-1">
            <CardTitle title="Information" />
          </div>
          <h1 className="w-full px-4 text-center text-3xl leading-tight text-black min-[835px]:px-0 min-[835px]:text-4xl min-[835px]:leading-normal">
            T&apos;Nheous Smith <br /> Software Engineer <br /> Dallas, Texas
          </h1>
        </div>

        <div className="hidden rounded-2xl bg-[#FAF9F6] pb-6 pt-1 min-[835px]:col-start-2 min-[835px]:row-start-2 min-[835px]:mr-0.5 min-[835px]:block min-[835px]:min-h-0 min-[835px]:overflow-hidden min-[835px]:pb-0">
          <CardTitle title="About" />
          <p className="break-words px-4 pt-4 text-base font-medium leading-relaxed text-black min-[835px]:px-8 min-[835px]:pt-6 min-[835px]:indent-8 xl:text-xl xl:leading-normal">
            T&apos;Nheous is a Dallas-based backend and full-stack software engineer with 9+ years of experience building enterprise applications, real-time data pipelines, and cloud systems across the energy and supply chain sectors.
          </p>
          <p className="hidden break-words px-4 pt-4 text-base font-medium leading-relaxed text-black xl:block xl:px-8 xl:pt-6 xl:text-xl xl:leading-normal xl:indent-8">
            Outside of engineering backend solutions, this site serves as a lab to prototype developer tools and validate independent software ideas. For inquiries, feel free to reach out via email.
          </p>
        </div>

        <div className="grid min-h-0 grid-rows-[auto_1fr] overflow-hidden rounded-2xl bg-[#FAF9F6] pt-1 min-[835px]:col-start-1 min-[835px]:row-start-2 min-[835px]:mr-0.5 min-[835px]:block">
          <CardTitle title="Contact" />
          <div className="grid self-center grid-cols-1 gap-y-0.5 px-4 text-black min-[430px]:gap-y-4 min-[835px]:gap-y-6 min-[835px]:px-0 min-[835px]:pt-6">
            <BtnLink title="Twitter/X" />
            <BtnLink title="Linkedin" />
            <BtnLink title="Email" />
            <BtnLink title="Youtube?" />
          </div>
        </div>
      </section>

      <section className="hidden min-[835px]:block min-[835px]:h-full min-[835px]:overflow-hidden min-[835px]:pb-1 min-[835px]:pt-1">
        <div className="scroll-container h-full rounded-2xl bg-[#E6E1D8] pt-14">
          <div className="fixed right-0 top-4 z-50 w-1/2 mix-blend-difference">
            <CardTitle title="What Am I Working On?" />
          </div>

          {workEntries.map((entry) => (
            <WorkSection
              key={entry.slug}
              linkText={entry.title}
              linkUrl={entry.postPage ? `/work/${entry.slug}/` : entry.link}
              imgUrl={entry.image}
              imageAlt={entry.imageAlt}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
