import React, {useEffect} from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { IC_Back } from "../assets/icons";
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