"use client";
import { signUp } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import React from "react";

export default function RegisterForm() {
  const initialState = {
    message: ""
  };
  const [state, formAction] = useFormState(signUp, initialState);
  const errors = state.errors || {};
  const { pending } = useFormStatus();
  return (
    <form action={formAction} className="flex flex-col w-full">
      <div className="mb-4">
        <label className="block mb-2 text-md">البريد الإلكتروني</label>
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني.. "
          className="w-full p-2 bg-white appearance-none rounded-md border text-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-md">الاسم الأول</label>
        <input
          type="text"
          name="firstName"
          placeholder="الاسم الأول.. "
          className="w-full p-2 bg-white appearance-none rounded-md border text-md"
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName[0]}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-md">الاسم الأخير</label>
        <input
          type="text"
          name="lastName"
          placeholder="الاسم الأخير.. "
          className="w-full p-2 bg-white appearance-none rounded-md border text-md"
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName[0]}</p>}
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
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-md">كلمة المرور</label>
        <input
          type="password"
          name="confirmPassword"
          className="w-full p-2 bg-white appearance-none rounded-md border text-md"
          placeholder="تأكيد كلمة المرور.."
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword[0]}</p>}
      </div>

      <div className="flex gap-4">
        <button disabled={pending} className="w-full bg-primary text-secondary flex-1 p-2 text-md rounded-md">
          دخول
        </button>
        <Link href={"/login"} className="w-fit text-primary p-2 text-md">
          لديك حساب ؟
        </Link>
      </div>
    </form>
  );
}
