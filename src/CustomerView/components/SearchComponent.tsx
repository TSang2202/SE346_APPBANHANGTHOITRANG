import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';


interface SearchComponentProps {
  onSearch: (searchValue: string) => void;
}
const SearchComponent = ({ onSearch }:SearchComponentProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchValue}
        onChangeText={setSearchValue}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
});
