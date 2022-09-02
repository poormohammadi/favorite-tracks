import styled from "styled-components/native";
import { Rating, LikeButton } from "../../components";

export const Card = styled.Pressable`
	border: 1px solid ${(props) => props.theme.colors.border.default};
	background: ${props => props.theme.colors.card};
	position: relative;
	margin-bottom: 10px;
`;

export const CoverImage = styled.Image`
	width: 100%;
	height: 200px;
`;

export const TrackRating = styled(Rating)`
	position: absolute;
	top: 0px;
	z-index: 1;
`;

export const ActionRow = styled.View`
	background: ${props => props.theme.colors.card};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding-vertical: 10px;
`;

export const StyledLikeButton = styled(LikeButton)`
	position: absolute;
	right: 5px;
`;