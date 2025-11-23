import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => (theme.COLORS.BACK_DEFAULT)};

  justify-content: center;
  padding: 0px 20px 0px 20px;
`;