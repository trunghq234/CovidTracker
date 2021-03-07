import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { DEFAULT_THEME } from 'react-native-country-picker-modal/lib/CountryTheme';
import colors from '../Colors';
import { CountryCode, Country } from '../../types';

export default function CountrySelect({ selecteCountry }) {
  const [countryCode, setCountryCode] = useState('VN')
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
    selecteCountry(country.cca2)
  }
  const THEME = {
    ...DEFAULT_THEME,
    primaryColorVariant: '#333',
    backgroundColor: colors.text,
    onBackgroundTextColor: colors.white,
    fontSize: 22,
    fontWeight: '700',
    filterPlaceholderTextColor: '#aaa',
    activeOpacity: 1,
    placeHolderTextColor: colors.white,
    itemHeight: 45
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
    marginBottom: 5
  }
})
