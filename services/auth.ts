import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instnance";

interface LoginRequest {
	email: string;
	password: string;
}

export const login = async (request: LoginRequest) => {
	// function getCookie(name: string) {
	// 	const value = `; ${document.cookie}`;
	// 	const parts = value.split(`; ${name}=`);
	// 	if (parts.length === 2) return parts.pop()?.split(";").shift();
	// 	return null;
	// }

	try {
		const response = await axiosInstance.post(
			ApiRoutes.AUTH_LOGIN,
			{
				email: request.email,
				password: request.password,
			},
			{
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
		// .then(() => {
		// 	const token = getCookie("access_token");
		// 	console.log("Token:", token);
		// 	console.log(document.cookie);
		// });

		return response;
	} catch (error) {
		console.error("Error logging in:", error);
		throw error;
	}
};

interface RegisterRequest {
	username: string;
	full_name: string;
	email: string;
	password: string;
}

export const register = async (request: RegisterRequest) => {
	const response = await axiosInstance.post(ApiRoutes.AUTH_REGISTER, {
		username: request.username,
		full_name: request.full_name,
		email: request.email,
		password: request.password,
	});
	return response;
};

export const logout = async () => {
	const response = await axiosInstance.post(ApiRoutes.AUTH_LOGOUT);
	return response;
};
