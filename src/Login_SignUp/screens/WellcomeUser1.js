import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {IMG_PexelsPhotobyMarleneLeppanen} from '../assets/images/index.js';
import {IC_Ellipse1, IC_Ellipse2} from '../assets/icons/index.js';
import WellcomeCard from '../components/Cards/WellcomeCard.js';

const WellcomeUser1 = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <WellcomeCard
        image={IMG_PexelsPhotobyMarleneLeppanen}
        title="Fantastic And Modern"
        content="This is scription for all of the app"
        image1={IC_Ellipse1}
        image2={IC_Ellipse2}
        image3={IC_Ellipse2}
        text="Continue"
        onPress={() => navigation.navigate('WellcomeUser2')}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default WellcomeUser1;
