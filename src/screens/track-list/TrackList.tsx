import React from "react";
import { FlatList } from "react-native";

import { useTrackList } from "../../api/tracks/tracks";
import { setLikedTrackTitle, useAppDispatch, useAppSelector } from "../../redux";
import { useNavigate } from "../../utils";
import { TrackItem } from "../../widgets";
import { Container } from "./TrackList.styles";

export const TrackList = () => {
	const { data: trackList } = useTrackList();

	const navigation = useNavigate();

	const dispatch = useAppDispatch();
	const ratings = useAppSelector((state) => state.tracksStates.ratings);
	const likedTrackTitle = useAppSelector((state) => state.tracksStates.likedTrackTitle);

	return (
		<Container>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={trackList}
				renderItem={({ item }) =>
					<TrackItem
						image={item.cover}
						key={item.title}
						name={item.title}
						liked={likedTrackTitle === item.title}
						onLikeToggle={(liked?: boolean) => dispatch(setLikedTrackTitle(liked ? item.title : ""))}
						rating={ratings[item.title]}
						disableRating
						onPress={() => navigation.navigate("trackDetails", { data: item })}
					/>
				}
			/>
		</Container>
	);
};
