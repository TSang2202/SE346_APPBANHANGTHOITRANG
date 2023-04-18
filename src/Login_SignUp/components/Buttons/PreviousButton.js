import React from 'react';
import {IC_Previous} from '../../assets/icons/index.js';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

class PreviousButton extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.props.onPress}>
            <IC_Previous />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default PreviousButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
