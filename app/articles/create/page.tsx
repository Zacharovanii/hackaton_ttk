"use client";

import { useState } from "react";
import { Editor } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuthStore } from "@/store/auth-store";

export default function CreateArticle() {
	const [title, setTitle] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [content, setContent] = useState("");
	const token = useAuthStore((state) => state.token);

	const handleSave = (htmlContent: string) => {
		setContent(htmlContent);
	};

	const handleCreate = async (htmlContent: string) => {
		const articleData = {
			title,
			image_url: imageUrl,
			content: htmlContent,
		};

		// Вставь тут отправку на бэкенд
		console.log("Отправка статьи:", articleData);
	};

	return (
		<div className="max-w-4xl mx-auto p-4 space-y-6">
			<h1 className="text-2xl font-bold">Создать новую статью</h1>

			<div className="space-y-2">
				<Label htmlFor="title">Название статьи</Label>
				<Input
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Введите заголовок статьи"
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="image">Ссылка на изображение</Label>
				<Input
					id="image"
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
					placeholder="https://example.com/image.jpg"
				/>
			</div>

			<div className="space-y-2">
				<Label>Содержимое статьи</Label>
				<Editor onSave={handleSave} onCreate={handleCreate} />
			</div>
		</div>
	);
}
