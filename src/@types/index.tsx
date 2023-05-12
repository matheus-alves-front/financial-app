export type ExpensesType = {
  name: string
  value: number
  isEntry: boolean
  isFixed: boolean 
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

export interface FixedExpensesType extends ExpensesType {
  isValid: boolean
}  

