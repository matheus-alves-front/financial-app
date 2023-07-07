import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import Constants from 'expo-constants';
import { ExpensesType } from "../@types";
import { FetchExpenses } from "../lib/utils/fetch-expenses-rules";
import { MonthContext } from "./MonthContext";
import { ProfileContext } from "./ProfileContext";
import { CategoriesContext } from "./CategoriesContext";
import { LoadingContext } from "./LoadingContext";

type ExpensesContentTypes = {
  expenses: ExpensesType[]
  fixedExpenses: ExpensesType[]
  total: number
  totalPrice: string
  CreateExpense: (
    name: string,
    value: number,
    isEntry: boolean,
    isFixed: boolean,
    expiresInMonth: number,
    expiresInYear: number,
    category: string
  ) => void
  ChangeExpenseValue: (expenseId: number, value: number) => void
  ChangeExpenseName: (expenseId: number, name: string) => void
  ExcludeExpense: (expenseId: number) => void
}

type ExpensesContentProviderTypes = {
  children: ReactNode
}

export const ExpensesContext = createContext({} as ExpensesContentTypes)

export function ExpensesContextProvider({children}: ExpensesContentProviderTypes) {
  const { profile } = useContext(ProfileContext)
  const { handleLoading } = useContext(LoadingContext)
  const { UpdateCategories} = useContext(CategoriesContext)
  const { UpdateMonth } = useContext(MonthContext)
  const apiUrl = Constants?.expoConfig?.extra?.apiUrl

  const [expenses, setExpenses] = useState<ExpensesType[]>([])
  const [fixedExpenses, setFixedExpenses] = useState<ExpensesType[]>([])

  const [total, setTotal] = useState(0)
  const [totalPrice, setTotalPrice] = useState('R$00.00')

  async function CreateExpense(
    name: string,
    value: number,
    isEntry: boolean,
    isFixed: boolean,
    expiresInMonth: number,
    expiresInYear: number,
    category: string
  ) {
    if (!profile) return

    const data = {
      name,
      isFixed,
      isEntry,
      expiresInMonth,
      expiresInYear,
      value,
      category
    }

    let postExpense = null

    while(postExpense === null) {
      handleLoading(true, 'Adicionando Item')
      postExpense = await fetch(`${apiUrl}/profile/${profile.id}/expenses`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
    }

    const expenseSent = await postExpense.json()

    const {expenses, fixedExpenses} = await FetchExpenses(profile.id)
    
    setExpenses(expenses)
    setFixedExpenses(fixedExpenses)
    UpdateCategories(profile.id)

    UpdateMonth()

    handleLoading(false, '')

    return expenseSent
  }

  async function ChangeExpenseValue(expenseId: number, value: number) {
    if (!profile) return

    let putExpense = null

    while(putExpense === null) {
      handleLoading(true, 'Alterando Valor do Item')
      putExpense = await fetch(`${apiUrl}/profile/${profile.id}/expenses/${expenseId}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          value
        })
      })
    }

    const {expenses, fixedExpenses} = await FetchExpenses(profile.id)

    setExpenses(expenses)
    setFixedExpenses(fixedExpenses)
    UpdateCategories(profile.id)
    UpdateMonth()

    handleLoading(false, '')
  }

  async function ChangeExpenseName(expenseId: number, name: string) {
    if (!profile) return

    let putExpense = null

    while(putExpense === null) {
      handleLoading(true, 'Alterando Nome do Item')
      putExpense = await fetch(`${apiUrl}/profile/${profile.id}/expenses/${expenseId}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name
        })
      })
    }

    const {expenses, fixedExpenses} = await FetchExpenses(profile.id)

    setExpenses(expenses)
    setFixedExpenses(fixedExpenses)
    UpdateCategories(profile.id)
    UpdateMonth()

    handleLoading(false, '')
  }

  async function ExcludeExpense(expenseId: number) {
    if (!profile) return

    let postDeleteExpense = null

    while(postDeleteExpense === null) {
      handleLoading(true, 'Deletando Item')

      postDeleteExpense = await fetch(`${apiUrl}/profile/${profile.id}/expenses/${expenseId}`, {
        method: 'DELETE'
      }) 
    }

    const {expenses, fixedExpenses} = await FetchExpenses(profile.id)

    setExpenses(expenses)
    setFixedExpenses(fixedExpenses)
    UpdateCategories(profile.id)

    UpdateMonth()

    handleLoading(false, '')
  }

  useEffect(() => {
    calcTotal()
  }, [expenses, fixedExpenses])


  useEffect(() => {
    if (!profile) return

    FetchExpenses(profile.id).then(expenses => {
      setExpenses(expenses.expenses)
      setFixedExpenses(expenses.fixedExpenses)
    })
  }, [profile])


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
      CreateExpense,
      ChangeExpenseValue,
      ChangeExpenseName,
      ExcludeExpense,
      totalPrice,
      total
    }}>
      {children}
    </ExpensesContext.Provider>
  )
}