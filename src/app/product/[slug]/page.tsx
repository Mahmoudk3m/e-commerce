import CounterButton from "@/components/products/counterButton";
import { getCartItems, getProducts } from "@/lib/actions";
import { CartItemType, ProductType } from "@/lib/types";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

export default async function Page({ params }: { params: { slug: number } }) {
  const token = cookies().get("token")?.value || "";

  const id = Number(params.slug);
  const products = await getProducts();
  const product = products.find((product: ProductType) => product.id === id);

  const cart = token && (await getCartItems(token));
  const cartItems = cart?.cartItems;
  const item = cartItems?.find((item: CartItemType) => item.product.id === product.id);

  return (
    <main className="w-full main flex-auto">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            <Image
              src={
                product.imageURL && product.imageURL.startsWith("http") ? product.imageURL : `/images/placeholder.svg`
              }
              className="w-full aspect-4/3 object-cover rounded-lg"
              alt="product"
              width={300}
              height={400}
            />
            <div className="flex flex-col gap-4 col-span-2">
              <article className="text-sm text-darker-300 leading-[1.8] ">
                <div className="flx flex-col mb-6 gap-2">
                  <h1 className="text-xl md:text-3xl">{product.name}</h1>
                  <small className="text-xs text-gray-500">الاصدار الاحدث و الافضل حتى اليوم</small>
                </div>
                <div className="flex flex-col sm:flex-row w-full my-4 gap-0 sm:gap-2">
                  <span className="font-medium text-md">{product.price} SAR</span>
                  <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
                </div>
                <p>{product.description}</p>
              </article>
              <CounterButton product={product} item={item} token={token} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
