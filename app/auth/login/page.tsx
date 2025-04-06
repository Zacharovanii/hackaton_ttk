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
import { loginSchema, LoginFormData } from "@/shemas/login";
import { apiClient } from "@/services/api-client";
import { AxiosResponse } from "axios";
import { AxiosError } from "axios";

const LoginForm = () => {
	const setIsAuth = useAuthStore((state) => state.setAuthenticated);
	const setToken = useAuthStore((state) => state.setToken);
	const setEmail = useAuthStore((state) => state.setEmail);
	const setPassword = useAuthStore((state) => state.setPassword);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(loginSchema),
	});

	const router = useRouter();

	const onSubmit = async (data: LoginFormData) => {
		const response = await fetch("/api/auth/login", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			credentials: "include",
		});
		const res_with_token = await response.json();

		if (res_with_token.token) {
			console.log("res_with_token", res_with_token.token);
			setIsAuth(true);
			setToken(res_with_token.token);
			setEmail(data.email);
			setPassword(data.password);
			router.push("/cabinet");
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

					{/* {errorMessage && (
						<p className="text-red-500 text-sm">{errorMessage}</p>
					)} */}

					<Button type="submit" disabled={isSubmitting} className="w-full">
						{isSubmitting ? "Вход..." : "Войти"}
					</Button>

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
