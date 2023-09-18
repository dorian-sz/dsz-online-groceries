import Heading from "@/components/heading";
import { DataTable } from "@/components/ui/data-table";
import { Columns } from "./components/columns";
import prismadb from "@/lib/prismadb";

const OffersPage = async () => {
  const data = await prismadb.offer.findMany();

  return (
    <div className="flex flex-col gap-y-8">
      <Heading label="Add Offer" title="Manage Offers" href="/offers/new" />
      <DataTable searchKey="name" columns={Columns} data={data} />
    </div>
  );
};

export default OffersPage;
