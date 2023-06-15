export type ExpensesType = {
  name: string
  value: number
  isEntry: boolean
  isFixed: boolean
  category: string 
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
  name: number
  expenses?: ExpensesType[]
}

export type ProfileType = {
  id: number
  name: string
  password?: string
}