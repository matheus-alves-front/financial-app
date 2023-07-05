import { useContext, useState } from "react";
import { FlatList, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { ExpensesContext } from "../../context/ExpensesContext";

import { ExpenseItem } from "../ExpenseItem";
import { DropDown } from "../../lib/components/DropDown";
import { themeLight } from "../../styles/colors";
import { CategoriesContext } from "../../context/CategoriesContext";
import { CategoryExpenseItem } from "../CategoryExpensesItem";


export function ExpensesBoard() {
  const {
    expenses,
    fixedExpenses,
    ChangeExpenseValue,
    ExcludeExpense
  } = useContext(ExpensesContext)

  const {
    categories
  } = useContext(CategoriesContext)

  const sections = [
    'Variáveis',
    'Fixos',
    'Categoria'
  ]

  const [section, setSection] = useState('Categoria')

  return (
    <View style={styles.listContainer}>
      <View style={styles.sectionButtons}>
        {sections.map((sectionItem, index) => 
          <TouchableOpacity 
            key={index}
            style={
              sectionItem === section ? 
              [styles.button, styles.buttonActive] :
              styles.button
            }
            onPress={() => setSection(sectionItem)}
          >
            <Text style={styles.buttonText}>{sectionItem}</Text>
          </TouchableOpacity>
        )}
      </View>

      {section === 'Variáveis' && 
        <>
          {expenses.length ? null : <Text  style={styles.noExpensesMessage}>Você ainda não adicionou itens</Text>}
          <FlatList 
            data={expenses}
            style={styles.expensesList}
            renderItem={({item}) => <ExpenseItem expense={item} onExclude={ExcludeExpense(item.id)} />}
          />
        </>
      }
      {section === 'Fixos' && 
        <>
          {fixedExpenses.length !== 0 ? 
            <FlatList 
            data={fixedExpenses}
            style={styles.expensesList}
            renderItem={({item}) => <ExpenseItem expense={item} onExclude={ExcludeExpense(item.id)} />}
            />
            :
            <Text  style={styles.noExpensesMessage}>Você ainda não adicionou gastos fixos</Text>
          }
        </>
      }
      {section === 'Categoria' && 
        <>
          {categories.length !== 0 ? 
            <FlatList 
              data={categories}
              style={styles.expensesList}
              renderItem={({item}) => <CategoryExpenseItem category={item} />}
            />
          :
            <Text style={styles.noExpensesMessage}>Você ainda não adicionou categorias</Text>
          }
        </>
      }
      
    </View>
  )
}

const { colors } = themeLight

const styles = StyleSheet.create({
  listContainer: {
    marginTop: -5,
    flex: 1,
    width: '100%',
    padding: 15
  },
  expensesList: {
    width: '100%',
  },
  noExpensesMessage: {
    textAlign: 'center'
  },
  sectionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    marginBottom: 20
  },
  button: {
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    flex: 1
  },
  buttonActive: {
    borderBottomColor: colors.blue,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.blue
  }
})