import React, { useCallback, useEffect, useState } from "react";
import { Audio, AVPlaybackStatusSuccess } from "expo-av";

type AudioPlayerProps = {
	audioUrl?: string;

}
export const useAudioPlayer = ({ audioUrl }: AudioPlayerProps) => {
	const [sound, setSound] = useState<Audio.Sound>();
	const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatusSuccess>();
	const [isLoading, setIsLoading] = useState(false);

	let interval: NodeJS.Timer;

	const playSound = useCallback(async () => {
		if (sound) {
			await sound.playAsync();
			sound.setOnPlaybackStatusUpdate(setPlaybackStatus as never);
		}
	}, [sound]);

	useEffect(() => {
		if (sound) {
			// There seem to be a bug with expo-av as it doesn't call setOnPlaybackStatusUpdate frequently
			// So I had to add this function here
			// Ideally this useEffect should be removed
			interval = setInterval(() => {
				sound.getStatusAsync();
			}, 400);
		}
	}, [sound]);

	useEffect(() => {
		const loadSound = async () => {
			setIsLoading(true);
			const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
			setSound(sound);
			setIsLoading(false);
		};

		loadSound();
	}, []);

	const playFromPosition = useCallback((seconds: number) => {
		if (sound) {
			sound.playFromPositionAsync(seconds);
		}
	}, [sound]);

	useEffect(() => {
		return sound
			? () => {
				clearInterval(interval);
				sound.unloadAsync();
			}
			: undefined;
	}, [sound]);

	return { playSound, isLoading, playbackStatus, playFromPosition };
};
