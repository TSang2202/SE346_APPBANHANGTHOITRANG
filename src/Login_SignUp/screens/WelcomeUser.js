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
import AppIntroSlider from 'react-native-app-intro-slider';
import MainNavigator from '../navigation/navigation.js';
// import scale from '../../constants/reponsive.js';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import {IMG_PexelsPhotobyRioKuncoro} from '../assets/images/index.js';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const slines = [
  {
    id: 1,
    image: IMG_PexelsPhotobyRioKuncoro,
    title: 'Learn anytime\nand anywhere',
    description:
      'Quarantine is the perfect time to spend your\nday learning something new, from anywhere!',
  },
  {
    id: 2,
    image: IMG_PexelsPhotobyRioKuncoro,
    title: 'Find a course\n\t\t\tfor you',
    description:
      'Quarantine is the perfect time to spend your\nday learning something new, from anywhere!',
  },
  {
    id: 3,
    image: IMG_PexelsPhotobyRioKuncoro,
    title: '\nImprove your skills',
    description:
      'Quarantine is the perfect time to spend your\nday learning something new, from anywhere!',
  },
];


const WelcomeUser = props => {
  // const [showNextPage, setshowNextPage] = useState(false);
  // const buttonLabel = label => {
  //   return (
  //     <View style={styles.Next_button}>
  //       <Text style={styles.Text_button}>{label}</Text>
  //     </View>
  //   );
  // };
  // const buttonSkip = label => {
  //   return (
  //     <View style={styles.Skip_button}>
  //       <Text style={styles.Text_Skip}>{label}</Text>
  //     </View>
  //   );
  // };
  // if (!showNextPage) {
  //   return (
  //     <View style={styles.Container}>
  //       <AppIntroSlider
  //         data={slines}
  //         renderItem={({item}) => {
  //           return (
  //             <View style={styles.Item1}>
  //               <Image
  //                 source={item.image}
  //                 style={styles.Item2}
  //                 resizeMode="contain"
  //               />
  //               <Text style={styles.Item3}>{item.title}</Text>
  //               <Text style={styles.Item4}>{item.description}</Text>
  //             </View>
  //           );
  //         }}
  //         activeDotStyle={{
  //           backgroundColor: CUSTOM_COLOR.LightBlue,
  //           width: SCALE.reSizeWidth(18),
  //           height: SCALE.reSizeHeight(8),
  //         }}
  //         showSkipButton
  //         renderNextButton={() => buttonLabel('Next')}
  //         renderSkipButton={() => buttonSkip('Skip')}
  //         renderDoneButton={() => buttonLabel("Let's Start")}
  //         onDone={() => {
  //           setshowNextPage(true);
  //         }}
  //       />
  //     </View>
  //   );
  // }
  // return <MainNavigator></MainNavigator>;
};
const styles = StyleSheet.create({
  // Skip_button: {
  //   width: scale.reSizeWidth(40), 
  //   height: scale.reSizeHeight(24),
  //   left: scale.reSizeWidth(330),
  //   top: scale.reSizeHeight(-580),
    
  // },
  // Text_Skip: {
  //   textAlign: 'center',
  //   color: CUSTOM_COLOR.LightGray,
  //   fontSize: 14,
  //   fontFamily: FONT_FAMILY.Regular,
  // },
  // Next_button: {
  //   width: scale.reSizeWidth(310),
  //   height: scale.reSizeHeight(56),
  //   padding: 10,
  //   backgroundColor: CUSTOM_COLOR.Orange,
  //   borderRadius: 16,
  //   top: scale.reSizeHeight(120),
  //   right: scale.reSizeWidth(32),
  // },
  // Text_button: {
  //   textAlign: 'center',
  //   color: CUSTOM_COLOR.White,
  //   fontWeight: 'bold',
  //   fontSize: 16,
  //   fontFamily: FONT_FAMILY.Black,
  // },
  // Container: {
  //   height: scale.reSizeHeight(720),
  //   width: '100%',
  // },
  // Item1: {
  //   flex: 1,
  //   alignItems: 'center',
  //   padding: 16,
  //   paddingTop: scale.reSizeHeight(100),
  // },
  // Item2: {
  //   width: scale.devicesWidth,
  //   height: scale.reSizeHeight(400),
  // },
  // Item3: {
  //   fontWeight: "bold",
  //   color: CUSTOM_COLOR.Black,
  //   fontSize: 24,
  //   fontFamily: FONT_FAMILY.Bold,
  // },
  // Item4: {
  //   textAlign: 'center',
  //   paddingTop: scale.reSizeHeight(8),
  //   color: CUSTOM_COLOR.RegularGray,
  //   fontSize: 14,
  //   fontFamily: FONT_FAMILY.Regular,
  // }
});
export default WelcomeUser;
