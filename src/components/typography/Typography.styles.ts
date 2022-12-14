import styled from "styled-components/native";

export const Tiny = styled.Text`
  font-family: "System";
  color: ${(props) => props.theme.colors.text.default};
  font-size: ${(props) => props.theme.fontSize.tiny};
`;

export const Title = styled(Tiny)`
  font-size: ${(props) => props.theme.fontSize.large};
  line-height: ${(props) => props.theme.normalize(28)}px;
`;

export const SubTitle = styled(Tiny)`
  font-size: ${(props) => props.theme.fontSize.normal};
  line-height: ${(props) => props.theme.normalize(24)}px;
`;

export const Small = styled(Tiny)`
  font-size: ${(props) => props.theme.fontSize.small};
  line-height: ${(props) => props.theme.normalize(20)}px;
`;
