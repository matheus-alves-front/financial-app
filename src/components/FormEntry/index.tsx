import { useContext, useState } from "react"
import { TextInput, View, Text, Switch, TouchableOpacity, Button, StyleSheet } from "react-native"
import CurrencyInput from 'react-native-currency-input';

import { ModalContext } from "../../context/ModalContext"

import { ExpensesContext } from "../../context/ExpensesContext"
import { ModalCustom } from "../../lib/components/ModalCustom"

import { themeLight } from "../../styles/colors"
import { ExpenseIcon } from "../../lib/Icons/ExpenseIcons";

export function FormEntry() {
  const {
    IncludeExpenses
  } = useContext(ExpensesContext)

  const {handleAddItem, isAddItem} = useContext(ModalContext)

  const [name, setName] = useState('')
  const [value, setValue] = useState(0)
  const [isEntry, setIsEntry] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  
  function SubmitPayments() {
    IncludeExpenses(name, value, isEntry, isFixed)

    handleAddItem()
  }

  return (
    <ModalCustom isVisible={isAddItem}>
      <View style={styles.formEntry}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cadastrar transação</Text>
          <TouchableOpacity 
            style={styles.modalCloseButton}
            onPress={() => handleAddItem()}
          
          >
            <Text style={styles.modalCloseText}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formContent}>
          <TextInput 
            style={styles.input}
            placeholder="Nome"
            aria-label="name"
            onChangeText={setName}
            value={name}
          />
          <CurrencyInput 
              style={styles.input}
              value={value}
              onChangeValue={(text: number) => setValue(text || 0)}
              prefix="R$"
            />
          <View style={styles.isEntrySection}>
            <TouchableOpacity 
              style={[
                styles.buttonIsEntry,
                {backgroundColor: isEntry ? colors.lightGreen : 'transparent'}
              ]}
              onPress={() => setIsEntry(true)}
            >
              <Text style={styles.buttonText}>Entrada</Text>
              <ExpenseIcon isEntry={true} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.buttonIsEntry,
                {backgroundColor: !isEntry ? colors.lightRed : 'transparent'}
              ]}
              onPress={() => setIsEntry(false)}
            >
              <ExpenseIcon isEntry={false} />
              <Text style={styles.buttonText}>Saída</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.isFixed}>
              <Text>{isFixed ? 'Fixo' : 'Variável'}</Text>
              <Switch 
                aria-label="type"
                onValueChange={() => setIsFixed(!isFixed)}
                value={isFixed}
                />
          </View>
          <TouchableOpacity 
            onPress={SubmitPayments}
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalCustom>
  )
}

const {colors} = themeLight

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20
  },
  formEntry: {
    height: '60%',
    marginTop: 'auto',
    backgroundColor: colors.white,
    padding: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.blue
  },
  modalCloseButton: {
    padding: 10
  },
  modalCloseText: {
    fontSize: 20,
    color: colors.blue
  },
  formContent: {
    gap: 10,
    flex: 1
  },
  input: {
    backgroundColor: colors.lightGray,
    borderWidth: 1,
    borderColor: colors.gray,
    height: 50,
    borderRadius: 10,
    padding: 15
  },
  // Is Entry
  isEntrySection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  buttonIsEntry: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center'
  },
  isFixed: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0
  },
  submitButton: {
    marginTop: 'auto',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    borderRadius: 10
  },
  submitButtonText: {
    color: colors.white
  }
})