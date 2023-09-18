"use client";

import { Offer } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Actions from "./actions";

export const Columns: ColumnDef<Offer>[] = [
  {
    accessorKey: "name",
    header: "Offer Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const offer = row.original;
      return <Actions offer={offer} />;
    },
  },
];
