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
  price: Number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  categories: Category[];
  offers: Offer[];
}
