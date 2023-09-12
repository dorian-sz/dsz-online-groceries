"use client";

import { Button } from "@/components/ui/button";
import { Category, Product } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ActionsProps {
  product: Product;
}

const Actions: React.FC<ActionsProps> = ({ product }) => {
  const router = useRouter();

  const onDelete = async () => {
    await axios.delete(`/api/products/${product.id}`);
    router.refresh();
  };

  return (
    <div className="text-right space-x-8">
      <Button variant={"outline"}>
        <Link href={`/products/${product.id}`}>Update</Link>
      </Button>
      <Button variant={"destructive"} onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

export default Actions;
