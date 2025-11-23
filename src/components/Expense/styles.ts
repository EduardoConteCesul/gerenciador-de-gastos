import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  height: 70px;
  width: 100%;
  background-color: ${({ theme }) => (theme.COLORS.BACK_SECUNDARY)};

  align-items: center;
  gap: 15px;

  padding-left: 10px;

  border-radius: 10px;
`;

export const TextDate = styled.Text`

  color: ${({ theme }) => (theme.COLORS.BACK_INPUT_TEXT)};
  font-size: 16px;
`;

export const ContentCenter = styled.View`
  flex: 1;
  gap: 5px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => (theme.COLORS.BACK_INPUT_TEXT)};
  font-size: 18px;
`;

export const ContentPayment = styled.View`
  flex-direction:row;
  justify-content: space-between;

  align-items: baseline;
`;

export const TypePayment = styled.Text`
  color: ${({ theme }) => (theme.COLORS.BACK_INPUT_TEXT)};
  font-size: 12px;
`;

export const TextValue = styled.Text`
  color: ${({ theme }) => (theme.COLORS.BACK_INPUT_TEXT)};
  font-size: 16px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  height: 70px;
  width: 70px;

  border: 1px;
  border-color: red;
  border-radius: 0px 10px 10px 0px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => (theme.COLORS.COLOR_REMOVE)};
`;

export const ButtonIcon = styled(MaterialIcons)`
  font-size: 30px;
`;

