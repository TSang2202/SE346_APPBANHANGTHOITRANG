
import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AirbnbRating, Rating } from "react-native-ratings";
import { CurvedTransition } from "react-native-reanimated";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";
import { IC_Back, IC_Cancle, IC_Down, IC_Heart, IC_ShoppingCart, IC_StartCorner, IC_StartFull } from "../assets/icons";
import { IM_MauAo } from "../assets/images";
import Button from "../components/Button";
import StarRating from "../components/StarRating";
import CUSTOM_COLOR from "../constants/colors";


function DetailProduct({navigation, route}) {

    const {item} = route.params
    const [chooseStyle, setChooseStyle] = useState(false)

    return (
      <View style = {{
        ...styles.container,
        
      }}>
            

        
          <View style = {{flexDirection: 'row',   justifyContent: 'space-between', }}>

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
            marginHorizontal: 40,
            alignItems: 'center'
          }}>
                <StarRating
                    nums = {5}
                    fill = {2}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Review')}
                >
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
            justifyContent: 'space-evenly',
            marginVertical: '1%'

        }}>
            <Text style = {{
                marginLeft: 25,
                ...styles.textLarge
                
            }}>Color</Text>
            <View style ={{
                flexDirection: 'row',
               
            }}>
            <View style = {{
                ...styles.colorCicle,
                backgroundColor: CUSTOM_COLOR.ChathamsBlue,
                

            }}>

            </View>

            <View style = {{
                ...styles.colorCicle,
                backgroundColor: CUSTOM_COLOR.Carnation,
                

            }}>

            </View>

            <View style = {{
                ...styles.colorCicle,
                backgroundColor: CUSTOM_COLOR.Mercury,
               

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
            marginTop: 10,
            marginVertical: '1%'
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

            <TouchableOpacity
                onPress={() => setChooseStyle(true)}
            >
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
            flexDirection: 'row', justifyContent: 'center',
            marginVertical: '3%'
        }}>
            <Button
                color = {CUSTOM_COLOR.Carnation}
                title = 'ADD TO CARD'
                style = {{
                    paddingVertical: '3%'
                }}
            />

            <Button
                color = {CUSTOM_COLOR.Sunshade}
                title = 'BUY NOW'
            />
        </View>

      

        {chooseStyle ? 

        <View style = {{
            position: 'absolute',
            width: '80%',
            height: '40%',
            backgroundColor: CUSTOM_COLOR.White,
            alignSelf: 'center',
            top: '30%',
            borderRadius: 30,
            borderWidth: 1
        }}>

            <View style ={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: '5%',
                marginVertical: '2%'
            }}>
                <Text style ={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: CUSTOM_COLOR.Black
                }}>Choose your style</Text>

                <TouchableOpacity 
                    onPress={() => setChooseStyle(false)}
                >
                    <Image style ={{
                        width: 15,
                        height: 15
                    }}
                        source = {IC_Cancle}
                    />

                </TouchableOpacity>
            </View>

            <View style ={{
                ...styles.flexRow,
                marginHorizontal: '10%',
                marginVertical: '3%'
            }}>
                <Text style = {{...styles.textLarge, fontWeight: 'normal'}}>Color</Text>

                <View>

                    <View style ={{
                        ...styles.flexRow,
                        justifyContent: 'center',
                        marginVertical: '5%'
                    }}>
                        <View style ={{
                            ...styles.flexRow,
                            marginHorizontal: '5%'
                
                        }}>
                            <View style = {{                   
                                ...styles.colorCicle,
                                backgroundColor: CUSTOM_COLOR.White, 
                            }}>

                            </View>
                            <Text style = {{...styles.textSmall}}>White</Text>

                        </View>

                        <View style ={{
                            ...styles.flexRow,          
                        }}>
                            <View style = {{
                                ...styles.colorCicle,
                                backgroundColor: CUSTOM_COLOR.Black,                           
                            }}>

                            </View>
                            <Text style = {{...styles.textSmall}}>Black</Text>

                        </View>

                    </View>

                    <View style ={{
                        ...styles.flexRow,
                        justifyContent: 'center'
                    }}>
                        <View style ={{
                            ...styles.flexRow,
                            marginHorizontal: '5%'
                
                        }}>
                            <View style = {{                   
                                ...styles.colorCicle,
                                backgroundColor: CUSTOM_COLOR.Carnation, 
                            }}>

                            </View>
                            <Text style = {{...styles.textSmall}}>Red</Text>

                        </View>

                        <View style ={{
                            ...styles.flexRow,          
                        }}>
                            <View style = {{
                                ...styles.colorCicle,
                                backgroundColor: CUSTOM_COLOR.Yellow,                           
                            }}>

                            </View>
                            <Text style = {{...styles.textSmall}}>Yellow</Text>

                        </View>

                    </View>
                </View>


            </View>

            <View style = {{...styles.flexRow}}>
                <Text style = {{
                    ...styles.textLarge, 
                    fontWeight: 'normal', 
                    marginHorizontal: '10%',
                    marginVertical: '3%'
                    }}>Size</Text>

                <View style = {{...styles.flexRow}}>
                    <TouchableWithoutFeedback style = {{
                        ...styles.sizeCircle
                    }}>
                        <Text>S</Text>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback style = {{
                        ...styles.sizeCircle
                    }}>
                        <Text>M</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style = {{
                        ...styles.sizeCircle
                    }}>
                        <Text>L</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style = {{
                        ...styles.sizeCircle
                    }}>
                        <Text>XL</Text>
                    </TouchableWithoutFeedback>
                    

                </View>

            </View>

            <View style ={{
                ...styles.flexRow,
                justifyContent: 'center',
                marginVertical: '6%'
            }}>
                <Button
                    title = 'DONE'
                    color = {CUSTOM_COLOR.Carnation}
                />

            </View>

        </View> : null}

      </View>

      
      
    )
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White
  },
  textLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    color: CUSTOM_COLOR.Black
  },
  colorCicle: {
    height:20,
    width: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: 5,
  },
  textSmall: {
    color: CUSTOM_COLOR.Black,
    marginHorizontal: '2%'
  },
  flexRow: {
    flexDirection:'row',
    alignItems: 'center'
  },
  sizeCircle: {
    width: 25,
    height: 25,
    backgroundColor: CUSTOM_COLOR.Alto,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 5
  }


})
  
export default DetailProduct