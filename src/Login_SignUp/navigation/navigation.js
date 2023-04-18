import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Congratulation from '../screens/Congratulation.js';
import Done from '../screens/Done.js';
import ForgotPassword from '../screens/ForgotPassword.js';
import Intro from '../screens/Intro.js';
import ResetPassword from '../screens/ResetPassword.js';
import SignIn from '../screens/SignIn.js';
import SignUp from '../screens/SignUp.js';
import SmartOTP from '../screens/SmartOTP.js';
import WelcomeUser from '../screens/WelcomeUser.js';

const Stack = createNativeStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Done"
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Congratulation" component={Congratulation} /> */}
      <Stack.Screen name="Done" component={Done} />
      {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SmartOTP" component={SmartOTP} />
      <Stack.Screen name="WelcomeUser" component={WelcomeUser} /> */}
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
