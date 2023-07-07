import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { MonthType } from "../@types";
import { FetchMonth } from "../lib/utils/fetch-month";
import { ProfileContext } from "./ProfileContext";

type MonthContextProps = {
  month: MonthType,
  UpdateMonth: () => void 
}

type MonthContextProviderProps = {
  children: ReactNode
}

export const MonthContext = createContext({} as MonthContextProps)


export function MonthContextProvider({
  children
}: MonthContextProviderProps) {
  const { profile } = useContext(ProfileContext)

  const initialMonthProps = {
    id: 0,
    month: 1,
    year: 0,
    totalExpenses: 0, 
    totalFixedExpenses: 0,
    totalEntryExpenses: 0,
    totalFixedEntryExpenses: 0,
    totalAmountLeft: 0
  }

  const [month, setMonth] = useState<MonthType>(initialMonthProps as MonthType)

  async function UpdateMonth() {
    if (!profile) return

    const updatedMonth = await FetchMonth(profile.id)

    if (updatedMonth.length < 1) setMonth(initialMonthProps)
     else setMonth(updatedMonth[0])
  }

  useEffect(() => {
    if (!profile) return
    FetchMonth(profile?.id).then(response => response.length > 0 && setMonth(response[0]))
  }, [profile])

  return(
    <MonthContext.Provider value={{
      month,
      UpdateMonth
    }}>
      {children}
    </MonthContext.Provider>
  )
} 