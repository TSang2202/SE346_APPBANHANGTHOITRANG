import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IC_Back, IC_Review, } from "../assets/icons";
import StarRating from "../components/StarRating";


import CUSTOM_COLOR from "../constants/colors";


function ReviewScreen({navigation}) {
    return(
        <View style = {{
            flex: 1,
            backgroundColor: CUSTOM_COLOR.White
        }}>
            <View style ={{
                flexDirection: 'row', 
                alignItems: 'center',
            
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
                    
              
                <Text style ={{
                    fontSize: 20,
                    color: CUSTOM_COLOR.Black, 
                    fontWeight: 'bold'
                }}>Review</Text>
            </View>

            <View style = {{
                flexDirection: 'row',
                marginHorizontal: '5%',
                justifyContent: 'space-between'
            }}>
                <View>
                    <Text style ={{
                        fontSize: 17,
                        color: CUSTOM_COLOR.Black
                    }}>23 Reviews</Text>
                    <View style = {{
                        flexDirection: 'row'
                    }}>
                        <Text style = {{
                            fontSize: 17,
                            color: CUSTOM_COLOR.Black,
                            marginRight: '5%'
                        }}>4</Text>
                        <StarRating
                            nums = {5}
                            fill = {4}
                        />
                    </View>
                </View>

                
                <View>
                    <TouchableOpacity style ={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: CUSTOM_COLOR.FlushOrange,
                        borderRadius: 20,
                        paddingHorizontal: 15,
                        paddingVertical: 8
                    }}>
                        <Image source={IC_Review}/>
                        <Text style ={{
                            fontSize: 15,
                            marginLeft: 10,
                            fontWeight: 'bold',
                            color: CUSTOM_COLOR.White
                        }}>Add Review</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <ScrollView>

                
            </ScrollView>

        </View>
    )
}

export default ReviewScreen