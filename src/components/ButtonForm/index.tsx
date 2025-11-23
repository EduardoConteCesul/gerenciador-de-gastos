import { Button, TextButton } from "./styles";

type Props = {
  onRegistry: () => void
}

export function ButtonForm({ onRegistry }: Props) {
  return (
    <Button onPress={onRegistry}>
      <TextButton>Salvar Despesa</TextButton>
    </Button>
  )
}