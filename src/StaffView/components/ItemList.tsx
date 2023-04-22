import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import CUSTOM_COLOR from '../constants/colors'
const ItemList = (props: any) => {
  return (
    <View style = {{marginTop: 9,flexDirection: 'row', width: '100%',height: 70, elevation: 3,
    shadowColor: CUSTOM_COLOR.Black,backgroundColor: CUSTOM_COLOR.White}}>
      <Image
        resizeMode='contain'
        source={props.source} 
        style = {{height: 65, width: 65, marginLeft: 20}}
      ></Image>
        <View style = {{flexDirection: 'column', marginTop: 10, marginLeft: 30}}>
            <Text style = {{color: CUSTOM_COLOR.Black}}>{props.namelist}</Text>
            <Text style = {{marginTop: 5, fontStyle: 'italic'}}>{props.numberitem} Product</Text>
        </View>
        <Text style = {{marginTop: 17,marginLeft: 130, fontWeight: 'bold'}}>></Text>
    </View>
  )
}

export default ItemList

const styles = StyleSheet.create({})