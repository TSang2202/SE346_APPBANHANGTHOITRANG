import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import HeaderWithBack from '../components/Header/HeaderWithBack.js';
import HeaderTitlle from '../components/Header/HeaderTitlle.js';
import HederContent from '../components/Header/HederContent.js';
import TextInputCard from '../components/Cards/TextInputCard.js';
import CustomButton from '../components/Buttons/CustomButton.js';

const ForgotPassword = props => {
    const {navigation} = props;
    const [status, setStatus] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <HeaderWithBack onPress={() => navigation.goBack()}></HeaderWithBack>
            <View style={[styles.topContainer, styles.unitContainer]}>
                <HeaderTitlle title="Forgot Password"></HeaderTitlle>
                <HederContent content="Fill some Personal Information"></HederContent>
            </View>

            <View style={[styles.centerContainer, styles.unitContainer]}>
                <TextInputCard 
                    title="Enter your account phone number"
                    txtInput="033333333"/>
            </View>

            <View style={[styles.botContainer, styles.unitContainer]}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                    <HederContent content="I lost my phone and I cant receive the code"></HederContent>
                    <TouchableOpacity>
                        <Text style={styles.italicText}>
                            Help center
                        </Text>                   
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
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
    backgroundColor: CUSTOM_COLOR.White,
},
unitContainer: {
    width: '80%',
    marginHorizontal: '10%',
    justifyContent: 'center',
},
topContainer: {
    height: '15%',
    top: '1%',
},
centerContainer: {
    height: '16%',
    top: '7%',
},
botContainer: {
    height: '17%',
    bottom: '-30%',
},
italicText: {
    fontFamily: FONT_FAMILY.MediumItalic, 
    fontSize: 15, 
    color: CUSTOM_COLOR.Black, 
    fontStyle: 'italic',
},
});
export default ForgotPassword;
