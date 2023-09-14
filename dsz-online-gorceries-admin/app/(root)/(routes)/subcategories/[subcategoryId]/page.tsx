import prismadb from "@/lib/prismadb";
import SubcategoryForm from "./components/form";

const SubcategoryPage = async ({
  params,
}: {
  params: { subcategoryId: string };
}) => {
  const subcategory = await prismadb.subcategory.findUnique({
    where: {
      id: params.subcategoryId,
    },
  });

  return (
    <div className="flex justify-center flex-col gap-y-8">
      <SubcategoryForm initialData={subcategory} />
    </div>
  );
};

export default SubcategoryPage;
