import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors.js';
import FONT_FAMILY from '../../constants/fonts.js';

const TextInputCard = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <Text style={styles.topText}>
              {this.props.text}
        </Text>
      </View>

      <View style={{flex: 1}}>
      </View>

      <View style={{flex: 3}}>
        <TextInput style={styles.txtInput}>
          placeholder= {this.props.textInput}
        </TextInput>
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
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
