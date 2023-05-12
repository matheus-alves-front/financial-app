import { MonthType } from "../../@types";
import Constants from 'expo-constants';

export async function FetchMonth() {
  const apiUrl = Constants?.expoConfig?.extra?.apiUrl

  const monthResponse = await fetch(`${apiUrl}/months`)
  const monthData: MonthType[] = await monthResponse.json()

  return monthData
}