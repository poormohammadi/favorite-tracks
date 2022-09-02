import React from "react";
import { render } from "../../utils";

import { Typography } from "./Typography";

test("Typography show a text", () => {
	const { getByText } = render(<Typography>sample text</Typography>);
	expect(getByText("sample text")).toBeDefined();
});
