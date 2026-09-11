import BtnLink from "@/components/BtnLink";
import CardTitle from "@/components/CardTitle";
import WorkSection from "@/components/WorkSection";
import { getWorkEntries } from "@/lib/work";



export default function Home() {
  const workEntries = getWorkEntries().slice(0, 7);

  return (
    <>
      <div className=" h-dvh grid grid-cols-2 has-[section:last-child:hover]:[&>section:first-child]:brightness-45">
        <section className="pb-1 pt-1 pl-0.5 h-full">  
          <div className="bg-[#FAF9F6] rounded-2xl h-5/12 mb-0.5 mr-0.5 pt-3">
              <CardTitle title="Information"></CardTitle>
              <h1 className="text-black text-5xl text-center pt-3">T&apos;Nheous Smith <br></br> Software Engineer <br></br> Dallas, Texas</h1>
          </div>
          <div className="grid grid-cols-[1fr_2fr] h-[58%] mb-0.5 mr-0.5">
              <div className="bg-[#FAF9F6] rounded-2xl mr-0.5 pt-1">
                   <CardTitle title="Contact"></CardTitle>
                   <div className=" text-black grid grid-cols-1 gap-y-6  pt-6">
                        <BtnLink title={"Twitter/X"}  ></BtnLink>
                        <BtnLink title={"Linkedin"}  ></BtnLink>
                        <BtnLink title={"Email"}  ></BtnLink>
                        <BtnLink title={"Youtube?"}  ></BtnLink>
                   </div>
              </div>
              <div className="bg-[#FAF9F6] rounded-2xl pt-1">
                  <CardTitle title="About"></CardTitle>
                  <p className=" px-8 text-black pt-6 text-xl font-medium indent-8 ">
                      T&apos;Nheous is a Dallas-based backend and full-stack software engineer with 9+ years of experience building enterprise applications, real-time data pipelines, and cloud systems across the energy and supply chain sectors.
                  </p>
                  <p className=" px-8 text-black pt-6 text-xl font-medium indent-8 ">
                      Outside of engineering backend solutions, this site serves as a lab to prototype developer tools and validate independent software ideas. For inquiries, feel free to reach out via email.
                  </p>
              </div>
          </div>
        </section>
        <section className=" pb-1 pt-1 overflow-auto  h-full mb-1.5">
          <div className="bg-[#E6E1D8] rounded-2xl h-full scroll-container pt-14">
              <div className=" fixed top-4 right-0 z-50 w-1/2  mix-blend-difference">
                  <CardTitle title="What Am I Working On?" ></CardTitle>
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
      </div>
    </>
  );
}
