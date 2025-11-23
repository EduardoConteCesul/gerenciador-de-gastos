import { InputTextForm } from "@components/InputTextForm";
import { Container, TitleForm } from "./styles";
import { ButtonForm } from "@components/ButtonForm";
import { useState } from "react";

export function Form() {

  return(
    <Container>
      <TitleForm>Cadastre sua Despesa</TitleForm>

      <InputTextForm placeholder="Descrição do Produto"/>
      <InputTextForm placeholder="Valor"/>
      <InputTextForm placeholder="Data"/>
      <InputTextForm placeholder="Categoria"/>
      <InputTextForm placeholder="Forma de Pagamento"/>
      <ButtonForm />
    </Container>
  )
}