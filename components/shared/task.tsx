"use client";

import React, { useState } from "react";

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

const statuses = ["Текущие", "Выполнено", "Отложено"];
const priorities = ["Низкий", "Средний", "Высокий"];

export const Task: React.FC<TaskProps> = ({
	id,
	title,
	description,
	status,
	priority,
	due_date,
	author,
	assignee,
	created_at,
	updated_at,
}) => {
	const [taskStatus, setTaskStatus] = useState(status);
	const [taskPriority, setTaskPriority] = useState(priority);
	const [isSaving, setIsSaving] = useState(false);

	const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setTaskStatus(e.target.value);
	};

	const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setTaskPriority(e.target.value);
	};

	const handleSave = async () => {
		setIsSaving(true);
		try {
			// TODO: Подставь реальный PATCH запрос
			console.log("Saving...", { taskStatus, taskPriority });
		} finally {
			setIsSaving(false);
		}
	};

	const handleDelete = async () => {
		if (!confirm("Вы уверены, что хотите удалить задачу?")) return;

		// TODO: Подставь реальный DELETE запрос
		console.log("Deleting task with ID:", id);
	};

	return (
		<div className="bg-card text-card-foreground border rounded-xl p-6 shadow-md space-y-4 w-full max-w-xl mx-auto relative">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-semibold">{title}</h2>
				<span className="text-sm text-muted-foreground">
					до {new Date(due_date).toLocaleString("ru-RU")}
				</span>
			</div>

			<p className="text-muted-foreground">{description}</p>

			<div className="grid grid-cols-2 gap-4">
				<div>
					<label className="text-sm text-muted-foreground block mb-1">
						Статус
					</label>
					<select
						value={taskStatus}
						onChange={handleStatusChange}
						className="w-full border rounded-md p-2 bg-background text-foreground"
					>
						{statuses.map((s) => (
							<option key={s} value={s}>
								{s}
							</option>
						))}
					</select>
				</div>

				<div>
					<label className="text-sm text-muted-foreground block mb-1">
						Приоритет
					</label>
					<select
						value={taskPriority}
						onChange={handlePriorityChange}
						className="w-full border rounded-md p-2 bg-background text-foreground"
					>
						{priorities.map((p) => (
							<option key={p} value={p}>
								{p}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="text-sm text-muted-foreground">
				Автор: <strong>{author.full_name}</strong> ({author.shift})<br />
				Ответственный: <strong>{assignee.full_name}</strong> ({assignee.shift})
			</div>

			<div className="text-xs text-muted-foreground">
				Создано: {new Date(created_at).toLocaleString("ru-RU")}
				<br />
				Обновлено: {new Date(updated_at).toLocaleString("ru-RU")}
			</div>

			{/* Кнопки */}
			<div className="absolute right-6 bottom-6 flex gap-2">
				<button
					onClick={handleDelete}
					className="bg-destructive text-background text-sm px-2 py-1 rounded-lg hover:bg-destructive/80 transition"
				>
					Удалить
				</button>
				<button
					onClick={handleSave}
					disabled={isSaving}
					className="bg-primary text-white px-2 py-1 rounded-lg hover:bg-primary/80 transition disabled:opacity-50"
				>
					{isSaving ? "Сохранение..." : "Сохранить"}
				</button>
			</div>
		</div>
	);
};
