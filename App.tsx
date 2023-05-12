import { StyleSheet, Text, View } from 'react-native';
import { ExpensesContextProvider } from './src/context/ExpensesContext';
import { ExpensesBoard } from './src/components/ExpensesBoard';
import { TotalExpenses } from './src/components/TotalExpenses';
import { ModalContextProvider } from './src/context/ModalContext';
import { ModalForm } from './src/components/ModalForm';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Dashboard } from './src/components/Dashboard';
import { Header } from './src/components/Header';
import { MonthContextProvider } from './src/context/MonthContext';

export default function App() {
  return (
    <MonthContextProvider>
      <ExpensesContextProvider>
        <ModalContextProvider>
          <SafeAreaProvider>
            <View style={styles.container}>
              <Header />
              <Dashboard />
              {/* <TotalExpenses /> */}
              <ExpensesBoard />
              {/* <Dashboard /> */}
            </View>
          </SafeAreaProvider>
        </ModalContextProvider>
      </ExpensesContextProvider>
    </MonthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
