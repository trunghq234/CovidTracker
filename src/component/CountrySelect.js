import React, { useState } from 'react'
import { View, Text, StyleSheet, PixelRatio, Switch } from 'react-native'
import CountryPicker, { CountryModalProvider } from 'react-native-country-picker-modal'
import { DEFAULT_THEME, useTheme } from 'react-native-country-picker-modal/lib/CountryTheme';
import colors from '../Colors';
import { CountryCode, Country } from '../types';

export default function CountrySelect() {
  const [countryCode, setCountryCode] = useState('GH')
  const [country, setCountry] = useState(null)
  const [withCountryNameButton, setWithCountryNameButton] = useState(true)
  const [withFlag, setWithFlag] = useState(true)
  const [withEmoji, setWithEmoji] = useState(true)
  const [withFilter, setWithFilter] = useState(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState(true)
  const [withCallingCode, setWithCallingCode] = useState(false)
  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }
  const THEME = {
    ...DEFAULT_THEME,
    primaryColorVariant: '#333',
    backgroundColor: '#333',
    onBackgroundTextColor: '#fff',
    fontSize: 18,
    fontWeight: '700',
    filterPlaceholderTextColor: '#aaa',
    activeOpacity: 1,
    placeHolderTextColor: '#fff'
  }
  return (
    <View style={styles.container}>
      <CountryPicker
        theme={{ ...THEME }}
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect,
          containerButtonStyle:{
              justifyContent:'space-between',
              alignItems:'baseline',
          }
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    color: colors.white,
  }
})
