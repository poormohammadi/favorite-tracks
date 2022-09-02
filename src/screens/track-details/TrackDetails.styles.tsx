import Slider from "@react-native-community/slider";
import styled from "styled-components/native";

import { Typography } from "../../components";
import { wp } from "../../utils";

const containerPadding = 10;
const imageSize = (wp(100) - 2 * containerPadding);
const buttonSize = imageSize / 3;

export const Cover = styled.Image`
    width: ${imageSize};
	height: ${imageSize};
`;

export const Container = styled.View`
    padding: ${containerPadding}px;
`;

export const Duration = styled(Typography)`
    text-align: center;
`;

export const ActionRow = styled.View`
    flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const PlayIcon = styled.Image`
	width: ${buttonSize / 2};
	height: ${buttonSize / 2};
`;

export const PlayButton = styled.TouchableHighlight`
	position: absolute;
	top: ${imageSize / 2 - buttonSize / 2 + containerPadding}px;
	left: ${imageSize / 2 - buttonSize / 2 + containerPadding}px;
	width: ${buttonSize};
	height: ${buttonSize};
	background-color: ${props => props.theme.colors.screen.default};
	border-radius: ${buttonSize / 2};
	justify-content: center;
	align-items: center;
`;

export const StyledSlider = styled(Slider)`
	height: 40px;
`;