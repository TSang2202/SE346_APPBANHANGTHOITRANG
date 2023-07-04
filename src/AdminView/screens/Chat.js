import {
  collection, doc, getDoc, getDocs, onSnapshot,
  orderBy, query, updateDoc, where
} from 'firebase/firestore';
import { default as React, default as React, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Firestore, firebase } from '../../../Firebase/firebase';
import LoadingComponent from '../components/Loading';
import Search from '../components/Search';
import UserChat from '../components/UserChat';
import CUSTOM_COLOR from '../constants/colors';
import Size from '../constants/size';


export default function Chat({ navigation }) {
  const [users, setUser] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  const getUser = async item => {
    //item = item.trim();

    const docRef = doc(Firestore, 'NGUOIDUNG', item.MaND);
    const docSnap = await getDoc(docRef);

    const q = query(
      collection(Firestore, 'CHITIETCHAT'),
      orderBy('ThoiGian', 'asc'),
      where('MaChat', '==', item.MaChat),
    );
    const querySnapshot = await getDocs(q);
    const dataChiTietChat = querySnapshot.docs.map(doc => doc.data());

    const chiTietChat = {
      NoiDungMessageMoi: !dataChiTietChat
        ? 'Không có gì'
        : dataChiTietChat[dataChiTietChat.length - 1],
    };

    const user = {
      ...docSnap.data(),
      ...chiTietChat,
    };

    return user;
  };

  const getDataChat = async () => {
    const querySnapshot = await getDocs(collection(Firestore, 'CHAT'));
    const promises = [];
    for (const documentSnapshot of querySnapshot.docs) {
      const promise = getUser(documentSnapshot.data().MaND);
      promises.push(promise);
      //console.log(promises)
    }
    const dataUser = await Promise.all(promises);
    const data = [];

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
        ...user,
      });
    });
    let filteredItems = data;
        if (searchTerm != null) {
            filteredItems = data.filter(item =>
            item.TenND.toLowerCase().includes(searchTerm.toLowerCase())
            ); 
        }
        else {
            setUser(data);
        }
        setUser(filteredItems);
    const q = query(collection(Firestore, 'CHAT'), orderBy('ThoiGian', 'desc'));

    const unsubscribe = onSnapshot(q, async querySnapshot => {
      const data = [];

      const promises = querySnapshot.docs.map(doc => {
        return getUser(doc.data());
      });

      console.log(promises);
      const dataUser = await Promise.all(promises);

      dataUser.map((user, index) => {
        const documentSnapshot = querySnapshot.docs[index];

        data.push({
          ...documentSnapshot.data(),
          ...user,
        });
      });

      setUser(data);
      console.log(users);
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataChat();
    });
    getDataChat();
    // console.log(users)
    fetchImageUrl(firebase.auth().currentUser.uid, 'Avatar').then(url =>
      setImageUrl(url),
    );
  }, [searchTerm]);

  const setSoLuongChuaDoc = async item => {
    const chatUpdateRef = doc(Firestore, 'CHAT', item.MaChat);

    await updateDoc(chatUpdateRef, {
      SoLuongChuaDoc: 0,
      MoiKhoiTao: false,
    });
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
    <SafeAreaView
      style={{backgroundColor: CUSTOM_COLOR.White, height: Size.DeviceHeight}}>
      {imageUrl ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              width: '100%',
              height: 70,
            }}>
            {imageUrl ? (
              <Image
                source={{uri: imageUrl}}
                style={{
                  aspectRatio: 1,
                  borderRadius: 55,
                  width: '15%',
                  marginLeft: 15,
                }}
              />
            ) : (
              <Image
                style={{
                  aspectRatio: 1,
                  borderRadius: 55,
                  width: '15%',
                  marginLeft: 15,
                  borderColor: CUSTOM_COLOR.Black,
                  borderWidth: 1,
                }}
              />
            )}
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 40,
                marginLeft: 10,
                color: CUSTOM_COLOR.Black,
              }}>
              Chat
            </Text>
          </View>
          <View style={{width: '100%', height: 10}} />
          <View style={{width: '90%', height: 45, marginHorizontal: '5%'}}>
            <Search placeholder="Search" />
          </View>
          <View style={{width: '100%', height: 10}} />
          <View style={{width: '100%', height: '73%'}}>
            <FlatList
              data={users}
              renderItem={({item}) => {
                console.log(item.NoiDungMessageMoi);

                const hour = item.NoiDungMessageMoi
                  ? item.ThoiGian.toDate().getHours()
                  : null;
                const minute = item.NoiDungMessageMoi
                  ? item.ThoiGian.toDate().getMinutes()
                  : null;

                return (
                  <UserChat
                    //key={item.MaChat}
                    source={item.Avatar}
                    name={item.TenND}
                    message={
                      !item.NoiDungMessageMoi
                        ? 'Customer just created an account'
                        : item.NoiDungMessageMoi.NoiDung
                    }
                    onPress={() => {
                      setSoLuongChuaDoc(item);

                      navigation.navigate('ChatScreenStaff', {item});
                    }}
                    time={!item.NoiDungMessageMoi ? null : `${hour}:${minute}`}
                    notification={
                      !item.NoiDungMessageMoi ? 0 : item.SoLuongChuaDoc
                    }
                    //notification={item.SoLuongChuaDoc}
                    justCreate={
                      !item.NoiDungMessageMoi
                        ? item.MoiKhoiTao
                        : item.MoiKhoiTao
                    }
                  />
                );
              }}
              keyExtractor={item => item.MaChat}
            />
          </View>
        </>
      ) : (
        <LoadingComponent text="Loading data..." />
      )}
    </SafeAreaView>
  );
}