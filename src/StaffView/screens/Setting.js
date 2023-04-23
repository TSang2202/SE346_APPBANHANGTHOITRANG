import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Acount } from './OverView'
import { SafeAreaView } from 'react-native-safe-area-context'
import CUSTOM_COLOR from '../constants/colors'
function Setting(){
    return (
      <SafeAreaView>
      <View style = {{width: '100%', height: 150, backgroundColor: CUSTOM_COLOR.LavenderBlush}}>
        <TouchableWithoutFeedback style = {styles.buttonchage}
          onPress={()=>{}}
        >
          <Text style = {{fontStyle: 'italic'}}>Change Your BackgroundColor</Text>
        </TouchableWithoutFeedback>
      </View>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  buttonchage:{
    width: 50,
    height: 20,
    backgroundColor: CUSTOM_COLOR.White,
    borderColor: CUSTOM_COLOR.Black,
    borderRadius: 9,
    marginTop: 10,
    borderWidth: 5
  }
})
export default Setting