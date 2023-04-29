import { View, Text } from "react-native"
import styled from "styled-components"
import { themeLight } from '../../../styles/colors'

const {colors} = themeLight

interface DropDownViewProps {
  isDrop: boolean
}

export const DropDownView = styled(View)<DropDownViewProps>`
  border: 1px solid ${colors.blue};
  background-color: ${props => props.isDrop ? colors.blue : colors.white};
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const DropwDownTitle = styled(Text)<DropDownViewProps>`
  color: ${props => props.isDrop ? colors.white : colors.blue};
  text-align: center;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px;
`
export const DropwDownContent = styled(View)<DropDownViewProps>`
  width: 100%;
  padding: 0 10px;
  align-items: center;

  transition: 1s ease;
  max-height: ${props => props.isDrop ? '100%' : '0'};
  margin-top: ${props => props.isDrop ? '10px' : '0'};
`


