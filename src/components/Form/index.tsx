import { ButtonForm } from "@components/ButtonForm";
import { InputTextForm } from "@components/InputTextForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Container, TitleForm } from "./styles";

type ExpenseProps = {
  description: string;
  value: string;
  date: string;
  typePayment: string;
}

export function Form() {

  const [description, setDescription] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [typePayment, setTypePayment] = useState<string>("");

  const storeData = async (newExpense: ExpenseProps) => {
    try {
      const listaAtual = await AsyncStorage.getItem('expenses');

      const dadosAtuais = listaAtual ? JSON.parse(listaAtual) : [];

      const novosDados: ExpenseProps[] = [...dadosAtuais, newExpense];

      await AsyncStorage.setItem('expenses', JSON.stringify(novosDados));
      clearForm();
    } catch (e) {
      console.error('Erro ao salvar:', e);
    }
  }

  function handleExpense() {
    if (!description || !value || !date || !typePayment) {
      return;
    }

    const newExpense: ExpenseProps = {
      description,
      value,
      date,
      typePayment
    }

    storeData(newExpense);
  }

  function clearForm() {
    setDescription("");
    setValue("");
    setDate("");
    setTypePayment("");
  }

  return (
    <Container>
      <TitleForm>Cadastre sua Despesa</TitleForm>

      <InputTextForm
        placeholder="Descrição do Produto"
        onChangeText={setDescription}
        value={description}
      />
      <InputTextForm
        placeholder="Valor"
        onChangeText={setValue}
        value={value}
      />
      <InputTextForm
        placeholder="Data"
        onChangeText={setDate}
        value={date}
      />
      <InputTextForm
        placeholder="Forma de Pagamento"
        onChangeText={setTypePayment}
        value={typePayment}
      />
      <ButtonForm onRegistry={handleExpense} />
    </Container>
  )
}