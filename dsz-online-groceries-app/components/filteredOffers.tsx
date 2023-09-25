import { Product } from "@/data/types";
import ProductCard from "./ui/productCard";

interface FilteredOffersContainerProps {
  products: Product[];
}

const FilteredOffersContainer: React.FC<FilteredOffersContainerProps> = ({
  products,
}) => {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FilteredOffersContainer;
