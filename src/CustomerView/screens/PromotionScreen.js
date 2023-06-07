import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, ScrollView, Keyboard } from "react-native";
import { IC_Attachment, IC_Back, IC_Camera, IC_Emo, IC_Send } from "../assets/icons";
import { IM_AnhGiay2 } from "../assets/images";
import Message from "../components/Message";
import CUSTOM_COLOR from "../constants/colors";
import { collection, query, where, onSnapshot, Timestamp, addDoc, updateDoc, orderBy, getDocs } from "firebase/firestore";
import { Firestore } from "../../../Firebase/firebase";
import { async } from "@firebase/util";
import { set } from "firebase/database";
import Promotion from "../components/Promotion";



function PromotionScreen({ navigation, route }) {

    const { itemsCheckout, totalMoney, delivery, choosePayment } = route.params

    const [promotion, setPromotion] = useState()

    const [dataKhuyenMai, setDataKhuyenMai] = useState([])

    const getDataKhuyenMai = async () => {
        const querySnapshot = await getDocs(collection(Firestore, "KHUYENMAI"));
        const data = []
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), checkSelect: false })
        });
        setDataKhuyenMai(data)
    }

    const updateCheck = (item) => {

        const updateItem = dataKhuyenMai.map((promo) => {
            if (promo.MaKM === item.MaKM) {
                promo.checkSelect = true
                setPromotion(item)
            }
            else promo.checkSelect = false
            return promo
        })
        setDataKhuyenMai(updateItem)



    }

    useEffect(() => {
        getDataKhuyenMai()
        console.log(dataKhuyenMai)
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
                    }}>Promotion</Text>

                </View>

                <TouchableOpacity style={{
                    marginHorizontal: 15
                }}
                    onPress={promotion ? () => { navigation.navigate('Checkout', { itemsCheckout, totalMoney, delivery, choosePayment, promotion }) } : null}
                >
                    <Text style={{
                        fontSize: 18,
                        color: CUSTOM_COLOR.SeaBuckthorn
                    }}>Done</Text>
                </TouchableOpacity>
            </View>


            <FlatList
                data={dataKhuyenMai}
                renderItem={({ item }) => {
                    const day = item.NgayKetThuc.toDate().getDate();
                    const month = item.NgayKetThuc.toDate().getMonth();
                    const year = item.NgayKetThuc.toDate().getFullYear();
                    return (
                        <Promotion
                            source={item.HinhAnhKM}
                            title={item.TenKM}
                            minimum={item.DonToiThieu}
                            expiry={`${day}.${month}.${year}`}
                            onPress={() => updateCheck(item)}
                            checkSelect={item.checkSelect}
                        />
                    )
                }}
            />

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.White

    },



})

export default PromotionScreen