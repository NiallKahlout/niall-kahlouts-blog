import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-12 mt-8">
      <Link
        href="/"
        className="text-xl font-semibold tracking-tight text-blog-fg hover:opacity-80 transition-opacity md:text-2xl"
      >
        ← Niall Kahlout's Blog
      </Link>
    </header>
  );
};

export default Header;
