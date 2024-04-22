import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().min(4, { message: "4文字以上で入力してください。" }),
  email: z
    .string()
    .min(1, { message: "メールアドレスは必須です。" })
    .email({ message: "正しいメールアドレスを入力してください。" }),
  password: z.string().min(6, { message: "6文字以上で入力してください。" }),
});
