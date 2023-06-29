import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from "react-native";
import { IC_Heart, IC_Heart3X } from "../assets/icons";
import Button from "../components/Button";
import CUSTOM_COLOR from "../constants/colors";
import { collection, addDoc, doc, updateDoc, onSnapshot, getDocs, where } from "firebase/firestore";
import { async } from "@firebase/util";
import { Firestore, firebase } from "../../../Firebase/firebase";
import { query } from "firebase/database";
import ProductView from "../components/ProductView";
function FollowScreen() {
    const [data, setdata] = useState([]);
    const getDataYeuThich = async () => {

      const q = query(collection(Firestore, "YEUTHICH"), where("MaND", "==", firebase.auth().currentUser.uid));

      const querySnapshot = await getDocs(q);

      const items = [];


      querySnapshot.forEach(documentSnapshot => {
          items.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
          });
      });
      let datatest = [];
      for(let i = 0; i < items.length; i++){
        const q = query(collection(Firestore, "SANPHAM"), where("MaSP", "==", items[i].MaSP));
        const querySnapshot = await getDocs(q);
        console.log(items[i].MaSP)
        const teap = [];
        querySnapshot.forEach(documentSnapshot => {
          teap.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
          });
         datatest = datatest.concat(teap);
      })
      }
      setdata(datatest);
    }

    useEffect(() => {
      getDataYeuThich();
    }, []);

    if(data.length == 0){
      return (
        <View style = {styles.container}>
  
            <Image source={IC_Heart3X}
              style ={{
                width: 100,
                height: 100,
              }}
            />
  
            <Text style = {{
              fontSize: 17,
              marginVertical: 10
            }}>Your Love is empty</Text>
            <Button
              color = {CUSTOM_COLOR.FlushOrange}
              title = 'SHOP NOW'
            />
        </View>
        
      )
    }
    else{
      return(
      <View style={{
        marginTop: 20,
        height: '100%',
        width: '100%',
       
        }}>
        <FlatList
            data={data}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
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
      )
    }

    
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CUSTOM_COLOR.White
  }

})
  
export default FollowScreen