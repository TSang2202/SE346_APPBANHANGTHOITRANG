import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AccountCard from '../components/AccountCard';

import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';

export const Acount = {
  name: 'Nguyen Trung Tinh',
  avartar:
    'https://icdn.dantri.com.vn/thumb_w/660/2021/09/24/lucasweibo-1632498824939.jpeg',
  id: '21520115',
  address: 'Binh Tan, Ho Chi Minh',
  phone: '0704408389',
  sex: 'male',
  day: '16/12/2003',
  background:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9z5m7BtaVEQCqDkL5UI2QrBqr1EiCI6-YXA&usqp=CAU',
};

const ManageUser = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', height: 15}} />

      <>
        <View style={styles.accountContainer}>
          <View style={styles.avataContainer}>
            <Image
              source={{uri: Acount.avartar}}
              style={{
                width: '100%',
                height: '100%',
                aspectRatio: 1,
                borderRadius: 50,
                resizeMode: 'center',
              }}
            />
          </View>
          <View style={{width: 15, height: '100%'}} />
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={styles.textViewStyles}>{Acount.name}</Text>
            <View style={{width: '100%', height: 5}} />
            <Text style={styles.textViewStyles}>ID:{Acount.id}</Text>
          </View>
        </View>
      </>

      <>
        <View style={styles.searchContainer}>
          <View style={{width: '5%', height: '100%'}} />
          <View style={styles.searchViewContainer}>
            <Search
              placeholder="Search"
              style={{
                width: 200,
                height: 35,
                backgroundColor: CUSTOM_COLOR.White,
              }}
            />
          </View>
          <View style={{width: '5%', height: '100%'}} />
          <TouchableOpacity style={styles.butAddContainer}>
            <Text
              style={{color: CUSTOM_COLOR.White}}
              onPress={() => navigation.navigate('AddAccount')}>
              Add Account
            </Text>
          </TouchableOpacity>
        </View>
      </>

      <>
        <View style={styles.listViewContainer}>
          {/* Lay list nguoi dung ve hien thi */}
          <AccountCard onPress={() => navigation.navigate('EditAccount')} />
        </View>
      </>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
    flexDirection: 'column',
  },
  accountContainer: {
    flex: 2.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avataContainer: {
    width: '33%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textViewStyles: {
    fontFamily: FONT_FAMILY.Semibold,
    fontSize: 15,
    fontWeight: 'bold',
    color: CUSTOM_COLOR.Black,
  },
  searchContainer: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchViewContainer: {
    width: '60%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  butAddContainer: {
    width: '25%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: CUSTOM_COLOR.FlushOrange,
    backgroundColor: CUSTOM_COLOR.FlushOrange,
    borderRadius: 5,
    borderWidth: 1,
  },
  listViewContainer: {
    flex: 10,
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ManageUser;
