import axios from "axios";
import { Offer } from "@/data/types";

export const getOffers = async (): Promise<Offer[]> => {
  const data = await axios.get<Offer[]>("http://localhost:3000/api/offers");
  return data.data;
};
