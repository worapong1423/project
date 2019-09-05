
import React, { Component } from 'react';
import { Button,View,TextInput,Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

 class Loginscreen extends React.Component {
  static navigationOptions ={
    title : 'Login'
  };
  render() {
    return (
      <View style={{flex:1 , alignItems: 'center',justifycontent:'center'}}>
        <Text>ชื่อผู้ใช้</Text><TextInput ></TextInput>
        <Text>รหัสผ่าน</Text><TextInput></TextInput>
        
        <Button title="login" onPress={()=> this.props.navigation.navigate('Home')}></Button>
      </View>
    )
  }
}

class Homescreen extends React.Component {
  
  render() {

    return (
      <View style={{flex:1 , alignItems: 'center',justifycontent:'center'}}>
        <Text>โรงแรม</Text>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Login :Loginscreen,
    Home :Homescreen,
},
{
  initialRouteName:'Login',
}
);



const AppContainer = createAppContainer(AppNavigator);
