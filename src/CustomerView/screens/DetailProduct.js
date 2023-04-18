import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AirbnbRating, Rating } from "react-native-ratings";
import { CurvedTransition } from "react-native-reanimated";
import { IC_Back, IC_Down, IC_Heart, IC_ShoppingCart, IC_StartCorner, IC_StartFull } from "../assets/icons";
import { IM_MauAo } from "../assets/images";
import Button from "../components/Button";
import CUSTOM_COLOR from "../constants/colors";


function DetailProduct({navigation, route}) {

    const {item} = route.params

    return (
      <View style = {styles.container}>

          <View style = {{flexDirection: 'row',   justifyContent: 'space-between'}}>

            <View style ={{flexDirection: "row", alignItems: 'center',}}>
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

                <Text style ={{height: 40, padding: 7, fontSize: 18, fontWeight: 'bold', color: CUSTOM_COLOR.Black}}>Product</Text>
            </View>

                
            <View style ={{flexDirection: "row", alignItems: 'center',}} >
                <Image
                    source={IC_Heart}
                    style = {{
                        margin: 10,

                    }}
                    resizeMode = 'stretch'
                />    

                <Image
                    source={IC_ShoppingCart}
                    style = {{  
                        margin: 10,
                        
                    }}
                    resizeMode = 'stretch'
                />  
            </View>

               
          </View>


        <View style = {{width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center'}}>
            <Image
                source={IM_MauAo}
                style = {{
                    width: 240,
                    height: 240, borderRadius: 20
                }}
            />
        </View>

        <View style = {{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
           <Text
            style ={{
                margin: 10,
                color: CUSTOM_COLOR.Black,
                fontWeight: 'bold',
                fontSize: 20,
                marginLeft: 40

            }}>TÊN SẢN PHẨM</Text>

            <Text
                style ={{
                    marginHorizontal: 50,
                    fontSize: 20,
                    color: CUSTOM_COLOR.Sunglow,
                    fontWeight: 'bold'
                }}
            >200.000 đ</Text>

        </View>
          
          <View style = {{
            flexDirection: 'row', 
            marginVertical: 20,
            marginHorizontal: 40
          }}>
                <Text>Star Rating</Text>
                <TouchableOpacity>
                    <Text style = {{
                        marginHorizontal: 40,
                        fontStyle: 'italic'
                    }}>
                        See reviews
                    </Text>
                </TouchableOpacity>
          </View>

        <View style ={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly'

        }}>
            <Text style = {{
                marginLeft: 25,
                ...styles.textLarge
                
            }}>Color</Text>
            <View style ={{
                flexDirection: 'row',
               
            }}>
            <View style = {{
                height:20,
                width: 20,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: CUSTOM_COLOR.ChathamsBlue,
                marginHorizontal: 5

            }}>

            </View>

            <View style = {{
                height:20,
                width: 20,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: CUSTOM_COLOR.Carnation,
                marginHorizontal: 5

            }}>

            </View>

            <View style = {{
                height:20,
                width: 20,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: CUSTOM_COLOR.Mercury,
                marginHorizontal: 5

            }}>

            </View>
            </View>
            

            <Text>+2 colors</Text>

            <TouchableOpacity style = {{
                width: 30,
                height: 30,
                borderWidth: 1,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center', 
                backgroundColor: CUSTOM_COLOR.Alto,
                marginLeft: 20
            }}>
                <Text style = {{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>-</Text>
        
            </TouchableOpacity>

            <Text>1</Text>

            <TouchableOpacity style = {{
                width: 30,
                height: 30,
                borderWidth: 1,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center', 
                backgroundColor: CUSTOM_COLOR.Alto,
                marginRight: 20
            }}>
                <Text style = {{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>+</Text>
        
            </TouchableOpacity>
        </View>
    

        <View style ={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: 10
        }}>
            <Text style ={{
                ...styles.textLarge,
                marginLeft: 25
            }}>Size</Text>

            <View style = {{
                flexDirection: 'row',
                
            }}>

                <TouchableWithoutFeedback style = {{
                    width: 25,
                    height: 25,
                    backgroundColor: CUSTOM_COLOR.Alto,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginHorizontal: 5
                }}>
                    <Text>S</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback style = {{
                    width: 25,
                    height: 25,
                    backgroundColor: CUSTOM_COLOR.Alto,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginHorizontal: 5
                }}>
                    <Text>M</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback style = {{
                    width: 25,
                    height: 25,
                    backgroundColor: CUSTOM_COLOR.Alto,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginHorizontal: 5
                }}>
                    <Text>L</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback style = {{
                    width: 25,
                    height: 25,
                    backgroundColor: CUSTOM_COLOR.Alto,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginHorizontal: 5
                }}>
                    <Text>+1</Text>
                </TouchableWithoutFeedback>

            </View>

            <TouchableOpacity>
                <Text style = {{
                    fontStyle: 'italic'
                }}>How can I choose my size?</Text>
            </TouchableOpacity>
        </View>


        <View
            style = {{
                flexDirection: 'row',
                justifyContent: 'space-between', marginVertical: 10,
                marginHorizontal: 35
            }}
        >
            <Text style = {{
                color: CUSTOM_COLOR.Black
            }}>
                See product details
            </Text>

            <TouchableWithoutFeedback styles ={{
                
            }}>
                <Image source={IC_Down}/>
            </TouchableWithoutFeedback>
        </View>

        <View style = {{
            flexDirection: 'row', justifyContent: 'center'
        }}>
            <Button
                color = {CUSTOM_COLOR.Carnation}
                title = 'ADD TO CARD'
               
            />

            <Button
                color = {CUSTOM_COLOR.Sunshade}
                title = 'BUY NOW'
            />
        </View>

      </View>

      
      
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
   
  },
  textLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    color: CUSTOM_COLOR.Black
  }

})
  
export default DetailProduct