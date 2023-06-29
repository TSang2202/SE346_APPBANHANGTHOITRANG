import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Firestore } from "../../../Firebase/firebase";

import ProductView from "../components/ProductView";

function DetailCategoryScreen({ navigation, route }) {
    const { item } = route.params;
    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const [filteredItems, setFilteredItems] = useState([]);

    const getDataCategory = async () => {
        
        const q = query(collection(Firestore, "SANPHAM"), where("MaDM", "==", item.MaDM));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((documentSnapshot) => {
            data.push({
                ...documentSnapshot.data(),
                // key: documentSnapshot.id,
            });
        });
        setItems(data);
        setFilteredItems(data);
    }

    const handleSearch = (searchValue) => {
        const results = items.filter((item) =>
            item.TenSP.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredItems(results);
        console.log(results);
    };

    useEffect(() => {
        getDataCategory();
    }, []);


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
                <Search
                    style={{ marginVertical: 10, width: "70%" }}
                    value={searchValue}
                    onSearch={handleSearch}
                />
            </View>
            <FlatList
                data={filteredItems}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                        }}
                        onPress={() => {
                            navigation.navigate("DetailProduct", { item });
                        }}
                    >
                        <ProductView
                            source={item.HinhAnhSP[0]}
                            title={item.TenSP}
                            price={item.GiaSP}
                        />
                    </TouchableOpacity>
                )}
                numColumns={2}
            />
        </View>
    );
}

export default DetailCategoryScreen;