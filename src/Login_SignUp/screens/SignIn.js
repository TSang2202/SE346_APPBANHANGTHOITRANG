import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';
import HeaderWithBack from '../components/Header/HeaderWithBack.js';
import CustomButton from '../components/Buttons/CustomButton.js';
import TextInputCard from '../components/Cards/TextInputCard.js';
import PasswordCard from '../components/Cards/PasswordCard.js';
import HeaderTitlle from '../components/Header/HeaderTitlle.js';
import HederContent from '../components/Header/HederContent.js';

const SignIn = props => {
    const {navigation} = props;
    const [status, setStatus] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <HeaderWithBack onPress={() => navigation.navigate('Intro')}></HeaderWithBack>
            <View style={[styles.unitContainer, {height: '10%'}]}>
                <HeaderTitlle title="Sign in"/>
            </View>

            <View style={[styles.unitContainer, styles.bodyContainer]}>
                <View style={{flex: 2}}>
                    <TextInputCard
                        title="Phone number*"
                        txtInput="03333333333"
                    />
                </View>

                <View style={{flex: 2}}>
                    <PasswordCard
                        title="Pasword*"
                        txtInput="********"
                    />
                </View>

                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <HederContent content="Forgot Password"></HederContent>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerBot}>
                <View style={styles.button}>
                    <CustomButton
                        type="primary"
                        text="Sign in"
                        onPress={() => navigation.navigate('SignIn')}
                    />
                </View>
            </View>

            <View style={[styles.unitContainer, styles.botContainer]}>
                <View style={{flex: 5, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <HederContent content="Don't you have an account ? "></HederContent>
                </View>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <HederContent content="Sign up"></HederContent>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
container: {
    flex: 1,
},
unitContainer: {
    width: '80%',
    marginHorizontal: '10%',
    justifyContent: 'center',
},
bodyContainer: {
    height: '40%',
    top: '5%',
    flexDirection: 'column',
},
containerBot: {
    width: '100%',
    height: '10%',
    bottom: '-5%',
    alignItems: 'center',
    justifyContent: 'center',
},
button: {
    width: '100%',
    height: '100%',
},
botContainer: {
    height: '15%',
    bottom: '-3%',
    flexDirection: 'row',
}
});
export default SignIn;
