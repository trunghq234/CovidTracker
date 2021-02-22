import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import { SocialIcon } from 'react-native-elements'


export default function InfoScreen() {
  loadInBrowser = url => {
    Linking
    .openURL(url)
    .catch(err => alert.error("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Me</Text>
      <Image style={styles.image} source={require('../../assets/Avatar.jpg')}></Image>
      <Text style={styles.text}>Trung Huỳnh</Text>
      <View style={styles.socials}>
        <TouchableOpacity style={styles.button} onPress={() => loadInBrowser('https://www.facebook.com/trunghuynh2304/')}>
          <SocialIcon type='facebook' iconSize={30}/> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => loadInBrowser('https://github.com/trunghuynh2304')}>
          <SocialIcon type='github' iconSize={30}/> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => loadInBrowser('https://www.instagram.com/trung.huynh__/')}>
          <SocialIcon type='instagram' iconSize={30}/> 
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1D2C40',
    marginVertical: 30
  },
  image: {
    borderRadius: 100,
    height: 150,
    width: 150
  },
  text: {
    fontWeight: '700',
    fontSize: 30,
    color: '#EA5569',
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  socials: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between'
  },
  button: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})
