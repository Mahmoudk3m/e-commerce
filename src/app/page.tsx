import Image from "next/image";
export default function Home() {
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
              alt=""
            />
          </div>
          <div className="flex items-center justify-between gap-4 mb-4">
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
            <div className="flex flex-col gap-1 shrink-0 sm:min-w-[180px]">
              <label className="hidden">اختر تصنيف</label>
              <select
                id="categories"
                name="categories"
                className="bg-white border text-md rounded-md focus:ring-secondary-50 focus:border-secondary-50 block w-full px-2 py-1"
              >
                <option selected value="all">
                  الكل
                </option>
                <option value="cat_1">تصنيف ١</option>
                <option value="cat_2">تصنيف ٢</option>
                <option value="cat_3">تصنيف ٣</option>
                <option value="cat_4">تصنيف ٤</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4">
            <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
              <a href="product-details.html" className="block w-full relative mb-4">
                <Image
                  src="/images/products/01.png"
                  className="w-full aspect-4/3 object-cover rounded-lg"
                  alt="product"
                  width={300}
                  height={400}
                />
              </a>
              <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
                <div className="flex items-center justify-center flex-col gap-1">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max الاصدار الجديد</h2>
                  </a>
                  <small className="block text-xs w-full text-center">الاصدار الاحدث و الافضل حتى اليوم</small>
                </div>
                <div className="flex items-center justify-center flex-wrap gap-2 text-gray-300 w-full">
                  <a className="text-xs text-gray-500 underline" href="#">
                    تصنيف اول
                  </a>
                  <a className="text-xs text-gray-500 underline" href="#">
                    تصنيف ثاني
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                <span className="font-medium text-md">2,250.00 SAR</span>
                <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
              </div>
              <button type="button" className="w-full bg-primary text-white p-2 text-md rounded-md">
                إضافة للسلة
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
