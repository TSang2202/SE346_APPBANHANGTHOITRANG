import React from "react";
import { FlatList, Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { IC_Back, IC_ShoppingCart } from "../assets/icons";
import { IM_AnhGiay1, IM_AnhGiay2, IM_AnhGiay3, IM_AnhGiay4 } from "../assets/images";
import ProductView from "../components/ProductView";
import CUSTOM_COLOR from "../constants/colors";
const datas = [
    {
        id: '1',
        source: IM_AnhGiay1,
        title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
        price: 399999
    },
    {
        id: '2',
        source: IM_AnhGiay2,
        title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
        price: 399999
    },
    {
        id: '3',
        source: IM_AnhGiay3,
        title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
        price: 399999
    },
    {
        id: '4',
        source: IM_AnhGiay4,
        title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
        price: 399999
    },
    {
        id: '5',
        source: IM_AnhGiay3,
        title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
        price: 399999
    },
    {
        id: '6',
        source: IM_AnhGiay4,
        title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
        price: 399999
    }
]


function SearchingScreen({navigation}) {
    return(
        <View style = {{
            flex: 1
        }}>
            <View style ={{
                flexDirection: 'row'
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image
                        source={IC_Back}
                        style = {{
                            width: 10, 
                            height: 20,
                            margin: 20,

                        }}
                        resizeMode = 'stretch'
                    />  
                </TouchableOpacity>

                <View style = {{backgroundColor: CUSTOM_COLOR.Mercury, 
                alignItems: 'center',
                justifyContent: 'center', 
                margin: 10, 
                padding: 8,
                borderRadius: 10
                }}>
                <Image 
                  source={IC_ShoppingCart}
                />
              </View>
            </View>

           <View style = {{
                flexDirection: 'row',
                marginBottom: 10,
                justifyContent: 'space-between', 
                marginHorizontal: 10
           }}>
                <View style = {{
                    width: 90,
                    borderRadius: 20,
                    backgroundColor: CUSTOM_COLOR.Alto,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 17,
                        color: CUSTOM_COLOR.Black
                    }}>Related</Text>
                </View>

                <View style = {{
                    width: 90,
                    borderRadius: 20,
                    backgroundColor: CUSTOM_COLOR.Alto,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 17,
                        color: CUSTOM_COLOR.Black
                    }}>Newest</Text>
                </View>

                <View style = {{
                    width: 90,
                    borderRadius: 20,
                    backgroundColor: CUSTOM_COLOR.Alto,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 17,
                        color: CUSTOM_COLOR.Black
                    }}>Top seller</Text>
                </View>

                <View style = {{
                    width: 90,
                    borderRadius: 20,
                    backgroundColor: CUSTOM_COLOR.Alto,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 17,
                        color: CUSTOM_COLOR.Black
                    }}>Price</Text>
                </View>

           </View>

           <View style ={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 10
           }}>
                
                <View style = {{
                    width: 90,
                    borderRadius: 20,
                    backgroundColor: CUSTOM_COLOR.Alto,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center', 
                    marginHorizontal: 5
                }}>
                    <Text style={{
                        fontSize: 17,
                        color: CUSTOM_COLOR.Black
                    }}>Rating</Text>
                </View>
                
                <View style = {{
                    width: 90,
                    borderRadius: 20,
                    backgroundColor: CUSTOM_COLOR.Alto,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center', 
                    marginHorizontal: 5
                }}>
                    <Text style={{
                        fontSize: 17,
                        color: CUSTOM_COLOR.Black
                    }}>Discount</Text>
                </View>
           </View>

            <View>
                <FlatList
                    data={datas}
                    renderItem = {({item}) => {
                        return(
                            <TouchableWithoutFeedback style = {{
                                flexDirection: 'row',
                                //justifyContent: 'space-around'
                            }}>
                                <ProductView
                                    source = {item.source}
                                    title = {item.title}
                                    price = {item.price}
                                />
                            </TouchableWithoutFeedback>
                        )
                    }}
                    numColumns = {2}
                />

            </View>
             

        </View>

    )
}

export default SearchingScreen