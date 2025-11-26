import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";

import { BackButton } from "@components/BackButton";
import { Expense } from "@components/Expense";
import { ContentCenter, Description } from "@components/Expense/styles";
import { Container, ContentBackButton, ContentFlatList, TitleList, TotalGastos } from "./styles";
import { FlatList } from "react-native";

type ExpenseProps = {
  description: string;
  valueProduct: string;
  date: string;
  typePayment: string;
}

export function ListPage() {
  const navigation = useNavigation();

  function handleNavigationToHomePage() {
    navigation.navigate('home');
  }

  const [data, setData] = useState<ExpenseProps[]>([]);
  const [total, setTotal] = useState<number>(0);

  async function loadData() {
    try {
      const response = await AsyncStorage.getItem('expenses');
      const expenses: ExpenseProps[] = response ? JSON.parse(response) : [];

      setData(expenses);
      calculateTotal(expenses);

    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  }

  function calculateTotal(expenses: ExpenseProps[]) {
    const totalSum = expenses.reduce((acumulador, item) => {
      const onlyNumbers = item.valueProduct.replace(/[^0-9,]/g, '');
      const cleanValue = onlyNumbers.replace(',', '.');
      const numberValue = parseFloat(cleanValue);
      const validValue = isNaN(numberValue) ? 0 : numberValue;

      return acumulador + validValue;
    }, 0);

    const formatedTotalSum = totalSum.toFixed(2);
    setTotal(Number(formatedTotalSum));
  }

  async function handleRemove(itemToDelete: ExpenseProps) {
    try {
      const newExpenses = data.filter(item => item.description !== itemToDelete.description || item.valueProduct !== itemToDelete.valueProduct);

      setData(newExpenses);
      calculateTotal(newExpenses);

      await AsyncStorage.setItem('expenses', JSON.stringify(newExpenses));

    } catch (error) {
      console.error("Erro ao remover item:", error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <Container>
      <ContentBackButton>
        <BackButton onPress={handleNavigationToHomePage} icon="SECONDARY" />
      </ContentBackButton>

      <TitleList>Lista de Despesas</TitleList>

      <ContentFlatList>
        <FlatList
          style={{ width: '100%' }}
          data={data}
          keyExtractor={(item, index) => item.description + index}
          renderItem={({ item }) => (
            <Expense
              data={item}
              onClickDel={() => handleRemove(item)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20, gap: 10 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ContentCenter>
              <Description style={{ textAlign: 'center' }}>Nenhuma despesa cadastrada</Description>
            </ContentCenter>
          )}
        />
      </ContentFlatList>

      <TotalGastos>R$ {total.toFixed(2).replace('.', ',')}</TotalGastos>

    </Container>
  )
}