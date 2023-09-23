interface OfferCardProps {
  name: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ name }) => {
  return (
    <div className="flex rounded-3xl font-bold bg-zinc-100 text-md py-2 px-4 cursor-pointer hover:bg-zinc-200">
      <p>{name}</p>
    </div>
  );
};

export default OfferCard;
