import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, CheckBox, ScrollView, StatusBar, ImageBackground} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import HeaderWithBack from '../components/Header/HeaderWithBack.js';
import HeaderTitlle from '../components/Header/HeaderTitlle.js';
import TextInputCard from '../components/Cards/TextInputCard.js';
import CustomButton from '../components/Buttons/CustomButton.js';
import { IMG_Rectangle182 } from '../assets/images/index.js';
import PasswordCard from '../components/Cards/PasswordCard.js';
import HederContent from '../components/Header/HederContent.js';

const SignUp = props => {
    const {navigation} = props;
    const [status, setStatus] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={IMG_Rectangle182} resizeMode="cover" style={styles.container}>
                <HeaderWithBack onPress={() => navigation.navigate('SignIn')}></HeaderWithBack>
                <View style={[styles.topContainer, styles.unitContainer]}>
                    <HeaderTitlle title="Sign Up"></HeaderTitlle>
                </View>

                <View style={[styles.bodyContainer, styles.unitContainer]}>
                    <View style={{flex: 1}}>
                        <TextInputCard
                            title="Full name*"
                            txtInput="Nguyen Van A" />
                    </View>

                    <View style={{flex: 1}}>
                        <TextInputCard
                            title="Email"
                            txtInput="abc@gmail.com" />
                    </View>

                    <View style={{flex: 1}}>
                        <TextInputCard
                            title="Phone number *"
                            txtInput="03333333333" />
                    </View>

                    <View style={{flex: 1}}>
                        <TextInputCard
                            title="Day of birth"
                            txtInput="01/001/2003" />
                    </View>

                    <View style={{flex: 1}}>
                        <PasswordCard
                            title="Password"
                            txtInput="********" />
                    </View>

                    <View style={{flex: 1}}>
                        <PasswordCard
                            title="Confirm Password"
                            txtInput="********" />
                    </View>
                </View>

                <View style={[styles.checkContainer, styles.unitContainer]}>
                    <View >

                    </View>
                    <CheckBox
                        value={isSelected}
                        style={styles.checkbox} />
                    <HederContent content="I agree with this"></HederContent>
                </View>
            </ImageBackground>
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
topContainer: {
    height: '7%',
},
bodyContainer: {
    height: '70%',
},
checkContainer: {
    height: '5%',
    backgroundColor: 'red',
    flexDirection: 'row',
}
});
export default SignUp;
