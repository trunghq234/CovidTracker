import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../Colors';
import CountryPicker, { FlagType, getAllCountries } from 'react-native-country-picker-modal'
import CountrySelect from '../component/CountrySelect';

export default function InfoScreen() {
  const [selected, setSelected] = useState('Country');
  const {withFilter, withCountryNameButton, withAlphaFilter} = true;
  return (
    <View style={styles.container}>
      <CountrySelect>

      </CountrySelect>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 8,
  },
})
