import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import PromotionButton from '../components/PromotionButton';
import PromotionCard from '../components/PromotionCard';
import CUSTOM_COLOR from '../constants/colors';

const Promotion = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', height: 10}} />

      <>
        <View style={styles.headerContainer}>
          <CustomHeader onPress={() => navigation.goBack()} title="Promotion" />
        </View>
      </>

      <View style={{width: '100%', height: 5}} />

      <>
        <View style={styles.listViewContainer}>
          <PromotionCard />

          {/* flatlist */}
        </View>
      </>

      <View style={{width: '100%', height: 10}} />

      <>
        <View style={styles.buttonContainer}>
          <View style={styles.unitButton}>
            <PromotionButton
              type="secondary"
              text="Add new"
              onPress={() => {
                navigation.navigate('AddPromotion');
              }}
            />
          </View>

          <View style={{width: '15%', height: '100%'}} />

          <View style={styles.unitButton}>
            <PromotionButton
              type="secondary"
              text="Delete"
              onPress={() => {}}
            />
          </View>
        </View>
      </>
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
    marginHorizontal: '5%',
  },
  listViewContainer: {
    width: '100%',
    height: '75%',
  },
  buttonContainer: {
    width: '90%',
    height: '10%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unitButton: {
    width: '40%',
    height: '80%',
  },
});

export default Promotion;
