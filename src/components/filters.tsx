import React from "react";

export default function Filters() {
  return (
    <div className="flex flex-col gap-1 shrink-0 sm:min-w-[180px]">
      <label className="hidden">اختر تصنيف</label>
      <select
        id="categories"
        name="categories"
        className="bg-white border text-md rounded-md focus:ring-secondary-50 focus:border-secondary-50 block w-full px-2 py-1"
        defaultValue={"all"}
      >
        <option value="all">الكل</option>
        <option value="cat_1">تصنيف ١</option>
        <option value="cat_2">تصنيف ٢</option>
        <option value="cat_3">تصنيف ٣</option>
        <option value="cat_4">تصنيف ٤</option>
      </select>
    </div>
  );
}
