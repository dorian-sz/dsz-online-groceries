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
import { Category, Offer, Product } from "@prisma/client";
import { useForm } from "react-hook-form";
import FormSelect from "./form-select";

const formSchema = z.object({
  name: z.string().min(1),
  price: z.coerce.number().refine((value) => value.toFixed(2)),
  nectarPrice: z.coerce
    .number()
    .refine((value) => value.toFixed(2))
    .nullable(),
  categories: z.object({ id: z.string() }).array(),
  offers: z.object({ id: z.string() }).array(),
  image: z.string().min(1),
  size: z.coerce
    .number()
    .refine((value) => value.toFixed(3))
    .nullable(),
  amount: z.number().nullable(),
  description: z.string().min(1),
  origin: z.string().min(1),
  storage: z.string(),
});

interface ProductFormProps {
  initialData: Product | null;
  categories: Category[];
  offers: Offer[];
}

const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  categories,
  offers,
}) => {
  const router = useRouter();
  const title = initialData === null ? "Add Product" : "Update Product";
  const label = initialData === null ? "Add" : "Update";
  const upload = initialData === null ? "Upload image" : "Change image";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
          ...initialData,
          price: Number(initialData.price),
          nectarPrice: Number(initialData.nectarPrice),
          size: Number(initialData.size),
        }
      : {
          name: "",
          price: 0.0,
          nectarPrice: null,
          categories: [],
          offers: [],
          image: "",
          size: null,
          amount: null,
          description: "",
          origin: "",
          storage: "",
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
              name="nectarPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Nectar price
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Nectar price"
                      {...field}
                      value={field.value !== null ? String(field.value) : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormSelect
                  field={field}
                  selectArr={categories}
                  label="Select Category"
                  searchLabel="Search category..."
                />
              )}
            />

            <FormField
              control={form.control}
              name="offers"
              render={({ field }) => (
                <FormSelect
                  field={field}
                  selectArr={offers}
                  label="Select Offer"
                  searchLabel="Search offer..."
                />
              )}
            />
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">Size</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Size"
                      {...field}
                      value={field.value !== null ? String(field.value) : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Amount in packaging
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Amount"
                      {...field}
                      value={field.value !== null ? String(field.value) : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Product description
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Product description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="origin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Product origin
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Product origin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="storage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Storage instructions
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Storage instructions" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
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
