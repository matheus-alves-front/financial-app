import { ExpensesType } from "../../@types";
import Constants from 'expo-constants';

export function DivideExpensesTypeArrays(expensesArray: ExpensesType[]) {
  let expenses: ExpensesType[] = [] 
  let fixedExpenses: ExpensesType[] = []

  expensesArray.map((expense) => {
    if (expense.isFixed) {
      fixedExpenses.push(expense)
    } else {
      expenses.push(expense)
    }
  })

  return {
    expenses,
    fixedExpenses
  }
}

export async function FetchExpenses(profileId: number) {
  const apiUrl = Constants?.expoConfig?.extra?.apiUrl

  const expensesResponse = await fetch(`${apiUrl}/profile/${profileId}/expenses`)
  const expensesData: ExpensesType[] = await expensesResponse.json()

  const {expenses, fixedExpenses} = DivideExpensesTypeArrays(expensesData)

  return {
    expenses,
    fixedExpenses
  }
}