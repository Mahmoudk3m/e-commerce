"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function PaginationItem({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-row justify-center items-center gap-8">
      <PaginationArrow
        direction="left"
        currentPage={currentPage}
        totalPages={totalPages}
        href={createPageURL(currentPage + 1)}
      />
      <span>
        {currentPage}/{totalPages}
      </span>
      <PaginationArrow
        direction="right"
        currentPage={currentPage}
        totalPages={totalPages}
        href={createPageURL(currentPage - 1)}
      />
    </div>
  );
}

function PaginationArrow({
  direction,
  currentPage,
  totalPages,
  href
}: {
  direction: "left" | "right";
  currentPage: number;
  totalPages: number;
  href: string;
}) {
  const isDisabled = direction === "right" ? currentPage === 1 : currentPage === totalPages;
  return (
    <Link
      className={`bg-secondary-50 text-primary w-8 h-8 rounded-md flex items-center justify-center ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      href={href}
    >
      {direction === "left" ? "<" : ">"}
    </Link>
  );
}
