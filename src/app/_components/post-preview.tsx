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
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <article className="group rounded-xl border border-blog-card-border bg-blog-card p-6 shadow-sm transition-shadow hover:shadow-md dark:shadow-dark-sm dark:hover:shadow-dark-md">
      <div className="mb-5 overflow-hidden rounded-lg">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="mb-2 text-2xl font-bold leading-snug">
        <Link
          href={`/posts/${slug}`}
          className="hover:opacity-80 transition-opacity"
        >
          {title}
        </Link>
      </h3>
      <div className="text-blog-muted mb-3 text-sm">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 leading-relaxed text-blog-fg">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </article>
  );
}
