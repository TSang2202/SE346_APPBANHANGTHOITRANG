import { View, Text, SafeAreaView, StyleSheet,Image,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react';
import CUSTOM_COLOR from '../../StaffView/constants/colors.js';
import { createNavigationContainerRef } from '@react-navigation/native'
import FONT_FAMILY from '../../StaffView/constants/fonts.js';
import SearchInput from '../../CustomerView/components/SearchInput';
import scale from '../constants/responsive.js';
import { Acount } from './OverView.js';
import theme from '../components/theme';
function ViewShop1({navigation}){
  const [product, setproduct] = useState(true)
  if(product == true){
  return (
    <theme></theme>
    )}
    else{
      return(
        <theme></theme>
      )
    }
}
export default ViewShop1