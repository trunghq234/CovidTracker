import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import colors from '../Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import api from '../api';

export default CasesDisplay = ({ title, textColor }) => {
  const [casesNumber, setCasesNumber] = useState({});
  const [casesView, setCasesView] = useState(0);
  const [diff, setDiff] = useState(0);

  async function fetchNumberOfCases(country) {
    //country = 'VN';
    // const { cases, recovered, deaths } = (
    //   await api.get(country ? `countries/${country}` : '')
    // );
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://corona.lmao.ninja/v2/countries/${country}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        let obj = JSON.parse(result);
        setCasesNumber({
          cases: obj.cases,
          todayCases: obj.todayCases,
          recovered: obj.recovered,
          todayRecovered: obj.todayRecovered,
          deaths: obj.deaths,
          todayDeaths: obj.todayDeaths
        })
      })
      .catch(error => console.log('error', error));
    //console.log(JSON.parse(result).cases)
    // setCasesNumber({
    //   cases: cases,
    //   recovered: recovered,
    //   deaths: deaths,
    // });
    switch (title) {
      case 'COMFIRMED':
        setCasesView(casesNumber.cases);
        setDiff(casesNumber.todayCases);
        break;
      case 'ACTIVE':
        setCasesView(casesNumber.cases - casesNumber.recovered);
        setDiff(casesNumber.todayCases - casesNumber.todayRecovered);
        break;
      case 'RECOVERED':
        setCasesView(casesNumber.recovered);
        setDiff(casesNumber.todayRecovered);
        break;
      case 'DECASED':
        setCasesView(casesNumber.deaths);
        setDiff(casesNumber.todayDeaths);
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    fetchNumberOfCases('US');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.numbers}>
        <Text style={[styles.numberOfCases, {color: textColor}]}>
          { casesView }
        </Text>
        <AntDesign name={diff > 0 ? "arrowup" : "arrowdown"} color={textColor} size={14}/>
        <Text style={[styles.numberOfChanges, {color: textColor}]}>
          { Math.abs(diff) }
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    flexGrow: 1,
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
    marginHorizontal: 10
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
