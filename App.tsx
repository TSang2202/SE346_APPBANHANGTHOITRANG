import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
import HomeScreen from './src/CustomerView/navigation/StackHome.js';
function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <NavigationContainer>
        <HomeScreen></HomeScreen>
      </NavigationContainer>
    </SafeAreaView>
  );}

const styles = StyleSheet.create({
});

export default App;