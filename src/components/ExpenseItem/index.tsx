import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { themeLight } from "../../styles/colors";
import { ExpensesType } from "../../@types";

import { ExpenseIcon } from "../../lib/Icons/ExpenseIcons";
import { ThrashIcon } from "../../lib/Icons/ThrashIcon";

type ExpenseItemProps = {
  expense: ExpensesType
  onExclude: (expenseId: number) => void
}

export function ExpenseItem({
  expense,
  onExclude
}: ExpenseItemProps) {
  return (
    <View style={styles.expenseItem}>
      <View style={styles.expenseValueSection}>
        <Text style={styles.expenseName}>{expense.name}</Text>
        <TouchableOpacity style={styles.expenseAction} onPress={() => onExclude(expense.id)}>
          <ThrashIcon
            color={colors.red}
            colorFill={colors.red}
            width={30}
            height={30}
          />
        </TouchableOpacity>
      </View>
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
      <View style={styles.expenseValueSection}>
        <Text style={styles.expenseName}>{expense.name}</Text>
      </View>
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
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    gap: 20
  },
  expenseName: {
    width: '80%',
    fontSize: 15,
    color: colors.blue
  },
  expenseAction: {

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