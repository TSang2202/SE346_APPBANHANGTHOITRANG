import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Acount } from './OverView'
import { SafeAreaView } from 'react-native-safe-area-context'
import CUSTOM_COLOR from '../constants/colors'
import BackTo from '../components/BackTo'
function Setting({navigation}){
    const changeBackground = ()=>{}
    const changeAvatar = ()=>{}
    return (
      <SafeAreaView style = {{backgroundColor: CUSTOM_COLOR.White}}>
      <BackTo
        onPress={()=> navigation.navigate('OverView')}
        Info="Home"
      ></BackTo>
      <ImageBackground 
      resizeMode='cover'
      source={{uri: Acount.background}}
      style = {{width: '100%', height: 150,marginTop: 10, backgroundColor: CUSTOM_COLOR.Sliver, flexDirection: 'column'}}>
        <TouchableOpacity style = {styles.buttonchage}
          onPress={changeBackground}
        >
          <Text style = {{fontStyle: 'italic', fontSize: 12}}>Change Background</Text>
        </TouchableOpacity>
        <View style = {{alignItems: 'center', flexDirection: 'column'}}>
        <Image source={{uri: Acount.avartar}}
        resizeMode='contain'
        style = {{width: '21%', aspectRatio: 1,borderRadius: 55, marginTop: 5}}
        ></Image>
        <TouchableOpacity style = {styles.buttonchage1}
          onPress={changeAvatar}
        >
          <Text style = {{fontStyle: 'italic', fontSize: 11}}>Change Avatar</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style = {styles.viewstyle}>
          <View style = {{flexDirection: 'row',width: '100%'}}>
          <Text style = {{marginLeft: 15}}>Name</Text>
          <Text style = {{marginRight: 15, marginLeft: 200}}>{Acount.name}</Text>
          </View>
      </View>
      <View style = {styles.viewstyle}>
          <View style = {{flexDirection: 'row',width: '100%'}}>
          <Text style = {{marginLeft: 15}}>Day Of Birth</Text>
          <Text style = {{marginRight: 15, marginLeft: 200}}>{Acount.day}</Text>
          </View>
      </View>
      <View style = {styles.viewstyle}>
          <View style = {{flexDirection: 'row',width: '100%'}}>
          <Text style = {{marginLeft: 15}}>Sex</Text>
          <Text style = {{marginRight: 15, marginLeft: 200}}>{Acount.sex}</Text>
          </View>
      </View>
      <View style = {styles.viewstyle}>
          <View style = {{flexDirection: 'row',width: '100%'}}>
          <Text style = {{marginLeft: 15}}>Phone</Text>
          <Text style = {{marginRight: 15, marginLeft: 200}}>{Acount.phone}</Text>
          </View>
      </View>
      <View style = {styles.viewstyle}>
          <View style = {{flexDirection: 'row',width: '100%'}}>
          <Text style = {{marginLeft: 15}}>Address</Text>
          <Text style = {{marginRight: 15, marginLeft: 200}}>{Acount.address}</Text>
          </View>
      </View>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  buttonchage:{
    width: 120,
    height: 20,
    backgroundColor: CUSTOM_COLOR.White,
    borderColor: CUSTOM_COLOR.Black,
    borderRadius: 15,
    marginTop: 5,
    marginLeft: '70%',
    alignItems: 'center',
    borderWidth: 1
  },
  buttonchage1:{
    alignItems: 'center',
    width: 80,
    height: 20,
    backgroundColor: CUSTOM_COLOR.White,
    borderColor: CUSTOM_COLOR.Black,
    borderRadius: 15,
    marginTop: 5,
    borderWidth: 1
  },
  viewstyle:{
    marginTop:2,
    borderBottomColor: CUSTOM_COLOR.Black,
    borderBottomWidth: 0.5,
    width: '100%',
    height: 70,
    justifyContent: 'center',
  }
})
export default Setting