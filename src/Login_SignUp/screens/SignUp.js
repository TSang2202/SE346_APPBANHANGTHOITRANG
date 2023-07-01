import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Button,
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
import {firebase} from '../../../Firebase/firebase.js';
import CustomDialog from '../components/Cards/DialogCard.js';

const SignUp = props => {
  const {navigation} = props;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setuserType] = useState('customer');
  const [showDialog, setShowDialog] = useState(false);
  const [avatar, setAvatar] = useState(
    'https://firebasestorage.googleapis.com/v0/b/shoppingapp-ada07.appspot.com/o/images%2Fusers%2FuserCustomer.png?alt=media&token=16225e3a-c284-4a14-bdc6-710ae891f34b',
  );

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const isValidName = fullName => {
    if (fullName === '') {
      return false;
    }
    return true;
  };

  const isValidEmail = email => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = password => {
    // Password validation criteria
    // Add your own password validation logic here
    return password.length >= 8;
  };

  const [errorMessage, setErrorMessage] = useState('');

  const isValidForm = (
    fullName,
    email,
    password,
    corfirmPassword,
    toggleCheckBox,
  ) => {
    let isValid = true;

    if (!toggleCheckBox) {
      isValid = false;
      setShowDialog(true);
      setErrorMessage('Please check agree with policy');
    } else if (fullName === '') {
      isValid = false;
      setShowDialog(true);
      setErrorMessage('Please enter your full name');
    } else if (email === '') {
      isValid = false;
      setShowDialog(true);
      setErrorMessage('Please enter your email');
    } else if (password === '') {
      isValid = false;
      setShowDialog(true);
      setErrorMessage('Please enter your password');
    } else if (!isValidEmail(email)) {
      isValid = false;
      setShowDialog(true);
      setErrorMessage('Your email is not valid');
    } else if (!isValidPassword(password)) {
      isValid = false;
      setShowDialog(true);
      setErrorMessage('Your password must be longer than 8 characters');
    } else if (password != corfirmPassword) {
      isValid = false;
      setShowDialog(true);
      setErrorMessage('Corfirm password not match with password');
    } else if (corfirmPassword === '') {
      isValid = false;
      setShowDialog(true);
      setErrorMessage('Please enter your corfirm password');
    } else if (
      fullName === '' &&
      email === '' &&
      password === '' &&
      corfirmPassword === ''
    ) {
      isValid = false;
      setShowDialog(true);
      setErrorMessage('Please enter your information then click sign up');
    } else {
    }

    setShowDialog(false);
    return isValid;
  };

  const signUp = async (
    fullName,
    email,
    phoneNumber,
    birth,
    password,
    userType,
    avatar,
  ) => {
    try {
      const userCredentials = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully:', userCredentials.user);
      navigation.navigate('Congratulation');
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
          Avatar: avatar,
        });
      console.log('Push data user successfully:', userCredentials.user.uid);
    } catch (error) {
      console.log('Error registering user: ', error);
      Alert.alert('Error', error.message);
    }
  };

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
            <TextInputCard
              title="Full name*"
              txtInput="Nguyen Van A"
              value={fullName}
              onChangeText={fullName => setFullName(fullName)}
            />
          </View>

          <View style={{flex: 1}}>
            <TextInputCard
              title="Email*"
              txtInput="abc@gmail.com"
              onChangeText={email => setEmail(email)}
              keyboardType="email-address"
              value={email}
            />
          </View>

          <View style={{flex: 1}}>
            <TextInputCard
              title="Phone number"
              txtInput="03333333333"
              value={phoneNumber}
              onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
            />
          </View>

          <View style={{flex: 1}}>
            <TextInputCard
              title="Day of birth"
              txtInput="dd/mm/yy"
              value={birth}
              onChangeText={birth => setBirth(birth)}
            />
          </View>

          <View style={{flex: 1}}>
            <PasswordCard
              title="Password*"
              txtInput="********"
              value={password}
              onChangeText={password => setPassword(password)}
            />
          </View>

          <View style={{flex: 1}}>
            <PasswordCard
              title="Confirm Password*"
              txtInput="********"
              value={confirmPassword}
              onChangeText={corfirmPassword =>
                setConfirmPassword(corfirmPassword)
              }
            />
          </View>
        </View>

        <View style={[styles.checkContainer, styles.unitContainer]}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <HederContent content="I agree with this " />
          <TouchableOpacity onPress={() => navigation.navigate('Policy')}>
            <Text style={styles.policyStyles}>Policy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerBot}>
          <View style={styles.button}>
            <CustomButton
              type="primary"
              text="Sign up now"
              onPress={() => {
                if (
                  isValidForm(
                    fullName,
                    email,
                    password,
                    confirmPassword,
                    toggleCheckBox,
                  )
                ) {
                  signUp(
                    fullName,
                    email,
                    phoneNumber,
                    birth,
                    password,
                    userType,
                    avatar,
                  );
                } else {
                  Alert.alert('Error', errorMessage);
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
    alignItems: 'center',
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
