export interface Article {
	id: number;
	title: string;
	description: string;
	date: string;
	imageUrl: string;
	content: string;
	author: string;
	createdAt: string;
	story: ArticleStory[];
}

export interface ArticleStory {
	id: number;
	editDescription: string;
	editedAt: string;
	editor: string;
}
