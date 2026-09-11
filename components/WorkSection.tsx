
import Image from "next/image";

type WorkSectionProps = {
  imgUrl?: string;
  imageAlt?: string;
  linkText: string;
  linkUrl?: string;
};

export default function WorkSection({
  linkText,
  imgUrl,
  imageAlt,
  linkUrl,
}: WorkSectionProps) {
  return (
    <div className="h-9/12">
      <div className="h-full w-auto px-4">
        {imgUrl ? (
          <div className="relative h-4/5 overflow-hidden rounded-2xl bg-black">
            <Image
              src={imgUrl}
              alt={imageAlt ?? linkText}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-4/5 rounded-2xl bg-black"></div>
        )}
        <h3 className="my-4 text-xl text-black hover:underline">
          {linkUrl ? <a href={linkUrl}>{linkText}</a> : linkText}
        </h3>
        <hr className="mb-4 text-black"></hr>
      </div>
    </div>
  );
}
