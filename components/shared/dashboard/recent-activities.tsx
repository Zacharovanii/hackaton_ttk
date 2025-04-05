"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle2, Clock } from "lucide-react";

export function RecentActivities() {
	const activities = [
		{
			title: "Основы React",
			type: "Статья",
			status: "Завершено",
			date: "2 часа назад",
			icon: BookOpen,
		},
		{
			title: "Тест по JavaScript",
			type: "Тест",
			status: "В процессе",
			date: "4 часа назад",
			icon: Clock,
		},
		{
			title: "Введение в TypeScript",
			type: "Статья",
			status: "Завершено",
			date: "Вчера",
			icon: CheckCircle2,
		},
		{
			title: "Практика по CSS",
			type: "Задание",
			status: "Завершено",
			date: "2 дня назад",
			icon: CheckCircle2,
		},
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Последние активности</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-8">
					{activities.map((activity) => (
						<div key={activity.title} className="flex items-center">
							<div className="ml-4 space-y-1">
								<p className="text-sm font-medium leading-none">
									{activity.title}
								</p>
								<p className="text-sm text-muted-foreground">
									{activity.type} • {activity.status} • {activity.date}
								</p>
							</div>
							<div className="ml-auto font-medium">
								<activity.icon className="h-4 w-4 text-muted-foreground" />
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
