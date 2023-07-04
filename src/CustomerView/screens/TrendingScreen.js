import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Firestore } from "../../../Firebase/firebase";
import { IC_Back, IC_ShoppingCart } from "../assets/icons";
import ProductView from "../components/ProductView";
import SearchInput from "../components/SearchInput";
import SortDropdown from "../components/SortDropDown";
import CUSTOM_COLOR from "../constants/colors";

function TrendingScreen({ navigation }) {

    const [trending, setTrending] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [sortType, setSortType] = useState("");

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };
    const handleSort = (type) => {
        setSortType(type);
    };

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
        let sortedItems = items;
        
        if (sortType === "a-z") {
            sortedItems = items.sort((a, b) => a.TenSP.localeCompare(b.TenSP));
        } else if (sortType === "z-a") {
            sortedItems = items.sort((a, b) => b.TenSP.localeCompare(a.TenSP));
        } else if (sortType === "low-to-high") {
            sortedItems = items.sort((a, b) => a.GiaSP - b.GiaSP);
        } else if (sortType === "high-to-low") {
            sortedItems = items.sort((a, b) => b.GiaSP - a.GiaSP);
        }

        let filteredItems = items;
        if (searchTerm != null) {
            filteredItems = items.filter(item =>
            item.TenSP.toLowerCase().includes(searchTerm.toLowerCase())
            ); 
        }
        else {
            setTrending(items);
        }
        setTrending(filteredItems);
    }

    useEffect(() => {


        getDataTrending();

        // const interval = setInterval(() => getData(), 5000); // Lặp lại phương thức lấy dữ liệu sau mỗi 5 giây
        // return () => clearInterval(interval); // Xóa interval khi component bị unmount
    }, [searchTerm, sortType]);
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
            <SortDropdown
                onSelectSort={handleSort}
            />
            <View style={{
                height: '80%'
            }}>
                <FlatList
                    data={trending}
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
                />

            </View>



        </View>

    )
}

export default TrendingScreen