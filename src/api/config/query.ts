import { QueryClient } from "react-query";

export const queryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: 0,
				staleTime: 60 * 1000,
			},
		},
	});
