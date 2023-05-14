import { ReactNode, createContext, useEffect, useState } from "react";
import { MonthType, ProfileType } from "../@types";
import Constants from 'expo-constants';
import { Login } from "../views/Login";

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
}

type ProfileContextProviderProps = {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextProps)

export function ProfileContextProvider({
  children
}: ProfileContextProviderProps) {
  const apiUrl = Constants?.expoConfig?.extra?.apiUrl

  const [profile, setProfile] = useState<ProfileType>()
  const [errorLoginMessage, setErrorLoginMessage] = useState("")

  async function CreateProfile(name: string, password: string) {
    const data = {
      name,
      password
    }

    const postProfile = await fetch(`${apiUrl}/profile`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const profileSent = await postProfile.json()

    setProfile(profileSent)
  }

  async function Login(name: string, password: string) {
    setErrorLoginMessage("")
    
    const data = {
      name,
      password
    }

    const postLogin = await fetch(`${apiUrl}/profile/login/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const loginResponse = await postLogin.json()

    if (loginResponse.id) setProfile(loginResponse) 
    setErrorLoginMessage(loginResponse.message)
  }

  return (
    <ProfileContext.Provider value={{
      profile,
      CreateProfile,
      Login,
      errorLoginMessage
    }}
    >
      {children}
    </ProfileContext.Provider>
  )
}