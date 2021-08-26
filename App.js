import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import Footer from './Footer';

import { navigationRef } from './RootNavigation';
const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="home"
      >
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
        />
      </Stack.Navigator>
      <Footer></Footer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vsop: {
    color: '#f5e'
  }
});
