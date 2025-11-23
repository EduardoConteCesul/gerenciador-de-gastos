import { IconTest, ReturnPageButton } from "./styles";

type Props = {
  onPress: () => void
  icon: 'PRIMARY' | 'SECONDARY'
}

export function BackButton({ onPress, icon }: Props) {
  return (
    <ReturnPageButton onPress={onPress}>
      <IconTest name={icon == 'PRIMARY' ? "list" : "add"} />
    </ReturnPageButton>
  )
}