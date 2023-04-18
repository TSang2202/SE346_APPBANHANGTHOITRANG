import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const ForgotPassword = props => {
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
});
export default ForgotPassword;
