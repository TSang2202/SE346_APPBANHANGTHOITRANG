
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackTo from '../components/BackTo'
import { SearchIcon } from '../../CustomerView/assets/icons'
import { FlatList, ScrollView, } from 'react-native-gesture-handler'
import CUSTOM_COLOR from '../constants/colors'
import Status from '../components/Status'
import { Acount } from './OverView'
import PerSon from '../components/PerSon'
import { IM_MauAo } from '../assets/images'
import OneOrder from '../components/OneOrder'

import { collection, onSnapshot, query, doc, getDoc, querySnapshot, getDocs, where, updateDoc } from "firebase/firestore";
import { Firestore } from '../../../Firebase/firebase'
import { async } from '@firebase/util'


export default function Order({ navigation }) {
    const [confirm, setConfirm] = useState(true)
    const [onWait, setOnWait] = useState(false)
    const [delivering, setDelivering] = useState(false)
    const [delivered, setDelivered] = useState(false)

    const [donHangConfirm, setDonHangConfirm] = useState([])
    const [donHangOnWait, setDonHangOnWait] = useState([])
    const [donHangDelivering, setDonHangDelivering] = useState([])
    const [donHangDelivered, setDonHangDelivered] = useState([])

    const ConfirmDonHang = async (item) => {
        const confirmRef = doc(Firestore, "DONHANG", item.MaDH)

        await updateDoc(confirmRef, {
            TrangThai: "OnWait"
        })

        getDonHangConfirm();
    }

    const OnWaitDonHang = async (item) => {
        const confirmRef = doc(Firestore, "DONHANG", item.MaDH)


        await updateDoc(confirmRef, {
            TrangThai: "Delivering"
        })

        getDonHangOnWait();
    }

    const DeliveringDonHang = async (item) => {
        const confirmRef = doc(Firestore, "DONHANG", item.MaDH)

        await updateDoc(confirmRef, {
            TrangThai: "Delivered"
        })

        getDonHangDelivering();
    }



    const getUsers = async (item) => {
        item = item.trim();

        const docRef = doc(Firestore, "NGUOIDUNG", item);
        const docSnap = await getDoc(docRef);

        const user = {
            ...docSnap.data()
        }

        return user;
    }


    const getDatHang = async (item) => {
        const q = query(collection(Firestore, "DATHANG"), where("MaDH", "==", item));

        const querySnapshot = await getDocs(q);

        const data = []
        querySnapshot.forEach((doc) => {

            data.push(doc.data())
            //console.log(doc.id, " => ", doc.data());
        });
        return data
    }

    const getSanPham = async (item) => {
        const docRef = doc(Firestore, "SANPHAM", item);

        const docSnap = await getDoc(docRef);

        const sanPham = {
            ...docSnap.data()
        }

        return sanPham;
    }


    const getDonHangConfirm = async () => {
        const q = query(collection(Firestore, "DONHANG"), where("TrangThai", "==", "Confirm"));
        const querySnapshot = await getDocs(q)
        const promises = [];
        const promisesDatHang = []

        for (const documentSnapshot of querySnapshot.docs) {
            const promise = getUsers(documentSnapshot.data().MaND);
            const datHang = getDatHang(documentSnapshot.data().MaDH)

            promises.push(promise);
            promisesDatHang.push(datHang)
        }
        const data = []

        const dataUser = await Promise.all(promises);
        const dataDatHang = await Promise.all(promisesDatHang)

        const dataSanPham = []

        for (const documentDatHang of dataDatHang) {
            const promises = []
            for (const documentSanPham of documentDatHang) {
                const promise = getSanPham(documentSanPham.MaSP)
                promises.push(promise)
            }

            const promiseSanPham = await Promise.all(promises);
            dataSanPham.push(promiseSanPham)
        }


        dataDatHang.map((datHang, i) => {
            datHang.map((sanPham, index) => {
                dataDatHang[i][index] = {
                    ...dataDatHang[i][index],
                    SanPham: dataSanPham[i][index]
                }
            })
        })

        dataUser.map((user, index) => {
            const documentSnapshot = querySnapshot.docs[index];
            //console.log(user)
            data.push({
                ...documentSnapshot.data(),
                ...user,
                DatHang: dataDatHang[index]
            })
        });
        setDonHangConfirm(data)
    }



    const getDonHangOnWait = async () => {
        const q = query(collection(Firestore, "DONHANG"), where("TrangThai", "==", "OnWait"));
        const querySnapshot = await getDocs(q)
        const promises = [];
        const promisesDatHang = []

        for (const documentSnapshot of querySnapshot.docs) {
            const promise = getUsers(documentSnapshot.data().MaND);
            const datHang = getDatHang(documentSnapshot.data().MaDH)

            promises.push(promise);
            promisesDatHang.push(datHang)
        }
        const data = []

        const dataUser = await Promise.all(promises);
        const dataDatHang = await Promise.all(promisesDatHang)

        const dataSanPham = []

        for (const documentDatHang of dataDatHang) {
            const promises = []
            for (const documentSanPham of documentDatHang) {
                const promise = getSanPham(documentSanPham.MaSP)
                promises.push(promise)
            }

            const promiseSanPham = await Promise.all(promises);
            dataSanPham.push(promiseSanPham)
        }


        dataDatHang.map((datHang, i) => {
            datHang.map((sanPham, index) => {
                dataDatHang[i][index] = {
                    ...dataDatHang[i][index],
                    SanPham: dataSanPham[i][index]
                }
            })
        })

        dataUser.map((user, index) => {
            const documentSnapshot = querySnapshot.docs[index];
            //console.log(user)
            data.push({
                ...documentSnapshot.data(),
                ...user,
                DatHang: dataDatHang[index]
            })
        });
        setDonHangOnWait(data)
    }


    const getDonHangDelivering = async () => {
        const q = query(collection(Firestore, "DONHANG"), where("TrangThai", "==", "Delivering"));
        const querySnapshot = await getDocs(q)
        const promises = [];
        const promisesDatHang = []

        for (const documentSnapshot of querySnapshot.docs) {
            const promise = getUsers(documentSnapshot.data().MaND);
            const datHang = getDatHang(documentSnapshot.data().MaDH)

            promises.push(promise);
            promisesDatHang.push(datHang)
        }
        const data = []

        const dataUser = await Promise.all(promises);
        const dataDatHang = await Promise.all(promisesDatHang)

        const dataSanPham = []

        for (const documentDatHang of dataDatHang) {
            const promises = []
            for (const documentSanPham of documentDatHang) {
                const promise = getSanPham(documentSanPham.MaSP)
                promises.push(promise)
            }

            const promiseSanPham = await Promise.all(promises);
            dataSanPham.push(promiseSanPham)
        }


        dataDatHang.map((datHang, i) => {
            datHang.map((sanPham, index) => {
                dataDatHang[i][index] = {
                    ...dataDatHang[i][index],
                    SanPham: dataSanPham[i][index]
                }
            })
        })

        dataUser.map((user, index) => {
            const documentSnapshot = querySnapshot.docs[index];
            //console.log(user)
            data.push({
                ...documentSnapshot.data(),
                ...user,
                DatHang: dataDatHang[index]
            })
        });
        setDonHangDelivering(data)
    }


    const getDonHangDelivered = async () => {
        const q = query(collection(Firestore, "DONHANG"), where("TrangThai", "==", "Delivered"));
        const querySnapshot = await getDocs(q)
        const promises = [];
        const promisesDatHang = []

        for (const documentSnapshot of querySnapshot.docs) {
            const promise = getUsers(documentSnapshot.data().MaND);
            const datHang = getDatHang(documentSnapshot.data().MaDH)

            promises.push(promise);
            promisesDatHang.push(datHang)
        }
        const data = []

        const dataUser = await Promise.all(promises);
        const dataDatHang = await Promise.all(promisesDatHang)

        const dataSanPham = []

        for (const documentDatHang of dataDatHang) {
            const promises = []
            for (const documentSanPham of documentDatHang) {
                const promise = getSanPham(documentSanPham.MaSP)
                promises.push(promise)
            }

            const promiseSanPham = await Promise.all(promises);
            dataSanPham.push(promiseSanPham)
        }


        dataDatHang.map((datHang, i) => {
            datHang.map((sanPham, index) => {
                dataDatHang[i][index] = {
                    ...dataDatHang[i][index],
                    SanPham: dataSanPham[i][index]
                }
            })
        })

        dataUser.map((user, index) => {
            const documentSnapshot = querySnapshot.docs[index];
            //console.log(user)
            data.push({
                ...documentSnapshot.data(),
                ...user,
                DatHang: dataDatHang[index]
            })
        });
        setDonHangDelivered(data)
    }




    useEffect(() => {
        getDonHangConfirm()
        getDonHangOnWait()
        getDonHangDelivering()
        getDonHangDelivered()
    }, [donHangConfirm.length, donHangOnWait.length, donHangDelivering.length, donHangDelivered.length])


    if (confirm == true) {
        return (
            <SafeAreaView style={{ backgroundColor: CUSTOM_COLOR.White }}>
                <View style={{ width: '100%', height: 30, flexDirection: 'row', marginTop: 5 }}>
                    <BackTo
                        onPress={() => navigation.goBack()}
                        Info='My Order'
                    ></BackTo>
                </View>
                <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <Status
                        title='Confirm'
                        Color={CUSTOM_COLOR.DarkOrange}
                        botwidth={2}
                        borderColor={CUSTOM_COLOR.Red}
                        countProduct={donHangConfirm.length}
                    ></Status>
                    <Status
                        Color={CUSTOM_COLOR.Black}
                        onPress={() => { setOnWait(true), setConfirm(false) }}
                        title='On Wait'
                        countProduct={donHangOnWait.length}>
                    </Status>
                    <Status
                        Color={CUSTOM_COLOR.Black}
                        onPress={() => { setDelivering(true), setConfirm(false) }}
                        title='Delivering'
                        countProduct={donHangDelivering.length}>
                    </Status>
                    <Status
                        Color={CUSTOM_COLOR.Black}
                        onPress={() => { setDelivered(true), setConfirm(false) }}
                        title='Delivered'
                        countProduct={donHangDelivered.length}>
                    </Status>
                </View>
                <View style={{ width: '100%', height: 10, backgroundColor: CUSTOM_COLOR.LightGray }}></View>
                <View>

                    <FlatList
                        data={donHangConfirm}
                        renderItem={({ item }) => {
                            //console.log(item)
                            return (
                                <View>
                                    <PerSon
                                        avartar={item.Avatar}
                                        name={item.TenND}
                                    />
                                    <FlatList
                                        data={item.DatHang}
                                        renderItem={({ item }) => {

                                            console.log(item)
                                            return (
                                                <View>

                                                    <OneOrder
                                                        source={item.SanPham.HinhAnhSP}
                                                        title={item.SanPham.TenSP}
                                                        price={item.SanPham.GiaSP}
                                                        number={item.SoLuong}
                                                        totalPrice={item.ThanhTien}
                                                        Code={item.MaDH}
                                                        onPress={() => { navigation.navigate('DeTailsDelivery') }}
                                                        PressConfirm={() => { }}
                                                    ></OneOrder>
                                                </View>

                                            )
                                        }}
                                    ></FlatList>

                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate('DeTailsDelivery', { item }) }}
                                        style={{
                                            backgroundColor: CUSTOM_COLOR.DarkOrange, width: 100, marginLeft: 160,
                                            marginTop: 10, height: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 10
                                        }}
                                    >
                                        <Text style={{ color: CUSTOM_COLOR.White }}>Details</Text>
                                    </TouchableOpacity>

                                    <View style={{ width: '100%', height: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ marginLeft: 35 }}>Item Code</Text>
                                        <Text style={{ marginRight: 35 }}>{item.MaDH}</Text>
                                    </View>
                                    <View style={{ width: '100%', height: 30, alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                console.log(item)

                                                ConfirmDonHang(item)
                                            }}
                                            style={{
                                                width: '80%',
                                                height: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: CUSTOM_COLOR.DarkOrange,
                                                paddingHorizontal: 20,
                                                alignSelf: 'center',
                                                borderRadius: 15,

                                            }}
                                        >
                                            <Text style={{ color: CUSTOM_COLOR.White }}>Confirm</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            )
                        }}
                    />


                </View>
            </SafeAreaView>
        )
    }
    if (onWait == true) {
        return (
            <SafeAreaView style={{ backgroundColor: CUSTOM_COLOR.White }}>
                <View style={{ width: '100%', height: 30, flexDirection: 'row', marginTop: 5 }}>
                    <BackTo
                        onPress={() => navigation.goBack()}
                        Info='My Order'
                    ></BackTo>
                </View>
                <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <Status
                        title='Confirm'
                        Color={CUSTOM_COLOR.Black}
                        onPress={() => { setConfirm(true), setOnWait(false) }}
                        countProduct={donHangConfirm.length}
                    ></Status>
                    <Status
                        botwidth={2}
                        borderColor={CUSTOM_COLOR.Red}
                        Color={CUSTOM_COLOR.DarkOrange}
                        title='On Wait'
                        countProduct={donHangOnWait.length}>
                    </Status>
                    <Status
                        Color={CUSTOM_COLOR.Black}
                        onPress={() => { setDelivering(true), setOnWait(false) }}
                        title='Delivering'
                        countProduct={donHangDelivering.length}>
                    </Status>
                    <Status
                        Color={CUSTOM_COLOR.Black}
                        onPress={() => { setDelivered(true), setOnWait(false) }}
                        title='Delivered'
                        countProduct={donHangDelivered.length}>
                    </Status>
                </View>
                <View style={{ width: '100%', height: 10, backgroundColor: CUSTOM_COLOR.LightGray }}></View>
                <View>

                    <FlatList
                        data={donHangOnWait}
                        renderItem={({ item }) => {
                            //console.log(item)
                            return (
                                <View>
                                    <PerSon
                                        avartar={item.Avatar}
                                        name={item.TenND}
                                    />
                                    <FlatList
                                        data={item.DatHang}
                                        renderItem={({ item }) => {

                                            console.log(item)
                                            return (
                                                <View>

                                                    <OneOrder
                                                        source={item.SanPham.HinhAnhSP}
                                                        title={item.SanPham.TenSP}
                                                        price={item.SanPham.GiaSP}
                                                        number={item.SoLuong}
                                                        totalPrice={item.ThanhTien}
                                                        Code={item.MaDH}
                                                        onPress={() => { navigation.navigate('DeTailsDelivery') }}
                                                        PressConfirm={() => { }}
                                                    ></OneOrder>
                                                </View>

                                            )
                                        }}
                                    ></FlatList>
                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate('DeTailsDelivery', { item }) }}
                                        style={{
                                            backgroundColor: CUSTOM_COLOR.DarkOrange, width: 100, marginLeft: 160,
                                            marginTop: 10, height: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 10
                                        }}
                                    >
                                        <Text style={{ color: CUSTOM_COLOR.White }}>Details</Text>
                                    </TouchableOpacity>

                                    <View style={{ width: '100%', height: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ marginLeft: 35 }}>Item Code</Text>
                                        <Text style={{ marginRight: 35 }}>{item.MaDH}</Text>
                                    </View>
                                    <View style={{ width: '100%', height: 30, alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => { OnWaitDonHang(item) }}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: CUSTOM_COLOR.DarkOrange,
                                                paddingHorizontal: 20,
                                                alignSelf: 'center',
                                                borderRadius: 15
                                            }}
                                        >
                                            <Text style={{ color: CUSTOM_COLOR.White }}>Confirm</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            )
                        }}
                    />


                </View>

            </SafeAreaView>
        )
    }
    if (delivering == true) {
        return (
            <SafeAreaView style={{ backgroundColor: CUSTOM_COLOR.White }}>
                <View style={{ width: '100%', height: 30, flexDirection: 'row', marginTop: 5 }}>
                    <BackTo
                        onPress={() => navigation.goBack()}
                        Info='My Order'
                    ></BackTo>
                </View>
                <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <Status
                        title='Confirm'
                        Color={CUSTOM_COLOR.Black}
                        onPress={() => { setConfirm(true), setDelivering(false) }}
                        countProduct={donHangConfirm.length}
                    ></Status>
                    <Status
                        Color={CUSTOM_COLOR.Black}
                        onPress={() => { setOnWait(true), setDelivering(false) }}
                        title='On Wait'
                        countProduct={donHangOnWait.length}
                    >
                    </Status>
                    <Status
                        botwidth={2}
                        borderColor={CUSTOM_COLOR.Red}
                        Color={CUSTOM_COLOR.DarkOrange}
                        title='Delivering'
                        countProduct={donHangDelivering.length}
                    >
                    </Status>
                    <Status
                        Color={CUSTOM_COLOR.Black}
                        onPress={() => { setDelivered(true), setDelivering(false) }}
                        title='Delivered'
                        countProduct={donHangDelivered.length}
                    >
                    </Status>
                </View>
                <View style={{ width: '100%', height: 10, backgroundColor: CUSTOM_COLOR.LightGray }}></View>
                <View>

                    <FlatList
                        data={donHangDelivering}
                        renderItem={({ item }) => {
                            //console.log(item)
                            return (
                                <View>
                                    <PerSon
                                        avartar={item.Avatar}
                                        name={item.TenND}
                                    />
                                    <FlatList
                                        data={item.DatHang}
                                        renderItem={({ item }) => {

                                            console.log(item)
                                            return (
                                                <View>

                                                    <OneOrder
                                                        source={item.SanPham.HinhAnhSP}
                                                        title={item.SanPham.TenSP}
                                                        price={item.SanPham.GiaSP}
                                                        number={item.SoLuong}
                                                        totalPrice={item.ThanhTien}
                                                        Code={item.MaDH}
                                                        onPress={() => { navigation.navigate('DeTailsDelivery') }}
                                                        PressConfirm={() => { }}
                                                    ></OneOrder>


                                                </View>



                                            )
                                        }}
                                    ></FlatList>

                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate('DeTailsDelivery', { item }) }}
                                        style={{
                                            backgroundColor: CUSTOM_COLOR.DarkOrange, width: 100, marginLeft: 160,
                                            marginTop: 10, height: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 10
                                        }}
                                    >
                                        <Text style={{ color: CUSTOM_COLOR.White }}>Details</Text>
                                    </TouchableOpacity>

                                    <View style={{ width: '100%', height: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ marginLeft: 35 }}>Item Code</Text>
                                        <Text style={{ marginRight: 35 }}>{item.MaDH}</Text>
                                    </View>
                                    <View style={{ width: '100%', height: 30, alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => { DeliveringDonHang(item) }}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: CUSTOM_COLOR.DarkOrange,
                                                paddingHorizontal: 20,
                                                alignSelf: 'center',
                                                borderRadius: 15
                                            }}
                                        >
                                            <Text style={{ color: CUSTOM_COLOR.White }}>Confirm</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            )
                        }}
                    />


                </View>
            </SafeAreaView>
        )
    }
    if (delivered == true) {
        return (
            <SafeAreaView style={{ backgroundColor: CUSTOM_COLOR.White }}>
                <View style={{ width: '100%', height: 30, flexDirection: 'row', marginTop: 5 }}>
                    <BackTo
                        onPress={() => navigation.goBack()}
                        Info='My Order'
                    ></BackTo>
                </View>
                <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <Status
                        title='Confirm'
                        Color={CUSTOM_COLOR.Black}
                        onPress={() => { setConfirm(true), setDelivered(false) }}
                        countProduct={donHangConfirm.length}
                    ></Status>
                    <Status
                        Color={CUSTOM_COLOR.Black}
                        onPress={() => { setOnWait(true), setDelivered(false) }}
                        title='On Wait'
                        countProduct={donHangOnWait.length}
                    >

                    </Status>
                    <Status
                        Color={CUSTOM_COLOR.Black}
                        onPress={() => { setDelivering(true), setDelivered(false) }}
                        title='Delivering'
                        countProduct={donHangDelivering.length}
                    >
                    </Status>
                    <Status
                        botwidth={2}
                        borderColor={CUSTOM_COLOR.Red}
                        Color={CUSTOM_COLOR.DarkOrange}
                        title='Delivered'
                        countProduct={donHangDelivered.length}
                    >
                    </Status>
                </View>
                <View style={{ width: '100%', height: 10, backgroundColor: CUSTOM_COLOR.LightGray }}></View>
                <View>

                    <FlatList
                        data={donHangDelivered}
                        renderItem={({ item }) => {
                            //console.log(item)
                            return (
                                <View>
                                    <PerSon
                                        avartar={item.Avatar}
                                        name={item.TenND}
                                    />
                                    <FlatList
                                        data={item.DatHang}
                                        renderItem={({ item }) => {
                                            console.log(item)
                                            return (
                                                <View>

                                                    <OneOrder
                                                        source={item.SanPham.HinhAnhSP}
                                                        title={item.SanPham.TenSP}
                                                        price={item.SanPham.GiaSP}
                                                        number={item.SoLuong}
                                                        totalPrice={item.ThanhTien}
                                                        color={item.MauSac}
                                                        size={item.Size}


                                                    ></OneOrder>

                                                </View>
                                            )
                                        }}
                                        keyExtractor={() => item.MaSP}
                                    ></FlatList>
                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate('DeTailsDelivery', { item }) }}
                                        style={{
                                            backgroundColor: CUSTOM_COLOR.DarkOrange, width: 100, marginLeft: 160,
                                            marginTop: 10, height: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 10
                                        }}
                                    >
                                        <Text style={{ color: CUSTOM_COLOR.White }}>Details</Text>
                                    </TouchableOpacity>

                                    <View style={{ width: '100%', height: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ marginLeft: 35 }}>Item Code</Text>
                                        <Text style={{ marginRight: 35 }}>{item.MaDH}</Text>
                                    </View>
                                    <View style={{ width: '100%', height: 30, alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => { }}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: CUSTOM_COLOR.DarkOrange,
                                                paddingHorizontal: 20,
                                                alignSelf: 'center',
                                                borderRadius: 15
                                            }}
                                        >
                                            <Text style={{ color: CUSTOM_COLOR.White }}>Confirm</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            )
                        }}
                    />


                </View>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({})