import { ReactNode, createContext, useEffect, useState } from "react";
import { MonthType, ProfileType } from "../@types";
import Constants from 'expo-constants';

type ProfileContextProps = {
  profile?: ProfileType,
  CreateProfile: (
    name: string,
    password: string
  ) => void 
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

    console.log(profileSent)
  }

  useEffect(() => {
    fetch(`${apiUrl}/profile/2`)
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <ProfileContext.Provider value={{
      profile,
      CreateProfile
    }}
    >
      {children}
    </ProfileContext.Provider>
  )
}