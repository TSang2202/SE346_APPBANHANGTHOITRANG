import { View, Text, Image } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Acount } from './OverView'
import CUSTOM_COLOR from '../constants/colors'
function Chat({navigation}){
    return (
      <SafeAreaView style = {{ backgroundColor: CUSTOM_COLOR.White}}>
      <View style = {{flexDirection: 'row', marginTop: 20, width: '100%', height: 70}}>
        <Image
          source={{uri: Acount.avartar}}
          style={{aspectRatio: 1, borderRadius: 55, width: '15%', marginLeft: 15}}
        ></Image>
        <Text style = {{fontWeight: 'bold', fontSize: 40, marginLeft: 10, color: CUSTOM_COLOR.Black}}>Chat</Text>
      </View>
      <Search
        placeholder = 'Search'
      ></Search>
      </SafeAreaView>
    )
  }

export default Chat