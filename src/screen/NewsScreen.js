import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import News from '../component/News'
import colors from '../Colors';

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Text style={styles.title}>Lastest News</Text>
        <View style={styles.content}>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
            <News></News>
        </View>
      </ScrollView>
    </View>
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
    marginVertical: 20,
    marginHorizontal: 30
  },
  content: {
    flex: 1,
    marginHorizontal: 30,
  }
})
