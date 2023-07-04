import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CUSTOM_COLOR from "../constants/colors";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Nhập từ khóa..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.button}>
          <Text style={styles.buttonText}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    marginLeft: 20,
    marginRight : 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor:CUSTOM_COLOR.White,
  },
  input: {
    marginLeft: 10,
    padding: 8,
    fontSize: 13,
    width: 180,
  },
  button: {
    height: 40,
    marginLeft:80,
    padding: 8,
    backgroundColor: CUSTOM_COLOR.Black,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 2,
  },
});

export default Search;
