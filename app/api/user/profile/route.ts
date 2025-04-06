import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// Определим интерфейсы
interface User {
	id: number;
	email: string;
	first_name: string;
	username: string;
	role: string;
}

interface ProfileRequest {
	email: string;
	password: string;
	token: string;
}

interface ProfileResponse {
	user: User;
}

export async function POST(request: NextRequest) {
	const body = await request.json(); // Получаем данные из тела запроса
	const { email, password, token }: ProfileRequest = body;

	async function fetchUserProfile(
		email: string,
		password: string,
		token: string
	) {
		const data = JSON.stringify({
			email: email,
			password: password,
		});

		const config = {
			method: "get",
			maxBodyLength: Infinity,
			url: "http://45.89.189.162:8000/user/profile",
			headers: {
				Cookie: `access_token=${token}`, // Передаем токен через куки
				"Content-Type": "application/json",
			},
			data: data,
		};

		try {
			const response = await axios.request(config);
			console.log("Ответ от API: ", JSON.stringify(response.data));
			return response.data; // Возвращаем данные профиля
		} catch (error) {
			console.error("Ошибка запроса:", error);
			throw error;
		}
	}

	try {
		// Выполняем запрос для получения данных о профиле
		const data = await fetchUserProfile(email, password, token);
		// Возвращаем ответ с данными о пользователе
		return NextResponse.json(data);
	} catch (error) {
		console.error("Ошибка получения профиля:", error);
		return NextResponse.json(
			{ error: "Ошибка при запросе профиля" },
			{ status: 500 }
		);
	}
}
