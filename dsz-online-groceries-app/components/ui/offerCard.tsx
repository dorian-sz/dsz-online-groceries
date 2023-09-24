import Link from "next/link";

interface OfferCardProps {
  id: string;
  name: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ id, name }) => {
  return (
    <div className="flex rounded-3xl font-bold bg-zinc-100 text-md py-2 px-4 cursor-pointer hover:bg-zinc-200">
      <Link href={`/offers/${id}`}>
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default OfferCard;
