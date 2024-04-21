import React from "react";
import Product from "./product";

const products = [
  {
    categoryId: 1,
    description: "الاصدار الاحدث و الافضل حتى اليوم",
    id: 1,
    imageURL: "/images/products/01.png",
    name: "سماعات apple AirPods Max الاصدار الجديد",
    price: 2250.0
  }
];

export default function Products() {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
