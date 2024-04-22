"use server";

export async function getProducts() {
  const res = await fetch(`${process.env.BASE_URL}/product/`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
