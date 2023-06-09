import { useContext } from "react";
import { DashboardView } from "./DashboardView";
import { Login } from "./Login";
import { ProfileContext } from "../context/ProfileContext";
import { LoadingScreen } from "../components/LoadingScreen";

export function Main() {
  const {profile} = useContext(ProfileContext)
  
  return (
    <>
      <LoadingScreen />
      {profile?.id ? <DashboardView /> : <Login />}
    </>
  )
}