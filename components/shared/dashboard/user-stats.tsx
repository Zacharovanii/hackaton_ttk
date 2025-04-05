"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Trophy, Star } from "lucide-react";

export function UserStats() {
	const stats = [
		{
			title: "Прочитано статей",
			value: "42",
			icon: BookOpen,
			description: "За последний месяц",
		},
		{
			title: "Время обучения",
			value: "24ч",
			icon: Clock,
			description: "За последнюю неделю",
		},
		{
			title: "Достижения",
			value: "8",
			icon: Trophy,
			description: "Получено наград",
		},
		{
			title: "Рейтинг",
			value: "4.8",
			icon: Star,
			description: "Средняя оценка",
		},
	];

	return (
		<div className="grid grid-cols-2 gap-4">
			{stats.map((stat) => (
				<Card key={stat.title} className="col-span-1">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
						<stat.icon className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{stat.value}</div>
						<p className="text-xs text-muted-foreground">{stat.description}</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
