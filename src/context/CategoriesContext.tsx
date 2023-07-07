import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { CategoryType } from "../@types";
import { ProfileContext } from "./ProfileContext";
import { FetchCategories } from "../lib/utils/fetch-categories";
import Constants from 'expo-constants';
import { LoadingContext } from "./LoadingContext";


type CategoriesContextTypes = {
  categories: CategoryType[]
  IncludeCategory: (name: string) => void
  UpdateCategories: (profileId: number) => void
}

export const CategoriesContext = createContext({} as CategoriesContextTypes)

type CategoriesContextProviderTypes = {
  children: ReactNode
}

export function CategoriesContextProvider({children}: CategoriesContextProviderTypes) {
  const apiUrl = Constants?.expoConfig?.extra?.apiUrl
  const { profile } = useContext(ProfileContext)
  const { handleLoading } = useContext(LoadingContext)

  const [categories, setCategories] = useState<CategoryType[]>([])

  useEffect(() => {
    if (!profile) return

    UpdateCategories(profile.id)
  }, [profile])

  async function IncludeCategory(name: string) {
    if (!profile) return

    let postCategory = null
    while (postCategory === null) {
      handleLoading(true, 'Adicionando Categoria')
      
      postCategory = await fetch(`${apiUrl}/profile/${profile.id}/category`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name
        })
      })
    }

    const categorySent = await postCategory.json()

    const categoriesUpdate = await FetchCategories(profile.id)

    setCategories(categoriesUpdate)
    handleLoading(false, '')

    return categorySent
  }

  async function UpdateCategories(profileId: number) {
    const categoriesUpdate = await FetchCategories(profileId)

    setCategories(categoriesUpdate)
  }

  return (
    <CategoriesContext.Provider value={{
      categories,
      IncludeCategory,
      UpdateCategories
    }}>
      {children}
    </CategoriesContext.Provider>
  )
}