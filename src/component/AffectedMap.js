import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../Colors'

export default function AffectedMap() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Global Map</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    backgroundColor: colors.white,
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
    //fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    margin: 10
  },
})
