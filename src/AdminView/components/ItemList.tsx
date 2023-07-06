import React from "react";
import { Image, Text, View } from "react-native";
import Size from "../constants/size";


const ItemList = (props: any) => {
  return (
    <View
      style={{
        width: Size.DeviceWidth / 2 - 65,
        height: 80,
        marginHorizontal: 30,
        marginVertical: 5,
        flexDirection: "row", // Thêm thuộc tính flexDirection với giá trị "row"
        alignItems: "center" // Đảm bảo căn giữa theo chiều dọc
      }}
    >
        <Image
          source={{ uri: props.source }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 20
          }}
        />
      <Text
        style={{
          fontWeight: "bold",
          fontSize:20,
          marginVertical: 4,
          marginLeft: 10 // Khoảng cách giữa ảnh và chữ
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default ItemList;
