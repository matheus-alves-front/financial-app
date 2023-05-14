import { MonthType } from "../../@types";
import Constants from 'expo-constants';

export async function FetchMonth(profileId: number) {
  const apiUrl = Constants?.expoConfig?.extra?.apiUrl

  const monthResponse = await fetch(`${apiUrl}/profile/${profileId}/months`)
  // const monthResponse = await fetch(`https://financial-app-nestjs.onrender.com/profile/3/months`)
  const monthData: MonthType[] = await monthResponse.json()

  console.log('monthData', monthData)

  return monthData
}