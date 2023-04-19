import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from "react-native";
import { IC_Heart, IC_Heart3X } from "../assets/icons";
import Button from "../components/Button";
import CUSTOM_COLOR from "../constants/colors";

function FollowScreen() {

 

    return (
      <View style = {styles.container}>

          <Image source={IC_Heart3X}
            style ={{
              width: 100,
              height: 100,
            }}
          />

          <Text style = {{
            fontSize: 17,
            marginVertical: 10
          }}>Your wishist is empty</Text>
          <Button
            color = {CUSTOM_COLOR.FlushOrange}
            title = 'SHOP NOW'
          />
      </View>
      
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})
  
export default FollowScreen