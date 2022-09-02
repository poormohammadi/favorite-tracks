import React from "react";
import { TouchableOpacity, Image, TouchableOpacityProps } from "react-native";

const LIKE_IMAGE = require("../../../assets/icons/heart/heart-filled-black.png");
const UNLIKE_IMAGE = require("../../../assets/icons/heart/heart-line-black.png");

type LikeButtonProps = TouchableOpacityProps & {
    size?: number;
    liked?: boolean;
    onToggle: (v: boolean) => void;
}

export const LikeButton = ({ liked, onToggle, size = 30, ...props }: LikeButtonProps) => {
	return (
		<TouchableOpacity testID="like-button" onPress={() => onToggle(!liked)} {...props}>
			<Image style={{ width: size, height: size }} source={liked ? LIKE_IMAGE : UNLIKE_IMAGE} />
		</TouchableOpacity>
	);
};
