// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIaaa_hRxppBZrDoXlxFNFP4nDFxbN0o8",
  authDomain: "shoppingapp-ada07.firebaseapp.com",
  databaseURL: "https://shoppingapp-ada07-default-rtdb.firebaseio.com",
  projectId: "shoppingapp-ada07",
  storageBucket: "shoppingapp-ada07.appspot.com",
  messagingSenderId: "373805724422",
  appId: "1:373805724422:web:551b87a21de185ee212487",
  measurementId: "G-321BTX96JN"
};
firebase.initializeApp(firebaseConfig);
// Hàm tìm kiếm sản phẩm trên Firebase
export const searchProduct = async keyword => {
  // Tạo một truy vấn để tìm kiếm sản phẩm có từ khóa trong tên hoặc mô tả sản phẩm
  const productsRef = firebase.database().ref('SANPHAM');
  const snapshot = await productsRef
    .orderByChild('TenSP')
    .startAt(keyword.toLocaleLowerCase())
    .endAt(keyword.toLocaleLowerCase() + '\uf8ff')
    .once('value');
  
  // Chuyển kết quả của truy vấn thành một mảng sản phẩm và trả về
  const products = [];
  snapshot.forEach(childSnapshot => {
    const product = childSnapshot.val();
    product.key = childSnapshot.key;
    products.push(product);
  });
  return products;
};
// Initialize Firebase
