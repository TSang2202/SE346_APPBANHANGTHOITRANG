import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import CustomHeader from '../components/CustomHeader';
import { IC_Back } from '../../CustomerView/assets/icons';
import ItemList from '../components/ItemList';
import { collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { Firestore } from '../../../Firebase/firebase'
import { async } from '@firebase/util';
import ButtonDetail from '../components/ButtonDetail';

export default function Categories({ navigation }) {

    const [dataCategories, setDataCategories] = useState([])

    const getDataCategories = () => {
        const q = query(collection(Firestore, "DANHMUC"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {

                data.push({ ...doc.data() });
            });
            setDataCategories(data)
        });
    }



    useEffect(() => {
        getDataCategories()
    }, [])

    return (
        <SafeAreaView>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: CUSTOM_COLOR.White
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
                }}>Categories</Text>
            </View>


            <ScrollView style={{
                backgroundColor: CUSTOM_COLOR.Alto,
                height: '85%'
            }}>
                {dataCategories.map((category) => {
                    return (
                        <ItemList
                            source={category.AnhDM}
                            namelist={category.TenDM}
                            numberitem={category.SoLuongSP}
                        />
                    );
                })
                }

            </ScrollView>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <ButtonDetail
                    title={"Add new Category"}
                    color={CUSTOM_COLOR.DarkOrange}
                    style={{
                        width: '50%',
                        marginVertical: 10
                    }}
                />

            </View>







            {/* <ItemList
                source={'https://firebasestorage.googleapis.com/v0/b/shoppingapp-ada07.appspot.com/o/images%2Fproduct%2FPhuKien.jpg?alt=media&token=8d72397d-464a-4dfb-9883-05b2df136b93&_gl=1*p1305q*_ga*OTc0NTU2MzEuMTY3OTQ5NTU1MQ..*_ga_CW55HF8NVT*MTY4NTQ3MzQ3NC43MS4xLjE2ODU0NzYwODYuMC4wLjA'}
                namelist={"Áo nam"}
                numberitem={3}

            /> */}

        </SafeAreaView>
    )

}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: CUSTOM_COLOR.White,
//     },
//     headerContainer: {
//         width: '90%',
//         height: 60,
//         marginHorizontal: '5%',
//         alignItems: 'center'
//     },
// })