import { View, Text } from "react-native"
import styled from "styled-components"
import { themeLight } from '../../styles/colors'

const {colors} = themeLight

interface ExpenseItemViewProps {
  type: string;
}

export const ExpenseItemView = styled(View)<ExpenseItemViewProps>`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${props => props.type === "entrada" ? colors.green : colors.red};
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const ExpenseFixedItemView = styled(ExpenseItemView)`
  background-color: ${colors.blue}
`

export const ExpenseTitle = styled(Text)`
  margin-right: auto;
  color: ${colors.white};
`

export const ExpenseType = styled(Text)`
  margin: 0 10px;
  color: ${colors.white}
`

export const ExpenseValue = styled(Text)`
  margin: 0 10px;
  width: 30%;
  text-align: right;
  color: ${colors.white}
`