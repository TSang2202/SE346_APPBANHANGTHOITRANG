import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import HeaderWithBack from '../components/HeaderWithBack.js';
import HeaderTitlle from '../components/HeaderTitlle.js';
import TextInputCard from '../components/TextInputCard.js';
import CustomButton from '../components/CustomButton.js';
import PasswordCard from '../components/PasswordCard.js';
import HederContent from '../components/HederContent.js';
import CheckBox from '@react-native-community/checkbox';
import FONT_FAMILY from '../constants/fonts.js';
import CUSTOM_COLOR from '../constants/colors.js';
import {firebase} from '../../../Firebase/firebase.js';

const AddAccount = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setuserType] = useState('customer');

  const signUp = async (
    fullName,
    email,
    phoneNumber,
    birth,
    password,
    userType,
  ) => {
    try {
      const userCredentials = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully:', userCredentials.user);

      await firebase
        .firestore()
        .collection('NGUOIDUNG')
        .doc(userCredentials.user.uid)
        .set({
          TenND: fullName,
          Email: email,
          Phone: phoneNumber,
          NgaySinh: birth,
          MaND: userCredentials.user.uid,
          LoaiND: userType,
        });
      console.log('Push data user successfully:', userCredentials.user.uid);
    } catch (error) {
      console.log('Error registering user: ', error);
      alert(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBack onPress={() => navigation.goBack()} />
      <View style={[styles.topContainer, styles.unitContainer]}>
        <HeaderTitlle title="Add new account" />
      </View>
      <View style={[styles.bodyContainer, styles.unitContainer]}>
        <View style={{flex: 1}}>
          <TextInputCard
            title="Full name*"
            txtInput="Nguyen Van A"
            onChangeText={fullName => setFullName(fullName)}
          />
        </View>

        <View style={{flex: 1}}>
          <TextInputCard
            title="Email*"
            txtInput="abc@gmail.com"
            onChangeText={email => setEmail(email)}
            keyboardType="email-address"
          />
        </View>

        <View style={{flex: 1}}>
          <TextInputCard
            title="Phone number"
            txtInput="03333333333"
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          />
        </View>

        <View style={{flex: 1}}>
          <TextInputCard
            title="Day of birth"
            txtInput="dd/mm/yy"
            onChangeText={birth => setBirth(birth)}
          />
        </View>

        <View style={{flex: 1}}>
          <PasswordCard
            title="Password*"
            txtInput="********"
            onChangeText={password => setPassword(password)}
          />
        </View>

        <View style={{flex: 1}}>
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
          style={{flex: 2, justifyContent: 'center', alignItems: 'flex-end'}}>
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
            text="Add new account"
            onPress={() => {
              if (password === confirmPassword) {
                signUp(fullName, email, phoneNumber, birth, password, userType);
                navigation.navigate('Congratulation');
              } else {
                alert('Corfirm password not match with password');
              }
            }}
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
    width: '100%',
    height: '100%',
  },
  policyStyles: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.Light,
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
  },
});
export default AddAccount;
