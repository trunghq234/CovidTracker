import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import AffectedMap from '../component/AffectedMap';
import CasesDisplay from '../component/CasesDisplay';
import CountrySelect from '../component/CountrySelect';
import colors from '../Colors';

export default class HomeScreen extends Component {
  state = {
    cases: {},
    countryCode: ''
  }
  fetchNumberOfCases = (country) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const url = country === 'GO' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${country}`;
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
    setCountryCode(countryCode);
  }
  componentDidMount() {
    this.fetchNumberOfCases('VN');
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: colors.white}}>
        <View style={styles.container}>
          <ImageBackground 
            source={require('../../assets/Background.png')} 
            style={styles.image} >
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Text style={styles.headerName}>Covid-19 Tracker</Text>
                
                <Text style={styles.headerTime}>Last updated 1 hour ago</Text>
              </View>
            </View>
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
              <View style={styles.map}>
                <AffectedMap style={{marginVertical: 20}}></AffectedMap>
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
  image: {
    flex: 1
  },
  header: {
    padding: 10,
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
    flex: 1,
  },
  cards: {
    marginHorizontal: 30,
    marginTop: -30,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  map: {
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 20
  },
  countryPicker: {
    height: 30,
  }
});
