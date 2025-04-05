"use client";

import React from "react";
import { ArticleItem } from "./articleItem";

interface Article {
	id: number;
	title: string;
	description: string;
	date: string;
	imageUrl: string;
}

interface ArticleListProps {
	articles: Article[];
}

export const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{articles.map((article, index) => (
				<ArticleItem
					key={index}
					id={article.id}
					title={article.title}
					description={article.description}
					date={article.date}
					imageUrl={article.imageUrl}
				/>
			))}
		</div>
	);
};
