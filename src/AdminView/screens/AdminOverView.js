import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CUSTOM_COLOR from '../../StaffView/constants/colors.js';
import FONT_FAMILY from '../../StaffView/constants/fonts.js';
import ViewNow from '../../StaffView/components/ViewNow';
import {firebase} from '../../../Firebase/firebase.js';
import {
  IC_product,
  IC_order,
  IC_logout,
  IC_promotions,
  IC_financial,
  IC_user,
  IC_messenger,
  IC_User,
  IC_Review,
} from '../assets/icons/index.js';
import MenuIcon from '../components/MenuIcon.js';
import FunctionCard from '../components/FunctionCard.js';
import {Storage} from '../../../Firebase/firebase';
import LoadingComponent from '../components/Loading';

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
const Order = [
  {
    id: '1',
    number: 10,
    status: 'Wait',
  },
  {
    id: '2',
    number: 10,
    status: 'Cancel',
  },
  {
    id: '3',
    number: 10,
    status: 'Request',
  },
  {
    id: '4',
    number: 10,
    status: 'Review',
  },
];

const AdminOverView = props => {
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
    fetchImageUrl(firebase.auth().currentUser.uid, 'Avatar').then(url =>
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
      {userData ? (
        <>
          <>
            <View style={styles.menuContainer}>
              <View style={{width: 32, height: 37}}>
                <MenuIcon
                  onPress={() => navigation.navigate('ChangeProfile')}
                  source={IC_User}
                />
              </View>
              <View style={{width: 10, height: '100%'}} />
              <View style={{width: 30, height: 30}}>
                <MenuIcon
                  onPress={() => navigation.navigate('Chat')}
                  source={IC_messenger}
                />
              </View>
              {/* <View style={{width: 5, height: '100%'}} />
          <View style={{width: 35, height: 35}}>
            <MenuIcon
              onPress={() => navigation.navigate('Notification')}
              source={IC_notification}
            />
          </View> */}
              <View style={{width: 5, height: '100%'}} />
              <View style={{width: 32, height: 32}}>
                <MenuIcon
                  onPress={() => {
                    firebase.auth().signOut();
                  }}
                  source={IC_logout}
                />
              </View>
              <View style={{width: 10, height: '100%'}} />
            </View>
          </>

          <View style={styles.spaceContainer} />

          <>
            <View style={styles.accountContainer}>
              <View style={styles.infoContainer}>
                <View style={{width: 10, height: '100%'}} />
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
                <View
                  style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <Text style={[styles.textViewStyles, {fontSize: 20}]}>
                    {userData.TenND}
                  </Text>
                  <View style={{width: '100%', height: 5}} />
                  <Text style={[styles.textViewStyles, {fontSize: 15}]}>
                    {userData.LoaiND}
                  </Text>
                </View>
              </View>
              <View style={styles.viewShopContainer}>
                <TouchableOpacity style={styles.butViewShopContainer}>
                  <Text
                    style={{color: CUSTOM_COLOR.Red}}
                    onPress={() => navigation.navigate('ViewShop1')}>
                    View Shop
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>

          <View style={styles.spaceContainer} />

          <>
            <View style={styles.oderContainer}>
              <View style={{width: '100%', height: '5%'}} />
              <View style={styles.textContainer}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text style={styles.textViewStyles}>Order New</Text>
                </View>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text
                    style={styles.textViewStyles}
                    onPress={() => navigation.navigate('Order')}>
                    View Now{' '}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.listOderConatiner}>
                <FlatList
                  horizontal={true}
                  data={Order}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => {
                    return (
                      <ViewNow number={item.number} status={item.status} />
                    );
                  }}
                />
              </View>
            </View>
          </>

          <View style={styles.spaceContainer} />

          <>
            <View style={styles.functionContainer}>
              <View style={styles.unitContainer}>
                <View style={styles.unitContainer}>
                  <FunctionCard
                    onPress={() => navigation.navigate('MyProduct')}
                    source={IC_product}
                    text="My Product"
                  />
                </View>
                <View style={styles.unitContainer}>
                  <FunctionCard
                    onPress={() => navigation.navigate('Order')}
                    source={IC_order}
                    text="My Order"
                  />
                </View>
                <View style={styles.unitContainer}>
                  <FunctionCard
                    onPress={() => navigation.navigate('Promotion')}
                    source={IC_promotions}
                    text="Promotions"
                  />
                </View>
              </View>
              <View style={styles.unitContainer}>
                <View style={styles.unitContainer}>
                  <FunctionCard
                    onPress={() => navigation.navigate('Report')}
                    source={IC_financial}
                    text="Financial Report"
                  />
                </View>
                <View style={styles.unitContainer}>
                  <FunctionCard
                    onPress={() => navigation.navigate('ManageUser')}
                    source={IC_user}
                    text="Manage User"
                  />
                </View>
                <View style={styles.unitContainer}>
                  {/* <FunctionCard
                    onPress={() => navigation.navigate('ReviewScreen')}
                    source={IC_Review}
                    text="Manage Review"
                  /> */}
                </View>
              </View>
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
  },
  spaceContainer: {
    flex: 0.5,
    backgroundColor: CUSTOM_COLOR.SlateGray,
  },
  menuContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  accountContainer: {
    flex: 4,
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 3,
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
  viewShopContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  butViewShopContainer: {
    width: '90%',
    height: '35%',
    borderColor: CUSTOM_COLOR.FlushOrange,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  oderContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '90%',
    height: '20%',
    flexDirection: 'row',
  },
  listOderConatiner: {
    height: '75%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  functionContainer: {
    flex: 10,
    flexDirection: 'column',
  },
  unitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default AdminOverView;
