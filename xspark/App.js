import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import HomeScreen from './screens/HomeScreen.js';
import EditPostScreen from './screens/EditPostScreen.js';
import NewPostScreen from './screens/NewPostScreen.js';
import ShowPostScreen from './screens/ShowPostScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import WelcomeScreen from './screens/WelcomeScreen.js';
import SignupScreen from './screens/SignupScreen.js';
import OrderScreen from './screens/OrderScreen.js';


export default function App() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const retrievedUser = await AsyncStorage.getItem('user');
      console.log(retrievedUser)
      if (retrievedUser !== null) {
        setUser(JSON.parse(retrievedUser));
      } else {
        console.log("You're not logged in");
        setUser(false);
      }
    } catch (error) {
      console.log(error);
      setUser(false);
    }
  };


  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Welcome"}>
          <Stack.Screen
            name='Welcome'
            component={WelcomeScreen}
            screenOptions={{ headerShown: false }}
            options={{ title: 'Welcome' }} />

          <Stack.Screen
            name='Login'
            component={LoginScreen}
            screenOptions={{ headerShown: false }}
            options={{ title: 'Login' }} />

          <Stack.Screen
            name='Signup'
            component={SignupScreen}
            screenOptions={{ headerShown: false }}
            options={{ title: 'Sign up' }} />
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            initialParams={getUser}
            options={{ title: 'XSPARK' }} />

          <Stack.Screen
            name='EditPost'
            component={EditPostScreen}
            options={{ title: 'Edit' }} />

          <Stack.Screen
            name='NewPost'
            component={NewPostScreen}
            options={{ title: 'New' }} />

          <Stack.Screen
            name='ShowPost'
            component={ShowPostScreen}
            options={{ title: 'Post' }} />

          <Stack.Screen
            name='OrderScreen'
            component={OrderScreen}
            options={{ title: 'Place Order' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
