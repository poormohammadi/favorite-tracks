import React from "react";
import { TextProps } from "react-native";
import { Title, Small, SubTitle, Tiny } from "./Typography.styles";

export type TypographyVariantType = "tiny" | "title" | "subtitle" | "small";

export interface TypographyProps extends TextProps {
  variant?: TypographyVariantType;
}

export const Typography = ({ variant, children, ...rest }: TypographyProps) => {
	if (variant === "title") {
		return <Title {...rest}>{children}</Title>;
	}
	if (variant === "subtitle") {
		return <SubTitle {...rest}>{children}</SubTitle>;
	}

	if (variant === "small") {
		return <Small {...rest}>{children}</Small>;
	}

	return <Tiny {...rest}>{children}</Tiny>;
};
