import { ReactNode, createContext, useEffect, useState } from "react";

type ExpensesType = {
  name: string
  value: string
  type: string
}

interface FixedExpensesType extends ExpensesType {
  isValid: boolean
}  

type ExpensesContentTypes = {
  expenses: ExpensesType[]
  fixedExpenses: FixedExpensesType[]
  total: number
  IncludeExpenses: (
    name: string,
    value: string,
    type: string,
    isFixed: boolean
  ) => void
}

type ExpensesContentProviderTypes = {
  children: ReactNode
}

export const ExpensesContext = createContext({} as ExpensesContentTypes)

export function ExpensesContextProvider({children}: ExpensesContentProviderTypes) {
  const [expenses, setExpenses] = useState<ExpensesType[]>([])
  const [fixedExpenses, setFixedExpenses] = useState<FixedExpensesType[]>([])

  const [total, setTotal] = useState(0)

  function IncludeExpenses(
    name: string,
    value: string,
    type: string,
    isFixed: boolean
  ) {
    
    if (isFixed) {
      const newFixedExpense = {
        name,
        value,
        type,
        isValid: false
      }

      setFixedExpenses(prevExpenses => prevExpenses.concat(newFixedExpense))

      return
    }

    const newExpense = {
      name,
      value,
      type
    }

    setExpenses(prevExpenses => prevExpenses.concat(newExpense))
  }

  useEffect(() => {
    calcTotal()
  }, [expenses, fixedExpenses])

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

    fixedExpenses.map((item) => {
      const valueString = item.value.replace('R$', '').replace(' ', '')
      const valueNumber = parseFloat(valueString)
      
      valuesArray.push(valueNumber)

      // if (!item.isValid) return

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
      fixedExpenses,
      IncludeExpenses,
      total
    }}>
      {children}
    </ExpensesContext.Provider>
  )
}