import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function AffectedMap() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Global Map</Text>
      <Image source={require('../../assets/map.svg')} style={{flex: 1}}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '600',
    color: "#1D2C40",
    margin: 10
  },
})
