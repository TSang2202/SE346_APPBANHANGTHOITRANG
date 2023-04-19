import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import TextInputCrad from '../components/Cards/TextInputCard.js';
import CustomButton from '../components/Buttons/CustomButton.js';
import HeaderWithBack from '../components/Header/HeaderWithBack.js';

const ForgotPassword = props => {
    const {navigation} = props;
    const [status, setStatus] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderWithBack onPress={() => navigation.navigate('SignIn')}></HeaderWithBack>
            </View>

            <View style={styles.textView}>
                <Text style={styles.topText}>
                    Forgot Password
                </Text>
                <Text style={[styles.botText, {fontFamily: FONT_FAMILY.Light}]}>
                    Fill some Personal Information
                </Text>
            </View>

            <View style ={styles.textInput}>
                <TextInputCrad
                title="Enter your account phone number"
                textInput="033333333"
                />
            </View>

            <View style={styles.botTextView}>
                <Text style={[styles.botText, {fontFamily: FONT_FAMILY.Light}]}>
                    I lost my phone and I can’t receive the code
                </Text>
                <Text style={[styles.botText, {fontFamily: FONT_FAMILY.MediumItalic, fontStyle: 'italic'}]}>
                    Help center
                </Text>
            </View>

          <View style={styles.containerBot}>
              <View style={styles.button}>
                  <CustomButton
                      type="primary"
                      text="Continue"
                      onPress={() => navigation.navigate('SmartOTP')}
                  />
              </View>
          </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
container: {
    flex: 1,
},
headerContainer: {
    width: '100%',
    height: '10%',
    top: '2%',
},
textView: {
    width: '93%',
    height: '15%',
    left: '7%',
    justifyContent: 'center',
},
topText: {
    fontFamily: FONT_FAMILY.SemiBold,
    fontSize: 30,
    fontWeight: 700,
    color: CUSTOM_COLOR.Black,
},
botText: {
    fontSize: 15,
    color: CUSTOM_COLOR.Black,
},
textInput: {
    width: '86%',
    height: '13%',
    marginHorizontal: '7%',
    top: '7%',
},
botTextView: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '-35%',
},
containerBot: {
    width: '100%',
    height: '8%',
    bottom: '-35%',
    alignItems: 'center',
    justifyContent: 'center',
},
button: {
    width: '100%',
    height: '100%',
},
});
export default ForgotPassword;
