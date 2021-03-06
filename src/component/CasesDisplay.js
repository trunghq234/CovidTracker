import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import colors from '../Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default CasesDisplay = ({ title, textColor, casesNum, casesDiff }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.numbers}>
        <Text style={[styles.numberOfCases, {color: textColor}]}>
          { casesNum }
        </Text>
        <View style={{display: casesDiff === 0 ? 'none' : 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
          <AntDesign name={casesDiff > 0 ? "arrowup" : "arrowdown"} color={textColor} size={14}/>
          <Text style={[styles.numberOfChanges, {color: textColor}]}>
            { Math.abs(casesDiff) }
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
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
    marginBottom: '6%'
  },
  title: {
    //fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
    color: colors.text2,
    margin: 10,
    marginBottom: 5
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
    marginLeft: 10,
    marginRight: 5
  },
  numberOfChanges: {
    //fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 2
  },
  chart: {
    width: 120,
    height: 80,
    borderColor: '#000',
    borderWidth: 0.5,
    marginHorizontal: 10,
    marginTop: 5
  }
})
