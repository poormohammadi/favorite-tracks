import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Type {
  likedTrackTitle?: string;
  ratings: { [title: string]: number; };
}

const initialState: Type = {
	ratings: {},
};

const tracksSlice = createSlice({
	name: "tracksSlice",
	initialState,
	reducers: {
		setLikedTrackTitle(state, action: PayloadAction<string>) {
			state.likedTrackTitle = action.payload;
		},
		setRating(state, action: PayloadAction<{ title: string, rating: number }>) {
			state.ratings[action.payload.title] = action.payload.rating;
		},
	},
});

export default tracksSlice.reducer;
export const { setLikedTrackTitle, setRating } = tracksSlice.actions;
