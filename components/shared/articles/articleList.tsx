"use client";

import React from "react";
import { ArticleItem } from "./articleItem";
import Link from "next/link";
import { ArticleContent } from "../articleContent";

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

interface ArticleListProps {
	articles: ArticlesResponse[];
}

export const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{articles.map((article, index) => (
				<ArticleItem
					key={index}
					id={article.id}
					title={article.title}
					description={article.content.slice(0, 50) + "..."}
					date={new Date(article.updated_at).toLocaleDateString()}
					imageUrl={article.images[0].image_path}
				/>
			))}
		</div>
	);
};
