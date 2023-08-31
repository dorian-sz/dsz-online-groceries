interface HeadinProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadinProps> = ({ title, description }) => {
  return (
    <div className="flex justify-center flex-col gap-y-4 p-2">
      <p className="text-3xl font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
