import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
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

const SignIn = props => {
  const {navigation} = props;

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const loginUser = async (email, password) => {
  //   try {
  //     await firebase.auth().signInWithEmailAndPassword(email, password);

  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

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
    }
  };

  // const loginUser = (email, password) => {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       // Sign-in successful
  //       console.log('Sign-in successful');
  //       Alert.alert('Sign-in successful');
  //     })
  //     .catch(error => {
  //       // Handle sign-in error
  //       Alert.alert('Error', error.message);
  //     });
  // };

  // const [dataUser, setDataUser] = useState();

  // const getDataUser = async userId => {
  //   const docRef = doc(Firestore, 'NGUOIDUNG', userId);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log('Document data:', docSnap.data());
  //     setDataUser(docSnap.data());
  //   } else {
  //     console.log('No such document!');
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBack onPress={() => navigation.goBack()} />
      <View style={[styles.unitContainer, {height: 100}]}>
        <HeaderTitlle title="Sign in" />
      </View>

      <View style={[styles.unitContainer, styles.bodyContainer]}>
        <View style={{flex: 2}}>
          <TextInputCard
            title="Email*"
            txtInput="abc@gmail.com"
            onChangeText={email => setEmail(email)}
            keyboardType="email-address"
          />
        </View>

        <View style={{flex: 2}}>
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

      <View style={styles.containerBot}>
        <View style={styles.button}>
          <CustomButton
            type="primary"
            text="Sign in"
            onPress={() => {
              loginUser(email, password);
            }}
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
    height: 270,
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
