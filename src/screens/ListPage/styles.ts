import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => (theme.COLORS.BACK_DEFAULT)};
  padding: 0px 20px 0px 20px;
  gap: 20px;
`;

export const TitleList = styled.Text`
  width: 100%;

  font-size: 32px;
  font-weight: bold;

  text-align: center;
`;

export const ContentBackButton = styled.View`
  width: 100%;
  margin-top: 70px;

  align-items: flex-end;
`;

export const ContentFlatList = styled.View`
  flex: 1;
  width: 100%;

  align-items: center;
`;

export const TotalGastos = styled.Text`
  width: 100%;
  margin-bottom: 20px;

  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;