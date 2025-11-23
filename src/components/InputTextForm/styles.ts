import styled from "styled-components/native";

export const InputText = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => (theme.COLORS.BACK_INPUT_TEXT)};

  padding-left: 5px;
  font-size: 16px;
  font-weight: bold;

  border-radius: 10px;
  
`;