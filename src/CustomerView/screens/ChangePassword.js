import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { firebase } from '../../../Firebase/firebase.js';
import { IMG_Rectangle182 } from '../../Login_SignUp/assets/images/index.js';
import CustomButton from '../../Login_SignUp/components/Buttons/CustomButton.js';
import PasswordCard from '../../Login_SignUp/components/Cards/PasswordCard.js';
import HeaderTitlle from '../../Login_SignUp/components/Header/HeaderTitlle.js';
import HeaderWithBack from '../../Login_SignUp/components/Header/HeaderWithBack.js';
import CUSTOM_COLOR from '../../Login_SignUp/constants/colors.js';
import FONT_FAMILY from '../../Login_SignUp/constants/fonts.js';

const ChangePassword = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //   const constructor = props => {
  //     // super(props);
  //     this.state = {
  //       oldPassword: '',
  //       newPassword: '',
  //     };
  //   };

  const reauthenticate = oldPassword => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      oldPassword,
    );
    return user.reauthenticateWithCredential(cred);
  };

  const onChangePasswordPress = newPassword => {
    reauthenticate(oldPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(newPassword)
          .then(() => {
            Alert.alert('Your password has been changed');
          })
          .catch(error => {
            Alert.alert(error.message);
          });
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMG_Rectangle182}
        resizeMode="cover"
        style={styles.container}>
        <View style={{width: '100%', height: 20}} />
        <HeaderWithBack onPress={() => navigation.goBack()} />
        <View style={[styles.topContainer, styles.unitContainer]}>
          <HeaderTitlle title="Change Password" />
          {/* <HederContent content="Your dentify has been vertified" />
        <HederContent content="Create your new password" /> */}
        </View>

        <View style={[styles.centerContainer, styles.unitContainer]}>
          <View style={{flex: 1}}>
            <PasswordCard
              title="Old Password*"
              txtInput="********"
              onChangeText={oldPassword => setOldPassword(oldPassword)}
            />
          </View>

          <View style={{flex: 1}}>
            <PasswordCard
              title="New Password*"
              txtInput="********"
              onChangeText={newPassword => setNewPassword(newPassword)}
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

        <View style={[styles.botContainer, styles.unitContainer]}>
          {/* <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <HederContent content="I lost my phone and I cant receive the code" />
          <TouchableOpacity>
            <Text style={styles.italicText}>Help center</Text>
          </TouchableOpacity>
        </View> */}
          <View style={{flex: 1, alignItems: 'center'}}>
            <CustomButton
              type="primary"
              text="Continue"
              onPress={() => {
                //   onChangePasswordPress(newPassword);
                if (newPassword === oldPassword) {
                  alert('New password have been not match with old password');
                } else if (newPassword === confirmPassword) {
                  onChangePasswordPress(newPassword);
                  navigation.goBack();
                } else {
                  alert('Corfirm password not match with password');
                }
              }}
              // onPress={this.onChangePasswordPress}
              // onPress={() => navigation.navigate('SmartOTP')}
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
    backgroundColor: CUSTOM_COLOR.White,
  },
  unitContainer: {
    width: '80%',
    marginHorizontal: '10%',
    justifyContent: 'center',
  },
  topContainer: {
    height: '10%',
    top: '1%',
  },
  centerContainer: {
    flexDirection: 'column',
    height: 300,
    top: '5%',
  },
  botContainer: {
    height: 70,
    top: '10%',
  },
  italicText: {
    fontFamily: FONT_FAMILY.MediumItalic,
    fontSize: 15,
    color: CUSTOM_COLOR.Black,
    fontStyle: 'italic',
  },
});
export default ChangePassword;
