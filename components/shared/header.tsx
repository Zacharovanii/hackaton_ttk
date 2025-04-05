"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Newspaper, ShieldUser } from "lucide-react";
import { User } from "lucide-react";
import { useAuthStore } from "@/store/auth-store";
import { ModeToggle } from "@/components/ui/theme-toggle";

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	return (
		<header className={cn("border border-b", className)}>
			<Container className="relative flex items-center justify-between py-6 text-muted-foreground">
				{/* Left piece */}
				<Link href="/">
					<div className="flex flex-shrink-0 items-center gap-4">
						<Image src="/logo.png" alt="Logo" width={100} height={100} />
						<div>
							<h1 className="text-2xl uppercase font-black">Bridge</h1>
							<p className="text-sm text-gray-400 leading-3">
								Умнее уже некуда
							</p>
						</div>
					</div>
				</Link>

				{/* Center piece */}
				<nav className="absolute left-1/2 -translate-x-1/2 flex-1 flex items-center justify-center gap-6">
					{isAuthenticated ? (
						<Link
							href="/cabinet"
							className="h-full flex items-center gap-2 hover:text-primary transition-colors"
						>
							<User size={30} />
							<span>Личный кабинет</span>
						</Link>
					) : (
						<Link
							href="/auth/login"
							className="h-full flex items-center gap-2 hover:text-primary transition-colors"
						>
							<User size={30} />
							<span>Авторизация</span>
						</Link>
					)}
					<Link
						href="/articles"
						className="h-full flex items-center gap-2 hover:text-primary transition-colors"
					>
						<Newspaper size={30} />
						<span>Статьи</span>
					</Link>
					<Link
						href="/tasks"
						className="h-full flex items-center gap-2 hover:text-primary transition-colors"
					>
						<CalendarCheck size={30} />
						<span>Задачи</span>
					</Link>
					<Link
						href="/admin"
						className="h-full flex items-center gap-2 hover:text-primary transition-colors"
					>
						<ShieldUser size={30} />
						<span>Администрирование</span>
					</Link>
				</nav>

				{/* Right piece */}
				<div className="flex flex-shrink-0  items-center">
					<ModeToggle />
				</div>
			</Container>
		</header>
	);
};
