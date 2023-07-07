import { ReactNode, createContext, useState } from "react";

type ModalContext = {
  isAddItem: boolean
  handleAddItem: () => void
  isAddCategory: boolean
  handleAddCategory: () => void
  isToggleButton: boolean
  handleisToggleButton: () => void
  isEditItemName: boolean
  handleEditItemName: (isEdit: boolean) => void
  isEditItemValue: boolean
  handleEditItemValue: (isEdit: boolean) => void
}

type ModalContextProvider = {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContext)

export function ModalContextProvider({children}: ModalContextProvider) {
  const [isAddItem, setIsAddItem] = useState(false)
  const [isEditItemName, setIsEditItemName] = useState(false)
  const [isEditItemValue, setIsEditItemValue] = useState(false)
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

  function handleEditItemName(isEdit: boolean) {
    setIsEditItemName(isEdit)
  }

  function handleEditItemValue(isEdit: boolean) {
    setIsEditItemValue(isEdit)
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
      handleisToggleButton,
      isEditItemName,
      handleEditItemName,
      isEditItemValue,
      handleEditItemValue
    }}>
      {children}
    </ModalContext.Provider>
   )
}