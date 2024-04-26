import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z.string().email("الرجاء إدخال بريد إلكتروني صحيح"),
  password: z.string().min(6, { message: "كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل" })
});

export const SignUpFormSchema = z
  .object({
    email: z.string().email("الرجاء إدخال بريد إلكتروني صحيح"),
    firstName: z.string().min(2, { message: "الاسم الأول يجب أن يحتوي على حرفين على الأقل" }),
    lastName: z.string().min(2, { message: "الاسم الأخير يجب أن يحتوي على حرفين على الأقل" }),
    password: z.string().min(6, { message: "كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل" }),
    confirmPassword: z.string().min(6, { message: "كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل" })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمة المرور غير متطابقة",
    path: ["confirmPassword"]
  });
