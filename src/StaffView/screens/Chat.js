import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Acount } from './OverView'
import CUSTOM_COLOR from '../constants/colors'
import UserChat from '../components/UserChat'
import Size from '../constants/size'
import { Firestore, Storage } from '../../../Firebase/firebase'
import { async } from '@firebase/util'
import { collection, doc, getDocs, updateDoc, where } from 'firebase/firestore'
import { query } from 'firebase/database'
function Chat({navigation}){
    const [dataChat, setDataChat] = useState([])

    const getDataChat = async() => {
      const q = query(collection(Firestore, "CHAT"))
      const querySnapshot = await getDocs(q)
      const data = []
      querySnapshot.forEach((doc) => {
          data.push({...doc.data()})
      })
      setDataChat(data)

      useEffect(()=>{
        getDataChat()
      })

  }
    return (
      <SafeAreaView style = {{ backgroundColor: CUSTOM_COLOR.White, height: Size.DeviceHeight}}>
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
      <View>
        <UserChat
          onPress = {()=> navigation.navigate('ChatScreen')}
          source={{uri: Acount.avartar}}
          source1={{uri: Acount.avartar}}
          name='NGUYEN TRUNG TINH'
          message='You:What are you doing? - 12:40PM'
        ></UserChat>
        <UserChat
          onPress = {()=> navigation.navigate('ChatScreen')}
          source={{uri: Acount.avartar}}
          source1={{uri: Acount.avartar}}
          name='NGUYEN TRUNG TINH'
          message='You:What are you doing? - 12:40PM'
        ></UserChat>
        <UserChat
          onPress = {()=> navigation.navigate('ChatScreen')}
          source={{uri: Acount.avartar}}
          source1={{uri: Acount.avartar}}
          name='NGUYEN TRUNG TINH'
          message='You:What are you doing? - 12:40PM'
        ></UserChat>
        <UserChat
          onPress = {()=> navigation.navigate('ChatScreen')}
          source={{uri: Acount.avartar}}
          source1={{uri: Acount.avartar}}
          name='NGUYEN TRUNG TINH'
          message='You:What are you doing? - 12:40PM'
        ></UserChat>
      </View>
      </SafeAreaView>
    )
  }

export default Chat