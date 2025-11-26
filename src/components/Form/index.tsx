import { ButtonForm } from "@components/ButtonForm";
import { InputTextForm } from "@components/InputTextForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Controller, useForm } from "react-hook-form";
import { Container, TitleForm } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const expenseSchema = z.object({
  description: z.string().min(3, "A descrição deve ter no mínimo 3 caracteres."),
  valueProduct: z.string().regex(/^[0-9]+([,\.][0-9]{2})?$/, "Formato de valor inválido."),
  date: z.string().length(5, "A data deve estar no formato DD/MM"),
  typePayment: z.string().min(1, "Selecione uma forma de pagamento."),
});

type FormData = z.infer<typeof expenseSchema>;

export function Form() {

  const {
    control,
    handleSubmit,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      description: "",
      valueProduct: "",
      date: "",
      typePayment: "",
    }
  });

  const storeData = async (newExpense: FormData) => {
    try {
      const listaAtual = await AsyncStorage.getItem('expenses');
      const dadosAtuais = listaAtual ? JSON.parse(listaAtual) : [];
      const novosDados: FormData[] = [...dadosAtuais, newExpense];
      await AsyncStorage.setItem('expenses', JSON.stringify(novosDados));
      reset();
    } catch (e) {
      console.error('Erro ao salvar:', e);
    }
  }

  const onSubmit = (data: FormData) => {
    storeData(data);
  }

  return (
    <Container >
      <TitleForm>Cadastre sua Despesa</TitleForm>

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <InputTextForm
            placeholder="Descrição do Produto"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="valueProduct"
        render={({ field: { onChange, value } }) => (
          <InputTextForm
            placeholder="Valor"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value } }) => (
          <InputTextForm
            placeholder="Data"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="typePayment"
        render={({ field: { onChange, value } }) => (
          <InputTextForm
            placeholder="Forma de Pagamento"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <ButtonForm onRegistry={handleSubmit(onSubmit)} />
    </Container>
  )
}