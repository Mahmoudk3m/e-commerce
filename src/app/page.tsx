// import Filters from "@/components/filters";
import Products from "@/components/products/products";
import Search from "@/components/search";
import Image from "next/image";

export const metadata = {
  name: "home",
  title: "Home",
  description: "Home page"
};

export default function Page({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  return (
    <main className="w-full main flex-auto">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          <div className="w-full  bg-gray-100 rounded-lg mb-8">
            <Image
              width={1920}
              height={1080}
              src="/images/main-slider/01.png"
              className="w-full aspect-video rounded-lg"
              alt="main image"
            />
          </div>
          <div className="flex items-center justify-between gap-4 mb-4">
            <Search />
          </div>
          <Products searchParams={searchParams} />
        </div>
      </div>
    </main>
  );
}
