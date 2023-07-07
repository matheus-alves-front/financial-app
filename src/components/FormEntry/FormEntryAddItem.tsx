import { useContext, useEffect, useState } from "react"
import { TextInput, View, Text, Switch, TouchableOpacity, StyleSheet, FlatList } from "react-native"
import CurrencyInput from 'react-native-currency-input';

import { ModalContext } from "../../context/ModalContext"

import { ExpensesContext } from "../../context/ExpensesContext"
import { ModalCustom } from "../../lib/components/ModalCustom"

import { themeLight } from "../../styles/colors"
import { ExpenseIcon } from "../../lib/Icons/ExpenseIcons";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { calcLastInstallmentDate } from "../../lib/utils/calcLastInstallmentDate";
import { CategoriesContext } from "../../context/CategoriesContext";


export function FormEntryAddItem() {
  const {
    CreateExpense
  } = useContext(ExpensesContext)

  const {
    categories
  } = useContext(CategoriesContext)

  const {handleAddItem, isAddItem} = useContext(ModalContext)

  const [name, setName] = useState('')
  const [isEntry, setIsEntry] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  const [numberOfInstallments, setNumberOfInstallments] = useState('1')
  const [expiresInMonth, setExpiresInMonth] = useState(3000)
  const [expiresInYear, setExpiresInYear] = useState(3000)
  const [category, setCategory] = useState("")
  const [value, setValue] = useState(0)

  const [isCategorySelect, setIsCategorySelect] = useState(false)
  
  function SubmitPayments() {
    CreateExpense(
      name, 
      value, 
      isEntry, 
      isFixed,
      expiresInMonth,
      expiresInYear, 
      category
    )
    
    handleAddItem()
  }
  
  const [isSubmit, setIsSubmit] = useState(false)
  const [isInstallments, setIsInstallments] = useState(false)

  useEffect(() => {
    if (!name || !value || !category || !category) setIsSubmit(false)
    else setIsSubmit(true)
  }, [
    name,
    value,
    category
  ])

  useEffect(() => {
    setNumberOfInstallments('1')
  }, [isEntry, isInstallments, isFixed])

  useEffect(() => {
    const numberOfInstallmentsNumber = Number(numberOfInstallments)
    const {month, year} = calcLastInstallmentDate(numberOfInstallmentsNumber)

    setExpiresInMonth(month)
    setExpiresInYear(year)
  }, [numberOfInstallments])

  return (
    <ModalCustom isVisible={isAddItem}>
      <View style={styles.formEntry}>
        <KeyboardAwareScrollView>
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
            <View style={styles.isFixedSection}>
              <View style={styles.isFixed}>
                <Text>{isFixed ? 'Fixo' : 'Variável'}</Text>
                <Switch 
                  aria-label="type"
                  onValueChange={() => setIsFixed(!isFixed)}
                  value={isFixed}
                />
              </View>
              {!isEntry && isFixed &&
                <>
                  <View style={styles.isInstallments}>
                    <Text>{isInstallments ? 'Parcelado em:' : 'Não Parcelado'}</Text>
                    <Switch 
                      aria-label="type"
                      onValueChange={() => setIsInstallments(!isInstallments)}
                      value={isInstallments}
                    />
                  </View>
                  {isInstallments && 
                    <View style={styles.installmentsSection}>
                      <TextInput 
                        keyboardType="numeric"
                        aria-label="expiresInMonth"
                        style={[
                          styles.input,
                          styles.installmentsInput
                        ]}
                        maxLength={2}
                        onChangeText={setNumberOfInstallments}
                        value={numberOfInstallments}
                      />
                      <Text>Vezes</Text>
                    </View>
                  }
                </>
              }
            </View>
            <View style={SelectBoxStyles.categorySelect}>
              <Text 
                style={styles.input}
                onPress={() => setIsCategorySelect(true)}
              >
                {category ? category : 'Selecione uma Categoria'}
              </Text>
              {isCategorySelect && 
                <View style={SelectBoxStyles.categorySelectContent}>
                  {categories.map((categoryItem) => (
                    <Text 
                      style={SelectBoxStyles.categoryOption}
                      onPress={() => {
                        setCategory(categoryItem.name)
                        setIsCategorySelect(false)
                      }} 
                      key={categoryItem.id}>{categoryItem.name}
                    </Text>
                    ))}
                </View>
              }
            </View>
            <TouchableOpacity 
              onPress={SubmitPayments}
              style={styles.submitButton}
              disabled={!isSubmit}
            >
              <Text style={styles.submitButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ModalCustom>
  )
}

const {colors} = themeLight

const SelectBoxStyles = StyleSheet.create({
  categorySelect: {
    position: 'relative'
  },
  categorySelectContent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    padding: 10,
    gap: 10
  },
  categoryOption: {
    width: '100%',
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,

    backgroundColor: colors.orange,
    color: colors.white
  }
})

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20
  },
  formEntry: {
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
  isFixedSection: {
    marginTop: 10,
    flexDirection: 'row'
  },
  isFixed: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0
  },
  isInstallments: {
    alignItems: 'baseline',
    marginLeft: 15,
    justifyContent: 'center',
    gap: 0
  },
  installmentsSection: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5
  },
  installmentsInput: {
    textAlign: 'center',
    width: 70
  },
  categoryTexts: {
    color: colors.white,
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 15,
  },
  selectFormButton: {
    backgroundColor: colors.orange
  },
  categoryButton: {
    backgroundColor: colors.lightGray,
    padding: 15,
    borderRadius: 15
  },
  categoryButtonText: {
    textAlign: 'center'
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