import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-blog-border py-12">
      <Container>
        <p className="text-blog-muted text-center text-sm">
          Built with Next.js and React. © {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
