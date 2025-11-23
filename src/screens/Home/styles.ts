import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => (theme.COLORS.BACK_DEFAULT)};

  padding: 0px 20px 0px 20px;
`;

export const ContentBackButton = styled.View`
  margin-left: 310px;
  margin-top: 70px;
`;

export const ContentForm = styled.View`

  margin-top: 110px;
`;