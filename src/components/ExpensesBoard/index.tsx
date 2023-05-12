import { useContext } from "react";
import { FlatList, Text } from "react-native";
import { ExpensesContext } from "../../context/ExpensesContext";
import { ExpenseItem } from "../ExpenseItem";
import { Container } from "./styles";
import { DropDown } from "../../lib/components/DropDown";

export function ExpensesBoard() {
  const {
    expenses,
    fixedExpenses
  } = useContext(ExpensesContext)

  return (
    <Container>
      <DropDown title="Fixos">
        {fixedExpenses.length !== 0 ? 
          <FlatList 
          data={fixedExpenses}
            renderItem={({item}) => <ExpenseItem expense={item} />}
          />
          :
          <Text>Você ainda não adicionou gastos fixos</Text>
        }
      </DropDown>
      {expenses.length ? null : <Text>Você ainda não adicionou itens</Text>}
      <FlatList 
        data={expenses}
        renderItem={({item}) => <ExpenseItem expense={item} />}
      />
    </Container>
  )
}