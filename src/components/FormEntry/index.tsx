import { useContext, useState } from "react"
import { Text, Switch} from "react-native"

import { 
  Input, 
  Container, 
  ButtonSubmit, 
  ButtonText, 
  ValueSection, 
  ValueInput, 
  ValueSwitch, 
  InputNumber
} from "./styles"
import { ExpensesContext } from "../../context/ExpensesContext"
import { ModalContext } from "../../context/ModalContext"

export function FormEntry() {
  const {
    IncludeExpenses
  } = useContext(ExpensesContext)

  const {handleAddItem} = useContext(ModalContext)

  const [costType, setCostType] = useState(false)
  const [nameCosts, setNameCosts] = useState('')
  const [valueCosts, setValueCosts] = useState(0)

  function SubmitPayments() {
    const value = `R$ ${valueCosts}`
    const type = costType ? 'entrada' : 'despesa'

    IncludeExpenses(nameCosts, value, type)

    handleAddItem()
  }

  return (
    <Container>
      <Text>Nome:</Text>
      <Input 
        placeholder="Ex: Mercado"
        aria-label="name"
        onChangeText={setNameCosts}
        value={nameCosts}
      />
      <ValueSection>
        <ValueSwitch>
          <Text>Tipo: {costType ? 'Entrada' : 'Despesa'}</Text>
          <Switch 
            aria-label="type"
            onValueChange={() => setCostType(!costType)}
            value={costType}
          />
        </ValueSwitch>
        <ValueInput>
          <Text>Valor</Text>
          <InputNumber 
            value={valueCosts}
            onChangeValue={(text) => setValueCosts(text || 0)}
            prefix="R$"
          />
        </ValueInput>
      </ValueSection>
      <ButtonSubmit onPress={SubmitPayments}>
        <ButtonText>Adicionar</ButtonText>
      </ButtonSubmit>
    </Container>
  )
}