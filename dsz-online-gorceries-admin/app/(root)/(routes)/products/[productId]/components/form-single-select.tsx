"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category, Product, Unit } from "@prisma/client";
import React from "react";

interface SelectFormProps {
  field: any;
  selectArr: Unit[] | Product[] | Category[];
  label: string;
}

const SelectForm: React.FC<SelectFormProps> = ({ field, selectArr, label }) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select a unit" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {selectArr.map((select) => (
            <SelectItem key={select.id} value={select.id}>
              {select.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormItem>
  );
};

export default SelectForm;
