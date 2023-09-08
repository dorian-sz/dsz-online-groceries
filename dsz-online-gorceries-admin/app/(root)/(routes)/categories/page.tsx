import Link from "next/link";

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";

const CategoriesPage = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <Heading
        label="Add Category"
        title="Manage Categories"
        href="/categories/new"
      />
    </div>
  );
};

export default CategoriesPage;
