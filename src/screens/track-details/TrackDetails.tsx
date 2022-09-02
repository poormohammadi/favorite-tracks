import React from "react";

import { LikeButton, Rating } from "../../components";
import { setLikedTrackTitle, setRating, useAppDispatch, useAppSelector } from "../../redux";
import { formatSecondsAsDurationString, useAudioPlayer, useRoute } from "../../utils";
import { ActionRow, Container, Cover, Duration, PlayButton, PlayIcon, StyledSlider } from "./TrackDetails.styles";

const PLAY_IMAGE = require("../../../assets/icons/play.png");
const PAUSE_IMAGE = require("../../../assets/icons/pause.png");

export const TrackDetails = () => {
	const { params } = useRoute<"trackDetails">();
	const track = params.data;
	const { playSound, playbackStatus, pauseSound, playFromPosition } = useAudioPlayer({
		audioUrl: track.audio
	});

	const dispatch = useAppDispatch();
	const ratings = useAppSelector((state) => state.tracksStates.ratings);
	const likedTrackTitle = useAppSelector((state) => state.tracksStates.likedTrackTitle);

	return (
		<Container>
			<>
				<Cover source={{ uri: track.cover }} />
				<PlayButton onPress={playbackStatus?.isPlaying ? pauseSound : playSound}>
					<PlayIcon source={playbackStatus?.isPlaying ? PAUSE_IMAGE : PLAY_IMAGE} />
				</PlayButton>
			</>
			<ActionRow>
				<Rating
					rating={ratings[track.title]}
					onRatingChange={(rating) => dispatch(setRating({ title: track.title, rating }))}
				/>
				<LikeButton
					liked={likedTrackTitle === track.title}
					onToggle={(liked?: boolean) => dispatch(setLikedTrackTitle(liked ? track.title : ""))}
				/>
			</ActionRow>
			<StyledSlider
				minimumValue={0}
				maximumValue={playbackStatus?.playableDurationMillis}
				value={playbackStatus?.positionMillis}
				onSlidingComplete={playFromPosition}
				minimumTrackTintColor="#FFFFFF"
				maximumTrackTintColor="#000000"
			/>
			<Duration variant="subtitle">
				{`${formatSecondsAsDurationString(playbackStatus?.positionMillis)} / ${formatSecondsAsDurationString(track.totalDurationMs)}`}
			</Duration>

		</Container>
	);
};
