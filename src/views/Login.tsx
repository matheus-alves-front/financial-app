import { View, Text, StyleSheet, TextInput } from "react-native";
import { themeLight } from "../styles/colors";

export function Login() {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Usuário"
      />
      <TextInput 
        style={styles.input}
        placeholder="Senha"
      />
    </View>
  )
}

const { colors } = themeLight

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.blue,
    marginBottom: 10
  }
})