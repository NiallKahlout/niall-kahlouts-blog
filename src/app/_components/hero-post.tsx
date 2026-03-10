import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="mb-20 md:mb-28">
      <div className="mb-8 md:mb-10">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-12 gap-y-6">
        <div>
          <h2 className="mb-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <Link
              href={`/posts/${slug}`}
              className="hover:opacity-80 transition-opacity"
            >
              {title}
            </Link>
          </h2>
          <div className="text-blog-muted text-base">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-6 text-blog-fg">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
