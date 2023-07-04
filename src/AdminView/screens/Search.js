import { default as React } from 'react'
import { StyleSheet, View } from 'react-native'
import MyProduct1 from '../components/MyProductOne'
import Search from '../components/Search'
import CUSTOM_COLOR from '../constants/colors'
import Size from '../constants/size'
import { Data } from './MyProduct'
export default function SearchSrc({navigation}) {
  return (
    <View
      style={{
        backgroundColor: CUSTOM_COLOR.White,
        width: '100%',
        height: Size.DeviceHeight,
      }}>
      <Search placeholder="Search In The Shop" />
      <MyProduct1
        source={Data[0].pic}
        title={Data[0].name}
        price={Data[0].price}
        soluongtonkho={Data[0].ware}
        soluonglove={Data[0].love}
        soluongview={Data[0].view}
        soluongban={Data[0].sold}
        edit={() => navigation.navigate('EditProduct')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
