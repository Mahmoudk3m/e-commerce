"use client";
import { UpdateCart, addToCart } from "@/lib/actions";
import { CartItemType, ProductType } from "@/lib/types";
import Link from "next/link";
import React, { useState } from "react";

export default function CounterButton({
  product,
  item,
  token
}: {
  product: ProductType;
  item?: CartItemType;
  token: string;
}) {
  const [count, setCount] = useState(1);

  const addToCartWithData = addToCart.bind(null, product.id, product.id, count, token);

  const updateCartWithData = item && UpdateCart.bind(null, item.id, item.product.id, item.quantity + count, token);

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex shrink-0 items-center justify-center p-2 border border-1 border-gray-200 rounded-lg">
        <button className="shrink-0 px-2 text-md text-gray-500" onClick={() => setCount((prev) => prev + 1)}>
          +
        </button>
        <div className="w-[50px] flex-1 text-center appearance-none bg-transparent">{count}</div>
        <button
          className="shrink-0 px-2 text-md text-gray-500"
          disabled={count <= 1}
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
      </div>
      {token ? (
        <form className="w-full" action={item ? updateCartWithData : addToCartWithData}>
          <button type="submit" className="w-full h-[42px] bg-primary text-white flex-1 p-2 text-md rounded-md">
            إضافة للسلة
          </button>
        </form>
      ) : (
        <Link
          className="flex flex-row justify-center items-center w-full h-[42px] bg-primary text-white flex-1 p-2 text-md rounded-md"
          href={"/login"}
        >
          إضافة للسلة
        </Link>
      )}
    </div>
  );
}
