import Constants from 'expo-constants';
import { CategoryType } from '../../@types';

export async function FetchCategories(profileId: number) {
  const apiUrl = Constants?.expoConfig?.extra?.apiUrl

  const categoriesResponse = await fetch(`${apiUrl}/profile/${profileId}/category/expenses`)
  const categoriesData: CategoryType[] = await categoriesResponse.json()

  return categoriesData
}