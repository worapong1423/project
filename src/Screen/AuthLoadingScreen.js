import React, { Component } from "react";
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View
   } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Container,Header,Content,Item,Button,Input,Text} from "native-base";


class AuthLoadingScreen extends Component{
    constructor(props) {
      super(props);
      this._bootstrapAsync();
    }
    /*componentDidMount() {
      this._loadData();
    }*/

    _bootstrapAsync = async() =>{
      const accessToken  = await AsyncStorage.getItem('accessToken');
      this.props.navigation.navigate (accessToken  ? 'App' : 'Auth');
    }
      
    
    render(){
      return(
        <View style={styles.container}>
          <ActivityIndicator/>
          <StatusBar barStyle="default"/>
        </View>
      );
    }
  
   
  }
  
  const styles =StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }
  });
  export default AuthLoadingScreen;
