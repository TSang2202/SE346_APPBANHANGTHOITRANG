import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CustomerBottomTab from './src/CustomerView/navigation/CustomerBottomTab.js';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <CustomerBottomTab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
