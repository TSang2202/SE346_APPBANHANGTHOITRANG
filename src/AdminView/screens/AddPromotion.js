import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import CustomHeader from '../components/CustomHeader';
import {border_add} from '../assets/images';
import FONT_FAMILY from '../constants/fonts';

const AddPromotion = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', height: 10}} />

      <>
        <View style={styles.headerContainer}>
          <CustomHeader
            onPress={() => navigation.goBack()}
            title="Promotion/ Add new promotion"
          />
        </View>
      </>

      <View style={{width: '100%', height: 10}} />

      <>
        <View style={styles.bodyContainer}>
          <ScrollView style={{width: '100%', height: '100%'}}>
            <>
              <View style={styles.addImageContainer}>
                <View style={{width: 25, height: '100%'}} />
                <TouchableOpacity style={{width: 75, height: 75}}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    source={border_add}
                    resizeMode="cover">
                    <Text style={styles.icAddStyle}>+</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <View style={{width: 25, height: '100%'}} />
                <Text style={styles.addImageTextStyles}>
                  (Add picture or video)
                </Text>
              </View>
            </>

            <></>

            <></>

            <></>

            <></>

            <></>

            <></>
          </ScrollView>
        </View>
      </>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  headerContainer: {
    width: '90%',
    height: 70,
    marginHorizontal: '5%',
  },
  bodyContainer: {
    width: '90%',
    height: '85%',
    marginHorizontal: '5%',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  addImageContainer: {
    width: '100%',
    height: 100,
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: CUSTOM_COLOR.Black,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icAddStyle: {
    color: CUSTOM_COLOR.FlushOrange,
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 50,
  },
  addImageTextStyles: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.Semibold,
    fontSize: 15,
  },
});
export default AddPromotion;
