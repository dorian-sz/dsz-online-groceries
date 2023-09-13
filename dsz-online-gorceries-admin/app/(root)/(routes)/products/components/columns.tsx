"use client";

import { ColumnDef } from "@tanstack/react-table";
import Actions from "./actions";

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  category: string;
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
    accessorKey: "category",
    header: "Category",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      return <Actions product={product} />;
    },
  },
];
