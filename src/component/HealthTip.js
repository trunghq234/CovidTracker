import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../Colors'

export default function HealthTip(props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{ props.title }</Text>
        <View style={styles.rectangle} />
        <Text style={styles.details} numberOfLines={5}>{ props.details }</Text>
      </View>
      <Image style={styles.img} source={ props.imgSrc }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
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
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row'
  },
  content: {
    width: '70%',
  },
  title: {
    //fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  rectangle: {
    height: 4,
    width: 40,
    backgroundColor: colors.primary,
    marginVertical: 5,
    borderRadius: 10
  },
  details: {
    marginVertical: 5,
    fontSize: 16,
    width: '90%',
  },
  img: {
    height: '95%',
    width: '30%',
  }
})
