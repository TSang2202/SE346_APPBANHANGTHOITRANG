import React from 'react';
import './Firebase/firebase';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainNavigator from './src/Login_SignUp/navigation/navigation.js';
import StackNavigator from './src/StaffView/navigation/navigation.js';
import StackHome from './src/CustomerView/navigation/StackHome';
import {useAuth} from './src/Login_SignUp/hooks/useAuth';

const App = () => {
  const {user} = useAuth();

  return user ? <StackHome /> : <MainNavigator />;
};

const styles = StyleSheet.create({});

export default App;
