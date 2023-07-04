import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import BackTo from '../components/BackTo';
import CUSTOM_COLOR from '../constants/colors';
import {Address, Delivery, Payment} from '../assets/icons';
import {ScrollView} from 'react-native-gesture-handler';
import {Acount} from './OverView';
import PerSon from '../components/PerSon';
import {IM_MauAo} from '../assets/images';
import ButtonDetail from '../components/ButtonDetail';
import {Firestore} from '../../../Firebase/firebase';
import {
  collection,
  onSnapshot,
  query,
  doc,
  getDoc,
  querySnapshot,
  getDocs,
  where,
  updateDoc,
} from 'firebase/firestore';
import OneOrder from '../components/OneOrder';
import CustomHeader from '../components/CustomHeader';

const DataDelivery = {
  Name: 'Trung Tinh',
  Phone: '0704408389',
  Address: '140/10 Dinh Bo Linh, Phuong 26, Binh Thanh, Ho Chi Minh',
  CTY: 'Fast Delivery VietNam',
  Code: '#JHGUJHCFJG',
};
export default function DeTailDelivery({navigation, route}) {
  const {item} = route.params;

  const [address, setAddress] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getAddress = async item => {
    const docRef = doc(Firestore, 'DIACHI', item);
    const docSnap = await getDoc(docRef);

    const address = {
      ...docSnap.data(),
    };

    setAddress(address);
    setIsLoading(false);
  };

  useEffect(() => {
    getAddress(item.MaDC);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      console.log(item);
    }
  }, [isLoading]);

  const Confirm = async () => {
    navigation.goBack();
    const confirmRef = doc(Firestore, 'DONHANG', item.MaDH);

    await updateDoc(confirmRef, {
      TrangThai:
        item.TrangThai === 'Confirm'
          ? 'OnWait'
          : item.TrangThai === 'OnWait'
          ? 'Delivering'
          : item.TrangThai === 'Delivering'
          ? 'Delivered'
          : 'Delivered',
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: CUSTOM_COLOR.White, flex: 1}}>
      <>
        <View style={{width: '100%', height: 55, justifyContent: 'center'}}>
          <CustomHeader
            onPress={() => navigation.goBack()}
            title="Order/ Detail Delivery"
          />
        </View>
      </>
      <>
        <View style={{width: '100%', height: '80%', backgroundColor: 'red'}}>
          <ScrollView style={{backgroundColor: CUSTOM_COLOR.White}}>
            <View
              style={{
                width: '100%',
                height: 10,
                backgroundColor: CUSTOM_COLOR.LightGray,
              }}
            />
            <View
              style={{width: '100%', flexDirection: 'column', marginTop: 10}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  height: 30,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={Address}
                    style={{width: 30, height: 30, marginLeft: 18}}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      color: CUSTOM_COLOR.Black,
                      marginLeft: 5,
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Address
                  </Text>
                </View>
              </View>
              <View style={{marginLeft: 50, marginTop: 5, marginRight: 20}}>
                <Text>{item.TenND}</Text>
                <Text>{item.SDT}</Text>
                {!isLoading && (
                  <Text>{`${address.DiaChi}, ${address.PhuongXa}, ${address.QuanHuyen}, ${address.TinhThanhPho}`}</Text>
                )}
              </View>
            </View>

            <View
              style={{
                width: '100%',
                height: 10,
                marginTop: 10,
                backgroundColor: CUSTOM_COLOR.LightGray,
              }}
            />

            <View
              style={{width: '100%', flexDirection: 'column', marginTop: 10}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  height: 30,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={Payment}
                    style={{width: 30, height: 30, marginLeft: 18}}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      color: CUSTOM_COLOR.Black,
                      marginLeft: 5,
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Payment
                  </Text>
                </View>
              </View>
              <View style={{marginLeft: 50, marginTop: 5, marginRight: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                    }}>
                    Provisional:{' '}
                  </Text>
                  <Text>{item.TamTinh} </Text>
                  <Text
                    style={{
                      fontStyle: 'italic',
                    }}>
                    VND
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                    }}>
                    Delivery fee:{' '}
                  </Text>
                  <Text>{item.PhiVanChuyen} </Text>
                  <Text
                    style={{
                      fontStyle: 'italic',
                    }}>
                    VND
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                    }}>
                    Discount:{' '}
                  </Text>
                  <Text>- {item.GiamGia} </Text>
                  <Text
                    style={{
                      fontStyle: 'italic',
                    }}>
                    VND
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                    }}>
                    Total:{' '}
                  </Text>
                  <Text>{item.TongTien} </Text>
                  <Text
                    style={{
                      fontStyle: 'italic',
                    }}>
                    VND
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                width: '100%',
                height: 10,
                marginTop: 10,
                backgroundColor: CUSTOM_COLOR.LightGray,
              }}
            />

            <View
              style={{
                width: '100%',
                height: 75,
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <View style={{width: 50, height: '100%'}} />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    color: CUSTOM_COLOR.Black,
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  Code:{' '}
                </Text>
                <View style={{width: '100%', height: 3}} />
                <Text>Date: </Text>
                <View style={{width: '100%', height: 2}} />
                <Text>Status</Text>
              </View>
              {/* <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  height: 30,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: CUSTOM_COLOR.Black,
                      marginLeft: 5,
                      fontSize: 20,
                    }}>
                    Address
                  </Text>
                </View>
              </View>
              <View style={{marginLeft: 50, marginTop: 5, marginRight: 20}}>
                <Text>{item.TenND}</Text>
                <Text>{item.SDT}</Text>
                {!isLoading && (
                  <Text>{`${address.DiaChi}, ${address.PhuongXa}, ${address.QuanHuyen}, ${address.TinhThanhPho}`}</Text>
                )}
              </View> */}
            </View>

            <View
              style={{
                width: '100%',
                height: 10,
                marginTop: 10,
                backgroundColor: CUSTOM_COLOR.LightGray,
              }}
            />
            <View>
              <PerSon avartar={item.Avatar} name={item.TenND} id={item.MaND} />

              <View>
                {item.DatHang.map((order, index) => {
                  return (
                    <View key={index}>
                      <OneOrder
                        source={order.SanPham.HinhAnhSP[0]}
                        title={order.SanPham.TenSP}
                        price={order.SanPham.GiaSP}
                        number={order.SoLuong}
                        color={order.MauSac}
                        size={order.Size}
                        totalPrice={order.ThanhTien}
                      />
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={{width: '100%', height: 20}} />
          </ScrollView>
        </View>
      </>
      <>
        <View
          style={{
            width: '100%',
            height: 75,
            backgroundColor: CUSTOM_COLOR.White,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '90%',
              height: 55,
              flexDirection: 'row',
              marginHorizontal: '5%',
            }}>
            <TouchableOpacity
              onPress={() => {
                Confirm(item);
              }}
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: CUSTOM_COLOR.DarkOrange,
                borderRadius: 25,
              }}>
              <Text
                style={{
                  color: CUSTOM_COLOR.White,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 40,
  },
});
