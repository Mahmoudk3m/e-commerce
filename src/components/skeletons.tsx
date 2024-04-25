const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative`}
    >
      <div className="block w-full relative mb-4 bg-gray-200">
        <div className="bg-gray-200 aspect-4/3 object-cover rounded-lg w-[300px] h-[400px]" />
        <div className="bg-gray-200 w-full flex flex-col flex-1 items-start justify-start gap-4">
          <div className="bg-gray-200 flex items-center justify-center flex-col gap-1">
            <div className="bg-gray-200 block w-full text-primary text-center">
              <div className="bg-gray-200 text-sm" />
            </div>
            <small className="bg-gray-200 block text-xs w-full text-center" />
          </div>
        </div>
        <div className="bg-gray-200 flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
          <span className="bg-gray-200 font-medium text-md" />
        </div>
        <button className="w-full bg-primary text-white p-2 text-md rounded-md">إضافة للسلة</button>
      </div>
    </div>
  );
}
