import LoginForm from "@/components/auth/loginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  //if user is already logged in, redirect to home page
  if (cookies().get("token")) {
    redirect("/");
  }
  return (
    <main className="w-full flex-auto">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
          <div className="flex flex-col text-center items-center justify-center mb-6">
            <h2 className="text-lg">تسجيل الدخول</h2>
            <span className="text-xs text-gray-500">قم بتسجيل الدخول لمتابعة التسوق</span>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
