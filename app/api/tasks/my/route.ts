import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
	status_filter?: string;
	priority_filter?: string;
	token: string;
}

interface User {
	user_id: number;
	full_name: string;
	shift: string;
}

interface Response {
	id: number;
	title: string;
	description: string;
	status: string;
	priority: string;
	due_date: string;
	author: User;
	assignee: User;
	created_at: string;
	updated_at: string;
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const { status_filter, priority_filter, token } = body as RequestBody;

	const response = await axios.get("http://45.89.189.162:8000/tasks/my", {
		headers: {
			Cookie: `access_token=${token}`,
		},
		data: "",
	});

	return NextResponse.json(response.data);
}
