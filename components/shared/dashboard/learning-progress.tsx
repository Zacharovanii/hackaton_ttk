"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function LearningProgress() {
	const courses = [
		{
			title: "Основы JavaScript",
			progress: 75,
			lessonsCompleted: 15,
			totalLessons: 20,
		},
		{
			title: "React для начинающих",
			progress: 40,
			lessonsCompleted: 8,
			totalLessons: 20,
		},
		{
			title: "TypeScript",
			progress: 20,
			lessonsCompleted: 4,
			totalLessons: 20,
		},
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Прогресс обучения</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-6">
					{courses.map((course) => (
						<div key={course.title} className="space-y-2">
							<div className="flex justify-between">
								<p className="text-sm font-medium">{course.title}</p>
								<p className="text-sm text-muted-foreground">
									{course.lessonsCompleted}/{course.totalLessons} уроков
								</p>
							</div>
							<Progress value={course.progress} className="h-2" />
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
