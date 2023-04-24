import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { IC_Back } from "../assets/icons";
import { IM_AnhGiay1, IM_AnhGiay2, IM_AnhGiay3, IM_AnhGiay4 } from "../assets/images";
import Message from "../components/Message";
import Notify from "../components/Notify";
import CUSTOM_COLOR from "../constants/colors";


const datasGeneral  = [
  {
    id: '1',
    source: IM_AnhGiay1,
    title: "Thông báo khuyến mãi",
    content: "Khuyến mãi siêu ưu đãi sale lến đến 50%",
    time: '11:30 AM'
  },
  {
    id: '2',
    source: IM_AnhGiay1,
    title: "Thông báo khuyến mãi",
    content: "Khuyến mãi siêu ưu đãi sale lến đến 50%",
    time: '11:30 AM'
  },
  {
    id: '3',
    source: IM_AnhGiay1,
    title: "Thông báo khuyến mãi",
    content: "Khuyến mãi siêu ưu đãi sale lến đến 50%",
    time: '11:30 AM'
  },
  {
    id: '4',
    source: IM_AnhGiay1,
    title: "Thông báo khuyến mãi",
    content: "Khuyến mãi siêu ưu đãi sale lến đến 50%",
    time: '11:30 AM'
  },
  {
    id: '5',
    source: IM_AnhGiay1,
    title: "Thông báo khuyến mãi",
    content: "Khuyến mãi siêu ưu đãi sale lến đến 50%",
    time: '11:30 AM'
  },

]

const dataRecomanded  = [
  {
    id: '1',
    source: IM_AnhGiay2,
    title: "Thông báo giảm giá",
    content: "Khuyến mãi siêu ưu đãi giảm giá cực sốc",
    time: '11:30 AM'
  },
  {
    id: '2',
    source: IM_AnhGiay2,
    title: "Thông báo khuyến mãi",
    content: "Khuyến mãi siêu ưu đãi sale lến đến 50%",
    time: '11:30 AM'
  },
  {
    id: '3',
    source: IM_AnhGiay4,
    title: "Thông báo giảm giá",
    content: "Khuyến mãi siêu ưu đãi giảm giá cực sốc",
    time: '11:30 AM'
  },
  {
    id: '4',
    source: IM_AnhGiay2,
    title: "Thông báo khuyến mãi",
    content: "Khuyến mãi siêu ưu đãi giảm giá cực sốc",
    time: '11:30 AM'
  },
  {
    id: '5',
    source: IM_AnhGiay3,
    title: "Thông báo giảm giá",
    content: "Khuyến mãi siêu ưu đãi sale lến đến 50%",
    time: '11:30 AM'
  },

]

function NotificationScreen({navigation}) {
    const [isGeneral, setIsCeneral] = useState(1)
 

    return (
      <View style = {{
        flex: 1,
        backgroundColor: CUSTOM_COLOR.White
      }}>

            <View style ={{
                flexDirection: 'row', 
                alignItems: 'center', 
                backgroundColor: CUSTOM_COLOR.White
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image
                        source={IC_Back}
                        style = {{
                            width: 10, 
                            height: 20,
                            marginHorizontal: 20,
                            marginVertical: 15
                        }}
                        resizeMode = 'stretch'
                    />  
                </TouchableOpacity>
                    
              
                <Text style ={{
                    fontSize: 20,
                    color: CUSTOM_COLOR.Black, 
                    fontWeight: 'bold'
                }}>Notification</Text>
            </View>

            <View style ={{
              flexDirection: 'row',
              marginVertical: 10
            }}>
                <TouchableWithoutFeedback 
                
                onPress ={() => setIsCeneral(1)}>

                  <View style = {{
                  marginHorizontal: 10,
                  marginLeft: 15,

                  borderBottomWidth: isGeneral ? 1 : 0

                }}>
                    <Text style = {{
                      fontSize: 17, 
                      color: CUSTOM_COLOR.Black
                    }}>General</Text>
                  </View>
                 
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback 
                   onPress ={() => setIsCeneral(0)}
                >
                  <View style = {{
                    marginHorizontal: 10,
                    borderBottomWidth: isGeneral ? 0 : 1
                  }}
               >
                    <Text
                      style = {{
                        fontSize: 17,
                        color: CUSTOM_COLOR.Black
                      }}
                    >Recomanded</Text>
                  </View>
                 
                </TouchableWithoutFeedback>
            </View>

            <FlatList
              data={isGeneral ? datasGeneral : dataRecomanded}
              renderItem = {({item}) => {
                return(
                  <TouchableOpacity>
                    <Notify
                      source = {item.source}
                      title = {item.title}
                      content = {item.content}
                      time = {item.time}
                    />

                  </TouchableOpacity>

                )
              }}
            />
      </View>
      
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})
  
export default NotificationScreen