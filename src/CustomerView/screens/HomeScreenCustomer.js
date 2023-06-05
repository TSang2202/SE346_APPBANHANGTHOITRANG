import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Firestore, firebase } from "../../../Firebase/firebase";
import { IC_Chat, IC_ShoppingCart } from "../assets/icons";
import { IM_GiayNam, IM_MauAo, IM_PhuKien, IM_SaleImage, IM_ThoiTrangNam, IM_ThoiTrangNu } from "../assets/images";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import SearchInput from "../components/SearchInput";
import CUSTOM_COLOR from "../constants/colors";
import { collection, doc, setDoc, getDocs, query, where, addDoc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import ProductView from "../components/ProductView";

//import { get } from "firebase/database";




function HomeScreenCustomer({ navigation }) {

  const [trending, setTrending] = useState([]);
  const [danhmuc, setDanhMuc] = useState([])
  const [chatUser, setChatUser] = useState()
  const [loadingChatUser, setLoadingChatUser] = useState(false)
  const [idUser, setIdUser] = useState()

  const getDataTrending = async () => {
    //const querySnapshot = await getDocs(collection(Firestore, "MATHANG"));

    const q = query(collection(Firestore, "SANPHAM"), where("Trending", "==", true));

    const querySnapshot = await getDocs(q);

    const items = [];


    querySnapshot.forEach(documentSnapshot => {
      items.push({
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
      });
    });

    setTrending(items);
  }

  const getDataDanhMuc = async () => {
    const q = query(collection(Firestore, "DANHMUC"))

    const querySnapshot = await getDocs(q);

    const items = [];


    querySnapshot.forEach(documentSnapshot => {
      items.push({
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
      });
    });

    setDanhMuc(items);
  }

  const getDataChatUser = async () => {
    const q = query(collection(Firestore, "CHAT"), where("MaND", "==", firebase.auth().currentUser.uid));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.size == 0) {
      const docRef = await addDoc(collection(Firestore, "CHAT"), {
        MaND: firebase.auth().currentUser.uid
      });

      const updateRef = doc(Firestore, "CHAT", docRef.id);
      await updateDoc(updateRef, {
        MaChat: docRef.id
      });

      setLoadingChatUser(true)
    }
    querySnapshot.forEach((doc) => {
      setChatUser(doc.data())
    });
  }

  useEffect(() => {


    getDataTrending();
    getDataDanhMuc();
    getDataChatUser()
    setIdUser(firebase.auth().currentUser.uid)

    console.log(chatUser)

    // const interval = setInterval(() => getData(), 5000); // Lặp lại phương thức lấy dữ liệu sau mỗi 5 giây
    // return () => clearInterval(interval); // Xóa interval khi component bị unmount
  }, [loadingChatUser]);


  return (

    <View style={{ backgroundColor: CUSTOM_COLOR.White }}
      nestedScrollEnabled={true}
    >
      <View style={{ flexDirection: 'row' }}>
        <SearchInput
          placeholder='Search product'
          style={{
            width: 290,
            margin: 10
          }}
          onPressIn={() => {
            navigation.navigate('Searching')
          }}
        />
        <TouchableOpacity style={{
          backgroundColor: CUSTOM_COLOR.Mercury,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
          padding: 8,
          borderRadius: 10
        }}
          onPress={() => {
            navigation.navigate('Chat', { chatUser })

          }}
        >
          <Image
            source={IC_Chat}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: CUSTOM_COLOR.Mercury,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
          marginHorizontal: 10,
          padding: 8,
          borderRadius: 10
        }}
          onPress={() => {
            navigation.navigate('ShoppingCard', { idUser })
          }}
        >
          <Image
            source={IC_ShoppingCart}
          />
        </TouchableOpacity>



      </View>

      <ScrollView style={{}}>





        <Text style={styles.textView}>On sale</Text>

        <Image style={{ marginHorizontal: 30, height: 120, width: 380 }}
          source={IM_SaleImage}
        />

        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <Text style={styles.textView}>Trending now</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Trending')
            }}
          ><Text style={{ margin: 20 }}>See all</Text></TouchableOpacity>
        </View>

        <View style={{}}>
          <FlatList
            windowSize={10}
            horizontal={true}
            data={trending}

            renderItem={({ item }) =>
              <TouchableOpacity style={{
                marginHorizontal: -10
              }}
                onPress={() => { navigation.navigate('DetailProduct', { item }) }}
              >
                <ProductView
                  source={item.HinhAnhSP}
                  title={item.TenSP}
                  price={item.GiaSP}
                />
              </TouchableOpacity>
            }
            keyExtractor={item => item.MaSP}
          />

        </View>


        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <Text style={styles.textView}>Orther categories</Text>
          <TouchableOpacity><Text style={{ margin: 20 }}>Explore now</Text></TouchableOpacity>
        </View>



        {/* 
      <FlatList


        data={danhmuc}

        renderItem={({ item }) =>
          <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => { navigation.navigate('DetailCategory', { item }) }}
          >
            <Categories
              source={item.AnhDM}
              title={item.TenDM}
            />
          </TouchableOpacity>


        }
        keyExtractor={item => item.MaDM}
      /> */}

        {danhmuc ?
          danhmuc.map((item) =>
          (
            <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => { navigation.navigate('DetailCategory', { item }) }}
              key={item.MaDM}
            >
              <Categories
                source={item.AnhDM}
                title={item.TenDM}
              />
            </TouchableOpacity>
          ))
          : null}


      </ScrollView>

    </View>

  )
}


const styles = StyleSheet.create({
  textView: {
    marginHorizontal: 15,
    marginVertical: 10,
    fontWeight: 'bold',
    color: CUSTOM_COLOR.Black,
    fontSize: 20
  }

})

export default HomeScreenCustomer