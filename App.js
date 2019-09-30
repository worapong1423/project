import React, { Component } from 'react';
import {Container,Header,Content,Item,Button,Input,Text} from "native-base";
import { createStackNavigator, createAppContainer} from 'react-navigation';
import HotelScreen from './Screen/HotelScreen';
import ProfileScreen from './Screen/ProfileScreen';
import LoginScreen from './Screen/LoginScreen';
import AddHotel from './Screen/AddHotel';
import Order from './Screen/Order';



export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const AppNavigator = createStackNavigator(
  {
    Login : LoginScreen,
    Home : HotelScreen,
    Profile : ProfileScreen,
    addHotel : AddHotel,
    Order : Order,
},
{
  initialRouteName:'Login',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#3F51B5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
}
);
const AppContainer = createAppContainer(AppNavigator);


