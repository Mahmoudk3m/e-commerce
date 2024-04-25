import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CartItemType } from "@/lib/types";
import { cookies } from "next/headers";
import { DeleteCartItem, UpdateCartItem } from "./buttons";

export default function CartItem({ cartItem }: { cartItem: CartItemType }) {
  const token = cookies().get("token")?.value || "";

  return (
    <li className="flex items-start ms:items-center flex-col sm:flex-row justify-between gap-4 w-full p-4 rounded-md transition-all hover:bg-grayer-100">
      <Link href="product-details" className="flex items-start justify-center gap-2 flex-1">
        <Image
          className="rounded-md w-[35px] object-cover shrink-0 overflow-hidden"
          src={
            cartItem.product.imageURL && cartItem.product.imageURL.startsWith("http")
              ? cartItem.product.imageURL
              : `/images/placeholder.svg`
          }
          alt="Product Thumb"
          width={35}
          height={35}
        />
        <div className="flex flex-col flex-1 gap-1">
          <h4>{cartItem.product.name}</h4>
          <div className="flex items-center justify-start gap-2">
            <b className="ltr">{cartItem.quantity}</b>
            <span className="text-xs text-gray-500">{cartItem.product.price}</span>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-4">
        <div className="flex shrink-0 items-center justify-center p-2 border border-1 border-gray-200 rounded-lg">
          <UpdateCartItem
            id={cartItem.id}
            productId={cartItem.product.id}
            quantity={cartItem.quantity + 1}
            token={token}
            symbol="+"
          />
          <div className="w-[50px] flex-1 text-center appearance-none bg-transparent">{cartItem.quantity}</div>
          <UpdateCartItem
            id={cartItem.id}
            productId={cartItem.product.id}
            quantity={cartItem.quantity - 1}
            token={token}
            symbol="-"
          />
        </div>
        <DeleteCartItem id={cartItem.id} token={token} />
      </div>
    </li>
  );
}
