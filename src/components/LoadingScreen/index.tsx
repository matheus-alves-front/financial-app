import { useContext, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LoadingContext } from "../../context/LoadingContext";

import { themeLight } from "../../styles/colors";
import { ModalCustom } from "../../lib/components/ModalCustom";
import { Spinner } from "./Spinner";

export function LoadingScreen() {
  const {
    isLoading,
    loadingMessage
  } = useContext(LoadingContext)

  return (
    <>
      {isLoading ? 
        <ModalCustom isVisible={isLoading}>
          <View style={styles.loadingScreen}>
            <Spinner />
            <Text style={styles.loadingText}>{loadingMessage} ...</Text>
          </View>
        </ModalCustom>
      : ''}
    </>
  )
}

const {
  colors
} = themeLight

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: colors.white,
    backgroundColor: colors.orange,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    fontWeight: '600'
  }
})