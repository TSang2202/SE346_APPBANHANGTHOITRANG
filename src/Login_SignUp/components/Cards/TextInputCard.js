import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors.js';
import FONT_FAMILY from '../../constants/fonts.js';

const TextInputCard = props => {
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <Text style={styles.topText}>
          {props.title}
        </Text>
      </View> 

      <View style={{flex: 1}} />

      <View style={{flex: 3}}>
        <TextInput
          style={styles.txtInput}
          placeholder={props.textInput}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '15%',
    margin: '5%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  topText: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.White,
  },
  txtInput: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.White,
    borderRadius: 20,
  },
});
export default TextInputCard;
