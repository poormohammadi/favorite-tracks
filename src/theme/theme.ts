import { DefaultTheme } from "styled-components/native";
import { normalize } from "../utils";

import { colorslight, colorsNeutral } from "./colors";

export const lightTheme: DefaultTheme = {
	normalize,
	fontSize: {
		tiny: `${normalize(12)}px`,
		small: `${normalize(14)}px`,
		normal: `${normalize(16)}px`,
		medium: `${normalize(20)}px`,
		large: `${normalize(28)}px`,
	},
	colors: {
		screen: {
			default: colorslight.grey.lightest,
		},

		card: colorsNeutral.white,

		indicator: {
			default: colorslight.grey.light,
			active: colorslight.blue.main,
		},

		icon: {
			default: colorslight.grey.darker,
			info: colorsNeutral.white,
			success: colorsNeutral.white,
			error: colorsNeutral.white,
		},

		button: {
			primary: colorslight.blue.main,
			outlined: colorsNeutral.white,
		},

		text: {
			default: colorslight.grey.dark,
		},

		border: {
			default: colorslight.grey.main,
		},
	},
};
