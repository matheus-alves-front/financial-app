import { ExpensesType } from "../../@types";

import { ExpenseItemView, ExpenseTitle, ExpenseType, ExpenseValue } from "./style";

type ExpenseItemProps = {
  expense: ExpensesType
}

export function ExpenseItem({expense}: ExpenseItemProps) {
  return (
    <ExpenseItemView isEntry={expense.isEntry}>
      <ExpenseTitle>{expense.name}</ExpenseTitle>
      <ExpenseType>{expense.isEntry ? '+' : '-'}</ExpenseType>
      <ExpenseValue>{expense.value}</ExpenseValue>
    </ExpenseItemView>
  )
}

export function ExpenseFixedItem({expense}: ExpenseItemProps) {
  return (
    <ExpenseItemView isEntry={expense.isEntry}>
      <ExpenseTitle>{expense.name}</ExpenseTitle>
      <ExpenseType>{expense.isEntry ? '+' : '-'}</ExpenseType>
      <ExpenseValue>{expense.value}</ExpenseValue>
      {/* <Text>{expense.isValid}</Text> */}
    </ExpenseItemView>
  )
}