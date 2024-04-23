import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z.string().email("الرجاء إدخال بريد إلكتروني صحيح"),
  password: z.string().min(6, { message: "كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل" })
});
