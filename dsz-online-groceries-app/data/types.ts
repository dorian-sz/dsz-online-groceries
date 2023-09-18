export interface Category {
  id: string;
  name: string;
}

export interface Subcategory {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: Category;
  subcategory: Subcategory;
  image: string;
}
