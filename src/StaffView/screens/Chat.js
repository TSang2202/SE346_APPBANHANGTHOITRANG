import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Acount } from './OverView'
import CUSTOM_COLOR from '../constants/colors'
import UserChat from '../components/UserChat'
import Size from '../constants/size'
import { Firestore } from '../../../Firebase/firebase'
import { doc, getDoc, getDocs, collection, query, where, onSnapshot, orderBy, querySnapshot, docs, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util'

import PropTypes from 'deprecated-react-native-prop-types';


export default function Chat({ navigation }) {

  const [users, setUser] = useState([])

  const getUser = async (item) => {

    //item = item.trim();

    const docRef = doc(Firestore, "NGUOIDUNG", item.MaND);
    const docSnap = await getDoc(docRef);


    const q = query(collection(Firestore, "CHITIETCHAT"), orderBy("ThoiGian", "asc"), where("MaChat", "==", item.MaChat));
    const querySnapshot = await getDocs(q);
    const dataChiTietChat = querySnapshot.docs.map((doc) => doc.data());

    const chiTietChat = {
      NoiDungMessageMoi: !dataChiTietChat ? "Không có gì" : dataChiTietChat[dataChiTietChat.length - 1],

    }

    const user = {
      ...docSnap.data(),
      ...chiTietChat
    }

    return user;
  }



  // const getDataChat = async () => {
  //   const querySnapshot = await getDocs(collection(Firestore, "CHAT"));

  //   const promises = [];

  //   for (const documentSnapshot of querySnapshot.docs) {

  //     const promise = getUser(documentSnapshot.data().MaND);
  //     promises.push(promise);

  //   }
  //   const dataUser = await Promise.all(promises);

  //   const data = []

  //   dataUser.map((user, index) => {
  //     const documentSnapshot = querySnapshot.docs[index];

  //     data.push({
  //       ...documentSnapshot.data(),
  //       ...user
  //     })
  //   });

  //   setUser(data)

  // }

  const getDataChat = async () => {
    const q = query(collection(Firestore, "CHAT"), orderBy("ThoiGian", "desc"));




    const unsubscribe = onSnapshot(q, async (querySnapshot) => {
      //const promises = [];
      const data = []
      // querySnapshot.forEach((doc) => {
      //   if (doc.exists) {
      //     const promise = getUser(doc.data().MaND);
      //     promises.push(promise);
      //   } else {
      //     console.log("Document does not exist");
      //   }
      //   // const promise = getUser(doc.data().MaND);

      //   // promises.push(promise);
      //   // //console.log(promises)
      // });

      const promises = querySnapshot.docs.map(doc => {
        return getUser(doc.data());
      });

      console.log(promises)
      const dataUser = await Promise.all(promises);

      dataUser.map((user, index) => {
        const documentSnapshot = querySnapshot.docs[index];

        data.push({
          ...documentSnapshot.data(),
          ...user
        })
      });

      setUser(data)


    });





  }



  useEffect(() => {


    const unsubscribe = navigation.addListener('focus', () => {
      getDataChat()


    });
    getDataChat()
    // console.log(users)

  }, [])

  const setSoLuongChuaDoc = async (item) => {
    const chatUpdateRef = doc(Firestore, "CHAT", item.MaChat);

    await updateDoc(chatUpdateRef, {
      SoLuongChuaDoc: 0
    });
  }

  return (
    <SafeAreaView style={{ backgroundColor: CUSTOM_COLOR.White, height: Size.DeviceHeight }}>
      <View style={{ flexDirection: 'row', marginTop: 20, width: '100%', height: 70 }}>
        <Image
          source={{ uri: Acount.avartar }}
          style={{ aspectRatio: 1, borderRadius: 55, width: '15%', marginLeft: 15 }}
        ></Image>
        <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10, color: CUSTOM_COLOR.Black }}>Chat</Text>
      </View>
      <Search
        placeholder='Search'
      ></Search>


      {/* {
          users ?
            users.map((item) => (
              <UserChat
                key={item.MaChat}
                source={item.Avatar}
                name={item.TenND}
                message='You:What are you doing? - 12:40PM'
                onPress={() => navigation.navigate('ChatScreen')}
              />
            )) : <Text>aaaaaaaaaaaa</Text>
        } */}


      <FlatList
        data={users}
        renderItem={({ item }) => {

          console.log(item.NoiDungMessageMoi)

          const hour = item.NoiDungMessageMoi ? item.ThoiGian.toDate().getHours() : null;
          const minute = item.NoiDungMessageMoi ? item.ThoiGian.toDate().getMinutes() : null;

          return (
            <UserChat
              //key={item.MaChat}
              source={item.Avatar}
              name={item.TenND}
              message={!item.NoiDungMessageMoi ? "Customer just created an account" : item.NoiDungMessageMoi.NoiDung}
              onPress={() => {

                setSoLuongChuaDoc(item)

                navigation.navigate('ChatScreenStaff', { item })
              }}

              time={!item.NoiDungMessageMoi ? null : `${hour}:${minute}`}
              notification={!item.NoiDungMessageMoi ? 0 : item.SoLuongChuaDoc}
            ></UserChat>
          )
        }}
        keyExtractor={(item) => item.MaChat}
      />



    </SafeAreaView>
  )
}

