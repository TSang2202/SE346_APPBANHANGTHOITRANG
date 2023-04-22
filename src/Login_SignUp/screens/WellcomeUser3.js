import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {IMG_PexelsPhotobyJeysTubianosa} from '../assets/images/index.js';
import { IC_Ellipse1, IC_Ellipse2 } from '../assets/icons/index.js';
import WellcomeCardEnd from '../components/Cards/WellcomeCardEnd.js';

const WellcomeUser3 = props => {
const {navigation} = props;
const [status, setStatus] = useState('');
return (
    <SafeAreaView style={styles.container}>
        <WellcomeCardEnd
            image={IMG_PexelsPhotobyJeysTubianosa}
            title="Level Up Your Style"
            content="Are your ready to make differences ?"
            image1={IC_Ellipse2}
            image2={IC_Ellipse2}
            image3={IC_Ellipse1}
            text="Get Started"
            onPress={() => navigation.navigate('SignUp')}
            onPress1={() => navigation.navigate('SignIn')}  
        />
    </SafeAreaView>
    );
};
const styles = StyleSheet.create({
container: {
    flex: 1,
},
}); 
export default WellcomeUser3;
