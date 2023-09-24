"use client";

import { Product } from "@/data/types";
import { CldImage } from "next-cloudinary";
import { Button } from "./button";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-y-8 p-4 pt-20 w-1/5 min-h-full justify-center items-center bg-white">
      <div className="flex items-center justify-center">
        <CldImage
          className="rounded-sm"
          width={140}
          height={140}
          alt="uploadImagePreview"
          src={product.image}
        />
      </div>
      <div className="flex flex-col gap-y-8 text-sm w-full h-full justify-between font-semibold">
        <div>
          <p>{product.name}</p>
        </div>
        <div>
          <p className="text-lg font-bold">
            £{parseFloat(product.price.toString())}
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <Button className="w-3/4 font-bold">Add</Button>
      </div>
    </div>
  );
};

export default ProductCard;
