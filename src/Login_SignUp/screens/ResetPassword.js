import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import HeaderWithBack from '../components/Header/HeaderWithBack.js';
import HeaderTitlle from '../components/Header/HeaderTitlle.js';
import HederContent from '../components/Header/HederContent.js';
import PasswordCard from '../components/Cards/PasswordCard.js';
import CustomButton from '../components/Buttons/CustomButton.js';
import {firebase, Firestore} from '../../../Firebase/firebase.js';

const ResetPassword = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');

  // const [oldPassword, setOldPassword] = useState('');
  // const [newPassword, setNewPassword] = useState('');

  const constructor = props => {
    // super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
    };
  };

  const reauthenticate = oldPassword => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      oldPassword,
    );
    return user.reauthenticateWithCredential(cred);
  };

  const onChangePasswordPress = () => {
    this.reauthenticate(this.state.oldPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(this.state.newPassword)
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
      <HeaderWithBack onPress={() => navigation.goBack()} />
      <View style={[styles.topContainer, styles.unitContainer]}>
        <HeaderTitlle title="Reset Password" />
        <HederContent content="Your dentify has been vertified" />
        <HederContent content="Create your new password" />
      </View>

      <View style={[styles.centerContainer, styles.unitContainer]}>
        <View style={{width: '100%', height: '50%'}}>
          <PasswordCard
            title="New Password"
            txtInput="********"
            onChangeText={text => {
              this.setState({oldPassword: text});
            }}
          />
        </View>

        <View style={{width: '100%', height: '50%'}}>
          <PasswordCard
            title="Confirm your new Password"
            txtInput="********"
            onChangeText={text => {
              this.setState({newPassword: text});
            }}
          />
        </View>
      </View>

      <View style={[styles.botContainer, styles.unitContainer]}>
        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <HederContent content="I lost my phone and I cant receive the code" />
          <TouchableOpacity>
            <Text style={styles.italicText}>Help center</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <CustomButton
            type="primary"
            text="Continue"
            onPress={this.onChangePasswordPress}
            // onPress={() => navigation.navigate('SmartOTP')}
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
    height: '15%',
    top: '1%',
  },
  centerContainer: {
    height: '30%',
    top: '7%',
  },
  botContainer: {
    height: '17%',
    bottom: '-20%',
  },
  italicText: {
    fontFamily: FONT_FAMILY.MediumItalic,
    fontSize: 15,
    color: CUSTOM_COLOR.Black,
    fontStyle: 'italic',
  },
});
export default ResetPassword;
