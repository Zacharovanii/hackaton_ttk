import { NextRequest, NextResponse } from "next/server";
import { apiClient } from "@/services/api-client";
interface RegisterRequest {
	username: string;
	full_name: string;
	email: string;
	password: string;
}

export async function POST(request: NextRequest) {
	const { username, full_name, email, password } =
		(await request.json()) as RegisterRequest;

	const response = await apiClient.auth.register({
		username: username,
		full_name: full_name,
		email: email,
		password: password,
	});
	console.log(response.data);
	await fetch("/api/auth/login", {
		method: "POST",
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	});
	return NextResponse.json(response.data);
}
