import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import HeaderWithBack from '../components/Header/HeaderWithBack.js';
import CustomButton from '../components/Buttons/CustomButton.js';
import TextInputCard from '../components/Cards/TextInputCard.js';
import PasswordCard from '../components/Cards/PasswordCard.js';
import HeaderTitlle from '../components/Header/HeaderTitlle.js';
import HederContent from '../components/Header/HederContent.js';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import {firebase, Firestore} from '../../../Firebase/firebase.js';
import {doc, getDoc} from 'firebase/firestore';
import {IMG_Rectangle182} from '../assets/images/index.js';

const SignIn = props => {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (email, password) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log('User signed in successfully!', response.user.uid);
    } catch (error) {
      console.log('Error signing in:', error.message);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMG_Rectangle182}
        resizeMode="cover"
        style={styles.container}>
        <View style={{width: '100%', height: 10}} />
        <HeaderWithBack onPress={() => navigation.goBack()} />
        <View style={[styles.unitContainer, {height: 50}]}>
          <HeaderTitlle title="Sign in" />
        </View>

        <View style={{width: '100%', height: '5%'}} />

        <View style={[styles.unitContainer, styles.bodyContainer]}>
          <View style={{width: '100%', height: 110}}>
            <TextInputCard
              title="Email*"
              txtInput="abc@gmail.com"
              onChangeText={email => setEmail(email)}
              keyboardType="email-address"
            />
          </View>

          <View style={{width: '100%', height: 110}}>
            <PasswordCard
              title="Pasword*"
              txtInput="********"
              onChangeText={password => setPassword(password)}
            />
          </View>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.contentStyle}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>

        <>
          <View style={{width: '80%', height: 65, marginHorizontal: '10%'}}>
            <View style={styles.buttonContainer}>
              <CustomButton
                type="primary"
                text="Sign in"
                onPress={() => {
                  loginUser(email, password);
                }}
              />
            </View>
          </View>
        </>

        <View style={[styles.unitContainer, styles.botContainer]}>
          <View
            style={{flex: 5, justifyContent: 'center', alignItems: 'flex-end'}}>
            <HederContent content="Don't you have an account ? " />
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.contentStyle}>Sign up</Text>
            </TouchableOpacity>
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
  bodyContainer: {
    height: 270,
    flexDirection: 'column',
  },
  containerBot: {
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '200%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    left: '-50%',
  },
  botContainer: {
    height: '5%',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  contentStyle: {
    fontFamily: FONT_FAMILY.Light,
    fontSize: 15,
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
  },
});
export default SignIn;
