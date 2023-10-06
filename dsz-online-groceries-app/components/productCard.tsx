"use client";

import { Product } from "@/data/types";
import { CldImage } from "next-cloudinary";
import { Button } from "./ui/button";
import Link from "next/link";
import { displayPrice, unitPrice } from "@/app/helpers/priceFomat";
import Nectar from "./nectar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slices/cart-slice";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const strMaxLength = 60;
  const uPrice = unitPrice(product.price, product.size, product.unit.factor);
  const truncate = (str: string, maxLength: number) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  return (
    <div className="flex flex-row relative z-0 md:flex-col gap-y-8 p-4 md:pt-20 w-full md:w-[18.7%] md:min-h-full justify-between items-center bg-white">
      <div className="hidden md:flex justify-center">
        <CldImage
          className="rounded-sm"
          width={140}
          height={140}
          alt="uploadImagePreview"
          src={product.image}
        />
      </div>
      <div className="flex w-1/2 md:hidden">
        <CldImage
          className="rounded-sm"
          width={100}
          height={100}
          alt="uploadImagePreview"
          src={product.image}
        />
      </div>
      <div className="flex flex-col w-full h-full justify-between gap-y-4">
        {product.nectarPrice && (
          <div className="md:absolute top-5 left-0 z-0">
            <Nectar />
          </div>
        )}
        <div className="h-full">
          <Link href={`/product/${product.id}`}>
            <p className="font-semibold text-sm transition-colors duration-200 hover:underline hover:text-orange-600">
              {truncate(product.name, strMaxLength)}
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-y-1">
          {product.nectarPrice && (
            <p className="text-sm">
              <span className="text-purple-600 font-extrabold text-base">
                {displayPrice(parseFloat(product.nectarPrice.toString()))}
              </span>{" "}
              with Nectar
            </p>
          )}

          <p className="text-sm">
            <span className="font-extrabold text-xl">
              {displayPrice(parseFloat(product.price.toString()))}
            </span>{" "}
            {displayPrice(parseFloat(uPrice.toString()))} /{" "}
            {product.unit ? product.unit.name : "ea"}
          </p>
        </div>
        <div className="flex justify-end md:items-center md:justify-center w-full">
          <Button
            className="w-4/6 "
            onClick={() =>
              dispatch(addToCart({ product: product, quantity: 1 }))
            }
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
