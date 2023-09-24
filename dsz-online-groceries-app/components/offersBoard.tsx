"use client";

import { Offer } from "@/data/types";
import OfferCard from "@/components/ui/offerCard";
import { useParams } from "next/navigation";

interface OffersBoardProps {
  offers: Offer[];
}

const OffersBoard: React.FC<OffersBoardProps> = ({ offers }) => {
  const params = useParams();

  return (
    <div className="flex flex-col items-center py-4 w-11/12 mx-auto justify-center gap-y-8 bg-white md:p-6 md:w-full">
      <p className="text-4xl font-extrabold">Offers</p>
      <div className="flex gap-4 w-full overflow-x-auto items-center md:justify-center md:mx-auto  md:flex-wrap md:w-3/4">
        {offers.map((offer) => (
          <OfferCard {...offer} active={offer.id === params.filter} />
        ))}
      </div>
    </div>
  );
};

export default OffersBoard;
