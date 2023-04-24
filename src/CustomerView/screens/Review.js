import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import { IC_Back, IC_ShoppingCart } from "../assets/icons";
import { IM_AnhGiay1, IM_AnhGiay2, IM_AnhGiay3, IM_AnhGiay4 } from "../assets/images";
import Button from "../components/Button";
import ProductCheckOut from "../components/ProductCheckOut";
import ProductView from "../components/ProductView";
import SearchInput from "../components/SearchInput";
import CUSTOM_COLOR from "../constants/colors";


function Review({navigation}) {
    return(
        <View style = {{
            flex: 1
        }}>
            <View style ={{
                flexDirection: 'row', 
                alignItems: 'center'
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

        </View>
    )
}

export default Review