import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';
//Acount la du lieu mau ve tai khoan
import { IM_AnhGiay1 } from '../../CustomerView/assets/images';
import HeaderWithBack from '../components/HeaderWithBack';
import OneStaff from '../components/OneStaff';
import { Acount } from './OverView';

export default function User({ navigation }) {
  //const { navigation } = props;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBack onPress={() => navigation.goBack()} />
      <View style={{ width: '100%', backgroundColor: CUSTOM_COLOR.White }}>
        <View
          style={{
            width: '100%',
            height: 110,
            flexDirection: 'row',
            borderBottomWidth: 0.5,
          }}>
          <Image
            source={IM_AnhGiay1}
            style={{
              width: 75,
              aspectRatio: 1,
              borderRadius: 55,
              marginTop: 20,
              marginLeft: 20,
            }}
            resizeMode="cover"
          />
          <View
            style={{ flexDirection: 'column', marginLeft: 20, marginTop: 30 }}>
            <Text
              style={{
                fontFamily: FONT_FAMILY.Semibold,
                color: CUSTOM_COLOR.Black,
                fontWeight: 'bold',
              }}>
              {Acount.name}
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontFamily: FONT_FAMILY.Semibold,
                color: CUSTOM_COLOR.Black,
                fontWeight: 'bold',
              }}>
              ID:{Acount.id}
            </Text>
          </View>
        </View>
        <View style={{ height: 100, width: '100%', flexDirection: 'row' }}>
          <Search
            placeholder="Search"
            style={{
              width: 200,
              height: 35,
              backgroundColor: CUSTOM_COLOR.White,
            }}
          />
          {/* <ButtonDetail
            title="Add new staff"
            style={{ width: 160, height: 35, marginTop: 10 }}
            onPress={() => navigation.navigate('AddAccount')}
            color={CUSTOM_COLOR.FlushOrange}
          /> */}
        </View>
        <View>
          <OneStaff
            Name="Nguyen Trung Tinh"
            Status="Working"
            onPress={navigation.navigate('EditAccount')}
          />
          {/* <FlatList>

            </FlatList> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
});
