"use server";
import { cookies } from "next/headers";
import { SignInFormSchema, SignUpFormSchema } from "./schemas";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { CartItemType, ProductType } from "./types";

export async function getProducts() {
  const res = await fetch(`${process.env.BASE_URL}/product/`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export async function getCartItems(token: string) {
  const res = await fetch(`${process.env.BASE_URL}/cart/?token=${token}`);

  if (!res.ok) {
    throw new Error("Failed to fetch cart items");
  }
  return res.json();
}

export async function UpdateCart(id: number, productId: number, quantity: number, token: string) {
  try {
    await fetch(`${process.env.BASE_URL}/cart/update/${id}?token=${token}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, productId, quantity })
    });
  } catch {
    return { message: "Failed to update cart" };
  }
  revalidatePath("/cart");
  redirect("/cart");
}

export async function addToCart(id: number, productId: number, quantity: number, token: string) {
  try {
    await fetch(`${process.env.BASE_URL}/cart/add?token=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, productId, quantity })
    });
  } catch {
    throw new Error("Failed to add product to cart");
  }
  revalidatePath("/cart");
  redirect("/cart");
}

export async function deleteCartItem(id: number, token: string) {
  try {
    await fetch(`${process.env.BASE_URL}/cart/delete/${id}?token=${token}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    revalidatePath("/cart");
    return { message: "Item Deleted." };
  } catch {
    return { message: "Failed to Delete Item" };
  }
}

export async function signIn(prevState: any, formData: FormData) {
  const validatedFields = SignInFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }
  try {
    const res = await fetch(`${process.env.BASE_URL}/user/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(validatedFields.data)
    });

    const data = await res.json();
    cookies().set("token", data.token);

    redirect("/");
  } catch {
    return {
      message: "كلمة المرور أو البريد الاكتروني غير صحيح"
    };
  }
}

export async function signOut() {
  cookies().set("token", "", { expires: new Date(0) });
  redirect("/");
}

export async function signUp(prevState: any, formData: FormData) {
  const validatedFields = SignUpFormSchema.safeParse({
    email: formData.get("email"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword")
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  try {
    const res = await fetch(`${process.env.BASE_URL}/user/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(validatedFields.data)
    });

    const data = await res.json();
    cookies().set("token", data.token);

    redirect("/");
  } catch {
    return { message: "Registration failed" };
  }
}
