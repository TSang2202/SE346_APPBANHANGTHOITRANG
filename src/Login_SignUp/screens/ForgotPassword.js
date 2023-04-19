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

const ForgotPassword = props => {
    const {navigation} = props;
    const [status, setStatus] = useState('');
    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <CustomButton
          type="primary"
          text="Continue"
        //   onPress={() => navigation.navigate('ForgotPassword')}
        />
      </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'blue',
},
button: {
    width: '100%',
    height: '10%',
    top: -20,
  },

});
export default ForgotPassword;
