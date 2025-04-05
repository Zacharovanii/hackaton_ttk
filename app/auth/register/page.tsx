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
import { registerSchema } from "@/shemas/register";

const RegisterForm = () => {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(registerSchema),
	});

	const setToken = useAuthStore((state) => state.setToken);
	const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
	const router = useRouter();

	const onSubmit = async (data: any) => {
		setErrorMessage(null);

		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					fullName: data.fullName,
					username: data.username,
					email: data.email,
					password: data.password,
					confirmPassword: data.confirmPassword,
				}),
			});

			const result = await res.json();

			if (!res.ok) {
				throw new Error(result.message || "Ошибка регистрации");
			}

			setToken(result.accessToken);
			setAuthenticated(true);
			console.log("Успешная регистрация:", result);
			router.push("/cabinet");
		} catch (error: any) {
			setErrorMessage(error.message || "Произошла ошибка при регистрации");
		}
	};

	return (
		<Container className="min-h-screen py-8">
			<div className="max-w-sm mx-auto p-10 bg-background text-foreground rounded-lg shadow-md dark:bg-violet-900/5">
				<h2 className="text-2xl font-bold text-center mb-6">Регистрация</h2>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div>
						<Input
							type="text"
							placeholder="Полное имя"
							{...register("fullName")}
						/>
						{errors.fullName && (
							<p className="text-red-500 text-sm">{errors.fullName.message}</p>
						)}
					</div>

					<div>
						<Input
							type="text"
							placeholder="Никнейм"
							{...register("username")}
						/>
						{errors.username && (
							<p className="text-red-500 text-sm">{errors.username.message}</p>
						)}
					</div>

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

					<div>
						<Input
							type="password"
							placeholder="Подтвердите пароль"
							{...register("confirmPassword")}
						/>
						{errors.confirmPassword && (
							<p className="text-red-500 text-sm">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					{errorMessage && (
						<p className="text-red-500 text-sm">{errorMessage}</p>
					)}

					<Button type="submit" disabled={isSubmitting} className="w-full">
						{isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
					</Button>

					<div className="text-center mt-4">
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Уже есть аккаунт?{" "}
							<Link
								href="/auth/login"
								className="text-primary hover:text-primary/80"
							>
								Войти
							</Link>
						</p>
					</div>
				</form>
			</div>
		</Container>
	);
};

export default RegisterForm;
