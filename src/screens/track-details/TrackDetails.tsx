import Slider from "@react-native-community/slider";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { LikeButton, Rating } from "../../components";

import { formatSecondsAsDurationString, useAudioPlayer, useRoute } from "../../utils";
import { Container, Cover, Duration } from "./TrackDetails.styles";

type TrackDetailsProps = {
}
export const TrackDetails = () => {
	const { params } = useRoute<"trackDetails">();
	const { playSound, playbackStatus, playFromPosition } = useAudioPlayer({
		audioUrl: params.data.audio
	});

	useEffect(() => {
		console.log(playbackStatus);
	}, [playbackStatus]);

	return (
		<Container>
			<TouchableOpacity onPress={playSound}>
				<Cover source={{ uri: params.data.cover }} />
			</TouchableOpacity>
			<LikeButton />
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
				{`${formatSecondsAsDurationString(playbackStatus?.positionMillis)} / ${formatSecondsAsDurationString(playbackStatus?.durationMillis)}`}
			</Duration>
			<Rating />

		</Container>
	);
};
