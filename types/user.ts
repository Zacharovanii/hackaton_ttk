export interface User {
	user_id: number;
	username: string;
	full_name: string;
	email: string;
	avatar: string | null;
	role_id: number;
	registered_at: string;
}
