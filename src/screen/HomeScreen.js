import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native'
import SymptomsDisplay from '../component/SymptomsDisplay';
import CasesDisplay from '../component/CasesDisplay';
import CountrySelect from '../component/CountrySelect';
import colors from '../Colors';
import PreventionsDisplay from '../component/PreventionsDisplay';

export default class HomeScreen extends Component {
  state = {
    cases: {},
    countryCode: 'VN'
  };
  fetchNumberOfCases = (country) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const url = country === '' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${country}`;
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => {
        let res = JSON.parse(result);
        this.setState({
          cases: {
            confirmed: res.cases,
            todayConfirmed: res.todayCases,
            recovered: res.recovered,
            todayRecovered: res.todayRecovered,
            active: res.cases - res.recovered,
            todayActive: res.todayCases - res.todayRecovered,
            deaths: res.deaths,
            todayDeaths: res.todayDeaths
          }
        })
      })
      .catch(error => console.log('error', error));
  }
  handleSelectCountry = (countryCode) => {
    this.setState({
      countryCode: countryCode
    })
    this.fetchNumberOfCases(countryCode);
  }
  componentDidMount() {
    this.fetchNumberOfCases(this.state.countryCode);
  }
  render() {
    return (
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={{backgroundColor: colors.white}}
      >
        <View style={styles.container}>
          <ImageBackground 
            source={require('../../assets/Background.png')} 
            style={styles.imageBackground} >
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Text style={styles.headerName}>Covid-19 Tracker</Text>
                <CountrySelect />
              </View>
            </View>
            <View style={{ backgroundColor: colors.white}}>
              <View style={styles.content}>
                <View style={styles.cards}>
                  <CasesDisplay 
                    title='COMFIRMED' 
                    casesNum={this.state.cases.confirmed} 
                    casesDiff={this.state.cases.todayConfirmed} 
                    textColor={colors.primary}
                  />
                  <CasesDisplay 
                    title='ACTIVE'
                    casesNum={this.state.cases.active}
                    casesDiff={this.state.cases.todayActive}
                    textColor={colors.blue}
                  />
                  <CasesDisplay 
                    title='RECOVERED' 
                    casesNum={this.state.cases.recovered}
                    casesDiff={this.state.cases.todayRecovered}
                    textColor={colors.green}
                  />
                  <CasesDisplay 
                    title='DECASED' 
                    casesNum={this.state.cases.deaths}
                    casesDiff={this.state.cases.todayDeaths}
                    textColor={colors.gray}
                  />
                </View>
                <Text style={styles.title}>Covid-19 Symptoms</Text>
                <SymptomsDisplay />
                <Text style={styles.title}>Covid-19 Preventions</Text>
                <PreventionsDisplay />
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    ) 
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
  },
  header: {
    paddingTop: 10,
    marginBottom: 40,
    marginLeft: 20
  },
  headerContent: {
    marginTop: 10,
  },
  headerName: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.white,
  },
  headerTitle: {
    fontSize: 28, 
    fontWeight: '500',
    color: colors.white,
    marginVertical: 8,
  },
  headerTime: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.white,
  },
  content: {
    backgroundColor: colors.white,
    display: 'flex',
    marginHorizontal: 10,
    marginBottom: 30
  },
  cards: {
    marginTop: -30,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10
  },
  title: {
    fontSize: 22,
    color: colors.text,
    fontWeight: '600',
    margin: 10,
  },
});