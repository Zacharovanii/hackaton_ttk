import { apiClient } from "@/services/api-client";
import { AxiosResponse, AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

interface LoginRequest {
	email: string;
	password: string;
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const { email, password } = body;

	// Логирование данных для диагностики
	console.log("Тело запроса:", body);

	try {
		const response = (await apiClient.auth.login({
			email,
			password,
		})) as AxiosResponse;

		console.log("Успешный вход");

		const accessTokenCookie = cookie.parse(
			response.headers["set-cookie"]?.[0] || ""
		)?.access_token;
		console.log("accessTokenCookie", accessTokenCookie);
		const nextResponse = NextResponse.json({
			message: "Успешный вход",
			token: accessTokenCookie,
		});
		// console.log("nextResponse", nextResponse);

		return nextResponse;
	} catch (err: unknown) {
		const error = err as AxiosError;
		if (error.response) {
			// Логирование ошибок
			console.error(
				"Ошибка логина:",
				error.response.status,
				error.response.data
			);
			return NextResponse.json({ error: error.response.data }, { status: 500 });
		} else {
			// Сетевая ошибка
			console.error("Сетевая ошибка:", error.message);
			return NextResponse.json({ error: "Сетевая ошибка" }, { status: 500 });
		}
	}
}
