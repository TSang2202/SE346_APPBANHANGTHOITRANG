import React from "react";
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import CUSTOM_COLOR from "../constants/colors";


const Button = (props: any) =>{

  return(
    <TouchableOpacity style ={{
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 20,
        backgroundColor: props.color,
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginHorizontal: 10,
        width: 150,
        ...props.style
        
    }}
        onPress = {props.onPress}
    >

        <Text style = {{
            color: CUSTOM_COLOR.White,
            fontWeight: 'bold'
        }}>{props.title}</Text>
       
    </TouchableOpacity>
    
  )
   
};

export default Button