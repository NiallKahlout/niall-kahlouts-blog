type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto max-w-4xl px-5 md:px-8">
      {children}
    </div>
  );
};

export default Container;
