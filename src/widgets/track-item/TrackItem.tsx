import React from "react";

import { Typography } from "../../components";
import { ActionRow, Card, CoverImage, StyledLikeButton, TrackRating } from "./TrackItem.styles";

type TrackItemProps = {
    name?: string;
    liked?: boolean;
    onLikeToggle: (v: boolean) => void;
    image?: string;
    onPress?: () => void;
    disableRating?: boolean;
    rating?: number;
}

export const TrackItem = ({ onLikeToggle, name, liked, image, disableRating, rating, onPress }: TrackItemProps) => {

	return (
		<Card onPress={onPress}>
			<CoverImage source={{ uri: image }} />
			<TrackRating rating={rating} disabled={disableRating} />
			<ActionRow>
				<Typography variant="title">
					{name}
				</Typography>
				<StyledLikeButton liked={liked} onToggle={onLikeToggle} />
			</ActionRow>
		</Card>
	);
};
