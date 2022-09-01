import React, { FC, ReactElement, useRef } from "react";
import { render } from "@testing-library/react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { QueryClientProvider } from "react-query";
import { RouteListBase } from "../navigation";
import { lightTheme } from "../theme";
import { store } from "../redux";
import { queryClient } from "../api";

const AllTheProviders: FC<{ children: JSX.Element }> = ({ children }) => {
	const Stack = createNativeStackNavigator();
	const queryClientRef = useRef(queryClient());
	const navigationRef = useNavigationContainerRef<RouteListBase>();

	return (
		<ThemeProvider theme={lightTheme}>
			<Provider store={store}>
				<NavigationContainer ref={navigationRef}>
					<QueryClientProvider client={queryClientRef.current}>
						<Stack.Navigator>
							<Stack.Screen name="MockedScreen">{() => children}</Stack.Screen>
						</Stack.Navigator>
					</QueryClientProvider>
				</NavigationContainer>
			</Provider>
		</ThemeProvider>
	);
};

const customRender = (ui: ReactElement, options?: Omit<never, "queries">) =>
	render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react-native";
const isTestMode = () => process.env.JEST_WORKER_ID !== undefined;
export { customRender as render, isTestMode };
