import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { themeLight } from '../../styles/colors'
import { ExpenseIcon } from '../../lib/Icons/ExpenseIcons'

const { colors } = themeLight

type DashboardProps = {
  month: number
  totalAmountLeft: number
  totalEntryExpenses: number
  totalExpenses: number
  totalFixedEntryExpenses: number
  totalFixedExpenses: number
  year: number
}

export function Dashboard({ 
  month,
  totalAmountLeft,
  totalEntryExpenses,
  totalExpenses,
  totalFixedEntryExpenses,
  totalFixedExpenses,
  year
}: DashboardProps) {
  return (
    <View style={styles.dashboardSection}>
      <ScrollView style={styles.dashboardContent} horizontal>
        <View style={[styles.dashboardItem, styles.expenseColor]}>
          <View style={styles.titleSection}>
            <Text style={styles.dashBoardTitle}>Saídas</Text>
            <ExpenseIcon isEntry={false} />
          </View>
          <Text style={[styles.dashboardValue, styles.expenseColor]}>R${totalExpenses}</Text>
          <Text style={styles.subText}>Fixo: R${totalFixedExpenses}</Text>
          {/* <Text style={styles.subText}>Variável: R${Number(totalExpenses - totalFixedExpenses)}</Text> */}
        </View>
        <View style={[styles.dashboardItem, styles.entryColor]}>
          <View style={styles.titleSection}>
            <Text style={styles.dashBoardTitle}>Entradas</Text>
            <ExpenseIcon isEntry={true} />
          </View>
          <Text style={[styles.dashboardValue, styles.entryColor]}>R${totalEntryExpenses}</Text>
          <Text style={styles.subText}>Fixo: R${totalFixedEntryExpenses}</Text>
          {/* <Text style={styles.subText}>Variável: R${Number(totalEntryExpenses - totalFixedEntryExpenses)}</Text> */}
        </View>
        <View style={styles.dashboardItem}>
          <View style={styles.titleSection}>
            <Text style={[styles.dashBoardTitle, styles.entryColor]}>Total</Text>
            <ExpenseIcon isEntry={true} />
          </View>
          <Text style={[styles.dashboardValue, styles.entryColor]}>R${totalAmountLeft}</Text>
          {/* <Text style={styles.subText}>R$00,00 a mais do que o Mês Passado</Text> */}
          <Text style={styles.subText}>Data: {month}/{year}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  dashboardSection: {
    width: '100%',
    padding: 0,
    marginTop: -90
  },
  dashboardContent: {
    paddingBottom: 5,
    width: '100%',
  },
  dashboardItem: {
    width: 300,
    height: 160,
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 2,
    borderRadius: 10,

    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 3, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 2,
  },
  titleSection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  dashBoardTitle: {
    fontSize: 20,
  },
  dashboardValue: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 'auto'
  },
  subText: {
    color: colors.blue
  },
  dashboardTotalValue: {
    marginBottom: 'auto'
  },
  entryColor: {
    color: colors.green,
    borderBottomColor: colors.green,
  },
  expenseColor: {
    color: colors.red,
    borderBottomColor: colors.red,
  }
})