import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";


type SearchComponentProps = {
  onSearch: (searchValue: string) => void;
};

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <TextInput
      style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      placeholder="Search"
      value={searchValue}
      onChangeText={setSearchValue}
      onEndEditing={handleSearch}
    />
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
});

