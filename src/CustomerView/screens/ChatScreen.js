import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, ScrollView, Keyboard } from "react-native";
import { IC_Attachment, IC_Back, IC_Camera, IC_Emo, IC_Send } from "../assets/icons";
import { IM_AnhGiay2 } from "../assets/images";
import Message from "../components/Message";
import CUSTOM_COLOR from "../constants/colors";
import { collection, query, where, onSnapshot, Timestamp, addDoc, updateDoc, orderBy } from "firebase/firestore";
import { Firestore } from "../../../Firebase/firebase";
import { async } from "@firebase/util";
import { set } from "firebase/database";

const data = [
    {
        id: '1',
        isRight: true,
        content: 'Ê mày',
        time: '11:30'
    },
    {
        id: '2',
        isRight: false,
        content: 'Sao đó?',
        time: '11:30'
    },
    {
        id: '3',
        isRight: true,
        content: 'Tao ghét thằng Tính quá m ơi',
        time: '11:30'
    },
    {
        id: '4',
        isRight: false,
        content: 'Ừ tao cũng ghét nó lắm',
        time: '11:30'
    },
    {
        id: '5',
        isRight: true,
        content: 'Má nó mập lắm mày ơi',
        time: '11:30'
    },
    {
        id: '6',
        isRight: false,
        content: 'Chứ gì nữa, cái mặt nọng không à',
        time: '11:30'
    },
    {
        id: '7',
        isRight: true,
        content: 'Cái tật ham ăn ham uống là phải vậy rồi, thấy thương ghê',
        time: '11:30'
    },
    {
        id: '9',
        isRight: false,
        content: 'Cái tật ham ăn ham uống là phải vậy rồi, thấy thương ghê',
        time: '11:30'
    },
    {
        id: '10',
        isRight: false,
        content: 'Cái tật ham ăn ham uống là phải vậy rồi, thấy thương ghê',
        time: '11:30'
    },
    {
        id: '11',
        isRight: false,
        content: 'Cái tật ham ăn ham uống là phải vậy rồi, thấy thương ghê',
        time: '11:30'
    },
    {
        id: '12',
        isRight: false,
        content: 'Cái tật ham ăn ham uống là phải vậy rồi, thấy thương ghê',
        time: '11:30'
    },
]

function ChatScreen({ navigation, route }) {

    const { item } = route.params;

    const [message, setMessage] = useState([])
    const [chat, setChat] = useState('')


    const getDataMessage = async () => {
        const q = query(collection(Firestore, "CHITIETCHAT"), orderBy("ThoiGian", "asc"), where("MaChat", "==", item.MaChat));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            console.log(data);
            setMessage(data)
        });
    }

    const SendMessage = async () => {
        console.log(1)
        const currentTime = new Date();
        const docRef = await addDoc(collection(Firestore, "CHITIETCHAT"), {
            NoiDung: chat,
            LaNguoiMua: false,
            ThoiGian: Timestamp.fromDate(currentTime),
            MaChat: item.MaChat
        });
        console.log("Document written with ID: ", docRef.id);

        const updateId = await updateDoc(docRef, {
            MaCTChat: docRef.id
        })

        setChat('')
    }

    useEffect(() => {
        getDataMessage();
    }, [])

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: CUSTOM_COLOR.White,
                paddingVertical: '1%'
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image
                        source={IC_Back}
                        style={{
                            width: 10,
                            height: 20,
                            marginHorizontal: 20,
                            marginVertical: 15
                        }}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>

                <Image
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 30,

                    }}

                    source={{ uri: item.Avatar }}
                />

                <Text style={{
                    marginHorizontal: '5%',
                    fontSize: 17,
                    fontWeight: 'bold'
                }}>{item.TenND}</Text>

            </View>

            <ScrollView style={{
                backgroundColor: CUSTOM_COLOR.Gallery
            }}>
                {message.map((message, index) => {
                    const hour = message.ThoiGian.toDate().getHours();
                    const minute = message.ThoiGian.toDate().getMinutes();

                    return (
                        <Message
                            key={message.MaCTChat}
                            content={message.NoiDung}
                            time={`${hour}:${minute}`}
                            isRight={message.LaNguoiMua}
                        />
                    )
                })}

            </ScrollView>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',

                backgroundColor: CUSTOM_COLOR.Gallery

            }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: CUSTOM_COLOR.White,
                    paddingHorizontal: '2%',
                    borderRadius: 25,
                    marginHorizontal: '3%',
                    marginVertical: '2%',
                    width: '80%'
                }}>

                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            marginHorizontal: '2%'
                        }}
                        source={IC_Emo}
                    />

                    <TextInput
                        placeholder='Hello, I have a problem'
                        style={{
                            width: '70%'
                        }}

                        onChangeText={(text) => setChat(text)}
                        value={chat}
                    />

                    <Image
                        style={{
                            width: 10,
                            height: 20,
                            marginHorizontal: '2%'
                        }}
                        resizeMode='stretch'
                        source={IC_Attachment}
                    />
                    <Image
                        style={{
                            width: 22,
                            height: 20,
                            marginLeft: '2%'
                        }}
                        source={IC_Camera}
                    />
                </View>

                <TouchableOpacity style={{
                    height: 45,
                    width: 45,
                    borderRadius: 30,
                    backgroundColor: CUSTOM_COLOR.ChathamsBlue,
                    alignItems: "center",
                    justifyContent: 'center'
                }}
                    onPress={() => {
                        SendMessage()
                    }}
                >
                    <Image
                        source={IC_Send}

                    />

                </TouchableOpacity>
            </View>



        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.White

    },



})

export default ChatScreen