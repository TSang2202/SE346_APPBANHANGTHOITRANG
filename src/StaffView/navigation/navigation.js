import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OverView from '../screens/OverView.js';
import ViewShop1 from '../screens/ViewShop1.js';
import ViewShop2 from '../screens/ViewShop2.js';
import Chat from '../screens/Chat.js';
import Setting from '../screens/Setting.js';
import Notification from '../screens/Notification.js';
import Order from '../screens/Order.js';
import Report from '../screens/Report.js'
import User from '../screens/User.js'
import Promotion from '../screens/Promotion.js';
const Stack = createNativeStackNavigator();
function StackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Test"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OverView" component={OverView} />
      <Stack.Screen name="ViewShop1" component={ViewShop1}/>
      <Stack.Screen name="ViewShop2" component={ViewShop2}/>    
      <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
      <Stack.Screen name='Setting' component={Setting}/>
      <Stack.Screen name='Notification' component={Notification}/>
      <Stack.Screen name='User' component={User}/>
      <Stack.Screen name='Order' component={Order}/>
      <Stack.Screen name='Report' component={Report}/>
      <Stack.Screen name='Promotion' component={Promotion}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default StackNavigator;
