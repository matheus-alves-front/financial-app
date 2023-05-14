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

  const [month, setMonth] = useState<MonthType>({
  } as MonthType)

  async function UpdateMonth() {
    if (!profile) return

    const updatedMonth = await FetchMonth(profile.id)

    setMonth(updatedMonth[0])
  }

  useEffect(() => {
    if (!profile) return
    FetchMonth(profile?.id).then(response => setMonth(response[0]))
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