import { ReactNode, createContext, useEffect, useState } from "react";
import { MonthType } from "../@types";
import { FetchMonth } from "../lib/utils/fetch-month";

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
  const [month, setMonth] = useState<MonthType>({} as MonthType)

  async function UpdateMonth() {
    const updatedMonth = await FetchMonth()

    setMonth(updatedMonth[0])
  }

  useEffect(() => {
    FetchMonth().then(response => setMonth(response[0]))
  },[])

  return(
    <MonthContext.Provider value={{
      month,
      UpdateMonth
    }}>
      {children}
    </MonthContext.Provider>
  )
} 