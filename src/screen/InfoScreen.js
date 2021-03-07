import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../Colors'
import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from 'react-native-gesture-handler';

export default function InfoScreen() {
  loadInBrowser = async url => {
    try {
      WebBrowser.openBrowserAsync(url);
    } catch (err) {
      alert("Couldn't load this page", err);
    }
  };

  return (
    <ScrollView 
      style={{ backgroundColor: colors.white }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Contact Me</Text>
        <View style={styles.contact}>
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
        <View style={{width: '100%', height: 240}}>
          <Text style={styles.heading}>References</Text>
          <TouchableOpacity style={styles.content} onPress={() => loadInBrowser('https://github.com/disease-sh/API')}>
            <View style={styles.card}>
              <Image style={styles.social} source={require('../../assets/image/socialMedia/download.png')} />
              <View style={styles.text}>
                <Text style={styles.title}>disease.sh</Text>
                <Text style={styles.detail}>An open API for disease-related statistics</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content} onPress={() => loadInBrowser('https://rapidapi.com/vaccovidlive-vaccovidlive-default/api/vaccovid-coronavirus-vaccine-and-treatment-tracker')}>
            <View style={styles.card}>
              <Image style={styles.social} source={require('../../assets/image/socialMedia/news.png')} />
              <View style={styles.text}>
                <Text style={styles.title}>VACCOVID</Text>
                <Text style={[styles.detail, {width: '60%'}]}>Coronavirus, vaccine and treatment tracker API Documentation</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
    alignSelf: 'center',
    marginBottom: 15
  },
  image: {
    borderRadius: 100,
    height: 150,
    width: 150,
    marginBottom: 40
  },
  content: {
    flex: 1,
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
    fontWeight: '600',
    width: '80%',
  },
  contact: {
    height: 300,
    width: '100%'
  }
})
