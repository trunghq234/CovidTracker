import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../Colors'

export default function PreventionsDisplay() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.container}>
      <View style={styles.shadowCard}>
        <Image style={styles.image} source={require('../../assets/image/preventions/WearMask.png')} />
        <Text style={styles.title}>Wear a mask</Text>
      </View>
      <View style={styles.shadowCard}>
        <Image style={styles.image} source={require('../../assets/image/preventions/WashHands.png')} />
        <Text style={styles.title}>Wash{"\n"}your hands</Text>
      </View>
      <View style={styles.shadowCard}>
        <Image style={styles.image} source={require('../../assets/image/preventions/CleanSurface.png')} />
        <Text style={styles.title}>Clean{"\n"}Surface</Text>
      </View>
      <View style={styles.shadowCard}>
        <Image style={styles.image} source={require('../../assets/image/preventions/Distance.png')} />
        <Text style={styles.title}>Keep distance</Text>
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
    justifyContent: 'center'
  },
  image: {
    height: 100,
    width: 110,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    fontWeight: '700',
    color: colors.gray,
    fontSize: 14,
    textAlign: 'center',
  }
})
