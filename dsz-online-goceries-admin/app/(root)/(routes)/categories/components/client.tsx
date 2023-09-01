"use client";

import { useParams, useRouter } from "next/navigation";

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { Category } from "@prisma/client";
import { CategoryColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface CategoryClientProps {
  data: CategoryColumn[];
}

const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between gap-y-4">
        <Heading title="Categories" description="Manage product categories." />
        <Button onClick={() => router.push(`/categories/new`)}>
          <Plus />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
    </div>
  );
};

export default CategoryClient;
