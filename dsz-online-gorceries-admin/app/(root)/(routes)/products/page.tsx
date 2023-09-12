import Heading from "@/components/heading";
import { DataTable } from "@/components/ui/data-table";
import { Columns } from "./components/columns";
import prismadb from "@/lib/prismadb";

const ProductsPage = async () => {
  const data = await prismadb.product.findMany({ include: { category: true } });
  console.log(data);
  return (
    <div className="flex flex-col gap-y-8">
      <Heading
        label="Add Product"
        title="Manage Productss"
        href="/products/new"
      />
      <DataTable searchKey="name" columns={Columns} data={data} />
    </div>
  );
};

export default ProductsPage;
