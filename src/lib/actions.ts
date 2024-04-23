"use server";
import { cookies } from "next/headers";
import { SignInFormSchema } from "./schemas";
import { redirect } from "next/navigation";

export async function getProducts() {
  const res = await fetch(`${process.env.BASE_URL}/product/`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export async function signIn(formData: FormData) {
  const validatedFields = SignInFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const res = await fetch(`${process.env.BASE_URL}/user/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(validatedFields.data)
  });

  if (!res.ok) {
    throw new Error("Failed to sign in");
  }

  const data = await res.json();
  cookies().set("token", data.token);

  redirect("/");
}
