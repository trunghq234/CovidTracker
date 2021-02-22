import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import NewsScreen from './src/screen/NewsScreen';
import HealthScreen from './src/screen/HealthScreen';
import InfoScreen from './src/screen/InfoScreen';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar barStyle="light-content" translucent="true"/>
        <NavigationContainer>
          <Tab.Navigator
            backBehavior='history'
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
                } else if (route.name === 'News') {
                  iconName = focused ? 'ios-newspaper-sharp' : 'ios-newspaper-outline';
                } else if (route.name === 'Health') {
                  iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
                } else if (route.name === 'Info') {
                  iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                }
                
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#EA5569',
              inactiveTintColor: '#6F787F',
            }}
                     
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="News" component={NewsScreen} />
            <Tab.Screen name="Health" component={HealthScreen} />
            <Tab.Screen name="Info" component={InfoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },

});
