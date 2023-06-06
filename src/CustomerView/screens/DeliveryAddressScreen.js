import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from "react-native";
import { Firestore } from "../../../Firebase/firebase";
import { IC_Back, IC_Location, IC_MyLocation } from "../assets/icons";
import Button from "../components/Button";
import InputData from "../components/InputData";
import CUSTOM_COLOR from "../constants/colors";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";

function DeliveryAddressScreen({ navigation, route }) {

    const { itemsCheckout, totalMoney, choosePayment } = route.params
    // const [delivery, setDelivery] = useState()
    const [diaChi, setDiaChi] = useState('')
    const [quanHuyen, setQuanHuyen] = useState('')
    const [tinhTP, setTinhTP] = useState('')
    const [numberPhone, setNumberPhone] = useState('')
    const [name, setName] = useState('')


    const addDataAddress = async () => {
        const docRef = await addDoc(collection(Firestore, "DIACHI"), {
            DiaChi: diaChi,
            QuanHuyen: quanHuyen,
            TinhThanhPho: tinhTP,
            SDT: numberPhone,
            TenNguoiMua: name
        });
        const updateRef = doc(Firestore, "DIACHI", docRef.id);

        await updateDoc(updateRef, {
            MaDC: docRef.id
        });

        const loadRef = doc(Firestore, "DIACHI", docRef.id);
        const docSnap = await getDoc(loadRef);


        return docSnap.data()

    }




    return (
        <View style={styles.container}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: CUSTOM_COLOR.White,
                height: 40
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

            <View style={{
                alignItems: 'center'
            }}>
                <InputData
                    title='Name'
                    width='85%'
                    placeholder='Input your name'
                    onChangeText={(text) => setName(text)}
                />

                <InputData
                    title='Address'
                    width='85%'
                    placeholder='Input your address'
                    onChangeText={(text) => setDiaChi(text)}
                />
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
            }}>
                <InputData

                    title='District'
                    width='40%'
                    placeholder='Binh Thanh'
                    onChangeText={(text) => setQuanHuyen(text)}
                />
                <InputData

                    title='City'
                    width='40%'
                    placeholder='Ho Chi Minh City'
                    onChangeText={(text) => setTinhTP(text)}
                />
            </View>

            <View style={{
                alignItems: 'center'
            }}>
                <InputData
                    title='Phone number'
                    width='85%'
                    placeholder='0334971822'
                    onChangeText={(text) => setNumberPhone(text)}
                />
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: CUSTOM_COLOR.Whisper,
                    marginVertical: 10,
                    width: '85%',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    borderRadius: 15,
                    alignItems: 'center'
                }}>

                    <Image style={{
                        width: 20,
                        height: 20
                    }}
                        source={IC_MyLocation} />

                    <Text style={{
                        marginHorizontal: 10,
                        fontSize: 17
                    }}>Use my location</Text>
                </View>

            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 20
            }}>
                <Button
                    title='SAVE'
                    color={CUSTOM_COLOR.FlushOrange}
                    onPress={async () => {
                        const delivery = await addDataAddress()


                        navigation.navigate('Checkout', { itemsCheckout, totalMoney, delivery, choosePayment })

                    }

                    }

                />
            </View>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.White
    }

})

export default DeliveryAddressScreen