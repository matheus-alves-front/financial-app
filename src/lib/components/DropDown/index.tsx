import { ReactNode, useState } from "react"
import { DropDownView, DropwDownContent, DropwDownTitle } from "./styles"
import { GestureResponderEvent } from "react-native/types"

type DropDownProps = {
  children: ReactNode
  title: string
}

export function DropDown({children, title}: DropDownProps) {
  const [isDrop, setIsDrop] = useState(false)

  const handleDropDown = (e: GestureResponderEvent) => {
    e.stopPropagation()

    setIsDrop(!isDrop)
  }

  return (
    <DropDownView isDrop={isDrop}>
      <DropwDownTitle isDrop={isDrop} onPress={(e) => handleDropDown(e)}>{title}</DropwDownTitle>
      <DropwDownContent isDrop={isDrop}>
        {children}
      </DropwDownContent>
    </DropDownView>
  )
}