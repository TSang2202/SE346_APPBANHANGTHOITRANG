import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackTo from '../components/BackTo'
import { SearchIcon } from '../../CustomerView/assets/icons'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CUSTOM_COLOR from '../constants/colors'
import Status from '../components/Status'
import { Acount } from './OverView'
import PerSon from '../components/PerSon'
import { IM_MauAo } from '../assets/images'
import OneOrder from '../components/OneOrder'
const OrderData = [
    {
        id: '1',
        image: IM_MauAo,
        name: 'T-Shirt Back Blank - VD86547 - New Elevent',
        price: '139.999đ',
        number: '1',
        totalPrice: '150000đ',
        code: '#43275382'
    },
    {
        id: '2',
        image: IM_MauAo,
        name: 'T-Shirt Back Blank - VD86547 - New Elevent',
        price: '139.999đ',
        number: '1',
        totalPrice: '150000đ',
        code: '#43275382'
    }
]
const DataWait = []
export default function Order({navigation}) {
    const [Wait, setWait] = useState(true)
    const [Cancel, setCancel] = useState(false)
    const [Request, setRequest] = useState(false)
    const [Review, setReview] = useState(false)
    if(Wait == true){
    return (
    <SafeAreaView>
    <View style = {{width: '100%', height: 30, flexDirection: 'row', marginTop: 10}}>
        <BackTo
            //onPress = {navigation.goBack()}
            Info = 'My Order'
        ></BackTo>
    </View>
    <View style = {{width: '100%', height:50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
        <Status
            title = 'Confirm'
            Color = {CUSTOM_COLOR.DarkOrange}
            botwidth = {2}
            borderColor = {CUSTOM_COLOR.Red}
        ></Status>
        <Status
            Color = {CUSTOM_COLOR.Black}
            onPress={()=> {setCancel(true) ,setWait(false)}}
            title = 'On Wait'>
        </Status>
        <Status
            Color = {CUSTOM_COLOR.Black}
            onPress={()=> {setRequest(true) ,setWait(false)}}
            title = 'Delivering'>
        </Status>
        <Status
            Color = {CUSTOM_COLOR.Black}
            onPress={()=> {setReview(true) ,setWait(false)}}
            title = 'Delivered'>
        </Status>
    </View>
    <View style = {{width: '100%', height: 10, backgroundColor: CUSTOM_COLOR.LightGray}}></View>
    <View>
        <PerSon
            avartar = {Acount.avartar}
            name = {Acount.name}
            id = {Acount.id}
        ></PerSon>
        <FlatList
            data={OrderData}
            renderItem={({item}) => {
                return(
                    <OneOrder
                        source = {item.image}
                        title = {item.name}
                        price = {item.price}
                        number = {item.number}
                        totalPrice = {item.totalPrice}
                        Code = {item.code}
                        onPress = {()=>{navigation.navigate('DeTailsDelivery')}}
                        PressConfirm = {()=>{}}
                    ></OneOrder>
                )
            }}
        ></FlatList>
    </View>
    </SafeAreaView>
     )}
     if(Cancel == true){
      return (
        <SafeAreaView>
        <View style = {{width: '100%', height: 30, flexDirection: 'row', marginTop: 10}}>
            <BackTo
                //onPress = {navigation.goBack()}
                Info = 'My Order'
            ></BackTo>
        </View>
        <View style = {{width: '100%', height:50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
            <Status
                title = 'Confirm'
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setWait(true) ,setCancel(false)}}
            ></Status>
            <Status
                botwidth = {2}
                borderColor = {CUSTOM_COLOR.Red}
                Color = {CUSTOM_COLOR.DarkOrange}
                title = 'Wait'>
            </Status>
            <Status
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setRequest(true) ,setCancel(false)}}
                title = 'Delivering'>
            </Status>
            <Status
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setReview(true) ,setCancel(false)}}
                title = 'Delivered'>
            </Status>
        </View>
        <View style = {{width: '100%', height: 10, backgroundColor: CUSTOM_COLOR.LightGray}}></View>
        </SafeAreaView>
      )
     }
     if(Request == true){
      return (
        <SafeAreaView>
        <View style = {{width: '100%', height: 30, flexDirection: 'row', marginTop: 10}}>
            <BackTo
                //onPress = {navigation.goBack()}
                Info = 'My Order'
            ></BackTo>
        </View>
        <View style = {{width: '100%', height:50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
            <Status
                title = 'Confirm'
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setWait(true) ,setRequest(false)}}
            ></Status>
            <Status
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setCancel(true) ,setRequest(false)}}
                title = 'On Wait'>
            </Status>
            <Status
                botwidth = {2}
                borderColor = {CUSTOM_COLOR.Red}
                Color = {CUSTOM_COLOR.DarkOrange}
                title = 'Delivering'>
            </Status>
            <Status
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setReview(true) ,setRequest(false)}}
                title = 'Delivered'>
            </Status>
        </View>
        <View style = {{width: '100%', height: 10, backgroundColor: CUSTOM_COLOR.LightGray}}></View>
        </SafeAreaView>
      )
     }
     if(Review == true){
      return (
        <SafeAreaView>
        <View style = {{width: '100%', height: 30, flexDirection: 'row', marginTop: 10}}>
            <BackTo
                //onPress = {navigation.goBack()}
                Info = 'My Order'
            ></BackTo>
        </View>
        <View style = {{width: '100%', height:50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
            <Status
                title = 'Confirm'
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setWait(true) ,setReview(false)}}
            ></Status>
            <Status
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setCancel(true) ,setReview(false)}}
                title = 'On Wait'>
            </Status>
            <Status
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setRequest(true) ,setReview(false)}}
                title = 'Delivering'>
            </Status>
            <Status
                botwidth = {2}
                borderColor = {CUSTOM_COLOR.Red}
                Color = {CUSTOM_COLOR.DarkOrange}
                title = 'Delivered'>
            </Status>
        </View>
        <View style = {{width: '100%', height: 10, backgroundColor: CUSTOM_COLOR.LightGray}}></View>
        </SafeAreaView>
      )
     }
}

const styles = StyleSheet.create({})