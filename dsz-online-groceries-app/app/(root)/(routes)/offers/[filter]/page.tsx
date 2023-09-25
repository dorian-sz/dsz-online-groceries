import { HiChevronLeft } from "react-icons/hi";
import OffersBoard from "@/components/offersBoard";
import { getOffers } from "@/data/offers";
import { getProducts } from "@/data/products";
import { Offer, Product } from "@/data/types";
import Link from "next/link";
import FilteredOffersContainer from "@/components/filteredOffers";

interface FilteredOffersPageProps {
  params: {
    filter: string;
  };
}

const FilteredOffersPage: React.FC<FilteredOffersPageProps> = async ({
  params,
}) => {
  const offers: Offer[] = await getOffers();

  const products: Product[] = await getProducts({ offer: params.filter });
  return (
    <div className="flex flex-col gap-y-4">
      <div className="px-2">
        <div>
          <Link href={"/offers"}>
            <p className="flex items-center font-bold underline hover:no-underline">
              <HiChevronLeft />
              Back to offers home page
            </p>
          </Link>
        </div>
      </div>
      <OffersBoard offers={offers} />
      <FilteredOffersContainer products={products} />
    </div>
  );
};

export default FilteredOffersPage;
