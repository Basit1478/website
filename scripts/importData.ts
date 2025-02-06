import axios from 'axios';
import { Buffer } from 'buffer';
import client from '../sanityClient';
import slugify from 'slugify';

async function uploadImageToSanity(imageUrl: string): Promise<string | null> {
  try {
    const response = await axios.get<ArrayBuffer>(imageUrl, { responseType: 'arraybuffer', timeout: 10000 });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log('Image uploaded successfully:', asset);
    return asset._id;
  } catch (error) {
    console.error('❌ Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function createCategory(_category: { name: string }, counter: number): Promise<string | null> {
  // Implementation for creating a category in Sanity
  return null;
}

async function importData() {
  try {
    const response = await axios.get('https://hackathon-apis.vercel.app/api/products');
    const products = response.data as { name: string; image: string | null; category: { name: string } }[];
    let counter = 1;

    for (const product of products) {
      let imageRef: string | null = null;
      let catRef: string | null = null;

      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      if (product.category.name) {
        catRef = await createCategory(product.category, counter);
      }

      const slug = slugify(product.name, { lower: true });

      // ...existing code...
    }
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

importData();