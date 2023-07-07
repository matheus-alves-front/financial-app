import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { themeLight } from '../../styles/colors';

export function Spinner() {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000, // Duração de um ciclo completo (em milissegundos)
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.spinner, { transform: [{ rotate: spin }] }]} />
    </View>
  );
};

const {
  colors
} = themeLight

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: 50,
    height: 50,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: colors.white,
    borderStyle: 'solid',
    borderTopColor: colors.orange,
    animationDuration: 2000, // Duração de um ciclo completo (em milissegundos)
    animationTimingFunction: 'linear',
  },
});
