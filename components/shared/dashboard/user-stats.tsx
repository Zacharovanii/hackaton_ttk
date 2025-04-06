"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Trophy, Star } from "lucide-react";
import React from "react";

interface UserStats {
	total_articles: number;
	total_tasks: number;
	edited_articles: number;
	current_task: number;
}
export const UserStats: React.FC<UserStats> = ({
	current_task,
	edited_articles,
	total_articles,
	total_tasks,
}) => {
	const stats = [
		{
			title: "Прочитано статей",
			value: total_articles,
			icon: BookOpen,
			description: "За последний месяц",
		},
		{
			title: "Редактировано статей",
			value: edited_articles,
			icon: Clock,
			description: "За последнюю неделю",
		},
		{
			title: "Завершено заданий",
			value: total_tasks,
			icon: Trophy,
			description: "Получено наград",
		},
		{
			title: "Законченых заданий",
			value: current_task,
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
};
