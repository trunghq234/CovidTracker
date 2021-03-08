import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import colors from '../Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default CasesDisplay = ({ title, textColor, casesNum, casesDiff }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.numbers}>
        <Text style={[styles.numberOfCases, {color: textColor}]}>
          { new Intl.NumberFormat().format(casesNum) }
        </Text>
        <View style={[ styles.changes, { display: casesDiff === 0 ? 'flex' : 'flex' }]}>
          <Entypo 
            name={casesDiff >= 0 ? "plus" : "minus"} 
            color={textColor} 
            size={16}
          />
          <Text style={[styles.numberOfChanges, {color: textColor}]}>
            { new Intl.NumberFormat().format(Math.abs(casesDiff)) }
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
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
    width: '47%',
    marginBottom: '5%'
  },
  title: {
    //fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
    color: colors.text2,
    margin: 15,
    marginBottom: 10
  },
  numbers: {
    display: 'flex',
  },
  numberOfCases: {
    //fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 15,
  },
  numberOfChanges: {
    //fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '600',
  },
  changes: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginLeft: 15,
    marginRight: 10,
    marginVertical: 7
  }
})
