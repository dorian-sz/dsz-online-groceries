import OffersBoard from "@/components/offersBoard";
import { getOffers } from "@/data/offers";
import { getProducts } from "@/data/products";
import { Offer, Product } from "@/data/types";

const OffersPage = async () => {
  const products: Product[] = await getProducts({ price: "2" });
  const offers: Offer[] = await getOffers();

  return (
    <div>
      <OffersBoard offers={offers} />
      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
};

export default OffersPage;
