"use client";

interface ArticleViewProps {
	content: string;
}

export function ArticleView({ content }: ArticleViewProps) {
	return (
		<article
			className="prose max-w-none p-8
			[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-muted-foreground
			[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-3 [&_h2]:text-muted-foreground/90
			[&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mb-2 [&_h3]:text-muted-foreground/80
			[&_p]:text-gray-600 [&_p]:mb-4
			[&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4
			[&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
}
