import { InputText } from "./styles";

type Props = {
  placeholder: string;
}

export function InputTextForm({ placeholder }: Props){
  return(
    <InputText placeholder={placeholder}/>
  )
}