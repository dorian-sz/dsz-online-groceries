import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { addToCart, removeFromCart } from "@/redux/slices/cart-slice";
import { Product } from "@/data/types";
import { cn } from "@/lib/utils";

interface ProductCountProps {
  product: Product;
  quantity: number;
  className?: string;
}

const ProductCount: React.FC<ProductCountProps> = ({
  product,
  quantity,
  className,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={cn("flex flex-col h-full w-1/5", className)}>
      <Button
        className="h-full w-full text-3xl p-0 font-semibold"
        onClick={() => dispatch(addToCart({ product: product, quantity: 1 }))}
      >
        +
      </Button>
      <Button
        className="h-full w-full font-bold hover:text-orange-600"
        variant={"ghost"}
      >
        {quantity}
      </Button>
      <Button
        className="h-full w-full p-0 text-3xl font-semibold"
        onClick={() =>
          dispatch(removeFromCart({ product: product, quantity: 1 }))
        }
      >
        -
      </Button>
    </div>
  );
};

export default ProductCount;
