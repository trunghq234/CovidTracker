import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../Colors'

export default function SymptomsDisplay() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.container}>
      <View style={styles.shadowCard}>
        <Image style={styles.image} source={require('../../assets/image/symptoms/Cough.png')} />
        <Text style={styles.title}>Cough</Text>
      </View>
      <View style={styles.shadowCard}>
        <Image style={styles.image} source={require('../../assets/image/symptoms/HighFever.png')} />
        <Text style={styles.title}>High Fever</Text>
      </View>
      <View style={styles.shadowCard}>
        <Image style={styles.image} source={require('../../assets/image/symptoms/TroubleBreathing.png')} />
        <Text style={styles.title}>Trouble{"\n"}Breathing</Text>
      </View>
      <View style={styles.shadowCard}>
        <Image style={styles.image} source={require('../../assets/image/symptoms/SoreThroat.png')} />
        <Text style={styles.title}>Sore Throat</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingBottom: 20
  },
  shadowCard: {
    height: 140,
    width: 120,
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
    marginHorizontal: 10,
    marginTop: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    height: 110,
    width: 110,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    fontWeight: '700',
    color: colors.gray,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  }
})
