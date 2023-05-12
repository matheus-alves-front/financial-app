import { ReactNode } from "react"
import { Modal, View } from "react-native"

type ModalCustomProps = {
  children: ReactNode,
  isVisible: boolean  
}

export function ModalCustom({
  children,
  isVisible
}: ModalCustomProps) {
  return (
    <Modal 
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <View style={{backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', flex: 1}}>
        {children}
      </View>
    </Modal>
  )
}
