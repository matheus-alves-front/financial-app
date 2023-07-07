import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { MonthType, ProfileType } from "../@types";
import Constants from 'expo-constants';
import { Login } from "../views/Login";
import { LoadingContext } from "./LoadingContext";

type ProfileContextProps = {
  profile?: ProfileType,
  CreateProfile: (
    name: string,
    password: string
  ) => void,
  Login: (
    name: string,
    password: string
  ) => void,
  errorLoginMessage: string
  errorRegisterMessage: string
}

type ProfileContextProviderProps = {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextProps)

export function ProfileContextProvider({
  children
}: ProfileContextProviderProps) {
  const apiUrl = Constants?.expoConfig?.extra?.apiUrl

  const { handleLoading } = useContext(LoadingContext)

  const [profile, setProfile] = useState<ProfileType>()
  const [errorLoginMessage, setErrorLoginMessage] = useState("")
  const [errorRegisterMessage, setErrorRegisterMessage] = useState("")

  async function CreateProfile(name: string, password: string) {
    const data = {
      name,
      password
    }

    let postProfile = null

    while(postProfile === null) {
      handleLoading(true, 'Fazendo login')
      postProfile = await fetch(`${apiUrl}/profile`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      
      setTimeout(() => {
        handleLoading(false, '')
      }, 1000)
    }
    const profileSent = await postProfile.json()

    if (profileSent.id) {
      handleLoading(false, '')
      setProfile(profileSent)
    }
    setErrorRegisterMessage('Usuário Já Existe')
  }

  async function Login(name: string, password: string) {
    setErrorLoginMessage("")
    
    const data = {
      name,
      password
    }

    let postLogin = null
    
    while (postLogin === null) {
      handleLoading(true, 'Fazendo login')
      postLogin = await fetch(`${apiUrl}/profile/login/`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
    }
    const loginResponse = await postLogin.json()

    if (loginResponse.id) {
      handleLoading(false, '')
      setProfile(loginResponse)
    }
    
    setErrorLoginMessage(loginResponse.message)
  }

  return (
    <ProfileContext.Provider value={{
      profile,
      CreateProfile,
      errorRegisterMessage,
      Login,
      errorLoginMessage,
    }}
    >
      {children}
    </ProfileContext.Provider>
  )
}