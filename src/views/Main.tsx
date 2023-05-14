import { useContext } from "react";
import { DashboardView } from "./DashboardView";
import { Login } from "./Login";
import { ProfileContext } from "../context/ProfileContext";

export function Main() {
  const {profile} = useContext(ProfileContext)

  console.log(profile)
  
  return (
    <>
      {profile.id ? <DashboardView /> : <Login />}
      
      {/* <DashboardView /> */}
    </>
  )
}