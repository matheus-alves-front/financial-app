import styled from 'styled-components'
import { TextInput, View, Text, Switch, TouchableOpacity } from "react-native"
import CurrencyInput from 'react-native-currency-input';
import { themeLight } from '../../styles/colors'

const {
  colors
} = themeLight

export const Container = styled(View)`
  background-color: ${colors.white};
  width: 90%;
  border: 1px solid ${colors.blue};
  border-radius: 10px;
  padding: 15px;
  margin: 30px;
  margin-bottom: 0;
  gap: 5px;
  justify-content: center;
  align-items: flex-start;
`

export const Input = styled(TextInput)`
  border: 1px solid ${colors.darkBlue};
  color: ${colors.blue};
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 5px;
  width: 100%;
`

export const InputNumber = styled(CurrencyInput)`
  border: 1px solid ${colors.darkBlue};
  color: ${colors.blue};
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 5px;
  width: 100%;
`

export const ValueSection = styled(View)`
  width: 100%;
  flex-direction: row;
`
export const ValueInput = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
`

export const ValueSwitch = styled(ValueInput)`
  width: 40%
`

export const ButtonSubmit = styled(TouchableOpacity)`
  background-color: ${colors.blue};
  border-radius: 10px;
  padding: 15px;
  margin: auto;
  align-items: center;
  width: 100%;
`;

export const ButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
`;
