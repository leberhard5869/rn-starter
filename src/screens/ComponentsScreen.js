import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'My name is Len';
  return <View>
    <Text style={styles.textStyle}>Getting started with React Native!</Text>
    <Text style={styles.textStyleSub}>{greeting}</Text>
    </View>
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  textStyleSub: {
    fontSize: 20
  }
});

export default ComponentsScreen;