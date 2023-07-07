export type ExpensesType = {
  id: number
  name: string
  value: number
  isEntry: boolean
  isFixed: boolean
  category: string 
  expiresInMonth?: number
  expiresInYear?: number
}

export type MonthType = {
  id: number
  month: number
  year: number
  totalExpenses: number
  totalFixedExpenses: number
  totalEntryExpenses: number
  totalFixedEntryExpenses: number
  totalAmountLeft: number
}

export type CategoryType = {
  id: number
  name: string
  expenses: ExpensesType[]
}

export type ProfileType = {
  id: number
  name: string
  password?: string
}