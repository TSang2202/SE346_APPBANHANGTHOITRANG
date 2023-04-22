import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import WellcomeCard from '../components/Cards/WellcomeCard';
import { IMG_PexelsPhotobyJeysTubianosa, IMG_PexelsPhotobyMarleneLeppanen, IMG_PexelsPhotobyRAULREYNOSO } from '../assets/images';
import { IC_Ellipse1, IC_Ellipse2 } from '../assets/icons/index.js';

const slines = [
  {
    id: 1,
    image: {IMG_PexelsPhotobyMarleneLeppanen},
    title: "Fantastic And Modern",
    content: "This is scription for all of the app",
    image1: {IC_Ellipse1},
    image2: {IC_Ellipse2},
    image3: {IC_Ellipse2},
    text: "Continue",
    // onPress={() => navigation.navigate('SignIn')},
},
  {
    id: 2,
    image: {IMG_PexelsPhotobyRAULREYNOSO},
    title: "Change your mind",
    content: "This is scription for all of the app ",
    image1: {IC_Ellipse2},
    image2: {IC_Ellipse1},
    image3: {IC_Ellipse2},
    text: "Continue",
    // onPress={() => navigation.navigate('SignIn')},
},
  {
    id: 3,
    image: {IMG_PexelsPhotobyJeysTubianosa},
    title: "Level Up Your Style",
    content: "Are your ready to make differences ?",
    image1: {IC_Ellipse2},
    image2: {IC_Ellipse2},
    image3: {IC_Ellipse1},
    text: "Get Started",
    // onPress={() => navigation.navigate('SignIn')},
},
];


const WelcomeUser = props => {
const {navigation} = props;
const [status, setStatus] = useState('');
return (
    <SafeAreaView style={styles.container}>
      <WellcomeCard 
        image={IMG_PexelsPhotobyJeysTubianosa}
        title="Level Up Your Style"
        content="Are your ready to make differences ?"
        image1={IC_Ellipse1}
        image2={IC_Ellipse1}
        image3={IC_Ellipse2}
        text="Get Started"
        onPress={() => navigation.navigate('SignIn')}
      />

    </SafeAreaView>
    );
};
const styles = StyleSheet.create({
container: {
  flex: 1,
},

});
export default WelcomeUser;
