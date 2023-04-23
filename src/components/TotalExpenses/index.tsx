import { Text } from "react-native";
import { View } from "react-native";
import { TextFooter, TotalFooter } from "./style";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../../context/ExpensesContext";

export function TotalExpenses() {
  const {total} = useContext(ExpensesContext)

  return (
    <TotalFooter>
      <TextFooter>Total:</TextFooter>
      <TextFooter>R${total}</TextFooter>
    </TotalFooter>
  )
}