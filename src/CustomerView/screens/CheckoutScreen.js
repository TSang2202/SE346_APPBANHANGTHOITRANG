import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from "react-native";
import { IC_Back, IC_CheckGreen, IC_CheckGrey, IC_Location, IC_Next, IC_Visa } from "../assets/icons";
import { IM_AnhGiay1 } from "../assets/images";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import ProductCheckOut from "../components/ProductCheckOut";
import CUSTOM_COLOR from "../constants/colors";

const data = {
  id: '1',
      source: IM_AnhGiay1,
      title: 'Asics Running Shoes',
      type: "Men's Footwear-Sports Shoes",
      price: '399999',
      number: 1
}

function CheckoutScreen({navigation}) {

 

    return (
      <View style = {{
        flex: 1
      }}>

            <View style ={{
                flexDirection: 'row', 
                alignItems: 'center', 
                backgroundColor: CUSTOM_COLOR.White
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
                }}>Cart</Text>
            </View>


            <ProductCheckOut
              source = {data.source}
              title = {data.title}
              type = {data.type}
              price = {data.price}
              number = {data.number}
              style = {{
                marginVertical: 10
              }}
            />

            <View style = {{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10
            }}>
              <Text style = {{
                fontSize: 18,
                fontWeight: 'bold'
              }}>Offers Details</Text>
              <Image source={IC_Next}/>
            </View>

            <View style = {{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20
            }}>
              <Text style = {{
                fontSize: 17,
              
              }}>Mega Diwali Sale 50% OFF Offer Applied</Text>
              <Image source={IC_CheckGreen}/>
            </View>

            <View style = {{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10
            }}>
              <Text style = {{
                fontSize: 18,
                fontWeight: 'bold'
              }}>Delivery Address</Text>
              <Image source={IC_Next}/>
            </View>


            <View style = {{
              flexDirection: 'row',
              alignItems: 'center',
             justifyContent: 'space-between',
             marginHorizontal: 20
            }}>

              <View style = {{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <Image source={IC_Location}
                  style = {{
                    width: 50,
                    height: 50,
          
                  }}
                />
                <Text style = {{
                  marginHorizontal: 20,
                  fontSize: 17
                }}>Add your address</Text>
              </View>
              <Image source={IC_CheckGrey}/>
            </View>

            <View style = {{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10
            }}>
              <Text style = {{
                fontSize: 18,
                fontWeight: 'bold'
              }}>Payment Method</Text>
              <Image source={IC_Next}/>
            </View>

            <View style = {{
              flexDirection: 'row',
              alignItems: 'center',
             justifyContent: 'space-between',
             marginHorizontal: 20
            }}>

              <View style = {{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <Image source={IC_Visa}
                  style = {{
                    width: 50,
                    height: 50,
          
                  }}
                />
                <Text style = {{
                  marginHorizontal: 20,
                  fontSize: 17
                }}>Add payment method</Text>
              </View>
              <Image source={IC_CheckGrey}/>
            </View>

            <View style = {{
              marginHorizontal: 20,
              marginVertical: 2
            }}>
              <Text style ={{
                fontSize: 18,
                fontWeight: 'bold'
              }}>Order </Text>
            </View>

            <View style = {{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal:20
              
            }}>
              <Text  style = {{
                fontSize: 16
              }}>Subtotal</Text>
              <Text style ={{
                fontSize: 16
              }}>200000đ</Text>
            </View>

            <View style = {{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal:20
              
            }}>
              <Text  style = {{
                fontSize: 16
              }}>Delivery Charge</Text>
              <Text style ={{
                fontSize: 16
              }}>20000đ</Text>
            </View>

            <View style = {{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal:20
              
            }}>
              <Text  style = {{
                fontSize: 16
              }}>Total</Text>
              <Text style ={{
                fontSize: 16
              }}>220000đ</Text>
            </View>

            <View style = {{
              alignItems: 'center',
              marginVertical: 10
            }}>
              <Button 
                color = {CUSTOM_COLOR.FlushOrange}
                title = 'CHECK OUT'
              />
            </View>
      </View>
      
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})
  
export default CheckoutScreen