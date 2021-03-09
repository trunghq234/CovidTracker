import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HealthTip from '../component/HealthTip'
import colors from '../Colors'

let p = 'Lorem ipsum dolor sit amet, consecte adipiscing elit. Proin tincidunt, orci ac consequat eleifend, ex odio viverra risus, nec aliquet lectus purus non neque. Nunc in nulla ligula. Integer hendrerit libero sed nisl ultricies, vel condimentum metus suscipit. Donec luctus maximus interdum. Proin dignissim odio libero, vel aliquam dolor vestibulum sed. Maecenas purus diam, eleifend vel luctus quis, mollis sed lectus. Integer ac accumsan felis, at gravida erat.'

export default function HealthScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Health Tips</Text>
        <View style={styles.content}>
          <HealthTip 
            title='Wear a mask' 
            details='Wear a mask to help stop us from unknowingly spreading infectious droplets.'
            imgSrc= { require('../../assets/image/preventions/WearMask.png') }
          />
          <HealthTip 
            title='Wash your hands' 
            details='Wash your hands often with soap for at least 20 seconds or use an alcohol-based hand sanitizer containing at least 60% alcohol.'
            imgSrc= { require('../../assets/image/preventions/WashHands.png') }
          />
          <HealthTip 
            title='Clean and disinfect surfaces and objects' 
            details='Clean and disinfect frequently touched surfaces daily.'
            imgSrc= { require('../../assets/image/preventions/CleanSurface.png') }
          />
          <HealthTip 
            title='Keep distance' 
            details='Keeping 2 metres away from others when outside of your home.'
            imgSrc= { require('../../assets/image/preventions/Distance.png') }
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 26, 
    fontWeight: '700',
    color: colors.primary,
    marginTop: 20,
    marginHorizontal: 20
  },
  content: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
})
