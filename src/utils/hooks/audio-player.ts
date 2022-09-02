import React, { useCallback, useEffect, useRef, useState } from "react";
import { Audio, AVPlaybackStatusSuccess } from "expo-av";
import { Platform } from "react-native";

type AudioPlayerProps = {
	audioUrl?: string;

}
export const useAudioPlayer = ({ audioUrl }: AudioPlayerProps) => {
	const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatusSuccess>();
	const [isLoading, setIsLoading] = useState(false);

	let interval: NodeJS.Timer;
	const audio = useRef(new Audio.Sound());

	const playSound = useCallback(async () => {
		if (playbackStatus?.positionMillis / playbackStatus?.durationMillis > 0.99) {
			audio.current.playFromPositionAsync(0);
		} else {
			audio.current.playAsync();
		}
		audio.current.setOnPlaybackStatusUpdate(setPlaybackStatus as never);
	}, [playbackStatus]);

	const pauseSound = useCallback(async () => {
		if (audio.current) {
			await audio.current.pauseAsync();
		}
	}, [audio.current]);

	useEffect(() => {
		if (Platform.OS === "ios") {
			// There seem to be a bug with expo-av as it doesn't call setOnPlaybackStatusUpdate frequently
			// So I had to add this function here
			// Ideally this useEffect should be removed
			interval = setInterval(() => {
				audio.current.getStatusAsync();
			}, 50);
		}
	}, [audio.current]);

	useEffect(() => {
		const loadSound = async () => {
			setIsLoading(true);
			audio.current.loadAsync({ uri: audioUrl });
		};
		loadSound();
		
		return () => {
			clearInterval(interval);
			audio?.current?.unloadAsync();
		};
	}, []);

	const playFromPosition = useCallback((seconds: number) => {
		if (audio.current) {
			audio.current?.setPositionAsync(seconds);
		}
	}, []);

	return { playSound, isLoading, playbackStatus, playFromPosition, pauseSound };
};
