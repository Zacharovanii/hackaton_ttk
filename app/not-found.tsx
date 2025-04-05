import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
			<div className="text-center space-y-6">
				<h1 className="text-6xl font-bold text-gray-900">404</h1>
				<h2 className="text-2xl font-semibold text-gray-700">
					Страница не найдена
				</h2>
				<p className="text-gray-500 max-w-md">
					Для доступа к этой странице необходимо быть авторизованным
					пользователем. Пожалуйста, войдите в систему или зарегистрируйтесь.
				</p>
				<div className="space-x-4">
					<Link href="/auth/login">
						<Button>Войти</Button>
					</Link>
					<Link href="/auth/register">
						<Button variant="outline">Зарегистрироваться</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
