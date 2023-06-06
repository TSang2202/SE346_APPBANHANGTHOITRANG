import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar'
import searchFunction from './SearchingFunctions';

const SearchingScreen = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const data = await searchFunction(query);
    setResults(data);
  };
  const renderSearchResult = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.TenSP}</Text>
        <Text>{item.GiaSP}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={results}
        keyExtractor={renderSearchResult}
        renderItem={({ item }) => (
          <View>
            <Text>{item.TenSP}</Text>
            <Text>{item.GiaSP}</Text>
            <Text>{item.DanhGiaTB}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchingScreen;
