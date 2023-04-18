import React, {useState} from 'react';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';

const Done = props => {
    const {navigation} = props;
    const [status, setStatus] = useState('');
    return (
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerText: {
        width: '90%',
        height: '15%',
        marginHorizontal: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
}); 
export default Done;
