import React, { Suspense } from "react";
import Product from "./product";
import { getProducts } from "@/lib/actions";
import { ProductType } from "@/lib/types";
import PaginationItem from "../paginationItem";

export default async function Products({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const products = await getProducts();
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const numberOfProducts = query
    ? products.filter(
        (product: ProductType) => product.name && product.name.toLowerCase().includes(query.toLowerCase())
      ).length
    : products.length;

  const totalPages = Math.ceil(numberOfProducts / 8);
  return (
    <div>
      <Suspense key={query + currentPage}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products
            .filter((product: ProductType) => product.name && product.name.toLowerCase().includes(query.toLowerCase()))
            .slice((currentPage - 1) * 8, currentPage * 8)
            .map((product: ProductType) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </Suspense>
      <PaginationItem totalPages={totalPages} />
    </div>
  );
}
