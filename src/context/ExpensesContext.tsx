import axios from "axios";
import { ReactNode, createContext, useEffect, useLayoutEffect, useState } from "react";
import Constants from 'expo-constants';
import { ExpensesType } from "../@types";
import { DivideExpensesTypeArrays, FetchExpenses } from "../lib/utils/fetch-expenses-rules";

type ExpensesContentTypes = {
  expenses: ExpensesType[]
  fixedExpenses: ExpensesType[]
  total: number
  totalPrice: string
  IncludeExpenses: (
    name: string,
    value: number,
    isEntry: boolean,
    isFixed: boolean
  ) => void
}

type ExpensesContentProviderTypes = {
  children: ReactNode
}

export const ExpensesContext = createContext({} as ExpensesContentTypes)

export function ExpensesContextProvider({children}: ExpensesContentProviderTypes) {
  const apiUrl = Constants?.expoConfig?.extra?.apiUrl
  const [expenses, setExpenses] = useState<ExpensesType[]>([])
  const [fixedExpenses, setFixedExpenses] = useState<ExpensesType[]>([])

  const [total, setTotal] = useState(0)

  const [totalPrice, setTotalPrice] = useState('R$00.00')

  async function IncludeExpenses(
    name: string,
    value: number,
    isEntry: boolean,
    isFixed: boolean
  ) {
    const data = {
      name,
      isFixed,
      isEntry,
      value
    }

    const postExpense = await fetch(`${apiUrl}/expenses`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const expenseSent = await postExpense.json()

    
    const {expenses, fixedExpenses} = await FetchExpenses()
    
    setExpenses(expenses)
    setFixedExpenses(fixedExpenses)

    return expenseSent
  }

  useEffect(() => {
    calcTotal()
  }, [expenses, fixedExpenses])


  useEffect(() => {
    FetchExpenses().then(expenses => {
      setExpenses(expenses.expenses)
      setFixedExpenses(expenses.fixedExpenses)
    })
  }, [])


  function calcTotal() {
    const valuesArray: number[] = []
    let total = 0

    expenses.map((item) => {
      const value = item.value
      
      valuesArray.push(value)

      if (item.isEntry) {
        total = total + value
      } else {
        total = total - value
      }
    })

    fixedExpenses.map((item) => {
      const value = item.value
      
      valuesArray.push(value)

      if (item.isEntry) {
        total = total + value
      } else {
        total = total - value
      }
    })

    setTotal(total)
  }

  useEffect(() => {
    setTotalPrice(`R$${total.toFixed(2)}`)
  }, [total])

  return (
    <ExpensesContext.Provider value={{
      expenses,
      fixedExpenses,
      IncludeExpenses,
      totalPrice,
      total
    }}>
      {children}
    </ExpensesContext.Provider>
  )
}