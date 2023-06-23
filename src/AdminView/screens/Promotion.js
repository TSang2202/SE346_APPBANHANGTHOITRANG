import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import CustomHeader from '../components/CustomHeader';

const Promotion = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomHeader onPress={() => navigation.goBack()} title="Promotion" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  headerContainer: {
    width: '90%',
    height: 70,
  },
});

export default Promotion;
