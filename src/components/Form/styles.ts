import styled from "styled-components/native";

export const Container = styled.View`

  border-radius: 10px;
  background-color: ${({ theme }) => (theme.COLORS.BACK_SECUNDARY)};

  justify-content: center;
  align-items: center;

  padding: 22px;
  gap: 15px;
`;

export const TitleForm = styled.Text`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => (theme.COLORS.BACK_INPUT_TEXT)};
`;

