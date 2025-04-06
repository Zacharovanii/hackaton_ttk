const axios = require("axios");

const login = async (email, password) => {
	try {
		const response = await axios.post(
			"http://45.89.189.162:8000/auth/login",
			{
				email: email,
				password: password,
			},
			{
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);

		if (response.status === 200) {
			const accessToken =
				response.data.access_token || response.headers["authorization"];
			console.log("Access Token:", accessToken);
			return accessToken;
		} else {
			throw new Error("Failed to login");
		}
	} catch (error) {
		console.error("Error logging in:", error);
		throw error;
	}
};

login("user@test3.com", "qwertyqwerty")
	.then((accessToken) => {
		console.log("Access Token:", accessToken);
	})
	.catch((error) => {
		console.error("Error logging in:", error);
	});
