import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { IC_Back, IC_ShoppingCart, IC_Delete } from "../assets/icons";
import { IM_AnhGiay1, IM_AnhGiay2, IM_AnhGiay3, IM_AnhGiay4 } from "../assets/images";
import Button from "../components/Button";
import ProductCheckOut from "../components/ProductCheckOut";
import ProductView from "../components/ProductView";
import SearchInput from "../components/SearchInput";
import CUSTOM_COLOR from "../constants/colors";
import { collection, doc, setDoc, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { Firestore } from "../../../Firebase/firebase";
import { product } from "../../StaffView/assets/icons";


function ShoppingCartScreen({ navigation, route }) {

    const { idUser } = route.params

    const [items, setItems] = useState([])
    const [checkChooseAll, setCheckChooseAll] = useState(false)
    const [totalMoney, setTotalMoney] = useState(0)

    const getDataCart = () => {
        const q = query(collection(Firestore, "GIOHANG"), where("MaND", "==", idUser));
        const data = [];
        const unsubscribe = onSnapshot(q, (querySnapshot) => {

            querySnapshot.forEach((doc) => {
                data.push({ ...doc.data(), checkSelect: false });
            });
        });


        setItems(data)


    }
    const updateCheck = (item) => {
        const updateItem = items.map((product) => {
            if (product.MaSP === item.MaSP) {
                product.checkSelect = !item.checkSelect;
            }
            if (product.checkSelect == false) setCheckChooseAll(false)
            return product
        })

        const chooseSelectFull = items.filter((product) => (product.checkSelect == true))
        if (chooseSelectFull.length == items.length) setCheckChooseAll(true)

        const sum = items.reduce((total, product) => {
            if (product.checkSelect) return total + product.GiaTien
            else return total
        }, 0)

        setTotalMoney(sum)

        setItems(updateItem)
    }

    const ChooseAll = () => {

        const updateItem = items.map((product) => {
            if (checkChooseAll) {
                product.checkSelect = false
                setTotalMoney(0)
            }
            else {
                product.checkSelect = true
                const sum = items.reduce((total, product) => {
                    return total + product.GiaTien
                }, 0)

                setTotalMoney(sum)
            }


            return product
        })

        setCheckChooseAll(!checkChooseAll)


        setItems(updateItem)
    }


    useEffect(() => {

        getDataCart()

        //console.log(items.checkSelect)
    }, [])




    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image
                        source={IC_Back}
                        style={{
                            width: 10,
                            height: 20,
                            marginHorizontal: 20,
                            marginVertical: 15
                        }}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>


                <Text style={{
                    fontSize: 20,
                    color: CUSTOM_COLOR.Black,
                    fontWeight: 'bold'
                }}>Shopping Cart</Text>
            </View>



            <FlatList
                style={{
                    height: 470,
                    flexGrow: 0
                }}
                data={items}
                renderItem={({ item }) => {

                    return (

                        <ProductCheckOut
                            source={item.HinhAnhSP}
                            title={item.TenSP}
                            color={item.MauSac}
                            size={item.Size}
                            price={item.GiaTien}
                            number={item.SoLuong}
                            onPressChoose={() => updateCheck(item)}
                            checkSelect={item.checkSelect}
                        />

                        // <View style={{
                        //     marginVertical: 10
                        // }}>
                        //     <View style={{
                        //         flexDirection: 'row',
                        //         alignItems: 'center',
                        //         justifyContent: 'space-between',
                        //         marginHorizontal: 10,
                        //         backgroundColor: CUSTOM_COLOR.White,
                        //         padding: 5,
                        //         borderRadius: 20,

                        //     }}>
                        //         <TouchableOpacity style={{
                        //             width: 20,
                        //             height: 20,
                        //             borderWidth: 1,
                        //             borderRadius: 20,
                        //             justifyContent: 'center',
                        //             alignItems: 'center'
                        //         }}
                        //             onPress={() => updateCheck(item)}
                        //         >
                        //             {item.checkSelect ?
                        //                 <View style={{
                        //                     width: 10,
                        //                     height: 10,
                        //                     borderRadius: 10,
                        //                     backgroundColor: CUSTOM_COLOR.Black
                        //                 }}>

                        //                 </View> : null}
                        //         </TouchableOpacity>

                        //         <Image source={{ uri: item.HinhAnhSP }}
                        //             style={{
                        //                 width: 90,
                        //                 height: 120,
                        //                 borderRadius: 20
                        //             }}
                        //         />

                        //         <View>
                        //             <Text style={{
                        //                 fontSize: 17,
                        //                 fontWeight: 'bold',
                        //                 marginVertical: 2
                        //             }}>{item.TenSP}</Text>
                        //             <Text style={{
                        //                 fontStyle: 'italic',

                        //             }}>Color: {item.MauSac}</Text>
                        //             <Text style={{
                        //                 fontStyle: 'italic',

                        //             }}>Size: {item.Size}</Text>
                        //             <Text style={{
                        //                 marginVertical: 2
                        //             }}>{item.GiaTien} đ</Text>

                        //             <View style={{
                        //                 flexDirection: 'row',

                        //                 marginVertical: 5,
                        //                 alignItems: 'center',
                        //                 justifyContent: 'flex-start'
                        //             }}>
                        //                 <TouchableOpacity style={{
                        //                     width: 25,
                        //                     height: 25,
                        //                     borderWidth: 1,
                        //                     borderRadius: 20,
                        //                     alignItems: 'center',
                        //                     justifyContent: 'center',
                        //                     backgroundColor: CUSTOM_COLOR.Alto,
                        //                     marginRight: 10
                        //                 }}
                        //                     onPress={{}}
                        //                 >
                        //                     <Text style={{
                        //                         fontSize: 15,
                        //                         fontWeight: 'bold'
                        //                     }}>-</Text>
                        //                 </TouchableOpacity>

                        //                 <Text>{item.SoLuong}</Text>

                        //                 <TouchableOpacity style={{
                        //                     width: 25,
                        //                     height: 25,
                        //                     borderWidth: 1,
                        //                     borderRadius: 20,
                        //                     alignItems: 'center',
                        //                     justifyContent: 'center',
                        //                     backgroundColor: CUSTOM_COLOR.Alto,
                        //                     marginLeft: 10
                        //                 }}
                        //                     onPress={{}}
                        //                 >
                        //                     <Text style={{
                        //                         fontSize: 15,
                        //                         fontWeight: 'bold'
                        //                     }}>+</Text>
                        //                 </TouchableOpacity>

                        //             </View>




                        //         </View>
                        //         <TouchableOpacity style={{
                        //             width: 30,
                        //             height: 30,
                        //             borderWidth: 1,
                        //             borderRadius: 20,
                        //             justifyContent: 'center',
                        //             alignItems: 'center'
                        //         }}
                        //             onPress={{}}
                        //         >
                        //             <Image source={IC_Delete} />
                        //         </TouchableOpacity>

                        //     </View>

                        // </View>

                    )
                }}
            />

            <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 2,
                justifyContent: 'space-between',
                marginHorizontal: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={{
                        width: 23,
                        height: 23,
                        borderWidth: 1,
                        borderRadius: 20,
                        marginRight: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        onPress={() => {
                            ChooseAll()
                        }}
                    >
                        {checkChooseAll ?
                            <View style={{
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                backgroundColor: CUSTOM_COLOR.Black
                            }}>

                            </View> : null}
                    </TouchableOpacity>

                    <Text style={{
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>Choose all</Text>
                </View>


                <Text style={{
                    marginHorizontal: 20,
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>Total</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginHorizontal: 20,

            }}>
                <Text style={{
                    fontSize: 17
                }}>{totalMoney} đ</Text>
            </View>

            <View style={{
                alignItems: 'center',
                marginVertical: '5%'
            }}>
                <Button
                    title='CHECK OUT'
                    color={CUSTOM_COLOR.FlushOrange}
                    onPress={() => navigation.navigate('Checkout')}
                />
            </View>

        </View>

    )
}

export default ShoppingCartScreen