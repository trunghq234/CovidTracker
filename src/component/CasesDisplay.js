import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function CasesDisplay({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.numbers}>
        <Text style={styles.numberOfCases}>2368</Text>
        <AntDesign name="arrowup" color={'#EA5569'} size={14}/>
        <Text style={styles.numberOfChanges}>6</Text>
      </View>
      <View style={styles.chart}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
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
  },
  title: {
    //fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
    color: "#A3ADBE",
    margin: 10
  },
  numbers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  numberOfCases: {
    //fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: '600',
    color: "#EA5569",
    marginHorizontal: 10
  },
  numberOfChanges: {
    //fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '500',
    color: "#EA5569",
    marginHorizontal: 2
  },
  chart: {
    width: 120,
    height: 70,
    borderColor: '#000',
    borderWidth: 0.5,
    marginHorizontal: 10,
    marginTop: 10
  }
})
