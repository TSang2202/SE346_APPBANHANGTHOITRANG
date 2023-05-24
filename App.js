import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import MainNavigator from './src/Login_SignUp/navigation/navigation.js';
//import type { PropsWithChildren } from 'react';

import CustomerBottomTab from './src/CustomerView/navigation/CustomerBottomTab.js';
import OverView from './src/StaffView/screens/OverView.js';
import StackNavigator from './src/StaffView/navigation/navigation.js';

const App = () => {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <StackNavigator />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({});

export default App;
