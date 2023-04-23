import { ReactNode, createContext, useState } from "react";

type ModalContext = {
  isAddItem: boolean
  handleAddItem: () => void
}

type ModalContextProvider = {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContext)

export function ModalContextProvider({children}: ModalContextProvider) {
  const [isAddItem, setIsAddItem] = useState(false)

  function handleAddItem() {
    setIsAddItem(!isAddItem)
  }

   return (
    <ModalContext.Provider value={{
      isAddItem,
      handleAddItem
    }}>
      {children}
    </ModalContext.Provider>
   )
}