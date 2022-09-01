import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";

import { Navigation, RouteListBase } from "./src/navigation";
import { store } from "./src/redux";
import { lightTheme } from "./src/theme";
export default function App() {
	const navigationRef = useNavigationContainerRef<RouteListBase>();

	return (
		<ThemeProvider theme={lightTheme}>
			<Provider store={store}>
				<NavigationContainer ref={navigationRef}>
					<Navigation />
				</NavigationContainer>
			</Provider>
		</ThemeProvider>
	);
}
