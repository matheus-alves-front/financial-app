import { StyleSheet, Text, View } from 'react-native';
import { ExpensesContextProvider } from './src/context/ExpensesContext';
import { ModalContextProvider } from './src/context/ModalContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MonthContextProvider } from './src/context/MonthContext';
import { ProfileContextProvider } from './src/context/ProfileContext';
import { Main } from './src/views/Main';
import { CategoriesContextProvider } from './src/context/CategoriesContext';

export default function App() {
  return (
    <ProfileContextProvider>
      <CategoriesContextProvider>
        <MonthContextProvider>
          <ExpensesContextProvider>
            <ModalContextProvider>
              <SafeAreaProvider>
                <View style={styles.container}>
                  <Main />
                </View>
              </SafeAreaProvider>
            </ModalContextProvider>
          </ExpensesContextProvider>
        </MonthContextProvider>
      </CategoriesContextProvider>
    </ProfileContextProvider>
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
