import React, { Component } from 'react';
import {
        ActivityIndicator,
        StatusBar,
        StyleSheet,
        View
       } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Container,Header,Content,Item,Button,Input,Text,Root} from "native-base";
import {  createAppContainer,createSwitchNavigator,} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import HotelScreen from './src/Screen/HotelScreen';
import ProfileScreen from './src/Screen/ProfileScreen';
import LoginScreen from './src/Screen/LoginScreen';
import AddHotelScreen from './src/Screen/AddHotelScreen';
import Order from './src/Screen/Order';
import EditedRate from './src/Screen/EditedRate';
import TabOrderList from'./src/Screen/TabOrderList';
import AddListScreen from './src/Screen/AddListScreen';
import SignatureScreen from './src/Screen/SignatureScreen';
import AuthLoadingScreen from './src/Screen/AuthLoadingScreen'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';



/*const AppStack = createStackNavigator({
    Home : HotelScreen,
    AddList : AddListScreen,
    addHotel : AddHotel,
    EditedRate  : EditedRate ,

    },{initialRouteName:'Home',
    }

    );

const AppStack = createStackNavigator({
    Home : HotelScreen,
    AddList : AddListScreen,
    EditedRate  : EditedRate ,
    Order : Order,
    Profile : ProfileScreen,
    addHotel : AddHotel,
    EditedRate  : EditedRate ,
    Signature : SignatureScreen,
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
    Profile : ProfileScreen,

    Order : Order,


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
const AuthStack = createStackNavigator({Login : LoginScreen});



//const AppContainer = createAppContainer(AppNavigator);

/*export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
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
);*/

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      	<Root>
          <Router />
        </Root>
      </Provider>
    );
  }
}

export default App;