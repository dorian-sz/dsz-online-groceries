"use client";

import { Button } from "@/components/ui/button";
import { Offer } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ActionsProps {
  offer: Offer;
}

const Actions: React.FC<ActionsProps> = ({ offer }) => {
  const router = useRouter();

  const onDelete = async () => {
    await axios.delete(`/api/offers/${offer.id}`);
    router.refresh();
  };

  return (
    <div className="text-right space-x-8">
      <Button variant={"outline"}>
        <Link href={`/offers/${offer.id}`}>Update</Link>
      </Button>
      <Button variant={"destructive"} onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

export default Actions;
