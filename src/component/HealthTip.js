import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../Colors'

export default function HealthTip(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      <Text style={styles.details} numberOfLines={3}>{props.details}</Text>
      <View style={styles.img}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 140,
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
    padding: 10
  },
  title: {
    //fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
  },
  details: {
    marginVertical: 5,
    fontSize: 16
  },
  img: {
    flex: 1
  }
})
