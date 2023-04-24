import React, {useEffect} from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { IC_Attachment, IC_Back, IC_Camera, IC_Emo } from "../assets/icons";
import { IM_AnhGiay2 } from "../assets/images";
import CUSTOM_COLOR from "../constants/colors";

function ChatScreen({navigation}) {
    
    
 

    return (
      <View style = {styles.container}>
            <View style = {{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: CUSTOM_COLOR.White,
                paddingVertical: '1%'
            }}>
                 <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image
                        source={IC_Back}
                        style = {{
                            width: 10, 
                            height: 20,
                            marginHorizontal: 20,
                            marginVertical: 15
                        }}
                        resizeMode = 'stretch'
                    />  
                </TouchableOpacity>

                <Image 
                    style ={{
                        width: 45,
                        height: 45,
                        borderRadius: 30,

                    }}

                    source = {IM_AnhGiay2}
                />

                <Text style ={{
                    marginHorizontal: '5%',
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>Thạch Sang</Text>

            </View>
        
            <ScrollView style ={{
                backgroundColor: CUSTOM_COLOR.Gallery
            }}>

            </ScrollView>

            <View style ={{
                flexDirection: 'row',
                alignItems: 'center',
                
                backgroundColor: CUSTOM_COLOR.Gallery

            }}>

                <View style = {{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: CUSTOM_COLOR.White,
                    paddingHorizontal: '2%',
                    borderRadius: 25,
                    marginHorizontal: '3%',
                    marginVertical: '2%',
                    width: '80%'
                }}>

                    <Image
                        style = {{
                            width: 20,
                            height: 20,
                            marginHorizontal: '2%'
                        }}
                        source = {IC_Emo}
                    />

                    <TextInput
                        placeholder= 'Hello, I have a problem'
                        style ={{
                            width: '70%'
                        }}
                    />

                    <Image
                        style = {{
                            width: 10,
                            height: 20,
                            marginHorizontal: '2%'
                        }}
                        resizeMode = 'stretch'
                        source = {IC_Attachment}
                    />
                    <Image
                        style = {{
                            width: 22,
                            height: 20,
                            marginLeft: '2%'
                        }}
                        source = {IC_Camera}
                    />
                </View>

                <View style ={{
                    height: 45,
                    width: 45,
                    borderRadius: 30,
                    backgroundColor: CUSTOM_COLOR.ChathamsBlue
                }}>
                    
                </View>
            </View>

           
          
      </View>
      
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White
    
  },
  
  

})
  
export default ChatScreen