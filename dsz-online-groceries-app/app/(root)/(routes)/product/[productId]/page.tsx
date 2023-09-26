import ProductBoard from "@/components/productBoard";
import ProductDescription from "@/components/productDescription";
import { getProduct } from "@/data/products";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  return (
    <div className="flex gap-y-8 flex-col w-full">
      <ProductBoard product={product} />
      <ProductDescription product={product} />
    </div>
  );
};

export default ProductPage;
