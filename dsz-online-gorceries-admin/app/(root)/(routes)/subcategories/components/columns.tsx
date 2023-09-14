"use client";

import { Subcategory } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Actions from "./actions";

export const Columns: ColumnDef<Subcategory>[] = [
  {
    accessorKey: "name",
    header: "Subcategory Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const subcategory = row.original;
      return <Actions subcategory={subcategory} />;
    },
  },
];
