import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className="mb-24">
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-blog-fg md:text-4xl">
        More stories
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-16 lg:gap-y-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
