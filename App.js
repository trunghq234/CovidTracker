import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen'

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flex}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },

});
