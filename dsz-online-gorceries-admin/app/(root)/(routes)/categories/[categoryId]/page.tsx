import prismadb from "@/lib/prismadb";
import CategoryForm from "./components/form";

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  return (
    <div className="flex justify-center flex-col gap-y-8">
      <CategoryForm initialData={category} />
    </div>
  );
};

export default CategoryPage;
