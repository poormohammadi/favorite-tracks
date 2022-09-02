import React from "react";

import { fireEvent, render } from "../../utils";
import { Rating } from "./Rating";

test("Default stars count renders correctly", () => {
	const { getAllByTestId } = render(<Rating />);
	const stars = getAllByTestId("star");
	expect(stars.length).toBe(5);
});

test("Star count renders correctly", () => {
	const { getAllByTestId } = render(<Rating starsCount={7} />);
	const stars = getAllByTestId("star");
	expect(stars.length).toBe(7);
});

test("Star press works correctly", () => {
	const mockFn = jest.fn();
	const { getAllByTestId } = render(<Rating onRatingChange={mockFn} />);
	const stars = getAllByTestId("star");
	fireEvent.press(stars[2]);
	expect(mockFn).toBeCalledWith(3);
});

test("Star disabled works correctly", () => {
	const mockFn = jest.fn();
	const { getAllByTestId } = render(<Rating disabled onRatingChange={mockFn} />);
	const stars = getAllByTestId("star");
	fireEvent.press(stars[2]);
	expect(mockFn).not.toBeCalled();
});
