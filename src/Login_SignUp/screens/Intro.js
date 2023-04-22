import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import {IMG_PexelsPhotobyRioKuncoro} from '../assets/images/index.js';
import {IC_Line} from '../assets/icons/index.js';

const Intro = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  return (
<SafeAreaView style={styles.container}>
        <ImageBackground source={IMG_PexelsPhotobyRioKuncoro} resizeMode="cover" style={styles.image}>
        <>
        <View style={styles.containeTop}>
          <View style={styles.viewTop}>
            <Image
                source={IC_Line}
                style={{width: '100%', height: '10%', top: '10%'}}
            />
            <Text style={styles.baseText}>
              FAUGET
            </Text>
          </View>

          <View style={styles.viewBot}>
            <View style={styles.flexbot}>
              <Image
              source={IC_Line}
              style={{width: '100%', height: '10%'}}
              />
            </View>

            <View style={styles.flexbot}>
              <Text style={styles.botBaseText}>
                CLOTHING
              </Text>
            </View>

            <View style={styles.flexbot}>
              <Image
              source={IC_Line}
              style={{width: '100%', height: '10%'}}
              />
            </View>
          </View>        
        </View>
        </>

        <>
        <View style={styles.containeBottom}>
          <Text style={styles.botText}>
            Build the better world in fashion
          </Text>
        </View>
        </>

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
  containeTop: {
    width: '90%',
    height: '25%',
    top: '-17%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTop:{
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
    height: '70%',
  },
  baseText: {
    fontSize: 85,
    fontWeight: 'bold',
    fontFamily: FONT_FAMILY.Regular,
    color: CUSTOM_COLOR.White,
  },
  viewBot: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
  },
  flexbot:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  botBaseText: {
    fontSize: 20,
    fontFamily: FONT_FAMILY.Semibold,
    color: CUSTOM_COLOR.White,
  },
  containeBottom: {
    width: '90%',
    height: '10%',
    bottom: '-28%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',    
  },
  botText: 
  {
    fontSize: 20,
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.White,
  }
});
export default Intro;
