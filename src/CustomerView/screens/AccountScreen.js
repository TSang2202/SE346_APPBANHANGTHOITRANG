import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, ViewComponent } from "react-native";
import { IC_Delivery, IC_Gift, IC_Lock, IC_Next, IC_Order, IC_Profile, IC_Question, IC_Revote, IC_Theme, IC_Wallet } from "../assets/icons";
import { IM_AnhGiay2 } from "../assets/images";
import CUSTOM_COLOR from "../constants/colors";

function AccountScreen() {

 

    return (
      <View style = {styles.container}>

          <View
            style = {{
              width: '100%',
              height: '15%',
              backgroundColor: CUSTOM_COLOR.SeaBuckthorn,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              
            }}
          >

              <View style ={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: '5%'
              }}>

                  <Image style ={{
                      width: 75,
                      height: 75,
                      borderRadius: 40,
                      
                  }} 
                    source = {IM_AnhGiay2}
                  />

                  <View
                    style = {{
                      marginHorizontal: '5%'
                    }}
                  >

                      <Text style ={{
                          fontSize: 17,
                          color: CUSTOM_COLOR.White,
                          fontWeight: '500'
                      }}>Sang Thach</Text>

                      <Text style ={{
                          color: CUSTOM_COLOR.White,
                          fontStyle: 'italic'
                      }}>ID: 245678</Text>

                  </View>

              </View>

              <Text style ={{
                  marginHorizontal: '5%',
                  color: CUSTOM_COLOR.White
              }}>Following: 3</Text>

          </View>

          <TouchableOpacity
              style = {{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginVertical: '2%',
                borderBottomWidth: 1,
                paddingBottom: 10,
                borderBottomColor: CUSTOM_COLOR.Alto
              }}
          >
                <View 
                    style ={{
                      flexDirection: 'row',
                      alignItems: 'center',
            
                    }}
                >
                    <Image
                        source={IC_Order}
                        style = {{
                            marginHorizontal: '10%',
                            tintColor: CUSTOM_COLOR.Black,
                           
                        }}
                        resizeMode = 'stretch'
        
                    />

                    <Text style ={{
                        fontSize: 15,
                        color: CUSTOM_COLOR.Black
                    }}>Your order</Text>

                </View>

                <View style ={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style = {{
                        color: CUSTOM_COLOR.Black,
                        fontStyle: 'italic'
                    }}>View purchase history</Text>
                    <Image source={IC_Next}
                        style = {{
                            marginLeft: '5%'

                        }}/>
                </View>

          </TouchableOpacity>

          <View style ={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              borderBottomWidth: 1,
              paddingTop: 10,
              paddingBottom: 15, 
              borderBottomColor: CUSTOM_COLOR.Alto
          }}>
                <TouchableOpacity>
                      <Image source={IC_Wallet}
                          style ={{
                              height: 25,
                              width: 25,
                              
                          }}/>
                </TouchableOpacity>

                <TouchableOpacity>
                      <Image source={IC_Gift}
                          style ={{
                              height: 25,
                              width: 25
                          }}/>
                </TouchableOpacity>

                <TouchableOpacity>
                      <Image source={IC_Delivery}
                          style ={{
                              height: 25,
                              width: 25
                          }}/>
                </TouchableOpacity>

                <TouchableOpacity>
                      <Image source={IC_Revote}
                          style ={{
                              height: 25,
                              width: 25
                          }}/>
                </TouchableOpacity>

          </View>

          <TouchableOpacity style = {{
                ...styles.option
          }}>
                <View style ={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                        <Image source={IC_Question}
                            style ={{
                                ...styles.iconOption
                            }}
                        />
                        <Text style ={{
                                fontSize: 15,
                                color: CUSTOM_COLOR.Black
                        }}>Help center</Text>
                            
                </View>

                <Image source={IC_Next}/>

          </TouchableOpacity>

          <TouchableOpacity style = {{
                ...styles.option
          }}>
                <View style ={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                        <Image source={IC_Profile}
                            style ={{
                                ...styles.iconOption
                            }}
                        />
                        <Text style ={{
                                fontSize: 15,
                                color: CUSTOM_COLOR.Black
                        }}>Profile</Text>
                            
                </View>

                <Image source={IC_Next}/>

          </TouchableOpacity>

          <TouchableOpacity style = {{
                ...styles.option
          }}>
                <View style ={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                        <Image source={IC_Lock}
                            style ={{
                                ...styles.iconOption
                            }}
                        />
                        <Text style ={{
                                fontSize: 15,
                                color: CUSTOM_COLOR.Black
                        }}>Change Password</Text>
                            
                </View>

                <Image source={IC_Next}/>

          </TouchableOpacity>

          <TouchableOpacity style = {{
                ...styles.option
          }}>
                <View style ={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                        <Image source={IC_Theme}
                            style ={{
                                ...styles.iconOption
                            }}
                        />
                        <Text style ={{
                                fontSize: 15,
                                color: CUSTOM_COLOR.Black
                        }}>Theme color</Text>
                            
                </View>

                <Image source={IC_Next}/>

          </TouchableOpacity>
      </View>
      
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White
    
  },
  
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
    marginVertical: '3%'
  },
  iconOption: {
    height: 25,
    width: 25, 
    marginRight: 20
}

})
  
export default AccountScreen