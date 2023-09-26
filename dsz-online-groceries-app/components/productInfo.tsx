import { Separator } from "@/components/ui/separator";

interface ProductInfoProps {
  title: string;
  description: string[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-3xl font-extrabold">{title}</p>
      {description.map((line) => (
        <p key={title}>{line}</p>
      ))}
      <Separator />
    </div>
  );
};

export default ProductInfo;
