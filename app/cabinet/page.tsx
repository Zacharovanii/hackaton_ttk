"use client";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "@/types/user";

export default function CabinetPage() {
	const router = useRouter();
	const logout = useAuthStore((state) => state.logout);
	const token = useAuthStore((state) => state.token);

	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		console.log("Токен в компоненте:", token);

		const fetchUser = async () => {
			try {
				console.log("Начало запроса к API");
				const response = await fetch("/api/user/profile", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				});

				console.log("Статус ответа:", response.status);
				console.log("Заголовки ответа:", response.headers);

				const data = await response.json();
				console.log("Данные ответа:", data);

				if (!response.ok) {
					throw new Error(
						data.error || "Ошибка при получении данных пользователя"
					);
				}

				setUser(data);
				setError(null);
			} catch (error) {
				console.error("Ошибка при запросе:", error);
				setError(error instanceof Error ? error.message : "Произошла ошибка");
				setUser(null);
			}
		};

		if (token) {
			fetchUser();
		}
	}, [token]);

	const handleLogout = () => {
		logout();
		router.push("/auth/login");
	};

	return (
		<div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-bold">Личный кабинет</h1>
					<Button variant="outline" onClick={handleLogout}>
						Выйти
					</Button>
				</div>
				<div className="grid gap-6">
					<div className="bg-secondary text-secondary-foreground p-6 rounded-lg shadow">
						<h2 className="text-xl font-semibold mb-4">Добро пожаловать!</h2>
						{error && <div className="text-red-500 mb-4">{error}</div>}
						{user ? (
							<div className="space-y-2">
								<p className="text-gray-600">Имя: {user.full_name}</p>
								<p className="text-gray-600">Email: {user.email}</p>
								<p className="text-gray-600">
									Дата регистрации:{" "}
									{new Date(user.registered_at).toLocaleDateString()}
								</p>
							</div>
						) : (
							<p className="text-gray-600">Загрузка данных пользователя...</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
