import React, { useState } from 'react';
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
import { IMG_Rectangle182 } from '../assets/images/index.js';
import PasswordCard from '../components/Cards/PasswordCard.js';
import HederContent from '../components/Header/HederContent.js';
import CheckBox from '@react-native-community/checkbox';
import FONT_FAMILY from '../constants/fonts.js';
import CUSTOM_COLOR from '../constants/colors.js';
import { firebase } from '../../../Firebase/firebase.js';
import { useNavigation } from '@react-navigation/native';
//import {  ref, set } from "firebase/database";
//import {db} from '../../../Firebase/firebase';

const SignUp = props => {
  const { navigation } = props;
  const [status, setStatus] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const user = true;

  const signUp = async (
    fullName,
    email,
    phoneNumber,
    birth,
    password,
    user,
  ) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: 'http://shoppingapp-ada07.firebaseapp.com',
          })
          .then(() => {
            alert('Verification email sent');
          })
          .catch(error => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection('NGUOIDUNG')
              .doc(firebase.auth().currentUser.uid)
              .set({
                TenND: fullName,
                Email: email,
                Phone: phoneNumber,
                NgaySinh: birth,
                MaND: firebase.auth().currentUser.uid,
                LoaiND: user,
              });
          })
          .catch(error => {
            alert(error.message);
          });
      })
      .catch(error => {
        alert(error.message);
      });
  };

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
          <View style={{ flex: 1 }}>
            <TextInputCard
              title="Full name*"
              txtInput="Nguyen Van A"
              onChangeText={fullName => setFullName(fullName)}
            />
          </View>

          <View style={{ flex: 1 }}>
            <TextInputCard
              title="Email*"
              txtInput="abc@gmail.com"
              onChangeText={email => setEmail(email)}
              keyboardType="email-address"
            />
          </View>

          <View style={{ flex: 1 }}>
            <TextInputCard
              title="Phone number"
              txtInput="03333333333"
              onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
            />
          </View>

          <View style={{ flex: 1 }}>
            <TextInputCard
              title="Day of birth"
              txtInput="dd/mm/yy"
              onChangeText={birth => setBirth(birth)}
            />
          </View>

          <View style={{ flex: 1 }}>
            <PasswordCard
              title="Password*"
              txtInput="********"
              onChangeText={password => setPassword(password)}
            />
          </View>

          <View style={{ flex: 1 }}>
            <PasswordCard
              title="Confirm Password*"
              txtInput="********"
              onChangeText={corfirmPassword =>
                setConfirmPassword(corfirmPassword)
              }
            />
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
            style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end' }}>
            <HederContent content="I agree with this " />
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
              onPress={() => {
                if (password === confirmPassword) {
                  signUp(fullName, email, phoneNumber, birth, password, user);
                  navigation.navigate('Congratulation');
                } else {
                  alert('Corfirm password not match with password');
                }
              }}
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
    height: 50,
    top: '-1%',
    left: '3%',
  },
  bodyContainer: {
    height: 480,
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
