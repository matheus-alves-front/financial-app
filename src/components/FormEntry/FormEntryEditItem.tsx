import { useContext, useEffect, useState } from "react"
import { TextInput, View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native"

import { ModalContext } from "../../context/ModalContext"

import { ModalCustom } from "../../lib/components/ModalCustom"

import { themeLight } from "../../styles/colors"

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ExpensesContext } from "../../context/ExpensesContext"
import CurrencyInput from "react-native-currency-input"

type FormEntryEditItemProps = {
  isVisible: boolean,
  onClose: () => void,
  isEditName: boolean,
  isEditValue: boolean,
  expenseId: number,
  expenseOldValue: number,
  expenseOldName: string
}

export function FormEntryEditItem({
  isVisible,
  onClose,
  isEditName,
  isEditValue,
  expenseId, 
  expenseOldValue,
  expenseOldName
}: FormEntryEditItemProps) {
  const {
    ChangeExpenseName,
    ChangeExpenseValue
  } = useContext(ExpensesContext)

  const [name, setName] = useState(expenseOldName)
  const [value, setValue] = useState(expenseOldValue)
  
  function SubmitEdition() {
    if (isEditName) {
      ChangeExpenseName(expenseId, name) 
    }
    if (isEditValue) {
      ChangeExpenseValue(expenseId, value) 
    }

    onClose()
  }
  
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    if (!name) setIsSubmit(false)
    else setIsSubmit(true)
  }, [name])

  return (
    <ModalCustom isVisible={isVisible}>
      <View style={styles.formEntry}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{
              isEditName ? 'Editar Nome' : 'Editar Valor'
            }</Text>
            <TouchableOpacity 
              style={styles.modalCloseButton}
              onPress={() => onClose()}
            >
              <Text style={styles.modalCloseText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formContent}>
            <KeyboardAwareScrollView>
              {
                isEditName ? 
                <TextInput 
                  style={styles.input}
                  placeholder="Nome da Categoria"
                  aria-label="name"
                  onChangeText={setName}
                  value={name}
                />
                : 
                <CurrencyInput 
                  style={styles.input}
                  value={value}
                  onChangeValue={(text: number) => setValue(text || 0)}
                  prefix="R$"
                />
              }
            </KeyboardAwareScrollView>
            <TouchableOpacity 
              onPress={SubmitEdition}
              style={styles.submitButton}
              disabled={!isSubmit}
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
    height: '75%',
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
  submitButton: {
    marginTop: 'auto',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    borderRadius: 10,
    elevation: 0
  },
  submitButtonText: {
    color: colors.white
  }
})