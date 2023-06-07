import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { IC_Back, IC_ShoppingCart } from "../assets/icons";
import { Firestore } from "../../../Firebase/firebase";
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";
import ProductView from "../components/ProductView";
import SearchInput from "../components/SearchInput";
import CUSTOM_COLOR from "../constants/colors";


function DetailCategoryScreen({ navigation, route }) {

    const { item } = route.params

    const [items, setItems] = useState([]);

    const getDataCategory = async () => {

        const q = query(collection(Firestore, "SANPHAM"), where("MaDM", "==", item.MaDM));

        const querySnapshot = await getDocs(q);

        const items = [];


        querySnapshot.forEach(documentSnapshot => {
            items.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
            });
        });

        setItems(items);
    }

    useEffect(() => {


        getDataCategory();
        console.log(items)


        // const interval = setInterval(() => getData(), 5000); // Lặp lại phương thức lấy dữ liệu sau mỗi 5 giây
        // return () => clearInterval(interval); // Xóa interval khi component bị unmount
    }, []);
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                flexDirection: 'row'
            }}>
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

                <SearchInput
                    style={{
                        marginVertical: 10,
                        width: '70%'
                    }} />

                <View style={{
                    backgroundColor: CUSTOM_COLOR.Mercury,
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 10,
                    padding: 8,
                    borderRadius: 10
                }}>
                    <Image
                        source={IC_ShoppingCart}
                    />
                </View>
            </View>

            <View style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize: 20,
                    marginHorizontal: 30,
                    fontWeight: 'bold',
                    marginBottom: 10
                }}>{item.TenDM}</Text>

                <Text style={{
                    fontSize: 17,
                    marginHorizontal: 20,
                    fontWeight: 'bold',
                    marginBottom: 0
                }}>{item.SoLuongSP} sản phẩm</Text>
            </View>

            <View style={{
                height: '80%'
            }}>
                <FlatList
                    data={items}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                //justifyContent: 'space-around'
                            }}
                                onPress={() => { navigation.navigate('DetailProduct', { item }) }}
                            >
                                <ProductView
                                    source={item.HinhAnhSP}
                                    title={item.TenSP}
                                    price={item.GiaSP}
                                />
                            </TouchableOpacity>
                        )
                    }}
                    numColumns={2}
                    keyExtractor={(item) => item.MaDM}
                />

            </View>



        </View>

    )
}

export default DetailCategoryScreen