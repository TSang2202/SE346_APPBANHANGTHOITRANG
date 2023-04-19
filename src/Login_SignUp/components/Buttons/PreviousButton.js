import React from 'react';
import {IC_previous} from '../../assets/icons/index.js';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors.js';

class PreviousButton extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Image source={IC_previous} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default PreviousButton;

const styles = StyleSheet.create({
  container: {
    height: '70%',
    width: '12%',
    borderRadius: 38,
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Black,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CUSTOM_COLOR.Mercury,
  },
});
