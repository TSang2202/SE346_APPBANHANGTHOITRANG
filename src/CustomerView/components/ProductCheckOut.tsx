import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { IC_Delete } from "../assets/icons";
import { IM_AnhGiay1 } from "../assets/images";
import CUSTOM_COLOR from "../constants/colors";


const ProductCheckOut = (props: any) => {

    const [checkSelect, setCheckSelect] = useState(false)



    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            backgroundColor: CUSTOM_COLOR.White,
            padding: 5,
            borderRadius: 20,
            ...props.style
        }}>
            <TouchableOpacity style={{
                width: 20,
                height: 20,
                borderWidth: 1,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10
            }}
                onPress={props.onPress}
            >
                {props.checkSelect ?
                    <View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: CUSTOM_COLOR.Black
                    }}>

                    </View> : null}
            </TouchableOpacity>

            <Image source={{ uri: props.source }}
                style={{
                    width: 90,
                    height: 120,
                    borderRadius: 20
                }}
            />

            <View>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    marginVertical: 2
                }}>{props.title}</Text>
                <Text style={{
                    fontStyle: 'italic',

                }}>Color: {props.color}</Text>
                <Text style={{
                    fontStyle: 'italic',

                }}>Size: {props.size}</Text>
                <Text style={{
                    marginVertical: 2
                }}>{props.price} đ</Text>

                <View style={{
                    flexDirection: 'row',

                    marginVertical: 5,
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}>
                    <TouchableOpacity style={{
                        width: 25,
                        height: 25,
                        borderWidth: 1,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: CUSTOM_COLOR.Alto,
                        marginRight: 10
                    }}
                        onPress={props.onPressDown}
                    >
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>-</Text>
                    </TouchableOpacity>

                    <Text>{props.number}</Text>

                    <TouchableOpacity style={{
                        width: 25,
                        height: 25,
                        borderWidth: 1,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: CUSTOM_COLOR.Alto,
                        marginLeft: 10
                    }}
                        onPress={props.onPressUp}
                    >
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>+</Text>
                    </TouchableOpacity>

                </View>




            </View>
            <TouchableOpacity style={{
                width: 30,
                height: 30,
                borderWidth: 1,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10
            }}
                onPress={props.onPressDelete}
            >
                <Image source={IC_Delete} />
            </TouchableOpacity>

        </View>
    )

};

export default ProductCheckOut