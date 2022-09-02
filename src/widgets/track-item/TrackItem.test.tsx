import React from "react";

import { fireEvent, render } from "../../utils";
import { TrackItem } from "./TrackItem";

test("Track title renders correctly", () => {
	const { getByText } = render(<TrackItem name="New Music" />);
	const titleText = getByText("New Music");
	expect(titleText).toBeDefined();
});

test("Track like button onPress work correctly", () => {
	const mockFn = jest.fn();
	const { getByTestId } = render(<TrackItem onLikeToggle={mockFn} />);
	const button = getByTestId("like-button");
	fireEvent.press(button);
	expect(mockFn).toBeCalledWith(true);
});

test("Liked track like button onPress work correctly", () => {
	const mockFn = jest.fn();
	const { getByTestId } = render(<TrackItem liked onLikeToggle={mockFn} />);
	const button = getByTestId("like-button");
	fireEvent.press(button);
	expect(mockFn).toBeCalledWith(false);
});
