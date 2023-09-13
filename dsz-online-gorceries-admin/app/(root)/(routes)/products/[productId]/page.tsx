import prismadb from "@/lib/prismadb";
import ProductForm from "./components/form";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      category: true,
    },
  });

  const categories = await prismadb.category.findMany();

  return (
    <div className="flex justify-center flex-col gap-y-8">
      <ProductForm initialData={product} categories={categories} />
    </div>
  );
};

export default ProductPage;
