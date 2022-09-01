import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import React, { useRef } from "react";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import { queryClient } from "./src/api";

import { Navigation, RouteListBase } from "./src/navigation";
import { store } from "./src/redux";
import { lightTheme } from "./src/theme";

export default function App() {
	const navigationRef = useNavigationContainerRef<RouteListBase>();
	const queryClientRef = useRef(queryClient());

	return (
		<ThemeProvider theme={lightTheme}>
			<Provider store={store}>
				<NavigationContainer ref={navigationRef}>
					<QueryClientProvider client={queryClientRef.current}>
						<Navigation />
					</QueryClientProvider>
				</NavigationContainer>
			</Provider>
		</ThemeProvider>
	);
}
