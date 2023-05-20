import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainNavigator from './src/Login_SignUp/navigation/navigation.js';
import type {PropsWithChildren} from 'react';
import CustomerBottomTab from './src/CustomerView/navigation/CustomerBottomTab.js';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <CustomerBottomTab/>
    </SafeAreaView>
  );}

const styles = StyleSheet.create({
});

export default App;