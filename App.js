import React, { useState, useEffect } from 'react';
import { firebase, Firestore } from './Firebase/firebase';
import MainNavigator from './src/Login_SignUp/navigation/navigation';
import CustomerBottomTab from './src/CustomerView/navigation/CustomerBottomTab';
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [dataUser, setDataUser] = useState()

  const getDataUser = async (userId) => {
    const docRef = doc(Firestore, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setDataUser(docSnap.data())
    } else {
      console.log("No such document!");
    }
  }

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }



  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

    if (user) {
      getDataUser(firebase.auth().currentUser.uid)
      console.log(dataUser)

    }



    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return <MainNavigator />;
  }


  return <CustomerBottomTab />;
}

export default () => {
  return <App />;
};
