import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import PromotionButton from '../components/PromotionButton';
import { border_add } from '../assets/images';
import { Dropdown } from 'react-native-element-dropdown';
import FONT_FAMILY from '../constants/fonts.js';
import CUSTOM_COLOR from '../constants/colors.js';

const ImportProduct = props => {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [danhMuc, setDanhMuc] = useState([]);
  const [value, setValue] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%', height: 10 }} />

      <>
        <View style={styles.headerContainer}>
          <CustomHeader
            onPress={() => navigation.goBack()}
            title="Product/ Add new product"
          />
        </View>
      </>

      <View style={{ width: '100%', height: 50 }} />

      <>
        <View style={styles.bodyContainer}>
          <>
            <View style={[styles.comboxContainer, { height: 110 }]}>
              <View style={{ width: '100%', height: 10 }} />
              <View style={[styles.unitComboContainer, { height: '20%' }]}>
                <Text style={styles.titleInputStyle}>Categorize</Text>
                <Text
                  style={[styles.titleInputStyle, { color: CUSTOM_COLOR.Red }]}>
                  {' '}
                  *
                </Text>
              </View>
              <View
                style={[
                  styles.unitComboContainer,
                  {
                    justifyContent: 'center',
                    height: '70%',
                  },
                ]}>
                <Dropdown
                  style={[styles.comboType, isFocus && { borderColor: 'blue' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={danhMuc}
                  search
                  maxHeight={200}
                  labelField="TenDM"
                  valueField="key"
                  placeholder={!isFocus ? 'Select item' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.key);
                    setIsFocus(false);
                    setCategorize(item);
                  }}
                />
              </View>
            </View>
          </>

          <View style={{ width: '100%', height: 20 }} />

          <>
            <View style={[styles.comboxContainer, { height: 110 }]}>
              <View style={{ width: '100%', height: 10 }} />
              <View style={[styles.unitComboContainer, { height: '20%' }]}>
                <Text style={styles.titleInputStyle}>Product</Text>
                <Text
                  style={[styles.titleInputStyle, { color: CUSTOM_COLOR.Red }]}>
                  {' '}
                  *
                </Text>
              </View>
              <View
                style={[
                  styles.unitComboContainer,
                  {
                    justifyContent: 'center',
                    height: '70%',
                  },
                ]}>
                <Dropdown
                  style={[styles.comboType, isFocus && { borderColor: 'blue' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={danhMuc}
                  search
                  maxHeight={200}
                  labelField="TenDM"
                  valueField="key"
                  placeholder={!isFocus ? 'Select item' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.key);
                    setIsFocus(false);
                    setCategorize(item);
                  }}
                />
              </View>
            </View>
          </>

          <View style={{ width: '100%', height: 20 }} />

          <>
            <View style={[styles.comboxContainer, { height: 110 }]}>
              <View style={{ width: '100%', height: 10 }} />
              <View style={[styles.unitComboContainer, { height: '20%' }]}>
                <Text style={styles.titleInputStyle}>Quantiy</Text>
                <Text
                  style={[styles.titleInputStyle, { color: CUSTOM_COLOR.Red }]}>
                  {' '}
                  *
                </Text>
              </View>
              <View
                style={[
                  styles.unitComboContainer,
                  {
                    justifyContent: 'center',
                    height: '70%',
                  },
                ]}>
                <TextInput
                  style={styles.comboType}
                  onChangeText={text => setName(text)}
                  value={name}
                />
              </View>
            </View>
          </>

          <View style={{ width: '100%', height: 50 }} />

          <>
            <View style={styles.buttonContainer}>
              <PromotionButton
                type="secondary"
                text="Save"
              // onPress={() => {
              //   navigation.navigate('AddPromotion');
              // }}
              />
            </View>
          </>
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
  bodyContainer: {
    width: '90%',
    height: '85%',
    marginHorizontal: '5%',
  },
  titleInputStyle: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 17,
  },
  comboxContainer: {
    width: '100%',
    elevation: 1.5,
    borderRadius: 0.5,
    shadowColor: CUSTOM_COLOR.Black,
    flexDirection: 'column',
  },
  unitComboContainer: {
    width: '90%',
    marginHorizontal: '5%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  comboType: {
    width: '100%',
    height: '70%',
    borderColor: CUSTOM_COLOR.MineShaft,
    borderWidth: 0.5,
    borderRadius: 1,
    paddingHorizontal: '5%',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    width: '90%',
    height: 60,
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ImportProduct;
