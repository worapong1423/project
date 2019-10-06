import React, { Component } from 'react';
import {
        ActivityIndicator,
        StatusBar,
        StyleSheet,
        View
       } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Container,Header,Content,Item,Button,Input,Text} from "native-base";
import {  createAppContainer,createSwitchNavigator,} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import HotelScreen from './Screen/HotelScreen';
import ProfileScreen from './Screen/ProfileScreen';
import LoginScreen from './Screen/LoginScreen';
import AddHotelScreen from './Screen/AddHotelScreen';
import Order from './Screen/Order';
import EditedRate from './Screen/EditedRate';
import TabOrderList from'./Screen/TabOrderList';
import AddListScreen from './Screen/AddListScreen';
import SignatureScreen from './Screen/SignatureScreen';
import AuthLoadingScreen from './Screen/AuthLoadingScreen'



const AppStack = createStackNavigator({
    Home : HotelScreen,
    AddList : AddListScreen,
    EditedRate  : EditedRate ,
    Order : Order,
    Profile : ProfileScreen,
    AddHotelScreen : AddHotelScreen,
    EditedRate  : EditedRate ,
    },
    {initialRouteName:'Home',
    },
    {
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

const AppDrawer = createDrawerNavigator(
  {
    //Login : LoginScreen,
    Home : HotelScreen,
    EditedRate  : EditedRate ,
   },
{
  //initialRouteName:'Home',
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
const MyApp = createAppContainer(AppDrawer);

const AuthStack = createStackNavigator({Login : LoginScreen});

export default createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading: AuthLoadingScreen,
        App: AppDrawer,
        Auth: AuthStack,
        Stack: AppStack
      },
      {
        initialRouteName: 'AuthLoading',
      }
    )
  );
  