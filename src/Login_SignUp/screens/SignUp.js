import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import HeaderWithBack from '../components/Header/HeaderWithBack.js';
import HeaderTitlle from '../components/Header/HeaderTitlle.js';
import TextInputCard from '../components/Cards/TextInputCard.js';
import CustomButton from '../components/Buttons/CustomButton.js';
import {IMG_Rectangle182} from '../assets/images/index.js';
import PasswordCard from '../components/Cards/PasswordCard.js';
import HederContent from '../components/Header/HederContent.js';
import CheckBox from '@react-native-community/checkbox';
import FONT_FAMILY from '../constants/fonts.js';
import CUSTOM_COLOR from '../constants/colors.js';
//import {  ref, set } from "firebase/database";
//import {db} from '../../../Firebase/firebase';

const SignUp = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  // const username = 'Sang'
  // const email = 'thachsang2202@gmail.com'

  // function create()
  // {
  //     set(ref(db, 'users/' + username), {
  //     username: username,
  //     email: email,

  //     }).then(()=>{
  //         Alert('data update');
  //     }).catch((error) => Alert(error))
  // }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMG_Rectangle182}
        resizeMode="cover"
        style={styles.container}>
        <HeaderWithBack onPress={() => navigation.goBack()} />
        <View style={[styles.topContainer, styles.unitContainer]}>
          <HeaderTitlle title="Sign Up" />
        </View>
        <View style={[styles.bodyContainer, styles.unitContainer]}>
          <View style={{flex: 1}}>
            <TextInputCard title="Full name*" txtInput="Nguyen Van A" />
          </View>

          <View style={{flex: 1}}>
            <TextInputCard title="Email" txtInput="abc@gmail.com" />
          </View>

          <View style={{flex: 1}}>
            <TextInputCard title="Phone number*" txtInput="03333333333" />
          </View>

          <View style={{flex: 1}}>
            <TextInputCard title="Day of birth" txtInput="01/01/2003" />
          </View>

          <View style={{flex: 1}}>
            <PasswordCard title="Password*" txtInput="********" />
          </View>

          <View style={{flex: 1}}>
            <PasswordCard title="Confirm Password*" txtInput="********" />
          </View>
        </View>

        <View style={[styles.checkContainer, styles.unitContainer]}>
          {/* <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                    </View> */}

          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'flex-end'}}>
            <HederContent content="I agree with this "></HederContent>
          </View>

          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Policy')}>
              <Text style={styles.policyStyles}>Policy</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerBot}>
          <View style={styles.button}>
            <CustomButton
              type="primary"
              text="Sign up now"
              onPress={
                //create
                () => {
                  navigation.navigate('SmartOTP');
                }
              }
            />
          </View>
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
    top: '-1%',
    left: '3%',
  },
  bodyContainer: {
    height: '72%',
    top: '0%',
  },
  checkContainer: {
    height: '4%',
    flexDirection: 'row',
  },
  checkbox: {
    alignSelf: 'center',
  },
  containerBot: {
    width: '100%',
    height: '7%',
    bottom: '-1%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    height: '100%',
  },
  policyStyles: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.Light,
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
  },
});
export default SignUp;
