export type ExpensesType = {
  name: string
  value: string
  type: string
}

export interface FixedExpensesType extends ExpensesType {
  isValid: boolean
}  

