import { ReactNode, createContext, useState } from "react";

type ModalContext = {
  isAddItem: boolean
  handleAddItem: () => void
  isAddCategory: boolean
  handleAddCategory: () => void
  isToggleButton: boolean
  handleisToggleButton: () => void
}

type ModalContextProvider = {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContext)

export function ModalContextProvider({children}: ModalContextProvider) {
  const [isAddItem, setIsAddItem] = useState(false)
  const [isAddCategory, setIsAddCategory] = useState(false)
  const [isToggleButton, setIsToggleButton] = useState(false)

  function handleAddItem() {
    setIsAddItem(!isAddItem)
    setIsToggleButton(false)
  }

  function handleAddCategory() {
    setIsAddCategory(!isAddCategory)
    setIsToggleButton(false)
  }

  function handleisToggleButton() {
    setIsToggleButton(!isToggleButton)
  }

   return (
    <ModalContext.Provider value={{
      isAddItem,
      handleAddItem,
      isAddCategory,
      handleAddCategory,
      isToggleButton,
      handleisToggleButton
    }}>
      {children}
    </ModalContext.Provider>
   )
}