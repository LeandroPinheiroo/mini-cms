export class Category {
  id: number;
  name: string;
  description: string;
}
export class Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  category_id: number;
}