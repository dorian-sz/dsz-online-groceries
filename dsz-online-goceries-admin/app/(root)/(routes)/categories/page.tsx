import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import CategoryClient from "./components/client";
import { CategoryColumn } from "./components/columns";

const CategoriesPage = async () => {
  const categories = await prismadb.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    createdAt: format(item.createdAt, "MMM do, yyyy"),
  }));
  return (
    <div className="flex flex-col">
      <CategoryClient data={formattedCategories} />
    </div>
  );
};

export default CategoriesPage;
