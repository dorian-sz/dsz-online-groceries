"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";

const OffersBoard = () => {
    const pathname = usePathname()
    const offers = useMemo(()=>[
        {
            label: "£1 & under"
        }
    ],[pathname])

  return (
    <div className="flex flex-col w-full items-center p-4 justify-center bg-white">
      <p className="text-4xl font-extrabold">Offers</p>
    </div>
  );
};

export default OffersBoard;
