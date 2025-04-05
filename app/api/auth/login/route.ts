import { NextRequest, NextResponse } from "next/server";
import { apiClient } from "@/services/api-client";

interface LoginRequest {
	email: string;
	password: string;
}

function getCookie(name: string, cookies: string): string | null {
	const cookieArray = cookies.split(";");
	for (let cookie of cookieArray) {
		const [cookieName, cookieValue] = cookie.split("=");
		if (cookieName.trim() === name) {
			return decodeURIComponent(cookieValue);
		}
	}
	return null;
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		console.log("Получен запрос на вход:", body);

		const response = await apiClient.auth.login({
			email: body.email,
			password: body.password,
		});
		console.log("Полный ответ от API:", response);

		// Получаем токен из куки
		const cookieHeader = request.headers.get("cookie") || "";
		const token = getCookie("access_token", cookieHeader);
		console.log("Токен из куки:", token);

		if (!token) {
			console.error("Токен не найден в куки");
			return NextResponse.json({ error: "Токен не найден" }, { status: 401 });
		}

		// Возвращаем токен клиенту
		return NextResponse.json({
			accessToken: token,
		});
	} catch (error) {
		console.error("Ошибка при входе:", error);
		return NextResponse.json(
			{ error: "Ошибка при входе в систему" },
			{ status: 500 }
		);
	}
}
