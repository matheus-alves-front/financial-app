import { Text, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { themeLight } from '../../styles/colors'
import { useContext } from "react"
import { ModalContext } from "../../context/ModalContext"

const {colors} = themeLight

const Button = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  background-color: ${colors.orange};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: absolute;
  bottom: 70px;
  right: 15px;
  z-index: 1;
`

const ButtonText = styled(Text)`
  color: ${colors.white};
  font-size: 36px;
  margin-bottom: 2px;
`

export function AddItem() {
  const {
    handleAddItem,
    isAddItem
  } = useContext(ModalContext)

  return (
    <Button onPress={handleAddItem}>
      <ButtonText>{!isAddItem ? '+' : '-'}</ButtonText>
    </Button>
  )
}
