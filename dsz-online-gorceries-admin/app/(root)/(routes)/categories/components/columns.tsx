"use client";

import { Category } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Actions from "./actions";

export const Columns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: "Category Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;
      return <Actions category={category} />;
    },
  },
];
