import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import HeaderWithBack from '../components/Header/HeaderWithBack.js';
import CustomButton from '../components/Buttons/CustomButton.js';
import TextInputCard from '../components/Cards/TextInputCard.js';
import PasswordCard from '../components/Cards/PasswordCard.js';
import HeaderTitlle from '../components/Header/HeaderTitlle.js';
import HederContent from '../components/Header/HederContent.js';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const auth = getAuth();

const SignIn = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');

  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: '',
  });

  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.',
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBack onPress={() => navigation.goBack()} />
      <View style={[styles.unitContainer, {height: '15%'}]}>
        <HeaderTitlle title="Sign in" />
      </View>

      <View style={[styles.unitContainer, styles.bodyContainer]}>
        <View style={{flex: 2}}>
          <TextInputCard title="Phone number*" txtInput="03333333333" />
        </View>

        <View style={{flex: 2}}>
          <PasswordCard title="Pasword*" txtInput="********" />
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.contentStyle}>Forgot Password</Text>
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
        <View
          style={{flex: 5, justifyContent: 'center', alignItems: 'flex-end'}}>
          <HederContent content="Don't you have an account ? " />
        </View>
        <View
          style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start'}}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.contentStyle}>Sign up</Text>
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
    top: '0%',
    flexDirection: 'column',
  },
  containerBot: {
    width: '100%',
    height: '10%',
    bottom: '-3%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
  },
  botContainer: {
    height: '15%',
    bottom: '0%',
    flexDirection: 'row',
  },
  contentStyle: {
    fontFamily: FONT_FAMILY.Light,
    fontSize: 15,
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
  },
});
export default SignIn;
