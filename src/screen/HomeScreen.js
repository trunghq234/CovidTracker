import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import AffectedMap from '../component/AffectedMap';
import CasesDisplay from '../component/CasesDisplay';
import CountrySelect from '../component/CountrySelect';

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ImageBackground 
          source={require('../../assets/Background.png')} 
          style={styles.image} >
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={styles.headerName}>Covid-19 Tracker</Text>
              <Text style={styles.headerTitle}>Corona Virus Cases</Text>
              
              <Text style={styles.headerTime}>Last updated 1 hour ago</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.cards}>
              <View style={styles.cardsRow}>
                <CasesDisplay title='COMFIRMED'></CasesDisplay>
                <CasesDisplay title='ACTIVE'></CasesDisplay>
              </View>
              <View style={styles.cardsRow}>
                <CasesDisplay title='RECOVERED'></CasesDisplay>
                <CasesDisplay title='DECASED'></CasesDisplay>
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
    flex: 1,
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
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 28, 
    fontWeight: '500',
    color: '#FFFFFF',
    marginVertical: 8,
  },
  headerTime: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  content: {
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  cards: {
    marginHorizontal: 30,
    marginTop: -30
  },
  cardsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  map: {
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 20
  }
});
