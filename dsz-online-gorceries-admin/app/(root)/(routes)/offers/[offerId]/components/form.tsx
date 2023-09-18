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
import { Offer } from "@prisma/client";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(1, { message: "Enter the offer name" }),
});

interface OfferFormProps {
  initialData: Offer | null;
}

const OfferForm: React.FC<OfferFormProps> = ({ initialData }) => {
  const router = useRouter();

  const title = initialData === null ? "Add Offer" : "Update Offer";
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
          .patch(`/api/offers/${initialData?.id}`, values)
          .then((response) => {
            console.log(response.status, response.data);
          })
      : await axios.post(`/api/offers`, values).then((response) => {
          console.log(response.status, response.data);
        });
    router.refresh();
    router.push("/offers");
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
                    Offer name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Offer name" {...field} />
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

export default OfferForm;
