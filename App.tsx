import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackNavigator from './src/StaffView/navigation/navigation';
import type {PropsWithChildren} from 'react';

function App(): JSX.Element {
  return (
    <StackNavigator></StackNavigator>
  );}

const styles = StyleSheet.create({
});

export default App;
