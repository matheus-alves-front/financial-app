import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { themeLight } from "../styles/colors";
import { ReactNode, useContext, useEffect, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";

export function Login() {
  const {Login, errorLoginMessage} = useContext(ProfileContext)

  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
    {isRegister ? 
      <Register>
        <TouchableOpacity 
          onPress={() => setIsRegister(false)}
          style={styles.buttonToggleIsRegister}
          >
          <Text style={styles.buttonToggleIsRegisterText}>Voltar</Text>
        </TouchableOpacity>
      </Register>
    :
      <View style={styles.container}>
        <Text style={styles.title}>Entre na sua conta</Text>
        {errorLoginMessage && <Text style={styles.errorMessage}>{errorLoginMessage}</Text>}
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
          secureTextEntry
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
        <TouchableOpacity 
          onPress={() => setIsRegister(true)}
          style={styles.buttonToggleIsRegister}
          >
          <Text style={styles.buttonToggleIsRegisterText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    }
  </>
  )
}

export function Register({children}: {children: ReactNode}) {
  const {CreateProfile, errorRegisterMessage} = useContext(ProfileContext)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta</Text>
      {errorRegisterMessage && <Text style={styles.errorMessage}>{errorRegisterMessage}</Text>}
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
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={colors.white} 
      />
      <TouchableOpacity 
        onPress={() => CreateProfile(name, password)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      {children}
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
  errorMessage: {
    color: colors.white
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
  },
  buttonToggleIsRegister: {
    backgroundColor: colors.white,
    width: '80%',
    padding: 15,
    borderRadius: 15,
    marginTop: 15
  },
  buttonToggleIsRegisterText: {
    color: colors.blue,
    textAlign: 'center',
    fontSize: 16
  },
})