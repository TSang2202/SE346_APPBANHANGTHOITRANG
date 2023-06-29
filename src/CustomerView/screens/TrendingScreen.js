import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Firestore } from "../../../Firebase/firebase";
import { IC_Back, IC_ShoppingCart } from "../assets/icons";
import ProductView from "../components/ProductView";
import CUSTOM_COLOR from "../constants/colors";


function TrendingScreen({ navigation }) {

    const [trending, setTrending] = useState([]);

    const getDataTrending = async () => {
        //const querySnapshot = await getDocs(collection(Firestore, "MATHANG"));

        const q = query(collection(Firestore, "SANPHAM"), where("Trending", "==", true));

        const querySnapshot = await getDocs(q);

        const items = [];


        querySnapshot.forEach(documentSnapshot => {
            items.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
            });
        });

        setTrending(items);
    }

    useEffect(() => {


        getDataTrending();


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

                <Search
                    style={{
                        marginVertical: 10,
                        width: 300
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

            <View>
                <Text style={{
                    fontSize: 20,
                    marginHorizontal: 30,
                    fontWeight: 'bold',
                    marginBottom: 10
                }}>Trending now</Text>
            </View>

            <View style={{
                height: '80%'
            }}>
                <FlatList
                    data={trending}
                    renderItem={({ item }) => {
                        return (
                            <TouchableWithoutFeedback style={{
                                flexDirection: 'row',
                                //justifyContent: 'space-around'
                            }}>
                                <ProductView
                                    source={item.HinhAnhSP[0]}
                                    title={item.TenSP}
                                    price={item.GiaSP}
                                />
                            </TouchableWithoutFeedback>
                        )
                    }}
                    numColumns={2}
                />

            </View>



        </View>

    )
}

export default TrendingScreen