import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CUSTOM_COLOR from '../.././constants/colors.js';
import {IC_previous} from '../.././assets/images/index.js';
import PreviousButton from '../Buttons/PreviousButton.js';

const HeaderWithBack = props => {
  return (
    <View style={styles.header}>
      <PreviousButton onPress={props.onPress}> </PreviousButton>
      {/* <TouchableOpacity style={styles.buttonPreVious} onPress={props.onPress}>
        <Image source={IC_previous} />
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    left: '4%',
  },
});
export default HeaderWithBack;
