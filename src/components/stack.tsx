interface StackProps {
  title: string;
  icon: any;
}

export default function Stack({ title, icon }: StackProps) {
  const Icon = icon;
  return (
    <div
      key={title}
      className=" flex items-center space-x-4 rounded-md border p-4"
    >
      {Icon}
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
      </div>
    </div>
  );
}
