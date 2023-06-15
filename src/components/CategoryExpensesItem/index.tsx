import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { CategoryType } from "../../@types";
import { ExpenseItem } from "../ExpenseItem";
import { useState } from "react";
import { themeLight } from "../../styles/colors"

type CategoryExpenseItemProps = {
  category: CategoryType
}

export function CategoryExpenseItem({category}: CategoryExpenseItemProps) {
  const [isAccordionOpened, setIsAccordionOpened] = useState(false)

  const toggleAccordion = () => setIsAccordionOpened(!isAccordionOpened)

  return (
    <TouchableOpacity onPress={toggleAccordion} style={styles.categoryAccordion}>
      <Text style={styles.categoryAccordionTitle}>{category.name}</Text>
      <View 
        style={[
          styles.categoryExpensesView,
          isAccordionOpened ? styles.categoryExpensesViewActive : {}
        ]}
      >
        {category.expenses[0] ? 
          <>
            <FlatList 
              data={category.expenses}
              style={styles.expensesList}
              renderItem={({item}) => <ExpenseItem expense={item} />}
            />
          </>
        :
          <Text style={{textAlign: 'center', color: colors.white}}>Essa categoria não contém gastos</Text>
        }
      </View>
    </TouchableOpacity>
  )
}

const { colors } = themeLight

const styles = StyleSheet.create({
  categoryAccordion: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.blue,
    backgroundColor: colors.blue
  },
  categoryAccordionTitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: colors.white
  },
  categoryExpensesView: {
    display: 'none',
    width: '100%', 
    marginTop: 20,
  },
  categoryExpensesViewActive: {
    display: 'flex'
  },
  expensesList: {
    width: '100%'
  }
})