"use client";

import { useEffect, useRef } from "react";
import DOMPurify from "dompurify";

interface ArticleContentProps {
	content: string;
}

export const ArticleContent = ({ content }: ArticleContentProps) => {
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (contentRef.current) {
			// Очищаем и устанавливаем HTML-контент
			const sanitizedContent = DOMPurify.sanitize(content);
			contentRef.current.innerHTML = sanitizedContent;

			// Применяем стили к элементам контента
			const elements = contentRef.current.querySelectorAll("*");
			elements.forEach((element) => {
				// Стили для заголовков
				if (element.tagName === "H1") {
					element.classList.add("text-4xl", "font-bold", "mb-6");
				} else if (element.tagName === "H2") {
					element.classList.add("text-3xl", "font-bold", "mb-5");
				} else if (element.tagName === "H3") {
					element.classList.add("text-2xl", "font-bold", "mb-4");
				}

				// Стили для параграфов
				if (element.tagName === "P") {
					element.classList.add("text-lg", "mb-4", "leading-relaxed");
				}

				// Стили для списков
				if (element.tagName === "UL" || element.tagName === "OL") {
					element.classList.add("list-disc", "list-inside", "mb-4", "ml-4");
				}

				// Стили для ссылок
				if (element.tagName === "A") {
					element.classList.add("text-primary", "hover:underline");
				}

				// Стили для кода
				if (element.tagName === "CODE") {
					element.classList.add(
						"bg-muted",
						"px-2",
						"py-1",
						"rounded",
						"text-sm"
					);
				}

				// Стили для блоков кода
				if (element.tagName === "PRE") {
					element.classList.add(
						"bg-muted",
						"p-4",
						"rounded-lg",
						"overflow-x-auto",
						"mb-4"
					);
				}

				// Стили для изображений
				if (element.tagName === "IMG") {
					element.classList.add("max-w-full", "rounded-lg", "my-4");
				}

				// Стили для цитат
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
		}
	}, [content]);

	return (
		<div
			ref={contentRef}
			className="prose prose-lg dark:prose-invert max-w-none"
		/>
	);
};
