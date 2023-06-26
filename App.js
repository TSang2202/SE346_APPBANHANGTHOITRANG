import React, {useState, useEffect} from 'react';
import {firebase, Firestore} from './Firebase/firebase';
import MainNavigator from './src/Login_SignUp/navigation/navigation';
import CustomerBottomTab from './src/CustomerView/navigation/CustomerBottomTab';
import StackNavigator from './src/StaffView/navigation/navigation';
import AdminStackNavigator from './src/AdminView/navigation/navigation';
import {doc, getDoc} from 'firebase/firestore';

function App() {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();
  // const [dataUser, setDataUser] = useState();
  // const getDataUser = async userId => {
  //   const docRef = doc(Firestore, 'NGUOIDUNG', userId);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log('Document data:', docSnap.data());
  //     setDataUser(docSnap.data());
  //   } else {
  //     console.log('No such document!');
  //   }
  // };
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) {
  //     setInitializing(false);
  //   }
  // }
  // useEffect(() => {
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   if (user) {
  //     getDataUser(firebase.auth().currentUser.uid);
  //     console.log(dataUser);
  //   }
  //   return subscriber;
  // }, [user]);
  // if (initializing) {
  //   return null;
  // }
  // if (!user) {
  //   return <MainNavigator />;
  // } else {
  //   getDataUser(firebase.auth().currentUser.email);
  //   console.log(dataUser);
  //   if (dataUser && dataUser.LoaiND === 'customer') {
  //     return <CustomerBottomTab />;
  //   } else if (dataUser && dataUser.LoaiND === 'user') {
  //     return <StackNavigator />;
  //   }
  //   // if (dataUser && dataUser.LoaiND === 'admin')
  //   else {
  //     return <AdminStackNavigator />;
  //   }
  // }
  // return <AdminStackNavigator />;
  // const [userType, setUserType] = useState('');
  // const [userStatus, setUserStatus] = useState(false);
  // const fetchUserType = async () => {
  //   try {
  //     const user = firebase.auth().currentUser;
  //     const collectionRef = firebase.firestore().collection('NGUOIDUNG');
  //     const snapshot = await collectionRef
  //       .where('Email', '==', user.email)
  //       .get();
  //     if (snapshot.empty) {
  //       console.log('No matching documents found.');
  //       return;
  //     }
  //     snapshot.forEach(doc => {
  //       setUserType(doc.userType);
  //     });
  //   } catch (error) {
  //     console.error('Error fetching user UID:', error);
  //   }
  // };
  // const checkUserStatus = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       // User is logged in
  //       setUserStatus(true);
  //     } else {
  //       // User is logged out
  //       setUserStatus(false);
  //     }
  //   });
  // };
  // checkUserStatus();
  // if (userStatus) {
  //   fetchUserType();
  //   if (userType === 'customer') {
  //     return <CustomerBottomTab />;
  //   } else if (userType === 'admin') {
  //     return <AdminStackNavigator />;
  //   } else if (userType === 'staff') {
  //     return <StackNavigator />;
  //   }
  // } else {
  //   return <MainNavigator />;
  // }

  const [userType, setUserType] = useState('');
  const [user, setUser] = useState(false);

  const getPropertyValue = async uid => {
    try {
      const docRef = firebase.firestore().collection('NGUOIDUNG').doc('uid');
      const doc = await docRef.get();

      if (doc.exists) {
        const data = doc.data();
        setUserType(data.userType);
        // const userType = data.userType;
        console.log('userType:', userType);
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.log('Error getting property value:', error.message);
    }
  };

  const checkSignInStatus = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User is signed in:', user.uid);
        setUser(true);
        // User is signed in, you can perform further actions here
      } else {
        console.log('User is not signed in');
        // User is not signed in
        setUser(false);
      }
    });
  };

  // const user = firebase.auth().currentUser;

  checkSignInStatus();

  while (!user) {
    if (!user) {
      return <MainNavigator />;
    }
    checkSignInStatus();
  }

  const uid = firebase.auth().currentUser.uid;
  getPropertyValue(uid);

  if (userType === 'customer') {
    return <CustomerBottomTab />;
  } else if (userType === 'admin') {
    return <AdminStackNavigator />;
  } else if (userType === 'staff') {
    return <StackNavigator />;
  }
}

export default () => {
  return <App />;
};
