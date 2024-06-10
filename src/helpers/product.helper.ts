// interfaz de producto
import { IProduct } from "../Interfaces/index";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB() {
  try {
    const res = await fetch(`${apiUrl}/products`, {
      method: "GET",
      // cache: "no-cache"
      next: { revalidate: 15 },
    });
    const products: IProduct[] = await res.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductById(id: string) {
  try {
    const products = await getProductsDB();
    const product = products.find((p) => p.id.toString() === id);
    if (!product) throw new Error("Product not found");
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}
