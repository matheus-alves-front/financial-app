import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { themeLight } from "../styles/colors";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";

export function Login() {
  const {Login, errorLoginMessage} = useContext(ProfileContext)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entre na sua conta</Text>
      {errorLoginMessage ?
       <Text>{errorLoginMessage}</Text>
      : ''}
      <TextInput 
        style={styles.input}
        placeholder="Usuário"
        value={name}
        onChangeText={setName}
        placeholderTextColor={colors.white} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={colors.white} 
      />
      <TouchableOpacity 
        onPress={() => Login(name, password)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  title: {
    color: colors.orange,
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 15
  },
  input: {
    width: '80%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    color: colors.white,
    marginBottom: 10
  },
  button: {
    backgroundColor: colors.orange,
    width: '80%',
    padding: 15,
    borderRadius: 15,
    marginTop: 15
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16
  }
})