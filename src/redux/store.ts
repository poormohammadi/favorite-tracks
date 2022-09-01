import { configureStore } from "@reduxjs/toolkit";
import tracksStates from "./tracks/tracks";

const store = configureStore({
	reducer: {
		tracksStates,
	},
});

export default store;
