import { Pressable, Text, View } from "react-native"
import styled from "styled-components"
import { themeLight } from '../../styles/colors'

const {
  colors
} = themeLight

export const TotalFooter = styled(Pressable)`
  width: 100%;
  padding: 20px;
  background-color: ${colors.blue};
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`

export const TextFooter = styled(Text)`
  color: ${colors.white};
`