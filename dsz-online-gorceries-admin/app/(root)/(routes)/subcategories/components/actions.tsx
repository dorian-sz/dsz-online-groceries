"use client";

import { Button } from "@/components/ui/button";
import { Subcategory } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ActionsProps {
  subcategory: Subcategory;
}

const Actions: React.FC<ActionsProps> = ({ subcategory }) => {
  const router = useRouter();

  const onDelete = async () => {
    await axios.delete(`/api/subcategories/${subcategory.id}`);
    router.refresh();
  };

  return (
    <div className="text-right space-x-8">
      <Button variant={"outline"}>
        <Link href={`/subcategories/${subcategory.id}`}>Update</Link>
      </Button>
      <Button variant={"destructive"} onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

export default Actions;
