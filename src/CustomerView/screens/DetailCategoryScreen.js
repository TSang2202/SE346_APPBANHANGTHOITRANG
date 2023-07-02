import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Firestore } from "../../../Firebase/firebase";
import { IC_Back, IC_ShoppingCart } from "../assets/icons";
import ProductView from "../components/ProductView";
import CUSTOM_COLOR from "../constants/colors";


function DetailCategoryScreen({ navigation, route }) {

    const { item } = route.params

    const [items, setItems] = useState([]);

    //SEARCH
    const [filterData, setfilterData] = useState(items);
    const [masterData, setMasterData] = useState([]);
    const [search, setSearch] = useState([]);

    const getDataCategory = async () => {

        const q = query(collection(Firestore, "SANPHAM"), where("MaDM", "==", item.MaDM));

        const querySnapshot = await getDocs(q);

        const data = [];


        querySnapshot.forEach(documentSnapshot => {
            data.push({
                ...documentSnapshot.data(),
                // key: documentSnapshot.id,
            });
        });

        console.log(item.MaDM)

        setItems(data);
    }

    const searchFilter =(text)=>{
            if(text)
            {
                const newData = masterData.filter((item) => {
                    const itemData = item.TenSP ? item.TenSP.toUpperCase() : ''.toUpperCase();
                    const textData =text.toUpperCase();
                    return itemData.indexOf(TextData)>-1;
                });
                setfilterData(newData);
                setSearch(text);
            }
            else {
                setfilterData(masterData);
                setSearch(text);
            }
    }
    useEffect(() => {
        getDataCategory();
        console.log(items);
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

                <TextInput
                    style = {style.textInput}
                    value = {search}
                    placeholder="Search here"
                    onChangeText={(text)=>searchFilter(text)}
                />

                <TouchableOpacity style={{
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
                </TouchableOpacity>
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
                }}>{items.length} sản phẩm</Text>
            </View>

            <View style={{
                height: '80%'
            }}>
                <FlatList
                    data={filterData}
                
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                //justifyContent: 'space-around'
                            }}
                                onPress={() => { navigation.navigate('DetailProduct', { item }) }}
                            >
                                <ProductView
                                    source={item.HinhAnhSP[0]}
                                    title={item.TenSP}
                                    price={item.GiaSP}
                                />
                            </TouchableOpacity>
                        )
                    }}
                    numColumns={2}
                //keyExtractor={(item) => item.MASP}
                />

            </View>



        </View>

    )
};
const style =  StyleSheet.create({
    container: {
        backgroundColor: CUSTOM_COLOR.White,

    },
    textInput:{
        height: 40,
        width: 100,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: CUSTOM_COLOR.Black,
        backgroundColor: CUSTOM_COLOR.White,
    }
});

export default DetailCategoryScreen