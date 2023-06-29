import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Platform,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import CustomHeader from '../components/CustomHeader';
import PromotionButton from '../components/PromotionButton';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import {border_add} from '../assets/images';
import FONT_FAMILY from '../constants/fonts';

const AddPromotion = props => {
  const {navigation} = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [danhMuc, setDanhMuc] = useState([]);
  const [value, setValue] = useState(null);

  // const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);
  // const [text, setText] = useState('01/01/2023');

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'android');
  //   setDate(currentDate);

  //   let tempDate = new Date(currentDate);
  //   let fDate =
  //     tempDate.getDate() +
  //     '/' +
  //     (tempDate.getMonth() + 1) +
  //     '/' +
  //     tempDate.getFullYear();
  //   setText(fDate);

  //   console.log(fDate);
  // };

  // const showMode = currentMode => {
  //   setShow(true);
  //   setMode(currentMode);
  //   // if (Platform.OS === 'android') {
  //   //   setShow(false);
  //   //   // for iOS, add a button that closes the picker
  //   // }
  // };

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
      <View style={{width: '100%', height: 10}} />

      <>
        <View style={styles.headerContainer}>
          <CustomHeader
            onPress={() => navigation.goBack()}
            title="Promotion/ Add new promotion"
          />
        </View>
      </>

      <View style={{width: '100%', height: 10}} />

      <>
        <View style={styles.bodyContainer}>
          <ScrollView style={{width: '100%', height: '100%'}}>
            <>
              <View style={styles.addImageContainer}>
                <View style={{width: 25, height: '100%'}} />
                <TouchableOpacity style={{width: 75, height: 75}}>
                  <ImageBackground
                    style={{
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    source={border_add}
                    resizeMode="cover">
                    <Text style={styles.icAddStyle}>+</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <View style={{width: 25, height: '100%'}} />
                <Text style={styles.addImageTextStyles}>
                  (Add picture or video)
                </Text>
              </View>
            </>

            <View style={styles.spaceContainer} />

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
                    <Text style={styles.titleInputStyle}>
                      Name Of Promotions
                    </Text>
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
                {/* <View style={{width: '100%', height: 5}} /> */}
                <View style={{flex: 2, flexDirection: 'row'}}>
                  <View style={{width: '5%', height: '100%'}} />
                  <TextInput
                    style={{flex: 1, fontSize: 17}}
                    onChangeText={text => setName(text)}
                    value={name}
                  />
                  <View style={{width: '5%', height: '100%'}} />
                </View>
              </View>
            </>

            <View style={styles.spaceContainer} />

            <>
              <View style={[styles.inputContainer, {height: 120}]}>
                <View style={{width: '100%', height: 10}} />
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      {justifyContent: 'flex-start'},
                    ]}>
                    <View style={{width: '10%', height: '100%'}} />
                    <Text style={styles.titleInputStyle}>Description</Text>
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
                {/* <View style={{width: '100%', height: 5}} /> */}
                <View style={{flex: 2, flexDirection: 'row'}}>
                  <View style={{width: '5%', height: '100%'}} />
                  <TextInput
                    style={{flex: 1, fontSize: 17}}
                    onChangeText={text => setDescription(text)}
                    value={description}
                    multiline={true}
                  />
                  <View style={{width: '5%', height: '100%'}} />
                </View>
              </View>
            </>

            <View style={styles.spaceContainer} />

            <>
              <View style={[styles.comboxContainer, {height: 60}]}>
                <View
                  style={[
                    styles.unitComboContainer,
                    {justifyContent: 'flex-start', width: '40%'},
                  ]}>
                  <View style={{width: '12%', height: '100%'}} />
                  <Text style={styles.titleInputStyle}>Type of promotion</Text>
                  <Text
                    style={[styles.titleInputStyle, {color: CUSTOM_COLOR.Red}]}>
                    {' '}
                    *
                  </Text>
                </View>
                <View
                  style={[
                    styles.unitComboContainer,
                    {
                      justifyContent: 'flex-end',
                      width: '60%',
                    },
                  ]}>
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
                  <View style={{width: '8%', height: '100%'}} />
                </View>
              </View>
            </>

            <View style={styles.spaceContainer} />

            <>
              <View style={[styles.dateContainer, {height: 120}]}>
                <View style={styles.unitDateContainer}>
                  <View
                    style={[
                      styles.unitComboContainer,
                      {justifyContent: 'flex-start', width: '40%'},
                    ]}>
                    <View style={{width: '12%', height: '100%'}} />
                    <Text style={styles.titleInputStyle}>Start date</Text>
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
                      styles.unitComboContainer,
                      {
                        justifyContent: 'flex-end',
                        width: '60%',
                      },
                    ]}>
                    {/* https://www.youtube.com/watch?v=Imkw-xFFLeE */}
                    <TouchableOpacity
                      style={styles.dateStyle}
                      onPress={showDateTimePicker}>
                      <Text> {text}</Text>
                    </TouchableOpacity>
                    {showPicker && (
                      <DateTimePicker
                        value={date}
                        mode="date" // Can be "date", "time", or "datetime"
                        display="default" // Can be "default", "spinner", or "calendar"
                        onChange={onChange}
                      />
                    )}
                    <View style={{width: '8%', height: '100%'}} />
                  </View>
                </View>

                <View style={styles.unitDateContainer}>
                  <View
                    style={[
                      styles.unitComboContainer,
                      {justifyContent: 'flex-start', width: '40%'},
                    ]}>
                    <View style={{width: '12%', height: '100%'}} />
                    <Text style={styles.titleInputStyle}>End date</Text>
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
                      styles.unitComboContainer,
                      {
                        justifyContent: 'flex-end',
                        width: '60%',
                      },
                    ]}>
                    <TouchableOpacity
                      style={styles.dateStyle}
                      onPress={showDateTimePicker}>
                      <Text> {text}</Text>
                    </TouchableOpacity>
                    {showPicker && (
                      <DateTimePicker
                        value={date}
                        mode="date" // Can be "date", "time", or "datetime"
                        display="default" // Can be "default", "spinner", or "calendar"
                        onChange={onChange}
                      />
                    )}
                    <View style={{width: '8%', height: '100%'}} />
                  </View>
                </View>
              </View>
            </>

            <View style={styles.spaceContainer} />

            <>
              <View style={[styles.comboxContainer, {height: 60}]}>
                <View
                  style={[
                    styles.unitComboContainer,
                    {justifyContent: 'flex-start', width: '40%'},
                  ]}>
                  <View style={{width: '12%', height: '100%'}} />
                  <Text style={styles.titleInputStyle}>Discount</Text>
                  <Text
                    style={[styles.titleInputStyle, {color: CUSTOM_COLOR.Red}]}>
                    {' '}
                    *
                  </Text>
                </View>
                <View
                  style={[
                    styles.unitComboContainer,
                    {
                      justifyContent: 'flex-end',
                      width: '60%',
                    },
                  ]}>
                  <TextInput
                    style={styles.comboType}
                    onChangeText={text => setName(text)}
                    value={name}
                  />
                  <View style={{width: '8%', height: '100%'}} />
                </View>
              </View>
            </>

            <View style={styles.spaceContainer} />

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

            <View style={{width: '100%', height: 10}} />
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
    height: 70,
    marginHorizontal: '5%',
  },
  bodyContainer: {
    width: '90%',
    height: '85%',
    marginHorizontal: '5%',
  },
  addImageContainer: {
    width: '100%',
    height: 100,
    elevation: 1.5,
    borderRadius: 0.5,
    shadowColor: CUSTOM_COLOR.Black,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icAddStyle: {
    color: CUSTOM_COLOR.FlushOrange,
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 50,
  },
  addImageTextStyles: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.Semibold,
    fontSize: 15,
  },
  spaceContainer: {
    width: '100%',
    height: 10,
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
    width: '85%',
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
  dateContainer: {
    width: '100%',
    elevation: 1.5,
    borderRadius: 0.5,
    shadowColor: CUSTOM_COLOR.Black,
    flexDirection: 'column',
  },
  unitDateContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
  },
  dateStyle: {
    width: '85%',
    height: '70%',
    borderColor: CUSTOM_COLOR.MineShaft,
    borderWidth: 0.5,
    borderRadius: 1,
    paddingHorizontal: '5%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  buttonContainer: {
    width: '40%',
    height: 60,
    marginHorizontal: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AddPromotion;
