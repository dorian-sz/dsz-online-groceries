"use client";

import { Button } from "@/components/ui/button";
import { Category } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ActionsProps {
  category: Category;
}

const Actions: React.FC<ActionsProps> = ({ category }) => {
  const router = useRouter();

  const onDelete = async () => {
    await axios.delete(`/api/categories/${category.id}`);
    router.refresh();
  };

  return (
    <div className="text-right space-x-8">
      <Button variant={"outline"}>
        <Link href={`/categories/${category.id}`}>Update</Link>
      </Button>
      <Button variant={"destructive"} onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

export default Actions;
