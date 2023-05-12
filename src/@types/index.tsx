export type ExpensesType = {
  name: string
  value: number
  isEntry: boolean
  isFixed: boolean 
}

export interface FixedExpensesType extends ExpensesType {
  isValid: boolean
}  

