import firebase from 'firebase/app';
import firestore from '@react-native-firebase/firestore';

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
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firestore();
//Tìm kiếm sản phẩm theo tên
const searchProductByName = async (name) => {
  const productsRef = db.collection('SANPHAM');
  const query1 = productsRef.collection.where()
  const query = productsRef.where('TenSP', '>=', name).where('TenSP', '<=', name + '\uf8ff');
  const querySnapshot = await query.get();
  const result = [];
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
};
