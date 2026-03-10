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
  readingTime?: number;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readingTime,
}: Props) {
  return (
    <section className="mb-20 md:mb-28">
      <div className="mb-8 md:mb-10">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-12 gap-y-6">
        <div>
          <h2 className="mb-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-heading">
            <Link
              href={`/posts/${slug}`}
              className="hover:opacity-80 transition-opacity"
            >
              {title}
            </Link>
          </h2>
          <div className="flex items-center gap-2 text-blog-muted text-base">
            <DateFormatter dateString={date} />
            {readingTime && (
              <>
                <span aria-hidden>·</span>
                <span>{readingTime} min read</span>
              </>
            )}
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 text-blog-fg">{excerpt}</p>
          <div className="mb-6">
            <Link
              href={`/posts/${slug}`}
              className="inline-flex items-center gap-1.5 text-blog-accent hover:text-blog-accent-hover font-medium transition-colors"
            >
              Read article
              <span aria-hidden>→</span>
            </Link>
          </div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
