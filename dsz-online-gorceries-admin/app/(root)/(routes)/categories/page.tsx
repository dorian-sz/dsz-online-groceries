import Heading from "@/components/heading";
import { DataTable } from "./components/data-table";
import { Columns } from "./components/columns";
import prismadb from "@/lib/prismadb";

const CategoriesPage = async () => {
  const data = await prismadb.category.findMany();

  return (
    <div className="flex flex-col gap-y-8">
      <Heading
        label="Add Category"
        title="Manage Categories"
        href="/categories/new"
      />
      <DataTable columns={Columns} data={data} />
    </div>
  );
};

export default CategoriesPage;
