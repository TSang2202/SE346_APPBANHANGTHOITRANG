import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CUSTOM_COLOR from '../constants/colors'
import { Acount } from '../screens/OverView'
const UserChat = (props: any) => {
  return (
    <TouchableOpacity style={{ marginTop: 13, flexDirection: 'row', width: '100%', height: 70 }}
      onPress={props.onPress}>
      <Image
        resizeMode='contain'
        source={{ uri: props.source }}
        style={{ height: 65, marginLeft: 20, aspectRatio: 1, borderRadius: 55 }}
      ></Image>
      <View style={{ flexDirection: 'column', marginTop: 7, marginLeft: 10 }}>
        <Text style={{ color: CUSTOM_COLOR.Black, fontWeight: 'bold', fontSize: 20 }}>{props.name}</Text>
        <Text style={{ marginTop: 5, fontStyle: 'italic' }}>{props.message}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default UserChat

const styles = StyleSheet.create({})