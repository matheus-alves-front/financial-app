import { Text, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { themeLight } from '../../styles/colors'
import { useContext } from "react"
import { ModalContext } from "../../context/ModalContext"

const {colors} = themeLight

const Button = styled(TouchableOpacity)`
  background-color: ${colors.orange};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  z-index: 1;
  padding: 10px;
`

const ButtonText = styled(Text)`
  color: ${colors.white};
  font-size: 15px;
`

export function AddItem() {
  const {
    handleAddItem,
    isAddItem
  } = useContext(ModalContext)

  return (
    <Button onPress={handleAddItem}>
      <ButtonText>Nova Transação</ButtonText>
    </Button>
  )
}
