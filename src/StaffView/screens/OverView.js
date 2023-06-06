import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import CUSTOM_COLOR from '../../StaffView/constants/colors.js';
import { createNavigationContainerRef } from '@react-navigation/native'
import { settingicon, messenger, notification, report, product, promotion, order, chat, user } from '../../StaffView/assets/icons/index.js';
import FONT_FAMILY from '../../StaffView/constants/fonts.js';
import ViewShop1 from './ViewShop1.js';
import Button from '../../StaffView/components/Button';
import ViewNow from '../../StaffView/components/ViewNow';
export const Acount = {
  name: 'Nguyen Trung Tinh',
  avartar: 'https://icdn.dantri.com.vn/thumb_w/660/2021/09/24/lucasweibo-1632498824939.jpeg',
  id: '21520115',
  address: 'Binh Tan, Ho Chi Minh',
  phone: '0704408389',
  sex: 'male',
  day: '16/12/2003',
  background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9z5m7BtaVEQCqDkL5UI2QrBqr1EiCI6-YXA&usqp=CAU'
}
const Order = [
  {
    id: '1',
    number: 10,
    status: 'Wait',
  },
  {
    id: '2',
    number: 10,
    status: 'Cancel',
  },
  {
    id: '3',
    number: 10,
    status: 'Delivering',
  },
  {
    id: '4',
    number: 10,
    status: 'Review',
  }
]
function OverView({ navigation }) {
  return (

    <SafeAreaView style={{ flexDirection: 'column', backgroundColor: CUSTOM_COLOR.White, width: '100%', height: '100%' }}>
      <View style={{ width: '100%', height: '12%', flexDirection: 'row' }}>
        <TouchableOpacity style={styles.settingicon} onPress={() => { navigation.navigate('Setting') }}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={settingicon}
            resizeMode='stretch'>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messengericon} onPress={() => { navigation.navigate('Chat') }}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={messenger}
            resizeMode="contain"
          >
          </Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationicon} onPress={() => { navigation.navigate('Notification') }}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={notification}
            resizeMode="contain">
          </Image>
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', height: '2%', backgroundColor: CUSTOM_COLOR.SlateGray }}>

      </View>
      <View style={{ width: '100%', height: '17%', flexDirection: 'row' }}>
        <Image
          source={{ uri: Acount.avartar }}
          style={{ width: '21%', aspectRatio: 1, borderRadius: 55, marginTop: '3%', marginLeft: '3%' }}
          resizeMode="cover"
        >
        </Image>
        <View style={{ flexDirection: 'column', marginLeft: '3%', marginTop: '7%' }}>
          <Text style={{ fontFamily: FONT_FAMILY.Semibold, color: CUSTOM_COLOR.Black, fontWeight: 'bold' }}>{Acount.name}</Text>
          <Text style={{ marginTop: '3%', fontFamily: FONT_FAMILY.Semibold, color: CUSTOM_COLOR.Black, fontWeight: 'bold' }}>ID:{Acount.id}</Text>
        </View>
        <TouchableOpacity style={styles.viewshop}>
          <Text
            style={{ color: CUSTOM_COLOR.Red, alignItems: 'center' }}
            onPress={() => navigation.navigate('ViewShop1')}
          >View Shop</Text>

        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', height: '2%', backgroundColor: CUSTOM_COLOR.SlateGray }}>
      </View>
      <View style={{ width: '100%', height: '20%' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: '2%', marginLeft: '5%', fontWeight: 'bold', color: CUSTOM_COLOR.Black }}>Order New</Text>
          <TouchableOpacity style={{ marginTop: '3%', marginLeft: '60%' }}>
            <Text style={{ fontSize: 12, color: CUSTOM_COLOR.Black, fontWeight: 'bold' }}
              onPress={() => navigation.navigate('Order')}
            >View Now </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <FlatList
            horizontal={true}
            data={Order}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <ViewNow
                  number={item.number}
                  status={item.status}
                ></ViewNow>
              )
            }}
          ></FlatList>
        </View>
      </View>
      <View style={{ width: '100%', height: '2%', backgroundColor: CUSTOM_COLOR.SlateGray }}>
      </View>
      <View style={{ flexDirection: 'column', width: '100%', height: '40%' }}>
        <View style={{ flexDirection: 'row', width: '100%', height: '30%', marginTop: '7%' }}>
          <Button
            source={product}
            onPress={() => navigation.navigate('MyProduct')}
          />
          <Button
            source={order}
            onPress={() => navigation.navigate('Order')}
          ></Button>
          <Button
            source={promotion}
            onPress={() => navigation.navigate('Promotion')}
          ></Button>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', height: '10%' }}>
          <Text style={{ color: CUSTOM_COLOR.Black, marginTop: '-3%', marginLeft: '8%' }}>My Product</Text>
          <Text style={{ color: CUSTOM_COLOR.Black, marginTop: '-3%', marginLeft: '16%' }}>My Order</Text>
          <Text style={{ color: CUSTOM_COLOR.Black, marginTop: '-3%', marginLeft: '16%' }}>Promotions</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', height: '30%', marginTop: '3%' }}>
          <Button
            source={report}
            onPress={() => navigation.navigate('Report')}
          ></Button>
          <Button
            source={chat}
            onPress={() => navigation.navigate('Chat')}
          ></Button>
          <Button
            source={user}
            onPress={() => navigation.navigate('User')}
          ></Button>
        </View>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <Text style={{ color: CUSTOM_COLOR.Black, marginTop: '-3%', marginLeft: '6%' }}>Finances Report</Text>
          <Text style={{ color: CUSTOM_COLOR.Black, marginTop: '-3%', marginLeft: '10%' }}>Messenger</Text>
          <Text style={{ color: CUSTOM_COLOR.Black, marginTop: '-3%', marginLeft: '13%' }}>Manage User</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  settingicon: {
    width: 42,
    height: 42,
    marginLeft: '68%',
    marginTop: '9%',
  },
  messengericon: {
    width: 28,
    height: 28,
    marginTop: '9%',
    marginLeft: '3%'
  },
  notificationicon: {
    marginTop: '8.8%',
    width: 32,
    height: 32,
    marginLeft: '3%'
  },
  viewshop: {
    alignItems: 'center',
    width: '21%',
    height: '21%',
    marginTop: '10%',
    marginLeft: '21%',
    borderColor: CUSTOM_COLOR.Red,
    borderWidth: 1,
  },
  textstyle: {
    marginTop: '5%',
  }

})

export default OverView