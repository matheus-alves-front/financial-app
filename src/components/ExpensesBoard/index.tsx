import { useContext } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { ExpensesContext } from "../../context/ExpensesContext";
import { ExpenseItem } from "../ExpenseItem";
import { Container } from "./styles";

export function ExpensesBoard() {
  const {
    expenses
  } = useContext(ExpensesContext)

  return (
    <Container>
      {expenses.length ? null : <Text>Você ainda não adicionou itens</Text>}
      <FlatList 
        data={expenses}
        renderItem={({item}) => <ExpenseItem expense={item} />}
      />
    </Container>
  )
}