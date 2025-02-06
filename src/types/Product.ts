export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  description: string;
  imageUrl: string;
  category?: { title: string };
  quantity?: number;
  tags?: string[];
  features?: string[];
  dimensions?: {
    height: string;
    width: string;
    depth: string;
  };
}
