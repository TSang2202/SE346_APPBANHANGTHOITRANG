import React from 'react'
import { useState } from 'react';
import CUSTOM_COLOR from '../../StaffView/constants/colors.js';
import { createNavigationContainerRef } from '@react-navigation/native'
import FONT_FAMILY from '../../StaffView/constants/fonts.js';
import SearchInput from '../../CustomerView/components/SearchInput';
import scale from '../constants/responsive.js';
import { View, Text, SafeAreaView, StyleSheet,Image,TouchableOpacity,FlatList } from 'react-native'
import { Acount } from '../screens/OverView.js';
export const theme = (props:any) => { () 
  return (
    <SafeAreaView>
      <View style = {{width: '100%',height:180,flexDirection: 'column', alignItems: 'center',backgroundColor: CUSTOM_COLOR.LavenderBlush}}>
        <SearchInput
          placeholder = 'Search in the Shop'
          style = {{width: '80%', height: '50%', backgroundColor: CUSTOM_COLOR.White}}
        ></SearchInput>
        <Image
          style = {{width: scale(72), height:scale(72),aspectRatio: 1, borderRadius: 55, marginTop: 5}}
          source={{uri: Acount.avartar}}
          resizeMode='contain'
        ></Image>
        <Text style={{color: CUSTOM_COLOR.Black, fontSize: 20, fontWeight: 'bold', marginTop: 2}}
        >FAUGET</Text>
      </View>
      <View style = {{width: '100%', height:200}}>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})