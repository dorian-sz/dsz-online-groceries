"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Subcategory } from "@prisma/client";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(1, { message: "Enter the category name" }),
});

interface SubcategoryFormProps {
  initialData: Subcategory | null;
}

const SubcategoryForm: React.FC<SubcategoryFormProps> = ({ initialData }) => {
  const router = useRouter();

  const title = initialData === null ? "Add Subcategory" : "Update Subcategory";
  const label = initialData === null ? "Add" : "Update";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? initialData
      : {
          name: "",
        },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    initialData
      ? await axios
          .patch(`/api/subcategories/${initialData?.id}`, values)
          .then((response) => {
            console.log(response.status, response.data);
          })
      : await axios.post(`/api/subcategories`, values).then((response) => {
          console.log(response.status, response.data);
        });
    router.refresh();
    router.push("/subcategories");
  };

  return (
    <>
      <div>
        <p className="font-bold text-2xl">{title}</p>
      </div>
      <Separator />
      <div className="w-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Subcategory name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Subcategory name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">{label}</Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default SubcategoryForm;
