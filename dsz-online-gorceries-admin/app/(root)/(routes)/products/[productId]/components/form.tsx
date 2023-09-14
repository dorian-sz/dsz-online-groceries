"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { CldUploadWidget, CldImage } from "next-cloudinary";

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
import { Category, Product, Subcategory } from "@prisma/client";
import { useForm } from "react-hook-form";
import FormSelect from "./form-select";

const formSchema = z.object({
  name: z.string().min(1),
  price: z.coerce.number(),
  categoryId: z.string(),
  subcategoryId: z.string(),
  image: z.string().min(1),
});

interface ProductFormProps {
  initialData: Product | null;
  categories: Category[];
  subcategories: Subcategory[];
}

const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  categories,
  subcategories,
}) => {
  const router = useRouter();
  const title = initialData === null ? "Add Product" : "Update Product";
  const label = initialData === null ? "Add" : "Update";
  const upload = initialData === null ? "Upload image" : "Change image";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? { ...initialData, price: Number(initialData.price) }
      : {
          name: "",
          price: 0,
          categoryId: "Select a category",
          subcategoryId: "Select a category",
          image: "",
        },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    initialData
      ? await axios
          .patch(`/api/products/${initialData?.id}`, values)
          .then((response) => {
            console.log(response.status, response.data);
          })
      : await axios.post(`/api/products`, values).then((response) => {
          console.log(response.status, response.data);
        });
    router.push("/products");
    router.refresh();
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
                    Product name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormSelect
                  field={field}
                  selectArr={categories}
                  label="Select Category"
                />
              )}
            />
            <FormField
              control={form.control}
              name="subcategoryId"
              render={({ field }) => (
                <FormSelect
                  field={field}
                  selectArr={subcategories}
                  label="Select Subcategory"
                />
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <div>
                    {field.value && (
                      <CldImage
                        className="rounded-sm"
                        width={180}
                        height={150}
                        alt="uploadImagePreview"
                        src={field.value}
                      />
                    )}
                  </div>
                  <FormControl>
                    <CldUploadWidget
                      onUpload={(result: any) => {
                        field.onChange(result.info.secure_url);
                      }}
                      uploadPreset="dsz-groceries"
                    >
                      {({ open }) => {
                        function handleOnClick(e: any) {
                          e.preventDefault();
                          open();
                        }
                        return (
                          <Button variant={"outline"} onClick={handleOnClick}>
                            {upload}
                          </Button>
                        );
                      }}
                    </CldUploadWidget>
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

export default ProductForm;
