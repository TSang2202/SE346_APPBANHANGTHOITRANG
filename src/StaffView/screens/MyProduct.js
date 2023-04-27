import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackTo from '../components/BackTo'
import { SearchIcon } from '../../CustomerView/assets/icons'
import { ScrollView } from 'react-native-gesture-handler'
import CUSTOM_COLOR from '../constants/colors'
import ButtonDetail from '../components/ButtonDetail'
import Status from '../components/Status'
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
    <ScrollView style = {{flexDirection: 'row', width: '100%', marginTop: 15}}> 
        <View>
        </View>
    <View style = {{justifyContent: 'center',flexDirection: 'row', width: '100%'}}>
        <ButtonDetail
            color = {CUSTOM_COLOR.Carnation}
            title = 'ADD A NEW PRODUCT'
            //onPress = {navigation.navigate('AddProduct')}
        ></ButtonDetail>
    </View>
    </ScrollView>
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