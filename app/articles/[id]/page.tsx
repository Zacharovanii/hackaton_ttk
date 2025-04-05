"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit, History } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { ArticleContent } from "@/components/shared/articleContent";

interface Article {
	id: string;
	title: string;
	content: string;
	createdAt: string;
	lastEditor: string;
	imageUrl: string;
}

export default function ArticlePage() {
	const params = useParams();
	const [article, setArticle] = useState<Article | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Здесь будет запрос к API для получения статьи
		// Пока используем моковые данные
		const mockArticle = {
			id: params.id as string,
			title: "Основы React",
			content: "Содержание статьи о React...",
			createdAt: "2024-03-01T10:00:00Z",
			lastEditor: "Иван Иванов",
			imageUrl: "/images/react.jpg",
		};
		setArticle(mockArticle);
		setIsLoading(false);
	}, [params.id]);

	if (isLoading) {
		return <div>Загрузка...</div>;
	}

	if (!article) {
		return <div>Статья не найдена</div>;
	}

	return (
		<Container>
			<div className="flex items-center gap-4 my-8">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/articles">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<h1 className="text-3xl font-bold">{article.title}</h1>
			</div>

			<div className="grid gap-8 md:grid-cols-3">
				<div className="md:col-span-2">
					<Card>
						<CardHeader className="p-0">
							<div className="relative h-64 w-full">
								<Image
									src={article.imageUrl}
									alt={article.title}
									fill
									className="object-cover rounded-t-lg"
								/>
							</div>
						</CardHeader>
						<CardContent className="p-6">
							<ArticleContent content={article.content} />
						</CardContent>
					</Card>
				</div>

				<div className="space-y-4">
					<Card>
						<CardContent className="p-6">
							<div className="space-y-4">
								<div>
									<h3 className="text-sm font-medium text-muted-foreground">
										Создано
									</h3>
									<p className="text-sm">
										{new Date(article.createdAt).toLocaleDateString()}
									</p>
								</div>
								<div>
									<h3 className="text-sm font-medium text-muted-foreground">
										Последний редактор
									</h3>
									<p className="text-sm">{article.lastEditor}</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<div className="flex gap-2">
						<Button variant="outline" className="flex-1" asChild>
							<Link href={`/articles/${article.id}/edit`}>
								<Edit className="h-4 w-4 mr-2" />
								Редактировать
							</Link>
						</Button>
						<Button variant="outline" className="flex-1" asChild>
							<Link href={`/articles/${article.id}/history`}>
								<History className="h-4 w-4 mr-2" />
								История
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</Container>
	);
}
