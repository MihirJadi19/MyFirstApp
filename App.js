import React,{useEffect, useState} from 'react';
import { StyleSheet,Platform, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import Screen from './app/components/Screen';
// import * as ImagePicker from 'expo-image-picker';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import AppTextInput from './app/components/AppTextInput';
// import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  const [category, setCategory] =useState();
  // const Stack = createStackNavigator();
  // const StackNavigator =() =>(
  //   <Stack.Navigator>
  //     <Stack.Screen name="Tweets" component={Tweets} />
  //     <Stack.Screen name="Tweet Details" component={TweetsDetails} />
  //   </Stack.Navigator>
  // )
  return (
    
        <LoginScreen />
  );
}

const styles = StyleSheet.create({
  // container:{
  //   backgroundColor:"#f8f4f4",
  //   padding:20,
  //   paddingTop:100
  // }
});