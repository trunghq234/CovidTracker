import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SocialIcon } from 'react-native-elements'
import colors from '../Colors'
import * as WebBrowser from 'expo-web-browser';

export default function InfoScreen() {
  loadInBrowser = async url => {
    try {
      WebBrowser.openBrowserAsync(url);
    } catch (err) {
      alert("Couldn't load this page", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Me</Text>
      <Image style={styles.image} source={require('../../assets/Avatar.jpg')} />
      <TouchableOpacity style={styles.content} onPress={() => loadInBrowser('https://www.facebook.com/trunghuynh2304/')}>
        <View style={styles.card}>
          <Image style={styles.social} source={require('../../assets/image/socialMedia/facebook.png')} />
          <View style={styles.text}>
            <Text style={styles.title}>Trung Huỳnh</Text>
            <Text style={styles.detail}>Facebook</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.content} onPress={() => loadInBrowser('https://github.com/trunghuynh2304')}>
        <View style={styles.card}>
          <Image style={styles.social} source={require('../../assets/image/socialMedia/github.png')} />
          <View style={styles.text}>
            <Text style={styles.title}>@trunghuynh2304</Text>
            <Text style={styles.detail}>Github</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.content} onPress={() => loadInBrowser('https://www.instagram.com/trung.huynh__/')}>
        <View style={styles.card}>
          <Image style={styles.social} source={require('../../assets/image/socialMedia/instagram.png')} />
          <View style={styles.text}>
            <Text style={styles.title}>@trung.huynh__</Text>
            <Text style={styles.detail}>Instagram</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 10
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.text,
    marginVertical: 30
  },
  image: {
    borderRadius: 100,
    height: 150,
    width: 150,
    marginBottom: 40
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
    width: '100%',
    padding: 10,
  },
  card: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.text2,
    borderRadius: 8,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  social: {
    height: 60,
    width: 60,
  },
  text: {
    marginHorizontal: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '700'
  },
  detail: {
    fontSize: 14,
    color: colors.text2,
    fontWeight: '600'
  }
})
