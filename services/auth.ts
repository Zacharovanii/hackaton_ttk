import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instnance";

interface LoginRequest {
	email: string;
	password: string;
}

export const login = async (request: LoginRequest) => {
	const response = await axiosInstance.post(ApiRoutes.AUTH_LOGIN, {
		email: request.email,
		password: request.password,
	});
	return response;
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
