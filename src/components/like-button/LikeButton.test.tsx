import React from "react";
import { fireEvent, render } from "../../utils";

import { LikeButton } from "./LikeButton";

test("button onPress work correctly", () => {
	const mockFn = jest.fn();
	const { getByTestId } = render(<LikeButton liked onToggle={mockFn} />);
	const button = getByTestId("like-button");
	fireEvent.press(button);
	expect(mockFn).toBeCalledWith(false);
});
  