import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const ReturnPageButton = styled.TouchableOpacity`
  height: 40px;
  width: 50px;
  border-radius: 99px;
  background-color: ${({ theme }) => (theme.COLORS.SAVE_BUTTON)};
  justify-content: center;
  align-items: center;
`;

export const IconTest = styled(MaterialIcons).attrs(() => ({
  size: 24
}))``;