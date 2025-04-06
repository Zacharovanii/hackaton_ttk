import { z } from "zod";

export const registerSchema = z
	.object({
		fullName: z
			.string()
			.min(2, "Имя должно содержать минимум 2 символа")
			.regex(/^[а-яА-ЯёЁ\s]+$/, "Имя должно содержать только кириллицу"),
		username: z
			.string()
			.min(3, "Никнейм должен содержать минимум 3 символа")
			.regex(
				/^[a-zA-Z0-9_]+$/,
				"Никнейм должен содержать только латиницу, цифры и _"
			),
		email: z.string().email("Введите корректный email"),
		password: z
			.string()
			.min(8, "Пароль должен быть минимум 8 символов")
			.regex(
				/^[a-zA-Z0-9!@#$%^&]+$/,
				"Пароль должен содержать только латиницу, цифры и символы !@#$%^&"
			),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Пароли не совпадают",
		path: ["confirmPassword"],
	});

export type RegisterFormData = z.infer<typeof registerSchema>;
