import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Firestore } from '../../../Firebase/firebase'

import UserChat from '../components/UserChat'
import CUSTOM_COLOR from '../constants/colors'
import Size from '../constants/size'
import { Acount } from './OverView'



export default function Chat({ navigation }) {

  const [users, setUser] = useState([])

  const getUser = async (item) => {

    item = item.trim();

    const docRef = doc(Firestore, "NGUOIDUNG", item);
    const docSnap = await getDoc(docRef);

    //console.log("item:", item);
    //console.log(docSnap.data())
    const user = {
      ...docSnap.data()
    }

    return user;
  }


  const getDataChat = async () => {
    const querySnapshot = await getDocs(collection(Firestore, "CHAT"));

    const promises = [];

    for (const documentSnapshot of querySnapshot.docs) {

      const promise = getUser(documentSnapshot.data().MaND);
      promises.push(promise);
      //console.log(promises)
    }
    const dataUser = await Promise.all(promises);


    const data = []

    // querySnapshot.forEach( (documentSnapshot) => {

    //   const dataUser = await getUser(documentSnapshot.data().MaND)

    //   console.log(dataUser)
    //   data.push({
    //     ...documentSnapshot.data(),
    //     //...docSnap.data(),
    //   })

    // })

    dataUser.map((user, index) => {
      const documentSnapshot = querySnapshot.docs[index];
      //console.log(user)
      data.push({
        ...documentSnapshot.data(),
        ...user
      })
    });

    setUser(data)


  }

  useEffect(() => {


    const unsubscribe = navigation.addListener('focus', () => {
      getDataChat()


    });
    getDataChat()
    // console.log(users)

  }, [])

  return (
    <SafeAreaView style={{ backgroundColor: CUSTOM_COLOR.White, height: Size.DeviceHeight }}>
      <View style={{ flexDirection: 'row', marginTop: 20, width: '100%', height: 70 }}>
        <Image
          source={{ uri: Acount.avartar }}
          style={{ aspectRatio: 1, borderRadius: 55, width: '15%', marginLeft: 15 }}
        ></Image>
        <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10, color: CUSTOM_COLOR.Black }}>Chat</Text>
      </View>



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
        renderItem={({ item }) => (
          <UserChat
            //key={item.MaChat}
            source={item.Avatar}
            name={item.TenND}
            message='You:What are you doing? - 12:40PM'
            onPress={() => navigation.navigate('ChatScreenStaff', { item })}
          ></UserChat>
        )}
        keyExtractor={(item) => item.MaChat}
      />



    </SafeAreaView>
  )
}

