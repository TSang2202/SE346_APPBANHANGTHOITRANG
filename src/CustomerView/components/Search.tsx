import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type SearchBarProps = {
  onSearch: (keyword: string) => void; // khai báo kiểu dữ liệu cho props
};

const SearchBar = ({ onSearch }: SearchBarProps): React.ReactNode => {
  const [keyword, setKeyword] = useState('');

  // Xử lý sự kiện thay đổi từ khóa trong thanh tìm kiếm
  const handleKeywordChange = (keyword:string) => {
    setKeyword(keyword);
    onSearch(keyword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tìm kiếm sản phẩm"
        value={keyword}
        onChangeText={handleKeywordChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
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

export default SearchBar;
