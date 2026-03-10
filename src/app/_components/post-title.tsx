import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="mb-10 text-4xl font-bold leading-tight tracking-tight text-blog-fg md:text-5xl lg:text-6xl md:leading-none md:text-left">
      {children}
    </h1>
  );
}
