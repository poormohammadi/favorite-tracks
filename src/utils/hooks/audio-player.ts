import React, { useCallback, useEffect, useState } from "react";
import { Audio, AVPlaybackStatus } from "expo-av";

type AudioPlayerProps = {
	audioUrl?: string;

}
export const useAudioPlayer = ({ audioUrl }: AudioPlayerProps) => {
	const [sound, setSound] = useState<Audio.Sound>();
	const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatus>();
	const [isLoading, setIsLoading] = useState(false);

	let interval: NodeJS.Timer;

	const playSound = useCallback(async () => {
		if (sound) {
			await sound.playAsync();
			sound.setOnPlaybackStatusUpdate(setPlaybackStatus);
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

	useEffect(() => {
		return sound
			? () => {
				clearInterval(interval);
				sound.unloadAsync();
			}
			: undefined;
	}, [sound]);

	return { playSound, isLoading, playbackStatus };
};
