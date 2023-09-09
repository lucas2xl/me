interface StackProps {
  title: string;
  image: string;
}

export default function Stack({ title, image }: StackProps) {
  return (
    <div
      key={title}
      className=" flex items-center space-x-4 rounded-md border p-4"
    >
      <img
        alt={title}
        src={image}
        width="20"
        height="20"
        className="rounded-md"
      />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
      </div>
    </div>
  );
}
