import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TrackDetails, TrackList } from "../screens";

import { screenOption } from "./config";

const Stack = createNativeStackNavigator();

export const Navigation = () => (
	<Stack.Navigator initialRouteName="trackList" screenOptions={screenOption}>
		<Stack.Screen name="trackList" options={{ title: "Track List" }} component={TrackList} />
		<Stack.Screen
			name="trackDetails"
			options={{ title: "Track Details" }}
			component={TrackDetails} />
	</Stack.Navigator>
);
