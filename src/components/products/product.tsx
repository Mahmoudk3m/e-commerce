import { ProductType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product({ product }: { product: ProductType }) {
  return (
    <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
      <Link href="#" className="block w-full relative mb-4">
        <Image
          src={product.imageURL}
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
      <button type="button" className="w-full bg-primary text-white p-2 text-md rounded-md">
        إضافة للسلة
      </button>
    </div>
  );
}