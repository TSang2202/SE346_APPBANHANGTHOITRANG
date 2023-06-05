
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AirbnbRating, Rating } from "react-native-ratings";
import { CurvedTransition } from "react-native-reanimated";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";
import { IC_Back, IC_Cancle, IC_Down, IC_Heart, IC_ShoppingCart, IC_StartCorner, IC_StartFull } from "../assets/icons";
import { IM_MauAo } from "../assets/images";
import Button from "../components/Button";
import StarRating from "../components/StarRating";
import CUSTOM_COLOR from "../constants/colors";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { Firestore, firebase } from "../../../Firebase/firebase";


function DetailProduct({ navigation, route }) {

    const { item } = route.params
    const [chooseStyle, setChooseStyle] = useState(false)
    const [numProduct, setNumProduct] = useState(1)
    const [chooseColor, setChooseColor] = useState()
    const [chooseSize, setChooseSize] = useState()

    const setDataGioHang = async () => {
        const docRef = await addDoc(collection(Firestore, "GIOHANG"), {
            MaND: firebase.auth().currentUser.uid,
            MaSP: item.MaSP,
            SoLuong: numProduct,
            GiaTien: item.GiaSP * numProduct,
            MauSac: chooseColor,
            Size: chooseSize,
            HinhAnhSP: item.HinhAnhSP,
            TenSP: item.TenSP

        });

        const updateRef = doc(Firestore, "GIOHANG", docRef.id);
        await updateDoc(updateRef, {
            MaGH: docRef.id
        });

        Alert.alert(
            'Notification',
            'Add to cart successfully',
            [
                {
                    text: 'Cancel',
                    onPress: () => navigation.navigate('HomeScreen'),
                    style: 'cancel',
                },
            ],
        );

    }

    useEffect(() => {
        console.log(item.Size)
    }, [])

    return (
        <View style={{
            ...styles.container,

        }}>



            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                <View style={{ flexDirection: "row", alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <Image
                            source={IC_Back}
                            style={{
                                width: 10,
                                height: 20,
                                margin: 20,

                            }}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>

                    <Text style={{ height: 40, padding: 7, fontSize: 18, fontWeight: 'bold', color: CUSTOM_COLOR.Black }}>Product</Text>
                </View>


                <View style={{ flexDirection: "row", alignItems: 'center', }} >
                    <Image
                        source={IC_Heart}
                        style={{
                            margin: 10,

                        }}
                        resizeMode='stretch'
                    />

                    <Image
                        source={IC_ShoppingCart}
                        style={{
                            margin: 10,

                        }}
                        resizeMode='stretch'
                    />
                </View>


            </View>


            <View style={{ width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={{ uri: item.HinhAnhSP }}
                    style={{
                        width: 240,
                        height: 240, borderRadius: 20
                    }}
                />
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text
                    style={{
                        margin: 10,
                        color: CUSTOM_COLOR.Black,
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginLeft: 40,
                        width: '50%'

                    }}>{item.TenSP}</Text>

                <Text
                    style={{
                        marginHorizontal: 50,
                        fontSize: 20,
                        color: CUSTOM_COLOR.Sunglow,
                        fontWeight: 'bold',
                        width: '30%'

                    }}
                >{item.GiaSP * numProduct} đ</Text>

            </View>

            <View style={{
                flexDirection: 'row',
                marginVertical: 20,
                marginHorizontal: 40,
                alignItems: 'center'
            }}>
                <StarRating
                    nums={5}
                    fill={item.DanhGiaTB}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Review')}
                >
                    <Text style={{
                        marginHorizontal: 40,
                        fontStyle: 'italic'
                    }}>
                        See reviews
                    </Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >


            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: '1%'

            }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>

                    <Text style={{
                        marginLeft: 35,
                        marginRight: 20,
                        ...styles.textLarge

                    }}>Color</Text>



                    {item.MauSac.filter(color => color.checked == true).map(color => (
                        <View style={{
                            ...styles.colorCicle,
                            backgroundColor: color.MaMau,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            key={color.MaMS}
                        >
                            {chooseColor === color.TenMau ?
                                <View style={{
                                    ...styles.colorCicle,
                                    width: 10,
                                    height: 10,
                                    backgroundColor: CUSTOM_COLOR.White,
                                    borderWidth: 0
                                }}>

                                </View> : null}

                        </View>
                    ))}






                </View>


                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >

                    <TouchableOpacity style={{
                        ...styles.btnCount
                    }}
                        onPress={() => numProduct > 1 ? setNumProduct(numProduct - 1) : null}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>-</Text>

                    </TouchableOpacity>

                    <Text>{numProduct}</Text>

                    <TouchableOpacity style={{
                        ...styles.btnCount
                    }}
                        onPress={() => setNumProduct(numProduct + 1)}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>+</Text>

                    </TouchableOpacity>
                </View>

            </View>


            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: 10,
                marginVertical: '1%'
            }}>
                <Text style={{
                    ...styles.textLarge,
                    marginLeft: 25
                }}>Size</Text>

                <View style={{
                    flexDirection: 'row',

                }}>

                    <TouchableWithoutFeedback style={{
                        ...styles.btnSize
                    }}>
                        <Text>{item.Size[0].title}</Text>
                    </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback style={{
                        ...styles.btnSize
                    }}>
                        <Text>{item.Size[1].title}</Text>
                    </TouchableWithoutFeedback>




                    <TouchableWithoutFeedback style={{
                        ...styles.btnSize
                    }}>
                        <Text>{item.Size[2].title}</Text>
                    </TouchableWithoutFeedback>







                </View>

                <TouchableOpacity
                    onPress={() => setChooseStyle(true)}
                >
                    <Text style={{
                        fontStyle: 'italic'
                    }}>How can I choose my size?</Text>
                </TouchableOpacity>
            </View>


            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between', marginVertical: 10,
                    marginHorizontal: 35
                }}
            >
                <Text style={{
                    color: CUSTOM_COLOR.Black
                }}>
                    See product details
                </Text>

                <TouchableWithoutFeedback styles={{

                }}>
                    <Image source={IC_Down} />
                </TouchableWithoutFeedback>
            </View>

            <View style={{
                flexDirection: 'row', justifyContent: 'center',
                marginVertical: '3%'
            }}>
                <Button
                    color={CUSTOM_COLOR.Carnation}
                    title='ADD TO CARD'
                    style={{
                        paddingVertical: '3%'
                    }}
                    onPress={() => setDataGioHang()}
                />

                <Button
                    color={CUSTOM_COLOR.Sunshade}
                    title='BUY NOW'
                />
            </View>



            {chooseStyle ?

                <View style={{
                    position: 'absolute',
                    width: '80%',
                    height: '40%',
                    backgroundColor: CUSTOM_COLOR.White,
                    alignSelf: 'center',
                    top: '30%',
                    borderRadius: 30,
                    borderWidth: 1
                }}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: '5%',
                        marginVertical: '2%'
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: CUSTOM_COLOR.Black
                        }}>Choose your style</Text>

                        <TouchableOpacity
                            onPress={() => setChooseStyle(false)}
                        >
                            <Image style={{
                                width: 15,
                                height: 15
                            }}
                                source={IC_Cancle}
                            />

                        </TouchableOpacity>
                    </View>

                    <View style={{
                        ...styles.flexRow,
                        marginHorizontal: '10%',
                        marginVertical: '3%'
                    }}>
                        <Text style={{ ...styles.textLarge, fontWeight: 'normal' }}>Color</Text>

                        <View>

                            <FlatList
                                data={item.MauSac}
                                renderItem={({ item }) => {
                                    return item.checked == true ? (
                                        <View style={{
                                            ...styles.flexRow,
                                            marginHorizontal: '5%',
                                            marginVertical: 3

                                        }}>
                                            <TouchableOpacity style={{
                                                ...styles.colorCicle,
                                                backgroundColor: item.MaMau,
                                                borderWidth: 1,

                                                justifyContent: 'center',
                                                alignItems: 'center'

                                            }}
                                                onPress={() => setChooseColor(item.TenMau)}
                                            >
                                                {chooseColor === item.TenMau ?
                                                    <View style={{
                                                        ...styles.colorCicle,
                                                        width: 10,
                                                        height: 10,
                                                        backgroundColor: CUSTOM_COLOR.White,
                                                        borderWidth: 0
                                                    }}>

                                                    </View> : null}

                                            </TouchableOpacity>
                                            <Text style={{ ...styles.textSmall }}>{item.TenMau}</Text>

                                        </View>
                                    ) :
                                        <View></View>
                                }
                                }
                                numColumns={2}
                            />




                        </View>


                    </View>

                    <View style={{ ...styles.flexRow }}>
                        <Text style={{
                            ...styles.textLarge,
                            fontWeight: 'normal',
                            marginHorizontal: '10%',
                            marginVertical: '3%'
                        }}>Size</Text>

                        <View>
                            <FlatList

                                data={item.Size}
                                numColumns={4}
                                renderItem={({ item }) => {
                                    return item.checked == true ?
                                        <TouchableOpacity style={{
                                            ...styles.sizeCircle,
                                            width: 45,
                                            marginVertical: 5,

                                            borderWidth: chooseSize === item.title ? 1 : 0

                                        }}
                                            onPress={() => setChooseSize(item.title)}
                                        >
                                            <Text>{item.title}</Text>
                                        </TouchableOpacity>
                                        : <View></View>
                                }}

                            />

                        </View>


                    </View>

                    <View style={{
                        ...styles.flexRow,
                        justifyContent: 'center',
                        marginVertical: '6%'
                    }}>
                        <Button
                            title='DONE'
                            color={CUSTOM_COLOR.Carnation}
                        />

                    </View>

                </View> : null}

        </View>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.White
    },
    textLarge: {
        fontSize: 20,
        fontWeight: 'bold',
        color: CUSTOM_COLOR.Black
    },
    colorCicle: {
        height: 20,
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
        flexDirection: 'row',
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
    },
    btnCount: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: CUSTOM_COLOR.Alto,
        marginHorizontal: 15
    },
    btnSize: {
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