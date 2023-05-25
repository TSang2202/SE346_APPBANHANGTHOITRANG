import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
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

import { Firestore, Storage } from '../../../Firebase/firebase'
import { async } from '@firebase/util'
import { collection, doc, getDocs, updateDoc, where } from 'firebase/firestore'
import { query } from 'firebase/database'
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
    const [DonHang, setDonHang] = useState([])

    const [dataConfirm, setdataConfirm] = useState([])
    const [dataWait, setdataWait] = useState([])
    const [dataDelivering, setdataDelivering] = useState([])
    const [dataDelivered, setdataDelivered] = useState([])
    const [Wait, setWait] = useState(true)
    const [Cancel, setCancel] = useState(false)
    const [Request, setRequest] = useState(false)
    const [Review, setReview] = useState(false)

    const ConfirmOrder = (item) => {
        const conf = doc(Firestore, "DONHANG", item.MaDH)

        updateDoc(conf, {
            TrangThai: "Wait"
        })
        getDataWait()
        getDataConfirm(

        )
    }
    const ConfirmWait = (item) => {
        const conf = doc(Firestore, "DONHANG", item.MaDH)

        updateDoc(conf, {
            TrangThai: "Delivering"
        })
        getDataDelivering()
        getDataWait()
    }
    const ConfirmDelivered = (item) => {
        const conf = doc(Firestore, "DONHANG", item.MaDH)

        updateDoc(conf, {
            TrangThai: "Delivered"
        })
        getDataDelivering()
        getDataDelivered()
    }
    const getDataConfirm = async() => {
        const q = query(collection(Firestore, "DONHANG"), where("TrangThai", "==", "Confirm"))
        const querySnapshot = await getDocs(q)
        const data = []
        querySnapshot.forEach((doc) => {
            data.push({...doc.data()})
        })
        setdataConfirm(data)

    }
    const getDataWait = async () => {
        const q = query(collection(Firestore, "DONHANG"), where("TrangThai", "==", "Wait"))
        const querySnapshot = await getDocs(q)
        const data = []
        querySnapshot.forEach((doc) => {
            data.push({...doc.data()})
        })
        setdataWait(data)

    }
    const getDataDelivering = async() => {
        const q = query(collection(Firestore, "DONHANG"), where("TrangThai", "==", "Delivering"))
        const querySnapshot = await getDocs(q)
        const data = []
        querySnapshot.forEach((doc) => {
            data.push({...doc.data()})
        })
        setdataDelivering(data)

    }
    const getDataDelivered = async() => {
        const q = query(collection(Firestore, "DONHANG"), where("TrangThai", "==", "Delivered"))
        const querySnapshot = await getDocs(q)
        const data = []
        querySnapshot.forEach((doc) => {
            data.push({...doc.data()})
        })
        setdataDelivered(data)

    }
    
    useEffect(() => {
        getDataConfirm()
        getDataWait()
        getDataDelivered()
        getDataDelivering()

    }, [])

    if(Wait == true){
    return (
        <SafeAreaView style = {{backgroundColor: CUSTOM_COLOR.White}}>
            <View style = {{width: '100%', height: 30, flexDirection: 'row', marginTop:5}}>
                <BackTo
                    onPress = {()=>navigation.goBack()}
                    Info = 'My Order'
                ></BackTo>
            </View>
            <View style = {{width: '100%', height:50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
                <Status
                    title = 'Confirm'
                    Color = {CUSTOM_COLOR.DarkOrange}
                    soluong = {dataConfirm.length}
                    botwidth = {2}
                    borderColor = {CUSTOM_COLOR.Red}
                ></Status>
                <Status
                    Color = {CUSTOM_COLOR.Black}
                    onPress={()=> {setCancel(true) ,setWait(false)}}
                    soluong = {dataWait.length}
                    title = 'On Wait'>
                </Status>
                <Status
                    Color = {CUSTOM_COLOR.Black}
                    onPress={()=> {setRequest(true) ,setWait(false)}}
                    soluong = {dataDelivering.length}
                    title = 'Delivering'>
                </Status>
                <Status
                    Color = {CUSTOM_COLOR.Black}
                    onPress={()=> {setReview(true) ,setWait(false)}}
                    soluong = {dataDelivered.length}
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
                        data={dataConfirm}
                        renderItem={({item}) => {
                            return(
                                <OneOrder
                                    source = {item.image}
                                    title = {item.name}
                                    price = {item.price}
                                    number = {item.number}
                                    totalPrice = {item.totalPrice}
                                    Code = {item.code}
                                    onPress = {()=>{navigation.navigate('DeTailsDelivery', {item})}}
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
        <SafeAreaView style = {{backgroundColor: CUSTOM_COLOR.White}}>
        <View style = {{width: '100%', height: 30, flexDirection: 'row', marginTop: 5}}>
            <BackTo
                onPress = {()=> navigation.goBack()}
                Info = 'My Order'
            ></BackTo>
        </View>
        <View style = {{width: '100%', height:50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
            <Status
                title = 'Confirm'
                Color = {CUSTOM_COLOR.Black}
                soluong = {dataConfirm.length}
                onPress={()=> {setWait(true) ,setCancel(false)}}
            ></Status>
            <Status
                botwidth = {2}
                borderColor = {CUSTOM_COLOR.Red}
                soluong = {dataWait.length}
                Color = {CUSTOM_COLOR.DarkOrange}
                title = 'Wait'>
            </Status>
            <Status
                Color = {CUSTOM_COLOR.Black}
                soluong = {dataDelivering.length}
                onPress={()=> {setRequest(true) ,setCancel(false)}}
                title = 'Delivering'>
            </Status>
            <Status
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setReview(true) ,setCancel(false)}}
                soluong = {dataDelivered.length}
                title = 'Delivered'>
            </Status>
        </View>
        <View style = {{width: '100%', height: 10, backgroundColor: CUSTOM_COLOR.LightGray}}></View>
        </SafeAreaView>
      )
     }
     if(Request == true){
      return (
        <SafeAreaView style = {{backgroundColor: CUSTOM_COLOR.White}}>
        <View style = {{width: '100%', height: 30, flexDirection: 'row', marginTop: 5}}>
            <BackTo
                onPress = {() => navigation.goBack()}
                Info = 'My Order'
            ></BackTo>
        </View>
        <View style = {{width: '100%', height:50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
            <Status
                title = 'Confirm'
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setWait(true) ,setRequest(false)}}
                soluong = {dataConfirm.length}
            ></Status>
            <Status
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setCancel(true) ,setRequest(false)}}
                soluong = {dataWait.length}
                title = 'On Wait'>
            </Status>
            <Status
                botwidth = {2}
                borderColor = {CUSTOM_COLOR.Red}
                soluong = {dataDelivering.length}
                Color = {CUSTOM_COLOR.DarkOrange}
                title = 'Delivering'>
            </Status>
            <Status
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setReview(true) ,setRequest(false)}}
                soluong = {dataDelivered.length}
                title = 'Delivered'>
            </Status>
        </View>
        <View style = {{width: '100%', height: 10, backgroundColor: CUSTOM_COLOR.LightGray}}></View>
        </SafeAreaView>
      )
     }
     if(Review == true){
      return (
        <SafeAreaView style = {{backgroundColor: CUSTOM_COLOR.White}}>
        <View style = {{width: '100%', height: 30, flexDirection: 'row', marginTop: 5}}>
            <BackTo
                onPress = {() => navigation.goBack()}
                Info = 'My Order'
            ></BackTo>
        </View>
        <View style = {{width: '100%', height:50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
            <Status
                title = 'Confirm'
                Color = {CUSTOM_COLOR.Black}
                soluong = {dataConfirm.length}
                onPress={()=> {setWait(true) ,setReview(false)}}
            ></Status>
            <Status
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setCancel(true) ,setReview(false)}}
                soluong = {dataWait.length}
                title = 'On Wait'>
            </Status>
            <Status
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setRequest(true) ,setReview(false)}}
                soluong = {dataDelivering.length}
                title = 'Delivering'>
            </Status>
            <Status
                botwidth = {2}
                borderColor = {CUSTOM_COLOR.Red}
                soluong = {dataDelivered.length}
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