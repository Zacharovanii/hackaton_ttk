import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email("Введите корректный email"),
	password: z.string().min(8, "Пароль должен быть минимум 8 символов"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
