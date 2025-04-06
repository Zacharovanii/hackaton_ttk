import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface QueryParams {
	title: string | null;
	author_id: number | null;
	offset: number;
	limit: number;
}

type Image = {
	id: number;
	image_path: string;
};

interface ArticlesResponse {
	// Тип данных, которые вы ожидаете получить от API
	id: number;
	title: string;
	content: string;
	author_id: number;
	created_at: string;
	updated_at: string;
	is_deleted: boolean;
	images: Image[];
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const { title, author_id, offset, limit, token } = body;

	const queryParams: QueryParams = {
		title: title || null,
		author_id: author_id ? parseInt(author_id) : null,
		offset: offset ? parseInt(offset) : 0,
		limit: limit ? parseInt(limit) : 10,
	};

	async function fetchArticles(token: string): Promise<ArticlesResponse[]> {
		const config = {
			method: "get",
			maxBodyLength: Infinity,
			url: "http://45.89.189.162:8000/articles/",
			headers: {
				Cookie: `access_token=${token}`, // Вставляем токен в заголовок Cookie
			},
			params: queryParams,
			data: "",
		};

		try {
			// Выполнение запроса
			const response = await axios.request(config);
			return response.data; // Возвращаем данные из ответа
		} catch (error) {
			// Обработка ошибок
			console.error("Ошибка при запросе:", error);
			throw new Error("Ошибка при получении статей");
		}
	}

	const articles = await fetchArticles(token);

	return NextResponse.json(articles);
}
