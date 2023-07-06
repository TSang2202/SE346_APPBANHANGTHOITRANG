import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Firestore } from '../../../Firebase/firebase';

const Report = () => {
  const [financialData, setFinancialData] = useState([]);

  useEffect(() => {
    const fetchFinancialData = async () => {
      try {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();

        const startOfMonth = new Date(currentYear, currentMonth - 1, 1);
        const endOfMonth = new Date(currentYear, currentMonth, 0, 23, 59, 59);

        const deliveredOrdersSnapshot = await Firestore.collection('DONHANG')
          .where('trangThai', '==', 'Delivered')
          .where('ngayGiaoHang', '>=', startOfMonth)
          .where('ngayGiaoHang', '<=', endOfMonth)
          .get();

        const batch = Firestore.batch();
        const deliveredOrders = [];
        deliveredOrdersSnapshot.forEach((doc) => {
          const orderData = doc.data();
          deliveredOrders.push(orderData);
          const newDocRef = Firestore.collection('BAOCAO').doc();
          batch.set(newDocRef, orderData);
          batch.delete(doc.ref);
        });
        await batch.commit();

        const totalRevenue = deliveredOrders.reduce(
          (sum, order) => sum + order.doanhThu,
          0
        );

        const financialReportSnapshot = await Firestore.collection('BAOCAO')
          .orderBy('ngayGiaoHang')
          .get();
        const financialReportData = financialReportSnapshot.docs.map((doc) =>
          doc.data()
        );

        setFinancialData(financialReportData);

        console.log('Total Revenue:', totalRevenue);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchFinancialData();
  }, []);

  const renderReportItem = ({ item }) => (
    <View>
      <Text>Month: {item.month}</Text>
      <Text>Revenue: {item.revenue}</Text>
      <Text>Expense: {item.expense}</Text>
      <Text>Profit: {item.profit}</Text>
    </View>
  );

  return (
    <View>
      <Text>Financial Report</Text>
      <FlatList
        data={financialData}
        renderItem={renderReportItem}
        keyExtractor={(item) => item.month}
      />
    </View>
  );
};

export default Report;
