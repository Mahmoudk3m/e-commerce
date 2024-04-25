import { CartItemType, ProductType } from "@/lib/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cookies } from "next/headers";
import { UpdateCart, addToCart, getCartItems } from "@/lib/actions";

export default async function Product({ product }: { product: ProductType }) {
  const token = cookies().get("token")?.value || "";

  const addToCartWithData = addToCart.bind(null, product.id, product.id, 1, token);

  const cart = await getCartItems(token);
  const cartItems = cart.cartItems;
  const item = cartItems.find((item: CartItemType) => item.product.id === product.id);

  const updateCartWithData = item && UpdateCart.bind(null, item.id, item.product.id, item.quantity + 1, token);

  return (
    <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
      <Link href="#" className="block w-full relative mb-4">
        <Image
          //check first if src has a https
          src={product.imageURL && product.imageURL.startsWith("http") ? product.imageURL : `/images/placeholder.svg`}
          className="w-full aspect-4/3 object-cover rounded-lg"
          alt="product"
          width={300}
          height={400}
        />
      </Link>
      <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
        <div className="flex items-center justify-center flex-col gap-1">
          <Link href="#" className="block w-full text-primary text-center">
            <h2 className="text-sm">{product.name}</h2>
          </Link>
          <small className="block text-xs w-full text-center">{product.description}</small>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
        <span className="font-medium text-md">{`${product.price} SAR`}</span>
      </div>
      <form action={item ? updateCartWithData : addToCartWithData}>
        <button type="submit" className="w-full bg-primary text-white p-2 text-md rounded-md">
          إضافة للسلة
        </button>
      </form>
    </div>
  );
}
