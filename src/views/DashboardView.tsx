import { Dashboard } from "../components/Dashboard";
import { ExpensesBoard } from "../components/ExpensesBoard";
import { Header } from "../components/Header";
import { useContext } from 'react'
import { MonthContext } from "../context/MonthContext";
import { ModalForm } from "../components/ModalForm";

export function DashboardView() {
  const { month } = useContext(MonthContext)

  const {
    month: monthId,
    totalAmountLeft,
    totalEntryExpenses,
    totalExpenses,
    totalFixedEntryExpenses,
    totalFixedExpenses,
    year
  } = month

  return (
    <>
      <Header />
      <Dashboard 
        month={monthId} 
        totalAmountLeft={totalAmountLeft} 
        totalEntryExpenses={totalEntryExpenses} 
        totalExpenses={totalExpenses} 
        totalFixedEntryExpenses={totalFixedEntryExpenses} 
        totalFixedExpenses={totalFixedExpenses} 
        year={year} 
      />
      <ExpensesBoard />
      <ModalForm />
    </>
  )
}