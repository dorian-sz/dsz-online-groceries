"use client";

import { Product, Unit } from "@/data/types";
import { CldImage } from "next-cloudinary";
import { Button } from "./ui/button";
import Link from "next/link";
import { displayPrice, unitPrice } from "@/app/helpers/priceFomat";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const strMaxLength = 60;
  const uPrice = unitPrice(product.price, product.size, product.unit.factor);
  const truncate = (str: string, maxLength: number) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  return (
    <div className="flex flex-row md:flex-col gap-y-8 p-4 w-full md:w-[18.7%] md:h-full justify-end items-center bg-white">
      <div className="hidden md:flex">
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
      <div className="flex flex-col w-full gap-y-4">
        <div>
          <Link href={`/product/${product.id}`}>
            <p className="font-semibold text-sm transition-colors duration-200 hover:underline hover:text-orange-600">
              {truncate(product.name, strMaxLength)}
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-sm">
            <span className="text-purple-700 font-extrabold text-base">
              {displayPrice(parseFloat(product.nectarPrice.toString()))}
            </span>{" "}
            with Nectar
          </p>
          <p className="text-sm">
            <span className="font-extrabold text-xl">
              {displayPrice(parseFloat(product.price.toString()))}
            </span>{" "}
            {displayPrice(parseFloat(uPrice.toString()))} /{" "}
            {product.unit ? product.unit.name : "ea"}
          </p>
        </div>
        <div className="flex justify-end md:items-center md:justify-center w-full">
          <Button className="w-4/6 ">Add</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
