import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { backto } from '../assets/icons'
import CUSTOM_COLOR from '../constants/colors'
const BackTo = (props: any) => {
  return (
    <View>
    <TouchableOpacity 
            onPress={props.onPress}
            style = {{width: 17, height: 17, marginLeft: 18, marginTop: 5}}>
              <Image
                  resizeMode='contain'
                  source={backto}
                  style={{width:'100%',height:'100%'}}
               ></Image>
            </TouchableOpacity>
            <Text style = {{color: CUSTOM_COLOR.Black, fontSize: 18, marginLeft: 10}}>props.Info</Text>
            </View>
  )
}

export default BackTo

const styles = StyleSheet.create({})