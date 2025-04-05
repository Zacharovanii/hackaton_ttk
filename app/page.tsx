"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuthStore } from "@/store/auth-store";
import { Container } from "@/components/shared/container";

export default function Home() {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	return (
		<Container className="min-h-screen py-8">
			<div className="h-[400px] w-3/4 mx-auto flex flex-col items-center justify-around dark:bg-violet-900/10 rounded-lg shadow-lg py-8 px-8">
				<h1 className="text-4xl font-bold">Добро пожаловать в Bridge</h1>
				<p className="text-xl text-muted-foreground max-w-2xl">
					Платформа для развития и обучения. Здесь вы найдете полезные статьи,
					интересные задания и возможность отслеживать свой прогресс.
				</p>

				{isAuthenticated ? (
					<div className="flex flex-col items-center gap-4">
						<p className="text-lg">Рады видеть вас снова!</p>
						<Button asChild size="lg">
							<Link href="/articles">Перейти к статьям</Link>
						</Button>
					</div>
				) : (
					<div className="flex flex-col items-center gap-4">
						<p className="text-lg">
							Присоединяйтесь к нам, чтобы получить полный доступ
						</p>
						<div className="flex gap-4">
							<Button asChild variant="outline" size="lg">
								<Link href="/auth/login">Войти</Link>
							</Button>
							<Button asChild size="lg">
								<Link href="/articles">Смотреть статьи</Link>
							</Button>
						</div>
					</div>
				)}
			</div>
		</Container>
	);
}
