import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View } from 'react-native';
import { SignIn } from './src/screens/SignIn';
import { styles } from './src/screens/SignIn/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <SignIn></SignIn>
    </View>
  );
}