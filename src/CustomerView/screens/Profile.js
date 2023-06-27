import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Acount } from './OverView'
import { SafeAreaView } from 'react-native-safe-area-context'
import CUSTOM_COLOR from '../../StaffView/constants/colors'
import BackTo from '../../StaffView/components/BackTo'
import { collection, addDoc, doc, updateDoc, onSnapshot, getDocs, where } from "firebase/firestore";
import { async } from "@firebase/util";
import { Firestore, firebase } from "../../../Firebase/firebase";
import { query } from "firebase/database";
function Profile({navigation, routes}){
    const [data, setdata] = useState([]);
    const getData = async ()=>{
      const q = query(collection(Firestore, "NGUOIDUNG"), where("MaND", "==", firebase.auth().currentUser.uid ));

        const querySnapshot = await getDocs(q);

        const items = [];


        querySnapshot.forEach(documentSnapshot => {
            items.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
            });
        });

    setdata(items);
    }
    
    const changeBackground = ()=>{}
    const changeAvatar = ()=>{}
    return (
      <SafeAreaView style = {{backgroundColor: CUSTOM_COLOR.White}}>
      <BackTo
        onPress={()=> navigation.goBack()}
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
        <Image source={{uri: items.Avatar}}
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
          <Text style = {{marginLeft: 15}}>Name</Text>
          <Text style = {{marginRight: 15}}>{items.TenND}</Text>
      </View>
      <View style = {styles.viewstyle}>
          <Text style = {{marginLeft: 15}}>Day Of Birth</Text>
          <Text style = {{marginRight: 15}}>{items.NgaySinh}</Text>
        </View>
        <View style = {styles.viewstyle}>
          <Text style = {{marginLeft: 15}}>Sex</Text>
          <Text style = {{marginRight: 15}}>{items.GioiTinh}</Text>
        </View>
        <View style = {styles.viewstyle}>
          <Text style = {{marginLeft: 15}}>Phone</Text>
          <Text style = {{marginRight: 15}}>{items.Phone}</Text>
        </View>
        <View style = {styles.viewstyle}>
          <Text style = {{marginLeft: 15}}>Address</Text>
          <Text style = {{ marginRight: 15}}>{items.DiaChi}</Text>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default Profile