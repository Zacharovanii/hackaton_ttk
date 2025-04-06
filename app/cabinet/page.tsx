"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // если ты на app router
import { useAuthStore } from "@/store/auth-store"; // для logout
import { Container } from "@/components/shared/container";
import { UserStats } from "@/components/shared/dashboard/user-stats";
import { RecentActivities } from "@/components/shared/dashboard/recent-activities";
import { LearningProgress } from "@/components/shared/dashboard/learning-progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

interface UserProfile {
	user_id: number;
	username: string;
	full_name: string;
	email: string;
	avatar_url: string | null;
	role_id: number;
	shift: string;
	registered_at: string;
	completed_tasks_count: number;
	total_tasks_count: number;
	edited_articles_count: number;
	is_deleted: boolean;
}

export default function ProfilePage() {
	const [user, setUser] = useState<UserProfile | null>(null);
	const token = useAuthStore((state) => state.token);
	const email = useAuthStore((state) => state.email);
	const password = useAuthStore((state) => state.password);
	const logout = useAuthStore((state) => state.logout);
	const router = useRouter();

	useEffect(() => {
		const fetchUserProfile = async () => {
			const response = await fetch("/api/user/profile", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
					token,
				}),
			});

			if (!response.ok) {
				throw new Error("Ошибка запроса");
			}

			const data = await response.json();
			setUser(data);
		};

		fetchUserProfile().catch((error) => console.error(error));
	}, []);

	const handleEdit = () => {
		router.push("/profile/edit");
	};

	const handleLogout = () => {
		logout();
		router.push("/login");
	};

	return (
		<Container>
			<div className="p-8">
				<h1 className="text-2xl font-bold mb-4">Профиль</h1>
				{user ? (
					<div>
						<div className="mb-8">
							<Card>
								<CardHeader className="flex flex-row items-start justify-between">
									<div>
										<CardTitle>{user.username}</CardTitle>
										<p className="text-muted-foreground text-sm">
											{user.full_name}
										</p>
									</div>
									<div className="flex gap-2">
										<Button variant="outline" onClick={handleEdit}>
											Редактировать
										</Button>
										<Button variant="destructive" onClick={handleLogout}>
											Выйти
										</Button>
									</div>
								</CardHeader>
								<CardContent>
									<p>Ваш email: {user.email}</p>
								</CardContent>
							</Card>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
							<UserStats
								total_articles={0}
								edited_articles={user.edited_articles_count}
								total_tasks={user.total_tasks_count}
								current_task={user.completed_tasks_count}
							/>
							<RecentActivities />
						</div>
						<LearningProgress />
					</div>
				) : (
					<p>Загрузка...</p>
				)}
			</div>
		</Container>
	);
}
