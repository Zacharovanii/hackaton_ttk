"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";
import { useRouter } from "next/navigation";
import { Container } from "@/components/shared/container";
import Link from "next/link";
import { loginSchema } from "@/shemas/login";

const LoginForm = () => {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(loginSchema),
	});
	const setToken = useAuthStore((state) => state.setToken);
	const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
	const router = useRouter();

	const onSubmit = async (data: any) => {
		setErrorMessage(null);

		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: data.email,
					password: data.password,
				}),
			});

			const result = await res.json();

			if (!res.ok) {
				throw new Error(result.error || "Ошибка авторизации");
			}

			// Получаем токен из куки
			function getCookie(name: string) {
				const cookies = document.cookie.split(";");
				for (let cookie of cookies) {
					const [cookieName, cookieValue] = cookie.split("=");
					if (cookieName.trim() === name) {
						return decodeURIComponent(cookieValue);
					}
				}
				return null;
			}

			// Получить токен
			const token = getCookie("access_token");
			console.log(token); // Ваш токен

			if (token) {
				setToken(token);
				setAuthenticated(true);
				router.push("/cabinet");
			} else {
				throw new Error("Токен не найден в куки");
			}
		} catch (error: any) {
			setErrorMessage(error.message);
		}
	};

	return (
		<Container className="min-h-screen py-8">
			<div className="max-w-sm mx-auto mt-20 p-10 bg-background text-foreground rounded-lg shadow-md dark:bg-violet-900/5">
				<h2 className="text-2xl font-bold text-center mb-6">Вход</h2>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div>
						<Input type="email" placeholder="Email" {...register("email")} />
						{errors.email && (
							<p className="text-red-500 text-sm">{errors.email.message}</p>
						)}
					</div>

					<div>
						<Input
							type="password"
							placeholder="Пароль"
							{...register("password")}
						/>
						{errors.password && (
							<p className="text-red-500 text-sm">{errors.password.message}</p>
						)}
					</div>

					{errorMessage && (
						<p className="text-red-500 text-sm">{errorMessage}</p>
					)}

					<Button type="submit" disabled={isSubmitting} className="w-full">
						{isSubmitting ? "Вход..." : "Войти"}
					</Button>

					{/* <div className="text-center">
						<Link
							href="/auth/forgot-password"
							className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						>
							Забыли пароль?
						</Link>
					</div> */}

					<div className="relative my-6">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-background text-gray-500 dark:text-gray-400"></span>
						</div>
					</div>

					<div className="text-center mt-4">
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Нет аккаунта?{" "}
							<Link
								href="/auth/register"
								className="text-primary hover:text-primary/80"
							>
								Зарегистрироваться
							</Link>
						</p>
					</div>
				</form>
			</div>
		</Container>
	);
};

export default LoginForm;
