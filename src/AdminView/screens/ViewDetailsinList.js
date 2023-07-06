import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { Firestore } from "../../../Firebase/firebase";
import { IC_Back } from "../../CustomerView/assets/icons";

import ProductView from "../../CustomerView/components/ProductView";
import SearchInput from "../../CustomerView/components/SearchInput";
import SortDropDown from "../components/SortDropDown";

function ViewDetailsinList({ navigation, route }) {

    const {item} = route.params;

    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [sortType, setSortType] = useState("");


    const handleSearch = searchTerm => {
        setSearchTerm(searchTerm);
      };
    const handleSort = (type) => {
        setSortType(type);
    };

    const getDataCategory = async () => {

        const q = query(collection(Firestore, "SANPHAM"), where("MaDM", "==", item.MaDM));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            let sortedItems = data;

            if (sortType === "a-z") {
                sortedItems = data.sort((a, b) => a.TenSP.localeCompare(b.TenSP));
            } else if (sortType === "z-a") {
                sortedItems = data.sort((a, b) => b.TenSP.localeCompare(a.TenSP));
            } else if (sortType === "low-to-high") {
                sortedItems = data.sort((a, b) => a.GiaSP - b.GiaSP);
            } else if (sortType === "high-to-low") {
                sortedItems = data.sort((a, b) => b.GiaSP - a.GiaSP);
            }
            let filteredItems = data;
            if (searchTerm != null) {
                filteredItems = data.filter(itemData =>
                    itemData.TenSP.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }
            else {
                setItems(data);
            }
            setItems(filteredItems);
            
        });
    };
    useEffect(() => {
        getDataCategory();
    }, []); // Gọi lại hàm getDataCategory khi component được tạo lần đầu

    useEffect(() => {
        getDataCategory();
    }, [searchTerm, sortType]); // Gọi lại hàm getDataCategory mỗi khi searchTerm thay đổi
    return (
        <View style={{
            flex: 1,
            maginBottom:20,
        }}>
            <View style={{
                flexDirection: 'row',
                width:'80%',
                height:40,
                marginTop:15,
                
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image
                        source={IC_Back}
                        style={{
                            width: 10,
                            height: 20,
                            marginTop: 10,
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>
                <SearchInput
                    onSearch={handleSearch}
                />
            </View>
            <View style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom:10, marginTop:10,
            }}>
            </View>
            <SortDropDown
                onSelectSort={handleSort}
                style = {{marginBottom:20}}
            />
            <View style={{
                height: '80%',
            }}>
                <FlatList
                    data={items}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                            }}
                            >
                                <ProductView
                                    source={item.HinhAnhSP[0]}
                                    title={item.TenSP}
                                    price={item.GiaSP}
                                />
                            </TouchableOpacity>
                        );
                    }}
                    numColumns={2}
                //keyExtractor={(item) => item.MASP}
                />

            </View>
        </View>

    )
}
export default ViewDetailsinList