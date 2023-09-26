import axios from "axios";
import { Product } from "@/data/types";

export const getProducts = async (query: {
  [key: string]: string;
}): Promise<Product[]> => {
  const data = await axios.get<Product[]>(
    "http://localhost:3000/api/products",
    { params: query }
  );
  return data.data;
};

export const getProduct = async (id: string): Promise<Product> => {
  const data = await axios.get<Product>(
    `http://localhost:3000/api/products/${id}`
  );
  return data.data;
};
