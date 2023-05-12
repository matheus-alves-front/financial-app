import { StyleSheet, View, Text } from "react-native";
import { themeLight } from "../../styles/colors";
import { ExpensesType } from "../../@types";

import { ExpenseIcon } from "../../lib/Icons/ExpenseIcons";

type ExpenseItemProps = {
  expense: ExpensesType
}

export function ExpenseItem({expense}: ExpenseItemProps) {
  return (
    <View style={styles.expenseItem}>
      <Text style={styles.expenseName}>{expense.name}</Text>
      <View style={styles.expenseValueSection}>
        <Text style={expense.isEntry ? styles.expenseValueEntry : styles.expenseValue}>{!expense.isEntry && '-'}R${expense.value}</Text>
        <ExpenseIcon isEntry={expense.isEntry} />
      </View>
    </View>
  )
}

export function ExpenseFixedItem({expense}: ExpenseItemProps) {
  return (
    <View style={styles.expenseItem}>
      <Text style={styles.expenseName}>{expense.name}</Text>
      <View style={styles.expenseValueSection}>
        <Text style={expense.isEntry ? styles.expenseValueEntry : styles.expenseValue}>R${expense.value}</Text>
        <ExpenseIcon isEntry={expense.isEntry} />
      </View>
    </View>
  )
}

const {colors} = themeLight

const styles = StyleSheet.create({
  expenseItem: {
    width: '100%',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    gap: 10
  },
  expenseName: {
    width: '100%',
    fontSize: 15,
    color: colors.blue
  },
  expenseValueSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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