import Slider from "@react-native-community/slider";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { LikeButton, Rating } from "../../components";
import { setLikedTrackTitle, setRating, useAppDispatch, useAppSelector } from "../../redux";

import { formatSecondsAsDurationString, useAudioPlayer, useRoute } from "../../utils";
import { Container, Cover, Duration, ActionRow } from "./TrackDetails.styles";

export const TrackDetails = () => {
	const { params } = useRoute<"trackDetails">();
	const track = params.data;
	const { playSound, playbackStatus, playFromPosition } = useAudioPlayer({
		audioUrl: track.audio
	});

	const dispatch = useAppDispatch();
	const ratings = useAppSelector((state) => state.tracksStates.ratings);
	const likedTrackTitle = useAppSelector((state) => state.tracksStates.likedTrackTitle);

	useEffect(() => {
		console.log(playbackStatus);
	}, [playbackStatus]);

	return (
		<Container>
			<TouchableOpacity onPress={playSound}>
				<Cover source={{ uri: track.cover }} />
			</TouchableOpacity>
			<ActionRow>
				<Rating rating={ratings[track.title]} onRatingChange={(rating) => dispatch(setRating({ title: track.title, rating }))} />
				<LikeButton liked={likedTrackTitle === track.title} onToggle={(liked?: boolean) => dispatch(setLikedTrackTitle(liked ? track.title : ""))} />
			</ActionRow>
			<Slider
				style={{ width: "100%", height: 40 }}
				minimumValue={0}
				maximumValue={playbackStatus?.playableDurationMillis}
				value={playbackStatus?.positionMillis}
				onValueChange={playFromPosition}
				minimumTrackTintColor="#FFFFFF"
				maximumTrackTintColor="#000000"
			/>
			<Duration variant="subtitle">
				{`${formatSecondsAsDurationString(playbackStatus?.positionMillis)} / ${formatSecondsAsDurationString(track.totalDurationMs)}`}
			</Duration>

		</Container>
	);
};
