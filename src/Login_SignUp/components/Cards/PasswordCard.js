import React from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors.js';
import FONT_FAMILY from '../../constants/fonts.js';
import { IC_visibility1 } from '../../assets/icons/index.js';

const PasswordCard = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>
        {props.title}
      </Text>

      <View style={styles.textInputContainer}>
        <View style={{flex: 5}}>
          <TextInput style={styles.textinputStyle}
            placeholder={props.txtInput}
            // placeholderTextColor='CUSTOM_COLOR.Black'
            secureTextEntry
            autoCorrect={false}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={IC_visibility1}
            style={{width: '60%', height: '60%', resizeMode: 'contain',}}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
container: {
  width: '100%',
  height: '100%',
  justifyContent: 'center',
},
titleStyle: {
  fontFamily: FONT_FAMILY.Medium,
  fontSize: 20,
  color: CUSTOM_COLOR.Black,
  left: '5%',
},
textInputContainer: {
  width: '100%',
  height: '50%',
  backgroundColor: CUSTOM_COLOR.Alto,
  borderRadius: 40,
  flexDirection: 'row',
},
textinputStyle: {
  fontFamily: FONT_FAMILY.Semibold,
  fontSize: 15,
  color: CUSTOM_COLOR.Black,
  left: '5%',
  justifyContent: 'center',
},
});
export default PasswordCard;
