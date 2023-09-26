export interface Category {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Offer {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  nectarPrice: Number;
  price: Number;
  image: string;
  size: Number;
  amount: Number;
  description: string;
  origin: string;
  storage: string;
  createdAt: Date;
  updatedAt: Date;
  categories: Category[];
  offers: Offer[];
}
