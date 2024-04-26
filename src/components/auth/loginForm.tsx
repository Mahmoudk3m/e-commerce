"use client";
import { signIn } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function LoginForm() {
  const initialState = {
    message: ""
  };
  const [state, formAction] = useFormState(signIn, initialState);
  const errors = state.errors || {};

  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="flex flex-col w-full">
      <div className="mb-4">
        <label className="block mb-2 text-md">اسم المستخدم</label>
        <input
          type="email"
          name="email"
          placeholder="اسم المستخدم.."
          className="w-full p-2 bg-white appearance-none rounded-md border text-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-md">كلمة المرور</label>
        <input
          type="password"
          name="password"
          className="w-full p-2 bg-white appearance-none rounded-md border text-md"
          placeholder="كلمة المرور.."
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
        {state.message && <p className="text-red-500 text-sm mt-2">{state.message}</p>}
      </div>

      <div className="flex gap-4">
        <button disabled={pending} className="w-full bg-primary text-secondary flex-1 p-2 text-md rounded-md">دخول</button>
        <Link href={"/register"} className="w-fit text-primary p-2 text-md">
          ليس لديك حساب ؟
        </Link>
      </div>
    </form>
  );
}
