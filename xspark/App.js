import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import MainApp from './MainApp.js';
import AuthApp from './AuthApp.js';
import { Alert } from 'react-native';


export default function App() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const retrievedUser = await AsyncStorage.getItem('user');
      console.log(retrievedUser)
      if (retrievedUser !== null) {
        setUser(JSON.parse(retrievedUser));
      } else {
        Alert.alert('Error', 'Item not found.');
        setUser(false);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to retrieve item.');
      setUser(false);
    }
  };


  useEffect(()=>{
    getUser();
  },[]);

  console.log(user);
  if(user){
    return(
      <MainApp/>
    )
  }else{
    return(
      <AuthApp/>
    )
  }
}
