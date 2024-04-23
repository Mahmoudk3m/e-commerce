import { signIn } from "@/lib/actions";
import React from "react";

export default function LoginForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    await signIn(formData);
  };

  return (
    <form action={handleSubmit} className="flex flex-col w-full">
      <div className="mb-4">
        <label className="block mb-2 text-md">اسم المستخدم</label>
        <input
          type="email"
          name="email"
          placeholder="اسم المستخدم.."
          className="w-full p-2 bg-white appearance-none rounded-md border text-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-md">كلمة المرور</label>
        <input
          type="password"
          name="password"
          className="w-full p-2 bg-white appearance-none rounded-md border text-md"
          placeholder="كلمة المرور.."
        />
      </div>
      <div className="flex gap-4">
        <button className="w-full bg-primary text-secondary flex-1 p-2 text-md rounded-md">دخول</button>
        <button type="button" className="w-fit text-primary underline p-2 text-md rounded-md">
          نسيت كلمة المرور؟
        </button>
      </div>
    </form>
  );
}
