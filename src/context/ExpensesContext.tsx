import { ReactNode, createContext, useEffect, useState } from "react";

type ExpensesType = {
  name: string
  value: string
  type: string
}

type ExpensesContentTypes = {
  expenses: ExpensesType[]
  total: number
  IncludeExpenses: (
    name: string,
    value: string,
    type: string
  ) => void
}

type ExpensesContentProviderTypes = {
  children: ReactNode
}

export const ExpensesContext = createContext({} as ExpensesContentTypes)

export function ExpensesContextProvider({children}: ExpensesContentProviderTypes) {
  const [expenses, setExpenses] = useState<ExpensesType[]>([])
  const [total, setTotal] = useState(0)

  function IncludeExpenses(
    name: string,
    value: string,
    type: string
  ) {
    const newExpense = {
      name,
      value,
      type
    }

    setExpenses(prevExpenses => prevExpenses.concat(newExpense))
  }

  useEffect(() => {
    calcTotal()
  }, [expenses])

  function calcTotal() {
    const valuesArray: number[] = []
    let total = 0

    expenses.map((item) => {
      const valueString = item.value.replace('R$', '').replace(' ', '')
      const valueNumber = parseFloat(valueString)
      
      valuesArray.push(valueNumber)

      if (item.type === 'entrada') {
        total = total + valueNumber
      } else {
        total = total - valueNumber
      }
    })


    setTotal(total)
  }

  return (
    <ExpensesContext.Provider value={{
      expenses,
      IncludeExpenses,
      total
    }}>
      {children}
    </ExpensesContext.Provider>
  )
}