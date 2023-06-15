import { StyleSheet, Text, View } from "react-native";
import {themeLight} from '../../styles/colors'

const {colors} = themeLight

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>Finanças</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
    width: '100%',
    height: '30%'
  },
  title: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase'
  },
  headerContent: {
    padding: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})