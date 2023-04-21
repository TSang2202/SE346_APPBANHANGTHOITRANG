import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from "react-native";
import { IC_Back, IC_Location, IC_MyLocation } from "../assets/icons";
import Button from "../components/Button";
import InputData from "../components/InputData";
import CUSTOM_COLOR from "../constants/colors";

function DeliveryAddressScreen({navigation}) {

 

    return (
      <View style = {styles.container}>

            <View style ={{
                flexDirection: 'row', 
                alignItems: 'center', 
                backgroundColor: CUSTOM_COLOR.White,
                height: 40
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image
                        source={IC_Back}
                        style = {{
                            width: '20%', 
                            height: '40%',
                            marginHorizontal: 20,
                            marginVertical: '20%'
                        }}
                        resizeMode = 'stretch'
                    />  
                </TouchableOpacity>
                    
              
                <Text style ={{
                    fontSize: 20,
                    color: CUSTOM_COLOR.Black, 
                    fontWeight: 'bold'
                }}>Delivery Address</Text>
            </View>
         
            <View style = {{
                alignItems: 'center'
            }}>
                <InputData
                    title = 'Name'
                    width = '85%'
                    placeholder = 'Input your name'
                />

                <InputData
                    title = 'Address'
                    width = '85%'
                    placeholder = 'Input your address'
                />
            </View>

            <View style ={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
            }}>
                <InputData
                    
                    title = 'District'
                    width = '40%'
                    placeholder = 'Binh Thanh'
                />
                <InputData
                    
                    title = 'City'
                    width = '40%'
                    placeholder = 'Ho Chi Minh City'
                />
            </View>
               
            <View style ={{
                alignItems: 'center'
            }}>
                <InputData
                    title = 'Phone number'
                    width = '85%'
                    placeholder = '0334971822'
                />
            </View>

            <View style ={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 10
            }}>
                <View style ={{
                    flexDirection: 'row',
                    backgroundColor: CUSTOM_COLOR.Whisper,
                    marginVertical: 10, 
                    width: '85%',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    borderRadius: 15,
                    alignItems: 'center'
                }}>
            
                    <Image style ={{
                        width: 20,
                        height: 20
                    }}
                    source = {IC_MyLocation}/>

                    <Text style ={{
                        marginHorizontal: 10,
                        fontSize: 17
                    }}>Use my location</Text>
                </View>

            </View>

            <View style ={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 20
            }}>
                <Button
                    title = 'SAVE'
                    color = {CUSTOM_COLOR.FlushOrange}
                />
            </View>
            
      </View>
      
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White
  }

})
  
export default DeliveryAddressScreen