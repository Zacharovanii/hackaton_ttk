"use client";

import { useEffect, useRef } from "react";
import DOMPurify from "dompurify";

interface ArticleContentProps {
	content: string;
	mode?: "description" | "content";
}

export const ArticleContent = ({
	content,
	mode = "content",
}: ArticleContentProps) => {
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!contentRef.current) return;

		const sanitizedContent = DOMPurify.sanitize(content);
		const tempContainer = document.createElement("div");
		tempContainer.innerHTML = sanitizedContent;

		contentRef.current.innerHTML = "";

		if (mode === "description") {
			const paragraphs = tempContainer.querySelectorAll("*");
			paragraphs.forEach((p) => {
				const cloned = p.cloneNode(true) as HTMLElement;
				cloned.classList.add("text-sm", "mb-4", "line-clamp-3");
				contentRef.current?.appendChild(cloned);
			});
			return;
		}

		contentRef.current.innerHTML = sanitizedContent;

		const elements = contentRef.current.querySelectorAll("*");
		elements.forEach((element) => {
			// Заголовки
			if (element.tagName === "H1") {
				element.classList.add("text-4xl", "font-bold", "mb-6");
			} else if (element.tagName === "H2") {
				element.classList.add("text-3xl", "font-bold", "mb-5");
			} else if (element.tagName === "H3") {
				element.classList.add("text-2xl", "font-bold", "mb-4");
			}

			// Параграфы
			if (element.tagName === "P") {
				element.classList.add("text-lg", "mb-4", "leading-relaxed");
			}

			// Списки
			if (element.tagName === "UL" || element.tagName === "OL") {
				element.classList.add("list-disc", "list-inside", "mb-4", "ml-4");
			}

			// Ссылки
			if (element.tagName === "A") {
				element.classList.add("text-primary", "hover:underline");
			}

			// Инлайн код
			if (element.tagName === "CODE") {
				element.classList.add("bg-muted", "px-2", "py-1", "rounded", "text-sm");
			}

			// Блоки кода
			if (element.tagName === "PRE") {
				element.classList.add(
					"bg-muted",
					"p-4",
					"rounded-lg",
					"overflow-x-auto",
					"mb-4"
				);
			}

			// Изображения
			if (element.tagName === "IMG") {
				element.classList.add("max-w-full", "rounded-lg", "my-4");
			}

			// Цитаты
			if (element.tagName === "BLOCKQUOTE") {
				element.classList.add(
					"border-l-4",
					"border-primary",
					"pl-4",
					"my-4",
					"italic"
				);
			}
		});
	}, [content, mode]);

	return (
		<div
			ref={contentRef}
			className="prose prose-lg dark:prose-invert max-w-none"
		/>
	);
};
