export function Intro() {
  return (
    <section className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-12 mb-16 md:mb-14">
      <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-blog-fg">
        Niall Kahlout's Blog
      </h1>
      <div className="text-blog-muted text-lg md:pb-1 md:text-left">
        <p className="mb-1">
          Occasional posts on what I'm building and learning.
        </p>
        <p>
          <a href="https://github.com/NiallKahlout" className="link-accent">
            GitHub
            <span className="sr-only"> (Niall Kahlout)</span>
          </a>
        </p>
      </div>
    </section>
  );
}
