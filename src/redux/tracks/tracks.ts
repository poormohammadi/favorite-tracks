import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Type {
  isLoadingTracks: boolean;
}

const initialState: Type = {
	isLoadingTracks: false,
};

const tracksSlice = createSlice({
	name: "tracksSlice",
	initialState,
	reducers: {
		setIsLoadingTracks(state, action: PayloadAction<boolean>) {
			state.isLoadingTracks = action.payload;
		},
	},
});

export default tracksSlice.reducer;
export const { setIsLoadingTracks } = tracksSlice.actions;
