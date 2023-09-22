import prismadb from "@/lib/prismadb";
import ProductForm from "./components/form";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      categories: true,
      offers: true,
    },
  });

  const categories = await prismadb.category.findMany();
  const offers = await prismadb.offer.findMany();

  return (
    <div className="flex justify-center flex-col gap-y-8">
      <ProductForm
        initialData={product}
        categories={categories}
        offers={offers}
      />
    </div>
  );
};

export default ProductPage;
