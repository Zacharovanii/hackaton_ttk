import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instnance";

export const getUser = async (token: string) => {
	const response = await axiosInstance.get(ApiRoutes.USER_GET, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response;
};
