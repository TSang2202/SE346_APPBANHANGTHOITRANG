import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Firestore, firebase } from "../../../Firebase/firebase";
import { IC_Add, IC_Back } from "../assets/icons";
import Delivery from "../components/Delivery";
import CUSTOM_COLOR from "../constants/colors";




function DeliveryScreen({ navigation, route }) {

    const { itemsCheckout, totalMoney, choosePayment, promotion } = route.params

    const [dataDelivery, setDataDelivery] = useState([])

    const [delivery, setDelivey] = useState()

    const getDataDelivery = () => {
        const q = query(collection(Firestore, "DIACHI"), where("MaND", "==", firebase.auth().currentUser.uid));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = [];

            querySnapshot.forEach((doc) => {

                data.push({ ...doc.data(), checkSelect: false })
            });
            setDataDelivery(data)


        });


    }

    const updateCheck = (item) => {
        const updateItem = dataDelivery.map((diachi) => {
            if (diachi.MaDC === item.MaDC) {
                diachi.checkSelect = true
                setDelivey(item)
            }
            else diachi.checkSelect = false
            return diachi
        })
        setDataDelivery(updateItem)
    }


    useEffect(() => {
        getDataDelivery()

    }, [])


    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: CUSTOM_COLOR.White,
                height: 40,
                justifyContent: 'space-between',
                alignItems: 'center'
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
                                width: '20%',
                                height: '40%',
                                marginHorizontal: 20,
                                marginVertical: '20%'
                            }}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>


                    <Text style={{
                        fontSize: 20,
                        color: CUSTOM_COLOR.Black,
                        fontWeight: 'bold'
                    }}>Delivery Address</Text>

                </View>

                <TouchableOpacity style={{
                    marginHorizontal: 15
                }}
                    onPress={delivery ? () => navigation.navigate('Checkout', { itemsCheckout, totalMoney, choosePayment, delivery, promotion }) : null}
                >
                    <Text style={{
                        fontSize: 18,
                        color: CUSTOM_COLOR.SeaBuckthorn
                    }}>Done</Text>
                </TouchableOpacity>
            </View>



            <ScrollView>
                {dataDelivery ? dataDelivery.map((item) => {

                    return (
                        <Delivery
                            name={item.TenNguoiMua}
                            phoneNumber={item.SDT}
                            ward={item.PhuongXa}
                            district={item.QuanHuyen}
                            city={item.TinhThanhPho}
                            key={item.MaDC}
                            address={item.DiaChi}
                            checkSelect={item.checkSelect}
                            onPressChoose={() => updateCheck(item)}
                            show={true}
                            style={{
                                paddingHorizontal: 10,
                                margin: 10
                            }}
                        />

                    )
                }) : null}

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 15
                }}
                    onPress={() => navigation.navigate('DeliveryAddress', { itemsCheckout, totalMoney, choosePayment, promotion })}
                >
                    <Image
                        source={IC_Add}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: CUSTOM_COLOR.FlushOrange,
                            marginRight: 10
                        }}
                    />

                    <Text style={{
                        color: CUSTOM_COLOR.FlushOrange,
                        fontSize: 16
                    }}>Add new delivery</Text>
                </TouchableOpacity>
            </ScrollView>



        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.White

    },



})

export default DeliveryScreen