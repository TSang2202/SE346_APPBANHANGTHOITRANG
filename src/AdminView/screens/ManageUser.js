import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Search from '../components/Search';
import ButtonDetail from '../components/ButtonDetail';
import OneStaff from '../components/OneStaff';
import {IM_AnhGiay1} from '../../CustomerView/assets/images';
import HeaderWithBack from '../components/HeaderWithBack';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../../Login_SignUp/constants/fonts';
import AccountCard from '../components/AccountCard';
import {firebase, Firestore} from '../../../Firebase/firebase';
import LoadingComponent from '../components/Loading';
import {Storage} from '../../../Firebase/firebase';
import {IC_User} from '../assets/icons';

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
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // Assume data is fetched here
      const fetchedData = 'Sample Data';
      setData(fetchedData);
      setIsLoading(false);
    }, 2000);

    fetchUserData(firebase.auth().currentUser.uid);
    fetchImageUrl('NGUOIDUNG', firebase.auth().currentUser.uid).then(url =>
      setImageUrl(url),
    );
  }, []);

  const fetchUserData = async userId => {
    try {
      const userRef = firebase.firestore().collection('NGUOIDUNG').doc(userId);
      const userDoc = await userRef.get();

      if (userDoc.exists) {
        const userData = userDoc.data();
        setUserData(userData);
      } else {
        console.log('User document does not exist');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchImageUrl = async (documentId, fieldName) => {
    try {
      const documentSnapshot = await firebase
        .firestore()
        .collection('NGUOIDUNG')
        .doc(documentId)
        .get();
      const data = documentSnapshot.data();
      const imageUrl = data[fieldName];
      return imageUrl;
    } catch (error) {
      console.error('Error fetching image URL:', error);
      return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', height: 15}} />

      {userData ? (
        <>
          <View style={styles.accountContainer}>
            <View style={styles.avataContainer}>
              {imageUrl ? (
                <Image
                  source={{uri: imageUrl}}
                  style={{
                    width: '100%',
                    height: '100%',
                    aspectRatio: 1,
                    borderRadius: 50,
                    resizeMode: 'center',
                    borderColor: CUSTOM_COLOR.Black,
                    borderWidth: 1,
                  }}
                />
              ) : (
                <Image
                  source={IC_User}
                  style={{
                    width: '100%',
                    height: '100%',
                    aspectRatio: 1,
                    borderRadius: 50,
                    resizeMode: 'center',
                    borderColor: CUSTOM_COLOR.Black,
                    borderWidth: 1,
                  }}
                />
              )}
            </View>
            <View style={{width: 15, height: '100%'}} />
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
              <Text style={[styles.textViewStyles, {fontSize: 20}]}>
                {userData.TenND}
              </Text>
              <View style={{width: '100%', height: 5}} />
              <Text style={[styles.textViewStyles, {fontSize: 15}]}>
                {userData.LoaiND}
              </Text>
            </View>
          </View>
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
        </>
      ) : (
        <LoadingComponent text="Loading data..." />
      )}
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
