type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={picture}
        className="h-10 w-10 rounded-full border-2 border-blog-border object-cover"
        alt={name}
      />
      <span className="font-semibold text-blog-fg">{name}</span>
    </div>
  );
};

export default Avatar;
