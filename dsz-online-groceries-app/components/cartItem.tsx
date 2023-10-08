import { displayPrice, unitPrice } from "@/app/helpers/priceFomat";
import { Product } from "@/data/types";
import { CldImage } from "next-cloudinary";
import { useDispatch } from "react-redux";
import ProductCount from "./productCount";

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const dispatch = useDispatch();
  const uPrice = unitPrice(product.price, product.size, product.unit.factor);

  return (
    <div className="flex items-center gap-x-4 h-1/4 w-full justify-between bg-white p-2">
      <div>
        <CldImage
          className="rounded-sm"
          width={100}
          height={100}
          alt="uploadImagePreview"
          src={product.image}
        />
      </div>
      <div className="flex flex-col w-1/2 h-full justify-between">
        <p className="text-sm">{product.name}</p>
        <p className="text-sm">
          <span className="font-extrabold text-xl">
            {displayPrice(parseFloat(product.price.toString()))}
          </span>{" "}
          {displayPrice(parseFloat(uPrice.toString()))} /{" "}
          {product.unit ? product.unit.name : "ea"}
        </p>
      </div>

      <ProductCount product={product} quantity={quantity} />
    </div>
  );
};

export default CartItem;
