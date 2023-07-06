import {
  collection,
  getDocs,
  query,
  where
} from '@firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Firestore } from '../../../Firebase/firebase';
import { SearchIcon } from '../../CustomerView/assets/icons';
import BackTo from '../components/BackTo';
import CUSTOM_COLOR from '../constants/colors';

const Report = ({navigation}) => {
  const [total, setTotal] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const isValidDay = (day) => {
    return day > 0 && day <= 31;
  };

  // Hàm kiểm tra tính hợp lệ của tháng
  const isValidMonth = (month) => {
    return month > 0 && month <= 12;
  };

  // Hàm kiểm tra tính hợp lệ của năm
  const isValidYear = (year) => {
    return year > 2020;
  };
  useEffect(() => {
    const fetchFinancialData = async () => {
      try {
        let q = query(
          collection(Firestore, 'DONHANG'),
          where('TrangThai', '==', 'Delivered'),
        );

        const querySnapshot = await getDocs(q);

        let total = 0;
        let count = 0;

        querySnapshot.forEach(doc => {
          const {TongTien} = doc.data();
          total += TongTien;
          count +=1;
        });

        setTotalRevenue(total);
        setTotal(count);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchFinancialData();
  }, []);
  const handleDateChange = () => {
    
  }
  const handleSearchDateTime = () => {
    if (
      !isValidDay(selectedDate) ||
      !isValidMonth(selectedMonth) ||
      !isValidYear(selectedYear)
    ) {
      // Hiển thị thông báo lỗi nếu ngày, tháng hoặc năm không hợp lệ
      console.log('Ngày, tháng hoặc năm không hợp lệ');
      return;
    }
  
    // Tiếp tục thực hiện truy vấn dữ liệu hoặc các tác vụ khác
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <BackTo
            onPress={() => navigation.navigate('AdminOverView')}
            Info = 'Financial Report'
          />
      </View>
      <View style={styles.content}>
        <View style={styles.backgroundHeader}>
          <Text style={styles.Heading}>Quá trình hoạt động</Text>
          <View style = {styles.buttonGroup}>
            <TextInput
              placeholder="Chọn ngày"
              style = {styles.textinput}
              onChangeText = {(text) => selectedDate(text)}
            />
            <TextInput
              placeholder='Chọn tháng'
              style = {styles.textinput}
              onChangeText={(text) => setSelectedMonth(text)}
            />
            <TextInput
              placeholder='Chọn năm'
              style = {styles.textinput}
              onChangeText={(text) => setSelectedYear(text)}
            />
            <TouchableOpacity
              onPress={handleSearchDateTime}
              style = {styles.button}
            >
              <Image
                source={SearchIcon}
                style = {styles.icon}
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={selectedDate || new Date()}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View>
          
        </View>
        <View style={styles.title}>
        <Text style ={styles.tieude}>BÁO CÁO DOANH THU</Text>
          <Text style = {styles.minibutton}>Tổng</Text>
          <Text style = {styles.report}>{totalRevenue.toLocaleString()} VNĐ</Text>
        </View>
        <View style={styles.title}>
        <Text style= {styles.tieude}>SỐ ĐƠN HÀNG ĐÃ BÁN</Text>
          <Text style = {styles.minibutton}>Tổng</Text>
          <Text style = {styles.report}>{total}</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundHeader: {
    backgroundColor: CUSTOM_COLOR.FlushOrange,
    marginTop: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    height: 130,
    alignContent: 'center',
  },
  header: {
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  Heading: {
    color:CUSTOM_COLOR.White,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: CUSTOM_COLOR.Black,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 10,
    padding: 10,
    shadowColor: CUSTOM_COLOR.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  tieude:{
    fontSize: 30,
    fontStyle: 'normal',
    color: CUSTOM_COLOR.Black,
  },  
  textinput: {
    textAlign:'center',
    color: CUSTOM_COLOR.Black,
    backgroundColor:CUSTOM_COLOR.White,
    borderRadius:10,
    width: 80,
    height: 40,
    marginRight:10,
  },
  button: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: CUSTOM_COLOR.White,
  },
  icon: {
    width: 20,
    height: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft:18,
  },
  minibutton:{
    marginBottom: 10,
    marginTop:10,
    color: CUSTOM_COLOR.White,
    backgroundColor:CUSTOM_COLOR.Purple,
    padding: 8,
    width: 60,
    height:40,
    borderRadius:10,
    fontSize:18,
    textAlign:'left',
  },
  report: {
    color: CUSTOM_COLOR.Black,
    fontSize: 32,
    fontStyle: 'italic',

  },

});

export default Report;