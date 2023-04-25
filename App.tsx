import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainNavigator from './src/Login_SignUp/navigation/navigation.js';
import type {PropsWithChildren} from 'react';
import StackNavigator from './src/StaffView/navigation/navigation.js';
import Setting from './src/StaffView/screens/Setting.js';
import ViewShop2 from './src/StaffView/screens/ViewShop2.js';
import Chat from './src/StaffView/screens/Chat.js';
function App(): JSX.Element {
  return (
    <StackNavigator></StackNavigator>
  );}

const styles = StyleSheet.create({
});

export default App;