import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import AffectedMap from '../component/AffectedMap';
import CasesDisplay from '../component/CasesDisplay';
import CountrySelect from '../component/CountrySelect';
import colors from '../Colors';

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: colors.white}}>
      <View style={styles.container}>
        <ImageBackground 
          source={require('../../assets/Background.png')} 
          style={styles.image} >
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={styles.headerName}>Covid-19 Tracker</Text>
              <CountrySelect />
              <Text style={styles.headerTime}>Last updated 1 hour ago</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.cards}>
              <View style={styles.cardsRow}>
                <CasesDisplay title='COMFIRMED' textColor={colors.primary}></CasesDisplay>
                <CasesDisplay title='ACTIVE' textColor={colors.blue}></CasesDisplay>
              </View>
              <View style={styles.cardsRow}>
                <CasesDisplay title='RECOVERED' textColor={colors.green}></CasesDisplay>
                <CasesDisplay title='DECASED' textColor={colors.gray}></CasesDisplay>
              </View>
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
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  cardsRow: {
    display: "flex",
    marginBottom: 20,
    flexGrow: 1
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
