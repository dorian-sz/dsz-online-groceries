"use client";

import { Product } from "@/data/types";
import { useEffect, useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Separator } from "@/components/ui/separator";
import ProductInfo from "./productInfo";

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  const [description, setDescription] = useState<string[]>([]);
  const [origin, setOrigin] = useState<string[]>([]);
  const [storage, setStorage] = useState<string[]>([]);

  useEffect(() => {
    setDescription(product.description.split("  "));
    setOrigin(product.origin.split("  "));
    setStorage(product.storage.split("  "));
  }, []);
  return (
    <div className="flex flex-col gap-y-4 p-8 w-full bg-white">
      <ProductInfo title="Description" description={description} />
      <ProductInfo title="Country of Origin" description={origin} />
      <ProductInfo title="Storage" description={storage} />
    </div>
  );
};

export default ProductDescription;
