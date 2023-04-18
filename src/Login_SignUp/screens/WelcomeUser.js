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
import {IMG_PexelsPhotobyJeysTubianosa} from '../assets/images/index.js';
import {IC_Ellipse1, IC_Ellipse2} from '../assets/icons/index.js';
import {CustomButton} from '../components/Buttons/CustomButton.js';

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
        <ImageBackground source={IMG_PexelsPhotobyJeysTubianosa} resizeMode="cover" style={styles.image}>
          <View style={styles.containerBottom}>
            <>
            <View style={styles.containerBottom}>
              <Text>Level Up Your Style</Text>
              <Text>This is scription for all of the app </Text>
            </View>
            </>

            <>
            <View>
              <Image
                  source={IC_Ellipse1}
                  style={{width: '100%', height: '100%'}}
              />
            </View>
            </>

            <>
            <View>
              <CustomButton>
              type="primary"
              text="Continue"
              onPress={() => navigation.navigate('Intro')}
              </CustomButton>
            </View>
            </>

            <>
            </>

            <>
            </>
          </View>
        </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  containerBottom: {
    backgroundColor: CUSTOM_COLOR.White,
    width: '90%',
    height: '40%',
    borderRadius: 39,
    marginHorizontal: '5%',
    bottom: '-25%',
  }
});
export default WelcomeUser;
