import { NextRequest, NextResponse } from "next/server";
import { apiClient } from "@/services/api-client";

export async function GET(request: NextRequest) {
	try {
		console.log("Начало обработки запроса профиля");

		const authHeader = request.headers.get("Authorization");
		console.log("Заголовок авторизации:", authHeader);

		if (!authHeader) {
			console.log("Заголовок авторизации отсутствует");
			return NextResponse.json(
				{ error: "Требуется авторизация" },
				{ status: 401 }
			);
		}

		const token = authHeader.split(" ")[1];
		console.log("Извлеченный токен:", token);

		console.log("Отправка запроса к API пользователя");
		const response = await apiClient.user.getUser(token);
		console.log("Ответ от API пользователя:", {
			status: response.status,
			data: response.data,
			headers: response.headers,
		});

		if (response.status >= 400) {
			console.log("Ошибка от API:", response.data);
			return NextResponse.json(
				{
					error:
						response.data?.message ||
						"Ошибка при получении данных пользователя",
				},
				{ status: response.status }
			);
		}

		console.log("Успешный ответ, отправка данных клиенту");
		return NextResponse.json(response.data);
	} catch (error) {
		console.error("Ошибка при получении профиля пользователя:", error);
		return NextResponse.json(
			{ error: "Внутренняя ошибка сервера" },
			{ status: 500 }
		);
	}
}
