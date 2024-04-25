import { deleteCartItem, UpdateCart } from "@/lib/actions";
import DeleteIcon from "../icons/delete";

export function DeleteCartItem({ id, token }: { id: number; token: string }) {
  const deleteCartItemWithId = deleteCartItem.bind(null, id, token);

  return (
    <form action={deleteCartItemWithId}>
      <button className="w-[28px] h-[28px] shrink-0 flex items-center justify-center text-xs border border-red-500 text-red-500 rounded-full p-1">
        <DeleteIcon />
      </button>
    </form>
  );
}

export function UpdateCartItem({
  id,
  productId,
  token,
  quantity,
  symbol
}: {
  id: number;
  productId: number;
  token: string;
  quantity: number;
  symbol: string;
}) {
  const updateCartItemWithId = UpdateCart.bind(null, id, productId, quantity, token);

  return (
    <form action={updateCartItemWithId}>
      <button className="shrink-0 px-2 text-md text-gray-500 " disabled={quantity < 1}>
        {symbol}
      </button>
    </form>
  );
}
