"use client";

import { Offer } from "@/data/types";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import OfferCard from "@/components/ui/offerCard";

interface OffersBoardProps {
  offers: Offer[];
}

const OffersBoard: React.FC<OffersBoardProps> = ({ offers }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full items-center p-6 justify-center gap-y-8 bg-white">
      <p className="text-4xl font-extrabold">Offers</p>
      <div className="flex gap-4 flex-wrap justify-center items-center mx-auto w-3/4">
        {offers.map((offer) => (
          <OfferCard {...offer} />
        ))}
      </div>
    </div>
  );
};

export default OffersBoard;
