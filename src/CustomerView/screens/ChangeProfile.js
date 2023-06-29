import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
  TextInput,
  Platform,
  Button,
} from 'react-native';
import CUSTOM_COLOR from '../../AdminView/constants/colors';
import FONT_FAMILY from '../constants/fonts';
import CustomHeader from '../../AdminView/components/CustomHeader';
import {IMG_Rectangle} from '../../Login_SignUp/assets/images';
import {IC_User} from '../assets/icons';
import AccountInputCard from '../components/AccountInputCard';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

const ChangeProfile = props => {
  const {navigation} = props;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birth, setBirth] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [danhMuc, setDanhMuc] = useState([]);
  const [value, setValue] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [text, setText] = useState('01/01/2023');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios'); // Hide picker for iOS after selection
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);

    console.log(fDate);
  };

  const showDateTimePicker = () => {
    setShowPicker(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <TouchableOpacity style={styles.backgroundContainer}>
          <ImageBackground
            source={IMG_Rectangle}
            resizeMode="cover"
            style={styles.image}>
            <>
              <View style={styles.headerContainer}>
                <CustomHeader
                  onPress={() => navigation.goBack()}
                  title="Account/ Change Profile"
                />
              </View>
            </>

            <>
              <View style={styles.avataContainer}>
                <TouchableOpacity style={styles.avataStyle}>
                  <Image source={IC_User} style={styles.avataStyle} />
                </TouchableOpacity>
              </View>
            </>
          </ImageBackground>
        </TouchableOpacity>
      </>
      <View style={{width: '100%', height: '3%'}} />
      <>
        <View style={styles.bodyContainer}>
          <ScrollView style={{width: '100%', height: '100%'}}>
            <>
              <View style={[styles.inputContainer, {height: 90}]}>
                <View style={{width: '100%', height: 10}} />
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      {justifyContent: 'flex-start'},
                    ]}>
                    <View style={{width: '10%', height: '100%'}} />
                    <Text style={styles.titleInputStyle}>Full name</Text>
                    <Text
                      style={[
                        styles.titleInputStyle,
                        {color: CUSTOM_COLOR.Red},
                      ]}>
                      {' '}
                      *
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      {justifyContent: 'flex-end'},
                    ]}>
                    <Text style={styles.titleInputStyle}>0/200</Text>
                    <View style={{width: '10%', height: '100%'}} />
                  </View>
                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                  <View style={{width: '5%', height: '100%'}} />
                  <TextInput
                    style={{flex: 1, fontSize: 17}}
                    onChangeText={text => setFullName(text)}
                    value={fullName}
                  />
                  <View style={{width: '5%', height: '100%'}} />
                </View>
              </View>
            </>

            <View style={{width: '100%', height: 15}} />

            <>
              <View style={[styles.inputContainer, {height: 90}]}>
                <View style={{width: '100%', height: 10}} />
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      {justifyContent: 'flex-start'},
                    ]}>
                    <View style={{width: '10%', height: '100%'}} />
                    <Text style={styles.titleInputStyle}>Date of birth</Text>
                    <Text
                      style={[
                        styles.titleInputStyle,
                        {color: CUSTOM_COLOR.Red},
                      ]}>
                      {' '}
                      *
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      {justifyContent: 'flex-end'},
                    ]}>
                    <View style={{width: '10%', height: '100%'}} />
                  </View>
                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                  <View style={{width: '5%', height: '100%'}} />
                  <TouchableOpacity
                    style={styles.dateStyle}
                    onPress={showDateTimePicker}>
                    <Text> {text}</Text>
                  </TouchableOpacity>
                  {showPicker && (
                    <DateTimePicker
                      value={date}
                      mode="date" // Can be "date", "time", or "datetime"
                      display="spinner" // Can be "default", "spinner", or "calendar"
                      onChange={onChange}
                    />
                  )}
                  <View style={{width: '5%', height: '100%'}} />
                </View>
              </View>
            </>

            <View style={{width: '100%', height: 15}} />

            <>
              <View style={[styles.inputContainer, {height: 90}]}>
                <View style={{width: '100%', height: 10}} />
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      {justifyContent: 'flex-start'},
                    ]}>
                    <View style={{width: '5%', height: '100%'}} />
                    <Text style={styles.titleInputStyle}>Gender</Text>
                    <Text
                      style={[
                        styles.titleInputStyle,
                        {color: CUSTOM_COLOR.Red},
                      ]}>
                      {' '}
                      *
                    </Text>
                  </View>
                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                  <View style={{width: '5%', height: '100%'}} />
                  <Dropdown
                    style={[styles.comboType, isFocus && {borderColor: 'blue'}]}
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

            <View style={{width: '100%', height: 15}} />

            <>
              <View style={[styles.inputContainer, {height: 90}]}>
                <View style={{width: '100%', height: 10}} />
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      {justifyContent: 'flex-start'},
                    ]}>
                    <View style={{width: '10%', height: '100%'}} />
                    <Text style={styles.titleInputStyle}>Address</Text>
                    <Text
                      style={[
                        styles.titleInputStyle,
                        {color: CUSTOM_COLOR.Red},
                      ]}>
                      {' '}
                      *
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      {justifyContent: 'flex-end'},
                    ]}>
                    <Text style={styles.titleInputStyle}>0/200</Text>
                    <View style={{width: '10%', height: '100%'}} />
                  </View>
                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                  <View style={{width: '5%', height: '100%'}} />
                  <TextInput
                    style={{flex: 1, fontSize: 17}}
                    onChangeText={text => setAddress(text)}
                    value={address}
                  />
                  <View style={{width: '5%', height: '100%'}} />
                </View>
              </View>
            </>

            <View style={{width: '100%', height: 15}} />

            <>
              <View style={[styles.inputContainer, {height: 90}]}>
                <View style={{width: '100%', height: 10}} />
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      {justifyContent: 'flex-start'},
                    ]}>
                    <View style={{width: '10%', height: '100%'}} />
                    <Text style={styles.titleInputStyle}>Phone number</Text>
                    <Text
                      style={[
                        styles.titleInputStyle,
                        {color: CUSTOM_COLOR.Red},
                      ]}>
                      {' '}
                      *
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      {justifyContent: 'flex-end'},
                    ]}>
                    <Text style={styles.titleInputStyle}>0/200</Text>
                    <View style={{width: '10%', height: '100%'}} />
                  </View>
                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                  <View style={{width: '5%', height: '100%'}} />
                  <TextInput
                    style={{flex: 1, fontSize: 17}}
                    onChangeText={text => setPhoneNumber(text)}
                    value={phoneNumber}
                  />
                  <View style={{width: '5%', height: '100%'}} />
                </View>
              </View>
            </>
          </ScrollView>
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
    height: '32%',
    marginHorizontal: '5%',
  },
  backgroundContainer: {
    width: '100%',
    height: 185,
  },
  image: {
    flex: 1,
  },
  avataContainer: {
    width: '100%',
    height: '67%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avataStyle: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  bodyContainer: {
    width: '90%',
    height: 450,
    marginHorizontal: '5%',
  },
  inputContainer: {
    width: '100%',
    elevation: 1.5,
    borderRadius: 0.5,
    shadowColor: CUSTOM_COLOR.Black,
    flexDirection: 'column',
  },
  unitTitleContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleInputStyle: {},
  comboxContainer: {
    width: '100%',
    elevation: 1.5,
    borderRadius: 0.5,
    shadowColor: CUSTOM_COLOR.Black,
    flexDirection: 'row',
  },
  unitComboContainer: {
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  comboType: {
    width: '90%',
    height: '90%',
    // borderColor: CUSTOM_COLOR.MineShaft,
    // borderWidth: 0.5,
    // borderRadius: 1,
    // paddingHorizontal: '5%',
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
  dateStyle: {
    width: '90%',
    height: '90%',
    // borderColor: CUSTOM_COLOR.MineShaft,
    // borderWidth: 0.5,
    // borderRadius: 1,
    // paddingHorizontal: '5%',
    justifyContent: 'center',
  },
});
export default ChangeProfile;
