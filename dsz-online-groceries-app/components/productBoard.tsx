"use client";

import { Product } from "@/data/types";
import { CldImage } from "next-cloudinary";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { displayPrice, unitPrice } from "@/app/helpers/priceFomat";

interface ProudctBoardProps {
  product: Product;
}

const ProductBoard: React.FC<ProudctBoardProps> = ({ product }) => {
  const [description, setDescription] = useState<string[]>([]);
  const [uPrice, setUPrice] = useState<number>(0);
  useEffect(() => {
    setDescription(product.description.split("  "));
    setUPrice(unitPrice(product.price, product.size, product.unit.factor));
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-2 md:p-8 justify-center items-center md:items-start w-full bg-white">
      <div className="flex flex-col gap-y-4">
        <CldImage
          width={300}
          height={300}
          alt="uploadImagePreview"
          src={product.image}
        />
        <CldImage
          className="border border-orange-500 cursor-pointer"
          width={50}
          height={50}
          alt="uploadImagePreview"
          src={product.image}
        />
      </div>
      <div className="flex flex-col gap-y-8 w-full h-full justify-between">
        <div className="text-xl md:text-4xl font-extrabold">
          <p>{product.name}</p>
        </div>
        <div>
          <p className="text-sm">{description[0]}</p>
        </div>
        <div className="flex flex-row w-full justify-between md:flex-col gap-4">
          <div className="flex flex-col">
            {product.nectarPrice && (
              <p className="text-sm">
                <span className="text-lg md:text-xl font-extrabold text-purple-800">
                  {displayPrice(parseFloat(product.nectarPrice.toString()))}
                </span>
                &#160; with Nectar
              </p>
            )}

            <p className="text-sm">
              <span className="text-2xl md:text-3xl font-extrabold">
                {displayPrice(parseFloat(product.price.toString()))}
              </span>{" "}
              {displayPrice(parseFloat(uPrice.toString()))} /{" "}
              {product.unit ? product.unit.name : "ea"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-end md:items-start">
            <Button className="w-36 py-2 font-bold text-lg">Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBoard;
