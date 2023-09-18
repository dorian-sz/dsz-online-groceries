import OffersBoard from "@/components/offersBoard";
import { getProducts } from "@/data/products";

const OffersPage = async () => {
  const productsData = getProducts({ price: "2" });
  const [products] = await Promise.all([productsData]);
  console.log(products.length);
  return (
    <div>
      <OffersBoard />
      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
};

export default OffersPage;
