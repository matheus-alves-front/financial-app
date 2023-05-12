import { View } from "react-native"
import Svg, { Path } from 'react-native-svg';

type ExpenseIconProps = {
  isEntry: boolean
}

export function ExpenseIcon({isEntry}: ExpenseIconProps) {
  return (
    <>
      {isEntry ? 
        <Svg width={35} height={35} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M19.9998 3.33333C10.7951 3.33333 3.33317 10.7953 3.33317 20C3.33317 29.2047 10.7951 36.6667 19.9998 36.6667C29.2046 36.6667 36.6665 29.2047 36.6665 20C36.6665 10.7953 29.2046 3.33333 19.9998 3.33333Z" stroke="#12A454" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M26.6665 20L19.9998 13.3333L13.3332 20" stroke="#12A454" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M20 26.6667L20 13.3333" stroke="#12A454" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
      :
        <Svg width={35} height={35} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M20.0002 36.6667C29.2049 36.6667 36.6668 29.2047 36.6668 20C36.6668 10.7953 29.2049 3.33334 20.0002 3.33334C10.7954 3.33334 3.33349 10.7953 3.33349 20C3.33349 29.2047 10.7954 36.6667 20.0002 36.6667Z" stroke="#E62E4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M13.3335 20L20.0002 26.6667L26.6668 20" stroke="#E62E4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M20 13.3333L20 26.6667" stroke="#E62E4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
      }
    </>
  )
}