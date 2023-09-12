"use client";

import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Actions from "./actions";

export const Columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "category.name",
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
