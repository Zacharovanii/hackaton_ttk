"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";

interface ArticleItemProps {
	id: number;
	title: string;
	description: string;
	date: string;
	imageUrl: string;
}

export const ArticleItem: React.FC<ArticleItemProps> = ({
	id,
	title,
	description,
	date,
	imageUrl = "https://via.placeholder.com/400x300",
}) => {
	const theme = useTheme();

	return (
		<Link href={`/articles/${id}`}>
			<div
				className="
			h-[300px]
			bg-secondary/50 text-secondary-foreground rounded-lg shadow-md
			overflow-hidden hover:shadow-lg transition-all duration-300
		hover:shadow-primary/50 hover:scale-105
		"
			>
				<div className="relative h-48 w-full">
					<img
						src={imageUrl}
						alt={title}
						className="w-full h-full object-cover"
						loading="lazy"
						height={192}
						width={320}
					/>
					<div
						className={cn(
							theme.theme === "light" &&
								"absolute inset-0 bg-gradient-to-t from-white/70 to-transparent",
							theme.theme === "dark" &&
								"absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
						)}
					/>
					<div className="absolute bottom-0 left-0 right-0 p-4">
						<h2 className="text-xl font-semibold text-foreground/55">
							{title}
						</h2>
					</div>
				</div>
				<div className="p-4">
					<p className="text-muted-foreground mb-4 line-clamp-3">
						{description}
					</p>
					<div className=" text-sm text-muted-foreground">
						{new Date(date).toLocaleDateString("ru-RU", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})}
					</div>
				</div>
			</div>
		</Link>
	);
};
