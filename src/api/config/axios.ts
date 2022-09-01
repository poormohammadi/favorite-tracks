import axios, { AxiosError } from "axios";

const instance = axios.create({
	baseURL: "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallenge/master/react%20native/simple%20audio%20player", // must be read from an env file
});

instance.interceptors.request.use(
	(config) =>
	// Future interceptor set up like adding tokens to header, etc
		config,
);

instance.interceptors.response.use(
	(response) => response.data,
	(error: AxiosError) => {
		// Future reponse interceptor setup like adding a global error handler, etc.
		return Promise.reject(error);
	},
);

export default instance;
