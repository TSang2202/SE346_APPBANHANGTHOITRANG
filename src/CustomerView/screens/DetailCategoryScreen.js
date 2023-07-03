import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Firestore } from "../../../Firebase/firebase";
import { IC_Back, IC_ShoppingCart } from "../assets/icons";
import ProductView from "../components/ProductView";
import SearchInput from "../components/SearchInput";
import CUSTOM_COLOR from "../constants/colors";


function DetailCategoryScreen({ navigation, route }) {

    const { item } = route.params

    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);


    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const getDataCategory = async () => {
    const q = query(collection(Firestore, "SANPHAM"), where("MaDM", "==", item.MaDM));
        const querySnapshot = await getDocs(q);
        const data = [];
        
        querySnapshot.forEach(documentSnapshot => {
            data.push({
            ...documentSnapshot.data(),
            });
        });
        
        console.log(item.MaDM);
        
        let filteredItems = data;
        if (searchTerm != null) {
            filteredItems = data.filter(item =>
            item.TenSP.toLowerCase().includes(searchTerm.toLowerCase())
            ); 
        }
        else {
            setItems(data);
        }
        setItems(filteredItems);
    };
    useEffect(() => {
        getDataCategory();
      }, []); // Gọi lại hàm getDataCategory khi component được tạo lần đầu
    
    useEffect(() => {
        getDataCategory();
    }, [searchTerm]); // Gọi lại hàm getDataCategory mỗi khi searchTerm thay đổi
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
                onSearch = {handleSearch}
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
}

export default DetailCategoryScreen