import { NextResponse } from "next/server";

export async function POST() {
	try {
		const response = await fetch("http://45.89.189.162/auth/logout", {
			method: "POST",
			headers: {
				accept: "application/json",
			},
		});

		const data = await response.json();

		if (!response.ok) {
			return NextResponse.json(
				{ error: data.detail || "Ошибка при выходе из системы" },
				{ status: response.status }
			);
		}

		return NextResponse.json(data);
	} catch (error) {
		console.error("Ошибка при выходе из системы:", error);
		return NextResponse.json(
			{ error: "Внутренняя ошибка сервера" },
			{ status: 500 }
		);
	}
}
