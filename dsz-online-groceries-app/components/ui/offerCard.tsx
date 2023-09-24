import { cn } from "@/lib/utils";
import Link from "next/link";

interface OfferCardProps {
  id: string;
  name: string;
  active: boolean;
}

const OfferCard: React.FC<OfferCardProps> = ({ id, name, active }) => {
  return (
    <div
      className={cn(
        "flex-shrink-0 w-fit rounded-3xl font-bold  text-md py-2 px-4 cursor-pointer ",
        active ? "bg-pink-900 text-white" : "bg-zinc-100 hover:bg-zinc-200"
      )}
    >
      <Link href={`/offers/${id}`}>
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default OfferCard;
