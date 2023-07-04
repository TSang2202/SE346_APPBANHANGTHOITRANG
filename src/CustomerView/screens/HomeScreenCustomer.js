import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Badge } from 'react-native-elements';
import { Firestore, firebase } from '../../../Firebase/firebase';
import { IC_Chat, IC_ShoppingCart } from '../assets/icons';
import {
  IM_GiayNam,
  IM_MauAo,
  IM_PhuKien,
  IM_SaleImage,
  IM_ThoiTrangNam,
  IM_ThoiTrangNu,
} from '../assets/images';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import SearchInput from '../components/SearchInput';
import CUSTOM_COLOR from '../constants/colors';
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
  onSnapshot,
  Timestamp,
} from 'firebase/firestore';
import { async } from '@firebase/util';
import ProductView from '../components/ProductView';
import Swiper from 'react-native-swiper';
import PromotionCard from '../../AdminView/components/PromotionCard';
import dayjs from 'dayjs';

//import { get } from "firebase/database";

function HomeScreenCustomer({ navigation }) {
  const [trending, setTrending] = useState([]);
  const [danhmuc, setDanhMuc] = useState([]);
  const [chatUser, setChatUser] = useState();
  const [loadingChatUser, setLoadingChatUser] = useState(false);
  const [idUser, setIdUser] = useState();
  const [badgeCart, setBadgeCart] = useState(0);
  const [dataPromotion, setDataPromotion] = useState([]);

  const getDataTrending = async () => {
    //const querySnapshot = await getDocs(collection(Firestore, "MATHANG"));

    const q = query(
      collection(Firestore, 'SANPHAM'),
      where('Trending', '==', true),
      where('TrangThai', '==', "Inventory"),
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data()();
        if (data && data.TrangThai) {
          items.push({
            ...data,
            key: doc.id,
          });
        }
      });
      setTrending(items);
    });


  };

  const getDataDanhMuc = async () => {
    const q = query(collection(Firestore, 'DANHMUC'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          ...doc.data(),
          key: doc.id,

        });
      });
      setDanhMuc(items);
    });


  };

  const getDataChatUser = async () => {
    const q = query(
      collection(Firestore, 'CHAT'),
      where('MaND', '==', firebase.auth().currentUser.uid),
    );

    const unsubscribe = onSnapshot(q, async querySnapshot => {
      querySnapshot.forEach(doc => {
        setChatUser(doc.data());
        console.log(doc.data());
      });
    });
  };

  const getBadgeCart = () => {
    const q = query(
      collection(Firestore, 'GIOHANG'),
      where('MaND', '==', firebase.auth().currentUser.uid),
    );
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const data = [];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      setBadgeCart(data.length);
    });
  };

  const getDataPromotion = async () => {
    const q = query(collection(Firestore, 'KHUYENMAI'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      const data = [];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      setDataPromotion(data);
    });
  };

  useEffect(() => {
    getDataTrending();
    getDataDanhMuc();
    getDataChatUser();
    setIdUser(firebase.auth().currentUser.uid);
    getBadgeCart();
    getDataPromotion();

    console.log(chatUser);
  }, [loadingChatUser]);

  const setSoLuongChuaDocCuaCustomer = async () => {
    const chatUpdateRef = doc(Firestore, 'CHAT', chatUser.MaChat);

    await updateDoc(chatUpdateRef, {
      SoLuongChuaDocCuaCustomer: 0,
    });
  };

  return (
    <View
      style={{ backgroundColor: CUSTOM_COLOR.White, flex: 1 }}
      nestedScrollEnabled={true}>
      <View
        style={{
          width: '100%',
          height: 70,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{ width: '5%', height: '100%' }} />

        <View style={{ width: '65%', height: 45 }}>
          <SearchInput
            placeholder="Search product"
            style={{
              width: '70%',
              margin: 10,
            }}
            onPressIn={() => {
              navigation.navigate('Searching');
            }}
          />
        </View>

        <View style={{ width: 10, height: '100%' }} />

        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            backgroundColor: CUSTOM_COLOR.Mercury,
            alignItems: 'center',
            justifyContent: 'center',
            // marginVertical: 10,
            // padding: 8,
            borderRadius: 10,
          }}
          onPress={() => {
            setSoLuongChuaDocCuaCustomer();
            navigation.navigate('Chat', { chatUser });
          }}>
          {chatUser && chatUser.SoLuongChuaDocCuaCustomer != 0 ? (
            <Badge
              value={chatUser.SoLuongChuaDocCuaCustomer}
              status="error"
              containerStyle={{ position: 'absolute', top: -5, right: -5 }}
            />
          ) : null}

          <Image source={IC_Chat} />
        </TouchableOpacity>

        <View style={{ width: 10, height: '100%' }} />

        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            backgroundColor: CUSTOM_COLOR.Mercury,
            alignItems: 'center',
            justifyContent: 'center',
            // marginVertical: 10,
            // padding: 8,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate('ShoppingCard', { idUser });
          }}>
          {badgeCart != 0 ? (
            <Badge
              value={badgeCart}
              status="error"
              containerStyle={{ position: 'absolute', top: -5, right: -5 }}
            />
          ) : null}
          <Image source={IC_ShoppingCart} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{}}>
        <Text style={styles.textView}>On sale</Text>

        {/* <Image style={{ marginHorizontal: 30, height: 120, width: 380 }}
          source={IM_SaleImage}
        /> */}

        <View
          style={{
            height: 175,
          }}>
          <Swiper
            autoplay
            loop
            style={{
              flexDirection: 'row',

              height: '90%',
            }}>
            {dataPromotion
              ? dataPromotion.map((promotion, index) => {
                const timestampBD = promotion.NgayBatDau.toDate();
                const dateBD = dayjs(timestampBD);

                const dayBD = dateBD.date();
                const monthBD = dateBD.month();
                const yearBD = dateBD.year();

                const timestampKT = promotion.NgayKetThuc.toDate();
                const dateKT = dayjs(timestampKT);

                const dayKT = dateKT.date();
                const monthKT = dateKT.month();
                const yearKT = dateKT.year();

                return (
                  <PromotionCard
                    source={promotion.HinhAnhKM}
                    name={promotion.TenKM}
                    discount={promotion.TiLe * 100}
                    minimum={promotion.DonToiThieu}
                    start={`${dayBD}/${monthBD}/${yearBD}`}
                    end={`${dayKT}/${monthKT}/${yearKT}`}
                    type={promotion.Loai}
                    key={index}
                  // onPress={() => navigation.navigate("EditPromotion", { item })}
                  />
                );
              })
              : null}
          </Swiper>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: -40,
          }}>
          <Text style={styles.textView}>Trending now</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Trending');
            }}>
            <Text style={{ margin: 20 }}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={{}}>
          <FlatList
            windowSize={10}
            horizontal={true}
            data={trending}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  marginHorizontal: -10,
                }}
                onPress={() => {
                  navigation.navigate('DetailProduct', { item });
                }}>
                <ProductView
                  source={item.HinhAnhSP[0]}
                  title={item.TenSP}
                  price={item.GiaSP}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.MaSP}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.textView}>Orther categories</Text>
          <TouchableOpacity>
            <Text style={{ margin: 20 }}>Explore now</Text>
          </TouchableOpacity>
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

        {danhmuc
          ? danhmuc.map(item => (
            <TouchableOpacity
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('DetailCategory', { item });
              }}
              key={item.MaDM}>
              <Categories source={item.AnhDM} title={item.TenDM} />
            </TouchableOpacity>
          ))
          : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textView: {
    marginHorizontal: 15,
    marginVertical: 10,
    fontWeight: 'bold',
    color: CUSTOM_COLOR.Black,
    fontSize: 20,
  },
});

export default HomeScreenCustomer;
