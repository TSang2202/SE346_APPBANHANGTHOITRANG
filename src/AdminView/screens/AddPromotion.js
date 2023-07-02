import React, { useState, useEffect } from 'react';
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
  Image,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import CustomHeader from '../components/CustomHeader';
import PromotionButton from '../components/PromotionButton';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { border_add } from '../assets/images';
import FONT_FAMILY from '../constants/fonts';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const AddPromotion = props => {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [danhMuc, setDanhMuc] = useState([]);
  const [value, setValue] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [dateStart, setDateStart] = useState('01/01/2023');
  const [dateEnd, setDateEnd] = useState('01/01/2023');
  const [text, setText] = useState('01/01/2023');
  const [image, setImage] = useState();
  const [lengthName, setLengthName] = useState(0);
  const [lengthDescription, setLengthDescription] = useState(0);
  const [typeOfPromotion, setTpyeOfPromotion] = useState();
  const [discount, setDiscount] = useState();
  const [pickerType, setPickerType] = useState('');

  const dataTypePromotion = [
    {
      id: 'GiamGia',
      title: 'Khuyến mãi giảm giá',
    },
    {
      id: 'MienPhiVanChuyen',
      title: 'Miễn phí vận chuyển',
    },
  ];

  const showDateTimePicker = () => {
    setShowPicker(true);
  };

  const selectImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },

      selectionLimit: 5,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response.assets[0]);
        console.log(image);
      }
    });
  };

  const [startDate, setStartDate] = useState(new Date());
  const [startDateValues, setStartDateValuse] = useState('01/01/2023');
  const [endDate, setEndDate] = useState(new Date());
  const [endDateValues, setEndDateValues] = useState('01/01/2023');

  useEffect(() => {
    const getCurrentDate = () => {
      const currentDate = startDate;
      let tempDate = new Date(currentDate);
      let fDate =
        tempDate.getDate() +
        '/' +
        (tempDate.getMonth() + 1) +
        '/' +
        tempDate.getFullYear();

      console.log('Current date: ', fDate);
      setStartDateValuse(fDate);
      setEndDateValues(fDate);
    };

    getCurrentDate();
  }, []);

  const handleDateChange = (event, selected) => {
    if (pickerType === 'start') {
      const currentDate = selected;
      setShowPicker(false);

      let tempDate = new Date(currentDate);
      let fDate =
        tempDate.getDate() +
        '/' +
        (tempDate.getMonth() + 1) +
        '/' +
        tempDate.getFullYear();

      console.log('Start date: ', fDate);
      setStartDateValuse(fDate);
      setStartDate(selected);
    } else if (pickerType === 'end') {
      const currentDate = selected;
      setShowPicker(false);

      setEndDate(currentDate);
      let tempDate = new Date(currentDate);
      let fDate =
        tempDate.getDate() +
        '/' +
        (tempDate.getMonth() + 1) +
        '/' +
        tempDate.getFullYear();

      console.log('End date: ', fDate);
      setEndDateValues(fDate);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%', height: 10 }} />

      <>
        <View style={styles.headerContainer}>
          <CustomHeader
            onPress={() => navigation.goBack()}
            title="Promotion/ Add new promotion"
          />
        </View>
      </>

      {/* <View style={{width: '100%', height: 5}} /> */}

      <>
        <View style={styles.bodyContainer}>
          <ScrollView style={{ width: '100%', height: '100%' }}>
            <>
              <View style={styles.addImageContainer}>
                <View style={{ width: 25, height: '100%' }} />
                <TouchableOpacity
                  style={{ width: 75, height: 75 }}
                  onPress={selectImage}>
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
                <View style={{ width: 25, height: '100%' }} />

                {image ? (
                  <Image
                    source={image}
                    style={{
                      height: 75,
                      width: 75,
                    }}
                  />
                ) : (
                  <Text style={styles.addImageTextStyles}>
                    (Add picture or video)
                  </Text>
                )}
              </View>
            </>

            <View style={styles.spaceContainer} />

            <>
              <View style={[styles.inputContainer, { height: 90 }]}>
                <View style={{ width: '100%', height: 10 }} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      { justifyContent: 'flex-start' },
                    ]}>
                    <View style={{ width: '10%', height: '100%' }} />
                    <Text style={styles.titleInputStyle}>
                      Name Of Promotions
                    </Text>
                    <Text
                      style={[
                        styles.titleInputStyle,
                        { color: CUSTOM_COLOR.Red },
                      ]}>
                      {' '}
                      *
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      { justifyContent: 'flex-end' },
                    ]}>
                    <Text style={styles.titleInputStyle}>{lengthName}/100</Text>
                    <View style={{ width: '10%', height: '100%' }} />
                  </View>
                </View>
                {/* <View style={{width: '100%', height: 5}} /> */}
                <View style={{ flex: 2, flexDirection: 'row' }}>
                  <View style={{ width: '5%', height: '100%' }} />
                  <TextInput
                    style={{ flex: 1, fontSize: 17 }}
                    onChangeText={text => {
                      if (text.length < 100) {
                        setName(text);
                        setLengthName(text.length);
                      }
                    }}
                    value={name}
                  />
                  <View style={{ width: '5%', height: '100%' }} />
                </View>
              </View>
            </>

            <View style={styles.spaceContainer} />

            <>
              <View style={[styles.inputContainer, { height: 120 }]}>
                <View style={{ width: '100%', height: 10 }} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      { justifyContent: 'flex-start' },
                    ]}>
                    <View style={{ width: '10%', height: '100%' }} />
                    <Text style={styles.titleInputStyle}>Description</Text>
                    <Text
                      style={[
                        styles.titleInputStyle,
                        { color: CUSTOM_COLOR.Red },
                      ]}>
                      {' '}
                      *
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.unitTitleContainer,
                      { justifyContent: 'flex-end' },
                    ]}>
                    <Text style={styles.titleInputStyle}>
                      {lengthDescription}/200
                    </Text>
                    <View style={{ width: '10%', height: '100%' }} />
                  </View>
                </View>
                {/* <View style={{width: '100%', height: 5}} /> */}
                <View style={{ flex: 2, flexDirection: 'row' }}>
                  <View style={{ width: '5%', height: '100%' }} />
                  <TextInput
                    style={{ flex: 1, fontSize: 17 }}
                    onChangeText={text => {
                      if (text.length <= 200) {
                        setDescription(text);
                        setLengthDescription(text.length);
                      }
                    }}
                    value={description}
                    multiline={true}
                  />
                  <View style={{ width: '5%', height: '100%' }} />
                </View>
              </View>
            </>

            <View style={styles.spaceContainer} />

            <>
              <View style={[styles.comboxContainer, { height: 60 }]}>
                <View
                  style={[
                    styles.unitComboContainer,
                    { justifyContent: 'flex-start', width: '40%' },
                  ]}>
                  <View style={{ width: '12%', height: '100%' }} />
                  <Text style={styles.titleInputStyle}>Type of promotion</Text>
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
                      justifyContent: 'flex-end',
                      width: '60%',
                    },
                  ]}>
                  <Dropdown
                    style={[styles.comboType, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dataTypePromotion}
                    search
                    maxHeight={200}
                    labelField="title"
                    valueField="id"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setValue(item.id);
                      setIsFocus(false);
                      setTpyeOfPromotion(item.id);
                    }}
                  />
                  <View style={{ width: '8%', height: '100%' }} />
                </View>
              </View>
            </>

            <>
              {typeOfPromotion && typeOfPromotion === 'GiamGia' ? (
                <View style={[styles.comboxContainer, { height: 60 }]}>
                  <View
                    style={[
                      styles.unitComboContainer,
                      { justifyContent: 'flex-start', width: '40%' },
                    ]}>
                    <View style={{ width: '12%', height: '100%' }} />
                    <Text style={styles.titleInputStyle}>Discount</Text>
                    <Text
                      style={[
                        styles.titleInputStyle,
                        { color: CUSTOM_COLOR.Red },
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
                        width: '50%',
                      },
                    ]}>
                    <TextInput
                      style={styles.comboType}
                      onChangeText={text => setDiscount(text)}
                      value={name}
                      keyboardType='numeric'
                    />
                    <View style={{ width: '8%', height: '100%' }} />
                  </View>

                  <View
                    style={[
                      styles.unitComboContainer,
                      { justifyContent: 'flex-start', width: '40%', },
                    ]}>

                    <Text style={[styles.titleInputStyle, { fontSize: 15 }]}>%</Text>

                  </View>

                </View>
              ) : null}
            </>

            <View style={[styles.comboxContainer, { height: 60 }]}>
              <View
                style={[
                  styles.unitComboContainer,
                  { justifyContent: 'flex-start', width: '40%' },
                ]}>
                <View style={{ width: '12%', height: '100%' }} />
                <Text style={styles.titleInputStyle}>Minimum Order </Text>
                <Text
                  style={[
                    styles.titleInputStyle,
                    { color: CUSTOM_COLOR.Red },
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
                    width: '50%',
                  },
                ]}>
                <TextInput
                  style={styles.comboType}
                  onChangeText={text => setDiscount(text)}
                  value={name}
                  keyboardType='numeric'
                />
                <View style={{ width: '8%', height: '100%' }} />
              </View>

              <View
                style={[
                  styles.unitComboContainer,
                  { justifyContent: 'flex-start', width: '40%', },
                ]}>

                <Text style={[styles.titleInputStyle, { fontSize: 15 }]}>VNĐ</Text>

              </View>



            </View>

            <View style={styles.spaceContainer} />

            <>
              <View style={[styles.dateContainer, { height: 120 }]}>
                <View style={styles.unitDateContainer}>
                  <View
                    style={[
                      styles.unitComboContainer,
                      { justifyContent: 'flex-start', width: '40%' },
                    ]}>
                    <View style={{ width: '12%', height: '100%' }} />
                    <Text style={styles.titleInputStyle}>Start date</Text>
                    <Text
                      style={[
                        styles.titleInputStyle,
                        { color: CUSTOM_COLOR.Red },
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

                      onPress={() => {
                        setShowPicker(true);
                        setPickerType('start');
                      }}>
                      <Text> {startDateValues}</Text>
                    </TouchableOpacity>
                    {/* {showPicker && (
                      <DateTimePicker
                        value={pickerType === 'start' ? startDate : endDate}
                        mode="date" // Can be "date", "time", or "datetime"
                        display="default" // Can be "default", "spinner", or "calendar"
                        onChange={handleDateChange}
                      />
                    )} */}
                    <View style={{ width: '8%', height: '100%' }} />
                  </View>
                </View>

                <View style={styles.unitDateContainer}>
                  <View
                    style={[
                      styles.unitComboContainer,
                      { justifyContent: 'flex-start', width: '40%' },
                    ]}>
                    <View style={{ width: '12%', height: '100%' }} />
                    <Text style={styles.titleInputStyle}>End date</Text>
                    <Text
                      style={[
                        styles.titleInputStyle,
                        { color: CUSTOM_COLOR.Red },
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
                      onPress={() => {
                        setShowPicker(true);
                        setPickerType('end');
                      }}
                    >


                      <Text> {endDateValues}</Text>
                    </TouchableOpacity>
                    {showPicker && (
                      <DateTimePicker
                        value={pickerType === 'start' ? startDate : endDate}
                        mode="date" // Can be "date", "time", or "datetime"
                        display="default" // Can be "default", "spinner", or "calendar"
                        onChange={handleDateChange}
                      />
                    )}
                    <View style={{ width: '8%', height: '100%' }} />
                  </View>
                </View>
              </View>
            </>

            <View style={styles.spaceContainer} />

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

            <View style={{ width: '100%', height: 10 }} />
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
