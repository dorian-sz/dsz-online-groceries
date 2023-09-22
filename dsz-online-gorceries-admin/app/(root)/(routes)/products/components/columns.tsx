"use client";

import { ColumnDef } from "@tanstack/react-table";
import Actions from "./actions";
import { Category } from "@prisma/client";

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  categories: string[];
};

export const Columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "categories",
    header: "Categories",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      return <Actions product={product} />;
    },
  },
];
