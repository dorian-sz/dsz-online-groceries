import { Product } from "@/data/types";
import ProductCard from "./ui/productCard";

interface FilteredOffersContainerProps {
  products: Product[];
}

const FilteredOffersContainer: React.FC<FilteredOffersContainerProps> = ({
  products,
}) => {
  return (
    <div className="flex gap-x-6">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default FilteredOffersContainer;
