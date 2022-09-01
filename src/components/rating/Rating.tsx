import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { RatingContainer } from "./Rating.styles";

const SELECTED_STAR_IMAGE = require("../../../assets/icons/star/star-filled-black.png");
const UNSELECTED_STAR_IMAGE = require("../../../assets/icons/star/star-line-black.png");

type RatingProps = {
    disabled?: boolean;
    size?: number;
    starsCount?: number;
    rating?: number;
    onRatingChange?: (raating: number) => void;
}

export const Rating = ({ disabled, size = 30, starsCount = 5, rating = 0, onRatingChange }: RatingProps) => {
	return (
		<RatingContainer>
			{[...Array(starsCount)].map((_, index) =>
				<TouchableOpacity testID="star" key={index} disabled={disabled} onPress={() => onRatingChange(index + 1)}>
					<Image style={{ width: size, height: size }} source={rating < index + 1 ? UNSELECTED_STAR_IMAGE : SELECTED_STAR_IMAGE} />
				</TouchableOpacity>
			)}
		</RatingContainer>
	);
};
