"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArticleList, Container } from "@/components/shared";
import { testArticles } from "./test";
import { useAuthStore } from "@/store/auth-store";
import React from "react";

interface ArticlesResponse {
	id: number;
	title: string;
	content: string;
	author_id: number;
	created_at: string;
	updated_at: string;
	is_deleted: boolean;
	images: Image[];
}

type Image = {
	id: number;
	image_path: string;
};

interface QueryParams {
	title: string | null;
	author_id: number | null;
	offset: number;
	limit: number;
}

export default function ArticlesPage() {
	const router = useRouter();
	const [articles, setArticles] = React.useState<ArticlesResponse[]>([]);
	const token = useAuthStore((state) => state.token);
	const [params, setParams] = React.useState<QueryParams>({
		title: null,
		author_id: null,
		offset: 0,
		limit: 10,
	});

	React.useEffect(() => {
		const fetchArticles = async () => {
			const response = await fetch("/api/articles", {
				method: "POST",
				body: JSON.stringify({
					...params,
					token: token,
				}),
			});
			const data = await response.json();
			console.log(data);
			setArticles(data);
		};
		fetchArticles();
	}, []);

	return (
		<Container>
			<div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-between items-center mb-8">
						<h1 className="text-3xl font-bold">Статьи</h1>
						<Button onClick={() => router.push("/articles/create")}>
							Создать статью
						</Button>
					</div>

					<ArticleList articles={[...articles]} />
				</div>
			</div>
		</Container>
	);
}
