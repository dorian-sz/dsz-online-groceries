import Heading from "@/components/heading";
import { DataTable } from "@/components/ui/data-table";
import { Columns } from "./components/columns";
import prismadb from "@/lib/prismadb";

const ProductsPage = async () => {
  const products = await prismadb.product.findMany({
    include: { category: true },
  });
  const data = products.map((product) => ({
    ...product,
    price: parseFloat(product.price.toFixed(2)).toString(),
    category: product.category.name,
  }));

  return (
    <div className="flex flex-col gap-y-8">
      <Heading
        label="Add Product"
        title="Manage Products"
        href="/products/new"
      />
      <DataTable searchKey="name" columns={Columns} data={data} />
    </div>
  );
};

export default ProductsPage;
