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

      <View style={{flex: 3, borderRadius: 20, backgroundColor: CUSTOM_COLOR.Mercury}}>
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
    width: '100%',
    height: '100%',
    // margin: '5%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.Black,
    left: '4%',
  },
  txtInput: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.Semibold,
    color: CUSTOM_COLOR.Black,
    left: '4%',
  },
});
export default TextInputCard;
