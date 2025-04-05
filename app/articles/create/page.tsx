"use client";

import { useState } from "react";
import { Editor, ArticleView } from "@/components/shared";
import { Button } from "@/components/ui/button";

export default function CreateArticle() {
	const [content, setContent] = useState<string>("");
	const [isPreview, setIsPreview] = useState(false);

	const handleSave = (htmlContent: string) => {
		setContent(htmlContent);
		console.log(htmlContent);
		setIsPreview(true);
	};

	return (
		<div className="max-w-4xl mx-auto p-4">
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-2xl font-bold">Создать новую статью</h1>
				<Button variant="outline" onClick={() => setIsPreview(!isPreview)}>
					{isPreview ? "Редактировать" : "Предпросмотр"}
				</Button>
			</div>
			{isPreview ? (
				<div className="border rounded-lg shadow-sm">
					<ArticleView content={content} />
				</div>
			) : (
				<Editor onSave={handleSave} />
			)}
		</div>
	);
}
