import React, { useState } from "react";
import { FlatList } from "react-native";

import { useTrackList } from "../../api/tracks/tracks";
import { useNavigate } from "../../utils";
import { TrackItem } from "../../widgets";
import { Container } from "./TrackList.styles";

export const TrackList = () => {
	const { data: trackList } = useTrackList();

	const [liked, setLiked] = useState(false);
	const navigation = useNavigate();

	return (
		<Container>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={trackList}
				renderItem={({ item, index }) =>
					<TrackItem
						image={item.cover}
						key={item.title}
						name={item.title}
						liked={liked}
						onLikeToggle={setLiked}
						rating={index + 2}
						disableRating
						onPress={() => navigation.navigate("trackDetails", { data: item })}
					/>
				}
			/>
		</Container>
	);
};
