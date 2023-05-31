import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Firestore } from "../../../Firebase/firebase";
import { IC_Chat, IC_ShoppingCart } from "../assets/icons";
import { IM_GiayNam, IM_MauAo, IM_PhuKien, IM_SaleImage, IM_ThoiTrangNam, IM_ThoiTrangNu } from "../assets/images";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import SearchInput from "../components/SearchInput";
import CUSTOM_COLOR from "../constants/colors";
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";
import { async } from "@firebase/util";
import ProductView from "../components/ProductView";
//import { get } from "firebase/database";




const dataCategorie = [
  {
    id: '1',
    source: IM_ThoiTrangNam,
    name: 'Thời trang nam',
  },
  {
    id: '2',
    source: IM_ThoiTrangNu,
    name: 'Thời trang nữ',
  },
  {
    id: '3',
    source: IM_PhuKien,
    name: 'Phụ kiện',
  },
  {
    id: '4',
    source: IM_GiayNam,
    name: 'Giày nam',
  },
]

function HomeScreenCustomer({ navigation }) {

  const [trending, setTrending] = useState([]);
  const [danhmuc, setDanhMuc] = useState([])

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

  useEffect(() => {


    getDataTrending();
    getDataDanhMuc();


    // const interval = setInterval(() => getData(), 5000); // Lặp lại phương thức lấy dữ liệu sau mỗi 5 giây
    // return () => clearInterval(interval); // Xóa interval khi component bị unmount
  }, []);


  return (
    <ScrollView style={{ flex: 1, backgroundColor: CUSTOM_COLOR.White }}>

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
            navigation.navigate('Chat')

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
            navigation.navigate('ShoppingCard')
          }}
        >
          <Image
            source={IC_ShoppingCart}
          />
        </TouchableOpacity>



      </View>




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

      <View style={{}}>
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
        />

      </View>

      <View style={{ height: 200 }}></View>
    </ScrollView>

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