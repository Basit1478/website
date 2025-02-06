import { sanityClient } from "@/sanity/lib/sanity";
import { Product } from "@/types/Product";

export const getProductBySlug = async (slug: string): Promise<Product | null> => {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    price,
    description,
    "imageUrl": image.asset->url,
    category-> { title },
    quantity,
    tags,
    features,
    dimensions
  }`;
  return await sanityClient.fetch(query, { slug });
};
