import { InputText } from "./styles";

type Props = {
  placeholder: string;
  onChangeText: (value: string) => void;
  value: string
}

export function InputTextForm({ placeholder, onChangeText, value }: Props) {
  return (
    <InputText
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  )
}