import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import BackTo from '../components/BackTo'
import CUSTOM_COLOR from '../constants/colors'
import ButtonDetail from '../components/ButtonDetail'
import { AddImage } from '../assets/images'
import Search from '../components/Search'
import Categorybutton from '../components/categorybutton'
import CheckBox from 'react-native-check-box'
import { Firestore, Storage } from '../../../Firebase/firebase'
import { collection, doc, setDoc, getDocs, query, where, addDoc, updateDoc } from "firebase/firestore";



export default function EditProduct({ navigation, route }) {

  const { item } = route.params


  const [image, setImage] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState()
  const [amount, setAmount] = useState()

  const [color, setColor] = useState([])
  const [sizes, setSize] = useState([
    {
      id: 'sizeS',
      title: 'S',
      checked: false
    },
    {
      id: 'sizeM',
      title: 'M',
      checked: false
    },
    {
      id: 'sizeL',
      title: 'L',
      checked: false
    },
    {
      id: 'sizeXL',
      title: 'XL',
      checked: false
    },
    {
      id: 'sizeXXL',
      title: 'XXL',
      checked: false
    },
    {
      id: 'sizeXXXL',
      title: 'XXXL',
      checked: false
    },

  ])

  const getDataColor = async () => {
    const querySnapshot = await getDocs(collection(Firestore, "MAUSAC"));

    const colors = [];

    querySnapshot.forEach(documentSnapshot => {

      const check = item.MauSac.find(color => color.MaMS === documentSnapshot.data().MaMS)

      colors.push({
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
        checked: check ? true : false
      });
    });

    setColor(colors);

  }

  const getDataSize = () => {

    const data = []
    sizes.forEach((sizes) => {
      const check = item.Size.find(size => size.id === sizes.id)
      if (check) {
        data.push({
          ...sizes,
          checked: true
        })
      } else {
        data.push({
          ...sizes
        })
      }

    }
    )

    setSize(data)
  }



  useEffect(() => {

    console.log(item.MauSac)
    setName(item.TenSP)
    setDescription(item.MoTaSP)
    setPrice(item.GiaSP)
    setAmount(item.SoLuongSP)
    getDataColor()
    getDataSize()


  }, [])

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: CUSTOM_COLOR.White }}>
      <BackTo
        onPress={() => { }}
        Info='Edit Product'
      ></BackTo>

      <ScrollView style={{ backgroundColor: CUSTOM_COLOR.White }}>

        <View style={{
          width: '100%', height: 130, marginTop: 10, elevation: 2,
          borderRadius: 0.5, shadowColor: CUSTOM_COLOR.Black, flexDirection: 'row', alignItems: 'center'
        }}>
          <TouchableOpacity
            style={{ width: 90, height: 90, marginTop: 10, marginLeft: 50 }}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={AddImage}
              resizeMode='cover'
            ></Image>
          </TouchableOpacity>
          <Text style={{ marginLeft: 30 }}>(Add picture or video)</Text>
        </View>

        <View style={{
          width: '100%', height: 90, marginTop: 10, elevation: 2,
          borderRadius: 0.5, shadowColor: CUSTOM_COLOR.Black, flexDirection: 'column'
        }}>
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text>Name Of Product</Text>
            <Text style={{ color: CUSTOM_COLOR.Red }}> *</Text>
            <Text style={{ marginLeft: 220 }}>0/200</Text>
          </View>
          <TextInput style={{ marginLeft: 15 }}
            onChangeText={(text) => setName(text)}
            value={name}
          >

          </TextInput>
        </View>
        <View style={{
          width: '100%', height: 130, marginTop: 10, flexDirection: 'column',
          elevation: 2, borderRadius: 0.5, shadowColor: CUSTOM_COLOR.Black
        }}>
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text>Description</Text>
            <Text style={{ color: CUSTOM_COLOR.Red }}> *</Text>
            <Text style={{ marginLeft: 260 }}>0/200</Text>
          </View>
          <TextInput style={{ marginLeft: 15 }}
            onChangeText={(text) => { setDescription(text) }}
            value={description}
          >

          </TextInput>
        </View>
        <View style={{
          width: '100%', height: 90, marginTop: 10, elevation: 2, flexDirection: 'column',
          borderRadius: 0.5, shadowColor: CUSTOM_COLOR.Black
        }}>
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text>Price</Text>
            <Text style={{ color: CUSTOM_COLOR.Red }}> *</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextInput style={{ marginLeft: 15, width: 200 }}
              onChangeText={(text) => setPrice(parseInt(text))}
              value={String(price)}
              keyboardType='numeric'
            >

            </TextInput>
            <Text style={{ marginLeft: 150, marginTop: 12 }}>VND</Text>
          </View>
        </View>


        <View style={{
          width: '100%', height: 90, marginTop: 10, elevation: 2, flexDirection: 'column'
          , borderRadius: 0.5, shadowColor: CUSTOM_COLOR.Black
        }}>
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text>Color</Text>
            <Text style={{ color: CUSTOM_COLOR.Red }}> *</Text>
          </View>
          <ScrollView
            horizontal={true}
            style={{ flexDirection: 'row' }}>

            {color ?
              color.map((item) => (
                <CheckBox
                  key={item.key}
                  style={{ flex: 1, padding: 10 }}
                  onClick={() => {
                    //setChecked(!checked)
                    handleCheckColor(item.key)
                  }}
                  isChecked={item.checked}
                  leftText={item.TenMau}
                  leftTextStyle={{ fontSize: 15, marginHorizontal: 5 }}

                />
              )
              ) : null
            }

          </ScrollView>
        </View>

        <View style={{
          width: '100%', height: 90, marginTop: 10, elevation: 2, flexDirection: 'column',
          borderRadius: 0.5, shadowColor: CUSTOM_COLOR.Black
        }}>
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text>Size</Text>
            <Text style={{ color: CUSTOM_COLOR.Red }}> *</Text>
          </View>
          <ScrollView style={{ flexDirection: 'row' }}
            horizontal={true}
          >
            {
              sizes ?


                sizes.map((item) => (
                  <CheckBox
                    key={item.id}
                    style={{ flex: 1, padding: 10 }}
                    isChecked={item.checked}
                    leftText={item.title}
                    leftTextStyle={{ fontSize: 15, marginHorizontal: 5 }}
                    onClick={() => {
                      handleCheckSize(item.id)
                    }}
                  />
                ))
                : null
            }
          </ScrollView>
        </View>


        <View style={{
          width: '100%', height: 90, marginTop: 10, elevation: 2, borderRadius: 0.5, flexDirection: 'column',
          shadowColor: CUSTOM_COLOR.Black
        }}>
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text>Amount</Text>
            <Text style={{ color: CUSTOM_COLOR.Red }}> *</Text>
          </View>
          <TextInput style={{ marginLeft: 15 }}
            onChangeText={(text) => setAmount(parseInt(text))}
            value={String(amount)}
            keyboardType='numeric'
          >

          </TextInput>
        </View>
        <View style={{ width: '100%', height: 200, marginTop: 10, elevation: 2, flexDirection: 'column', borderRadius: 0.5, shadowColor: CUSTOM_COLOR.Black }}>
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text>Categorize</Text>
            <Text style={{ color: CUSTOM_COLOR.Red }}> *</Text>
          </View>
          <View>
            <Search
              style={{ width: 200, marginTop: 10, marginLeft: 5, height: 30 }}
              placeholder='Search list item '
            ></Search>
          </View>

          <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
            <Categorybutton
              title='Shoes'
              style={{ width: 100, height: 40, marginLeft: 10 }}
            ></Categorybutton>
            <Categorybutton
              title='T-Shirt'
              style={{ width: 100, height: 40, marginLeft: 10 }}
            ></Categorybutton>
            <Categorybutton
              title='Hat'
              style={{ width: 100, height: 40, marginLeft: 10 }}
            ></Categorybutton>
          </View>
        </View>
        <View style={{ alignItems: 'center', width: '100%', marginTop: 30 }}>
          <ButtonDetail
            title='Edit now'
            style={{ width: 150, height: 50 }}
            onPress={() => { }}
            color={CUSTOM_COLOR.DarkOrange}
          ></ButtonDetail>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})