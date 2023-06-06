import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import { IC_Back, IC_ShoppingCart } from "../assets/icons";
import { IM_AnhGiay1, IM_AnhGiay2, IM_AnhGiay3, IM_AnhGiay4 } from "../assets/images";
import Button from "../components/Button";
import ProductCheckOut from "../components/ProductCheckOut";
import ProductView from "../components/ProductView";
import SearchInput from "../components/SearchBar";
import CUSTOM_COLOR from "../constants/colors";

const data = {
    id: '1',
        source: IM_AnhGiay1,
        title: 'Asics Running Shoes',
        type: "Men's Footwear-Sports Shoes",
        price: '399999',
        number: 1
}

const datas = [
    {
        id: '1',
        source: IM_AnhGiay1,
        title: 'Asics Running Shoes',
        type: "Men's Footwear-Sports Shoes",
        price: '399999',
        number: 1
    },
    {
        id: '2',
        source: IM_AnhGiay1,
        title: 'Asics Running Shoes',
        type: "Men's Footwear-Sports Shoes",
        price: '399999',
        number: 1
    },
    {
        id: '3',
        source: IM_AnhGiay1,
        title: 'Asics Running Shoes',
        type: "Men's Footwear-Sports Shoes",
        price: '399999',
        number: 1
    },
    {
        id: '4',
        source: IM_AnhGiay1,
        title: 'Asics Running Shoes',
        type: "Men's Footwear-Sports Shoes",
        price: '399999',
        number: 1
    },
]


function ShoppingCartScreen({navigation}) {
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
                }}>Shopping Cart</Text>
            </View>

        

            <FlatList
                style ={{
                    height: 470,
                    flexGrow: 0
                }}
                data={datas}
                renderItem = {({item}) =>{
                    return(
                        <View style ={{
                            marginVertical: 10
                        }}>
                            <ProductCheckOut
                                source = {item.source}
                                title = {item.title}
                                type = {item.type}
                                number = {item.number}
                                price = {item.price}
                            />

                        </View>

                    )
                }}
            />
          
           <View style ={{
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 2,
                justifyContent: 'space-between',
                marginHorizontal: 10
           }}>
                <View style ={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style ={{
                        width: 23,
                        height: 23,
                        borderWidth: 1,
                        borderRadius: 20, 
                        marginRight: 20
                    }}/>

                    <Text style ={{
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>Choose all</Text>
                </View>
                

                <Text style = {{
                    marginHorizontal: 20,
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>Total</Text>
           </View>

            <View style ={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginHorizontal: 20,
               
            }}>
                <Text style ={{
                     fontSize: 17
                }}>1700000 đ</Text>
            </View>
             
             <View style = {{
                alignItems: 'center',
                marginVertical: '5%'
             }}>
                <Button
                    title = 'CHECK OUT'
                    color = {CUSTOM_COLOR.FlushOrange}
                    onPress = {() => navigation.navigate('Checkout')}
                />
             </View>

        </View>

    )
}

export default ShoppingCartScreen