import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
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

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readingTime,
}: Props) {
  return (
    <article className="group rounded-xl border border-blog-card-border bg-blog-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 dark:shadow-dark-sm dark:hover:shadow-dark-md">
      <div className="mb-5 overflow-hidden rounded-lg">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="mb-2 text-2xl font-bold leading-snug font-heading">
        <Link
          href={`/posts/${slug}`}
          className="hover:opacity-80 transition-opacity"
        >
          {title}
        </Link>
      </h3>
      <div className="flex items-center gap-2 text-blog-muted mb-3 text-sm">
        <DateFormatter dateString={date} />
        {readingTime && (
          <>
            <span aria-hidden>·</span>
            <span>{readingTime} min read</span>
          </>
        )}
      </div>
      <p className="mb-4 leading-relaxed text-blog-fg">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </article>
  );
}
