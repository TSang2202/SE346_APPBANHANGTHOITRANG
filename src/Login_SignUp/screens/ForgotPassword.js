import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text, TextInput} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import TextInputCrad from '../components/Cards/TextInputCard.js';
import CustomButton from '../components/Buttons/CustomButton.js';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PreviousButton from '../components/Buttons/PreviousButton.js';

const ForgotPassword = props => {
    const {navigation} = props;
    const [status, setStatus] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <PreviousButton>
                    onPress={() => navigation.navigate('SignIn')}
                </PreviousButton>
            </View>
            {/* <TextInputCrad>
              title="Enter your account phone number"
              textInput="033333333"
            </TextInputCrad> */}

          {/* <View style={styles.containerBot}>
              <View style={styles.button}>
                  <CustomButton
                      type="primary"
                      text="Continue"
                      onPress={() => navigation.navigate('SmartOTP')}
                  />
              </View>
          </View> */}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
container: {
    flex: 1,
},
headerContainer: {
    width: '100%',
    height: '10%',
    backgroundColor: 'blue',
},
containerBot: {
    width: '100%',
    height: '10%',
    bottom: '-40%',
    alignItems: 'center',
    justifyContent: 'center',
},
button: {
    width: '100%',
    height: '100%',
},
});
export default ForgotPassword;
