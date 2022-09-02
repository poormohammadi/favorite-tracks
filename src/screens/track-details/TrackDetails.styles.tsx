import styled from "styled-components/native";
import { Typography } from "../../components";
import { wp } from "../../utils";

export const Cover = styled.Image`
    width: ${wp(100) - 20};
	height: ${wp(100) - 20};
`;

export const Container = styled.View`
    padding: 10px;
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