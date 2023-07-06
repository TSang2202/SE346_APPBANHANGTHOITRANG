
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
function Report(navigation) {
  const [financialData, setFinancialData] = useState([]);

  useEffect(() => {
    const fetchFinancialData = async () => {
      try {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();

        const startOfMonth = new Date(currentYear, currentMonth - 1, 1);
        const endOfMonth = new Date(currentYear, currentMonth, 0, 23, 59, 59);

        // Lấy các đơn hàng có trạng thái "Delivered"
        const deliveredOrdersSnapshot = await db
          .collection('DONHANG')
          .where('trangThai', '==', 'Delivered')
          .where('ngayGiaoHang', '>=', startOfMonth)
          .where('ngayGiaoHang', '<=', endOfMonth)
          .get();

        // Chuyển các đơn hàng sang collection "BAOCAO"
        const batch = db.batch();
        const deliveredOrders = [];
        deliveredOrdersSnapshot.forEach((doc) => {
          const orderData = doc.data();
          deliveredOrders.push(orderData);
          const newDocRef = db.collection('BAOCAO').doc();
          batch.set(newDocRef, orderData);
          batch.delete(doc.ref);
        });
        await batch.commit();

        // Tính tổng doanh thu trong tháng
        const totalRevenue = deliveredOrders.reduce(
          (sum, order) => sum + order.doanhThu,
          0
        );

        // Lấy dữ liệu từ collection "BAOCAO"
        const financialReportSnapshot = await db
          .collection('BAOCAO')
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

const styles = StyleSheet.create({})
export default Report