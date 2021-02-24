import React from 'react'
import { StyleSheet, Text, View, Image, Linking, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../Colors'
import * as WebBrowser from 'expo-web-browser';

function openLinK() {
  try {
    WebBrowser.openBrowserAsync('https://google.com');
  } catch (err) {
    alert(err);
  }
}

export default function News() {
  return (
    <TouchableOpacity onPress={openLinK}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image 
            source={{uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/14BF2/production/_117087948_codogno.jpg'}}
            style={styles.image}></Image>
          <View style={styles.text}>
            <Text numberOfLines={2} style={styles.title}>Coronavirus: What Europeans have learned from a year of pandemic</Text>
            <Text numberOfLines={2} style={styles.preview}>From the first case diagnosed a year ago at a hospital in northern Italy to the empty shops, restaurants and stadiums of Europe's cities, the lives of Europeans have been changed forever.</Text>
          </View>
        </View>
        <Text style={styles.info}>BBC News - 10 mins ago</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.text2,
    borderRadius: 8,
    height: 120,
    marginBottom: 20
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 8
  },
  text: {
    marginTop: 10,
    marginRight: 10,
    flex: 1,
  },
  title: {
    //fontFamily: 'Montserrat',
    fontSize: 20, 
    fontWeight: '500',
    maxHeight: 44
  },
  preview: {
    //fontFamily: 'Monterrat',
    fontWeight: '400',
    fontSize: 14,
    color: colors.text2,
    marginTop: 10    
  },
  info: {
    //fontFamily: 'Monterrat',
    fontWeight: '500',
    fontSize: 14,
    color: colors.text2,
    marginHorizontal: 10
  }
})
