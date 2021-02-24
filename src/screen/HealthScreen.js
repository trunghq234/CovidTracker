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
          <View style={styles.row}>
            <HealthTip title='Lorem ipsum dolor sit amet.' details={p}></HealthTip>
            <HealthTip title='Lorem ipsum dolor sit amet.' details={p}></HealthTip>
          </View>
          <View style={styles.row}>
            <HealthTip title='Lorem ipsum dolor sit amet.' details={p}></HealthTip>
            <HealthTip title='Lorem ipsum dolor sit amet.' details={p}></HealthTip>
          </View>
          <View style={styles.row}>
            <HealthTip title='Lorem ipsum dolor sit amet.' details={p}></HealthTip>
            <HealthTip title='Lorem ipsum dolor sit amet.' details={p}></HealthTip>
          </View>
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
    color: colors.text,
    marginTop: 20,
    marginHorizontal: 30
  },
  content: {
    margin: 30
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }
})
