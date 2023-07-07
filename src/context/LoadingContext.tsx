import { ReactNode, createContext, useState } from "react";

type LoadingContextProps = {
  isLoading: boolean
  loadingMessage: string
  handleLoading: (
    loadingStatus: boolean,
    message: string | undefined
  ) => void
}

export const LoadingContext = createContext({} as LoadingContextProps)

type LoadingContextProviderProps = {
  children: ReactNode
}

export function LoadingContextProvider({
  children
}: LoadingContextProviderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('Fazendo Login')

  function handleLoading(loadingStatus: boolean, message: string | undefined) {
    setIsLoading(loadingStatus)
    setLoadingMessage(message ? message : '')
  }

  return (
    <LoadingContext.Provider value={{
      isLoading,
      loadingMessage,
      handleLoading
    }}>
      {children}
    </LoadingContext.Provider>
  )
}