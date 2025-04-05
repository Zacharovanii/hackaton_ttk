"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArticleList, Container } from "@/components/shared";
import { testArticles } from "./test";

export default function ArticlesPage() {
	const router = useRouter();

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

					<ArticleList articles={[...testArticles, ...testArticles]} />
				</div>
			</div>
		</Container>
	);
}
