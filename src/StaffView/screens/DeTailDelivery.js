import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackTo from '../components/BackTo'
import CUSTOM_COLOR from '../constants/colors'
import { Address, Delivery, Payment } from '../assets/icons'
import { ScrollView } from 'react-native-gesture-handler'
import { Acount } from './OverView'
import PerSon from '../components/PerSon'
import { IM_MauAo } from '../assets/images'
import ButtonDetail from '../components/ButtonDetail'
const DataDelivery = {
  Name: 'Trung Tinh',
  Phone: '0704408389',
  Address: '140/10 Dinh Bo Linh, Phuong 26, Binh Thanh, Ho Chi Minh',
  CTY: 'Fast Delivery VietNam',
  Code: '#JHGUJHCFJG'
}
export default function DeTailDelivery() {
  return (
    <ScrollView>
      <BackTo
        style = {{marginTop: 20}}
        Info = 'Order/DeTails'
        onPress = {()=> {}}
      ></BackTo>
    <View style = {{width: '100%', height: 10,marginTop: 10, backgroundColor: CUSTOM_COLOR.LightGray}}></View>
    <View style = {{width: '100%', flexDirection: 'column', marginTop: 10}}>
    <View style = {{width: '100%', flexDirection: 'row', height: 30, justifyContent: 'space-between'}}>
            <View style = {{flexDirection: 'row'}}>
            <Image
              source={Address}
              style = {{width: 30, height: 30, marginLeft: 18}}
              resizeMode='contain'
            >
            </Image>
            <Text style = {{color: CUSTOM_COLOR.Black, marginLeft: 5,fontSize: 20}}>Address</Text>
            </View>
            <TouchableOpacity>
              <Text style = {{color: CUSTOM_COLOR.DarkBlue,marginRight: 20,fontSize: 20, fontWeight: 'bold' }}>COPY</Text>
            </TouchableOpacity>
        </View>
        <View style = {{marginLeft: 50, marginTop: 5, marginRight: 20}}>
        <Text>{DataDelivery.Name}</Text>
        <Text>{DataDelivery.Phone}</Text>
        <Text>{DataDelivery.Address}</Text>
        </View>
    </View>
    <View style = {{width: '100%', height: 10,marginTop: 10, backgroundColor: CUSTOM_COLOR.LightGray}}></View>
    <View style = {{width: '100%', flexDirection: 'column', marginTop: 10}}>
        <View style = {{width: '100%', flexDirection: 'row', height: 30, justifyContent: 'space-between'}}>
            <View style = {{flexDirection: 'row'}}>
            <Image
              source={Delivery}
              style = {{width: 30, height: 30, marginLeft: 18}}
              resizeMode='contain'
            >
            </Image>
            <Text style = {{color: CUSTOM_COLOR.Black, marginLeft: 5,fontSize: 20}}>Delivery</Text>
            </View>
            <TouchableOpacity>
              <Text style = {{color: CUSTOM_COLOR.DarkBlue,marginRight: 20,fontSize: 20, fontWeight: 'bold' }}>SEE</Text>
            </TouchableOpacity>
        </View>
        <View style = {{marginLeft: 50, marginTop: 5, marginRight: 20}}>
        <Text>{DataDelivery.CTY}</Text>
        <Text>Delivery Code: {DataDelivery.Code}</Text>
        </View>
    </View>
    <View style = {{width: '100%', height: 10,marginTop: 10, backgroundColor: CUSTOM_COLOR.LightGray}}></View>
    <View style = {{width: '100%', flexDirection: 'column', marginTop: 10}}>
        <View style = {{width: '100%', flexDirection: 'row', height: 30, justifyContent: 'space-between'}}>
            <View style = {{flexDirection: 'row'}}>
            <Image
              source={Payment}
              style = {{width: 30, height: 30, marginLeft: 18}}
              resizeMode='contain'
            >
            </Image>
            <Text style = {{color: CUSTOM_COLOR.Black, marginLeft: 5,fontSize: 20}}>Payment</Text>
            </View>
        </View>
        <View style = {{marginLeft: 50, marginTop: 5, marginRight: 20}}>
        <Text>Total</Text>
        <Text>Delivery fee</Text>
        <Text>Discount</Text>
        </View>
    </View>
    <View style = {{width: '100%', height: 10,marginTop: 20, backgroundColor: CUSTOM_COLOR.LightGray}}></View>
    <View>
      <PerSon
            avartar = {Acount.avartar}
            name = {Acount.name}
            id = {Acount.id}
        ></PerSon>
        <View style = {{width: '100%', borderBottomWidth: 0.5,height: 100, marginTop: 10, flexDirection: 'row'}}>
        <Image source={IM_MauAo}
          style = {{width: 80, height: 80, marginLeft: 35}}
          resizeMode='cover'
        ></Image>
        <View style = {{ flexDirection: 'column', marginLeft: 10, width: 250}}>
          <Text>T-Shirt Back Blank - VD86547 - New Elevent</Text>
          <Text style = {{fontWeight: 'bold'}}>139999đ</Text>
          <Text>x{1}</Text>
         </View>
          </View>
          <View style = {{width: '100%', height: 50, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
             <ButtonDetail
              title = 'Buyer Contact'
              color = {CUSTOM_COLOR.DarkBlue}
              onPress={()=>{}}
              style = {styles.button}
            ></ButtonDetail>
          <ButtonDetail
              title = 'Add Note'
              color = {CUSTOM_COLOR.DarkBlue}
              onPress={()=>{}}
              style = {styles.button}
           ></ButtonDetail>
          </View>
          <View style = {{width: '100%', height: 50, flexDirection: 'row'}}>
                <TouchableOpacity
                    onPress={()=>{}}
                    style = {{width: '100%', height: '100%',justifyContent: 'center',alignItems: 'center', backgroundColor: CUSTOM_COLOR.DarkOrange}}
                >
                    <Text style = {{color: CUSTOM_COLOR.White, fontWeight: 'bold', fontSize: 20}}>Confirm</Text>
                </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button:{
    width: 90,
    height: 40
  }
})