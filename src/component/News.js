import React from 'react'
import { StyleSheet, Text, View, Image, Linking, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../Colors'
import * as WebBrowser from 'expo-web-browser';

function openLinK(url) {
  try {
    WebBrowser.openBrowserAsync(url);
  } catch (err) {
    alert(err);
  }
}

function displayDateDiff(pubDate) {
  var now = Date.now();
  var diff = now - pubDate, sign = diff < 0 ? - 1 : 1, milliseconds, seconds, minutes, hours, days;
  diff /= sign; // or diff=Math.abs(diff);
  diff = (diff - (milliseconds = diff % 1000)) / 1000;
  diff = (diff - (seconds = diff % 60)) / 60;
  diff = (diff - (minutes = diff % 60)) / 60;
  days = (diff - (hours = diff % 24)) / 24;
  //console.log(diff)
  console.log(minutes)
  if (days !== 0) {
    return days;
  } else if (hours !== 0) {
    return hours;
  } else if (minutes !== 0) {
    return minutes;
  } else if (milliseconds !== 0) {
    return milliseconds;
  }
}
export default function News({ news }) {
  return (
    <TouchableOpacity onPress={() => openLinK(news.link)}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image 
            source={{uri: news.urlToImage}}
            style={styles.image}></Image>
          <View style={styles.text}>
            <Text numberOfLines={2} style={styles.title}>{ news.title }</Text>
            <Text numberOfLines={3} style={styles.preview}>{ news.content }</Text>
          </View>
        </View>
        <Text style={styles.info}>Source: { news.reference }</Text>
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
    marginBottom: 15,
    padding: 10
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 8,
    resizeMode: 'cover'
  },
  text: {
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
    marginTop: 5    
  },
  info: {
    //fontFamily: 'Monterrat',
    fontWeight: '600',
    fontSize: 14,
    color: colors.text2,
    marginVertical: 5
  }
})
