import { TextFooter, TotalFooter } from "./style";
import { useContext } from "react";
import { ExpensesContext } from "../../context/ExpensesContext";
import { Pressable } from "react-native";

export function TotalExpenses() {
  const {totalPrice} = useContext(ExpensesContext)

  return (
      <TotalFooter onPress={(e) => console.log(e.target)}>
        <TextFooter>Total:</TextFooter>
        <TextFooter>{totalPrice}</TextFooter>
      </TotalFooter>
  )
}