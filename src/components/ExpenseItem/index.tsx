import { Text } from "react-native";
import { View } from "react-native";
import { ExpensesType } from "../../@types";
import { ExpenseItemView, ExpenseTitle, ExpenseType, ExpenseValue } from "./style";

type ExpenseItemProps = {
  expense: ExpensesType
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