import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-16 mt-8 flex items-center border-b border-blog-border pb-6">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          Niall Kahlout's Blog
        </Link>
      </h2>
    </header>
  );
};

export default Header;
