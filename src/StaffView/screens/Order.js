import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackTo from '../components/BackTo'
import { SearchIcon } from '../../CustomerView/assets/icons'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CUSTOM_COLOR from '../constants/colors'
import Status from '../components/Status'
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
        </SafeAreaView>
      )
     }
}

const styles = StyleSheet.create({})