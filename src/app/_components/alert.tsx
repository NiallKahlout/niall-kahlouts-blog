import Container from "@/app/_components/container";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b border-blog-border text-center text-sm", {
        "bg-blog-card text-blog-fg": preview,
        "bg-blog-bg text-blog-muted": !preview,
      })}
    >
      <Container>
        <div className="py-3">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a href="/api/exit-preview" className="link-accent">
                Exit preview
              </a>
            </>
          ) : (
            <>
              Source code{" "}
              <a href="https://github.com/NiallKahlout" className="link-accent">
                on GitHub
              </a>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
