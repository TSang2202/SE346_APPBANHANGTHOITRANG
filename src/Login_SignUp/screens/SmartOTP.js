import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import CustomButton from '../components/Buttons/CustomButton.js';
import HeaderWithBack from '../components/Header/HeaderWithBack.js';
import HeaderTitlle from '../components/Header/HeaderTitlle.js';
import HederContent from '../components/Header/HederContent.js';
import OTPCard from '../components/Cards/OTPCard.js';

const SmartOTP = props => {
    const {navigation} = props;
    const [status, setStatus] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <HeaderWithBack onPress={() => navigation.navigate('ForgotPassword')}></HeaderWithBack>
            <View style={[styles.unitContainer, {height: '5%'}]}>
                <HeaderTitlle title="Smart OTP"/>
            </View>
            <View style={[styles.topContainer, styles.unitContainer]}>
                <HederContent content="Please check your phone and type the verification code we sent to 0336******"></HederContent>
            </View>

            <View style={{width: '100%', height: '8%', top: '8%'}}>
                <OTPCard />
            </View>

            <View style={styles.centerContainer}>
                <View style={{flex: 3, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <HederContent content="You don’t receive the code ?  "/>
                </View>

                <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start'}}>
                    <HederContent content="Resend (After 2:00)"/>
                </View>
            </View>

            <View style={styles.containerBot}>
            <View style={styles.button}>
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
    top: '5%',
},
topContainer: {
    height: '8%',
    alignItems: 'center',
},
centerContainer: {
    width: '90%',
    height: '5%',
    top: '15%',
    marginHorizontal: '5%',
    flexDirection: 'row',
},
containerBot: {
    width: '100%',
    height: '10%',
    bottom: '-45%',
    alignItems: 'center',
    justifyContent: 'center',
},
button: {
    width: '100%',
    height: '100%',
},

});
export default SmartOTP;
