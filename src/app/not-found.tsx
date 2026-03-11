import Container from "@/app/_components/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center">
      <Container>
        <div className="py-24 text-center">
          <p className="text-blog-accent font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            404
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-blog-fg mb-4">
            Page not found
          </h1>
          <p className="text-blog-muted text-lg mb-10 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-blog-border px-6 py-2.5 text-sm font-medium text-blog-muted hover:border-blog-accent hover:text-blog-accent transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}
