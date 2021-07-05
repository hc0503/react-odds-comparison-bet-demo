import axios from "axios";

import envConfig from "../config/environments"

const api = axios.create({
	baseURL: envConfig.backendURL,
});

// Add request interceptor
api.interceptors.request.use(
	async (config) => {
		const acessToken = localStorage.getItem("accessToken");

		if (acessToken) {
			config.headers["Authorization"] = "Bearer " + acessToken;
		}
		config.headers["Content-Type"] = "application/json";
		config.headers["Accept"] = "application/json";

		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

export default api;
