import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import HeaderWithBack from '../components/Header/HeaderWithBack.js';
import HeaderTitlle from '../components/Header/HeaderTitlle.js';
import HederContent from '../components/Header/HederContent.js';
import PasswordCard from '../components/Cards/PasswordCard.js';
import CustomButton from '../components/Buttons/CustomButton.js';

const ResetPassword = props => {
    const {navigation} = props;
    const [status, setStatus] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <HeaderWithBack onPress={() => navigation.navigate('SignIn')}></HeaderWithBack>
            <View style={[styles.topContainer, styles.unitContainer]}>
                <HeaderTitlle title="Reset Password"></HeaderTitlle>
                <HederContent content="Your dentify has been vertified"></HederContent>
                <HederContent content="Create your new password"></HederContent>
            </View>

            <View style={[styles.centerContainer, styles.unitContainer]}>
                <View style={{width:'100%', height: '50%'}}>
                    <PasswordCard 
                        title="New Password"
                        txtInput="********"/>
                </View>

                <View style={{width:'100%', height: '50%'}}>
                    <PasswordCard 
                        title="Confirm your new Password"
                        txtInput="********"/>
                </View>
            </View>

            <View style={[styles.botContainer, styles.unitContainer]}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <HederContent content="I lost my phone and I cant receive the code"></HederContent>
                    <Text style={styles.italicText}>
                        Help center
                    </Text>                   
                </View>
                <View style={{flex: 1}}>
                    <CustomButton
                        type="primary"
                        text="Continue"
                        onPress={() => navigation.navigate('SignIn')}
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
    height: '30%',
    top: '7%',
},
botContainer: {
    height: '15%',
    bottom: '-22%',
},
italicText: {
    fontFamily: FONT_FAMILY.MediumItalic, 
    fontSize: 15, 
    color: CUSTOM_COLOR.Black, 
    fontStyle: 'italic'
},
});
export default ResetPassword;
