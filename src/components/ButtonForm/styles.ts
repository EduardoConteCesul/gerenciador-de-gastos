import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  background-color: ${({ theme }) => (theme.COLORS.SAVE_BUTTON)};
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;