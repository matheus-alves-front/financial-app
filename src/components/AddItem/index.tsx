import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { themeLight } from '../../styles/colors'
import { useContext, useState } from "react"
import { ModalContext } from "../../context/ModalContext"

const { colors } = themeLight

export function AddItem({ hasCategory }: { hasCategory: boolean }) {
  const {
    handleAddItem,
    handleAddCategory,
    handleisToggleButton,
    isToggleButton
  } = useContext(ModalContext)

  return (
    <View style={styles.TogglerSection}>
      <TouchableOpacity
        style={styles.ButtonToggler}
        onPress={handleisToggleButton}
      >
        <Text style={styles.ButtonTogglerText}>{!isToggleButton ? '+' : 'X'}</Text>
      </TouchableOpacity>
      <View style={[
        styles.ModalButtons,
        isToggleButton ? styles.ModalButtonsOpened : {}
      ]}>
        {hasCategory && 
          <TouchableOpacity 
            style={styles.Button} 
            onPress={handleAddItem}
          >
            <Text style={styles.ButtonText}>Nova Transação</Text>
          </TouchableOpacity>
        }
        <TouchableOpacity 
          style={styles.Button} 
          onPress={handleAddCategory}
        >
          <Text style={styles.ButtonText}>Nova Categoria</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  TogglerSection: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModalButtons: {
    display: 'none',
    elevation: 2,
    position: 'absolute',
    right: 60,
    bottom: 0,
    width: 150
  },
  ModalButtonsOpened: {
    display: 'flex'
  },
  ButtonToggler: {
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 1,
    padding: 10,
  },
  ButtonTogglerText: {
    color: colors.white,
    fontSize: 25,
    paddingHorizontal: 10
  },
  Button: {
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 1,
    padding: 10,
    marginTop: 5,
  },
  ButtonText: {
    color: colors.white,
    fontSize: 15
  },
})
