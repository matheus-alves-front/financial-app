import { useContext } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { ExpensesContext } from "../../context/ExpensesContext";

import { ExpenseItem } from "../ExpenseItem";
import { DropDown } from "../../lib/components/DropDown";


export function ExpensesBoard() {
  const {
    expenses,
    fixedExpenses
  } = useContext(ExpensesContext)

  return (
    <View style={styles.listContainer}>
      <DropDown title="Fixos">
        {fixedExpenses.length !== 0 ? 
          <FlatList 
            data={fixedExpenses}
            style={styles.expensesList}
            renderItem={({item}) => <ExpenseItem expense={item} />}
          />
          :
          <Text>Você ainda não adicionou gastos fixos</Text>
        }
      </DropDown>
      {expenses.length ? null : <Text>Você ainda não adicionou itens</Text>}
      <FlatList 
        data={expenses}
        style={styles.expensesList}
        renderItem={({item}) => <ExpenseItem expense={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
    padding: 15
  },
  expensesList: {
    width: '100%'
  }
})