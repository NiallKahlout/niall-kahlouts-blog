import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover for ${title}`}
      className={cn(
        "w-full rounded-lg object-cover shadow-md",
        slug && "transition-transform duration-300 group-hover:scale-[1.02]"
      )}
      width={1300}
      height={630}
    />
  );
  return (
    <div className={slug ? "group sm:mx-0" : "sm:mx-0"}>
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title} className="block overflow-hidden rounded-lg">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
