import {
  collection,
  endOfDay,
  endOfMonth,
  endOfYear,
  getDocs,
  query,
  startOfDay,
  startOfMonth,
  startOfYear,
  where,
} from '@firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Firestore } from '../../../Firebase/firebase';
import BackTo from '../components/BackTo';
import CUSTOM_COLOR from '../constants/colors';

const Report = ({navigation}) => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const fetchFinancialData = async () => {
      try {
        let q = query(
          collection(Firestore, 'DONHANG'),
          where('TrangThai', '==', 'Delivered'),
        );

        if (selectedDate) {
          const startDate = startOfDay(selectedDate);
          const endDate = endOfDay(selectedDate);

          q = query(
            q,
            where('NgayDatHang', '>=', startDate),
            where('NgayDatHang', '<=', endDate),
          );
        } else if (selectedMonth) {
          const startDate = startOfMonth(selectedMonth);
          const endDate = endOfMonth(selectedMonth);

          q = query(
            q,
            where('NgayDatHang', '>=', startDate),
            where('NgayDatHang', '<=', endDate),
          );
        } else if (selectedYear) {
          const startDate = startOfYear(selectedYear);
          const endDate = endOfYear(selectedYear);

          q = query(
            q,
            where('NgayDatHang', '>=', startDate),
            where('NgayDatHang', '<=', endDate),
          );
        }

        const querySnapshot = await getDocs(q);

        let total = 0;

        querySnapshot.forEach(doc => {
          const {TongTien} = doc.data();
          total += TongTien;
        });

        setTotalRevenue(total);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchFinancialData();
  }, [selectedDate, selectedMonth, selectedYear]);

  const handleDateChange = (event, selected) => {
    const currentDate = selected || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
    setSelectedMonth(null);
    setSelectedYear(null);
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
        <View style={styles.header1}>
          <Text style={styles.Heading}>Quá trình hoạt động</Text>
          <Button
            title="Chọn ngày"
            onPress={() => setShowDatePicker(true)}
            buttonStyle={styles.button}
          />
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
        <Text style={styles.title}>BÁO CÁO DOANH THU</Text>
        <View style={styles.revenueContainer}>
          <Text style={styles.revenueLabel}>Tổng doanh thu (VND)</Text>
          <Text style={styles.revenueValue}>{totalRevenue}</Text>
        </View>
        <View style={styles.revenueContainer }>
          <Text style={styles.revenueLabel}> Số đơn hàng đã bán ra</Text>
          <Text style={styles.revenueValue}>{totalRevenue}</Text>
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
  header1: {
    backgroundColor: CUSTOM_COLOR.FlushOrange,
    marginTop: 15,
    paddingHorizontal: 15,
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
  revenueContainer: {
    backgroundColor: CUSTOM_COLOR.DarkBlue,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  revenueLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CUSTOM_COLOR.White,
  },
  revenueValue: {
    backgroundColor: CUSTOM_COLOR.DarkBlue,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: CUSTOM_COLOR.White,
  },
});

export default Report;