import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import { IC_Back, IC_ShoppingCart } from "../assets/icons";
import { IM_AnhGiay1, IM_AnhGiay2, IM_AnhGiay3, IM_AnhGiay4 } from "../assets/images";
import ProductView from "../components/ProductView";
import SearchInput from "../components/SearchInput";
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


function TrendingScreen({navigation}) {
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

                <SearchInput
                    style = {{
                        marginVertical: 10,
                        width: 300
                    }}/>

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

            <View>
                <Text style = {{
                    fontSize: 20,
                    marginHorizontal: 30,
                    fontWeight: 'bold',
                    marginBottom: 10
                }}>Trending now</Text>
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
                
            <Text style = {{height: 300}}>Sang

            </Text>

        </View>

    )
}

export default TrendingScreen