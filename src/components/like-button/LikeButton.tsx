import React from "react";
import { TouchableOpacity, Image } from "react-native";

const LIKE_IMAGE = require("../../../assets/icons/heart/heart-filled-black.png");
const UNLIKE_IMAGE = require("../../../assets/icons/heart/heart-line-black.png");

type LikeButtonProps = {
    liked?: boolean;
    onToggle: (v: boolean) => void;
}

export const LikeButton = ({ liked, onToggle }: LikeButtonProps) => {
	return (
		<TouchableOpacity testID="like-button" onPress={() => onToggle(!liked)}>
			<Image source={liked ? LIKE_IMAGE : UNLIKE_IMAGE} />
		</TouchableOpacity>
	);
};
