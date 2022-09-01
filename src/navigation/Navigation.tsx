import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TrackDetails, TrackList } from "../screens";

import { screenOption } from "./config";

const Stack = createNativeStackNavigator();

export const Navigation = () => (
	<Stack.Navigator initialRouteName="trackList" screenOptions={screenOption}>
		<Stack.Screen name="trackList" component={TrackList} />
		<Stack.Screen name="trackDetails" component={TrackDetails} />
	</Stack.Navigator>
);
