import React, { Component } from 'react';
import {
        ActivityIndicator,
        StatusBar,
        StyleSheet,
        View
       } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Container,Header,Content,Item,Button,Input,Text} from "native-base";
import { createStackNavigator, createAppContainer,createSwitchNavigator} from 'react-navigation';
import HotelScreen from './Screen/HotelScreen';
import ProfileScreen from './Screen/ProfileScreen';
import LoginScreen from './Screen/LoginScreen';
import AddHotel from './Screen/AddHotel';
import Order from './Screen/Order';
import EditedRate from './Screen/EditedRate';
import AddList from './Screen/AddList';



const AppStack = createStackNavigator(
  {
    //Login : LoginScreen,
    Home : HotelScreen,
    Profile : ProfileScreen,
    addHotel : AddHotel,
    Order : Order,
    EditedRate  : EditedRate ,
    AddList  : AddList ,
},
{
  //initialRouteName:'Login',
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

class AuthLoadingScreen extends Component{
  /*constructor(props) {
    super(props);
    this._loadData();
  }*/
  componentDidMount() {
    this._loadData();
  }
    
  
  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }

  _loadData = async() =>{
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(isLoggedIn !== '1'? 'Auth' : 'App');
  }
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})

//const AppContainer = createAppContainer(AppNavigator);

/*export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}*/
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

