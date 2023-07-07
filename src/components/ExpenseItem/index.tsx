import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { themeLight } from "../../styles/colors";
import { ExpensesType } from "../../@types";

import { ExpenseIcon } from "../../lib/Icons/ExpenseIcons";
import { ThrashIcon } from "../../lib/Icons/ThrashIcon";
import { ExpensesContext } from "../../context/ExpensesContext";
import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { EditIcon } from "../../lib/Icons/EditIcon";
import { FormEntryEditItem } from "../FormEntry/FormEntryEditItem";

type ExpenseItemProps = {
  expense: ExpensesType
}

export function ExpenseItem({
  expense
}: ExpenseItemProps) {
  const { 
    ExcludeExpense
  } = useContext(ExpensesContext)

  const [isEditName, setIsEditName] = useState(false)
  const [isEditValue, setIsEditValue] = useState(false)

  function CloseEditItem() {
    setIsEditValue(false)
    setIsEditName(false)
  }

  let expiresIn = expense.expiresInMonth !== 3000 ? 
  `Até ${expense.expiresInMonth}/${expense.expiresInYear}` 
  : ''

  return (
    <>
      <View style={styles.expenseItem}>
        <View style={styles.expenseNameSection}>
          <Text style={styles.expenseName}>{expense.name}</Text>
          <TouchableOpacity style={styles.expenseAction} onPress={() => setIsEditName(true)}>
            <EditIcon height={20} width={20} color={colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ExcludeExpense(expense.id)}>
            <ThrashIcon
              color={colors.red}
              colorFill={colors.red}
              width={25}
              height={25}
              />
          </TouchableOpacity>
        </View>
        <View style={styles.expenseValueSection}>
          <ExpenseIcon height={30} width={30} isEntry={expense.isEntry} />
          <Text style={
            expense.isEntry ? styles.expenseValueEntry : styles.expenseValue
          }>
            {!expense.isEntry && '-'}R${expense.value} 
          </Text>
          <TouchableOpacity style={styles.expenseAction} onPress={() => setIsEditValue(true)}>
            <EditIcon height={20} width={20} color={colors.gray} />
          </TouchableOpacity>
          
          <Text style={styles.expenseDate}>
            {expiresIn}
          </Text>
        </View>
      </View>
      {isEditName || isEditValue ? 
        <FormEntryEditItem  
          expenseId={expense.id}
          expenseOldName={expense.name}
          expenseOldValue={expense.value}
          isVisible={isEditName || isEditValue}
          isEditName={isEditName}
          isEditValue={isEditValue}
          onClose={CloseEditItem}
        />
      : ''}
    </>
  )
}

const {colors} = themeLight

const styles = StyleSheet.create({
  expenseItem: {
    width: '100%',
    backgroundColor: colors.white,
    padding: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    gap: 20
  },
  expenseName: {
    fontSize: 15,
    color: colors.blue
  },
  expenseAction: {
    marginRight: 'auto'
  },
  expenseDate: {
    margin: 'auto'
  },
  expenseValueSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    gap: 5
  },
  expenseNameSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  expenseValueEntry: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.green
  },
  expenseValue: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.red,
  }
})