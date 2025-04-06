import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instnance";

export const getUser = async () => {
	const response = await axiosInstance.get(ApiRoutes.USER_GET, {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	});
	return response;
};
