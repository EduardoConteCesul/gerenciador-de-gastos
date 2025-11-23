import { ButtonDelete, ButtonIcon, Container, ContentCenter, ContentPayment, Description, TextDate, TextValue, TypePayment } from "./styles";

export type ExpenseProps = {
  description: string;
  value: string;
  date: string;
  category: string;
  typePayment: string;
}

type Props = {
  data: ExpenseProps;
  onClickDel: () => void
}

export function Expense({ data, onClickDel }: Props) {
  return (
    <Container>
      <TextDate>{data.date}</TextDate>

      <ContentCenter>
        <Description>{data.description}</Description>

        <ContentPayment>
          <TypePayment>{data.typePayment}</TypePayment>
          <TextValue>R$ {data.value}</TextValue>
        </ContentPayment>

      </ContentCenter>
      <ButtonDelete onPress={onClickDel}>
        <ButtonIcon name="delete-outline" />
      </ButtonDelete>
    </Container>
  )
}