import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { Navigation, RouteListBase } from "./src/navigation";
import { lightTheme } from "./src/theme";

export default function App() {
	const navigationRef = useNavigationContainerRef<RouteListBase>();

	return (
		<ThemeProvider theme={lightTheme}>
			<NavigationContainer ref={navigationRef}>
				<Navigation />
			</NavigationContainer>
		</ThemeProvider>
	);
}
