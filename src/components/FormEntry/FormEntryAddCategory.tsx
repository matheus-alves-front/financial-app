import { useContext, useEffect, useState } from "react"
import { TextInput, View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native"

import { ModalContext } from "../../context/ModalContext"

import { ModalCustom } from "../../lib/components/ModalCustom"

import { themeLight } from "../../styles/colors"
import { CategoriesContext } from "../../context/CategoriesContext";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export function FormEntryAddCategory() {
  const {
    IncludeCategory
  } = useContext(CategoriesContext)

  const {handleAddCategory, isAddCategory} = useContext(ModalContext)

  const [name, setName] = useState('')
  
  function SubmitPayments() {
    IncludeCategory(name) 
    handleAddCategory()
  }
  
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    if (!name) setIsSubmit(false)
    else setIsSubmit(true)
  }, [name])

  return (
    <ModalCustom isVisible={isAddCategory}>
      <View style={styles.formEntry}>
        
          <View style={styles.header}>
            <Text style={styles.headerText}>Cadastrar categoria</Text>
            <TouchableOpacity 
              style={styles.modalCloseButton}
              onPress={() => handleAddCategory()}
            >
              <Text style={styles.modalCloseText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formContent}>
            <KeyboardAwareScrollView>
              <TextInput 
                style={styles.input}
                placeholder="Nome da Categoria"
                aria-label="name"
                onChangeText={setName}
                value={name}
              />
            </KeyboardAwareScrollView>
            <TouchableOpacity 
              onPress={SubmitPayments}
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