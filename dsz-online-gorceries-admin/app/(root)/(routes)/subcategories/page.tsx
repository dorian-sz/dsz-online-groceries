import prismadb from "@/lib/prismadb";
import Heading from "@/components/heading";
import { DataTable } from "@/components/ui/data-table";
import { Columns } from "./components/columns";

const SubcategoriesPage = async () => {
  const data = await prismadb.subcategory.findMany();

  return (
    <div className="flex flex-col gap-y-8">
      <Heading
        label="Add Subcategory"
        title="Manage Subcategory"
        href="/subcategories/new"
      />
      <DataTable searchKey="name" columns={Columns} data={data} />
    </div>
  );
};

export default SubcategoriesPage;
