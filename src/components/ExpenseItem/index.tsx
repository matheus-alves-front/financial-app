import { Text } from "react-native";

import { ExpensesType, FixedExpensesType } from "../../@types";

import { ExpenseFixedItemView, ExpenseItemView, ExpenseTitle, ExpenseType, ExpenseValue } from "./style";

type ExpenseItemProps = {
  expense: ExpensesType
}

type ExpenseFixedItemProps = {
  expense: FixedExpensesType
}

export function ExpenseItem({expense}: ExpenseItemProps) {
  return (
    <ExpenseItemView type={expense.type}>
      <ExpenseTitle>{expense.name}</ExpenseTitle>
      <ExpenseType>{expense.type === 'entrada' ? '+' : '-'}</ExpenseType>
      <ExpenseValue>{expense.value}</ExpenseValue>
    </ExpenseItemView>
  )
}

export function ExpenseFixedItem({expense}: ExpenseFixedItemProps) {
  return (
    <ExpenseFixedItemView type={expense.type}>
      <ExpenseTitle>{expense.name}</ExpenseTitle>
      <ExpenseType>{expense.type === 'entrada' ? '+' : '-'}</ExpenseType>
      <ExpenseValue>{expense.value}</ExpenseValue>
      <Text>{expense.isValid}</Text>
    </ExpenseFixedItemView>
  )
}