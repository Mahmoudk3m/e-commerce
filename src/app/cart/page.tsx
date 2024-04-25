import CartItem from "@/components/cart/cartItem";
import { getCartItems } from "@/lib/actions";
import { CartItemType } from "@/lib/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  name: "cart",
  title: "Cart",
  description: "Cart page"
};

export default async function Page() {
  const token = cookies().get("token");
  const data = await getCartItems(token?.value || "");

  if (!token) {
    redirect("/login");
  }
  return (
    <main className="w-full flex-auto">
      <div className="container">
        <div className="p-4 bg-white rounded-lg shadow-4xl">
          <div className="flex flex-col mb-6">
            <h2 className="text-lg flex items-center justify-start gap-2">سلة المشتريات</h2>
          </div>
          <ul className="flex flex-col">
            {data.cartItems.length > 0 &&
              data.cartItems.map((cartItem: CartItemType) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
            {data.cartItems.length === 0 && (
              <li className="flex items-center justify-center h-32">
                <span className="text-4xl">لا يوجد منتجات في السلة</span>
              </li>
            )}
          </ul>
          {data.cartItems.length > 0 && (
            <div className="flex items-center justify-between px-4 py-8 border-gray-100 border-t border-b-1">
              <h3 className="font-bold text-xl">اجمالي السلة</h3>
              <span className="text-xl font-bold">{data.totalCost || 0}</span>
            </div>
          )}
          {data.cartItems.length > 0 && (
            <button
              type="button"
              className={`w-full bg-primary text-white p-3 text-md rounded-md ${
                data.cartItems.length === 0 ? "cursor-not-allowed" : "hover:bg-primary-dark"
              }`}
              disabled={data.cartItems.length === 0}
            >
              اتمام عملية الدفع
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
