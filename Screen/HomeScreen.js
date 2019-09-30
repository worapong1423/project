import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {

  render() {

    return (
      <View style={{flex:1 , alignItems: 'center',justifycontent:'center'}}>
        <Text>โรงแรม</Text>

        <Button title="Home" onPress={()=> this.props.navigation.navigate('Profile')}></Button>
      </View>
    );
  }
}
export default HomeScreen;

