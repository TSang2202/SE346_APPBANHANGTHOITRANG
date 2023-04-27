import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackTo from '../components/BackTo'
import { SearchIcon } from '../../CustomerView/assets/icons'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import CUSTOM_COLOR from '../constants/colors'
import ButtonDetail from '../components/ButtonDetail'
import Status from '../components/Status'
import { IM_MauAo } from '../assets/images'
import MyProduct1 from '../components/MyProduct'
const Data = [
    {
    id: '1',
    name: 'T-Shirt Back Blank - VD86547 - New Elevent',
    price: '139.999đ',
    ware: '100',
    sold: '100',
    love: '200',
    view: '1000',
    pic : IM_MauAo,
    },
    {
        id: '2',
        name: 'T-Shirt Back Blank - VD86547 - New Elevent',
        price: '139.999đ',
        ware: '100',
        sold: '100',
        love: '200',
        view: '1000',
        pic : IM_MauAo,
        },

]
export default function MyProduct({navigation}) {
    const [inventory, setinventory] = useState(true)
    const [Out, setOut] = useState(false)
    const [Wait, setWait] = useState(false)

    if(inventory == true){
    return (
    <SafeAreaView>
    <View style = {{width: '100%', height: 30, flexDirection: 'row', marginTop: 15}}>
        <BackTo
            //onPress = {navigation.goBack()}
            Info = 'My Product'
        ></BackTo>
        <TouchableOpacity 
            //onPress={navigation.navigate('Search')}
        >
        <Image
            source={SearchIcon}
            style={{width: 20, height: 20, marginLeft: '70%', marginTop: 10}}
            resizeMode='contain'
        ></Image>
        </TouchableOpacity>
    </View>
    <View style = {{width: '100%', height:50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
        <Status
            title = 'My invantory'
            Color = {CUSTOM_COLOR.DarkOrange}
            botwidth = {2}
            borderColor = {CUSTOM_COLOR.Red}
        ></Status>
        <Status
            Color = {CUSTOM_COLOR.Black}
            onPress={()=> {setOut(true) ,setinventory(false)}}
            title = 'Out of Stock'>
        </Status>
        <Status
            Color = {CUSTOM_COLOR.Black}
            onPress={()=> {setWait(true) ,setinventory(false)}}
            title = 'On Wait'>
        </Status>
    </View>
    <View style = {{flexDirection: 'row', width: '100%', height: 450, marginTop: 10}}> 
        <View>
            <FlatList
                horizontal='true'
                data={Data}
                renderItem={({item}) =>{
                    return(
                        <MyProduct1
                            source = {item.pic}
                            title = {item.name}
                            price = {item.price}
                            soluongtonkho = {item.ware}
                            soluonglove = {item.love}
                            soluongview = {item.view}
                            soluongban = {item.sold}
                        ></MyProduct1>
                    )
                }
            }
            ></FlatList>
        </View>
    </View>
    <View style = {{width: '100%', marginTop: 15 }}>
        <View style = {{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <ButtonDetail
            style = {{width: 250}}
            color = {CUSTOM_COLOR.DarkOrange}
            title = 'ADD A NEW PRODUCT'
            //onPress = {navigation.navigate('AddProduct')}
        ></ButtonDetail>
        </View>
    </View>
    </SafeAreaView>
     )}
     if(Out == true){
        return(
        <SafeAreaView>
        <View style = {{width: '100%', height: 30, flexDirection: 'row', marginTop: 15}}>
        <BackTo
            //onPress = {navigation.goBack()}
            Info = 'My Product'
        ></BackTo>
        <TouchableOpacity 
            //onPress={navigation.navigate('Search')}
        >
        <Image
            source={SearchIcon}
            style={{width: 20, height: 20, marginLeft: '70%', marginTop: 10}}
            resizeMode='contain'
        ></Image>
        </TouchableOpacity>
        </View>
        <View style = {{width: '100%', height:50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
        <Status
            title = 'My invantory'
            Color = {CUSTOM_COLOR.Black}
            onPress={()=> {setOut(false) ,setinventory(true)}}
        ></Status>
        <Status
            botwidth = {2}
            borderColor = {CUSTOM_COLOR.Red}
            Color = {CUSTOM_COLOR.DarkOrange}
            title = 'Out of Stock'>
        </Status>
        <Status
            Color = {CUSTOM_COLOR.Black}
            onPress={()=> {setWait(true) ,setOut(false)}}
            title = 'On Wait'>
        </Status>
        </View>
        <ScrollView style = {{flexDirection: 'row', width: '100%', marginTop: 15}}> 
        <View>
        </View>
        </ScrollView>
        </SafeAreaView>
        )
     }
     if(Wait == true){
        return(
            <SafeAreaView>
            <View style = {{width: '100%', height: 30, flexDirection: 'row', marginTop: 15}}>
            <BackTo
                //onPress = {navigation.goBack()}
                Info = 'My Product'
            ></BackTo>
            <TouchableOpacity 
                //onPress={navigation.navigate('Search')}
            >
            <Image
                source={SearchIcon}
                style={{width: 20, height: 20, marginLeft: '70%', marginTop: 10}}
                resizeMode='contain'
            ></Image>
            </TouchableOpacity>
            </View>
            <View style = {{width: '100%', height:50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
            <Status
                title = 'My invantory'
                Color = {CUSTOM_COLOR.Black}
                onPress={()=> {setWait(false) ,setinventory(true)}}
            ></Status>
            <Status
                onPress={()=> {setWait(false) ,setOut(true)}}
                Color = {CUSTOM_COLOR.Black}
                title = 'Out of Stock'>
            </Status>
            <Status
                botwidth = {2}
                borderColor = {CUSTOM_COLOR.Red}
                Color = {CUSTOM_COLOR.DarkOrange}
                title = 'On Wait'>
            </Status>
            </View>
            <ScrollView style = {{flexDirection: 'row', width: '100%', marginTop: 15}}> 
            <View>
            </View>
            </ScrollView>
            </SafeAreaView>
        )
     }
}

const styles = StyleSheet.create({})