import { StyleSheet, Text, View } from 'react-native';
import { ExpensesContextProvider } from './src/context/ExpensesContext';
import { ExpensesBoard } from './src/components/ExpensesBoard';
import { TotalExpenses } from './src/components/TotalExpenses';
import { ModalContextProvider } from './src/context/ModalContext';
import { ModalForm } from './src/components/ModalForm';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <ExpensesContextProvider>
      <ModalContextProvider>
        <SafeAreaProvider>
          <View style={styles.container}>
            <ModalForm />
            <ExpensesBoard />
            <TotalExpenses />
          </View>
        </SafeAreaProvider>
      </ModalContextProvider>
    </ExpensesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10
  },
});
