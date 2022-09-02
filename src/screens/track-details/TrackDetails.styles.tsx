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