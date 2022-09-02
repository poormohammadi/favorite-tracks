import React from "react";
import { FlatList, RefreshControl } from "react-native";

import { useTrackList } from "../../api/tracks/tracks";
import { setLikedTrackTitle, useAppDispatch, useAppSelector } from "../../redux";
import { useNavigate } from "../../utils";
import { TrackItem } from "../../widgets";
import { Container } from "./TrackList.styles";

export const TrackList = () => {
	const { data: trackList, isLoading, isRefetching, refetch } = useTrackList();

	const navigation = useNavigate();

	const dispatch = useAppDispatch();
	const ratings = useAppSelector((state) => state.tracksStates.ratings);
	const likedTrackTitle = useAppSelector((state) => state.tracksStates.likedTrackTitle);

	return (
		<Container>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={trackList}
				refreshControl={
					<RefreshControl
						refreshing={isLoading || isRefetching}
						onRefresh={refetch}
					/>
				}
				renderItem={({ item: track }) =>
					<TrackItem
						image={track.cover}
						key={track.title}
						name={track.title}
						liked={likedTrackTitle === track.title}
						onLikeToggle={(liked?: boolean) => dispatch(setLikedTrackTitle(liked ? track.title : ""))}
						rating={ratings[track.title]}
						disableRating
						onPress={() => navigation.navigate("trackDetails", { data: track, title: track.title })}
					/>
				}
			/>
		</Container>
	);
};
