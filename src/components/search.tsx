import React from "react";

export default function Search() {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <label className="hidden">ابحث عن منتج</label>
      <input
        type="text"
        id="product_query"
        name="product_query"
        className="w-full p-2 bg-white appearance-none rounded-md border text-md"
        placeholder="ادخل اسم المنتج..."
      />
    </div>
  );
}
