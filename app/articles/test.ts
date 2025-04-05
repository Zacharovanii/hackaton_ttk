import { Article } from "@/types/articles";

export const testArticles: Article[] = [
	{
		id: 1,
		title: "Введение в React",
		description: "Базовое руководство по React для начинающих разработчиков",
		createdAt: "2024-01-15",
		author: "Анна Петрова",
		content:
			"<h1>Введение в React</h1><p>React — это библиотека JavaScript для создания пользовательских интерфейсов...</p>",
		date: "2024-01-15",
		imageUrl: "/react-intro.jpg",
		story: [
			{
				id: 1,
				editDescription: "Добавлено введение",
				editedAt: "2024-01-15",
				editor: "Анна Петрова",
			},
			{
				id: 2,
				editDescription: "Исправлены опечатки",
				editedAt: "2024-01-16",
				editor: "Иван Сидоров",
			},
		],
	},
	{
		id: 2,
		title: "TypeScript для профессионалов",
		description: "Продвинутые концепции и паттерны TypeScript",
		createdAt: "2024-01-10",
		author: "Михаил Иванов",
		content:
			"<h1>TypeScript для профессионалов</h1><p>TypeScript добавляет статическую типизацию в JavaScript...</p>",
		date: "2024-01-10",
		imageUrl: "/typescript-pro.jpg",
		story: [
			{
				id: 1,
				editDescription: "Добавлен раздел о дженериках",
				editedAt: "2024-01-12",
				editor: "Елена Смирнова",
			},
			{
				id: 2,
				editDescription: "Добавлены примеры использования",
				editedAt: "2024-01-13",
				editor: "Михаил Иванов",
			},
			{
				id: 3,
				editDescription: "Обновлен раздел про типы",
				editedAt: "2024-01-14",
				editor: "Анна Петрова",
			},
		],
	},
	{
		id: 3,
		title: "Next.js 14: Что нового",
		description: "Обзор новых возможностей Next.js 14",
		createdAt: "2024-01-05",
		author: "Дмитрий Козлов",
		content:
			"<h1>Next.js 14: Что нового</h1><p>Next.js 14 представляет множество улучшений производительности...</p>",
		date: "2024-01-05",
		imageUrl: "/nextjs-14.jpg",
		story: [
			{
				id: 1,
				editDescription: "Обновлена информация о Server Components",
				editedAt: "2024-01-07",
				editor: "Ольга Новикова",
			},
			{
				id: 2,
				editDescription: "Добавлен раздел про App Router",
				editedAt: "2024-01-08",
				editor: "Дмитрий Козлов",
			},
			{
				id: 3,
				editDescription: "Расширен обзор производительности",
				editedAt: "2024-01-09",
				editor: "Иван Сидоров",
			},
		],
	},
];
