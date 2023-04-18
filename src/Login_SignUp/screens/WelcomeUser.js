import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import {IMG_PexelsPhotobyRioKuncoro} from '../assets/images/index.js';
import {IC_Line} from '../assets/icons/index.js';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const WelcomeUser = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={IMG_PexelsPhotobyRioKuncoro} resizeMode="cover" style={styles.image}>
        </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.ChathamsBlue,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default WelcomeUser;
