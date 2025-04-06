"use client";

import { Container } from "@/components/shared/container";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth-store";
import { Task } from "@/components/shared/task";

interface User {
	user_id: number;
	full_name: string;
	shift: string;
}

interface TaskProps {
	id: number;
	title: string;
	description: string;
	status: string;
	priority: string;
	due_date: string;
	author: User;
	assignee: User;
	created_at: string;
	updated_at: string;
}

export default function TasksPage() {
	const [tasks, setTasks] = useState<TaskProps[]>([]);
	const token = useAuthStore((state) => state.token);

	useEffect(() => {
		fetchTasks();
	}, []);

	const fetchTasks = async () => {
		const response = await fetch("/api/tasks/my", {
			method: "POST",
			body: JSON.stringify({
				token: token,
			}),
		});
		const data = await response.json();
		console.log(data);
		setTasks(data);
	};

	return (
		<Container>
			<h1 className="text-3xl font-bold my-4">Tasks</h1>
			{tasks.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{tasks.map((task) => (
						<Task key={task.id} {...task} />
					))}
				</div>
			) : (
				<p>Идет загрузка...</p>
			)}
		</Container>
	);
}
