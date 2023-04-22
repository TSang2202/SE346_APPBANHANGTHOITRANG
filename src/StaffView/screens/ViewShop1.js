import { View, Text, SafeAreaView, 
  StyleSheet,Image,TouchableOpacity,FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useState } from 'react';
import CUSTOM_COLOR from '../../StaffView/constants/colors.js';
import FONT_FAMILY from '../../StaffView/constants/fonts.js';
import SearchInput from '../../CustomerView/components/SearchInput';
import scale from '../constants/responsive.js';
import { Acount } from './OverView.js';
import Product from '../../StaffView/components/Product';
import { IM_Giay1,IM_Giay2,IM_Giay3,IM_Giay4 } from '../assets/images/index.js';
const datas = [
  {
      id: '1',
      source: IM_Giay1,
      title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
      price: 399999
  },
  {
      id: '2',
      source: IM_Giay2,
      title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
      price: 399999
  },
  {
      id: '3',
      source: IM_Giay3,
      title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
      price: 399999
  },
  {
      id: '4',
      source: IM_Giay4,
      title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
      price: 399999
  },
  {
      id: '5',
      source: IM_Giay3,
      title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
      price: 399999
  },
  {
      id: '6',
      source: IM_Giay1,
      title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
      price: 399999
  }
]
export const ListItem = [
  {
    id: '1',
    namelist: 'Limited Edition 2023',
    numberitem: '4'
  },
  {
    id: '2',
    namelist: 'Limited Edition 2023',
    numberitem: '4'
  },
  {
    id: '2',
    namelist: 'Limited Edition 2023',
    numberitem: '4'
  },
  {
    id: '2',
    namelist: 'Limited Edition 2023',
    numberitem: '4'
  }
]
function ViewShop1({navigation}){
  const [product, setproduct] = useState(true)
  if(product == true){
  return (
    <SafeAreaView style = {{backgroundColor: CUSTOM_COLOR.White}}>
    <View style = {{width: '100%',height:180,flexDirection: 'column', alignItems: 'center',backgroundColor: CUSTOM_COLOR.LavenderBlush}}>
    <SearchInput
      placeholder = 'Search in the Shop'
      style = {{width: '80%', height: '50%', backgroundColor: CUSTOM_COLOR.White}}
    ></SearchInput>
    <Image
      style = {{width: scale(72), height:scale(72),aspectRatio: 1, borderRadius: 55, marginTop: 5}}
      source={{uri: Acount.avartar}}
      resizeMode='contain'
    ></Image>
    <Text style={{color: CUSTOM_COLOR.Black, fontSize: 20, fontWeight: 'bold', marginTop: 2}}
    >FAUGET</Text>
  </View>
  <View style = {{width: '100%', height:40, flexDirection: 'row'}}>
    <TouchableOpacity style = {{width: '50%',height:'100%',borderBottomWidth: 2, borderColor: CUSTOM_COLOR.Red,alignItems: 'center'}}>
    <Text style = {{marginTop: 5, color: CUSTOM_COLOR.DarkOrange, fontSize: 20 }}>Product</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={()=> setproduct(false)}
    style = {{width: '50%', height: '100%', alignItems: 'center'}}>
    <Text style = {{marginTop: 5, fontSize: 20}}>List Item</Text>
    </TouchableOpacity>
  </View>
    <View style = {{
                flexDirection: 'row',
                marginBottom: 10,
                justifyContent: 'space-between', 
                marginHorizontal: 10,
                marginTop: 14,
           }}>
                <View style = {{
                    elevation: 3,
                    shadowColor: CUSTOM_COLOR.Black,
                    width: 90,
                    borderRadius: 20,
                    backgroundColor: CUSTOM_COLOR.White,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: CUSTOM_COLOR.Black
                    }}>Related</Text>
                </View>

                <View style = {{
                    elevation: 3,
                    shadowColor: CUSTOM_COLOR.Black,
                    width: 90,
                    borderRadius: 20,
                    backgroundColor: CUSTOM_COLOR.White,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: CUSTOM_COLOR.Black
                    }}>Newest</Text>
                </View>

                <View style = {{
                    elevation: 3,
                    shadowColor: CUSTOM_COLOR.Black,
                    width: 90,
                    borderRadius: 20,
                    backgroundColor: CUSTOM_COLOR.White,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: CUSTOM_COLOR.Black
                    }}>Top seller</Text>
                </View>

                <View style = {{
                    elevation: 3,
                    shadowColor: CUSTOM_COLOR.Black,
                    width: 90,
                    borderRadius: 20,
                    backgroundColor: CUSTOM_COLOR.White,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: CUSTOM_COLOR.Black
                    }}>Price</Text>
                </View>

      </View>
      <View style = {{
                flexDirection: 'row',
                marginBottom: 10,
                alignItems: 'center',
                marginHorizontal: 10,
                justifyContent: 'space-evenly',
                marginTop: 3,
           }}>
              <View style = {{
                    elevation: 3,
                    shadowColor: CUSTOM_COLOR.Black,
                    width: 90,
                    borderRadius: 20,
                    backgroundColor: CUSTOM_COLOR.White,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: CUSTOM_COLOR.Black
                    }}>Rating</Text>
                </View>
                <View style = {{
                    elevation: 3,
                    shadowColor: CUSTOM_COLOR.Black,
                    width: 90,
                    borderRadius: 20,
                    backgroundColor: CUSTOM_COLOR.White,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: CUSTOM_COLOR.Black
                    }}>Discount</Text>
                </View>
      </View>
    <View>
                <FlatList
                    data={datas}
                    renderItem = {({item}) => {
                        return(
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ViewShop2')}
                                style = {{
                                flexDirection: 'row',
                                //justifyContent: 'space-around'
                            }}>
                                <Product
                                    source = {item.source}
                                    title = {item.title}
                                    price = {item.price}
                                />
                            </TouchableOpacity>
                        )
                    }}
                    numColumns = {2}
                />
    </View>
    </SafeAreaView>
    )}
    else{
      return(
        <SafeAreaView>
        <View style = {{width: '100%',height:180,flexDirection: 'column', alignItems: 'center',backgroundColor: CUSTOM_COLOR.LavenderBlush}}>
        <SearchInput
          placeholder = 'Search in the Shop'
          style = {{width: '80%', height: '50%', backgroundColor: CUSTOM_COLOR.White}}
        ></SearchInput>
        <Image
          style = {{width: scale(72), height:scale(72),aspectRatio: 1, borderRadius: 55, marginTop: 5}}
          source={{uri: Acount.avartar}}
          resizeMode='contain'
        ></Image>
        <Text style={{color: CUSTOM_COLOR.Black, fontSize: 20, fontWeight: 'bold', marginTop: 2}}
        >FAUGET</Text>
      </View>
        <View style = {{width: '100%', height:40, flexDirection: 'row'}}>
            <TouchableOpacity 
             onPress={()=> setproduct(true)}
            style = {{width: '50%',height:'100%',alignItems: 'center'}}>
            <Text style = {{marginTop: 5,  fontSize: 20 }}>Product</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style = {{width: '50%', height: '100%',borderBottomWidth: 2, borderColor: CUSTOM_COLOR.Red, alignItems: 'center'}}>
            <Text style = {{marginTop: 5,color: CUSTOM_COLOR.DarkOrange, fontSize: 20}}>List Item</Text>
            </TouchableOpacity>
       </View>
        </SafeAreaView>
      )
    }
}
export default ViewShop1